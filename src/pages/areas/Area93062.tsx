import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "93062",
  cityName: "Simi Valley",
  tagline: "Simi Valley' Most Trusted Contractor",
  heroHeadline: "Luxury Painting, Restoration & Renovation Experts in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription: "Simi Valley is known for its family neighborhoods, hillside homes, and well-kept properties. Whether you're updating an older home, repairing unexpected damage, or planning a full renovation, Mier & Murphy brings experienced craftsmanship and dependable service to every project.",
  stats: [
    { label: "Local Projects", value: "250+" },
    { label: "Years Experience", value: "20+" },
    { label: "Emergency Response", value: "24/7" },
    { label: "Licensed", value: "California Contractor" },
  ],
  services: [
    { title: "Interior Painting", description: "From contemporary homes to established neighborhoods, we provide clean, professional interior painting with careful preparation and premium finishes that hold up to everyday living.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "Simi Valley's warm summers and constant sun can wear down exterior finishes over time. Our coating systems help protect your home while improving curb appeal for years to come.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Whether caused by plumbing failures, roof leaks, or appliance issues, our restoration team responds quickly to reduce damage and restore your property with certified drying and repair methods.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Moisture hidden behind walls or beneath flooring can quickly become a mold problem. We identify the source, safely remove affected materials, and restore a healthy indoor environment.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Home Renovations", description: "Whether you're remodeling a kitchen, updating bathrooms, or renovating your entire home, our team manages every phase with quality workmanship and consistent communication.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Cabinet Refinishing & Specialty Finishes", description: "Refresh your home's interior without replacing everything. Our cabinet refinishing and custom finish work add lasting value while giving your space an updated look.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Serving Simi Valley Homeowners with Quality That Lasts",
    paragraphs: [
      "Simi Valley offers a wide variety of homes, from long-established neighborhoods to newer developments tucked against the surrounding hills. Each property has its own maintenance needs, especially with the area's warm climate, seasonal winds, and year-round sun exposure.",
      "Our crews understand how these local conditions affect paint, stucco, wood trim, and exterior materials. We recommend products that perform well in Ventura County and complete every project with long-term durability in mind.",
      "Whether we're restoring water damage after a plumbing issue or completing a full home renovation, our goal is always the same — quality work, honest communication, and results homeowners can feel confident about.",
    ],
  },
  neighborhoodHighlights: [
    "Wood Ranch",
    "Big Sky",
    "Texas Tract",
    "Mountain Valley",
    "Indian Hills",
    "Bridle Path",
    "Central Simi",
    "East Simi Valley",
  ],
  faqs: [
    { question: "How quickly can you respond to a water emergency in Simi Valley?", answer: "Our team is based locally and can reach any address in Simi Valley within 60 minutes for emergency water damage calls. We maintain 24/7 dispatch specifically for local residents." },
    { question: "Do you handle HOA-compliant exterior painting in Simi Valley?", answer: "Absolutely. We're familiar with the color palettes and guidelines required by most Simi Valley HOAs. We can coordinate directly with your HOA board to ensure full compliance before work begins." },
    { question: "What's the best exterior paint for Simi Valley weather?", answer: "We recommend elastomeric coatings for stucco homes in 93062. These flexible paints expand and contract with temperature changes and resist cracking from Santa Ana wind exposure — critical for homes in the Conejo Valley." },
    { question: "Are you licensed and insured for work in Ventura County?", answer: "Yes. We hold a valid California Contractor's License (CSLB) and carry comprehensive general liability insurance plus workers' compensation. We're also IICRC-certified for water damage and mold remediation." },
    { question: "How much does interior painting cost in Simi Valley?", answer: "Interior painting in Simi Valley typically ranges from $3–$6 per square foot depending on prep work, finishes, and ceiling height. We provide free detailed estimates with no hidden fees." },
  ],
  nearbyAreas: [
    { name: "Simi Valley", zip: "91362", href: "/areas/91362" },
    { name: "Simi Valley", zip: "91361", href: "/areas/91361" },
    { name: "Camarillo", zip: "91320", href: "/areas/91320" },
    { name: "Santa Rosa Valley", zip: "91301", href: "/areas/91301" },
    { name: "Ventura County", zip: "91377", href: "/areas/91377" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Simi Valley 93062",
    description: "Premium painting, stucco, water damage restoration and mold remediation in Simi Valley 93062.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Simi Valley", addressRegion: "CA", postalCode: "93062" },
    telephone: "+1-805-555-0199",
    url: "https://mierandmurphy.com/areas/93062",
  },
};

const Area93062 = () => <AreaPageTemplate data={data} />;
export default Area93062;
