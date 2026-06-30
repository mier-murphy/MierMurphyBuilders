import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "91360",
  cityName: "Thousand Oaks",
  tagline: "Central Thousand Oaks' Most Trusted Contractor",
  heroHeadline: "Premier Luxury Builders & Complete Home Restoration in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription: "Serving the heart of Thousand Oaks for over two decades, Mier & Murphy delivers premium painting, stucco repair, water damage restoration, and mold remediation to one of Ventura County's most desirable residential communities. From the tree-lined streets near Wildwood Park to the established neighborhoods along Moorpark Road, we understand the unique character of 91360 homes.",
  stats: [
    { label: "Local Projects", value: "500+" },
    { label: "Years Serving T.O.", value: "20+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Response Time", value: "< 2hrs" },
  ],
  services: [
    { title: "Interior Painting", description: "Custom color consultations and flawless finishes for Thousand Oaks living rooms, bedrooms, and common areas. We specialize in Venetian plaster, Level-5 smoothwall, and designer accent walls.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "Weather-resistant coatings designed for the Conejo Valley's Mediterranean climate. Santa Barbara Smooth, Spanish Lace, and elastomeric finishes that protect against UV and Santa Ana winds.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "24/7 emergency water extraction and structural drying for Thousand Oaks homes. IICRC-certified technicians respond within 60 minutes to minimize damage from burst pipes, roof leaks, and storm flooding.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Complete mold inspection, containment, and removal following IICRC S520 standards. We address the root moisture source and restore affected areas to pre-loss condition.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Custom Renovations", description: "Kitchen and bathroom remodels, custom cabinetry, and whole-home renovations tailored to the architectural styles prevalent in central Thousand Oaks neighborhoods.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Insurance Restoration", description: "We work directly with your insurance provider to streamline the claims process. From initial assessment to final walkthrough, we handle the paperwork so you can focus on your family.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Why Thousand Oaks Homeowners Choose Mier & Murphy",
    paragraphs: [
      "Central Thousand Oaks is defined by its blend of mid-century ranch homes, updated contemporary residences, and sprawling estates nestled against the Santa Monica Mountains. Each architectural style demands a different approach to painting and restoration — and after 20+ years serving this community, we've mastered them all.",
      "The area experiences unique environmental challenges. Santa Ana winds can damage stucco and exterior paint, while the region's clay-heavy soil contributes to foundation moisture issues that can lead to interior water damage and mold growth. Our team understands these local conditions and applies preventive strategies alongside every restoration project.",
      "From the Conejo Valley Botanic Garden corridor to the family neighborhoods near Thousand Oaks High School, we've earned a reputation for craftsmanship that matches the community's high standards. Many of our clients come through referrals from neighbors who've experienced our attention to detail firsthand.",
    ],
  },
  neighborhoodHighlights: [
    "Wildwood Area",
    "Moorpark Road Corridor",
    "Conejo Valley Botanic Garden",
    "Lynn Ranch",
    "Thousand Oaks Civic Arts",
    "Janss Marketplace Area",
    "Hillcrest Center",
    "Borchard & Reino",
  ],
  faqs: [
    { question: "How quickly can you respond to a water emergency in Thousand Oaks?", answer: "Our team is based locally and can reach any address in Thousand Oaks within 60 minutes for emergency water damage calls. We maintain 24/7 dispatch specifically for local residents." },
    { question: "Do you handle HOA-compliant exterior painting in Thousand Oaks?", answer: "Absolutely. We're familiar with the color palettes and guidelines required by most Thousand Oaks HOAs. We can coordinate directly with your HOA board to ensure full compliance before work begins." },
    { question: "What's the best exterior paint for Thousand Oaks weather?", answer: "We recommend elastomeric coatings for stucco homes in 91360. These flexible paints expand and contract with temperature changes and resist cracking from Santa Ana wind exposure — critical for homes in the Conejo Valley." },
    { question: "Are you licensed and insured for work in Ventura County?", answer: "Yes. We hold a valid California Contractor's License (CSLB) and carry comprehensive general liability insurance plus workers' compensation. We're also IICRC-certified for water damage and mold remediation." },
    { question: "How much does interior painting cost in Thousand Oaks?", answer: "Interior painting in Thousand Oaks typically ranges from $3–$6 per square foot depending on prep work, finishes, and ceiling height. We provide free detailed estimates with no hidden fees." },
  ],
  nearbyAreas: [
    { name: "Newbury Park / Westlake", zip: "91362", href: "/areas/91362" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Newbury Park", zip: "91320", href: "/areas/91320" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Thousand Oaks 91360",
    description: "Premium painting, stucco, water damage restoration and mold remediation in Thousand Oaks 91360.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Thousand Oaks", addressRegion: "CA", postalCode: "91360" },
    telephone: "+1-805-555-0199",
    url: "https://mierandmurphy.com/areas/91360",
  },
};

const Area91360 = () => <AreaPageTemplate data={data} />;
export default Area91360;
