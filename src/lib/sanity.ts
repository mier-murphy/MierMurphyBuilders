import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";

if (!projectId) {
  console.warn(
    "[sanity] VITE_SANITY_PROJECT_ID is not set. Add it to a .env file at the project root. See .env.example."
  );
}

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const imageBuilder = projectId
  ? createImageUrlBuilder({
      projectId,
      dataset,
    })
  : null;

export interface SanityImage {
  asset?: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface BlogPostSeo {
  title?: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
  image?: SanityImage;
}

export interface BlogPostSummary {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  categories?: string[];
  author?: {
    name?: string;
    image?: SanityImage;
  };
  seo?: BlogPostSeo;
}

export interface BlogPost extends BlogPostSummary {
  body?: any[];
}

export function sanityImageUrl(
  source?: SanityImage | null,
  width = 1200
): string | null {
  if (!source?.asset?._ref || !imageBuilder) return null;

  return imageBuilder.image(source).width(width).auto("format").url();
}

const summaryProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "categories": categories[]->title,
  author->{
    name,
    image
  },
  seo {
    title,
    description,
    keywords,
    noIndex,
    image
  }
}`;

const detailProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  body,
  "categories": categories[]->title,
  author->{
    name,
    image
  },
  seo {
    title,
    description,
    keywords,
    noIndex,
    image
  }
}`;

function requireSanityClient() {
  if (!sanityClient) {
    throw new Error(
      "Sanity is not configured. Copy .env.example to .env and set VITE_SANITY_PROJECT_ID."
    );
  }

  return sanityClient;
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  const client = requireSanityClient();

  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) ${summaryProjection}`
  );
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const client = requireSanityClient();

  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] ${detailProjection}`,
    { slug }
  );
}

export async function getRelatedPosts(
  excludeId: string,
  limit = 3
): Promise<BlogPostSummary[]> {
  const client = requireSanityClient();

  return client.fetch(
    `*[
      _type == "post" &&
      _id != $excludeId
    ] | order(publishedAt desc)[0...$limit] ${summaryProjection}`,
    {
      excludeId,
      limit,
    }
  );
}

export function estimateReadingTime(body?: any[]): number {
  if (!Array.isArray(body)) return 1;

  const wordCount = body.reduce((count, block) => {
    if (block?._type !== "block" || !Array.isArray(block.children)) {
      return count;
    }

    const text = block.children
      .map((child: any) => child.text || "")
      .join(" ");

    return count + text.split(/\s+/).filter(Boolean).length;
  }, 0);

  return Math.max(1, Math.round(wordCount / 200));
}