import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Award, Clock, Star, Droplets, Home, Paintbrush, Bug, MapPin, Phone, CheckCircle, HelpCircle } from "lucide-react";
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
    icon: Bug,
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
    quote: "Mier & Murphy transformed our Westlake Village estate beyond anything we imagined. Their attention to detail is unmatched by any contractor in the Conejo Valley.",
    author: "Robert & Catherine M.",
    location: "Westlake Village, CA 91361",
    service: "Interior Renovation",
  },
  {
    quote: "After water damage threatened our Thousand Oaks home, Frank and his team responded within hours. The restoration was flawless—you'd never know anything happened.",
    author: "David & Lisa T.",
    location: "Thousand Oaks, CA 91360",
    service: "Water Damage Restoration",
  },
  {
    quote: "We hired three other contractors before finding Mier & Murphy. The difference in quality is night and day. Their work is absolutely impeccable.",
    author: "Jennifer P.",
    location: "Thousand Oaks, CA 91362",
    service: "Exterior Stucco",
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
                  alt="IICRC Certified Firm badge"
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
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <ScrollReveal direction="left">
              <div className="flex-shrink-0 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <img
                  src={iicrcBadge}
                  alt="IICRC Certified Firm badge"
                  className="w-36 h-36 md:w-44 md:h-44 object-contain"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="text-center md:text-left">
                <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Industry-Leading Certification</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  IICRC <span className="text-primary">Certified Firm</span>
                </h3>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
                  We are IICRC certified, ensuring every remediation project meets the highest 
                  industry standards for safety, quality, and long-term protection.
                </p>
                <Link
                  to="/about/legacy#certifications"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 group"
                >
                  Why It Matters
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
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
                      <p className="font-sans text-xs text-brand-yellow mt-1 font-medium">{t.service}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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