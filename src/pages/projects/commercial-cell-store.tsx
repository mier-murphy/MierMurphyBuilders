import { ArrowRight, Check, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import heroImage from "@/assets/commercial-cell-store/commercial-cell-store-hero.avif";
import ogImage from "@/assets/commercial-cell-store/commercial-cell-store-og.webp";
import after1 from "@/assets/commercial-cell-store/commercial-cell-store-1.avif";
import after2 from "@/assets/commercial-cell-store/commercial-cell-store-2.avif";
import before1 from "@/assets/commercial-cell-store/commercial-cell-store-5.avif";
import before2 from "@/assets/commercial-cell-store/commercial-cell-store-6.avif";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/projects/commercial-cell-store`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT =
  "Completed cellphone repair store with a service counter, display wall, and acoustic ceiling";

const PAGE_TITLE = "Cellphone Repair Store Build-Out | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "See how Mier & Murphy Builders completed a cellphone repair store tenant improvement, from architectural planning and city submittals to final finishes.";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
    { "@type": "ListItem", position: 3, name: "Cellphone Repair Store Build-Out", item: PAGE_URL },
  ],
};

const projectScope = [
  "Architectural planning and city submittals",
  "New framing and electrical work",
  "Suspended acoustic ceiling with integrated lighting",
  "Upgraded power distribution for commercial equipment",
  "Interior privacy glazing",
  "Modern storefront system",
  "Custom display cabinets",
];

type GalleryImage = {
  src: string;
  alt: string;
};

const afterImages: GalleryImage[] = [
  { src: after1, alt: "Finished store interior with a wood service counter, display wall, and privacy glass" },
  { src: after2, alt: "Finished store wall with framed digital displays and privacy glass" },
];

const beforeImages: GalleryImage[] = [
  { src: before1, alt: "Narrow commercial space during construction with drywall and an open ceiling" },
  { src: before2, alt: "Exposed ceiling framing and insulation before the new ceiling was installed" },
];

const GalleryGrid = ({ images }: { images: GalleryImage[] }) => (
  <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 px-6 mb-14">
    {images.map((image) => (
      <div key={image.src} className="aspect-square bg-stone-200 rounded overflow-hidden">
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

export default function CommercialCellStoreProject() {
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
            <span aria-current="page">Cellphone Repair Store Build-Out</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[#587b37] uppercase tracking-widest text-sm font-semibold mb-4">
                Commercial Tenant Improvement
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Cellphone &amp; Electronics Repair Store Build-Out
              </h1>
              <p className="text-stone-600 leading-relaxed">
                Our team provided full support throughout this commercial tenant improvement
                project, from architectural planning and city submittals to construction and final
                finishes.
              </p>
            </div>
            <div className="bg-stone-200 aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt={OG_IMAGE_ALT}
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
              The scope included new framing and electrical work, a suspended acoustic ceiling with
              integrated lighting, and upgraded power distribution for commercial equipment. We also
              installed interior privacy glazing, a modern storefront system, and custom display
              cabinets. The result is a clean, efficient retail space designed for high-traffic use
              and long-term durability.
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
          <GalleryGrid images={afterImages} />

          <h3 className="text-2xl text-center mb-6 text-[#587b37]">Before</h3>
          <GalleryGrid images={beforeImages} />
        </section>

        <section className="py-20 px-6 text-center" style={{ background: "hsl(220, 20%, 15%)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Planning a Commercial <span className="text-primary">Build-Out?</span>
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8">
              Tell us about your space and opening timeline. We will walk through the scope and
              prepare a free estimate. You can also explore our{" "}
              <Link
                to="/services/commercial-tenant-improvement"
                className="text-white underline underline-offset-4"
              >
                commercial tenant improvement services
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