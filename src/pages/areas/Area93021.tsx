import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/MOORPARK (93021).webp";

const data: AreaPageData = {
  zipCode: "93021",
  cityName: "Moorpark",
  tagline: "SURROUNDING AREA · ZIP 93021",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription:
    "Moorpark's growing neighborhoods keep our remodeling and repair crews active across the city. We bring the same honest, estimate-to-walkthrough process here that we use everywhere else in the Conejo Valley, regardless of how new or established a neighborhood is.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Many Moorpark homes are newer builds, so remodels here tend to focus on upgrading finishes and fixtures rather than reworking plumbing layouts.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Appliance failures and water heater leaks are among the more common calls we get from Moorpark homeowners, and we treat the moisture source, not just the visible damage.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Newer stucco finishes in Moorpark's developing neighborhoods are usually a more straightforward match than older, weathered surfaces.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Moorpark's growing number of townhome communities has meant a steady flow of SB-326 and SB-721 compliance work for us.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Los Angeles Avenue's retail corridor is where most of our Moorpark commercial projects take shape.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Moorpark Homeowners Choose Mier & Murphy",
    paragraphs: [
      "Moorpark has grown quickly, and a lot of our work here involves newer homes where the goal is upgrading finishes rather than fixing structural issues.",
      "Because so much of Moorpark's housing stock is newer, stucco matching tends to be more predictable here than in older Conejo Valley neighborhoods, which keeps repair timelines shorter.",
      "We bring the same estimate-to-final-walkthrough process to Moorpark that we use everywhere else, no shortcuts because a neighborhood is newer.",
    ],
  },

  neighborhoodHighlights: [
    "Los Angeles Avenue corridor",
    "Mountain Meadows",
    "Peach Hill area",
    "Campus Park area",
  ],

  faqs: [
    {
      question: "Do you work on newer construction in Moorpark?",
      answer:
        "Yes, a large share of our Moorpark projects are on newer homes, usually focused on upgrading finishes and fixtures.",
    },
    {
      question: "What are common water damage causes in Moorpark?",
      answer:
        "Appliance failures and water heater leaks are among the most common calls we get here.",
    },
    {
      question: "Do you handle SB-326 work for Moorpark townhomes?",
      answer:
        "Yes. Moorpark's growing number of townhome communities has kept this a steady part of our workload.",
    },
    {
      question: "Are you licensed to work in Moorpark?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question: "Is stucco matching easier on newer Moorpark homes?",
      answer:
        "Generally yes, since newer finishes tend to be more consistent than older, weathered stucco, which can shorten the repair timeline.",
    },
  ],

  nearbyAreas: [
    { name: "Simi Valley", zip: "93062", href: "/areas/93062" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Moorpark 93021",
    description:
      "Remodeling, repair, water damage restoration, mold remediation, stucco repair and commercial tenant improvements in Moorpark, CA 93021.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Moorpark",
      addressRegion: "CA",
      postalCode: "93021",
    },
    telephone: "+1-805-998-9082",
    url: "https://mierandmurphybuilders.com/areas/93021",
  },
};

const Area93021 = () => <AreaPageTemplate data={data} />;

export default Area93021;