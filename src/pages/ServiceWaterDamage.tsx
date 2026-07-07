import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Droplets, AlertTriangle, Phone, Clock, Shield, Award, MapPin, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectRestoration from "@/assets/project-restoration.jpg";
import iicrcBadge from "@/assets/iicrc-badge.png";

const faqs = [
  {
    q: "How quickly can you respond to water damage in Thousand Oaks?",
    a: "Our IICRC S500-certified emergency team responds within 60 minutes to water damage calls in Thousand Oaks, Westlake Village, and all of Ventura County. Rapid response is critical—every hour of standing water increases structural damage exponentially.",
  },
  {
    q: "Does homeowner's insurance cover water damage restoration?",
    a: "Most homeowner's insurance policies in Ventura County cover sudden and accidental water damage, including burst pipes and appliance failures. Our team works directly with your insurance adjuster, providing detailed documentation and IICRC-compliant moisture reports to maximise your claim.",
  },
  {
    q: "What is the IICRC S500 standard?",
    a: "The IICRC S500 is the industry-recognised Standard and Reference Guide for Professional Water Damage Restoration. It defines procedures for inspection, water extraction, structural drying, and dehumidification. All Mier & Murphy restoration technicians are IICRC S500 certified.",
  },
  {
    q: "How long does the water damage restoration process take?",
    a: "Typical water damage restoration in a Thousand Oaks or Westlake Village home takes 3–7 days, depending on the category of water loss and the extent of saturation. Category 1 (clean water) resolves fastest; Category 3 (black water) requires more extensive protocols.",
  },
  {
    q: "Can you restore hardwood floors after water damage?",
    a: "In many cases, yes. Our technicians use advanced drying systems specifically designed for hardwood floor restoration. Early intervention—within the first 24–48 hours—dramatically improves the likelihood of saving original hardwood floors in Ventura County homes.",
  },
  {
    q: "What should I do immediately after discovering water damage in my home?",
    a: "Stop the water source if safe to do so, turn off electricity in affected areas, move valuables to dry areas, and call Mier & Murphy immediately at (805) 555-0199. Do not attempt to use household vacuums on standing water—industrial extraction is required for proper restoration.",
  },
  {
    q: "Do you work with all insurance companies in Ventura County?",
    a: "Yes. We work with every major insurance provider in California, including State Farm, Allstate, USAA, Farmers, and Liberty Mutual. Our documentation meets all carrier requirements, and we can bill your insurance company directly to simplify the claims process.",
  },
  {
    q: "What's the difference between water mitigation and water restoration?",
    a: "Water mitigation is the immediate emergency response—stopping the water, extracting standing water, and beginning structural drying. Water restoration is the rebuilding phase—replacing damaged drywall, flooring, cabinets, and finishes. Mier & Murphy handles both phases under one contract.",
  },
  {
    q: "Can water damage cause mold in my Thousand Oaks home?",
    a: "Yes. Mold can begin growing within 24–48 hours of water exposure in Ventura County's warm climate. That's why rapid water extraction and structural drying is critical. If mold is discovered during restoration, our IICRC S520 certified team handles remediation seamlessly.",
  },
];

const categories = [
  {
    title: "Category 1: Clean Water",
    desc: "Water from a clean source such as a broken supply line, faucet, or ice maker. While not immediately hazardous, Category 1 water can degrade to Category 2 or 3 within 48 hours if not addressed promptly.",
    examples: "Burst supply lines, overflowing sinks, appliance malfunctions, rainwater intrusion through roof leaks",
  },
  {
    title: "Category 2: Grey Water",
    desc: "Water that contains significant contamination—chemical, biological, or physical—that can cause discomfort or illness. Requires enhanced PPE, antimicrobial treatment, and may require removal of affected porous materials.",
    examples: "Washing machine overflow, dishwasher discharge, toilet overflow (no solids), sump pump failures",
  },
  {
    title: "Category 3: Black Water",
    desc: "Grossly contaminated water containing pathogenic agents. Category 3 events require full containment, HEPA filtration, and removal of all affected porous materials per IICRC S500 protocol.",
    examples: "Sewage backups, river/stream flooding, standing water with microbial growth, toilet overflow with solids",
  },
];

const process = [
  { step: "01", title: "Emergency Contact & Dispatch", desc: "Call our 24/7 hotline. A certified project manager is dispatched to your Thousand Oaks or Westlake Village property within 60 minutes, day or night, 365 days a year." },
  { step: "02", title: "Inspection & Damage Assessment", desc: "We use infrared thermal imaging cameras and professional moisture meters to map the full extent of water penetration—including hidden moisture behind walls, under floors, and above ceilings." },
  { step: "03", title: "Water Extraction", desc: "Industrial submersible pumps and truck-mounted extraction units remove standing water rapidly. Every minute counts—the faster water is removed, the less structural damage occurs." },
  { step: "04", title: "Structural Drying & Dehumidification", desc: "Commercial-grade air movers, desiccant dehumidifiers, and specialty drying systems are deployed. We monitor moisture levels daily with IICRC-compliant documentation until targets are met." },
  { step: "05", title: "Antimicrobial Treatment", desc: "All affected surfaces are treated with EPA-registered antimicrobial agents to prevent mold growth and bacterial contamination—critical in Ventura County's warm climate." },
  { step: "06", title: "Reconstruction & Restoration", desc: "Damaged drywall, flooring, trim, and finishes are expertly rebuilt by our in-house construction team. Your property is returned to pre-loss condition—or better—under one seamless contract." },
];

const stats = [
  { value: "<60min", label: "Emergency Response Time" },
  { value: "24/7", label: "Available Year-Round" },
  { value: "IICRC", label: "S500 Certified Team" },
  { value: "100%", label: "Insurance Coordination" },
];

const ServiceWaterDamage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Damage Restoration – Thousand Oaks & Westlake Village | IICRC S500 Certified",
    provider: {
      "@type": "LocalBusiness",
      name: "Mier & Murphy Builders",
      areaServed: ["Thousand Oaks", "Westlake Village", "Ventura County"],
    },
    description:
      "24/7 IICRC S500 certified water damage restoration for homes in Thousand Oaks, Westlake Village, and Ventura County. Emergency response, structural drying, and full property restoration.",
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
          <img src={projectRestoration} alt="Professional water damage restoration in a Thousand Oaks home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 border border-primary/25 mb-6">
              <Droplets className="w-7 h-7 text-primary" />
            </div>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">IICRC S500 Certified Response</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Water Damage <span className="text-primary">Restoration</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 max-w-xl leading-relaxed mb-6">
              24/7 emergency water damage restoration for luxury homes in
              <strong> Thousand Oaks</strong>, <strong>Westlake Village</strong>, and <strong>Ventura County</strong>.
              IICRC S500 certified. Rapid response when every minute counts.
            </p>
            <a
              href="tel:+18055550199"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-sans text-base font-semibold hover:bg-primary/90 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5" />
              Call Now: (805) 555-0199
            </a>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="py-6 px-6 bg-destructive/10 border-y border-destructive/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
          <p className="font-sans text-sm text-foreground">
            <strong>Water damage emergency?</strong> Don't wait. Call <a href="tel:+18055550199" className="text-primary font-semibold hover:underline">(805) 555-0199</a> now for immediate dispatch. Our IICRC-certified team responds to Thousand Oaks and Westlake Village within 60 minutes, 24/7/365.
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
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Certified <span className="text-primary">Water Damage Experts</span> in Ventura County
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  When water threatens your Thousand Oaks or Westlake Village home, every minute counts. Mier & Murphy Builders' IICRC S500
                  certified restoration team combines industrial-grade extraction equipment with decades of structural expertise to return your
                  property to pre-loss condition—or better.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  We handle every category of water loss: from Category 1 clean-water pipe bursts to Category 3 sewage backups.
                  Our comprehensive process includes emergency water extraction, structural drying with commercial-grade dehumidifiers,
                  antimicrobial treatment, and complete reconstruction—all under one licensed and insured contractor.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                  Unlike restoration companies that subcontract rebuild work, Mier & Murphy handles the entire project in-house—from emergency
                  water extraction through final drywall finishing and paint. This single-contractor approach eliminates coordination delays,
                  reduces total project time by 30–40%, and ensures consistent quality from start to finish. Our team is locally based in
                  Ventura County, meaning we understand the unique water damage risks facing Thousand Oaks homes—from ageing supply lines
                  in established neighbourhoods to hillside drainage issues in newer developments.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Restoration Services:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "24/7 Emergency Response – Under 60 Minutes",
                    "Water Extraction & Structural Drying",
                    "Thermal Imaging & Moisture Detection",
                    "Content Pack-Out & Secure Storage",
                    "Antimicrobial & Sanitisation Treatments",
                    "Full Reconstruction & Insurance Coordination",
                    "Hardwood Floor Drying & Restoration",
                    "Carpet, Pad & Upholstery Cleaning",
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
                  Call for Emergency Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="luxury-card overflow-hidden">
                <img src={projectRestoration} alt="IICRC certified water extraction and structural drying in Westlake Village" className="w-full h-80 lg:h-[500px] object-cover" loading="lazy" />
              </div>
              <div className="mt-8 glass rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={iicrcBadge} alt="IICRC S500 Certified" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-serif text-lg font-bold text-foreground">IICRC S500 Certified</p>
                    <p className="font-sans text-xs text-muted-foreground">Water Damage Restoration Standard</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Every technician is IICRC S500 certified in professional water damage restoration. We follow the industry's most rigorous protocols for inspection, extraction, drying, and documentation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WATER DAMAGE CATEGORIES */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Understanding Water Damage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Water Damage <span className="text-primary">Categories Explained</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The IICRC classifies water damage into three categories based on contamination level. Understanding your category helps determine the proper restoration protocol and insurance coverage.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <ScrollReveal key={cat.title}>
                <div className="luxury-card p-6 h-full">
                  <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{cat.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                  <p className="font-sans text-xs text-primary/80 leading-relaxed"><strong>Common causes:</strong> {cat.examples}</p>
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
          subheading="Our Proven Process"
          heading=""
          headingHighlight="6-Step Water Damage Restoration Process"
          description="Our IICRC S500-compliant restoration process is designed to minimise damage, maximise insurance recovery, and return your Thousand Oaks or Westlake Village home to pre-loss condition as quickly as possible."
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">The Mier & Murphy Advantage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Why Thousand Oaks Homeowners <span className="text-primary">Choose Us</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "60-Minute Response", desc: "Our locally-based team reaches any Thousand Oaks or Westlake Village property within 60 minutes, 24 hours a day, 7 days a week." },
              { icon: Shield, title: "Single Contractor", desc: "Extraction, drying, antimicrobial treatment, AND rebuild—all handled in-house. No subcontractors. No coordination delays." },
              { icon: Award, title: "Insurance Experts", desc: "We work with every major insurance carrier in California. Our documentation meets all adjuster requirements for maximum claim recovery." },
              { icon: Clock, title: "30–40% Faster", desc: "Our single-contractor model eliminates handoff delays between mitigation and reconstruction, getting your family home faster." },
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
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">24/7 Emergency Coverage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Water Damage Restoration <span className="text-primary">Near You</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our emergency response team provides 24/7 water damage restoration coverage throughout Ventura County. No matter where you are, help is less than an hour away.
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
              Water Damage? <span className="text-primary">Act Now.</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Every hour of delay increases damage and restoration costs. Call our 24/7 emergency hotline for immediate dispatch of our IICRC S500 certified team to your Thousand Oaks or Westlake Village property.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+18055550199" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-sans text-base font-semibold hover:bg-primary/90 transition-all duration-300 group">
                <Phone className="w-5 h-5" /> Emergency: (805) 555-0199
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 glass px-8 py-4 rounded-lg font-sans text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-300">
                Request Callback <ArrowRight className="w-4 h-4" />
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
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Common Questions</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Water Damage Restoration <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
                Answers to the most common questions from Thousand Oaks and Westlake Village homeowners about water damage restoration, insurance claims, and our IICRC S500 certified process.
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

export default ServiceWaterDamage;
