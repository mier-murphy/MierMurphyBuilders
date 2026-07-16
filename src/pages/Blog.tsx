import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPosts, sanityImageUrl, type BlogPostSummary } from "@/lib/sanity";
import heroCraftsmanship from "@/assets/hero-craftsmanship.jpg";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getAllPosts()
      .then((data) => {
        if (isMounted) setPosts(data);
      })
      .catch((err) => {
        console.error("Failed to load blog posts:", err);
        if (isMounted) setError("We couldn't load blog posts right now. Please try again later.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCraftsmanship}
            alt="Mier & Murphy Builders blog"
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
              Insights & <span className="text-primary">Updates</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Tips, project stories, and expert advice on home renovation, restoration, and craftsmanship
              from the Mier & Murphy team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <p className="text-center font-sans text-muted-foreground py-20">Loading posts...</p>
          )}

          {error && (
            <p className="text-center font-sans text-destructive py-20">{error}</p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-center font-sans text-muted-foreground py-20">
              No blog posts yet — check back soon.
            </p>
          )}

          {!loading && !error && posts.length > 0 && (
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
                            alt={post.title}
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
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(post.publishedAt)}
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
                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-primary">
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