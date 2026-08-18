import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/MALIBU (90265).webp";

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

export default Area90265;