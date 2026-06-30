import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/project-interior.jpg";

const data: AreaPageData = {
  zipCode: "91364",
  cityName: "Woodland Hills South",
  tagline: "Southern Woodland Hills Service Area",
  heroHeadline: "Full-Service Home Builders & Restoration Contractors in",
  tier: "secondary",
  heroImage: projectInterior,
  heroDescription: "Southern Woodland Hills offers a unique blend of hillside luxury and established residential charm. Mier & Murphy provides comprehensive painting, restoration, and renovation services to Woodland Hills South homeowners who appreciate quality craftsmanship and reliable professional service.",
  stats: [
    { label: "Local Projects", value: "55+" },
    { label: "Years Active", value: "20+" },
    { label: "On-Time Rate", value: "99%" },
    { label: "Free Estimates", value: "Always" },
  ],
  services: [
    { title: "Interior Painting", description: "Professional interior painting tailored to the diverse home styles in southern Woodland Hills. From classic ranch updates to modern contemporary refreshes.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior & Stucco", description: "Durable exterior coatings that protect against the valley's intense sun and seasonal temperature swings. Expert stucco repair and refinishing.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Rapid-response water damage services for Woodland Hills South properties. Complete extraction, structural drying, and restoration to pre-loss condition.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Safe, effective mold removal for homes in southern Woodland Hills. We address the moisture source, remove all affected materials, and prevent recurrence.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Bathroom & Kitchen Updates", description: "Strategic renovations that add value and modernize your home. We focus on the updates that deliver the best return on investment.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Maintenance Programs", description: "Ongoing maintenance plans to keep your Woodland Hills South home in peak condition year-round. Preventive care saves money long-term.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Serving Southern Woodland Hills with Excellence",
    paragraphs: [
      "Southern Woodland Hills covers desirable neighborhoods along the Mulholland corridor and the hillside areas approaching Topanga Canyon. These properties often feature stunning views, unique topography, and architectural character worth preserving.",
      "Homes in this area face slope-related drainage challenges and increased wildfire exposure. Our restoration team applies specialized waterproofing, fire-resistant coatings, and structural repair techniques developed for exactly these conditions.",
      "We've built strong relationships with local homeowners through consistent quality and honest communication. Our transparent pricing, detailed project timelines, and clean-site guarantee make us the preferred choice for southern Woodland Hills residents.",
    ],
  },
  neighborhoodHighlights: [
    "Mulholland Drive Homes",
    "Topanga Canyon Adjacent",
    "Wells Drive Area",
    "Dumetz Road",
    "Serrania Park",
    "Corbin Avenue Corridor",
    "Valmar Road Area",
    "Canoga Park Adjacent",
  ],
  faqs: [
    { question: "Do you handle hillside properties in southern Woodland Hills?", answer: "Yes, we're experienced with the hillside and canyon-adjacent properties common in southern Woodland Hills. Our crews are equipped for challenging access and steep-grade work." },
    { question: "What fire-resistant options are available?", answer: "We offer Class A fire-rated stucco, intumescent coatings, and fire-resistant sealants recommended for properties in the wildfire interface zones of southern Woodland Hills." },
    { question: "How do I get started with a project?", answer: "Call us at (805) 555-0199 or fill out our online form. We'll schedule a free on-site consultation within 48 hours to discuss your project and provide a detailed estimate." },
  ],
  nearbyAreas: [
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
    { name: "Calabasas / Westlake Village", zip: "91302", href: "/areas/91302" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Chatsworth", zip: "91311", href: "/areas/91311" },
    { name: "Malibu", zip: "90265", href: "/areas/90265" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Woodland Hills South 91364",
    description: "Professional painting, restoration and renovation in Woodland Hills South 91364.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Woodland Hills", addressRegion: "CA", postalCode: "91364" },
    telephone: "+1-805-555-0199",
  },
};

const Area91364 = () => <AreaPageTemplate data={data} />;
export default Area91364;
