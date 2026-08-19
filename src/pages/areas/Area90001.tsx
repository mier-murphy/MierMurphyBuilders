import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/LOS ANGELES (90001).webp";

const data: AreaPageData = {
  zipCode: "90001",
  cityName: "Los Angeles",
  metaTitle:
    "Remodeling & Repair Contractor Los Angeles CA 90001 | Mier & Murphy",
  metaDescription:
    "Remodeling, water damage restoration, mold remediation, stucco repair, balcony repair, and commercial services in Los Angeles, CA 90001. Mier & Murphy Builders.",
  metaKeywords:
    "remodeling contractor los angeles 90001; repair contractor los angeles; water damage restoration los angeles; mold remediation los angeles; stucco repair los angeles; balcony repair los angeles; commercial contractor los angeles",
  tagline: "PREMIUM & EXTENDED · ZIP 90001",
  heroHeadline: "Remodeling and Repair Contractor Serving Los Angeles",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription:
    "For the right project, our team travels from Thousand Oaks into greater Los Angeles. We are selective about which Los Angeles-area projects we take on, choosing ones where our IICRC certified process and communication style are genuinely a good fit.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "We take select bathroom and kitchen remodel projects in the Los Angeles area, with the same in-person estimate and honest timeline we use closer to home.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "IICRC certified restoration is available for select Los Angeles properties, particularly where a homeowner wants a team with a personal understanding of what mold does to a home.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Los Angeles covers an enormous range of architectural styles, so drywall and stucco repair here starts with a careful look at the existing finish before any work begins.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "HOAs and property managers in the Los Angeles area reach out to us for SB-326 and SB-721 compliance work when local contractors are booked out.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "We take on select commercial build-outs in greater Los Angeles, usually where timeline and communication matter as much as the construction itself.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Los Angeles Property Owners Choose Mier & Murphy",
    paragraphs: [
      "We are based in Thousand Oaks, not Los Angeles, so we take on select Los Angeles-area projects where our process and communication are a good fit, not every job that comes in.",
      "Los Angeles' range of architecture means we treat every estimate here as its own assessment rather than assuming a standard approach will work.",
      "Homeowners and property managers in the Los Angeles area often reach out to us specifically for our restoration background and our certified process.",
    ],
  },

  neighborhoodHighlights: [
    "West San Fernando Valley",
    "Greater Los Angeles metro",
  ],

  faqs: [
    {
      question: "Do you serve all of Los Angeles?",
      answer:
        "We take select projects throughout the greater Los Angeles area, based out of our Thousand Oaks office.",
    },
    {
      question:
        "Why would a Los Angeles homeowner hire a Thousand Oaks contractor?",
      answer:
        "Some homeowners specifically want our IICRC certified restoration background and the estimate-to-walkthrough process we bring to every job.",
    },
    {
      question: "Do you handle SB-326 compliance work in Los Angeles?",
      answer:
        "Yes, for select HOA and property manager clients in the Los Angeles area.",
    },
    {
      question: "Are you licensed to work in Los Angeles?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question:
        "How do you handle Los Angeles' range of architectural styles?",
      answer:
        "We start every project with a careful look at the existing finish and layout before doing any repair or remodeling work.",
    },
  ],

  nearbyAreas: [
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Los Angeles 90001",
    description:
      "Remodeling, repair, restoration, and commercial services in Los Angeles, CA 90001.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001",
    },
    telephone: "+1-805-998-9082",
    url: "https://mierandmurphybuilders.com/areas/90001",
  },
};

const Area90001 = () => <AreaPageTemplate data={data} />;

export default Area90001;