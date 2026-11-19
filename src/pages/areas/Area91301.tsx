import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/AGOURA HILLS (91301).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91301`;

const faqs = [
  {
    question: "Do you work on older homes in Old Agoura?",
    answer: "Yes, and we flag any plumbing or code updates needed before a remodel moves forward.",
  },
  {
    question: "How does canyon terrain affect water damage risk?",
    answer:
      "Canyon-adjacent homes see their own moisture patterns, and we factor that terrain into our drying and restoration approach.",
  },
  {
    question: "Do you handle balcony repair for Kanan Road properties?",
    answer:
      "Yes, including structural balcony repair for multi-unit properties. Required SB-326 and SB-721 inspections are performed by a qualified independent inspector, and we complete the repairs their reports call for.",
  },
  {
    question: "Are you licensed to work in Agoura Hills?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "What stucco styles do you match in Agoura Hills?",
    answer:
      "Everything from ranch-style to more modern finishes. We assess the existing texture before starting any repair.",
  },
];

const data: AreaPageData = {
  zipCode: "91301",
  cityName: "Agoura Hills",
  metaTitle: "Agoura Hills General Contractor, CA 91301 | Mier & Murphy",
  metaDescription:
    "Remodeling, water damage and mold remediation, stucco repair, and balcony repair in Agoura Hills, CA 91301, from Old Agoura to the hillside neighborhoods. CA Lic. #1077044.",
  tagline: "SURROUNDING AREA · ZIP 91301",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "Between Old Agoura's rustic properties and the newer hillside developments, Agoura Hills covers a lot of ground, and so do we. Twenty years of building experience across varied terrain and architectural styles means we do not treat every estimate the same way.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Older Agoura Hills homes sometimes need plumbing brought up to current code before a remodel can move forward, something we flag at the estimate stage.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Canyon-adjacent homes in Agoura Hills see their own set of moisture challenges, and we account for that terrain when planning a drying strategy.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "From ranch-style to more modern builds, Agoura Hills has a wide mix of finishes, and matching them accurately takes real assessment work up front.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Structural balcony and deck repair for multi-unit properties and HOA communities, including repairs called for by SB-326 and SB-721 inspections.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Build-out and renovation work for retail and office spaces along the Kanan Road commercial corridor and across Agoura Hills.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Agoura Hills Homeowners Choose Mier & Murphy",
    paragraphs: [
      "Agoura Hills spans everything from Old Agoura's rustic, ranch-style properties to newer hillside developments, and we treat every estimate as its own project rather than a template.",
      "Canyon terrain around Agoura Hills creates moisture and drainage patterns that flatter neighborhoods do not have, and that shapes how we approach restoration work here.",
      "Twenty years of building experience across the Conejo Valley means we have seen most of what Agoura Hills homes can throw at a remodel or repair.",
    ],
  },

  neighborhoodHighlights: [
    "Old Agoura",
    "Kanan Road corridor",
    "Morrison Ranch Park area",
    "Chesebro area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Agoura Hills, CA 91301",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Agoura Hills, CA 91301.",
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
        name: "Agoura Hills",
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
        { "@type": "ListItem", position: 3, name: "Agoura Hills", item: PAGE_URL },
      ],
    },
  ],
};

const Area91301 = () => <AreaPageTemplate data={data} />;

export default Area91301;