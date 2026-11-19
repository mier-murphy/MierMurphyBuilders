import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/VENTURA COUNTY (91319).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91319`;

const faqs = [
  {
    question: "What parts of Ventura County do you serve?",
    answer:
      "We are based in Thousand Oaks and serve the Conejo Valley, Newbury Park, Simi Valley, Moorpark, Camarillo, and other Ventura County communities for the right project.",
  },
  {
    question: "Does coastal versus inland location affect water damage risk?",
    answer:
      "Yes. Coastal humidity and inland heat create different moisture risks, so we assess each property's specific conditions.",
  },
  {
    question: "Do you handle SB-326 and SB-721 balcony repairs countywide?",
    answer:
      "Yes. The inspections are performed by qualified independent inspectors, such as licensed architects and structural engineers, and we complete the repairs their reports call for for HOAs and property managers across Ventura County.",
  },
  {
    question: "Are you licensed to work throughout Ventura County?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Do you take commercial projects throughout the county?",
    answer:
      "Yes. We coordinate retail and office build-outs around each business's lease timeline, wherever in the county the property is located.",
  },
];

const data: AreaPageData = {
  zipCode: "91319",
  cityName: "Ventura County",
  metaTitle: "Ventura County General Contractor | Mier & Murphy Builders",
  metaDescription:
    "Remodeling, water damage and mold remediation, stucco, and balcony repair across Ventura County from a Thousand Oaks contractor. CA Lic. #1077044.",
  tagline: "CORE SERVICE AREA · VENTURA COUNTY",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription:
    "From coastal properties to inland neighborhoods, our crews travel throughout Ventura County for the right project. Based in Thousand Oaks, we bring 20 years of building experience and a process that adapts to whatever conditions a specific property presents.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "No two Ventura County homes are quite alike, so every remodel starts with an in-person walkthrough rather than a standard package.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Coastal humidity and inland heat each create their own moisture risks in Ventura County, which is why we assess each home's specific conditions before starting.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The range of architectural styles across Ventura County means our stucco matching process has to adapt project to project.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "HOAs and property managers across Ventura County call us to complete the balcony repairs their SB-326 and SB-721 inspection reports call for.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Retail and office build-outs throughout the county, coordinated around each business's lease timeline.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Ventura County Property Owners Choose Mier & Murphy",
    paragraphs: [
      "Ventura County covers a huge range of conditions, from coastal humidity to inland heat, and we adjust our approach based on where a property actually sits, not a countywide assumption.",
      "Based in Thousand Oaks, we can reach much of Ventura County quickly for an estimate, and we plan each project around the local city's permitting requirements.",
      "Twenty years of building experience means we have handled a wide range of home ages, styles, and conditions.",
    ],
  },

  neighborhoodHighlights: [
    "Conejo Valley",
    "Newbury Park",
    "Simi Valley and Moorpark",
    "Camarillo area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Newbury Park", zip: "91320", href: "/areas/91320" },
    { name: "Simi Valley", zip: "93062", href: "/areas/93062" },
    { name: "Moorpark", zip: "93021", href: "/areas/93021" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Ventura County, CA",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement across Ventura County, California.",
      url: PAGE_URL,
      provider: {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#organization`,
        name: "Mier & Murphy Builders",
        telephone: "+18059989082",
        url: `${SITE_URL}/`,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Ventura County",
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
        { "@type": "ListItem", position: 3, name: "Ventura County", item: PAGE_URL },
      ],
    },
  ],
};

const Area91319 = () => <AreaPageTemplate data={data} />;

export default Area91319;