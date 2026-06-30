import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/project-interior.jpg";

const data: AreaPageData = {
  zipCode: "91311",
  cityName: "Chatsworth",
  tagline: "Extended Reach Service Area",
  heroHeadline: "Professional Builders, Painters & Damage Restoration in",
  tier: "secondary",
  heroImage: projectInterior,
  heroDescription: "Chatsworth's diverse residential landscape — from historic horse properties to modern planned communities — benefits from Mier & Murphy's versatile expertise. We extend our Conejo Valley quality standards to Chatsworth, bringing professional painting, restoration, and renovation to this growing community.",
  stats: [
    { label: "Local Projects", value: "60+" },
    { label: "Years of Experience", value: "20+" },
    { label: "Licensed & Insured", value: "Yes" },
    { label: "Free Estimates", value: "Always" },
  ],
  services: [
    { title: "Interior Painting", description: "Professional interior painting for Chatsworth homes — from cozy ranch-style properties to spacious newer builds. Quality prep work and premium paints for lasting results.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "Heat-resistant exterior coatings designed for the San Fernando Valley climate. We repair cracked stucco, apply elastomeric finishes, and restore weather-damaged exteriors.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Responsive water damage restoration for Chatsworth residences. From pipe bursts to seasonal flooding, we provide complete extraction, drying, and repair services.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Professional mold testing and removal for homes in the 91311 area. We eliminate mold at its source and implement prevention strategies for long-term protection.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Property Renovations", description: "Modernize your Chatsworth property with our renovation services. We specialize in updates that increase property value and improve daily living.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Commercial Services", description: "We also serve Chatsworth's light commercial and retail spaces with professional painting and maintenance services.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Quality Craftsmanship Extended to Chatsworth",
    paragraphs: [
      "Chatsworth sits at the northwestern edge of the San Fernando Valley, known for its rocky terrain, equestrian properties, and growing residential communities. Our team brings the premium standards we've built in the Conejo Valley directly to this diverse market.",
      "The San Fernando Valley's extreme summer heat creates specific challenges for exterior coatings and stucco. We apply UV-resistant, heat-stable finishes that maintain their appearance and protective qualities through Chatsworth's temperature extremes.",
      "Whether you own a classic Chatsworth ranch property or a newer home in one of the area's planned developments, Mier & Murphy delivers consistent quality and professional service that sets us apart from typical valley contractors.",
    ],
  },
  neighborhoodHighlights: [
    "Chatsworth Lake Manor",
    "Brown's Canyon",
    "Oakwood Estates",
    "Santa Susana Pass",
    "Devonshire Corridor",
    "Topanga Canyon Blvd",
    "Lassen Street Area",
    "Mason Avenue Corridor",
  ],
  faqs: [
    { question: "Do you travel to Chatsworth from Thousand Oaks?", answer: "Yes, Chatsworth is within our extended service radius. We maintain efficient scheduling for 91311 projects and don't charge travel premiums for this area." },
    { question: "Can you work on equestrian properties in Chatsworth?", answer: "Absolutely. We have experience with barns, stables, and large-lot properties common in Chatsworth. We understand the unique requirements of equestrian properties." },
    { question: "What exterior coatings do you recommend for the valley heat?", answer: "We recommend heat-reflective elastomeric coatings that reduce thermal absorption and prevent cracking. These coatings are specifically formulated for the extreme temperature swings in the San Fernando Valley." },
  ],
  nearbyAreas: [
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Woodland Hills South", zip: "91364", href: "/areas/91364" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Chatsworth 91311",
    description: "Professional painting, restoration and renovation in Chatsworth 91311.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Chatsworth", addressRegion: "CA", postalCode: "91311" },
    telephone: "+1-805-555-0199",
  },
};

const Area91311 = () => <AreaPageTemplate data={data} />;
export default Area91311;
