import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/project-interior.jpg";

const data: AreaPageData = {
  zipCode: "91377",
  cityName: "Oak Park",
  tagline: "High Income, Low Competition",
  heroHeadline: "Expert Builders, Painters & Renovation Specialists in",
  tier: "secondary",
  heroImage: projectInterior,
  heroDescription: "Oak Park is one of the Conejo Valley's best-kept secrets — a tight-knit community with high household incomes and beautifully maintained homes. Mier & Murphy is proud to bring our premium services to Oak Park, where quality matters and homeowners invest in excellence.",
  stats: [
    { label: "Local Projects", value: "90+" },
    { label: "Avg. Household Income", value: "Top 5%" },
    { label: "Referral Rate", value: "75%" },
    { label: "Quality Guarantee", value: "10yr" },
  ],
  services: [
    { title: "Interior Painting", description: "Premium interior painting for Oak Park's well-appointed homes. We deliver designer-quality finishes with meticulous prep work and clean, professional execution.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "Enhance your Oak Park home's curb appeal with our expert exterior services. We match HOA requirements and deliver lasting finishes that stand up to the valley heat.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "When water emergencies strike Oak Park homes, our certified team responds fast. Complete extraction, drying, and restoration to protect your investment.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Thorough mold inspection and removal for Oak Park residences. We address hidden moisture sources and ensure your home's air quality is safe for your family.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Kitchen & Bath Remodels", description: "Transform your Oak Park kitchen or bathroom with our custom renovation services. Quality cabinetry, tile work, and finishes that add lasting value.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Annual Maintenance Plans", description: "Proactive home maintenance programs designed for Oak Park homeowners who want to stay ahead of wear and prevent costly repairs.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Oak Park's Preferred Home Improvement Experts",
    paragraphs: [
      "Oak Park is a small, affluent community where residents take exceptional pride in their homes. The community's consistently high property values reflect the care homeowners invest in maintenance and improvement — and Mier & Murphy is the contractor they trust most.",
      "With fewer contractors actively marketing in Oak Park, homeowners have historically had to look outside their community for quality services. We changed that by making Oak Park a priority service area, providing the same luxury-tier craftsmanship we're known for across the Conejo Valley.",
      "The community's well-planned neighborhoods, excellent schools, and family-oriented culture create an environment where homes are maintained to the highest standards. Our work consistently meets and exceeds those community expectations.",
    ],
  },
  neighborhoodHighlights: [
    "Oak Park Estates",
    "Medea Creek",
    "Saddleback",
    "Oak Hills",
    "Kanan Corridor",
    "Lindero Canyon",
    "Oak Park High Area",
    "Deerhill Road",
  ],
  faqs: [
    { question: "Is Oak Park within your primary service area?", answer: "Yes, Oak Park is a priority secondary market for us. We maintain dedicated crew availability for 91377 and can typically schedule estimates within 48 hours." },
    { question: "Do you understand Oak Park's HOA requirements?", answer: "We work with Oak Park HOAs regularly and maintain familiarity with the community's architectural guidelines. We handle HOA submissions and approvals as part of our service." },
    { question: "What's the most popular service in Oak Park?", answer: "Interior painting and kitchen/bathroom remodels are our most requested services in 91377. Oak Park homeowners tend to invest in high-quality interior upgrades that enhance daily living." },
    { question: "Do you offer free estimates in Oak Park?", answer: "Absolutely. We provide free, no-obligation on-site estimates for all Oak Park residents. Our estimator will visit your home, discuss your vision, and provide a detailed written quote." },
  ],
  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Newbury Park / Westlake", zip: "91362", href: "/areas/91362" },
    { name: "Woodland Hills", zip: "91367", href: "/areas/91367" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Oak Park 91377",
    description: "Premium painting, restoration and renovation in Oak Park 91377.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Oak Park", addressRegion: "CA", postalCode: "91377" },
    telephone: "+1-805-555-0199",
  },
};

const Area91377 = () => <AreaPageTemplate data={data} />;
export default Area91377;
