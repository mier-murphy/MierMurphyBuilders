import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/CALABASAS (91302).webp";

const data: AreaPageData = {
  zipCode: "91302",
  cityName: "Calabasas",
  metaTitle: "General Contractor Calabasas CA 91302 | Mier & Murphy",
  metaDescription:
    "Luxury custom home construction, kitchen remodeling, and restoration services in Calabasas CA 91302 with Mier & Murphy Builders.",
tagline: "PREMIUM & EXTENDED · ZIP 91302",
  heroHeadline: "Remodeling and Repair Contractor Serving",
  tier: "premium",
  heroImage: projectExterior,
  heroDescription:
    "Calabasas' hillside and canyon lots call for a contractor comfortable working on more complex terrain. We bring 20 years of building experience to every Calabasas project, planning around access, custom finishes, and HOA requirements from the very first estimate.",


  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Hillside lots around Calabasas sometimes mean tighter access for materials and equipment, which we plan for before the first day of demolition.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Calabasas properties near canyon terrain can be more prone to slow, hidden leaks, and our inspection process is built to catch what a quick look would miss.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "The custom finishes found on many Calabasas homes take extra time to match correctly, and we treat that matching step as part of the job, not an afterthought.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "Calabasas has no shortage of HOA-managed condo communities, and SB-326 compliance is a recurring part of our work there.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "The commercial center near Calabasas Road has been the site of several of our retail and office build-outs.",
      icon: <Shield className="w-6 h-6 text-primary" />,
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

  faqs: [
    {
      question: "Do you work on hillside properties in Calabasas?",
      answer:
        "Yes, and we plan access and equipment staging around hillside lots before demolition starts.",
    },
    {
      question: "What causes hidden leaks in Calabasas homes?",
      answer:
        "Canyon-adjacent terrain can lead to slow, hidden leaks, which is why our inspection process looks beyond what is immediately visible.",
    },
    {
      question: "Do you handle SB-326 for Calabasas condo communities?",
      answer:
        "Yes, this is a recurring part of our work given how many HOA-managed communities are in Calabasas.",
    },
    {
      question: "Are you licensed to work in Calabasas?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question: "Do you take commercial projects near Calabasas Road?",
      answer:
        "Yes, we have completed several retail and office build-outs in that commercial center.",
    },
  ],

  nearbyAreas: [
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Malibu", zip: "90265", href: "/areas/90265" },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Calabasas 91302",
    description:
      "Remodeling, repair, water damage restoration, mold remediation, stucco repair, balcony repair and commercial tenant improvements in Calabasas, CA 91302.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Calabasas",
      addressRegion: "CA",
      postalCode: "91302",
    },
    telephone: "+1-805-998-9082",
    url: "https://mierandmurphybuilders.com/areas/91302",
  },
};

const Area91302 = () => <AreaPageTemplate data={data} />;

export default Area91302;