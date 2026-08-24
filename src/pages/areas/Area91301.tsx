import {
  Shield,
  Paintbrush,
  Droplets,
  Home,
  Hammer,
} from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/AGOURA HILLS (91301).webp";

const data: AreaPageData = {
  zipCode: "91301",
  cityName: "Agoura Hills",
  metaTitle: "General Contractor Agoura Hills CA 91301 | Mier & Murphy",
  metaDescription:
    "Premier custom construction, remodeling, and mold remediation in Agoura Hills CA 91301 by Mier & Murphy Builders. Request a consultation.",
 tagline: "SURROUNDING AREA · ZIP 91301",

  heroHeadline:
    "Remodeling and Repair Contractor in",

  tier: "secondary",

  heroImage: projectExterior,

  heroDescription:
    "Between Old Agoura's rustic properties and the newer hillside developments, Agoura Hills covers a lot of ground, and so do we. Twenty years of building experience across varied terrain and architectural styles means we do not treat every estimate the same way.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Older Agoura Hills homes sometimes need plumbing brought up to current code before a remodel can move forward, something we flag at the estimate stage.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },

    {
      title: "Water Damage & Mold Remediation",
      description:
        "Canyon-adjacent homes in Agoura Hills see their own set of moisture challenges, and we account for that terrain when planning a drying strategy.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },

    {
      title: "Drywall & Stucco Repair",
      description:
        "From ranch-style to more modern builds, Agoura Hills has a wide mix of finishes, and matching them accurately takes real assessment work up front.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },

    {
      title: "Balcony & Deck Repair",
      description:
        "Several multi-unit properties along Kanan Road have needed structural balcony repair to meet current safety standards.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },

    {
      title: "Commercial Tenant Improvement",
      description:
        "The commercial stretch along Kanan Road has kept our build-out crews active in Agoura Hills.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Agoura Hills Homeowners Choose Mier & Murphy",

    paragraphs: [
      "Agoura Hills spans everything from Old Agoura's rustic, ranch-style properties to newer hillside developments, and we treat every estimate as its own project rather than a template.",

      "Canyon terrain around Agoura Hills creates moisture and drainage patterns that inland neighborhoods do not have, and that shapes how we approach restoration work here.",

      "Twenty years of building experience across the Conejo Valley means we have seen most of what Agoura Hills homes can throw at a remodel or repair.",
    ],
  },

  neighborhoodHighlights: [
    "Old Agoura",
    "Kanan Road corridor",
    "Morrison Ranch Park area",
    "Chesebro area",
  ],

  faqs: [
    {
      question: "Do you work on older homes in Old Agoura?",
      answer:
        "Yes, and we flag any plumbing or code updates needed before a remodel moves forward.",
    },

    {
      question: "How does canyon terrain affect water damage risk?",
      answer:
        "Canyon-adjacent homes see their own moisture patterns, and we factor that terrain into our drying and restoration approach.",
    },

    {
      question: "Do you handle balcony repair for Kanan Road properties?",
      answer:
        "Yes, including structural repair for multi-unit properties along Kanan Road that need to meet current safety standards.",
    },

    {
      question: "Are you licensed to work in Agoura Hills?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },

    {
      question: "What stucco styles do you match in Agoura Hills?",
      answer:
        "Everything from ranch-style to more modern finishes. We assess the existing texture before starting any repair.",
    },
  ],

  nearbyAreas: [
    {
      name: "Thousand Oaks",
      zip: "91360",
      href: "/areas/91360",
    },

    {
      name: "Oak Park",
      zip: "91377",
      href: "/areas/91377",
    },

    {
      name: "Westlake Village",
      zip: "91361",
      href: "/areas/91361",
    },

    {
      name: "Calabasas / Westlake",
      zip: "91302",
      href: "/areas/91302",
    },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Mier & Murphy Builders – Agoura Hills 91301",

    description:
      "Family-owned remodeling, restoration, and repair contractor serving Agoura Hills and ZIP code 91301.",

    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Agoura Hills",
      addressRegion: "CA",
      postalCode: "91301",
    },

    telephone: "+1-805-998-9082",

    url: "https://mierandmurphybuilders.com/areas/91301",
  },
};

const Area91301 = () => <AreaPageTemplate data={data} />;

export default Area91301;