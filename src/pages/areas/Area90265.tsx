import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/MALIBU (90265).webp";

import { Helmet } from "react-helmet-async";


const SITE_URL = "https://mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/90001`;
const OG_IMAGE = `${SITE_URL}/service-painting-restoration-los-angeles.jpg`;

const PAGE_TITLE =
  "dksnfgjkndfjkgnkdfngksdfngksdfngk(90001) | Mier & Murphy Builders";

const PAGE_DESCRIPTION =
  "ftjgjghjghjdghjghjge restoration, mold remediation, and custom home renovation services in Los Angeles, CA. Trusted contractor serving the 90001 area.";

const PAGE_KEYWORDS =
  "jhkljlkjhljklj conhjkhjktractor los angeles; water damage restoration los angeles; mold remediation los angeles; home renovation 90001; custom home renovations los angeles";

const data: AreaPageData = {
  zipCode: "90265",
  cityName: "Malibu",
  tagline: "Premium & Extended Service Area",
  heroHeadline: "Stucco, Repair, and Restoration Contractor Serving",
  tier: "premium",
  heroImage: projectExterior,
  heroDescription:
    "Our work along the PCH corridor in Malibu is some of the most weather-exposed we take on. Salt air, coastal permitting, and ocean-facing structures all shape how we approach a Malibu project differently than one further inland.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Coastal permitting adds an extra step to Malibu remodels, and we build that timeline into the project from the very first estimate.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Salt air and coastal humidity make proper drying even more critical in Malibu, so we do not rush the extraction and drying phase here.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "We completed a stucco repair and waterproofing project along the PCH in Malibu, and that coastal-weather resistance is now built into how we approach every Malibu job.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Ocean-facing decks in Malibu take more of a beating than inland properties, so we pay close attention to waterproofing and flashing on every repair.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "The small retail strips along the Malibu coastline sometimes need quick, focused build-outs that do not interrupt foot traffic.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Malibu Property Owners Choose Mier & Murphy",
    paragraphs: [
      "We have completed a real stucco repair and waterproofing project along the PCH in Malibu, so coastal weather resistance is not a theory for us, it is part of our process.",
      "Salt air, ocean exposure, and coastal permitting all change how a project runs in Malibu, and we plan for that from the first estimate rather than mid-project.",
      "Every material choice for a Malibu project gets weighed against coastal wear, not just cost or appearance.",
    ],
  },

  neighborhoodHighlights: [
    "Pacific Coast Highway corridor",
    "Point Dume area",
    "Malibu Colony area",
    "Malibu Canyon area",
  ],

  faqs: [
    {
      question: "Have you completed real work in Malibu?",
      answer:
        "Yes. We completed a stucco repair and waterproofing project along the PCH in Malibu.",
    },
    {
      question: "Does coastal permitting add time to a Malibu project?",
      answer:
        "Yes, and we build that extra step into your timeline from the first estimate.",
    },
    {
      question: "How do you protect stucco from coastal weather in Malibu?",
      answer:
        "We factor salt air and ocean exposure into the finish and materials we use, learned directly from our PCH project.",
    },
    {
      question: "Are you licensed to work in Malibu?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question: "Do ocean-facing decks need different repair methods?",
      answer:
        "Yes, they take more wear than inland decks, so we pay close attention to waterproofing and flashing on every Malibu repair.",
    },
  ],

  nearbyAreas: [
    {
      name: "Calabasas",
      zip: "91302",
      href: "/areas/91302",
    },
    {
      name: "Westlake Village",
      zip: "91361",
      href: "/areas/91361",
    },
    {
      name: "Agoura Hills",
      zip: "91301",
      href: "/areas/91301",
    },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Malibu 90265",
    description:
      "Stucco repair, waterproofing, restoration, remodeling, and repair services in Malibu 90265.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Malibu",
      addressRegion: "CA",
      postalCode: "90265",
    },
    telephone: "+1-805-998-9082",
  },
};

const Area90265 = () => <AreaPageTemplate data={data} />;

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
export default Area90265;