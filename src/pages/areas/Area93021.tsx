import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "93021",
  cityName: "Moorpark",
  tagline: "Moorpark' Most Trusted Contractor",
  heroHeadline: "Trusted Painters, Builders & Restoration Experts in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription: "Moorpark homeowners take pride in well-maintained homes, quiet neighborhoods, and lasting quality. At Mier & Murphy, we bring over two decades of craftsmanship to every project, helping homeowners protect, restore, and improve their properties with dependable service and attention to detail.",
  stats: [
    { label: "Projects Completed", value: "120+" },
    { label: "Years Experience", value: "20+" },
    { label: "Emergency Response", value: "24/7" },
    { label: "Licensed", value: "& Fully Insured" },
  ],
  services: [
    { title: "Interior Painting", description: "Whether you're updating a single room or refreshing your entire home, our interior painting services deliver clean finishes and lasting results. We protect your furniture, respect your home, and leave every space spotless.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "California sun can be tough on exterior finishes. We use premium coatings and proper preparation techniques that help Moorpark homes stay protected and looking great for years.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "From leaking pipes to unexpected flooding, our certified restoration team responds quickly to minimize damage and restore your home safely and efficiently.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Hidden moisture can quickly lead to mold problems. We locate the source, remove contaminated materials, and restore healthy indoor conditions while preventing future growth.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Home Renovations", description: "From kitchens and bathrooms to complete home remodels, we manage renovations with careful planning, quality craftsmanship, and clear communication from start to finish.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Cabinet Refinishing & Specialty Finishes", description: "Give your kitchen or built-ins a fresh new look without replacing them. We provide professional cabinet refinishing along with decorative textures and specialty finishes that fit your home's style.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Moorpark's Reliable Home Improvement Professionals",
    paragraphs: [
      "Moorpark offers a unique blend of established neighborhoods, newer communities, and rural properties. Homes throughout the area experience year-round sun exposure, seasonal winds, and changing temperatures that can affect paint, stucco, roofing systems, and exterior finishes over time.",
      "Our team understands these local conditions and recommends products and techniques that perform well in Ventura County's climate. Whether we're restoring water damage, repainting an exterior, or completing a major renovation, every project is completed with long-term durability in mind.",
      "We've earned the trust of homeowners throughout Moorpark by showing up on time, communicating clearly, and delivering workmanship that speaks for itself. Many of our projects come from referrals because clients know they'll receive honest recommendations and dependable results.",
    ],
  },
  neighborhoodHighlights: [
    "Campus Park",
    "Peach Hill",
    "Buttercreek Estates",
    "Home Acres",
    "Country Club Estates",
    "Moorpark Highlands",
    "Serenata",
    "Happy Camp Canyon Area",
  ],
  faqs: [
    { question: "How quickly can you respond to a water emergency in Moorpark?", answer: "Our team is based locally and can reach any address in Moorpark within 60 minutes for emergency water damage calls. We maintain 24/7 dispatch specifically for local residents." },
    { question: "Do you handle HOA-compliant exterior painting in Moorpark?", answer: "Absolutely. We're familiar with the color palettes and guidelines required by most Moorpark HOAs. We can coordinate directly with your HOA board to ensure full compliance before work begins." },
    { question: "What's the best exterior paint for Moorpark weather?", answer: "We recommend elastomeric coatings for stucco homes in 93021. These flexible paints expand and contract with temperature changes and resist cracking from Santa Ana wind exposure — critical for homes in the Conejo Valley." },
    { question: "Are you licensed and insured for work in Ventura County?", answer: "Yes. We hold a valid California Contractor's License (CSLB) and carry comprehensive general liability insurance plus workers' compensation. We're also IICRC-certified for water damage and mold remediation." },
    { question: "How much does interior painting cost in Moorpark?", answer: "Interior painting in Moorpark typically ranges from $3–$6 per square foot depending on prep work, finishes, and ceiling height. We provide free detailed estimates with no hidden fees." },
  ],
  nearbyAreas: [
    { name: "Simi Valley", zip: "91362", href: "/areas/91362" },
    { name: "Moorpark", zip: "91361", href: "/areas/91361" },
    { name: "Camarillo", zip: "91320", href: "/areas/91320" },
    { name: "Santa Rosa Valley", zip: "91301", href: "/areas/91301" },
    { name: "Ventura County", zip: "91377", href: "/areas/91377" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Moorpark 93021",
    description: "Premium painting, stucco, water damage restoration and mold remediation in Moorpark 93021.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Moorpark", addressRegion: "CA", postalCode: "93021" },
    telephone: "+1-805-555-0199",
    url: "https://mierandmurphy.com/areas/93021",
  },
};

const Area93021 = () => <AreaPageTemplate data={data} />;
export default Area93021;
