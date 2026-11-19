import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";

import heroImage from "@/assets/Projects Hero.webp";
import ogImage from "@/assets/projects-og.webp";
import CabinRemodel from "@/assets/cabin/cabin-hero.avif";
import CondoRemodel from "@/assets/condo-retreat/condo-retreat-hero.avif";
import CommercialStore from "@/assets/commercial-cell-store/commercial-cell-store-hero.avif";
import PorterRanch from "@/assets/ranch/ranch-hero.avif";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/projects`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT = "Four Mier & Murphy Builders projects: two kitchen remodels, a cabin, and a retail store build-out";

const PAGE_TITLE = "Remodeling & Build-Out Projects | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "See recent Mier & Murphy Builders projects: home and condo remodels, a Big Bear cabin renovation, and a retail store build-out in Southern California.";

type Category = "Residential" | "Commercial";
const categories: Array<"All" | Category> = ["All", "Residential", "Commercial"];

const projects: Array<{
  slug: string;
  title: string;
  location: string;
  category: Category;
  image: string;
  alt: string;
  sqft: string;
  timeline: string;
}> = [
  {
    slug: "ranch",
    title: "Porter Ranch Home Renovation",
    location: "Porter Ranch, CA",
    category: "Residential",
    image: PorterRanch,
    alt: "Renovated Porter Ranch kitchen with dark cabinets and a white countertop island",
    sqft: "800",
    timeline: "2 weeks",
  },
  {
    slug: "condo-retreat",
    title: "Los Angeles Condo Remodel",
    location: "Los Angeles, CA",
    category: "Residential",
    image: CondoRemodel,
    alt: "Remodeled condo kitchen with wood cabinets and a geometric tile backsplash",
    sqft: "4,800",
    timeline: "8 weeks",
  },
  {
    slug: "cabin",
    title: "Big Bear Cabin Remodel",
    location: "Big Bear, CA",
    category: "Residential",
    image: CabinRemodel,
    alt: "Big Bear cabin exterior with wood siding and pine trees",
    sqft: "3,200",
    timeline: "6 weeks",
  },
  {
    slug: "commercial-cell-store",
    title: "Cellphone Repair Store Build-Out",
    location: "Commercial tenant improvement",
    category: "Commercial",
    image: CommercialStore,
    alt: "Finished cellphone repair store with a service counter and display wall",
    sqft: "450",
    timeline: "4 weeks",
  },
];

// JSON-LD: CollectionPage listing each project page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}/projects/${p.slug}`,
    })),
  },
};

// JSON-LD: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Projects", item: PAGE_URL },
  ],
};

const Projects = () => {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Helmet>
        {/* Primary meta tags */}
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="author" content="Mier & Murphy Builders" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Geo tags */}
        <meta name="geo.placename" content="Thousand Oaks" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.position" content="34.1706;-118.8376" />
        <meta name="ICBM" content="34.1706, -118.8376" />

        {/* Open Graph */}
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

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">OUR WORK</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Recent <span className="text-primary">Remodeling and Build-Out Projects</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              A look at recent home remodels, renovations, and commercial build-outs we have completed across Southern
              California, with the scope of work for each job.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="sr-only">Project gallery</h2>

          {/* Filter Bar */}
          <div className="flex items-center justify-center gap-3 mb-16 flex-wrap" role="group" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-6 py-2.5 rounded-lg font-sans text-sm font-medium transition-all duration-300 ${
                  filter === cat ? "bg-primary text-primary-foreground" : "glass text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.05}>
                <Link to={`/projects/${project.slug}`} className="luxury-card group cursor-pointer block">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-sans text-xs text-primary tracking-wider uppercase mb-2">View Project</p>
                        <p className="font-sans text-sm text-muted-foreground">
                          {project.sqft} sq ft • {project.timeline}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-3 py-1 glass rounded-full text-xs font-sans text-primary mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold">{project.title}</h3>
                      <p className="flex items-center gap-1 font-sans text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        {project.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Let's Start <span className="text-primary">Your Project</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Every project here started with a conversation. Tell us what you have in mind and we will give you a free
              estimate with a clear scope and timeline.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
            >
              Get a Free Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Projects;