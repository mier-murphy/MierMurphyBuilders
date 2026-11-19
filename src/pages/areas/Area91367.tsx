import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/WOODLAND HILLS (91367).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91367`;

const faqs = [
  {
    question: "Do you work on both older and newer homes in Woodland Hills?",
    answer:
      "Yes. Woodland Hills has a wide mix, from mid-century builds to newer construction, and we assess each one individually.",
  },
  {
    question: "How do you handle water damage restoration in Woodland Hills?",
    answer: "We treat extraction, drying, and mold remediation as one connected process rather than separate jobs.",
  },
  {
    question: "Do you handle balcony repairs for Woodland Hills condos and apartments?",
    answer:
      "Yes. SB-326 and SB-721 inspections are performed by qualified independent inspectors, such as licensed architects and structural engineers, and we complete the repairs their reports call for.",
  },
  {
    question: "Are you licensed to work in Woodland Hills?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Do you take commercial build-outs near Ventura Boulevard?",
    answer: "Yes. We handle office and retail build-outs along the Ventura Boulevard corridor and in the Warner Center area.",
  },
];

const data: AreaPageData = {
  zipCode: "91367",
  cityName: "Woodland Hills",
  metaTitle: "Woodland Hills General Contractor, CA 91367 | Mier & Murphy",
  metaDescription:
    "Remodeling, water damage and mold remediation, stucco repair, SB-326 and SB-721 balcony repair, and commercial build-outs in Woodland Hills, CA 91367. CA Lic. #1077044.",
  tagline: "EXTENDED SERVICE AREA · ZIP 91367",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "Woodland Hills sits at the edge of our extended service area, and we take on select projects here. From mid-century homes to newer construction and a dense stretch of condo properties, we bring 20 years of experience to a wide range of property types.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Woodland Hills homes range from mid-century builds to newer construction, so our first estimate visit is about understanding what is actually behind the walls.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "We treat extraction, drying, and mold remediation as one connected process for Woodland Hills homeowners, since separating them is how problems get missed.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Stucco texture on Woodland Hills homes varies a lot by neighborhood, and we assess each wall individually rather than assuming one finish fits all.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Woodland Hills has a large stock of condos and apartments, and we complete the balcony repairs their SB-326 and SB-721 inspections call for.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Office and retail build-outs along the Ventura Boulevard corridor and in the Warner Center area.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Woodland Hills Property Owners Choose Mier & Murphy",
    paragraphs: [
      "Woodland Hills covers everything from mid-century homes to newer construction, so we start every estimate by understanding the property, not making assumptions based on the neighborhood.",
      "With so much condo and apartment stock, balcony repair tied to SB-326 and SB-721 inspections is an important part of the work we offer here.",
      "We travel into Woodland Hills for the right project, bringing the same process and standards we use throughout the Conejo Valley.",
    ],
  },

  neighborhoodHighlights: [
    "Ventura Boulevard corridor",
    "Warner Center area",
    "Walnut Acres",
    "Woodland Hills Country Club area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Woodland Hills South", zip: "91364", href: "/areas/91364" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
    { name: "Chatsworth", zip: "91311", href: "/areas/91311" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Woodland Hills, CA 91367",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Woodland Hills, CA 91367.",
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
        { "@type": "ListItem", position: 3, name: "Woodland Hills", item: PAGE_URL },
      ],
    },
  ],
};

const Area91367 = () => <AreaPageTemplate data={data} />;

export default Area91367;