import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Home, Award, Clock, Shield, Star, MapPin, Sun, Thermometer } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectExterior from "@/assets/project-exterior.jpg";
import iicrcBadge from "@/assets/iicrc-badge.png";

const faqs = [
  {
    q: "What exterior stucco styles do you offer in Westlake Village?",
    a: "We apply traditional smooth stucco, Santa Barbara finish, dash coat, lace, and modern flat-trowel finishes. Each style is customised to complement the Mediterranean, Spanish Colonial, and contemporary architecture prevalent in Westlake Village and Thousand Oaks.",
  },
  {
    q: "How long does a full stucco exterior last in Ventura County's climate?",
    a: "A professionally applied stucco exterior typically lasts 50–80 years in Ventura County's mild climate. Our three-coat system with elastomeric sealant provides superior crack resistance and UV protection against Southern California sun.",
  },
  {
    q: "Do you repair existing stucco cracks and damage?",
    a: "Yes. We provide expert stucco crack repair and color matching for homes in Thousand Oaks, Westlake Village, and surrounding Ventura County communities. Our proprietary matching process ensures seamless, invisible repairs.",
  },
  {
    q: "What is the difference between stucco and EIFS?",
    a: "Traditional stucco is a cement-based plaster applied in three coats, while EIFS (Exterior Insulation and Finish System) adds a foam insulation layer beneath an acrylic finish. EIFS offers superior energy efficiency—up to R-11 insulation—ideal for Ventura County's energy codes.",
  },
  {
    q: "How much does exterior stucco application cost per square foot?",
    a: "In the Thousand Oaks and Westlake Village area, three-coat stucco application ranges from $6–$12 per square foot depending on finish type and accessibility. We provide complimentary on-site estimates for accurate pricing.",
  },
  {
    q: "Is stucco a good choice for fire-prone areas in Ventura County?",
    a: "Absolutely. Stucco is classified as a 1-hour fire-rated material, making it one of the best exterior cladding options for wildfire-prone areas in Thousand Oaks and the Conejo Valley. It's non-combustible and helps protect your home's structural framing.",
  },
  {
    q: "How do you handle stucco colour matching for repairs?",
    a: "We use a proprietary colour-matching system that accounts for UV aging, original pigment formulations, and application texture. We create on-site test patches and allow them to cure before final application to guarantee an invisible match.",
  },
  {
    q: "Do you offer exterior painting along with stucco services?",
    a: "Yes. We provide complete exterior finishing including elastomeric painting, which is specifically designed for stucco surfaces. Elastomeric paint bridges hairline cracks and provides a waterproof, breathable barrier ideal for Ventura County weather patterns.",
  },
];

const process = [
  { step: "01", title: "Property Assessment", desc: "Our estimators evaluate your home's existing exterior, substrate condition, architectural style, and local HOA requirements to design the ideal stucco system for your Thousand Oaks or Westlake Village property." },
  { step: "02", title: "Material Selection", desc: "We guide you through finish types, colour palettes, and coating systems. We provide physical samples applied to matching substrates so you can see and feel the exact finish before work begins." },
  { step: "03", title: "Substrate & Lath Prep", desc: "Proper preparation is non-negotiable. We install weather-resistant barriers, galvanised lath, and control joints per IBC and California building code requirements to ensure a crack-free result." },
  { step: "04", title: "Three-Coat Application", desc: "Our master plasterers apply the scratch coat, brown coat, and finish coat by hand—each layer cured to specification before the next is applied. No shortcuts, no spray-only methods." },
  { step: "05", title: "Protective Sealant & Inspection", desc: "Final coats are sealed with elastomeric or acrylic sealants rated for Southern California UV exposure. A senior project manager inspects every elevation before project completion." },
];

const stats = [
  { value: "1,800+", label: "Exterior Projects Completed" },
  { value: "50–80yr", label: "Expected Finish Lifespan" },
  { value: "1-Hour", label: "Fire Rating (Stucco)" },
  { value: "R-11", label: "EIFS Insulation Value" },
];

const ServiceExterior = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior Stucco & Plaster Services – Thousand Oaks & Westlake Village",
    provider: {
      "@type": "LocalBusiness",
      name: "Mier & Murphy Builders",
      areaServed: ["Thousand Oaks", "Westlake Village", "Ventura County"],
    },
    description:
      "Premium exterior stucco, plaster, and facade finishing for luxury estates in Thousand Oaks, Westlake Village, and Ventura County.",
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
          <img src={projectExterior} alt="Premium stucco exterior on a Westlake Village luxury estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Home className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">COMMANDING CURB APPEAL</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Exterior Stucco & Plaster <span className="text-primary">Excellence</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Architectural-grade stucco, EIFS, and exterior plaster systems for luxury estates in
              <strong> Thousand Oaks</strong>, <strong>Westlake Village</strong>, and <strong>Ventura County</strong>.
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
            <ScrollReveal direction="right">
              <div className="luxury-card overflow-hidden">
                <img src={projectExterior} alt="Custom exterior stucco finish on Thousand Oaks residence" className="w-full h-80 lg:h-[500px] object-cover" loading="lazy" />
              </div>
              <div className="mt-8 glass rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={iicrcBadge} alt="IICRC Certified" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-serif text-lg font-bold text-foreground">Licensed Stucco Contractor</p>
                    <p className="font-sans text-xs text-muted-foreground">California State License • Ventura County</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Fully licensed, bonded, and insured with comprehensive general liability and workers' compensation coverage for every exterior project.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Premium <span className="text-primary">Exterior Finishes</span> Built for Ventura County
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  Your home's exterior is its first impression and its first line of defence. Mier & Murphy Builders delivers
                  architectural-grade stucco and exterior plaster systems that protect your investment while creating stunning curb appeal
                  across Thousand Oaks, Westlake Village, and the broader Ventura County region.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  We specialise in Mediterranean, Spanish Colonial, and contemporary exterior styles using a proprietary three-coat system
                  with weather-resistant elastomeric sealants designed for Southern California's unique climate. From new construction to
                  full facade restorations, our licensed and insured team delivers results that stand the test of decades.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                  Ventura County's climate presents unique challenges: intense UV exposure, seasonal Santa Ana winds, occasional wildfire smoke,
                  and coastal moisture. Our exterior systems are engineered specifically for these conditions, using California-approved materials
                  and application methods that exceed code requirements and HOA standards throughout the Conejo Valley.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Exterior Services Include:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Premium Three-Coat Stucco Application",
                    "EIFS / Synthetic Stucco Systems",
                    "Stucco Crack Repair & Color Matching",
                    "Architectural Facade Design & Restoration",
                    "Elastomeric & Weather-Resistant Coatings",
                    "Custom Color & Texture Consultation",
                    "Fire-Resistant Exterior Cladding",
                    "HOA-Compliant Exterior Renovations",
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
                  Get a Free Exterior Estimate
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STUCCO TYPES */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Finish Options</p>
               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                 Exterior Stucco <span className="text-primary">Finish Styles</span>
               </h2>
               <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
                 Choose from a range of architectural exterior finishes, each designed to complement the unique character of Thousand Oaks and Westlake Village luxury homes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Santa Barbara Smooth", desc: "A hand-troweled, silky-smooth finish that creates a clean, elegant facade. The signature finish of California's most prestigious coastal estates, now available for your Thousand Oaks home." },
              { title: "Mediterranean Dash", desc: "A textured, aggregate-rich finish that evokes old-world Mediterranean charm. Popular across Westlake Village and the Conejo Valley's hillside estates." },
              { title: "Modern Flat Trowel", desc: "Ultra-clean, contemporary finish with minimal texture. Ideal for modern and transitional architecture in Thousand Oaks and Calabasas." },
              { title: "Lace / Skip Trowel", desc: "A versatile, organic texture created by hand with a curved trowel. Adds warmth and visual depth to ranch and traditional-style Ventura County homes." },
              { title: "EIFS Synthetic Stucco", desc: "An insulated exterior system that provides superior energy efficiency (R-5 to R-11) while maintaining the visual appeal of traditional stucco. Ideal for Ventura County's Title 24 energy requirements." },
              { title: "Elastomeric Coating", desc: "A flexible, waterproof topcoat that bridges hairline cracks and provides long-term UV protection. Extends the life of existing stucco by 15–20 years in Southern California's climate." },
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

      {/* PROCESS */}
      <section className="section-padding">
        <ProcessTimeline
          steps={process}
          subheading="How We Work"
          heading=""
          headingHighlight="5-Step Exterior Process"
          description="Every exterior project follows our proven process, ensuring durable, code-compliant results that enhance your Thousand Oaks or Westlake Village property for decades."
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4 font-semibold">The Mier & Murphy Advantage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                Why Ventura County Trusts Our <span className="text-primary">Exterior Work</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sun, title: "Climate Engineered", desc: "Our exterior systems are specifically designed for Ventura County's UV exposure, Santa Ana winds, and coastal moisture conditions." },
              { icon: Shield, title: "Fire-Rated Materials", desc: "1-hour fire-rated stucco cladding provides essential protection for homes in wildfire-prone areas of Thousand Oaks and the Conejo Valley." },
              { icon: Thermometer, title: "Energy Efficient", desc: "EIFS systems deliver R-5 to R-11 insulation values, helping Westlake Village homeowners meet California Title 24 energy standards." },
              { icon: Award, title: "HOA Approved", desc: "We work with every major HOA in Thousand Oaks and Westlake Village, ensuring finishes meet community standards and approval processes." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 text-center h-full hover:bg-white/[0.1] hover:border-primary/30 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-white">{item.title}</h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">{item.desc}</p>
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
                Exterior Stucco Contractors <span className="text-primary">Near You</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Serving luxury residential and commercial properties throughout Ventura County with premium exterior stucco and plaster services.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Thousand Oaks (91360, 91362)", "Westlake Village (91361, 91302)", "Agoura Hills (91301)", "Newbury Park (91320)",
              "Camarillo (93010, 93012)", "Moorpark (93021)", "Simi Valley (93063, 93065)", "Oak Park (91377)",
              "Calabasas (91302)", "Malibu (90265)", "Oxnard (93030, 93036)", "Ventura (93001, 93003)",
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
              Elevate Your Home's <span className="text-primary">Curb Appeal</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
              Schedule a complimentary exterior assessment with our stucco specialists. We'll evaluate your home's condition, discuss finish options, and provide a detailed written estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg">
                Get Your Free Estimate
              </Link>
              <a href="tel:+18055550199" className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-white/10 transition-all duration-300">
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
                Exterior Stucco <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
                Answers to common questions from Thousand Oaks and Westlake Village homeowners about exterior stucco and plaster services.
              </p>
            </div>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-2xl px-6">
                <AccordionTrigger className="font-sans text-sm font-medium text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default ServiceExterior;
