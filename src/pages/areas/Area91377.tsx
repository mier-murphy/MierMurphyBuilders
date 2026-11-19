import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/OAK PARK (91377).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91377`;

const faqs = [
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
    question: "What balcony work have you done in Oak Park?",
    answer:
      "We completed a full balcony reconstruction in Oak Park. For SB-326 properties, the inspection is performed by a licensed architect or structural engineer, and we complete the repairs their report calls for.",
  },
  {
    question: "Are you licensed to work in Oak Park?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Can you match stucco texture on an Oak Park home?",
    answer:
      "In most cases, yes. On our last Oak Park project, we matched the texture closely enough that the repair is not visible.",
  },
];

const data: AreaPageData = {
  zipCode: "91377",
  cityName: "Oak Park",
  metaTitle: "Oak Park Balcony & Stucco Contractor, CA 91377 | Mier & Murphy",
  metaDescription:
    "Balcony reconstruction, stucco and drywall repair, remodeling, and water damage restoration in Oak Park, CA 91377, from a contractor with completed local projects. CA Lic. #1077044.",
  tagline: "SURROUNDING AREA · ZIP 91377",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "secondary",
  heroImage: projectInterior,
  heroDescription:
    "We have completed balcony and stucco repair projects right here in Oak Park. When we quote your project, we are drawing on work completed in this community, backed by 20 years of building experience.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Oak Park's family-oriented neighborhoods often mean scheduling remodels around school pickup and drop-off, and we plan crew hours with that in mind.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "We follow the IICRC S500 and S520 industry standards on every water and mold job in Oak Park, with no shortcuts on the drying phase.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "We completed a full drywall and stucco repair project in Oak Park, matching the existing texture closely enough that the patch is not visible.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Our Oak Park balcony reconstruction gave us hands-on experience with the structural repairs that SB-326 inspections call for.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Smaller-scale build-outs for Oak Park retail and professional offices, planned to avoid disrupting neighboring businesses.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Oak Park Homeowners Choose Mier & Murphy",
    paragraphs: [
      "We have completed real work in Oak Park, including a full balcony reconstruction and a drywall and stucco repair project.",
      "Oak Park is a tight-knit, family-oriented community where word travels fast when a contractor does a job well, or does not.",
      "We plan our Oak Park projects around school schedules and neighborhood routines whenever a homeowner asks us to.",
    ],
  },

  neighborhoodHighlights: [
    "Oak Park Unified School District area",
    "Kanan Road corridor",
    "Oak Hills",
    "Deerhill Road area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Balcony, Stucco, and General Contracting in Oak Park, CA 91377",
      serviceType: "General Contractor",
      description:
        "Balcony reconstruction and repair, drywall and stucco repair, remodeling, water damage restoration, and mold remediation in Oak Park, CA 91377.",
      url: PAGE_URL,
      provider: {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#organization`,
        name: "Mier & Murphy Builders",
        telephone: "+18059989082",
        url: `${SITE_URL}/`,
      },
      areaServed: {
        "@type": "Place",
        name: "Oak Park, California",
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
        { "@type": "ListItem", position: 3, name: "Oak Park", item: PAGE_URL },
      ],
    },
  ],
};

const Area91377 = () => <AreaPageTemplate data={data} />;

export default Area91377;