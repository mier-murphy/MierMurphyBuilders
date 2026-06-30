import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/project-interior.jpg";

const data: AreaPageData = {
  zipCode: "91362",
  cityName: "Newbury Park / Westlake",
  tagline: "Premium Services for Higher-Income Households",
  heroHeadline: "Interior, Exterior & Restoration Craftsmen Serving",
  tier: "primary",
  heroImage: projectInterior,
  heroDescription: "The 91362 ZIP code spans the prestigious border of Newbury Park and Westlake, home to some of the Conejo Valley's most distinguished estates. Mier & Murphy brings two decades of luxury craftsmanship to this high-demand area — from custom interior finishes to emergency restoration services.",
  stats: [
    { label: "Local Projects", value: "350+" },
    { label: "Avg. Project Value", value: "$18K" },
    { label: "5-Star Reviews", value: "200+" },
    { label: "Warranty Years", value: "10" },
  ],
  services: [
    { title: "Luxury Interior Painting", description: "Bespoke color palettes and premium finishes including Venetian plaster, metallic glazes, and custom murals for the upscale homes in the Newbury Park-Westlake corridor.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Stucco & Exterior Coatings", description: "Premium elastomeric and acrylic stucco systems engineered for the hillside and canyon-adjacent properties common in 91362. Fire-resistant finishes available.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Rapid-response water extraction and structural drying for 91362 residences. We handle everything from hidden slab leaks to storm-related flooding with IICRC-certified precision.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Professional mold testing and remediation for the hillside homes in 91362 that are prone to moisture intrusion. Full containment, HEPA filtration, and antimicrobial treatment.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Estate Renovations", description: "Complete home transformations for the larger properties in the Newbury Park-Westlake area. Custom millwork, designer finishes, and project management from concept to completion.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Insurance Claims Support", description: "Experienced in working with major insurance carriers for restoration claims. We document damage thoroughly and advocate for full coverage on your behalf.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Trusted by Newbury Park & Westlake's Most Discerning Homeowners",
    paragraphs: [
      "The Newbury Park–Westlake corridor represents one of the Conejo Valley's most affluent neighborhoods, where properties often feature custom architectural details, expansive square footage, and premium building materials. Our team specializes in matching the quality these homes demand.",
      "Hillside properties in this area face unique challenges: increased wind exposure, wildfire risk zones, and elevation-related moisture concerns. We apply specialized coatings and restoration techniques developed specifically for these environmental factors.",
      "Whether you're updating a Dos Vientos ranch estate or restoring a Rancho Conejo contemporary, our portfolio in 91362 speaks to the trust this community places in Mier & Murphy's expertise.",
    ],
  },
  neighborhoodHighlights: [
    "Dos Vientos Ranch",
    "Rancho Conejo",
    "Broadmoor",
    "South Ranch",
    "Lake Sherwood Adjacent",
    "Lynn Ranch Estates",
    "Newbury Park Hills",
    "Westlake North",
  ],
  faqs: [
    { question: "Do you service hillside homes in the 91362 area?", answer: "Yes, we have extensive experience with hillside and canyon-adjacent properties in 91362. Our crews are equipped for challenging terrain access and understand the unique structural considerations these homes require." },
    { question: "What fire-resistant exterior options do you offer?", answer: "We offer Class A fire-rated stucco systems and intumescent coatings ideal for properties near wildfire risk zones in the Newbury Park and Westlake corridor." },
    { question: "Can you match existing custom finishes during restoration?", answer: "Absolutely. We maintain a library of finish samples and can color-match any existing plaster, paint, or stucco texture to ensure seamless restoration results." },
    { question: "How do you handle large estate projects?", answer: "We assign a dedicated project manager for estate-scale work. This includes detailed scheduling, material procurement, subcontractor coordination, and weekly progress reports." },
  ],
  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Newbury Park", zip: "91320", href: "/areas/91320" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
    { name: "Westlake Village", zip: "91302", href: "/areas/91302" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Newbury Park / Westlake 91362",
    description: "Luxury painting, stucco, water damage restoration and mold remediation in 91362.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Newbury Park", addressRegion: "CA", postalCode: "91362" },
    telephone: "+1-805-555-0199",
  },
};

const Area91362 = () => <AreaPageTemplate data={data} />;
export default Area91362;
