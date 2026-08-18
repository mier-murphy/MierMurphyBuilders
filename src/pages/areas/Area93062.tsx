import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "93062",
  cityName: "Simi Valley",
  tagline: "Simi Valley' Most Trusted Contractor",
  heroHeadline: "Luxury Painting, Restoration & Renovation Experts in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription: "Simi Valley is known for its family neighborhoods, hillside homes, and well-kept properties. Whether you're updating an older home, repairing unexpected damage, or planning a full renovation, Mier & Murphy brings experienced craftsmanship and dependable service to every project.",

  services: [
    { title: "Interior Painting", description: "From contemporary homes to established neighborhoods, we provide clean, professional interior painting with careful preparation and premium finishes that hold up to everyday living.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "Simi Valley's warm summers and constant sun can wear down exterior finishes over time. Our coating systems help protect your home while improving curb appeal for years to come.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Whether caused by plumbing failures, roof leaks, or appliance issues, our restoration team responds quickly to reduce damage and restore your property with certified drying and repair methods.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Moisture hidden behind walls or beneath flooring can quickly become a mold problem. We identify the source, safely remove affected materials, and restore a healthy indoor environment.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Home Renovations", description: "Whether you're remodeling a kitchen, updating bathrooms, or renovating your entire home, our team manages every phase with quality workmanship and consistent communication.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Cabinet Refinishing & Specialty Finishes", description: "Refresh your home's interior without replacing everything. Our cabinet refinishing and custom finish work add lasting value while giving your space an updated look.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Serving Simi Valley Homeowners with Quality That Lasts",
    paragraphs: [
      "Simi Valley offers a wide variety of homes, from long-established neighborhoods to newer developments tucked against the surrounding hills. Each property has its own maintenance needs, especially with the area's warm climate, seasonal winds, and year-round sun exposure.",
      "Our crews understand how these local conditions affect paint, stucco, wood trim, and exterior materials. We recommend products that perform well in Ventura County and complete every project with long-term durability in mind.",
      "Whether we're restoring water damage after a plumbing issue or completing a full home renovation, our goal is always the same — quality work, honest communication, and results homeowners can feel confident about.",
    ],
  },
  neighborhoodHighlights: [
    "Wood Ranch",
    "Big Sky",
    "Texas Tract",
    "Mountain Valley",
    "Indian Hills",
    "Bridle Path",
    "Central Simi",
    "East Simi Valley",
  ],
  faqs: [
    { question: "Do you work on hillside properties?", answer: "Yes. We're experienced with the access and drainage considerations that come with hillside homes in areas like Wood Ranch and Big Sky." },
    { question: "Can you match existing stucco textures?", answer: "Yes, we assess and match original stucco texture on-site before any repair or repaint work begins." },
    { question: "Do you provide emergency water damage response throughout Simi Valley?", answer: "Yes, our certified team offers 24/7 response for plumbing failures, roof leaks, and flooding countywide." },
    { question: "Do you offer services for both interior and exterior projects?", answer: "Yes, we handle interior painting, exterior coatings, and everything in between on the same job." },

  ],
  nearbyAreas: [
    { name: "Moorpark", zip: "93021", href: "/areas/93021" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Chatsworth", zip: "91311", href: "/areas/91311" },
    { name: "West Hills", zip: "91307", href: "/areas/91307" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Simi Valley 93062",
    description: "Premium painting, stucco, water damage restoration and mold remediation in Simi Valley 93062.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Simi Valley", addressRegion: "CA", postalCode: "93062" },
    telephone: "+1-805-998-9082",
    url: "https://mierandmurphy.com/areas/93062",
  },
};

const Area93062 = () => <AreaPageTemplate data={data} />;
export default Area93062;
