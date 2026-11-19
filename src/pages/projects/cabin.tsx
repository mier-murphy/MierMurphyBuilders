import { ArrowRight, Check, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import heroImage from "@/assets/cabin/cabin-hero.avif";
import ogImage from "@/assets/cabin/cabin-og.webp";
import after1 from "@/assets/cabin/cabin-1.avif";
import after2 from "@/assets/cabin/cabin-2.avif";
import after3 from "@/assets/cabin/cabin-3.avif";
import before1 from "@/assets/cabin/cabin-4.avif";
import before2 from "@/assets/cabin/cabin-5.avif";
import before3 from "@/assets/cabin/cabin-6.avif";
import before4 from "@/assets/cabin/cabin-8.avif";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/projects/cabin`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT =
  "Remodeled Big Bear cabin living area with wood flooring and sliding glass doors";
const HERO_IMAGE_ALT = "Big Bear cabin exterior with a steep roof, pine trees, and snow";

const PAGE_TITLE = "Big Bear Cabin Remodel | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "See how Mier & Murphy Builders remodeled a Big Bear cabin with Level 5 drywall, new flooring, dual-glazed windows, and fully remodeled bathrooms.";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
    { "@type": "ListItem", position: 3, name: "Big Bear Cabin Remodel", item: PAGE_URL },
  ],
};

const projectScope = [
  "Original wall panels removed and replaced with smooth Level 5 drywall",
  "Complete interior repaint",
  "Old carpet replaced with durable new flooring",
  "New dual-glazed exterior windows",
  "Installation support for prefabricated kitchen cabinets",
  "Bathrooms fully remodeled with new tub and shower systems",
  "Cabinetry updated throughout",
];

type GalleryImage = {
  src: string;
  alt: string;
};

const afterImages: GalleryImage[] = [
  { src: after1, alt: "Cabin exterior with a steep roof surrounded by pine trees and snow" },
  { src: after2, alt: "Long wood deck with a bench, grill, and mountain views" },
  { src: after3, alt: "Remodeled open living area with wood flooring, sliding glass doors, and a loft railing" },
];

const beforeImages: GalleryImage[] = [
  { src: before1, alt: "Cabin entry before the remodel with wood-paneled walls and carpet" },
  { src: before2, alt: "Living room before the remodel with wood paneling and a stone fireplace" },
  { src: before3, alt: "Game room before the remodel with a pool table, wood paneling, and carpet" },
  { src: before4, alt: "Living room before the remodel with a vaulted wood ceiling and carpet" },
];

const GalleryGrid = ({
  images,
  gridClassName,
  imageClassName,
}: {
  images: GalleryImage[];
  gridClassName: string;
  imageClassName: string;
}) => (
  <div className={`max-w-7xl mx-auto grid gap-4 px-6 mb-14 ${gridClassName}`}>
    {images.map((image) => (
      <div key={image.src} className={`bg-stone-200 rounded overflow-hidden ${imageClassName}`}>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    ))}
  </div>
);

export default function CabinProject() {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="author" content="Mier & Murphy Builders" />
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

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white font-sans text-stone-800">
        <section className="max-w-7xl mx-auto pt-36 pb-16 px-6">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-600">
            <Link to="/projects" className="hover:text-[#587b37] underline-offset-4 hover:underline">
              Projects
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Big Bear Cabin Remodel</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[#587b37] uppercase tracking-widest text-sm font-semibold mb-4">
                Mountain Cabin Remodel
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Transforming a Historic Big Bear Cabin Into a Sophisticated Living Space
              </h1>
              <p className="text-stone-600 leading-relaxed">
                This mountain cabin underwent a full interior transformation. We removed the original
                builder-grade wall panels, installed drywall finished to a smooth Level 5 surface, and
                completed a full interior repaint.
              </p>
            </div>
            <div className="bg-stone-200 aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt={HERO_IMAGE_ALT}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl mb-5">About the Project</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              The old carpeting was replaced with durable new flooring, and new dual-glazed exterior
              windows were installed to improve energy efficiency and comfort. Our team also assisted
              with installing prefabricated kitchen cabinets, fully remodeled the bathrooms with new
              tub and shower systems, and updated cabinetry throughout, bringing a refreshed, modern
              look to this cozy Big Bear retreat.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-5">What We Completed</h2>
            <ul className="space-y-3">
              {projectScope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-700">
                  <Check className="w-5 h-5 mt-0.5 text-[#587b37] shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 bg-stone-50">
          <h2 className="text-4xl text-center mb-12 px-6">Project Gallery</h2>

          <h3 className="text-2xl text-center mb-6 text-[#587b37]">After</h3>
          <GalleryGrid
            images={afterImages}
            gridClassName="grid-cols-1 md:grid-cols-3"
            imageClassName="aspect-[3/2]"
          />

          <h3 className="text-2xl text-center mb-6 text-[#587b37]">Before</h3>
          <GalleryGrid
            images={beforeImages}
            gridClassName="grid-cols-2 lg:grid-cols-4"
            imageClassName="aspect-[3/4]"
          />
        </section>

        <section className="py-20 px-6 text-center" style={{ background: "hsl(220, 20%, 15%)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Planning a Home <span className="text-primary">Renovation?</span>
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8">
              Tell us what you want to change. We will walk through the scope and prepare a free
              estimate. You can also explore our{" "}
              <Link
                to="/services/bathroom-kitchen-remodeling"
                className="text-white underline underline-offset-4"
              >
                bathroom and kitchen remodeling services
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={PHONE_HREF}
                className="border border-white/30 text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}