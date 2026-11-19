import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/THOUSAND OAKS (91360).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91360`;

const faqs = [
  {
    question: "How quickly can you respond to a water damage call in Thousand Oaks?",
    answer:
      "We are based in Thousand Oaks. Call us and we will tell you how quickly we can get to you based on your situation and location.",
  },
  {
    question: "Do you handle HOA-managed properties in Thousand Oaks?",
    answer:
      "Yes, particularly for balcony and deck repair. SB-326 inspections are performed by a licensed architect or structural engineer, and we complete the repairs their reports call for, coordinating with the HOA throughout.",
  },
  {
    question: "What stucco finishes are common in Thousand Oaks?",
    answer:
      "We see everything from smooth Santa Barbara-style finishes to sand and float texture, and we match whatever is already on your home.",
  },
  {
    question: "Are you licensed to work in Thousand Oaks and Ventura County?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "How long does a bathroom remodel take in Thousand Oaks?",
    answer:
      "Most bathroom remodels take a few weeks from demolition to final walkthrough. We give you a project-specific timeline at your estimate.",
  },
];

const data: AreaPageData = {
  zipCode: "91360",
  cityName: "Thousand Oaks",
  metaTitle: "Thousand Oaks General Contractor, CA 91360 | Mier & Murphy",
  metaDescription:
    "Family-owned contractor in Thousand Oaks, CA 91360: remodeling, water damage and mold remediation, stucco, and balcony repair. CA Lic. #1077044.",
  tagline: "CORE SERVICE AREA · ZIP 91360",
  heroHeadline: "Family-Owned Remodeling and Restoration in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription:
    "Mier & Murphy Builders is based right here in Thousand Oaks, with 20 years of building experience across remodeling, restoration, and repair. We know these neighborhoods because we live and work in them every day, not because a map says we cover this ZIP code.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Thousand Oaks is where we do most of our remodeling work, and we handle permits and inspections directly with the city.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "After our own family's experience with mold, we treat every Thousand Oaks water damage call the same way: find the source first, then fix what it left behind.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Between the ranch-style homes near downtown and the newer builds near Dos Vientos, we have matched just about every stucco texture Thousand Oaks has to offer.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Thousand Oaks has many condo and townhome communities, and we complete the balcony repairs their SB-326 inspections call for.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Small retail spaces along Thousand Oaks Boulevard often need a build-out that fits a tight opening timeline, and we plan the work around it from day one.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Thousand Oaks Homeowners Choose Mier & Murphy",
    paragraphs: [
      "Thousand Oaks covers a wide mix of home styles, from mid-century ranch homes to newer builds near Dos Vientos, and each one calls for a slightly different approach to repair and remodeling.",
      "Santa Ana winds and the region's clay-heavy soil both put real stress on stucco and foundations here. We plan for those conditions rather than treating every wall the same way.",
      "Twenty years in this community means many of our new calls come from a referral: a neighbor, a past client, or someone who saw our work firsthand.",
    ],
  },

  neighborhoodHighlights: [
    "Lynn Ranch",
    "Moorpark Road Corridor",
    "Dos Vientos",
    "Wildwood Park area",
    "Thousand Oaks Boulevard",
    "Janss Marketplace area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Thousand Oaks / Westlake", zip: "91362", href: "/areas/91362" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Newbury Park", zip: "91320", href: "/areas/91320" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
    { name: "Moorpark", zip: "93021", href: "/areas/93021" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Thousand Oaks, CA 91360",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Thousand Oaks, CA 91360.",
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
        name: "Thousand Oaks",
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
        { "@type": "ListItem", position: 3, name: "Thousand Oaks", item: PAGE_URL },
      ],
    },
  ],
};

const Area91360 = () => <AreaPageTemplate data={data} />;

export default Area91360;