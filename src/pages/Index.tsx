import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Award, Clock, Star, Droplets, Home, Paintbrush, Bug, MapPin, Phone, CheckCircle, HelpCircle } from "lucide-react";
import { useState } from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ScrollReveal from "@/components/ScrollReveal";
import ClientsBar from "@/components/ClientsBar";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import projectRestoration from "@/assets/project-restoration.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import iicrcBadge from "@/assets/iicrc-badge.png";

const stats = [
  { value: "20+", label: "Years Serving Thousand Oaks", icon: Clock },
  { value: "500+", label: "Conejo Valley Projects", icon: Award },
  { value: "100%", label: "Client Satisfaction Rate", icon: Star },
  { value: "IICRC", label: "Certified Specialists", icon: Shield },
];

const services = [
  {
    title: "Interior Masterworks",
    description: "Venetian plaster, drywall finishing, and custom interior textures for luxury homes in Thousand Oaks, Westlake Village, and the Conejo Valley.",
    icon: Paintbrush,
    image: projectInterior,
    href: "/services#interior",
  },
  {
    title: "Exterior Excellence",
    description: "Premium stucco application, exterior restoration, and architectural facades for Thousand Oaks and Westlake Village estates.",
    icon: Home,
    image: projectExterior,
    href: "/services#exterior",
  },
  {
    title: "Water Damage Restoration",
    description: "IICRC S500 certified emergency water damage restoration in Thousand Oaks and Westlake Village. 24/7 rapid response.",
    icon: Droplets,
    image: projectRestoration,
    href: "/services#water",
  },
  {
    title: "Mold Remediation Specialists",
    description: "IICRC S520 certified mold remediation. Professional mold testing, containment, and removal for safe homes.",
    icon: Bug,
    image: projectBathroom,
    href: "/services#mold",
  },
];

const projects = [
  {
    title: "Westlake Village Estate Renovation",
    category: "Interior Renovation",
    location: "Westlake Village, CA 91361",
    image: projectInterior,
  },
  {
    title: "Thousand Oaks Mediterranean Revival",
    category: "Exterior Stucco Restoration",
    location: "Thousand Oaks, CA 91360",
    image: projectExterior,
  },
  {
    title: "Conejo Valley Luxury Pool Deck",
    category: "Pool Remodel",
    location: "Thousand Oaks, CA 91362",
    image: projectRestoration,
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
    question: "What areas does Mier & Murphy Builders serve in the Conejo Valley?",
    answer: "Mier & Murphy Builders proudly serves Thousand Oaks (91360, 91362), Westlake Village (91361, 91302), Newbury Park (91320), Agoura Hills (91301), Oak Park (91377), Calabasas, and the greater Conejo Valley region.",
  },
  {
    question: "Are you licensed and certified for water damage restoration?",
    answer: "Yes. Mier & Murphy Builders holds IICRC S500 certification for water damage restoration and IICRC S520 certification for mold remediation. We are fully licensed, bonded, and insured.",
  },
  {
    question: "How quickly can you respond to water damage emergencies?",
    answer: "We offer 24/7 emergency water damage response. As a local company, we can typically arrive on-site within 60 minutes for urgent water extraction and flood damage assessment.",
  },
  {
    question: "What types of stucco and plaster work do you offer?",
    answer: "We specialize in Venetian plaster, traditional three-coat stucco, smooth-coat stucco, Santa Barbara finish, Spanish lace texture, skip-trowel finishes, and complete stucco repair.",
  },
  {
    question: "Do you offer free estimates for home renovation?",
    answer: "Yes. We offer complimentary in-home consultations and detailed estimates for all interior renovation, exterior stucco, water damage restoration, and mold remediation projects.",
  },
  {
    question: "What makes Mier & Murphy different from other contractors?",
    answer: "We are a family-owned business with 500+ completed projects, IICRC dual certification, and a 100% satisfaction rate. Our 'Build to Live, Live to Build' philosophy means we treat every home as our own.",
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-sans text-sm tracking-[0.3em] text-brand-green-light uppercase mb-6 font-medium">
              Premier Contractors · Thousand Oaks
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 text-white text-shadow-luxury">
              Luxury Home Builders &{" "}
              <span className="text-brand-yellow">Restoration Experts</span>
            </h1>

            <p className="font-sans text-lg text-white/75 max-w-xl mb-10 font-light leading-relaxed">
              IICRC Certified general contractor serving Thousand Oaks, Westlake Village & the Conejo Valley since 2004. 
              Specializing in Venetian plaster, stucco, water damage restoration & mold remediation.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 group shadow-lg"
              >
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18055550199"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans text-sm font-medium text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> (805) 555-0199
              </a>
            </div>
          </motion.div>

          <LeadCaptureForm variant="full" />
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> Licensed & Insured</span>
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> IICRC S500 & S520 Certified</span>
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> 24/7 Emergency Response</span>
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> Free In-Home Estimates</span>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <ClientsBar />

      {/* ── STATS ── Subtle warm background with curves */}
      <section className="relative section-padding bg-muted overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase font-semibold mb-3">Thousand Oaks' Most Trusted Contractor</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                The Mier & Murphy <span className="text-primary">Difference</span>
              </h2>
              <div className="gold-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.12}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-all duration-500">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                <p className="font-sans text-xs tracking-[0.4em] text-brand-yellow uppercase font-semibold mb-3">Local Expertise You Can Trust</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Why Thousand Oaks & Westlake Village{" "}
                  <span className="text-brand-yellow">Choose Us</span>
                </h2>
                <div className="gold-divider mt-6" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <ScrollReveal>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    The Conejo Valley's Premier Luxury Contractor
                  </h3>
                  <p className="font-sans text-sm text-white/65 leading-relaxed">
                    As lifelong members of the Thousand Oaks community, we understand the unique challenges 
                    of building and restoring homes in the Conejo Valley. Our founder, Frank Mier, has been in 
                    construction since age 10 — bringing decades of hands-on experience to every project.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Local Thousand Oaks Business", desc: "Family-owned and operated in the Conejo Valley since 2004." },
                      { title: "Climate-Smart Construction", desc: "Solutions engineered for Southern California's unique conditions." },
                      { title: "Rapid Emergency Response", desc: "Within 60 minutes for water damage emergencies." },
                      { title: "Insurance-Approved Contractor", desc: "We work directly with all major insurance carriers." },
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
                <div className="rounded-2xl p-8 bg-white/5 border border-white/10">
                  <h3 className="font-serif text-xl font-bold mb-6 text-brand-yellow">Comprehensive Services</h3>
                  <ul className="space-y-4 font-sans text-sm text-white/65">
                    {[
                      { icon: Paintbrush, title: "Venetian Plaster & Drywall", desc: "Custom interior textures and level 5 finishes" },
                      { icon: Home, title: "Stucco & Exterior", desc: "Three-coat stucco, smooth coat, and complete restoration" },
                      { icon: Droplets, title: "Water Damage Restoration", desc: "24/7 emergency extraction and structural drying" },
                      { icon: Bug, title: "Mold Remediation", desc: "Professional testing, containment, and safe removal" },
                      { icon: Shield, title: "General Construction", desc: "Kitchen remodels, additions, and whole-home renovations" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <item.icon className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                        <span><strong className="text-white">{item.title}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
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
                <Link to="/projects" className="luxury-card group block">
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
                href="tel:+18055550199"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans text-sm font-medium text-primary border-2 border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Phone className="w-4 h-4" /> (805) 555-0199
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
