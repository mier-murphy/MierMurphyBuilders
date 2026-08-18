import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/WOODLAND HILLS SOUTH (91364).webp";

const data: AreaPageData = {
  zipCode: "91364",
  cityName: "Woodland Hills South",
  tagline: "Premium & Extended Service Area",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "premium",
  heroImage: projectInterior,
  heroDescription:
    "The 91364 side of Woodland Hills leans toward hillside and custom homes, and we take on select projects here with 20 years of building experience behind us. From slope-affected decks to custom stucco finishes, we bring the same careful, estimate-to-walkthrough process we use throughout the Conejo Valley.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "The 91364 hillside sections of southern Woodland Hills often feature older custom homes, so our remodels here start with understanding what is behind the existing finishes.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Southern Woodland Hills homes tucked into the hills can hide slow leaks, and our certified process is built to find the source, not just the stain.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The custom and semi-custom homes across southern Woodland Hills use a wide range of finishes, and we match each one individually.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Hillside decks in the 91364 area take real weather and slope stress, so we focus on structural integrity and waterproofing on every repair.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Select commercial spaces in the southern Woodland Hills area round out the build-out work we take on here.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Woodland Hills South Homeowners Choose Mier & Murphy",
    paragraphs: [
      "The 91364 side of Woodland Hills leans toward hillside and custom homes, which call for more careful assessment than a standard tract neighborhood.",
      "Hillside slope and older custom construction both affect how we approach repair and restoration in southern Woodland Hills, and we plan for that from the first visit.",
      "We take on select projects in this area, bringing the same estimate-to-walkthrough process we use throughout the Conejo Valley.",
    ],
  },

  neighborhoodHighlights: [
    "Southern Woodland Hills hillside",
    "Mulholland corridor",
    "Woodland Hills Country Club vicinity",
    "Valley Circle area",
  ],

  faqs: [
    {
      question: "What area does 91364 cover?",
      answer:
        "91364 covers the southern, more hillside side of Woodland Hills, where custom and semi-custom homes are common.",
    },
    {
      question: "Do hillside homes need special repair considerations?",
      answer:
        "Yes, slope and weather exposure affect decks and stucco, so we focus on structural integrity and waterproofing here.",
    },
    {
      question: "Do you handle custom home finishes in this area?",
      answer:
        "Yes, southern Woodland Hills uses a wide range of finishes, and we match each individually rather than assuming one approach.",
    },
    {
      question: "Are you licensed to work in Woodland Hills South?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question: "Do you take commercial work in this area?",
      answer:
        "Yes, we take on select commercial build-outs in the southern Woodland Hills area.",
    },
  ],

  nearbyAreas: [
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
    { name: "Los Angeles", zip: "90001", href: "/areas/90001" },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Woodland Hills South 91364",
    description:
      "Remodeling, repair, stucco, restoration and renovation services in Woodland Hills South 91364.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Woodland Hills",
      addressRegion: "CA",
      postalCode: "91364",
    },
    telephone: "+1-805-998-9082",
    url: "https://mierandmurphy.com/areas/91364",
  },
};

const Area91364 = () => <AreaPageTemplate data={data} />;

export default Area91364;