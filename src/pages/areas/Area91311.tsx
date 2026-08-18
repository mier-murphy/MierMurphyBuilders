import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/CHATSWORTH (91311).webp";

const data: AreaPageData = {
  zipCode: "91311",
  cityName: "Chatsworth",
  metaTitle: "General Contractor Chatsworth CA 91311 | Mier & Murphy",
  metaDescription:
    "Professional general contracting, kitchen remodeling, and stucco repair in Chatsworth CA 91311 from Mier & Murphy Builders.",
  metaKeywords:
    "general contractor chatsworth 91311, home remodelers chatsworth, mold remediation 91311, commercial contractors chatsworth",
  tagline: "Premium & Extended Service Area",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "secondary",
  heroImage: projectInterior,
  heroDescription:
    "Chatsworth's mix of rocky terrain and established neighborhoods rounds out our western service area. We extend our 20 years of building experience into Chatsworth for the right project, bringing the same estimate-to-walkthrough process we use closer to home.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Older Chatsworth homes often have layout quirks from past additions, and we work around those rather than forcing a generic floor plan.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "We look closely at attic and crawlspace ventilation on Chatsworth mold calls, since poor airflow is a common contributor in this area.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The rocky, hillside lots around Chatsworth can put extra stress on stucco over time, and we check for structural movement before doing a cosmetic repair.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Several Chatsworth apartment communities have brought us in for balcony repair work tied to their SB-721 inspection findings.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Chatsworth's industrial and commercial corridors have given us a steady stream of office and light-retail build-out projects.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Chatsworth Property Owners Choose Mier & Murphy",
    paragraphs: [
      "Chatsworth's rocky, hillside terrain and mix of older and newer construction mean we approach every estimate here with fresh eyes rather than assumptions from other neighborhoods.",
      "Attic and crawlspace ventilation issues come up often enough in Chatsworth mold calls that we check them as a standard part of our inspection.",
      "We extend our service area into Chatsworth for the right project, bringing the same estimate-to-walkthrough process we use closer to home.",
    ],
  },

  neighborhoodHighlights: [
    "Chatsworth Park area",
    "Old Town Chatsworth",
    "Devonshire corridor",
    "Rocky Peak area",
  ],

  faqs: [
    {
      question: "Do you work on older homes with additions in Chatsworth?",
      answer:
        "Yes, we work around layout quirks from past additions rather than forcing a generic remodel plan.",
    },
    {
      question: "What causes mold in Chatsworth homes?",
      answer:
        "Poor attic and crawlspace ventilation is a common contributor here, so we check that as part of every mold inspection.",
    },
    {
      question: "Do you handle SB-721 work for Chatsworth apartments?",
      answer:
        "Yes, several apartment communities in Chatsworth have brought us in for repair work tied to SB-721 findings.",
    },
    {
      question: "Are you licensed to work in Chatsworth?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question: "Do you take commercial projects in Chatsworth?",
      answer:
        "Yes, the industrial and commercial corridors here have given us regular office and light-retail build-out work.",
    },
  ],

  nearbyAreas: [
    {
      name: "Woodland Hills",
      zip: "91367",
      href: "/areas/91367",
    },
    {
      name: "Simi Valley",
      zip: "93062",
      href: "/areas/93062",
    },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Chatsworth 91311",
    description:
      "Remodeling, repair, water damage restoration, mold remediation, stucco repair, and commercial tenant improvement services in Chatsworth 91311.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Chatsworth",
      addressRegion: "CA",
      postalCode: "91311",
    },
    telephone: "+1-805-998-9082",
  },
};

const Area91311 = () => <AreaPageTemplate data={data} />;

export default Area91311;