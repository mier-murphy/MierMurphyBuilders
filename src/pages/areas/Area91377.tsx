import {
  Shield,
  Paintbrush,
  Droplets,
  Home,
  Hammer,
} from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/OAK PARK (91377).webp";

const data: AreaPageData = {
  zipCode: "91377",
  cityName: "Oak Park",
  metaTitle: "General Contractor Oak Park CA 91377 | Mier & Murphy",
  metaDescription:
    "Quality custom building, remodeling, and stucco repair in Oak Park CA 91377. Mier & Murphy Builders brings craftsmanship to every project.",
  metaKeywords:
    "general contractor oak park 91377, home renovation oak park, kitchen remodeling 91377, restoration services oak park",
  tagline: "SURROUNDING AREA · ZIP 91377",

  heroHeadline:
    "Remodeling and Repair Contractor in",

  tier: "secondary",

  heroImage: projectInterior,

  heroDescription:
    "We have completed real, documented balcony and stucco repair projects right here in Oak Park, not just a service area listing. That means when we quote your project, we are drawing on actual work completed in this exact community, not a generic estimate.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Oak Park's family-oriented neighborhoods often mean scheduling remodels around school pickup and drop-off, and we plan crew hours with that in mind.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },

    {
      title: "Water Damage & Mold Remediation",
      description:
        "IICRC S500 and S520 standards guide every water and mold job we take on in Oak Park, no shortcuts on the drying phase.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },

    {
      title: "Drywall & Stucco Repair",
      description:
        "We completed a full drywall and stucco repair project in Oak Park, matching the existing texture closely enough that the patch is not visible.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },

    {
      title: "Balcony & Deck Repair",
      description:
        "Our Oak Park balcony reconstruction gave us direct, hands-on experience with SB-326 requirements for this specific community.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },

    {
      title: "Commercial Tenant Improvement",
      description:
        "Local retail and professional offices in Oak Park have called on us for smaller-scale build-outs that do not disrupt neighboring businesses.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Oak Park Homeowners Choose Mier & Murphy",

    paragraphs: [
      "Oak Park is a community we have real completed work in, not just a name on a service area list, including a full balcony reconstruction and a drywall and stucco repair project.",

      "Because Oak Park is a tight-knit, family-oriented community, word travels fast when a contractor does a job well, or does not.",

      "We plan our Oak Park projects around school schedules and neighborhood routines whenever a homeowner asks us to.",
    ],
  },

  neighborhoodHighlights: [
    "Oak Park Unified School District area",
    "Kanan Road corridor",
    "Oak Hills",
    "Deerhill Road area",
  ],

  faqs: [
    {
      question: "Have you completed real projects in Oak Park?",
      answer:
        "Yes. We have completed a full balcony reconstruction and a drywall and stucco repair project in Oak Park.",
    },

    {
      question: "Do you plan remodeling work around school schedules?",
      answer:
        "We can, if that matters to your household. We plan crew hours around what works for your family whenever possible.",
    },

    {
      question: "What balcony compliance work have you done in Oak Park?",
      answer:
        "Our Oak Park balcony reconstruction project gave us direct, hands-on experience with SB-326 requirements specific to this community.",
    },

    {
      question: "Are you licensed to work in Oak Park?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },

    {
      question: "Can you match stucco texture on an Oak Park home?",
      answer:
        "In most cases yes, we matched texture closely enough on our last Oak Park project that the repair is not visible.",
    },
  ],

  nearbyAreas: [
    {
      name: "Thousand Oaks",
      zip: "91360",
      href: "/areas/91360",
    },

    {
      name: "Agoura Hills",
      zip: "91301",
      href: "/areas/91301",
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

    name: "Mier & Murphy Builders – Oak Park 91377",

    description:
      "Family-owned remodeling, restoration, balcony, stucco, and repair contractor serving Oak Park and ZIP code 91377.",

    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Oak Park",
      addressRegion: "CA",
      postalCode: "91377",
    },

    telephone: "+1-805-998-9082",

    url: "https://mierandmurphybuilders.com/areas/91377",
  },
};

const Area91377 = () => <AreaPageTemplate data={data} />;

export default Area91377;