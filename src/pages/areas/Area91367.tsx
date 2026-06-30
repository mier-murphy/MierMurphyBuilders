import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "91367",
  cityName: "Woodland Hills",
  tagline: "San Fernando Valley's Premier Community",
  heroHeadline: "Luxury Interior & Exterior Specialists, Builders & Restorers in",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription: "Woodland Hills represents the best of the western San Fernando Valley — tree-lined streets, executive homes, and a community that values quality. Mier & Murphy extends our Conejo Valley expertise to Woodland Hills, delivering luxury-tier painting and restoration to this vibrant neighborhood.",
  stats: [
    { label: "Local Projects", value: "85+" },
    { label: "Executive Homes", value: "50+" },
    { label: "Client Satisfaction", value: "97%" },
    { label: "Warranty Coverage", value: "10yr" },
  ],
  services: [
    { title: "Interior Painting", description: "Elegant interior painting for Woodland Hills' executive homes. We specialize in the open floor plans, vaulted ceilings, and architectural details common in this upscale community.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "Weather-adaptive exterior coatings for Woodland Hills properties. Our finishes resist the valley's heat extremes and maintain a premium appearance year-round.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Fast-response water damage services for Woodland Hills homeowners. We protect hardwood floors, custom finishes, and structural integrity with certified restoration techniques.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Comprehensive mold solutions for Woodland Hills homes. From initial testing through final clearance, we ensure your home is safe and mold-free.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Home Renovations", description: "Kitchen, bathroom, and whole-home renovations that reflect Woodland Hills' evolving design trends. Modern aesthetics with timeless quality.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Pre-Sale Preparation", description: "Get your Woodland Hills home market-ready with our strategic refresh services. We focus on the improvements that maximize your selling price.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Woodland Hills' Trusted Home Improvement Partner",
    paragraphs: [
      "Woodland Hills (91367) has evolved into one of the western San Fernando Valley's most desirable addresses. The community's mix of mid-century modern homes, contemporary new builds, and sprawling ranch properties creates diverse opportunities for our skilled team.",
      "The area's mature oak trees, rolling terrain, and proximity to Topanga State Park create a micro-environment that affects home maintenance differently than flat valley locations. We understand these nuances and apply appropriate techniques for lasting results.",
      "Many Woodland Hills homeowners are relocating from or competing with Calabasas and Westlake Village markets. Our luxury-level craftsmanship helps 91367 properties meet those elevated standards without the premium ZIP code markup.",
    ],
  },
  neighborhoodHighlights: [
    "Warner Center",
    "Topanga Canyon Adjacent",
    "Mulholland Corridor",
    "Ventura Blvd Corridor",
    "El Camino Real",
    "Shoup Avenue Area",
    "Oxnard Street Corridor",
    "Calabasas Adjacent",
  ],
  faqs: [
    { question: "How does your pricing compare to typical valley contractors?", answer: "We offer competitive pricing backed by superior quality. While our work meets luxury standards, our efficient operations and bulk material purchasing keep costs reasonable for Woodland Hills homeowners." },
    { question: "Can you handle properties with large mature trees nearby?", answer: "Yes, we're experienced with the tree-canopy properties common in Woodland Hills. We take precautions to protect landscaping and work around root systems during any exterior or structural work." },
    { question: "Do you offer pre-listing renovation packages?", answer: "We offer a popular pre-sale package that includes interior painting, exterior touch-ups, and targeted repairs designed to maximize ROI for Woodland Hills home sellers." },
  ],
  nearbyAreas: [
    { name: "Calabasas / Westlake Village", zip: "91302", href: "/areas/91302" },
    { name: "Woodland Hills South", zip: "91364", href: "/areas/91364" },
    { name: "Chatsworth", zip: "91311", href: "/areas/91311" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Woodland Hills 91367",
    description: "Professional painting, restoration and renovation in Woodland Hills 91367.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Woodland Hills", addressRegion: "CA", postalCode: "91367" },
    telephone: "+1-805-555-0199",
  },
};

const Area91367 = () => <AreaPageTemplate data={data} />;
export default Area91367;
