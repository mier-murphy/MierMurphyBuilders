import {
  Shield,
  Paintbrush,
  Droplets,
  Home,
  Hammer,
} from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/NEWBURY PARK  WESTLAKE (91362).webp";

const data: AreaPageData = {
  zipCode: "91362",
  cityName: "Newbury Park / Westlake",
  metaTitle: "General Contractor Thousand Oaks CA 91362 | Mier & Murphy",
  metaDescription:
    "Custom home construction, remodeling, and stucco repair in Thousand Oaks CA 91362 by Mier & Murphy Builders. Contact us for a consultation.",
tagline: "CORE SERVICE AREA · ZIP 91362",

  heroHeadline:
    "Remodeling and Repair Contractor Serving ",

  tier: "primary",

  heroImage: projectInterior,

  heroDescription:
    "The 91362 area sits right where Newbury Park meets the Westlake side of Thousand Oaks, and we serve every home along that corridor with 20 years of building experience. Being based just minutes away in Thousand Oaks means we can be on-site quickly for an estimate and stay accountable long after the job is done.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "The 91362 area straddles Newbury Park and the Westlake side of Thousand Oaks, and we tailor each remodel to whether the home is an established build or a newer one.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },

    {
      title: "Water Damage & Mold Remediation",
      description:
        "Homes in the 91362 corridor near the Ventura and Los Angeles county line get a certified response from us, source repair first, then full restoration.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },

    {
      title: "Drywall & Stucco Repair",
      description:
        "This part of Newbury Park and Westlake mixes hillside and flat lots, and each puts different stress on stucco, which we read before quoting a repair.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },

    {
      title: "Balcony & Deck Repair",
      description:
        "The townhome and condo pockets around the 91362 line have kept SB-326 balcony work a regular part of our schedule.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },

    {
      title: "Commercial Tenant Improvement",
      description:
        "Small offices and retail units along the Newbury Park and Westlake boundary are a steady source of our build-out projects.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why 91362 Homeowners Choose Mier & Murphy",

    paragraphs: [
      "The 91362 area sits right where Newbury Park meets the Westlake side of Thousand Oaks, giving it a blend of older established homes and newer builds, and we approach each accordingly.",

      "Because we are based just minutes away in Thousand Oaks, this is effectively home turf, and we can be on-site quickly for an estimate.",

      "Twenty years of building experience across this exact boundary means we already know the common quirks of homes in the 91362 corridor.",
    ],
  },

  neighborhoodHighlights: [
    "Newbury Park side",
    "Westlake Village boundary",
    "Ventu Park Road area",
    "Wendy Drive corridor",
  ],

  faqs: [
    {
      question:
        "What is the difference between Newbury Park and the 91362 area?",
      answer:
        "91362 covers the stretch where Newbury Park meets the Westlake side of Thousand Oaks, blending both communities. We serve all of it.",
    },

    {
      question: "Are you based near the 91362 area?",
      answer:
        "Yes, we are based just minutes away in Thousand Oaks, so we can reach this area quickly for estimates.",
    },

    {
      question: "Do you handle both older and newer homes here?",
      answer:
        "Yes, the 91362 corridor has both, and we scope each remodel or repair to the specific home.",
    },

    {
      question: "Are you licensed to work in this area?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },

    {
      question: "Do you handle balcony compliance for condos in 91362?",
      answer:
        "Yes, the townhome and condo pockets here have kept SB-326 work a regular part of our schedule.",
    },
  ],

  nearbyAreas: [
    {
      name: "Thousand Oaks",
      zip: "91360",
      href: "/areas/91360",
    },

    {
      name: "Newbury Park",
      zip: "91320",
      href: "/areas/91320",
    },

    {
      name: "Westlake Village",
      zip: "91361",
      href: "/areas/91361",
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

    name: "Mier & Murphy Builders – Newbury Park / Westlake 91362",

    description:
      "Family-owned remodeling, restoration, and repair contractor serving Newbury Park, Westlake, and the 91362 area.",

    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Newbury Park",
      addressRegion: "CA",
      postalCode: "91362",
    },

    telephone: "+1-805-998-9082",

    url: "https://mierandmurphybuilders.com/areas/91362",
  },
};

const Area91362 = () => <AreaPageTemplate data={data} />;

export default Area91362;