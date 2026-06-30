import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/project-exterior.jpg";

const data: AreaPageData = {
  zipCode: "91301",
  cityName: "Agoura Hills",
  tagline: "Affluent, Service-Friendly Market",
  heroHeadline: "Complete Interior, Exterior & Emergency Restoration in",
  tier: "secondary",
  heroImage: projectExterior,
  heroDescription: "Agoura Hills combines hillside beauty with suburban convenience — and its homes reflect that premium positioning. Mier & Murphy provides the expert painting, restoration, and renovation services that Agoura Hills properties require, from canyon estates to gated community homes.",
  stats: [
    { label: "Local Projects", value: "120+" },
    { label: "Canyon Properties", value: "40+" },
    { label: "Client Retention", value: "70%" },
    { label: "Emergency Response", value: "24/7" },
  ],
  services: [
    { title: "Interior Painting", description: "Sophisticated interior finishes for Agoura Hills' upscale homes. From open-concept great rooms to intimate wine cellars, we deliver finishes that complement every space.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior & Stucco", description: "Durable, beautiful exterior coatings for hillside and canyon homes. We specialize in finishes that resist the Santa Ana winds and intense sun exposure common in 91301.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Canyon and hillside homes in Agoura Hills face unique water intrusion risks. Our rapid-response team provides comprehensive water damage restoration and prevention.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Hillside moisture and canyon microclimates can create hidden mold issues. We provide thorough inspection, remediation, and prevention for Agoura Hills properties.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Fire Damage Restoration", description: "Located near wildfire risk zones, Agoura Hills homes may need fire damage repair. We provide complete restoration from structural repair to finish work.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Insurance Coordination", description: "Experienced with fire and water damage insurance claims for Agoura Hills properties. We document, estimate, and coordinate for maximum coverage.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Why Agoura Hills Homeowners Trust Mier & Murphy",
    paragraphs: [
      "Agoura Hills sits at the gateway between the Conejo Valley and the San Fernando Valley, offering a unique blend of natural beauty and suburban sophistication. Homes here range from Mediterranean villas to modern hillside contemporaries — each requiring specialized expertise.",
      "The area's proximity to the Santa Monica Mountains creates specific environmental challenges including wildfire risk, canyon wind exposure, and seasonal moisture fluctuations. Our team applies protective coatings and restoration techniques calibrated for these exact conditions.",
      "We've built a strong reputation in the Agoura Hills community through consistent quality, transparent pricing, and the kind of personalized service that residents in this affluent market expect and deserve.",
    ],
  },
  neighborhoodHighlights: [
    "Old Agoura",
    "Morrison Ranch",
    "Malibu Junction",
    "Reyes Adobe",
    "Liberty Canyon",
    "Cornell Winery Area",
    "Kanan Road Corridor",
    "Chesebro Canyon Area",
  ],
  faqs: [
    { question: "Do you offer fire-resistant exterior coatings for Agoura Hills homes?", answer: "Yes, we offer Class A fire-rated stucco systems and intumescent coatings specifically recommended for properties in wildfire-prone areas of 91301." },
    { question: "How do you handle access to hillside properties?", answer: "Our crews are fully equipped for hillside access including scaffolding systems, boom lifts, and specialized safety equipment for steep-grade properties." },
    { question: "Can you restore homes damaged by the Woolsey Fire aftermath?", answer: "We've restored several Agoura Hills properties affected by fire and smoke damage. Our experience includes structural repair, smoke odor removal, and complete interior/exterior refinishing." },
    { question: "Do you serve the Old Agoura area?", answer: "Absolutely. Old Agoura's rustic and equestrian properties are within our core service radius. We understand the character of these unique properties and preserve their charm during any restoration work." },
  ],
  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
    { name: "Westlake Village", zip: "91302", href: "/areas/91302" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Agoura Hills 91301",
    description: "Professional painting, restoration and renovation in Agoura Hills 91301.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Agoura Hills", addressRegion: "CA", postalCode: "91301" },
    telephone: "+1-805-555-0199",
  },
};

const Area91301 = () => <AreaPageTemplate data={data} />;
export default Area91301;
