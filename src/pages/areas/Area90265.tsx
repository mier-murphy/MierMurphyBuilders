import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/MALIBU (90265).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/90265`;

const faqs = [
  {
    question: "Have you completed real work in Malibu?",
    answer: "Yes. We completed a stucco repair and waterproofing project along the PCH in Malibu.",
  },
  {
    question: "Does coastal permitting add time to a Malibu project?",
    answer:
      "It can. Many Malibu projects need extra coastal review, and we build that step into your timeline from the first estimate.",
  },
  {
    question: "How do you protect stucco from coastal weather in Malibu?",
    answer:
      "We factor salt air and ocean exposure into the finish and materials we use, based on what we learned on our PCH project.",
  },
  {
    question: "Are you licensed to work in Malibu?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Do ocean-facing decks need different repair methods?",
    answer:
      "Yes. They take more wear than inland decks, so we pay close attention to waterproofing and flashing on every Malibu repair.",
  },
];

const data: AreaPageData = {
  zipCode: "90265",
  cityName: "Malibu",
  metaTitle: "Malibu Stucco & Restoration, CA 90265 | Mier & Murphy",
  metaDescription:
    "Stucco repair, waterproofing, water damage restoration, deck repair, and remodeling in Malibu, CA 90265, planned for salt air. CA Lic. #1077044.",
  tagline: "EXTENDED SERVICE AREA · ZIP 90265",
  heroHeadline: "Stucco, Repair, and Restoration Contractor Serving",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "Our work along the PCH corridor in Malibu is some of the most weather-exposed we take on. Salt air, coastal permitting, and ocean-facing structures all shape how we approach a Malibu project differently than one further inland.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Coastal permitting can add a step to Malibu remodels, and we build that into the timeline from the very first estimate.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Salt air and coastal humidity make proper drying even more critical in Malibu, so we do not rush the extraction and drying phase here.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "We completed a stucco repair and waterproofing project along the PCH in Malibu, and that coastal-weather experience shapes how we approach every Malibu job.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Ocean-facing decks in Malibu take more of a beating than inland properties, so we pay close attention to waterproofing and flashing on every repair.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Build-out and renovation work for retail and office spaces along the Malibu coast, planned to keep disruption to nearby businesses low.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Malibu Property Owners Choose Mier & Murphy",
    paragraphs: [
      "We have completed a stucco repair and waterproofing project along the PCH in Malibu, so coastal weather resistance is part of our process, not a theory.",
      "Salt air, ocean exposure, and coastal permitting all change how a project runs in Malibu, and we plan for that from the first estimate rather than mid-project.",
      "Every material choice for a Malibu project gets weighed against coastal wear, not just cost or appearance.",
    ],
  },

  neighborhoodHighlights: [
    "Pacific Coast Highway corridor",
    "Point Dume area",
    "Malibu Colony area",
    "Malibu Canyon area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
    { name: "Woodland Hills South", zip: "91364", href: "/areas/91364" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Stucco Repair and Restoration in Malibu, CA 90265",
      serviceType: "Stucco Repair and Restoration",
      description:
        "Stucco repair, waterproofing, water damage restoration, mold remediation, deck repair, and remodeling in Malibu, CA 90265.",
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
        name: "Malibu",
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
        { "@type": "ListItem", position: 3, name: "Malibu", item: PAGE_URL },
      ],
    },
  ],
};

const Area90265 = () => <AreaPageTemplate data={data} />;

export default Area90265;