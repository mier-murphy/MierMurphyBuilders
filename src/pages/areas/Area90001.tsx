import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "90001",
  cityName: "Los Angeles",
  tagline: "Los Angeles' Most Trusted Contractor",
  heroHeadline: "Premium Painting, Restoration & Renovation Services in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription: "Los Angeles is home to everything from historic residences and luxury estates to modern homes and investment properties. Mier & Murphy provides dependable painting, restoration, and renovation services across Los Angeles with the craftsmanship, professionalism, and responsiveness homeowners expect.",
  stats: [
    { label: "Projects Completed", value: "500+" },
    { label: "Years Serving Southern California", value: "20+" },
    { label: "Emergency Response", value: "24/7" },
    { label: "Licensed", value: "& & Luxury Homes" },
  ],
  services: [
    { title: "Interior Painting", description: "Beautiful interior finishes for homes throughout Los Angeles. Whether you're refreshing a condo, updating a family home, or preparing a luxury property for sale, we deliver clean results with minimal disruption.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting", description: "Los Angeles homes face constant exposure to sun, pollution, and changing weather. Our exterior painting systems are designed to protect surfaces while maintaining lasting curb appeal.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Water emergencies require immediate action. Our certified restoration team responds quickly to minimize damage and begin the recovery process before problems become more expensive.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "We provide complete mold inspection, containment, removal, and restoration services to safely return your home to healthy living conditions.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Custom Home Renovations", description: "Whether you're modernizing a single room or remodeling an entire home, we bring experienced project management and skilled craftsmanship to every renovation.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Specialty Finishes", description: "From decorative wall textures to custom plaster and premium architectural coatings, we create finishes that complement Los Angeles' diverse home styles.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Experienced Across Los Angeles Homes",
    paragraphs: [
      "No two neighborhoods in Los Angeles are alike. Historic homes, hillside properties, modern construction, and luxury residences all require different materials, techniques, and planning.",
      "Our team has experience working on a wide range of residential properties throughout Southern California. We understand local permitting requirements, varying architectural styles, and the importance of maintaining both craftsmanship and schedules.",
      "Whether your project is a simple repaint or a complete renovation, we approach every home with the same attention to detail, respect, and commitment to quality.",
    ],
  },
  neighborhoodHighlights: [
    "Brentwood",
    "Pacific Palisades",
    "Bel Air",
    "Sherman Oaks",
    "Studio City",
    "Encino",
    "Hollywood Hills",
    "West Los Angeles",
  ],
  faqs: [
    { question: "How quickly can you respond to a water emergency in Los Angeles?", answer: "Our team is based locally and can reach any address in Los Angeles within 60 minutes for emergency water damage calls. We maintain 24/7 dispatch specifically for local residents." },
    { question: "Do you handle HOA-compliant exterior painting in Los Angeles?", answer: "Absolutely. We're familiar with the color palettes and guidelines required by most Los Angeles HOAs. We can coordinate directly with your HOA board to ensure full compliance before work begins." },
    { question: "What's the best exterior paint for Los Angeles weather?", answer: "We recommend elastomeric coatings for stucco homes in 90001. These flexible paints expand and contract with temperature changes and resist cracking from Santa Ana wind exposure — critical for homes in the Conejo Valley." },
    { question: "Are you licensed and insured for work in Ventura County?", answer: "Yes. We hold a valid California Contractor's License (CSLB) and carry comprehensive general liability insurance plus workers' compensation. We're also IICRC-certified for water damage and mold remediation." },
    { question: "How much does interior painting cost in Los Angeles?", answer: "Interior painting in Los Angeles typically ranges from $3–$6 per square foot depending on prep work, finishes, and ceiling height. We provide free detailed estimates with no hidden fees." },
  ],
  nearbyAreas: [
    { name: "Simi Valley", zip: "91362", href: "/areas/91362" },
    { name: "Los Angeles", zip: "91361", href: "/areas/91361" },
    { name: "Camarillo", zip: "91320", href: "/areas/91320" },
    { name: "Santa Rosa Valley", zip: "91301", href: "/areas/91301" },
    { name: "Ventura County", zip: "91377", href: "/areas/91377" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Los Angeles 90001",
    description: "Premium painting, stucco, water damage restoration and mold remediation in Los Angeles 90001.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", postalCode: "90001" },
    telephone: "+1-805-555-0199",
    url: "https://mierandmurphy.com/areas/90001",
  },
};

const Area90001 = () => <AreaPageTemplate data={data} />;
export default Area90001;
