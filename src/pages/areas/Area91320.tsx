import {
  Shield,
  Paintbrush,
  Droplets,
  Home,
  Hammer,
} from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/NEWBURY PARK (91320).webp";

const data: AreaPageData = {
  zipCode: "91320",
  cityName: "Newbury Park",

  tagline: "CORE SERVICE AREA · ZIP 91320",

  heroHeadline:
    "Remodeling and Repair Contractor in ",

  tier: "secondary",

  heroImage: projectInterior,

  heroDescription:
    "Newbury Park's older neighborhoods and hillside lots keep our crews busy year-round, and we bring 20 years of building experience to every project here. Whether it is a plumbing update, a stucco repair, or a full remodel, we walk every job with you from the first estimate to the final walkthrough.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "A lot of Newbury Park homes are original to their neighborhoods, which means remodels here often involve updating outdated plumbing and layouts, not just fixtures.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },

    {
      title: "Water Damage & Mold Remediation",
      description:
        "Slab leaks and roof leaks are common calls we get from Newbury Park, and we handle drying and mold prevention as one job so nothing gets missed.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },

    {
      title: "Drywall & Stucco Repair",
      description:
        "The hillside lots around Newbury Park tend to show settling cracks in stucco over time. We assess whether it is cosmetic or something worth a closer look.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },

    {
      title: "Balcony & Deck Repair",
      description:
        "Several of the multi-family properties near Reino Road have needed balcony work to meet current inspection requirements, and we have the process down.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },

    {
      title: "Commercial Tenant Improvement",
      description:
        "Office and retail spaces off Ventu Park Road are a regular part of our commercial workload.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Newbury Park Homeowners Choose Mier & Murphy",

    paragraphs: [
      "Newbury Park's mix of older established homes and hillside lots means no two projects here look quite the same, so we start every job with an actual walkthrough, not a phone estimate.",

      "The hillside terrain around Newbury Park can affect drainage and moisture over time, which is something we factor into both repair and restoration work.",

      "We are close enough to Newbury Park to be on-site quickly for an estimate, and close enough to stay accountable after the job is done.",
    ],
  },

  neighborhoodHighlights: [
    "Reino Road area",
    "Ventu Park Road",
    "Borchard area",
    "Casa Conejo",
    "Newbury Park High School area",
  ],

  faqs: [
    {
      question: "Do you work on older homes in Newbury Park?",
      answer:
        "Yes, a large share of our Newbury Park work is on original, established homes that need updated plumbing or layouts as part of a remodel.",
    },

    {
      question:
        "What causes stucco cracking on Newbury Park hillside homes?",
      answer:
        "Settling and drainage around hillside lots are common causes. We assess whether a crack is cosmetic or points to something structural.",
    },

    {
      question:
        "Do you handle balcony repairs for apartment or condo buildings?",
      answer:
        "Yes, including SB-326 and SB-721 compliance work for multi-family properties near Reino Road and throughout Newbury Park.",
    },

    {
      question: "Are you licensed to work in Newbury Park?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },

    {
      question:
        "Can you match textured stucco on an older Newbury Park home?",
      answer:
        "In most cases yes. We assess the existing finish at your estimate and tell you what is achievable.",
    },
  ],

  nearbyAreas: [
    {
      name: "Thousand Oaks",
      zip: "91360",
      href: "/areas/91360",
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

    {
      name: "Oak Park",
      zip: "91377",
      href: "/areas/91377",
    },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Mier & Murphy Builders – Newbury Park 91320",

    description:
      "Family-owned remodeling, restoration, and repair contractor serving Newbury Park and ZIP code 91320.",

    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Newbury Park",
      addressRegion: "CA",
      postalCode: "91320",
    },

    telephone: "+1-805-998-9082",

    url: "https://mierandmurphy.com/areas/91320",
  },
};

const Area91320 = () => <AreaPageTemplate data={data} />;

export default Area91320;