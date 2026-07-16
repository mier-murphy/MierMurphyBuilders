import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// These come from a Sanity project you create at https://www.sanity.io/manage
// Set them in a .env file at the project root (see .env.example):
//   VITE_SANITY_PROJECT_ID=your_project_id
//   VITE_SANITY_DATASET=production
//   VITE_SANITY_API_VERSION=2024-01-01
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";

if (!projectId) {
  // eslint-disable-next-line no-console
  console.warn(
    "[sanity] VITE_SANITY_PROJECT_ID is not set. Add it to a .env file at the project root. See .env.example."
  );
}

// Guard against crashing the whole app when .env hasn't been set up yet.
// @sanity/client throws synchronously if projectId is missing/invalid, and
// since this module is imported at the top of Blog/BlogPost pages (which
// App.tsx imports eagerly), an unguarded throw here would take down every
// route, not just the blog pages.
export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // fast, cached reads — fine for public blog content
    })
  : null;

// The official image URL builder — handles every asset ref format, crops,
// hotspots, and edge cases correctly. Replaces an earlier hand-rolled regex
// version that could fail to match certain asset ref shapes (which is why
// body images weren't rendering while the main image happened to work).
const imageBuilder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

export function sanityImageUrl(source?: SanityImage | null, width = 1200): string | null {
  if (!source?.asset?._ref || !imageBuilder) return null;
  return imageBuilder.image(source).width(width).auto("format").url();
}

export interface SanityImage {
  asset?: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
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
}

export interface BlogPost extends BlogPostSummary {
  body?: any; // Portable Text array — rendered with @portabletext/react
}

// GROQ projection used by the list page (no body — keeps the list query light)
const summaryProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "categories": categories[]->title,
  author->{ name, image }
}`;

// Separate projection for the single-post page, with body included at the
// top level. NOTE: this used to be built via summaryProjection.replace("}", ", body }"),
// but String.replace() only replaces the FIRST "}" it finds — which was the
// closing brace of the nested author->{ name, image } projection, not the
// outer one. That silently nested `body` inside the author projection
// instead of the post's top-level fields, so post.body was always undefined.
// Writing it out explicitly avoids that class of bug entirely.
const detailProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  body,
  "categories": categories[]->title,
  author->{ name, image }
}`;

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  if (!sanityClient) {
    throw new Error(
      "Sanity is not configured. Copy .env.example to .env and set VITE_SANITY_PROJECT_ID."
    );
  }
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) ${summaryProjection}`
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    throw new Error(
      "Sanity is not configured. Copy .env.example to .env and set VITE_SANITY_PROJECT_ID."
    );
  }
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] ${detailProjection}`,
    { slug }
  );
}

// Used for the "More Insights" section on the post detail page — reuses the
// same summary data already fetched for the list page, just excludes the
// post currently being viewed and caps the count.
export async function getRelatedPosts(excludeId: string, limit = 3): Promise<BlogPostSummary[]> {
  const all = await getAllPosts();
  return all.filter((p) => p._id !== excludeId).slice(0, limit);
}

// Estimates reading time from the post's actual Portable Text word count
// (average adult reading speed ~200 wpm). This is a real, derived number —
// not a placeholder — so it stays honest even though there's no analytics
// backend wired up yet.
export function estimateReadingTime(body?: any[]): number {
  if (!Array.isArray(body)) return 1;
  const wordCount = body.reduce((count, block) => {
    if (block?._type !== "block" || !Array.isArray(block.children)) return count;
    const text = block.children.map((child: any) => child.text || "").join(" ");
    return count + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(1, Math.round(wordCount / 200));
}