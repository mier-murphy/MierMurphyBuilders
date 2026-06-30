import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "91361",
  cityName: "Westlake Village",
  tagline: "Premium Segment Specialists",
  heroHeadline: "Luxury Home Builders & Full-Service Restoration in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription: "Westlake Village's luxury lakeside community demands nothing less than perfection. Mier & Murphy provides the elite-level painting, restoration, and renovation services that Westlake Village's distinguished properties deserve — from waterfront estates to gated community masterpieces.",
  stats: [
    { label: "Local Projects", value: "280+" },
    { label: "Avg. Home Value", value: "$1.5M+" },
    { label: "Repeat Clients", value: "65%" },
    { label: "Certifications", value: "IICRC" },
  ],
  services: [
    { title: "Designer Interior Finishes", description: "Collaborate with Westlake Village's top interior designers for custom Venetian plaster, hand-applied glazes, and architectural accent features that elevate luxury interiors.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Lakeside Exterior Protection", description: "Specialized moisture-barrier coatings and premium stucco systems for properties near Westlake Lake. UV-stable finishes that maintain beauty through the Conejo Valley sun.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Priority emergency response for Westlake Village's high-value properties. Our restoration team understands the urgency of protecting luxury finishes, hardwood floors, and custom millwork.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Discreet, professional mold remediation for lakeside and canyon-adjacent homes in 91361. We understand the moisture dynamics unique to Westlake Village properties.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Whole-Home Renovations", description: "Comprehensive remodeling services for Westlake Village estates — kitchens, bathrooms, great rooms, and outdoor living spaces crafted to the highest standards.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Concierge Service", description: "White-glove project management for busy professionals and executives. We coordinate around your schedule, manage every detail, and deliver results that exceed expectations.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Westlake Village's Go-To Luxury Contractor",
    paragraphs: [
      "Westlake Village is synonymous with lakeside luxury. The community's Mediterranean-inspired architecture, custom-built estates, and manicured streetscapes set a high bar that only experienced, detail-oriented contractors can meet.",
      "Our team has deep relationships in the Westlake Village community — from local realtors who trust our pre-sale transformations to property managers who rely on our responsive maintenance programs. This local network means we understand the standards and expectations unique to 91361.",
      "Proximity to Westlake Lake creates specific moisture and humidity challenges for nearby homes. Our restoration specialists apply advanced moisture mapping and structural drying techniques that protect both the home's structure and its luxury finishes.",
    ],
  },
  neighborhoodHighlights: [
    "Westlake Lake Estates",
    "The Landing",
    "North Ranch",
    "Westlake Island",
    "Three Springs",
    "Berrington Place",
    "Lakeview Canyon",
    "Westlake Plaza Area",
  ],
  faqs: [
    { question: "Do you work with Westlake Village HOAs?", answer: "Yes, we have established relationships with numerous HOAs in the 91361 area and understand the strict architectural guidelines. We ensure all exterior work is pre-approved and compliant." },
    { question: "Can you protect lakeside homes from moisture damage?", answer: "We apply specialized vapor barriers, moisture-resistant coatings, and drainage solutions specifically designed for properties near Westlake Lake. Proactive moisture management is key for lakeside homes." },
    { question: "Do you offer design consultation for high-end interiors?", answer: "We collaborate with Westlake Village's premier interior designers or can provide our own color and finish consultation service backed by 20+ years of luxury residential experience." },
    { question: "What makes your service 'concierge-level'?", answer: "Our concierge service includes a dedicated project manager, flexible scheduling around your lifestyle, daily progress updates, professional site cleanup, and a final walkthrough with touch-up guarantee." },
  ],
  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Newbury Park / Westlake", zip: "91362", href: "/areas/91362" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Westlake Village", zip: "91302", href: "/areas/91302" },
    { name: "Malibu", zip: "90265", href: "/areas/90265" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Westlake Village 91361",
    description: "Luxury painting, restoration and renovation in Westlake Village 91361.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Westlake Village", addressRegion: "CA", postalCode: "91361" },
    telephone: "+1-805-555-0199",
  },
};

const Area91361 = () => <AreaPageTemplate data={data} />;
export default Area91361;
