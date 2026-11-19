import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/CHATSWORTH (91311).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91311`;

const faqs = [
  {
    question: "Do you work on older homes with additions in Chatsworth?",
    answer: "Yes. We work around layout quirks from past additions rather than forcing a generic remodel plan.",
  },
  {
    question: "What causes mold in Chatsworth homes?",
    answer:
      "Poor attic and crawlspace ventilation is a common contributor, so we check it as part of every mold inspection.",
  },
  {
    question: "Do you handle SB-721 balcony repairs for Chatsworth apartments?",
    answer:
      "Yes. SB-721 inspections are performed by a qualified independent inspector, and we complete the repairs their reports call for on apartment buildings with three or more units.",
  },
  {
    question: "Are you licensed to work in Chatsworth?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Do you take commercial projects in Chatsworth?",
    answer: "Yes. We handle office and light-retail build-outs along Chatsworth's commercial and industrial corridors.",
  },
];

const data: AreaPageData = {
  zipCode: "91311",
  cityName: "Chatsworth",
  metaTitle: "Chatsworth General Contractor, CA 91311 | Mier & Murphy",
  metaDescription:
    "Remodeling, water damage and mold remediation, stucco repair, SB-721 balcony repair, and commercial build-outs in Chatsworth, CA 91311. CA Lic. #1077044.",
  tagline: "EXTENDED SERVICE AREA · ZIP 91311",
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
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "We look closely at attic and crawlspace ventilation on Chatsworth mold calls, since poor airflow is a common contributor.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The rocky, hillside lots around Chatsworth can put extra stress on stucco over time, and we check for structural movement before doing a cosmetic repair.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Balcony and deck repair for Chatsworth apartment communities, including the repairs called for by SB-721 inspection findings.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Office and light-retail build-outs along Chatsworth's industrial and commercial corridors.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
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

  faqs,

  nearbyAreas: [
    { name: "Simi Valley", zip: "93062", href: "/areas/93062" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Chatsworth, CA 91311",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Chatsworth, CA 91311.",
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
        name: "Chatsworth",
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
        { "@type": "ListItem", position: 3, name: "Chatsworth", item: PAGE_URL },
      ],
    },
  ],
};

const Area91311 = () => <AreaPageTemplate data={data} />;

export default Area91311;