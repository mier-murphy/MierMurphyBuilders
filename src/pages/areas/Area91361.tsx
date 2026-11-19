import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/WESTLAKE VILLAGE (91361).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91361`;

const faqs = [
  {
    question: "Do you coordinate with HOAs in Westlake Village?",
    answer:
      "Yes. Many Westlake Village properties fall under HOA guidelines, and we coordinate approvals as part of the project timeline.",
  },
  {
    question: "Are lakeside homes more prone to water damage?",
    answer:
      "Homes closer to the lake can see moisture issues more often, and we adjust our drying and restoration approach for that.",
  },
  {
    question: "What stucco style is common in Westlake Village?",
    answer:
      "Many Westlake Village homes use Mediterranean-style hand-troweled finishes, which we match carefully rather than approximate.",
  },
  {
    question: "Do you handle SB-326 balcony repairs for condo buildings?",
    answer:
      "Yes. SB-326 inspections are performed by a licensed architect or structural engineer. We complete the repairs their reports call for and provide the repair documentation your HOA needs for its records.",
  },
  {
    question: "Are you licensed to work in Westlake Village?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
];

const data: AreaPageData = {
  zipCode: "91361",
  cityName: "Westlake Village",
  metaTitle: "Westlake Village General Contractor, CA 91361 | Mier & Murphy",
  metaDescription:
    "Remodeling, mold remediation, stucco, and SB-326 balcony repair in Westlake Village, CA 91361, with HOA coordination included. CA Lic. #1077044.",
  tagline: "CORE SERVICE AREA · ZIP 91361",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription:
    "Westlake Village's lakeside and hillside homes bring their own set of remodeling and repair needs, and we bring 20 years of experience to meet them. From HOA coordination to moisture-aware restoration, we plan around what makes this community different from the rest of the Conejo Valley.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Many Westlake Village properties fall under HOA guidelines, so we coordinate approvals alongside the construction timeline.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Homes closer to the lake can run into moisture issues more often, and we adjust our drying process for that.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The Mediterranean-style architecture common around Westlake Village calls for a specific hand-troweled texture, one we match carefully rather than approximate.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Westlake Village has many condominium communities. We complete the repairs their SB-326 inspections call for and document the work for the HOA's records.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Office build-outs and renovations for the business parks along Westlake Boulevard and across Westlake Village.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Westlake Village Homeowners Choose Mier & Murphy",
    paragraphs: [
      "Westlake Village combines lakeside properties, hillside lots, and a strong HOA presence, and each of those factors shapes how we plan a project before work even starts.",
      "Homes near the lake face moisture conditions that other properties may not, so our restoration approach here is built around that reality, not a one-size-fits-all process.",
      "We work directly with HOA boards when a project requires it, so approvals do not become the bottleneck on your timeline.",
    ],
  },

  neighborhoodHighlights: [
    "Westlake Boulevard corridor",
    "Triunfo Canyon area",
    "North Ranch",
    "Lake Sherwood area",
    "Westlake Lake vicinity",
  ],

  faqs,

  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Thousand Oaks / Westlake", zip: "91362", href: "/areas/91362" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Westlake Village, CA 91361",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Westlake Village, CA 91361.",
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
        name: "Westlake Village",
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
        { "@type": "ListItem", position: 3, name: "Westlake Village", item: PAGE_URL },
      ],
    },
  ],
};

const Area91361 = () => <AreaPageTemplate data={data} />;

export default Area91361;