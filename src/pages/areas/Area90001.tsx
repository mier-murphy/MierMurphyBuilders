import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/area91.jpeg";

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
    { question: "Do you work on older and historic homes?", answer: "Yes, we regularly work on historic residences and use materials and techniques suited to preserving original details." },
    { question: "Can you complete projects while the home is occupied?", answer: "Yes. We phase our work and use containment methods so daily life is disrupted as little as possible." },
    { question: "Do you coordinate with designers and property managers?", answer: "Yes, we're comfortable working from designer specs and coordinating with third-party project managers." },
  ],
  nearbyAreas: [
    { name: "Calabasas", zip: "91302", href: "/areas/91302" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Beverly Hills", zip: "", href: "/areas/" },
    { name: "Santa Monica", zip: "", href: "/areas/" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
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
