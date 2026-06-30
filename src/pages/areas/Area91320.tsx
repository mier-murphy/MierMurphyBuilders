import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectInterior from "@/assets/project-interior.jpg";

const data: AreaPageData = {
  zipCode: "91320",
  cityName: "Newbury Park",
  tagline: "Family-Focused Craftsmanship",
  heroHeadline: "Trusted Home Builders, Painters & Restoration Experts in",
  tier: "secondary",
  heroImage: projectInterior,
  heroDescription: "Newbury Park's family-oriented neighborhoods deserve reliable, high-quality home improvement services. Mier & Murphy brings the same luxury-grade craftsmanship we're known for in Thousand Oaks directly to Newbury Park — at competitive prices that respect your investment.",
  stats: [
    { label: "Local Projects", value: "180+" },
    { label: "Family Homes Served", value: "150+" },
    { label: "On-Time Completion", value: "99%" },
    { label: "Avg. Review Score", value: "4.9★" },
  ],
  services: [
    { title: "Interior Painting", description: "Family-friendly, low-VOC interior painting for Newbury Park homes. Durable finishes that withstand active households while maintaining a beautiful, professional appearance.", icon: <Paintbrush className="w-6 h-6 text-primary" /> },
    { title: "Exterior Painting & Stucco", description: "Curb-appeal transformations for Newbury Park's tract and custom homes. We work with HOA color palettes and deliver weather-resistant finishes that last.", icon: <Home className="w-6 h-6 text-primary" /> },
    { title: "Water Damage Restoration", description: "Fast-response water damage repair for Newbury Park families. We minimize disruption and get your home back to normal quickly with IICRC-certified restoration.", icon: <Droplets className="w-6 h-6 text-primary" /> },
    { title: "Mold Remediation", description: "Safe, thorough mold removal that protects your family's health. We test, contain, remove, and prevent recurrence in Newbury Park homes.", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Home Renovations", description: "Kitchen updates, bathroom remodels, and whole-home refreshes designed to increase your Newbury Park property's value and livability.", icon: <Hammer className="w-6 h-6 text-primary" /> },
    { title: "Preventive Maintenance", description: "Annual inspection and maintenance programs to catch small issues before they become costly repairs. Popular with Newbury Park homeowners.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ],
  localContent: {
    heading: "Newbury Park's Trusted Home Improvement Partner",
    paragraphs: [
      "Newbury Park is a thriving family community known for excellent schools, safe neighborhoods, and well-maintained homes. Homeowners here value quality work at fair prices — and that's exactly what Mier & Murphy delivers.",
      "The area's mix of 1970s–1990s tract homes and newer custom builds each present different maintenance and improvement needs. Our team is experienced with the specific materials, construction styles, and common issues found throughout Newbury Park — from aging stucco to outdated interiors ready for a modern refresh.",
      "We're active members of the local community and take pride in helping Newbury Park families protect and enhance their most valuable asset — their home.",
    ],
  },
  neighborhoodHighlights: [
    "Dos Vientos",
    "Stagecoach Inn Area",
    "Borchard Road Corridor",
    "Wendy Drive Neighborhood",
    "Conejo Creek",
    "Newbury Park High Area",
    "Ventu Park Road",
    "Reino Road Corridor",
  ],
  faqs: [
    { question: "Are your paints safe for homes with children?", answer: "Yes, we use low-VOC and zero-VOC paints that are safe for families with young children. Our products meet or exceed California's strict air quality standards." },
    { question: "Do you offer financing for Newbury Park homeowners?", answer: "We offer flexible payment plans and can discuss financing options during your free consultation. We believe quality home improvement should be accessible." },
    { question: "How long does an average exterior paint job take in Newbury Park?", answer: "A typical Newbury Park home exterior takes 5-7 days depending on size, prep work needed, and weather. We provide a detailed timeline before work begins." },
    { question: "Can you help increase my home's resale value?", answer: "Absolutely. Strategic painting and updates are among the highest-ROI home improvements. We can recommend the updates most valued by Newbury Park buyers." },
  ],
  nearbyAreas: [
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Newbury Park / Westlake", zip: "91362", href: "/areas/91362" },
    { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
    { name: "Oak Park", zip: "91377", href: "/areas/91377" },
    { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Newbury Park 91320",
    description: "Quality painting, restoration and renovation in Newbury Park 91320.",
    areaServed: { "@type": "PostalAddress", addressLocality: "Newbury Park", addressRegion: "CA", postalCode: "91320" },
    telephone: "+1-805-555-0199",
  },
};

const Area91320 = () => <AreaPageTemplate data={data} />;
export default Area91320;
