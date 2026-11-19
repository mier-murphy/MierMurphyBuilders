import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/LOS ANGELES (90001).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/90001`;

const faqs = [
  {
    question: "Do you serve all of Los Angeles?",
    answer:
      "We take select projects throughout the greater Los Angeles area, from the San Fernando Valley to the Westside, working out of our Thousand Oaks base.",
  },
  {
    question: "Why would a Los Angeles homeowner hire a Thousand Oaks contractor?",
    answer:
      "Many of our clients are in the Los Angeles area. They hire us for our restoration background, our clear estimate-to-walkthrough process, and a family-owned team that stays with the job from start to finish.",
  },
  {
    question: "Do you handle SB-326 and SB-721 balcony repairs in Los Angeles?",
    answer:
      "Yes, for select HOA and property manager clients. The inspections are performed by qualified independent inspectors, and we complete the repairs their reports call for.",
  },
  {
    question: "Are you licensed to work in Los Angeles?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "How do you handle Los Angeles' range of architectural styles?",
    answer:
      "We start every project with a careful look at the existing finish and layout before doing any repair or remodeling work.",
  },
];

const data: AreaPageData = {
  zipCode: "90001",
  cityName: "Los Angeles",
  metaTitle: "Los Angeles Remodeling & Repair Contractor | Mier & Murphy",
  metaDescription:
    "Select remodeling, water damage and mold remediation, stucco, balcony repair, and commercial build-outs across greater Los Angeles. CA Lic. #1077044.",
  tagline: "EXTENDED SERVICE AREA · GREATER LOS ANGELES",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "For the right project, our team travels from Thousand Oaks into greater Los Angeles. We are selective about which Los Angeles-area projects we take on, choosing ones where our process and communication style are a good fit.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "We take select bathroom and kitchen remodels in the Los Angeles area, including a recent condo remodel with two renovated bathrooms and a new kitchen.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Water damage and mold restoration for select Los Angeles properties, from a team with a personal understanding of what mold does to a home.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Los Angeles covers an enormous range of architectural styles, so drywall and stucco repair here starts with a careful look at the existing finish before any work begins.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Balcony repair for select Los Angeles-area HOAs and property managers, including the repairs called for by SB-326 and SB-721 inspections.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Select commercial build-outs in greater Los Angeles, where timeline and communication matter as much as the construction itself.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Los Angeles Property Owners Choose Mier & Murphy",
    paragraphs: [
      "We are based in Thousand Oaks, not Los Angeles, so we take on select Los Angeles-area projects where our process and communication are a good fit, not every job that comes in.",
      "Many of our client reviews come from Los Angeles-area homeowners, from North Hollywood and Sylmar to Culver City, for work ranging from full remodels to drywall and garage conversions.",
      "Los Angeles' range of architecture means we treat every estimate here as its own assessment rather than assuming a standard approach will work.",
    ],
  },

  neighborhoodHighlights: [
    "West San Fernando Valley",
    "North Hollywood",
    "Sylmar",
    "Culver City",
  ],

  faqs,

  nearbyAreas: [
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Woodland Hills South", zip: "91364", href: "/areas/91364" },
    { name: "Chatsworth", zip: "91311", href: "/areas/91311" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Remodeling and Repair in Greater Los Angeles",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in the greater Los Angeles area.",
      url: PAGE_URL,
      provider: {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#organization`,
        name: "Mier & Murphy Builders",
        telephone: "+18059989082",
        url: `${SITE_URL}/`,
      },
      areaServed: {
        "@type": "City",
        name: "Los Angeles",
        containedInPlace: { "@type": "State", name: "California" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${SITE_URL}/areas` },
        { "@type": "ListItem", position: 3, name: "Los Angeles", item: PAGE_URL },
      ],
    },
  ],
};

const Area90001 = () => <AreaPageTemplate data={data} />;

export default Area90001;