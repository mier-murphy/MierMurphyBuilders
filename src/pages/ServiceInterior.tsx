import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Paintbrush, Award, Clock, Shield, Star, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectInterior from "@/assets/interior-m.webp";
import iicrcBadge from "@/assets/interior-m.webp";

const faqs = [
  {
    q: "What types of interior plaster finishes do you offer in Thousand Oaks?",
    a: "We specialize in Venetian plaster, lime plaster, smooth skim coats, and decorative textured finishes. Each finish is hand-applied by IICRC-certified artisans to achieve a bespoke, luxury-grade result in Thousand Oaks and Westlake Village homes.",
  },
  {
    q: "How long does a custom drywall installation take?",
    a: "A typical residential drywall installation in Ventura County takes 3–7 business days depending on square footage and complexity. Our team ensures minimal disruption while delivering precision-fit panels with seamless joints.",
  },
  {
    q: "Do you offer texture matching for existing walls?",
    a: "Yes. Our texture-matching service uses advanced sampling techniques to replicate existing wall textures—whether knockdown, orange peel, or skip trowel—so repairs blend invisibly with surrounding surfaces.",
  },
  {
    q: "Are your interior finishes safe for families with allergies?",
    a: "Absolutely. We use low-VOC and zero-VOC plaster compounds and sealants that meet California's strict indoor air-quality standards (CARB Phase 2), making them ideal for families in Thousand Oaks and Westlake Village.",
  },
  {
    q: "What is the cost of Venetian plaster application?",
    a: "Venetian plaster typically ranges from $8–$15 per square foot in the Ventura County area, depending on the number of layers and finish complexity. Contact us for a complimentary on-site estimate.",
  },
  {
    q: "Can you match the existing plaster texture in my older Thousand Oaks home?",
    a: "Yes. Many homes in Thousand Oaks and Westlake Village feature original plaster from the 1970s–1990s. Our craftsmen specialise in replicating legacy textures including hand-troweled, sand-float, and California skip-trowel finishes for invisible patch work.",
  },
  {
    q: "Do you handle both residential and commercial interior projects?",
    a: "We serve both luxury residential estates and commercial properties throughout Ventura County. Our commercial portfolio includes boutique hotels, medical offices, and upscale retail spaces in the Thousand Oaks and Westlake Village area.",
  },
  {
    q: "What warranty do you offer on interior plaster and drywall work?",
    a: "All interior plastering and drywall installations carry our 5-year craftsmanship warranty, covering cracking, peeling, and delamination under normal conditions. We stand behind every project with written guarantees.",
  },
];

const process = [
  { step: "01", title: "Complimentary Consultation", desc: "We visit your Thousand Oaks or Westlake Village property to assess scope, discuss design preferences, and provide a detailed written estimate—all at no cost." },
  { step: "02", title: "Surface Preparation", desc: "Meticulous surface prep is the foundation of a flawless finish. We repair substrates, apply bonding agents, and protect surrounding areas with professional-grade masking." },
  { step: "03", title: "Expert Application", desc: "Our certified craftsmen hand-apply each layer using traditional techniques refined over 20+ years, ensuring consistent depth, texture, and colour across every surface." },
  { step: "04", title: "Finishing & Sealant", desc: "Final coats are burnished to the desired sheen, then sealed with premium low-VOC sealants that protect against moisture, UV, and everyday wear for decades." },
  { step: "05", title: "Quality Inspection", desc: "A senior project manager conducts a multi-point quality inspection under varied lighting conditions, ensuring every surface meets our exacting standards before sign-off." },
];

const stats = [
  { value: "2,500+", label: "Interior Projects Completed" },
  { value: "20+", label: "Years of Experience" },
  { value: "5-Year", label: "Craftsmanship Warranty" },
  { value: "100%", label: "Licensed & Insured" },
];

const ServiceInterior = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Plastering & Drywall Services – Thousand Oaks & Westlake Village",
    provider: {
      "@type": "LocalBusiness",
      name: "Mier & Murphy Builders",
      areaServed: ["Thousand Oaks", "Westlake Village", "Ventura County"],
    },
    description:
      "Premium interior plaster, drywall installation, and decorative finishes for luxury homes in Thousand Oaks, Westlake Village, and Ventura County.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectInterior} alt="Luxury interior plaster finish in a Thousand Oaks estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Paintbrush className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">THE ART OF INTERIOR PERFECTION</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Interior Plaster & Drywall <span className="text-primary">Masterworks</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Hand-crafted Venetian plaster, precision drywall, and decorative finishes for luxury homes in
              <strong> Thousand Oaks</strong>, <strong>Westlake Village</strong>, and greater <strong>Ventura County</strong>.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-sans text-xs tracking-wider text-white/50 uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Why Homeowners in Thousand Oaks Choose Our <span className="text-primary">Interior Finishes</span>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  For over two decades, Mier & Murphy Builders has delivered museum-quality interior plastering and drywall services to the most
                  discerning homeowners in Ventura County. Our IICRC-certified craftsmen bring Old-World technique to modern residential
                  construction—creating surfaces that are as durable as they are breathtaking.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  From multi-layer Venetian plaster applications to seamless level-5 drywall finishes, every project is tailored to the unique
                  architectural character of your Thousand Oaks or Westlake Village estate. We pair premium materials—imported Italian
                  lime putty, American-made lightweight compounds—with hand techniques refined over thousands of projects.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                  Whether you're building a new luxury home in the Conejo Valley, renovating a mid-century estate off Westlake Boulevard,
                  or restoring original plaster in a historic Thousand Oaks property, our team brings the same uncompromising attention to
                  detail. We don't use shortcuts. We don't cut corners. We craft surfaces that homeowners admire for generations.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Interior Services Include:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Venetian Plaster & Decorative Finishes",
                    "Custom Drywall Installation & Level-5 Finishing",
                    "Texture Matching & Seamless Repairs",
                    "Crown Molding & Architectural Trim Work",
                    "Coffered & Tray Ceiling Treatments",
                    "Skim Coating & Surface Preparation",
                    "Acoustic & Soundproof Drywall Systems",
                    "Plaster Restoration for Historic Properties",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 group"
                >
                  Request a Free Estimate
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="luxury-card overflow-hidden">
                <img
                  src={projectInterior}
                  alt="Premium Venetian plaster application in Westlake Village home"
                  className="w-full h-80 lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 glass rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={iicrcBadge} alt="IICRC Certified" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-serif text-lg font-bold text-foreground">IICRC Certified</p>
                    <p className="font-sans text-xs text-muted-foreground">Licensed & Insured in Ventura County</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Every technician on our team holds active IICRC certification, ensuring your project meets the highest industry standards for craftsmanship, safety, and professionalism.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <ProcessTimeline
          steps={process}
          subheading="How We Work"
          heading={`Our \u00A0`}
          headingHighlight="5-Step Process"
          description="From initial consultation to final walk-through, our proven process ensures every interior project in Thousand Oaks and Westlake Village is delivered on time, on budget, and to perfection."
          variant="dark"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">The Mier & Murphy Difference</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Why Ventura County Homeowners <span className="text-primary">Trust Us</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Master Craftsmen", desc: "Our plasterers average 15+ years of hands-on experience with luxury residential and commercial interiors across Southern California." },
              { icon: Shield, title: "Fully Licensed & Insured", desc: "California State Contractor's License, IICRC certified, with comprehensive general liability and workers' compensation coverage." },
              { icon: Clock, title: "On-Time Delivery", desc: "We honour deadlines. Our project management system ensures every Thousand Oaks and Westlake Village interior project finishes on schedule." },
              { icon: Star, title: "5-Star Reputation", desc: "Rated 5 stars across Google, Yelp, and Houzz by homeowners in Thousand Oaks, Westlake Village, and the greater Conejo Valley." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-background border border-border rounded-2xl p-6 text-center h-full hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF FINISHES */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Finish Types</p>
               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                Interior Plaster & Drywall <span className="text-primary">Finish Options</span>
              </h2>
                 <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
                Every Thousand Oaks and Westlake Village home deserves a finish that matches its architectural character. Explore our most requested interior finishes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Venetian Plaster", desc: "Multi-layer polished plaster that creates a marble-like lustre. Ideal for formal living rooms, master suites, and grand foyers in luxury Thousand Oaks estates.", keywords: "venetian plaster thousand oaks" },
              { title: "Level-5 Drywall Finish", desc: "The highest grade of drywall finishing—a skim coat over the entire surface for a perfectly smooth, paint-ready wall. Essential for modern minimalist interiors.", keywords: "level 5 drywall finish westlake village" },
              { title: "California Skip Trowel", desc: "The signature Southern California texture that adds warmth and character. Applied with a curved trowel to create subtle, hand-crafted undulations.", keywords: "skip trowel texture ventura county" },
              { title: "Knockdown Texture", desc: "A versatile, forgiving texture that hides imperfections while adding visual interest. Popular in Mediterranean-style homes across the Conejo Valley.", keywords: "knockdown texture thousand oaks" },
              { title: "Sand Float Finish", desc: "A classic plaster finish with a fine, granular texture. Commonly found in mid-century and ranch-style homes throughout Westlake Village and Thousand Oaks.", keywords: "sand float plaster westlake village" },
              { title: "Decorative Moulding & Trim", desc: "Custom crown moulding, chair rails, coffered ceilings, and wainscoting that add architectural distinction to any room in your Ventura County home.", keywords: "crown molding installation thousand oaks" },
            ].map((finish) => (
              <ScrollReveal key={finish.title}>
                 <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 h-full hover:bg-white/[0.1] hover:border-primary/30 transition-all duration-300">
                   <h3 className="font-serif text-lg font-bold mb-3 text-white">{finish.title}</h3>
                   <p className="font-sans text-sm text-white/60 leading-relaxed">{finish.desc}</p>
                 </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Service Areas</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Interior Plastering & Drywall Services <span className="text-primary">Near You</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We proudly serve homeowners throughout Ventura County with premium interior plaster and drywall services. Our team is locally based, ensuring fast response times and deep knowledge of regional building codes and architectural styles.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Thousand Oaks (91360, 91362)",
              "Westlake Village (91361, 91302)",
              "Agoura Hills (91301)",
              "Newbury Park (91320)",
              "Camarillo (93010, 93012)",
              "Moorpark (93021)",
              "Simi Valley (93063, 93065)",
              "Oak Park (91377)",
              "Calabasas (91302)",
              "Malibu (90265)",
              "Oxnard (93030, 93036)",
              "Ventura (93001, 93003)",
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 bg-background border border-border rounded-lg p-3">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="font-sans text-xs text-foreground/80">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your <span className="text-primary">Interior?</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
              Schedule a complimentary on-site consultation with one of our interior specialists. We'll assess your space, discuss your vision, and provide a detailed estimate—all at no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+18055550199"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Call (805) 555-0199
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/40">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4 font-semibold">Common Questions</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Interior Plastering <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
                Answers to the most common questions from Thousand Oaks and Westlake Village homeowners about our interior plaster and drywall services.
              </p>
            </div>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-2xl px-6">
                <AccordionTrigger className="font-sans text-sm font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default ServiceInterior;
