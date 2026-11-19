import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/NEWBURY PARK  WESTLAKE (91362).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91362`;

const faqs = [
  {
    question: "What area does ZIP code 91362 cover?",
    answer:
      "91362 covers the eastern side of Thousand Oaks and part of Westlake Village. We serve all of it, along with neighboring 91360, 91361, and 91320.",
  },
  {
    question: "Are you based near the 91362 area?",
    answer:
      "Yes. We are based in Thousand Oaks, just minutes away, so we can reach this area quickly for estimates.",
  },
  {
    question: "Do you handle both older and newer homes here?",
    answer: "Yes. The 91362 area has both, and we scope each remodel or repair to the specific home.",
  },
  {
    question: "Are you licensed to work in this area?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Do you handle balcony repairs for condos and townhomes in 91362?",
    answer:
      "Yes. SB-326 inspections are performed by a licensed architect or structural engineer, and we complete the repairs their reports call for.",
  },
];

const data: AreaPageData = {
  zipCode: "91362",
  cityName: "Thousand Oaks / Westlake Village",
  metaTitle: "Thousand Oaks & Westlake Contractor, CA 91362 | Mier & Murphy",
  metaDescription:
    "Remodeling, water damage and mold remediation, stucco repair, and balcony repair in east Thousand Oaks and Westlake Village, CA 91362, from a local family-owned contractor. CA Lic. #1077044.",
  tagline: "CORE SERVICE AREA · ZIP 91362",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "primary",
  heroImage: projectInterior,
  heroDescription:
    "ZIP 91362 covers the eastern side of Thousand Oaks and part of Westlake Village, and we serve every home in it with 20 years of building experience. Being based just minutes away in Thousand Oaks means we can be on-site quickly for an estimate and stay accountable long after the job is done.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "The 91362 area mixes established homes with newer builds, and we tailor each remodel to the age and layout of the home.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "We find and repair the water source first, then dry, remediate, and rebuild, so the problem does not come back.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "This part of Thousand Oaks and Westlake mixes hillside and flat lots, and each puts different stress on stucco, which we assess before quoting a repair.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Balcony and deck repair for the condo and townhome communities in 91362, including the repairs SB-326 inspections call for.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Office and retail build-outs along East Thousand Oaks Boulevard, Westlake Boulevard, and the surrounding commercial areas.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why 91362 Homeowners Choose Mier & Murphy",
    paragraphs: [
      "The 91362 area spans the eastern side of Thousand Oaks and part of Westlake Village, with a blend of established homes and newer builds, and we approach each one on its own terms.",
      "Because we are based just minutes away in Thousand Oaks, this is home turf, and we can be on-site quickly for an estimate.",
      "Twenty years of building experience in the Conejo Valley means we already know the common quirks of homes in this part of town.",
    ],
  },

  neighborhoodHighlights: [
    "East Thousand Oaks Boulevard",
    "Westlake Boulevard corridor",
    "Hillcrest Drive area",
    "Janss Road area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Newbury Park", zip: "91320", href: "/areas/91320" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Thousand Oaks and Westlake Village, CA 91362",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in east Thousand Oaks and Westlake Village, CA 91362.",
      url: PAGE_URL,
      provider: {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#organization`,
        name: "Mier & Murphy Builders",
        telephone: "+18059989082",
        url: `${SITE_URL}/`,
      },
      areaServed: [
        { "@type": "City", name: "Thousand Oaks", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "Westlake Village", containedInPlace: { "@type": "State", name: "California" } },
      ],
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
        { "@type": "ListItem", position: 3, name: "Thousand Oaks / Westlake Village 91362", item: PAGE_URL },
      ],
    },
  ],
};

const Area91362 = () => <AreaPageTemplate data={data} />;

export default Area91362;