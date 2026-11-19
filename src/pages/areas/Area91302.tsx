import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/CALABASAS (91302).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91302`;

const faqs = [
  {
    question: "Do you work on hillside properties in Calabasas?",
    answer: "Yes, and we plan access and equipment staging around hillside lots before demolition starts.",
  },
  {
    question: "What causes hidden leaks in Calabasas homes?",
    answer:
      "Canyon-adjacent terrain can lead to slow, hidden leaks, which is why our inspection process looks beyond what is immediately visible.",
  },
  {
    question: "Do you handle SB-326 balcony repairs for Calabasas condo communities?",
    answer:
      "Yes. SB-326 inspections are performed by a licensed architect or structural engineer, and we complete the repairs their reports call for in HOA-managed communities.",
  },
  {
    question: "Are you licensed to work in Calabasas?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Do you take commercial projects near Calabasas Road?",
    answer: "Yes. We handle retail and office build-outs and renovations in Calabasas, including the Calabasas Road area.",
  },
];

const data: AreaPageData = {
  zipCode: "91302",
  cityName: "Calabasas",
  metaTitle: "Calabasas General Contractor, CA 91302 | Mier & Murphy",
  metaDescription:
    "Remodeling, mold remediation, stucco, and SB-326 balcony repair in Calabasas, CA 91302, for hillside homes and HOA communities. CA Lic. #1077044.",
  tagline: "EXTENDED SERVICE AREA · ZIP 91302",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "Calabasas' hillside and canyon lots call for a contractor comfortable working on more complex terrain. We bring 20 years of building experience to every Calabasas project, planning around access, custom finishes, and HOA requirements from the very first estimate.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Hillside lots around Calabasas sometimes mean tighter access for materials and equipment, which we plan for before the first day of demolition.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Calabasas properties near canyon terrain can be more prone to slow, hidden leaks, and our inspection process is built to catch what a quick look would miss.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The custom finishes found on many Calabasas homes take extra time to match correctly, and we treat that matching step as part of the job, not an afterthought.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Calabasas has many HOA-managed condo communities, and we complete the balcony repairs that SB-326 inspections call for.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Retail and office build-outs and renovations across Calabasas, including the commercial areas along Calabasas Road.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Calabasas Property Owners Choose Mier & Murphy",
    paragraphs: [
      "Calabasas properties often sit on hillside or canyon lots, which changes how we approach access, equipment staging, and even the order of construction tasks.",
      "We treat every Calabasas estimate as its own project, since custom finishes and unique layouts are common here.",
      "Twenty years of building experience means we do not treat a more complex property as a reason to cut corners on process.",
    ],
  },

  neighborhoodHighlights: [
    "Calabasas Road area",
    "The Oaks area",
    "Mureau Road corridor",
    "Old Town Calabasas",
  ],

  faqs,

  nearbyAreas: [
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Malibu", zip: "90265", href: "/areas/90265" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Calabasas, CA 91302",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Calabasas, CA 91302.",
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
        name: "Calabasas",
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
        { "@type": "ListItem", position: 3, name: "Calabasas", item: PAGE_URL },
      ],
    },
  ],
};

const Area91302 = () => <AreaPageTemplate data={data} />;

export default Area91302;