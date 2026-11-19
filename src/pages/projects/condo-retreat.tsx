import { ArrowRight, Check, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import heroImage from "@/assets/condo-retreat/condo-retreat-hero.avif";
import ogImage from "@/assets/condo-retreat/condo-retreat-og.webp";
import after1 from "@/assets/condo-retreat/condo-retreat-1.avif";
import after2 from "@/assets/condo-retreat/condo-retreat-2.avif";
import after3 from "@/assets/condo-retreat/condo-retreat-3.avif";
import after4 from "@/assets/condo-retreat/condo-retreat-4.avif";
import before1 from "@/assets/condo-retreat/condo-retreat-5.avif";
import before2 from "@/assets/condo-retreat/condo-retreat-6.avif";
import before3 from "@/assets/condo-retreat/condo-retreat-7.avif";
import before4 from "@/assets/condo-retreat/condo-retreat-8.avif";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/projects/condo-retreat`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT =
  "Remodeled Los Angeles condo kitchen with a marble-look countertop and tile backsplash";

const PAGE_TITLE = "Los Angeles Condo Remodel | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "See how Mier & Murphy Builders remodeled a Los Angeles condo with two renovated bathrooms, new kitchen countertops, backsplash tile, and HOA coordination.";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
    { "@type": "ListItem", position: 3, name: "Los Angeles Condo Remodel", item: PAGE_URL },
  ],
};

const projectScope = [
  "Full renovation of both bathrooms",
  "New kitchen countertops and backsplash tile",
  "Fresh interior paint throughout",
  "Dedicated electrical circuit for a new washer and dryer",
  "Permitting and HOA approval managed",
  "All required inspections coordinated",
];

type GalleryImage = {
  src: string;
  alt: string;
};

const afterImages: GalleryImage[] = [
  { src: after1, alt: "Remodeled kitchen with a marble-look countertop, tile backsplash, and stainless steel appliances" },
  { src: after2, alt: "Renovated bathroom with green walls, a double vanity, and oval mirrors" },
  { src: after3, alt: "Renovated bathroom with a glass walk-in shower and freestanding tub" },
  { src: after4, alt: "Renovated second bathroom with a marble-look tile shower and glass door" },
];

const beforeImages: GalleryImage[] = [
  { src: before1, alt: "Small tiled shower with a framed glass door before the remodel" },
  { src: before2, alt: "Condo kitchen before the remodel with a light countertop and wood cabinets" },
  { src: before3, alt: "Bathroom before the remodel with a framed shower and built-in tub" },
  { src: before4, alt: "Bathroom before the remodel with a dark countertop and wood vanity" },
];

const GalleryGrid = ({ images }: { images: GalleryImage[] }) => (
  <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 mb-14">
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

export default function CondoRetreatProject() {
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
            <span aria-current="page">Los Angeles Condo Remodel</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[#587b37] uppercase tracking-widest text-sm font-semibold mb-4">
                Urban Condo Remodel
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Los Angeles Condo Remodel With Clean Lines and Color
              </h1>
              <p className="text-stone-600 leading-relaxed">
                This urban condo remodel included full renovations of both bathrooms and the
                installation of new kitchen countertops and backsplash tile. Our team collaborated
                closely with the homeowner to source materials, refine the design, and bring their
                vision to life.
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
              We managed the entire permitting and HOA approval process, coordinated all required
              inspections, and ensured timely completion of the living space. Additional upgrades
              included fresh interior paint throughout and a dedicated electrical circuit for a new
              washer and dryer, delivering a refreshed, functional, and beautifully updated home.
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
              Planning a Condo <span className="text-primary">Remodel?</span>
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8">
              Tell us what you want to change. We will walk through the scope, including any HOA
              requirements, and prepare a free estimate. You can also explore our{" "}
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