import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "91302",
  cityName: "Calabasas / Westlake Village",
  tagline: "Luxury, High Lifetime-Value Clients",
  heroHeadline: "White-Glove Builders, Interior Artisans & Restoration Masters in",
  tier: "premium",
  heroImage: projectExterior,
  heroDescription: "The 91302 ZIP code encompasses some of Southern California's most prestigious addresses — from Calabasas gated communities to the western reaches of Westlake Village. Mier & Murphy provides the white-glove painting, restoration, and renovation services these extraordinary properties demand.",
  stats: [
    { label: "Luxury Projects", value: "150+" },
    { label: "Avg. Project Value", value: "$25K+" },
    { label: "Celebrity Homes", value: "Discreet" },
    { label: "NDA Available", value: "Yes" },
  ],
  services: [
    { title: "Luxury Interior Design Execution", description: "We work with the region's top designers to execute complex interior finishes — Venetian plaster, hand-painted murals, metallic leaf applications, and custom textures for Calabasas estates.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Estate Exterior Systems", description: "Comprehensive exterior coating systems for large-scale properties. EIFS, traditional stucco, stone veneer integration, and custom color matching for multi-structure estates.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Emergency Restoration", description: "Priority 24/7 emergency response for high-value 91302 properties. Our team understands the urgency of protecting irreplaceable custom finishes and luxury materials.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Confidential mold assessment and remediation for luxury homes. We work discreetly, efficiently, and thoroughly to protect both the property and the owner's privacy.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Full-Scale Renovations", description: "Complete home transformations for 91302's most distinguished properties. From concept through completion, we manage every detail of large-scale residential renovations.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Privacy-First Service", description: "NDA-protected service for high-profile clients. Our team is vetted, professional, and experienced in working within exclusive gated communities and private estates.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "The Preferred Contractor for Calabasas' Elite Properties",
    paragraphs: [
      "The Calabasas and western Westlake Village area represents the pinnacle of Southern California luxury living. Properties here feature custom architecture, imported materials, and finishes that require a contractor with genuine expertise — not just standard residential experience.",
      "Mier & Murphy has earned the trust of homeowners, property managers, and real estate professionals throughout Calabasas and western Westlake Village. Our portfolio includes work on some of the area's most recognizable estates, all completed under strict confidentiality agreements.",
      "We understand that servicing luxury properties extends beyond technical skill. Our team operates with the professionalism, discretion, and attention to detail that 91302's most discerning clients expect. Every crew member is background-checked, uniformed, and trained in luxury residential protocols.",
    ],
  },
  neighborhoodHighlights: [
    "The Oaks of Calabasas",
    "Calabasas Park Estates",
    "Monte Nido",
    "Hidden Hills Adjacent",
    "Mulholland Corridor",
    "Las Virgenes Canyon",
    "West Hills Estates",
    "Malibu Canyon Road",
  ],
  faqs: [
    { question: "Do you sign NDAs for high-profile properties?", answer: "Yes, we routinely work under non-disclosure agreements and can execute your NDA or provide our standard confidentiality agreement. Discretion is fundamental to our luxury service model." },
    { question: "Can you work within gated community security protocols?", answer: "Absolutely. We're experienced with the security procedures of The Oaks, Calabasas Park Estates, and other gated communities. We coordinate with guard gates, maintain proper vehicle identification, and follow all community-specific protocols." },
    { question: "What imported or specialty finishes can you apply?", answer: "Our artisans are trained in Italian Venetian plaster, Japanese plaster, French washes, gold and silver leaf application, and custom faux finishes. We source materials directly from European suppliers when specified." },
    { question: "How do you handle large estate projects with multiple structures?", answer: "We assign a senior project manager who coordinates phased schedules across main residences, guest houses, pool structures, and outbuildings. Weekly reporting and budget tracking are standard." },
  ],
  nearbyAreas: [
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Malibu", zip: "90265", href: "/areas/90265" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Calabasas / Westlake Village 91302",
    description: "Luxury painting, restoration and renovation in Calabasas and Westlake Village 91302.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Calabasas", addressRegion: "CA", postalCode: "91302" },
    telephone: "+1-805-555-0199",
  },
};

const Area91302 = () => <AreaPageTemplate data={data} />;
export default Area91302;
