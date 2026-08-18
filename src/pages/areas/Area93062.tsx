import { Shield, Paintbrush, Droplets, Bug, Home, Hammer } from "lucide-react";
import AreaPageTemplate, { AreaPageData } from "@/components/AreaPageTemplate";
import projectExterior from "@/assets/areas/SIMI VALLEY (93062).webp";

const data: AreaPageData = {
  zipCode: "93062",
  cityName: "Simi Valley",
  tagline: "SURROUNDING AREA · ZIP 93062",
  heroHeadline: "Remodeling and Repair Contractor in",
  tier: "primary",
  heroImage: projectExterior,
  heroDescription:
    "Simi Valley is one of the areas where we have completed a full documented bathroom remodel, start to finish. That real track record, alongside 20 years of building experience, is what homeowners here can actually check for themselves.",


  services: [
    {
      title: "Bathroom & Kitchen Remodeling",
      description:
        "Our Simi Valley bathroom remodel walked through the exact process we use everywhere, in-home estimate, permitting, and a realistic timeline the homeowner could plan around.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      title: "Water Damage & Mold Remediation",
      description:
        "Simi Valley's older tract homes occasionally surface hidden leaks behind walls, which is where our S500 and S520 certified process matters most.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      title: "Drywall & Stucco Repair",
      description:
        "Ranch and tract-style stucco is the most common finish we repair in Simi Valley, and we keep a close eye on color fade when matching older sections.",
      icon: <Home className="w-6 h-6 text-primary" />,
    },
    {
      title: "Balcony & Deck Repair",
      description:
        "The HOA-managed communities near the Simi Valley Town Center have brought us regular balcony inspection and repair work.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Commercial Tenant Improvement",
      description:
        "Cochran Street's retail corridor is a frequent site for our Simi Valley commercial build-outs.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ],

  localContent: {
    heading: "Why Simi Valley Homeowners Choose Mier & Murphy",
    paragraphs: [
      "We have completed a full bathroom remodel in Simi Valley, from the first in-home estimate through the final walkthrough, using the same process we bring to every project.",
      "Simi Valley's older tract homes sometimes hide plumbing or moisture issues behind the walls, so our restoration work here starts with a thorough inspection, not assumptions.",
      "Between remodeling, restoration, and repair, we have built a track record across Simi Valley that homeowners can check for themselves.",
    ],
  },

  neighborhoodHighlights: [
    "Simi Valley Town Center area",
    "Cochran Street corridor",
    "Wood Ranch",
    "Big Sky area",
  ],

  faqs: [
    {
      question: "Have you completed real projects in Simi Valley?",
      answer:
        "Yes. We completed a full bathroom remodel in Simi Valley, from the initial estimate through the final walkthrough.",
    },
    {
      question: "Do older Simi Valley homes have hidden plumbing issues?",
      answer:
        "Sometimes. Older tract homes can hide leaks behind walls, which is why we inspect thoroughly before starting restoration work.",
    },
    {
      question: "Do you handle balcony repairs near Simi Valley Town Center?",
      answer:
        "Yes, we have done regular balcony inspection and repair work for HOA-managed communities in that area.",
    },
    {
      question: "Are you licensed to work in Simi Valley?",
      answer:
        "Yes. We are a licensed California contractor, CA Lic. #1077044.",
    },
    {
      question: "How do you match older Simi Valley stucco?",
      answer:
        "We pay close attention to color fade on older sections and match both texture and tone as closely as possible.",
    },
  ],

  nearbyAreas: [
    { name: "Moorpark", zip: "93021", href: "/areas/93021" },
    { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
    { name: "Ventura County", zip: "91319", href: "/areas/91319" },
  ],

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mier & Murphy Builders – Simi Valley 93062",
    description:
      "Remodeling, repair, bathroom and kitchen remodeling, water damage restoration, mold remediation, stucco repair and commercial tenant improvements in Simi Valley, CA 93062.",
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: "Simi Valley",
      addressRegion: "CA",
      postalCode: "93062",
    },
    telephone: "+1-805-998-9082",
    url: "https://mierandmurphy.com/areas/93062",
  },
};

const Area93062 = () => <AreaPageTemplate data={data} />;

export default Area93062;