import {
  Shield,
  Paintbrush,
  Droplets,
  Home,
  Hammer,
} from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/WESTLAKE VILLAGE (91361).webp";

const data: AreaPageData = {
  zipCode: "91361",
  cityName: "Westlake Village",

  tagline: "CORE SERVICE AREA · ZIP 91361",

  heroHeadline:
    "Remodeling and Repair Contractor in",

  tier: "primary",

  heroImage: projectExterior,

  heroDescription:
    "Westlake Village's lakeside and hillside homes bring their own set of remodeling and repair needs, and we bring 20 years of experience to meet them. From HOA coordination to moisture-aware restoration, we plan around what makes this community different from the rest of the Conejo Valley.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Many Westlake Village properties fall under HOA guidelines, so we coordinate approvals alongside the actual construction timeline.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },

    {
      title: "Water Damage & Mold Remediation",
      description:
        "Homes closer to the lake tend to run into moisture issues more often, and we have adjusted our drying process accordingly for this area.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },

    {
      title: "Drywall & Stucco Repair",
      description:
        "The Mediterranean-style architecture common around Westlake Village calls for a specific hand-troweled texture, one we match carefully rather than approximate.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },

    {
      title: "Balcony & Deck Repair",
      description:
        "With so many condominium communities here, we spend a fair amount of time on SB-326 documentation as well as the physical repair.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },

    {
      title: "Commercial Tenant Improvement",
      description:
        "The business parks along Westlake Boulevard have kept us busy with office build-outs over the years.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Westlake Village Homeowners Choose Mier & Murphy",

    paragraphs: [
      "Westlake Village combines lakeside properties, hillside lots, and a strong HOA presence, and each of those factors shapes how we plan a project before work even starts.",

      "Homes near the lake face moisture conditions that inland properties do not, so our restoration approach here is built around that reality, not a one-size-fits-all process.",

      "We work directly with HOA boards when a project requires it, so approvals do not become the bottleneck on your timeline.",
    ],
  },

  neighborhoodHighlights: [
    "Westlake Boulevard corridor",
    "Triunfo Canyon area",
    "North Ranch",
    "Lake Sherwood area",
    "Westlake Lake vicinity",
  ],

  faqs: [
    {
      question: "Do you coordinate with HOAs in Westlake Village?",
      answer:
        "Yes. Many Westlake Village properties fall under HOA guidelines, and we coordinate approvals as part of the project timeline.",
    },

    {
      question: "Are lakeside homes more prone to water damage?",
      answer:
        "Homes closer to the lake do see moisture issues more often, and we adjust our drying and restoration approach for that.",
    },

    {
      question: "What stucco style is common in Westlake Village?",
      answer:
        "A lot of Westlake Village homes use Mediterranean-style hand-troweled finishes, which we match carefully rather than approximate.",
    },

    {
      question: "Do you handle SB-326 compliance for condo buildings?",
      answer:
        "Yes, including both the physical repair and the documentation your HOA needs for the inspection record.",
    },

    {
      question: "Are you licensed to work in Westlake Village?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
  ],

  nearbyAreas: [
    {
      name: "Thousand Oaks",
      zip: "91360",
      href: "/areas/91360",
    },

    {
      name: "Newbury Park / Westlake",
      zip: "91362",
      href: "/areas/91362",
    },

    {
      name: "Agoura Hills",
      zip: "91301",
      href: "/areas/91301",
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

    name: "Mier & Murphy Builders – Westlake Village 91361",

    description:
      "Family-owned remodeling, restoration, and repair contractor serving Westlake Village and ZIP code 91361.",

    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Westlake Village",
      addressRegion: "CA",
      postalCode: "91361",
    },

    telephone: "+1-805-998-9082",

    url: "https://mierandmurphybuilders.com/areas/91361",
  },
};

const Area91361 = () => <AreaPageTemplate data={data} />;

export default Area91361;