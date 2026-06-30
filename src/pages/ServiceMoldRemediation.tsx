import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Bug, AlertTriangle, Phone, Shield, Award, MapPin, Wind, Microscope, FlaskConical, HeartPulse } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectMold from "@/assets/project-mold.jpg";
import iicrcBadge from "@/assets/iicrc-badge.png";

const faqs = [
  {
    q: "How do I know if my Thousand Oaks home has a mold problem?",
    a: "Common signs include musty odours, visible dark spots on walls or ceilings, persistent allergy symptoms, and recent water damage. Our IICRC S520 certified inspectors use thermal imaging and air-quality sampling to detect hidden mold growth in Thousand Oaks and Westlake Village homes.",
  },
  {
    q: "Is mold remediation covered by insurance in Ventura County?",
    a: "Many homeowner's insurance policies cover mold remediation when it results from a covered peril such as a burst pipe or storm damage. Our team provides comprehensive documentation to support your insurance claim and works directly with your adjuster.",
  },
  {
    q: "What is the IICRC S520 standard for mold remediation?",
    a: "The IICRC S520 is the industry standard for Professional Mold Remediation. It defines procedures for mold assessment, containment, removal, and post-remediation verification. All Mier & Murphy mold specialists hold active IICRC S520 certification.",
  },
  {
    q: "How long does professional mold remediation take?",
    a: "A typical mold remediation project in a Ventura County home takes 3–10 days depending on the extent of contamination, the number of affected areas, and the type of materials involved. Post-remediation clearance testing adds 1–2 additional days.",
  },
  {
    q: "Can mold come back after professional remediation?",
    a: "Not if the source moisture issue is resolved. Our process includes identifying and addressing the root moisture source, complete mold removal, antimicrobial treatment, and a prevention plan. We back our work with post-remediation clearance testing to ensure your Thousand Oaks or Westlake Village home is mold-free.",
  },
  {
    q: "What types of mold are most common in Ventura County homes?",
    a: "The most common mold species in Thousand Oaks and Westlake Village include Cladosporium, Aspergillus, Penicillium, and Stachybotrys chartarum (black mold). Each species requires specific remediation protocols. Our IICRC S520 certified team is trained to handle all species safely and effectively.",
  },
  {
    q: "Is it safe to stay in my home during mold remediation?",
    a: "It depends on the scope of contamination. For localised mold affecting a single room, occupancy is usually safe with proper containment barriers. For extensive contamination affecting multiple areas or HVAC systems, temporary relocation may be recommended. We advise on a case-by-case basis.",
  },
  {
    q: "What's the difference between mold removal and mold remediation?",
    a: "'Mold removal' implies eliminating all mold, which is impossible—mold spores exist everywhere naturally. 'Mold remediation' means returning mold levels to normal, safe concentrations by removing active growth, treating affected materials, and addressing the moisture source. Professional remediation is the correct approach.",
  },
  {
    q: "Do you provide post-remediation clearance testing?",
    a: "Yes. We coordinate independent third-party clearance testing after every remediation project. An independent industrial hygienist collects air and surface samples to verify mold levels are within normal parameters before we consider the project complete.",
  },
  {
    q: "How much does mold remediation cost in Thousand Oaks?",
    a: "Mold remediation costs in Thousand Oaks and Westlake Village typically range from $2,000–$15,000 depending on the affected square footage, mold species, and materials involved. We provide detailed written estimates after our professional assessment, and work with insurance to maximise coverage.",
  },
];

const moldTypes = [
  {
    title: "Stachybotrys (Black Mold)",
    desc: "The most concerning mold species—produces mycotoxins that can cause serious respiratory and neurological symptoms. Commonly found behind water-damaged drywall and in chronically damp areas. Requires full containment and HEPA filtration during removal.",
    severity: "High Risk",
  },
  {
    title: "Aspergillus",
    desc: "One of the most common indoor molds in Ventura County. Found in dust, on walls, and in HVAC systems. Some species produce aflatoxins. Particularly dangerous for immunocompromised individuals and those with asthma.",
    severity: "Moderate–High Risk",
  },
  {
    title: "Cladosporium",
    desc: "Olive-green or brown mold commonly found on painted surfaces, wood, and textiles. Thrives in both warm and cool conditions. While less toxic than Stachybotrys, it's a potent allergen that can trigger chronic respiratory symptoms.",
    severity: "Moderate Risk",
  },
  {
    title: "Penicillium",
    desc: "Blue-green mold often found on water-damaged materials, wallpaper, and carpet. Spreads rapidly and produces musty odours. Some species produce mycotoxins. Common in Thousand Oaks homes with undetected slow leaks.",
    severity: "Moderate Risk",
  },
];

const process = [
  { step: "01", title: "Professional Mold Inspection", desc: "Our IICRC S520 certified inspector conducts a thorough visual assessment, thermal imaging scan, and collects air and surface samples to identify mold species, contamination levels, and the root moisture source." },
  { step: "02", title: "Customised Remediation Plan", desc: "Based on inspection findings, we develop a detailed remediation protocol specifying containment strategy, PPE requirements, removal methods, and timeline. This plan is shared with your insurance adjuster for pre-approval." },
  { step: "03", title: "Containment & Air Filtration", desc: "We establish negative air pressure containment with polyethylene barriers and commercial HEPA air scrubbers. This prevents cross-contamination of unaffected areas during the remediation process." },
  { step: "04", title: "Mold Removal & Material Disposal", desc: "All mold-affected porous materials (drywall, carpet, insulation) are carefully removed and disposed of per EPA and California regulations. Non-porous surfaces are HEPA-vacuumed and treated with antimicrobial agents." },
  { step: "05", title: "Antimicrobial Treatment & Encapsulation", desc: "All remediated surfaces receive EPA-registered antimicrobial treatment. Where appropriate, encapsulant coatings are applied to provide a long-term barrier against future mold colonisation." },
  { step: "06", title: "Source Moisture Repair", desc: "The root cause of moisture intrusion is identified and repaired—whether it's a plumbing leak, poor ventilation, inadequate waterproofing, or HVAC condensation. This is the most critical step in preventing recurrence." },
  { step: "07", title: "Clearance Testing & Reconstruction", desc: "An independent industrial hygienist conducts post-remediation clearance testing. Once cleared, our in-house construction team rebuilds affected areas—drywall, trim, flooring, and paint—to pre-loss condition." },
];

const stats = [
  { value: "IICRC", label: "S520 Certified Team" },
  { value: "3rd Party", label: "Clearance Testing" },
  { value: "EPA", label: "Registered Antimicrobials" },
  { value: "100%", label: "Source Moisture Repair" },
];

const ServiceMoldRemediation = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mold Remediation – Thousand Oaks & Westlake Village | IICRC S520 Certified",
    provider: {
      "@type": "LocalBusiness",
      name: "Mier & Murphy Builders",
      areaServed: ["Thousand Oaks", "Westlake Village", "Ventura County"],
    },
    description:
      "IICRC S520 certified mold remediation and removal for homes in Thousand Oaks, Westlake Village, and Ventura County. Professional assessment, containment, removal, and prevention.",
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
      <section className="relative min-h-[65vh] flex items-center">
        <div className="absolute inset-0">
          <img src={projectMold} alt="Professional mold remediation specialist in a Ventura County home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 border border-primary/25 mb-6">
              <Bug className="w-7 h-7 text-primary" />
            </div>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">IICRC S520 Certified Protection</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Mold <span className="text-primary">Remediation</span> Specialists
            </h1>
            <p className="font-sans text-[15px] text-white/75 max-w-xl leading-relaxed mb-6">
              Certified mold assessment, removal, and prevention for luxury homes in
              <strong> Thousand Oaks</strong>, <strong>Westlake Village</strong>, and <strong>Ventura County</strong>.
              Protect your family. Preserve your investment.
            </p>
            <a
              href="tel:+18055550199"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-sans text-base font-semibold hover:bg-primary/90 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5" />
              Schedule Inspection: (805) 555-0199
            </a>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* HEALTH WARNING */}
      <section className="py-6 px-6 bg-destructive/10 border-y border-destructive/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
          <p className="font-sans text-sm text-foreground">
            <strong>Health concern?</strong> Mold exposure can cause respiratory issues, allergic reactions, and neurological symptoms. If you suspect mold in your Thousand Oaks or Westlake Village home, call <a href="tel:+18055550199" className="text-primary font-semibold hover:underline">(805) 555-0199</a> for a professional assessment.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 border-b border-border/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-sans text-xs tracking-wider text-muted-foreground uppercase">{stat.label}</p>
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
                <img src={projectMold} alt="Mold containment and HEPA air filtration in Thousand Oaks residence" className="w-full h-80 lg:h-[500px] object-cover" loading="lazy" />
              </div>
              <div className="mt-8 glass rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={iicrcBadge} alt="IICRC S520 Certified" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-serif text-lg font-bold text-foreground">IICRC S520 Certified</p>
                    <p className="font-sans text-xs text-muted-foreground">Mold Remediation Standard</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Every mold specialist on our team holds active IICRC S520 certification—the industry's highest standard for professional mold remediation, containment, and clearance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Trusted <span className="text-primary">Mold Remediation</span> in Ventura County
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  Mold is more than an aesthetic issue—it's a health hazard and a structural threat. Mier & Murphy Builders' IICRC S520 certified
                  mold specialists don't just remove mold; we identify the root moisture source, eliminate the threat, and implement long-term
                  prevention strategies for your Thousand Oaks or Westlake Village home.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  Our comprehensive remediation protocol follows IICRC S520 standards with full containment, HEPA air filtration,
                  antimicrobial treatment, and independent third-party clearance testing. We handle everything from small bathroom mold
                  issues to large-scale attic and crawlspace contamination throughout Ventura County.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                  Ventura County's warm, semi-arid climate creates unique conditions for mold growth—particularly in homes with hidden plumbing
                  leaks, inadequate bathroom ventilation, or post-water-damage conditions that weren't properly dried. Our locally based team
                  understands these regional factors and designs remediation strategies specifically for the building styles and climate
                  conditions found in Thousand Oaks, Westlake Village, and the Conejo Valley.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Remediation Services:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Professional Mold Assessment & Air Sampling",
                    "Full Containment & HEPA Air Filtration",
                    "Complete Mold Removal & Safe Disposal",
                    "Antimicrobial & Encapsulation Treatments",
                    "Source Moisture Identification & Repair",
                    "Post-Remediation Clearance Testing",
                    "HVAC & Ductwork Mold Remediation",
                    "Attic, Crawlspace & Basement Specialisation",
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
                  Schedule a Mold Inspection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MOLD TYPES */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4 font-semibold">Know Your Enemy</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                Common Mold Species in <span className="text-primary">Ventura County Homes</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Understanding the mold species in your Thousand Oaks or Westlake Village home helps determine the proper remediation protocol, health risks, and urgency of response.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moldTypes.map((mold) => (
              <ScrollReveal key={mold.title}>
                <div className="luxury-card p-6 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-lg font-bold text-foreground">{mold.title}</h3>
                    <span className="font-sans text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{mold.severity}</span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{mold.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH RISKS */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Health & Safety</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Health Risks of <span className="text-primary">Untreated Mold</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Mold exposure affects everyone differently, but prolonged exposure in your Thousand Oaks or Westlake Village home can lead to serious health complications. Professional remediation isn't optional—it's essential.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, title: "Respiratory Issues", desc: "Chronic coughing, wheezing, shortness of breath, and aggravated asthma. Mold spores irritate airways and can cause persistent respiratory infections." },
              { icon: Microscope, title: "Allergic Reactions", desc: "Sneezing, runny nose, red eyes, and skin rashes. Over 10% of the population has mold-specific IgE antibodies triggering allergic responses." },
              { icon: Wind, title: "Sinus Problems", desc: "Chronic sinusitis, headaches, and nasal congestion. Research links chronic indoor mold exposure to a 30–50% increase in sinus infection frequency." },
              { icon: FlaskConical, title: "Mycotoxin Exposure", desc: "Toxic mold species produce mycotoxins linked to neurological symptoms, fatigue, and immune suppression. Black mold (Stachybotrys) is particularly concerning." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="glass rounded-lg p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-muted/40">
        <ProcessTimeline
          steps={process}
          subheading="Our Proven Protocol"
          heading=""
          headingHighlight="7-Step Mold Remediation Process"
          description="Our IICRC S520-compliant remediation process addresses every aspect of mold contamination—from initial assessment through independent clearance verification and complete reconstruction."
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">The Mier & Murphy Advantage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Why Thousand Oaks Trusts Our <span className="text-primary">Mold Remediation</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "IICRC S520 Certified", desc: "The industry's highest certification for mold remediation. Our entire team maintains active S520 credentials with annual continuing education." },
              { icon: Shield, title: "3rd-Party Verification", desc: "Every project ends with independent clearance testing by a licensed industrial hygienist—not our own staff. True accountability." },
              { icon: Microscope, title: "Root Cause Experts", desc: "We don't just remove mold—we find and fix the moisture source. Without addressing root cause, mold always returns." },
              { icon: Phone, title: "Full-Service Restoration", desc: "Assessment, remediation, moisture repair, AND reconstruction—all handled in-house by our licensed team. One call, one contractor, one warranty." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="glass rounded-lg p-6 text-center h-full">
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

      {/* AREAS WE SERVE */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4 font-semibold">Service Areas</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                Mold Remediation Experts <span className="text-primary">Near You</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Serving residential and commercial properties throughout Ventura County with IICRC S520 certified mold assessment, remediation, and prevention services.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Thousand Oaks (91360, 91362)", "Westlake Village (91361, 91302)", "Agoura Hills (91301)", "Newbury Park (91320)",
              "Camarillo (93010, 93012)", "Moorpark (93021)", "Simi Valley (93063, 93065)", "Oak Park (91377)",
              "Calabasas (91302)", "Malibu (90265)", "Oxnard (93030, 93036)", "Ventura (93001, 93003)",
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 glass rounded-lg p-3">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="font-sans text-xs text-foreground/80">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Suspect Mold? <span className="text-primary">Don't Wait.</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Every day of untreated mold increases health risks and remediation costs. Schedule a professional IICRC S520 certified mold inspection for your Thousand Oaks or Westlake Village home today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+18055550199" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-sans text-base font-semibold hover:bg-primary/90 transition-all duration-300 group">
                <Phone className="w-5 h-5" /> Call (805) 555-0199
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 glass px-8 py-4 rounded-lg font-sans text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-300">
                Request Inspection Online <ArrowRight className="w-4 h-4" />
              </Link>
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
                Mold Remediation <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
                Answers to the most common questions from Thousand Oaks and Westlake Village homeowners about mold remediation, health risks, insurance coverage, and our IICRC S520 certified process.
              </p>
            </div>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-lg px-6 border-primary/10">
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

export default ServiceMoldRemediation;
