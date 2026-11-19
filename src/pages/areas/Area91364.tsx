import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/WOODLAND HILLS SOUTH (91364).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91364`;

const faqs = [
  {
    question: "What area does 91364 cover?",
    answer:
      "91364 covers the southern, more hillside side of Woodland Hills, where custom and semi-custom homes are common.",
  },
  {
    question: "Do hillside homes need special repair considerations?",
    answer:
      "Yes. Slope and weather exposure affect decks and stucco, so we focus on structural integrity and waterproofing here.",
  },
  {
    question: "Do you handle custom home finishes in this area?",
    answer:
      "Yes. Southern Woodland Hills homes use a wide range of finishes, and we match each one individually rather than assuming one approach.",
  },
  {
    question: "Are you licensed to work in Woodland Hills South?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Do you take commercial work in this area?",
    answer: "Yes. We take on select commercial build-outs in the southern Woodland Hills area.",
  },
];

const data: AreaPageData = {
  zipCode: "91364",
  cityName: "Woodland Hills South",
  metaTitle: "Woodland Hills Hillside Contractor, CA 91364 | Mier & Murphy",
  metaDescription:
    "Remodeling, stucco repair, hillside deck repair, and water damage and mold remediation in southern Woodland Hills, CA 91364. CA Lic. #1077044.",
  tagline: "EXTENDED SERVICE AREA · ZIP 91364",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "secondary",
  heroImage: projectInterior,
  heroDescription:
    "The 91364 side of Woodland Hills leans toward hillside and custom homes, and we take on select projects here with 20 years of building experience behind us. From slope-affected decks to custom stucco finishes, we bring the same careful, estimate-to-walkthrough process we use throughout the Conejo Valley.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "The hillside sections of southern Woodland Hills often feature older custom homes, so our remodels here start with understanding what is behind the existing finishes.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Southern Woodland Hills homes tucked into the hills can hide slow leaks, and our process is built to find the source, not just the stain.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The custom and semi-custom homes across southern Woodland Hills use a wide range of finishes, and we match each one individually.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Hillside decks in the 91364 area take real weather and slope stress, so we focus on structural integrity and waterproofing on every repair.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Select office and retail build-outs in the southern Woodland Hills area.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
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

  faqs,

  nearbyAreas: [
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
    { name: "Malibu", zip: "90265", href: "/areas/90265" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Remodeling and Repair in Woodland Hills, CA 91364",
      serviceType: "General Contractor",
      description:
        "Remodeling, stucco repair, deck repair, water damage restoration, and mold remediation for hillside and custom homes in southern Woodland Hills, CA 91364.",
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
        name: "Woodland Hills",
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
        { "@type": "ListItem", position: 3, name: "Woodland Hills South", item: PAGE_URL },
      ],
    },
  ],
};

const Area91364 = () => <AreaPageTemplate data={data} />;

export default Area91364;