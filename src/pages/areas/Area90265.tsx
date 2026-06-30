import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "90265",
  cityName: "Malibu",
  tagline: "Premium Coastal Services",
  heroHeadline: "Coastal Luxury Builders, Marine-Grade Finishes & Restoration in",
  tier: "premium",
  heroImage: projectExterior,
  heroDescription: "Malibu's iconic coastal properties demand contractors who understand the unique challenges of oceanfront and canyon living. Mier & Murphy extends our luxury expertise to Malibu, providing specialized painting, restoration, and renovation services engineered for the salt air, coastal moisture, and discerning clientele.",
  stats: [
    { label: "Coastal Projects", value: "40+" },
    { label: "Avg. Project Value", value: "$30K+" },
    { label: "Salt-Air Expertise", value: "15yr" },
    { label: "Confidential Service", value: "NDA" },
  ],
  services: [
    { title: "Coastal Interior Finishes", description: "Humidity-resistant interior painting and plaster applications designed for Malibu's coastal environment. Low-moisture primers, breathable finishes, and salt-air-resistant coatings.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Oceanfront Exterior Protection", description: "Marine-grade exterior coatings that resist salt spray, UV degradation, and coastal wind erosion. Specialized stucco systems for beachfront and bluff-top properties.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water & Storm Damage Restoration", description: "Emergency restoration for Malibu homes affected by coastal storms, king tides, and cliff-side water intrusion. Our team responds 24/7 to protect these irreplaceable properties.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Coastal humidity creates persistent mold risks for Malibu homes. We provide comprehensive remediation with moisture barriers and ventilation improvements for long-term prevention.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Coastal Home Renovations", description: "Complete renovation services for Malibu properties — from oceanview kitchens to outdoor living spaces. We use marine-grade materials and corrosion-resistant hardware throughout.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Celebrity & VIP Service", description: "Confidential, NDA-protected service for Malibu's high-profile residents. Background-checked crews, private scheduling, and complete discretion.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Why Malibu's Elite Properties Choose Mier & Murphy",
    paragraphs: [
      "Malibu presents the most demanding environment for residential construction and maintenance in Southern California. Constant salt air exposure, coastal fog, UV intensity, and seasonal storms create conditions that destroy standard finishes within months. Our specialized coastal approach uses marine-grade materials and application techniques that provide lasting protection.",
      "From Carbon Beach to Point Dume, from Malibu Colony to Broad Beach, we've earned the trust of homeowners, property managers, and architects who manage some of the most valuable residential real estate in the world. Our portfolio includes beachfront estates, canyon retreats, and mountain-top properties — each requiring a different strategy.",
      "We maintain strict confidentiality for all Malibu clients. Many of our projects serve celebrity, entertainment industry, and ultra-high-net-worth clients who require NDA-protected service and vetted crew members. This discretion is non-negotiable and built into every engagement.",
    ],
  },
  neighborhoodHighlights: [
    "Carbon Beach",
    "Malibu Colony",
    "Point Dume",
    "Broad Beach",
    "Zuma Beach Area",
    "Malibu Canyon",
    "Serra Retreat",
    "Las Flores Canyon",
  ],
  faqs: [
    { question: "Do you use marine-grade materials for Malibu homes?", answer: "Exclusively. Every product we apply in 90265 is rated for coastal environments. This includes marine-grade primers, salt-resistant topcoats, corrosion-proof hardware, and UV-stable finishes." },
    { question: "Can you access beachfront properties for exterior work?", answer: "Yes, we have experience with the unique access challenges of beachfront properties. We coordinate with coastal commission requirements when applicable and use specialized equipment for bluff-side and pier-adjacent work." },
    { question: "How often should Malibu homes be repainted?", answer: "Due to salt air exposure, we recommend exterior repainting every 5-7 years for Malibu homes (vs. 8-10 years inland). With our marine-grade systems, many clients extend this to 8+ years." },
    { question: "Do you handle post-storm emergency repairs?", answer: "Yes, we provide 24/7 emergency response for Malibu properties affected by storms, mudslides, or flooding. We prioritize tarping, water extraction, and structural stabilization to minimize further damage." },
  ],
  nearbyAreas: [
    { name: "Calabasas / Westlake Village", zip: "91302", href: "/areas/91302" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Woodland Hills South", zip: "91364", href: "/areas/91364" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Malibu 90265",
    description: "Premium coastal painting, restoration and renovation in Malibu 90265.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Malibu", addressRegion: "CA", postalCode: "90265" },
    telephone: "+1-805-555-0199",
  },
};

const Area90265 = () => <AreaPageTemplate data={data} />;
export default Area90265;
