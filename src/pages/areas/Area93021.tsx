import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/MOORPARK (93021).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/93021`;

const faqs = [
  {
    question: "Do you work on newer construction in Moorpark?",
    answer:
      "Yes. Many Moorpark homes are newer, and remodels there usually focus on upgrading finishes and fixtures.",
  },
  {
    question: "What are common water damage causes in Moorpark?",
    answer:
      "Appliance failures and water heater leaks are common causes in newer homes. We find and fix the source before drying and repairs.",
  },
  {
    question: "Do you handle SB-326 and SB-721 balcony repairs for Moorpark townhomes?",
    answer:
      "Yes. The inspections are performed by qualified independent inspectors, such as licensed architects and structural engineers, and we complete the repairs their reports call for.",
  },
  {
    question: "Are you licensed to work in Moorpark?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Is stucco matching easier on newer Moorpark homes?",
    answer:
      "Generally, yes. Newer finishes tend to be more consistent than older, weathered stucco, which can shorten the repair timeline.",
  },
];

const data: AreaPageData = {
  zipCode: "93021",
  cityName: "Moorpark",
  metaTitle: "Moorpark General Contractor, CA 93021 | Mier & Murphy",
  metaDescription:
    "Remodeling, water damage and mold remediation, stucco, and townhome balcony repair in Moorpark, CA 93021, near Thousand Oaks. CA Lic. #1077044.",
  tagline: "SURROUNDING AREA · ZIP 93021",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "Moorpark's growing neighborhoods are a natural extension of our Thousand Oaks home base. We bring the same honest, estimate-to-walkthrough process here that we use everywhere else in the Conejo Valley, regardless of how new or established a neighborhood is.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Many Moorpark homes are newer builds, so remodels here tend to focus on upgrading finishes and fixtures rather than reworking plumbing layouts.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Appliance failures and water heater leaks are common causes of water damage in newer homes, and we treat the moisture source, not just the visible damage.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Newer stucco finishes in Moorpark's developing neighborhoods are usually a more straightforward match than older, weathered surfaces.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Moorpark has a growing number of townhome communities, and we complete the balcony repairs their SB-326 and SB-721 inspections call for.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Retail and office build-outs along Moorpark's Los Angeles Avenue corridor and across the city.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Moorpark Homeowners Choose Mier & Murphy",
    paragraphs: [
      "Moorpark has grown quickly, and much of its housing is newer, where the goal is usually upgrading finishes rather than fixing structural issues.",
      "Because so much of Moorpark's housing stock is newer, stucco matching tends to be more predictable here than in older Conejo Valley neighborhoods, which keeps repair timelines shorter.",
      "We bring the same estimate-to-final-walkthrough process to Moorpark that we use everywhere else, with no shortcuts because a neighborhood is newer.",
    ],
  },

  neighborhoodHighlights: [
    "Los Angeles Avenue corridor",
    "Mountain Meadows",
    "Peach Hill area",
    "Campus Park area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Simi Valley", zip: "93062", href: "/areas/93062" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Newbury Park", zip: "91320", href: "/areas/91320" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Moorpark, CA 93021",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Moorpark, CA 93021.",
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
        name: "Moorpark",
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
        { "@type": "ListItem", position: 3, name: "Moorpark", item: PAGE_URL },
      ],
    },
  ],
};

const Area93021 = () => <AreaPageTemplate data={data} />;

export default Area93021;