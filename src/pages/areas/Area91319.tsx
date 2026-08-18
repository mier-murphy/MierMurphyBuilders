import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "91319",
  cityName: "Ventura county",
  tagline: "Ventura county' Most Trusted Contractor",
  heroHeadline: "Complete Home Solutions Across",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription: "Ventura county homeowners take pride in well-maintained homes, quiet neighborhoods, and lasting quality. At Mier & Murphy, we bring over two decades of craftsmanship to every project, helping homeowners protect, restore, and improve their properties with dependable service and attention to detail.",

  services: [
    { title: "Interior Painting", description: "Professional interior painting designed to refresh your living spaces while protecting your home throughout every stage of the project.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Protective Coatings", description: "From coastal moisture to inland heat, Ventura County homes face different environmental conditions. We recommend the right products for each location to maximize durability and appearance.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Fast, certified restoration services for water damage caused by plumbing failures, roof leaks, storms, and unexpected emergencies.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "We identify moisture problems, remove mold safely, and restore healthy indoor environments using industry-approved remediation methods.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Home Renovations", description: "Our renovation team handles kitchens, bathrooms, additions, and full-home remodeling projects with experienced project management from start to finish.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "HOA & Estate Maintenance", description: "We also partner with property managers, HOAs, and estate owners for ongoing maintenance, repainting, and restoration services throughout Ventura County.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Proudly Serving Communities Throughout Ventura County",
    paragraphs: [
      "Every city within Ventura County has its own character. Coastal communities deal with salt air and moisture, while inland neighborhoods experience higher temperatures and stronger UV exposure. Understanding these differences helps us recommend the right materials for every project.",
      "For more than two decades, we've helped homeowners protect, restore, and improve properties throughout the county. Our team is known for dependable communication, quality workmanship, and treating every home with respect.",
      "Whether you're maintaining a family home, restoring water damage, or planning a major renovation, we're committed to delivering results that last.",
    ],
  },
  neighborhoodHighlights: [
    "Thousand Oaks",
    "Moorpark",
    "Camarillo",
    "Newbury Park",
    "Simi Valley",
    "Oak Park",
    "Westlake Village",
    "Ventura",
  ],
  faqs: [
    { question: "How quickly can you respond to a water emergency in Ventura county?", answer: "Our team is based locally and can reach any address in Ventura county within 60 minutes for emergency water damage calls. We maintain 24/7 dispatch specifically for local residents." },
    { question: "Do you handle HOA-compliant exterior painting in Ventura county?", answer: "Absolutely. We're familiar with the color palettes and guidelines required by most Ventura county HOAs. We can coordinate directly with your HOA board to ensure full compliance before work begins." },
    { question: "What's the best exterior paint for Ventura county weather?", answer: "We recommend elastomeric coatings for stucco homes in 91319. These flexible paints expand and contract with temperature changes and resist cracking from Santa Ana wind exposure — critical for homes in the Conejo Valley." },
    { question: "Are you licensed and insured for work in Ventura County?", answer: "Yes. We hold a valid California Contractor's License (CSLB) and carry comprehensive general liability insurance plus workers' compensation. We're also IICRC-certified for water damage and mold remediation." },
    { question: "How much does interior painting cost in Ventura county?", answer: "Interior painting in Ventura county typically ranges from $3–$6 per square foot depending on prep work, finishes, and ceiling height. We provide free detailed estimates with no hidden fees." },
  ],
  nearbyAreas: [
    { name: "Los Angeles", zip: "90001", href: "/areas/90001" },
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Conejo Valley", zip: "", href: "/areas/" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Ventura county 91319",
    description: "Premium painting, stucco, water damage restoration and mold remediation in Ventura county 91319.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Ventura county", addressRegion: "CA", postalCode: "91319" },
    telephone: "+1-805-998-9082",
    url: "https://mierandmurphy.com/areas/91319",
  },
};

const Area91319 = () => <AreaPageTemplate data={data} />;
export default Area91319;
