import {
  Shield,
  Paintbrush,
  Droplets,
  Home,
  Hammer,
} from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/VENTURA COUNTY (91319).webp";

const data: AreaPageData = {
  zipCode: "91319",
  cityName: "Ventura County",

  tagline: "CORE SERVICE AREA · ZIP 91319",

  heroHeadline:
    "Remodeling and Repair Contractor Serving",

  tier: "primary",

  heroImage: projectExterior,

  heroDescription:
    "From coastal properties to inland neighborhoods, our crews travel throughout Ventura County for the right project. Based in Thousand Oaks, we bring 20 years of building experience and a process that adapts to whatever conditions a specific property presents.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "No two Ventura County homes are quite alike, so every remodel starts with an in-person walkthrough rather than a standard package.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },

    {
      title: "Water Damage & Mold Remediation",
      description:
        "Ventura County's mix of coastal humidity and inland heat both create their own moisture risks, which is part of why we assess each home's specific conditions before starting.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },

    {
      title: "Drywall & Stucco Repair",
      description:
        "The range of architectural styles across Ventura County means our stucco matching process has to adapt project to project.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },

    {
      title: "Balcony & Deck Repair",
      description:
        "HOAs across Ventura County reach out to us for SB-326 and SB-721 compliance work when their properties are approaching an inspection deadline.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },

    {
      title: "Commercial Tenant Improvement",
      description:
        "We take on retail and office build-outs throughout the county, coordinating around each business's lease timeline.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Ventura County Property Owners Choose Mier & Murphy",

    paragraphs: [
      "Ventura County covers a huge range of conditions, from coastal humidity to inland heat, and we adjust our approach based on where a property actually sits, not a countywide assumption.",

      "Based in Thousand Oaks, we are close enough to reach most of Ventura County quickly for an estimate while still being deeply familiar with local codes and permitting.",

      "Twenty years of building experience across the county means we have handled a wide range of home ages, styles, and conditions.",
    ],
  },

  neighborhoodHighlights: [
    "Conejo Valley",
    "Simi Valley",
    "Camarillo area",
    "Ventura coastal communities",
  ],

  faqs: [
    {
      question: "What parts of Ventura County do you serve?",
      answer:
        "We serve homeowners and property owners throughout Ventura County, based in Thousand Oaks.",
    },

    {
      question:
        "Does coastal versus inland location affect water damage risk?",
      answer:
        "Yes, coastal humidity and inland heat create different moisture risks, so we assess each property's specific conditions.",
    },

    {
      question: "Do you handle SB-326 compliance countywide?",
      answer:
        "Yes, we work with HOAs across Ventura County on balcony and deck compliance work.",
    },

    {
      question: "Are you licensed to work throughout Ventura County?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },

    {
      question: "Do you take commercial projects throughout the county?",
      answer:
        "Yes, we coordinate retail and office build-outs around each business's lease timeline, wherever in the county the property is located.",
    },
  ],

  nearbyAreas: [
    {
      name: "Thousand Oaks",
      zip: "91360",
      href: "/areas/91360",
    },

    {
      name: "Simi Valley",
      zip: "93062",
      href: "/areas/93062",
    },

    {
      name: "Moorpark",
      zip: "93021",
      href: "/areas/93021",
    },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Mier & Murphy Builders – Ventura County",

    description:
      "Family-owned remodeling, restoration, and repair contractor serving Ventura County, California.",

    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ventura County",
    },

    telephone: "+1-805-998-9082",

    url: "https://mierandmurphybuilders.com/areas/91319",
  },
};

const Area91319 = () => <AreaPageTemplate data={data} />;

export default Area91319;