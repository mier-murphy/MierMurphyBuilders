import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/WOODLAND HILLS (91367).webp";

const data: AreaPageData = {
  zipCode: "91367",
  cityName: "Woodland Hills",
  metaTitle: "General Contractor Woodland Hills CA 91367 | Mier & Murphy",
  metaDescription:
    "Comprehensive construction, remodeling, and water damage restoration in Woodland Hills CA 91367 by Mier & Murphy Builders.",
  metaKeywords:
    "general contractor woodland hills 91367, home renovation woodland hills, kitchen remodel 91367, restoration contractor woodland hills",
  tagline: "Premium & Extended Service Area",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "Woodland Hills sits at the edge of our extended service area, and we take on select projects here regularly. From mid-century homes to newer construction and a dense stretch of condo properties, we bring 20 years of experience to a wide range of property types.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Woodland Hills homes range from mid-century builds to newer construction, so our first estimate visit is really about understanding what is actually behind the walls.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "We treat extraction, drying, and mold remediation as one connected process for Woodland Hills homeowners, since separating them out is how problems get missed.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Matching stucco texture on Woodland Hills homes varies a lot by neighborhood, and we assess each wall individually rather than assuming one finish fits all.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "The condo and apartment stock throughout Woodland Hills has kept SB-326 and SB-721 work a consistent part of our schedule here.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Ventura Boulevard's dense commercial corridor is where most of our Woodland Hills build-out work happens.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Woodland Hills Property Owners Choose Mier & Murphy",
    paragraphs: [
      "Woodland Hills covers everything from mid-century homes to newer construction, so we start every estimate by actually understanding the property, not assuming based on the neighborhood.",
      "With as much condo and apartment stock as Woodland Hills has, SB-326 and SB-721 compliance work has become a consistent, familiar part of what we do here.",
      "We travel into Woodland Hills for the right project, bringing the same process and standards we use throughout the Conejo Valley.",
    ],
  },

  neighborhoodHighlights: [
    "Ventura Boulevard corridor",
    "Warner Center area",
    "Walnut Acres",
    "Woodland Hills Country Club area",
  ],

  faqs: [
    {
      question: "Do you work on both older and newer homes in Woodland Hills?",
      answer:
        "Yes, Woodland Hills has a wide mix, from mid-century builds to newer construction, and we assess each one individually.",
    },
    {
      question: "How do you handle water damage restoration in Woodland Hills?",
      answer:
        "We treat extraction, drying, and mold remediation as one connected process rather than separate jobs.",
    },
    {
      question: "Do you handle balcony compliance for Woodland Hills condos?",
      answer:
        "Yes, this is a consistent part of our schedule given how much condo and apartment stock is in the area.",
    },
    {
      question: "Are you licensed to work in Woodland Hills?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question: "Do you take commercial build-outs near Ventura Boulevard?",
      answer:
        "Yes, that corridor is where most of our Woodland Hills commercial work happens.",
    },
  ],

  nearbyAreas: [
    {
      name: "Chatsworth",
      zip: "91311",
      href: "/areas/91311",
    },
    {
      name: "Calabasas",
      zip: "91302",
      href: "/areas/91302",
    },
    {
      name: "Los Angeles",
      zip: "90001",
      href: "/areas/90001",
    },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Woodland Hills 91367",
    description:
      "Remodeling, repair, water damage restoration, mold remediation, stucco repair, balcony repair, and commercial tenant improvement services in Woodland Hills 91367.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Woodland Hills",
      addressRegion: "CA",
      postalCode: "91367",
    },
    telephone: "+1-805-998-9082",
  },
};

const Area91367 = () => <AreaPageTemplate data={data} />;

export default Area91367;