import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, Facebook, Linkedin, Link2, Twitter } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { toast } from "sonner";
import {
  getPostBySlug,
  getRelatedPosts,
  sanityImageUrl,
  estimateReadingTime,
  type BlogPost as BlogPostType,
  type BlogPostSummary,
} from "@/lib/sanity";
import ScrollReveal from "@/components/ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const initials = (name?: string) =>
  name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "?";

// Renders Sanity's rich text (Portable Text) using the site's typography classes
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="font-serif text-2xl md:text-3xl font-bold mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="font-serif text-xl md:text-2xl font-bold mt-8 mb-3">{children}</h3>,
    normal: ({ children }) => (
      <p className="font-sans text-[15px] text-foreground/80 leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-5 italic text-foreground/70 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-5 space-y-2 font-sans text-[15px] text-foreground/80">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-5 space-y-2 font-sans text-[15px] text-foreground/80">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:text-primary/80"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
  },
  types: {
    image: ({ value }) => {
      const url = sanityImageUrl(value, 1400);
      if (!url) return null;
      return (
        <figure className="my-8">
          <img src={url} alt={value?.alt || ""} className="w-full rounded-xl" loading="lazy" />
          {value?.caption && (
            <figcaption className="mt-2 text-center font-sans text-xs text-muted-foreground italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

const RelatedPostCard = ({ post }: { post: BlogPostSummary }) => {
  const imageUrl = sanityImageUrl(post.mainImage, 600);
  return (
    <Link to={`/blog/${post.slug}`} className="luxury-card group cursor-pointer block h-full">
      <div className="relative h-40 overflow-hidden">
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
      </div>
      <div className="p-4">
        {post.publishedAt && (
          <p className="font-sans text-xs text-muted-foreground mb-1.5">{formatDate(post.publishedAt)}</p>
        )}
        <h3 className="font-serif text-base font-bold group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
      </div>
    </Link>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    getPostBySlug(slug)
      .then(async (data) => {
        if (!isMounted) return;
        if (!data) {
          setNotFound(true);
          return;
        }
        setPost(data);
        try {
          const related = await getRelatedPosts(data._id, 3);
          if (isMounted) setRelatedPosts(related);
        } catch {
          // Related posts are a nice-to-have; a failure here shouldn't block the article itself
        }
      })
      .catch((err) => {
        console.error("Failed to load blog post:", err);
        if (isMounted) setNotFound(true);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="font-sans text-muted-foreground">Loading post...</p>
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  if (!post) return null;

  const authorImageUrl = sanityImageUrl(post.author?.image, 100);
  const readingTime = estimateReadingTime(post.body);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Couldn't copy the link — try copying it from the address bar.");
    }
  };

  const submitComment = () => {
    if (!comment.trim()) return;
    toast.info("Comments aren't connected yet — this is a preview only.");
    setComment("");
  };

  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          {/* META ROW */}
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-9 w-9">
              {authorImageUrl && <AvatarImage src={authorImageUrl} alt={post.author?.name || ""} />}
              <AvatarFallback className="bg-primary/15 text-primary font-sans text-xs font-bold">
                {initials(post.author?.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2 font-sans text-sm text-muted-foreground flex-wrap">
              {post.author?.name && <span className="font-semibold text-foreground">{post.author.name}</span>}
              {post.publishedAt && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.publishedAt)}
                  </span>
                </>
              )}
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {readingTime} min read
              </span>
            </div>
          </div>

          {/* CATEGORY + TITLE */}
          {post.categories?.[0] && (
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-sans font-semibold text-primary mb-4">
              {post.categories[0]}
            </span>
          )}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-8 leading-[1.2]">
            {post.title}
          </h1>

          {/* FEATURED IMAGE */}
          {post.mainImage && (
            <img
              src={sanityImageUrl(post.mainImage, 1400) || undefined}
              alt={post.title}
              className="w-full rounded-xl mb-10"
              loading="eager"
            />
          )}

          {/* BODY */}
          {post.body && <PortableText value={post.body} components={portableTextComponents} />}

          {/* SHARE ROW */}
          <div className="flex items-center gap-3 mt-10 pt-6 border-t border-border">
            <span className="font-sans text-xs text-muted-foreground mr-1">Share:</span>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={copyLink}
              aria-label="Copy link"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Link2 className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              Get a Free Estimate
            </Link>
          </div>
        </ScrollReveal>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <ScrollReveal>
            <div className="mt-20 pt-10 border-t border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl font-bold">More Insights</h2>
                <Link to="/blog" className="font-sans text-sm font-semibold text-primary hover:text-primary/80">
                  See All
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedPosts.map((related) => (
                  <RelatedPostCard key={related._id} post={related} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* COMMENTS (preview only — not yet connected to a backend) */}
        <ScrollReveal>
          <div className="mt-16 pt-10 border-t border-border">
            <h2 className="font-serif text-xl font-bold mb-4">Comments</h2>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              rows={3}
              className="w-full rounded-xl border border-border bg-card p-4 font-sans text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="font-sans text-xs text-muted-foreground">
                Comments preview only — not yet saved or published anywhere.
              </p>
              <button
                onClick={submitComment}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-sans text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BlogPost;