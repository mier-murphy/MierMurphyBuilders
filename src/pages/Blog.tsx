import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { sanityImageUrl, type BlogPostSummary } from "@/lib/sanity";
import heroImage from "@/assets/Blog Hero.webp";
import ogImage from "@/assets/blog-og.webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/blog`;

const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT = "Floor plans, a tape measure, and material samples on a work table";

const PAGE_TITLE = "Remodeling & Restoration Blog | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "Home remodeling tips, water damage restoration advice, and mold remediation guides for Thousand Oaks homeowners from Mier & Murphy Builders.";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// JSON-LD: Blog with its posts, plus a breadcrumb
const buildBlogSchema = (posts: BlogPostSummary[]) => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${PAGE_URL}#blog`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${PAGE_URL}/${post.slug}`,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(post.excerpt ? { description: post.excerpt } : {}),
  })),
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
  ],
};

const Blog = () => {
  const { posts, failed } = useLoaderData() as {
    posts: BlogPostSummary[];
    failed: boolean;
  };
  const error = failed
    ? "We couldn't load blog posts right now. Please try again later."
    : null;

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={OG_IMAGE_ALT} />
        <meta property="og:site_name" content="Mier & Murphy Builders" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

        <script type="application/ld+json">{JSON.stringify(buildBlogSchema(failed ? [] : posts))}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">OUR BLOG</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white max-w-2xl">
              Remodeling & <span className="text-primary">Restoration Blog</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Practical advice on remodeling, water damage, and mold for homeowners in Thousand Oaks and
              Ventura County, from the Mier & Murphy team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="sr-only">Latest articles</h2>
          {error && (
            <p className="text-center font-sans text-destructive py-20">{error}</p>
          )}

          {!error && posts.length === 0 && (
            <p className="text-center font-sans text-muted-foreground py-20">
              No blog posts yet — check back soon.
            </p>
          )}

          {!error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => {
                const imageUrl = sanityImageUrl(post.mainImage, 800);
                return (
                  <ScrollReveal key={post._id} delay={i * 0.05}>
                    <Link to={`/blog/${post.slug}`} className="luxury-card group cursor-pointer block h-full">
                      <div className="relative h-56 overflow-hidden">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                        {post.categories?.[0] && (
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <span className="inline-block px-3 py-1 glass rounded-full text-xs font-sans text-primary mb-2">
                              {post.categories[0]}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        {post.publishedAt && (
                          <div className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground mb-2">
                            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                          </div>
                        )}
                        <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-primary" aria-hidden="true">
                          Read More
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;