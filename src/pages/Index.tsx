import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Shield, Award, Clock, Star, Droplets, Home, Paintbrush, Bug, MapPin, Phone, Building2, CheckCircle, HelpCircle } from "lucide-react";
import { useState } from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ScrollReveal from "@/components/ScrollReveal";

import heroImage from "@/assets/hero-craftsmanship.jpg";
import projectExterior from "@/assets/cabin/cabin-hero.avif";
import projectInterior from "@/assets/condo-retreat/condo-retreat-hero.avif";
import projectComercial from "@/assets/commercial-cell-store/commercial-cell-store-hero.avif";
import projectRestoration from "@/assets/remediation.webp";

import projectBathroom from "@/assets/btkc/kc-hero.webp";
import projectWater from "@/assets/water/water-hero.webp";
import projectDrywall from "@/assets/drywall/drywall-hero.webp";
import projectBalcony from "@/assets/balcony/balcony-hero.webp";
import projectCtenent from "@/assets/ctenant/ctenent-hero.webp";

import whyChoose from "@/assets/home-why-choose.webp";
import iicrcBadge from "@/assets/iicrc-badge.avif";
import OurStorySection from "@/components/OurStorySection";


import iicrcFirmBadge from "@/assets/iicrc-firm-badge.png";
import iicrcMoldBadge from "@/assets/iicrc-mold-badge.png";


const SITE_URL = "https://www.mierandmurphybuilders.com";
const OG_IMAGE = `${SITE_URL}/hero-craftsmanship.jpg`;

const PAGE_TITLE = "Custom Home Builders & General Contractor in Thousand Oaks, CA | Mier & Murphy";
const PAGE_DESCRIPTION =
  "Mier & Murphy Builders provides custom home construction, remodeling, stucco repair, and restoration in Thousand Oaks, CA and Ventura County.";

const areasServed = [
  "Thousand Oaks",
  "Westlake Village",
  "Simi Valley",
  "Moorpark",
  "Oak Park",
  "Agoura Hills",
  "Newbury Park",
  "Camarillo",
  "Calabasas",
  "Ventura County",
];

const stats = [
  { value: "20+", label: "Years Serving Thousand Oaks", icon: Clock },
  { value: "500+", label: "Conejo Valley Projects", icon: Award },
  { value: "100%", label: "Client Satisfaction Rate", icon: Star },
  { value: "IICRC", label: "Certified Specialists", icon: Shield },
];

const services = [
  {
    title: "Expert Bathroom and Kitchen Remodelingin Thousand Oaks",
    description: "Full bathroom and kitchen remodels for homeowners across Thousand Oaks, Westlake Village, and Simi Valley, with clear timelines, permits handled for you, and a family-owned crew behind every job.",
    icon: Paintbrush,
    image: projectBathroom,
    href: "/services/bathroom-kitchen-remodeling",
  },
  {
    title: "Trusted Water Damage and Mold RemediationExperts",
    description: "IICRC certified water damage and mold remediation for homeowners in Thousand Oaks, Westlake Village, and Simi Valley. We know what water damage does to a home, because it happened to ours.",
    icon: Home,
    image: projectWater,
    href: "/services/water-damage-mold-remediation",
  },
  {
    title: "Seamless Drywall and Stucco Repairin Thousand Oaks",
    description: "Drywall, plaster, and stucco repair for homeowners in Thousand Oaks, Westlake Village, and Simi Valley, matched to your existing finish so the repair disappears into the wall.",
    icon: Droplets,
    image: projectDrywall,
    href: "/services/drywall-plaster-stucco-repair",
  },
  {
    title: "Balcony and Deck Repair Experts in Thousand Oaks",
    description: "Structural balcony and deck repair for homeowners, HOAs, and property managers in Thousand Oaks, Westlake Village, and Simi Valley. We help you meet California's inspection deadlines.",
    icon: Bug,
    image: projectBalcony,
    href: "/services/balcony-deck-repair",
  },
  {
    title: "Commercial Tenant Improvement Contractor in Thousand Oaks",
    description: "Build-out and renovation work for retail and office spaces in Thousand Oaks, Westlake Village, and the surrounding Conejo Valley, planned around your lease timeline from day one.",
    icon: Building2,
    image: projectCtenent,
    href: "/services/commercial-tenant-improvement",
  },
];

const projects = [
  {
    title: "Transforming a historical cabin into a sophisticated living space.",
    category: "Exterior",
    location: "Westlake Village, CA 91361",
    image: projectExterior,
    link: "/projects/cabin",
  },
  {
    title: "Urban Condo Remodel Los Angeles, CA",
    category: "Interior",
    location: "Thousand Oaks, CA 91360",
    image: projectInterior,
    link: "/projects/condo-retreat",
  },
  {
    title: "Cellphone & Electronics Repair Store Commercial Build-Out",
    category: "Interior",
    location: "Thousand Oaks, CA 91362",
    image: projectComercial,
    link: "/projects/commercial-cell-store",
  },
];

const testimonials = [
  {
    quote: "We needed work done as part of our backyard renovation - which included adding a cement pad for seating, re-stuccoing our block wall and adding a 3 ft vinyl privacy fence in top. Frank provided us with a quote and schedule. Project was started within a day of giving notice to proceed and finished a day early. He and his crew were on time and professional. Definitely would hire again.",
      author: "Mathew M.",
      location: "Thousand Oaks, CA",
    
  },
  {
    quote: "We just finished having work done at our house from this team. I cannot say enough good things about both the company and the work that they did. They were professional, prompt, and their work was exceptional. My family is looking forward to the next time we need work done around the house so that we can call Meier Construction and know that it will be done correctly and add a great value.",
      author: "Chris W.",
      location: "Culver City, CA",
  },
  {
    quote: "We had water damaged drywalls that needed to be repaired in two areas (downstairs hallway and upstairs bathroom), and also some flooring work in the bathroom. We decided to choose Mier Construction because they can do both drywall and flooring. The best thing they could offer was to start the repairing right away. They did high quality job and always kept the area clean. They finished the job quickly as they promised. We are very satisfied.",
      author: "Yi W.",
      location: "Thousand Oaks, CA",
  },
];

const serviceAreas = [
  { name: "Thousand Oaks", zips: "91360, 91362", description: "Full-service luxury construction, restoration, and remediation for estates and custom homes." },
  { name: "Westlake Village", zips: "91361, 91302", description: "Premium interior and exterior finishes for the most distinguished properties." },
  { name: "Newbury Park", zips: "91320", description: "Expert drywall, stucco, and water damage restoration for homeowners." },
  { name: "Agoura Hills", zips: "91301", description: "Certified mold remediation and water restoration services." },
  { name: "Oak Park", zips: "91377", description: "Venetian plaster, interior painting, and custom finishes for luxury homes." },
  { name: "Calabasas", zips: "91302", description: "High-end construction and restoration for celebrity estates and custom builds." },
];

const faqs = [
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "Most bathroom remodels take a few weeks from start to finish, depending on the scope of work, permitting, and material availability. We walk through the expected timeline with you before work begins.",
  },
  {
    question: "Do I need a permit for my remodel?",
    answer:
      "Most bathroom and kitchen remodels in Thousand Oaks require permits, especially when plumbing or electrical work is involved. We handle the permitting process as part of your project.",
  },
  {
    question: "How do I know if I have mold, and what should I do?",
    answer:
      "Common signs of mold include a musty smell, visible spotting on walls or ceilings, and past water damage that was not fully dried out. If you suspect mold, contact us for an inspection before it spreads further.",
  },
  {
    question: "What is the difference between water damage restoration and mold remediation?",
    answer:
      "Water damage restoration deals with removing water and drying out a structure after a leak, flood, or other water event. Mold remediation deals with removing mold growth that has already started, often as a result of water damage that went untreated. We handle both, and often one leads directly into the other.",
  },
  {
    question: "Do I need an SB-326 or SB-721 balcony inspection?",
    answer:
      "California law requires periodic inspection of exterior elevated elements like balconies and decks on multi-family properties. If your HOA or property has not had one, contact us to check your deadline and get an inspection scheduled.",
  },
  {
    question: "What is stucco color matching and can you fix a small crack?",
    answer:
      "Stucco color and texture matching means repairing a damaged section so it blends into the surrounding wall instead of standing out as a patch. We handle repairs of all sizes, from small cracks to larger sections.",
  },
  {
    question: "Are you licensed?",
    answer:
      "Yes. Mier & Murphy Builders is licensed under CA Lic. #1077044.",
  },
];

// JSON-LD: Organization — the canonical definition. Service pages reference
// this same @id instead of repeating the full address/phone/credential block.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#organization`,
  name: "Mier & Murphy Builders",
  alternateName: "Mier & Murphy Builders Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  telephone: "+18059989082",
  priceRange: "$$",
  description:
    "Family-owned, IICRC certified general contractor serving Thousand Oaks and the Conejo Valley. Remodeling, water damage restoration, mold remediation, drywall/stucco repair, balcony compliance repair, and commercial tenant improvement.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thousand Oaks",
    addressRegion: "CA",
    postalCode: "91360",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1706,
    longitude: -118.8376,
  },
  areaServed: areasServed.map((name) => ({ "@type": "City", name })),
  founder: {
    "@type": "Person",
    name: "Francisco Mier",
    jobTitle: "Founder",
  },
  foundingDate: "2020",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "License",
      name: "California Contractors State License Board License #1077044",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certification",
      name: "IICRC S500 (Water Damage) & S520 (Mold Remediation) Certified Firm",
    },
  ],
  sameAs: [
    "https://www.yelp.com/biz/mier-and-murphy-builders-thousand-oaks",
    "https://nextdoor.com/pages/mier-construction-thousand-oaks-ca/",
    "https://www.bbb.org/us/ca/thousand-oaks/profile/construction/mier-murphy-builders-inc-1236-92082104",
    "https://www.facebook.com/100066322910414/",
  ],
};

// JSON-LD: WebSite
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Mier & Murphy Builders",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// JSON-LD: FAQPage (matches the visible homepage FAQ content)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// JSON-LD: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
};

const AnimatePresenceWrapper = ({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        {/* Primary meta tags */}
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        
        <meta name="author" content="Mier & Murphy Builders" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        {/* Geo tags */}
        <meta name="geo.placename" content="Thousand Oaks" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.position" content="34.1706;-118.8376" />
        <meta name="ICBM" content="34.1706, -118.8376" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Luxury home renovation by Mier & Murphy Builders in Thousand Oaks, California" />
        <meta property="og:site_name" content="Mier & Murphy Builders" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── HERO ── Dark overlay, bold white text, like JGC */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury home renovation by Mier & Murphy Builders in Thousand Oaks, California"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/90 via-[hsl(220,20%,12%)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,12%)]/70 via-transparent to-[hsl(220,20%,12%)]/30" />
        </div>

        <div className="relative z-10 max-w-[80rem] mx-auto py-32 px-2 w-full grid grid-cols-1 lg:grid-cols-7 gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <p className="font-sans text-sm tracking-[0.3em] text-brand-green-light uppercase mb-6 font-medium">
            IICRC Certified
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-8 text-white text-shadow-luxury">
            Thousand Oaks General Contractor for{" "}
              <span className="text-brand-yellow">Remodeling, Restoration, and Repair</span>
            </h1>

            <p className="font-sans text-lg text-white/75 max-w-xl mb-10 font-light leading-relaxed">
            Mier & Murphy Builders is a family-owned and family-operated construction company in Thousand Oaks, with 20 years of building experience.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 group shadow-lg"
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18059989082"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans text-sm font-medium text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> (805) 998-9082
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-4 ">
          <LeadCaptureForm variant="full" />
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="hsl(0, 0%, 100%)" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-6 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> 20 Years of Building Experience</span>
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> Family Owned & Operated</span>
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> IICRC S500 & S520 Certified</span>
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> CA Lic. #1077044</span>
          </div>
        </div>
      </section>
      {/* ── OUR STORY ── */}
      <OurStorySection />
      {/* ── CLIENTS ── */}
   



      {/* ── SERVICES ── Cards with rounded images */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase font-semibold mb-3">What We Do Best</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto">
                From custom Venetian plaster and stucco work to certified water damage restoration and mold remediation — 
                unmatched craftsmanship across the Conejo Valley.
              </p>
              <div className="gold-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <Link to={service.href} className="luxury-card group block h-full">
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,12%)]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-primary/90 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-sans font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── Dark section with curve */}
      <section className="relative section-dark overflow-hidden">
        {/* Top curve */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0V20C360 60 720 60 1080 40C1260 30 1440 20 1440 20V0H0Z" fill="hsl(0, 0%, 100%)" />
          </svg>
        </div>

        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="font-sans text-xs tracking-[0.4em] text-brand-yellow uppercase font-semibold mb-3">Built on Trust</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Why Thousand Oaks Homeowners Choose{" "}
                  <span className="text-brand-yellow">Mier & Murphy Builders</span>
                </h2>
                <div className="gold-divider mt-6" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <ScrollReveal>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-white">
                  A Contractor You Can Actually Count On
                  </h3>
                  <p className="font-sans text-sm text-white/65 leading-relaxed">
                  When you hire a contractor, you are trusting them with your home and your money. We built Mier & Murphy on the things that earn that trust: honest work, real certifications, and a family name on every job. Here is what sets us apart in the Conejo Valley.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Family owned and operated ", desc: "with 20 years of building experience" },
                      { title: "IICRC certified ", desc: "for water damage (S500) and mold remediation (S520)" },
                      { title: "Licensed contractor", desc: "CA Lic. #1077044" },
                      { title: "HOA-experienced", desc: "on balcony and deck repair projects" },
                      { title: "Local to Thousand Oaks", desc: "and the Conejo Valley" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                        <p className="font-sans text-sm text-white/70">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl  bg-white/5 border border-white/10">
                
              <div className="flex-shrink-0 bg-primary/5 p-3 rounded-3xl ">
                <img
                  src={whyChoose}
                  alt="Mier and Murphy Builders team member reviewing project plans with a Thousand Oaks homeowner"
                  className=" object-contain"
                  loading="lazy"
                />
              </div>
           
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

      </section>

            {/* ── IICRC CERTIFICATION ── */}
            <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">
                Industry-Leading Certification
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                IICRC <span className="text-primary">Certified</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We hold both certifications that matter most for restoration work, ensuring
                every remediation project meets the highest industry standards for safety,
                quality, and long-term protection.
              </p>
              <div className="gold-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="luxury-card p-8 h-full flex items-start gap-6">
                <div className="flex-shrink-0 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <img
                    src={iicrcFirmBadge}
                    alt="IICRC Certified Firm badge"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-foreground">
                    IICRC <span className="text-primary">Firm</span>
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    A professional cleaning, restoration, or inspection company that is
                    certified by the IICRC. Technicians who work for the firm have completed
                    IICRC training and certification courses.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="luxury-card p-8 h-full flex items-start gap-6">
                <div className="flex-shrink-0 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <img
                    src={iicrcMoldBadge}
                    alt="IICRC Mold Certified badge"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-foreground">
                    IICRC <span className="text-primary">Mold</span>
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    A technician or firm that is certified in mold remediation by the IICRC.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 group"
              >
                Why It Matters
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SIGNATURE PROJECTS ── */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase font-semibold mb-3">See Our Work</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Signature <span className="text-primary">Projects</span>
              </h2>
              <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto">
                Explore our recent luxury renovations, stucco restorations, and water damage recoveries.
              </p>
              <div className="gold-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.15}>
                <Link to={project.link} className="luxury-card group block">
                  <div className="relative h-80 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,12%)]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-xs font-sans text-white mb-2 font-medium">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs text-white/70 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {project.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 group shadow-lg"
              >
                View Complete Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase font-semibold mb-3">Serving the Conejo Valley & Beyond</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Areas <span className="text-primary">We Serve</span>
              </h2>
              <div className="gold-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <ScrollReveal key={area.name} delay={i * 0.1}>
                <div className="luxury-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">{area.name}</h3>
                      <p className="font-sans text-xs text-primary font-semibold">{area.zips}</p>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 text-primary font-sans text-sm font-semibold hover:underline"
              >
                See All Service Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── Dark section */}
      <section className="relative section-dark overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0V20C360 60 720 60 1080 40C1260 30 1440 20 1440 20V0H0Z" fill="hsl(0, 0%, 100%)" />
          </svg>
        </div>

        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="font-sans text-xs tracking-[0.4em] text-brand-yellow uppercase font-semibold mb-3">Trusted by Conejo Valley Homeowners</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  What Our <span className="text-brand-yellow">Homeowners Say</span>
                </h2>
                <div className="gold-divider mt-6" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="rounded-2xl p-8 h-full flex flex-col bg-white/5 border border-white/10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                      ))}
                    </div>
                    <p className="font-sans text-sm text-white/75 leading-relaxed flex-1 italic">
                      "{t.quote}"
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="font-sans text-sm font-semibold text-white">{t.author}</p>
                      <p className="font-sans text-xs text-white/50">{t.location}</p>
                      
                    </div>
                  </div>
                  
                </ScrollReveal>
              ))}

              
            </div>
            <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/about/testimonials"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 group shadow-lg"
              >
                See All Reviews
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V40C360 0 720 0 1080 20C1260 30 1440 40 1440 40V60H0Z" fill="hsl(140, 6%, 94%)" />
          </svg>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-muted">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase font-semibold mb-3">Frequently Asked Questions</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Common <span className="text-primary">Questions</span>
              </h2>
              <div className="gold-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="luxury-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-primary/5 transition-colors"
                  >
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <h3 className="font-serif text-base md:text-lg font-bold flex-1 text-foreground">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary flex-shrink-0 mt-0.5"
                    >
                      <span className="text-xl font-light">+</span>
                    </motion.div>
                  </button>
                  <AnimatePresenceWrapper isOpen={openFaq === i}>
                    <div className="px-6 pb-5">
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed pl-9">
                        {faq.answer}
                      </p>
                    </div>
                  </AnimatePresenceWrapper>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your{" "}
              <span className="text-primary">Home</span>?
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Schedule a free in-home consultation. Whether you need Venetian plaster, 
              stucco repair, water damage restoration, or mold remediation — we're ready to exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+18059989082"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans text-sm font-medium text-primary border-2 border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Phone className="w-4 h-4" /> (805) 998-9082
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;