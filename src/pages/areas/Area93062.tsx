import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/SIMI VALLEY (93062).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/93062`;

const faqs = [
  {
    question: "Have you completed real projects in Simi Valley?",
    answer:
      "Yes. We completed a full bathroom remodel in Simi Valley, from the initial estimate through the final walkthrough.",
  },
  {
    question: "Do older Simi Valley homes have hidden plumbing issues?",
    answer:
      "Sometimes. Older tract homes can hide leaks behind walls, which is why we inspect thoroughly before starting restoration work.",
  },
  {
    question: "Do you handle balcony repairs near Simi Valley Town Center?",
    answer:
      "Yes. We complete balcony repair work for HOA-managed communities in that area. Required SB-326 and SB-721 inspections are performed by a qualified independent inspector, and we complete the repairs their reports call for.",
  },
  {
    question: "Are you licensed to work in Simi Valley?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "How do you match older Simi Valley stucco?",
    answer:
      "We pay close attention to color fade on older sections and match both texture and tone as closely as possible.",
  },
];

const data: AreaPageData = {
  zipCode: "93062",
  cityName: "Simi Valley",
  metaTitle: "Simi Valley General Contractor, CA 93062 | Mier & Murphy",
  metaDescription:
    "Bathroom and kitchen remodeling, water damage and mold remediation, stucco repair, and balcony repair in Simi Valley, CA 93062. CA Lic. #1077044.",
  tagline: "SURROUNDING AREA · ZIP 93062",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription:
    "We have completed a full bathroom remodel in Simi Valley, start to finish. Our family-owned team brings 20 years of building experience to remodeling, restoration, and repair for Simi Valley homes and HOA communities.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Our Simi Valley bathroom remodel followed the same process we use everywhere: an in-home estimate, permitting, and a realistic timeline the homeowner could plan around.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Simi Valley's older tract homes occasionally hide leaks behind walls. We find the moisture source first, then dry, remediate, and rebuild.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Ranch and tract-style stucco is the most common finish we repair in Simi Valley, and we watch closely for color fade when matching older sections.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "HOA-managed communities near the Simi Valley Town Center have brought us regular balcony repair work, including repairs called for by SB-326 and SB-721 inspections.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Build-out and renovation work for retail and office spaces along Simi Valley's commercial corridors, including Cochran Street.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Simi Valley Homeowners Choose Mier & Murphy",
    paragraphs: [
      "We have completed a full bathroom remodel in Simi Valley, from the first in-home estimate through the final walkthrough, using the same process we bring to every project.",
      "Simi Valley's older tract homes sometimes hide plumbing or moisture issues behind the walls, so our restoration work here starts with a thorough inspection, not assumptions.",
      "From Wood Ranch to the Big Sky area, we bring the same licensed, family-owned approach to every remodel, restoration, and repair, with clear scopes and honest timelines.",
    ],
  },

  neighborhoodHighlights: [
    "Simi Valley Town Center area",
    "Cochran Street corridor",
    "Wood Ranch",
    "Big Sky area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Moorpark", zip: "93021", href: "/areas/93021" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Chatsworth", zip: "91311", href: "/areas/91311" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Simi Valley, CA 93062",
      serviceType: "General Contractor",
      description:
        "Bathroom and kitchen remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Simi Valley, CA 93062.",
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
        name: "Simi Valley",
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
        { "@type": "ListItem", position: 3, name: "Simi Valley", item: PAGE_URL },
      ],
    },
  ],
};

const Area93062 = () => <AreaPageTemplate data={data} />;

export default Area93062;