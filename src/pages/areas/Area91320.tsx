import { Bath, Droplets, PaintRoller, Hammer, Building2 } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/areas/NEWBURY PARK (91320).webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas/91320`;

const faqs = [
  {
    question: "Do you work on older homes in Newbury Park?",
    answer:
      "Yes. Much of our Newbury Park work is on established homes that need updated plumbing or layouts as part of a remodel.",
  },
  {
    question: "What causes stucco cracking on Newbury Park hillside homes?",
    answer:
      "Settling and drainage around hillside lots are common causes. We assess whether a crack is cosmetic or points to something structural.",
  },
  {
    question: "Do you handle balcony repairs for apartment or condo buildings?",
    answer:
      "Yes. SB-326 and SB-721 inspections are performed by a qualified independent inspector, and we complete the repairs their reports call for on multi-family properties throughout Newbury Park.",
  },
  {
    question: "Are you licensed to work in Newbury Park?",
    answer: "Yes. We are a licensed California contractor, CA Lic. #1077044.",
  },
  {
    question: "Can you match textured stucco on an older Newbury Park home?",
    answer: "In most cases, yes. We assess the existing finish at your estimate and tell you what is achievable.",
  },
];

const data: AreaPageData = {
  zipCode: "91320",
  cityName: "Newbury Park",
  metaTitle: "Newbury Park General Contractor, CA 91320 | Mier & Murphy",
  metaDescription:
    "Remodeling, water damage and mold remediation, stucco, and balcony repair in Newbury Park, CA 91320, from a local family contractor. CA Lic. #1077044.",
  tagline: "CORE SERVICE AREA · ZIP 91320",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "primary",
  heroImage: projectInterior,
  heroDescription:
    "Newbury Park's older neighborhoods and hillside lots keep our crews busy year-round, and we bring 20 years of building experience to every project here. Whether it is a plumbing update, a stucco repair, or a full remodel, we walk every job with you from the first estimate to the final walkthrough.",

  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Many Newbury Park homes are original to their neighborhoods, so remodels here often involve updating outdated plumbing and layouts, not just fixtures.",
      icon: <Bath className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Slab leaks and roof leaks are common calls from Newbury Park, and we handle drying and mold prevention as one job so nothing gets missed.",
      icon: <Droplets className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Hillside lots around Newbury Park tend to show settling cracks in stucco over time. We assess whether it is cosmetic or worth a closer look.",
      icon: <PaintRoller className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Balcony and deck repair for Newbury Park apartment and condo communities, including the repairs called for by SB-326 and SB-721 inspections.",
      icon: <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Office and retail build-outs in Newbury Park, including the commercial areas off Ventu Park Road.",
      icon: <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    },
  ],

  localContent: {
    heading: "Why Newbury Park Homeowners Choose Mier & Murphy",
    paragraphs: [
      "Newbury Park's mix of older established homes and hillside lots means no two projects here look quite the same, so we start every job with an in-person walkthrough, not a phone estimate.",
      "The hillside terrain around Newbury Park can affect drainage and moisture over time, which we factor into both repair and restoration work.",
      "We are based next door in Thousand Oaks, close enough to be on-site quickly for an estimate and to stay accountable after the job is done.",
    ],
  },

  neighborhoodHighlights: [
    "Reino Road area",
    "Ventu Park Road",
    "Borchard area",
    "Casa Conejo",
    "Newbury Park High School area",
  ],

  faqs,

  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Moorpark", zip: "93021", href: "/areas/93021" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
  ],

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "General Contracting in Newbury Park, CA 91320",
      serviceType: "General Contractor",
      description:
        "Remodeling, water damage restoration, mold remediation, drywall and stucco repair, balcony repair, and commercial tenant improvement in Newbury Park, CA 91320.",
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
        name: "Newbury Park",
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
        { "@type": "ListItem", position: 3, name: "Newbury Park", item: PAGE_URL },
      ],
    },
  ],
};

const Area91320 = () => <AreaPageTemplate data={data} />;

export default Area91320;