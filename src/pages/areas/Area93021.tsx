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
    { question: "Do you work on both newer and older homes?", answer: "Yes. Moorpark has a mix of older neighborhoods and newer developments, and we adjust prep and materials based on the home's age and condition." },
    { question: "Can you match existing exterior paint colors?", answer: " Yes, we color-match on-site so touch-ups and partial repaints blend seamlessly with the rest of the home." },
    { question: "Do you provide emergency water damage services in Moorpark?", answer: "Yes, we offer 24/7 emergency response across Moorpark, including rural properties near Happy Camp Canyon." },
 ],
  nearbyAreas: [
    { name: "Simi Valley", zip: "93062", href: "/areas/93062" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Camarillo", zip: "", href: "/areas/" },
    { name: "Santa Rosa Valley", zip: "", href: "/areas/" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
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
