import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AreaPageTemplate, { type AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/area91.jpeg";

const SITE_URL = "https://mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/90001`;
const OG_IMAGE = `${SITE_URL}/service-painting-restoration-los-angeles.jpg`;

const PAGE_TITLE =
  "Painting, Restoration & Renovation in Los Angeles (90001) | Mier & Murphy Builders";

const PAGE_DESCRIPTION =
  "Premium painting, water damage restoration, mold remediation, and custom home renovation services in Los Angeles, CA. Trusted contractor serving the 90001 area.";

const PAGE_KEYWORDS =
  "painting contractor los angeles; water damage restoration los angeles; mold remediation los angeles; home renovation 90001; custom home renovations los angeles";

const data: AreaPageData = {
  zipCode: "90001",
  cityName: "Los Angeles",
  tagline: "Los Angeles' Most Trusted Contractor",
  heroHeadline: "Premium Painting, Restoration & Renovation Services in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription:
    "Los Angeles is home to everything from historic residences and luxury estates to modern homes and investment properties. Mier & Murphy provides dependable painting, restoration, and renovation services across Los Angeles with the craftsmanship, professionalism, and responsiveness homeowners expect.",

  services: [
    {
      title: "Interior Painting",
      description:
        "Beautiful interior finishes for homes throughout Los Angeles. Whether you're refreshing a condo, updating a family home, or preparing a luxury property for sale, we deliver clean results with minimal disruption.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Exterior Painting",
      description:
        "Los Angeles homes face constant exposure to sun, pollution, and changing weather. Our exterior painting systems are designed to protect surfaces while maintaining lasting curb appeal.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage Restoration",
      description:
        "Water emergencies require immediate action. Our certified restoration team responds quickly to minimize damage and begin the recovery process before problems become more expensive.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Mold Remediation",
      description:
        "We provide complete mold inspection, containment, removal, and restoration services to safely return your home to healthy living conditions.",
      icon: <Bug className="w-6 h-6 text-primary" />,
    },
    {
      title: "Custom Home Renovations",
      description:
        "Whether you're modernizing a single room or remodeling an entire home, we bring experienced project management and skilled craftsmanship to every renovation.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Specialty Finishes",
      description:
        "From decorative wall textures to custom plaster and premium architectural coatings, we create finishes that complement Los Angeles' diverse home styles.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Experienced Across Los Angeles Homes",
    paragraphs: [
      "No two neighborhoods in Los Angeles are alike. Historic homes, hillside properties, modern construction, and luxury residences all require different materials, techniques, and planning.",
      "Our team has experience working on a wide range of residential properties throughout Southern California. We understand local permitting requirements, varying architectural styles, and the importance of maintaining both craftsmanship and schedules.",
      "Whether your project is a simple repaint or a complete renovation, we approach every home with the same attention to detail, respect, and commitment to quality.",
    ],
  },

  neighborhoodHighlights: [
    "Brentwood",
    "Pacific Palisades",
    "Bel Air",
    "Sherman Oaks",
    "Studio City",
    "Encino",
    "Hollywood Hills",
    "West Los Angeles",
  ],

  faqs: [
    {
      question: "Do you work on older and historic homes?",
      answer:
        "Yes, we regularly work on historic residences and use materials and techniques suited to preserving original details.",
    },
    {
      question: "Can you complete projects while the home is occupied?",
      answer:
        "Yes. We phase our work and use containment methods so daily life is disrupted as little as possible.",
    },
    {
      question: "Do you coordinate with designers and property managers?",
      answer:
        "Yes, we're comfortable working from designer specs and coordinating with third-party project managers.",
    },
  ],

  nearbyAreas: [
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Beverly Hills", zip: "", href: "/areas/" },
    { name: "Santa Monica", zip: "", href: "/areas/" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${PAGE_URL}/#localbusiness`,
    name: "Mier & Murphy Builders – Los Angeles 90001",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    telephone: "+1-805-998-9082",
    image: OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001",
      addressCountry: "US",
    },
  },
};

const Area90001 = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content={PAGE_KEYWORDS} />
        <meta name="author" content="Mier & Murphy Builders" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.position" content="33.9731;-118.2479" />
        <meta name="ICBM" content="33.9731, -118.2479" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta
          property="og:image:alt"
          content="Painting and restoration project in Los Angeles, California"
        />
        <meta property="og:site_name" content="Mier & Murphy Builders" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Painting and restoration project in Los Angeles, California"
        />

        <script type="application/ld+json">
          {JSON.stringify(data.jsonLd)}
        </script>
      </Helmet>

      <AreaPageTemplate data={data} />
    </>
  );
};

export default Area90001;