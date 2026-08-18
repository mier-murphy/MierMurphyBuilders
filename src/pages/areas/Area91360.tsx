import {
  Shield,
  Paintbrush,
  Droplets,
  Home,
  Hammer,
} from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/THOUSAND OAKS (91360).webp";

const data: AreaPageData = {
  zipCode: "91360",
  cityName: "Thousand Oaks",
  metaTitle: "General Contractor Thousand Oaks CA 91360 | Mier & Murphy",
  metaDescription:
    "Looking for top-rated contractors in Thousand Oaks CA 91360? Mier & Murphy Builders offers custom construction, remodeling, and restoration.",
  metaKeywords:
    "general contractor thousand oaks 91360, home remodelers 91360, water damage restoration thousand oaks, custom builders 91360",
  tagline: "CORE SERVICE AREA · ZIP 91360",

  heroHeadline:
    "Family-Owned Remodeling and Restoration in",

  tier: "primary",

  heroImage: projectExterior,

  heroDescription:
    "Mier & Murphy Builders is based right here in Thousand Oaks, with 20 years of building experience across remodeling, restoration, and repair. We know these neighborhoods because we live and work in them every day, not because a map says we cover this ZIP code.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Thousand Oaks is where we do most of our remodeling work, and we handle permits and inspections directly with the city.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },

    {
      title: "Water Damage & Mold Remediation",
      description:
        "After our own family's experience with mold, we treat every Thousand Oaks water damage call the same way, find the source first, then fix what it left behind.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },

    {
      title: "Drywall & Stucco Repair",
      description:
        "Between the ranch-style homes near downtown and the newer builds near Dos Vientos, we have matched just about every stucco texture Thousand Oaks has to offer.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },

    {
      title: "Balcony & Deck Repair",
      description:
        "With as many condo and townhome communities as Thousand Oaks has, SB-326 compliance work makes up a steady share of what we do.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },

    {
      title: "Commercial Tenant Improvement",
      description:
        "Small retail spaces along Thousand Oaks Boulevard often need a build-out that respects a tight opening timeline, and that is a specialty of ours.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Thousand Oaks Homeowners Choose Mier & Murphy",

    paragraphs: [
      "Thousand Oaks covers a wide mix of home styles, from mid-century ranch homes to newer builds near Dos Vientos, and each one calls for a slightly different approach to repair and remodeling.",

      "Santa Ana winds and the region's clay-heavy soil both put real stress on stucco and foundations here. We plan for those conditions rather than treating every wall the same way.",

      "Twenty years in this community means most of our new calls come from a referral, a neighbor, a past client, or someone who saw our work firsthand.",
    ],
  },

  neighborhoodHighlights: [
    "Lynn Ranch",
    "Moorpark Road Corridor",
    "Dos Vientos",
    "Wildwood Park area",
    "Thousand Oaks Boulevard",
    "Janss Marketplace area",
  ],

  faqs: [
    {
      question:
        "How quickly can you respond to a water damage call in Thousand Oaks?",
      answer:
        "Call us and we will let you know how quickly we can get to you based on your situation and location.",
    },

    {
      question: "Do you handle HOA-managed properties in Thousand Oaks?",
      answer:
        "Yes, particularly for balcony and deck repair work under SB-326, where HOA coordination is part of the job.",
    },

    {
      question: "What stucco finishes are common in Thousand Oaks?",
      answer:
        "We see everything from smooth Santa Barbara-style finishes to sand and float texture, and we match whatever is already on your home.",
    },

    {
      question:
        "Are you licensed to work in Thousand Oaks and Ventura County?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },

    {
      question: "How long does a bathroom remodel take in Thousand Oaks?",
      answer:
        "Most bathroom remodels take a few weeks from demolition to final walkthrough. We give you a project-specific timeline at your estimate.",
    },
  ],

  nearbyAreas: [
    {
      name: "Newbury Park / Westlake",
      zip: "91362",
      href: "/areas/91362",
    },

    {
      name: "Westlake Village",
      zip: "91361",
      href: "/areas/91361",
    },

    {
      name: "Newbury Park",
      zip: "91320",
      href: "/areas/91320",
    },

    {
      name: "Agoura Hills",
      zip: "91301",
      href: "/areas/91301",
    },

    {
      name: "Oak Park",
      zip: "91377",
      href: "/areas/91377",
    },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Mier & Murphy Builders – Thousand Oaks",

    description:
      "Family-owned remodeling, restoration, and repair contractor serving Thousand Oaks and ZIP code 91360.",

    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Thousand Oaks",
      addressRegion: "CA",
      postalCode: "91360",
    },

    telephone: "+1-805-998-9082",

    url: "https://mierandmurphybuilders.com/areas/91360",
  },
};

const Area91360 = () => <AreaPageTemplate data={data} />;

export default Area91360;