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
    q: "Can you match my existing stucco color and texture?",
    a: "In most cases yes. We assess the existing finish at your estimate and tell you what is achievable for a seamless match.",
  },
  {
    q: "What causes stucco cracks, and are they a problem?",
    a: "Cracks can come from settling, weather, or moisture. Small hairline cracks are often cosmetic, but larger ones can point to a bigger issue.",
  },
  {
    q: "Do you handle small repairs, or only large jobs?",
    a: "We handle repairs of all sizes, from small drywall patches to larger stucco sections.",
  },
  {
    q: "How long does a typical stucco repair take?",
    a: "It depends on the size and drying time between coats. We give you a specific timeline at your estimate.",
  },
  {
    q: "Is a stucco crack ever a sign of a bigger problem?",
    a: "Sometimes. Wide, growing, or water-stained cracks can point to moisture or movement. We tell you honestly if it needs more than a cosmetic repair.",
  },
  {
    q: "What areas do you serve?",
    a: "Thousand Oaks, Westlake Village, Simi Valley, Moorpark, Oak Park, Agoura Hills, and the surrounding Conejo Valley.",
  },
];

  const process = [
    {
      step: "01",
      title: "Free Estimate",
      desc: "Send a photo or schedule a visit. We assess the damage and the existing finish.",
    },
    {
      step: "02",
      title: "Finish Assessment",
      desc: "We identify the texture, color, and technique needed for a seamless match.",
    },
    {
      step: "03",
      title: "Surface Prep",
      desc: "We prep the area properly so the repair bonds and lasts.",
    },
    {
      step: "04",
      title: "Repair & Matching",
      desc: "We complete the drywall or stucco repair and match it to the surrounding wall.",
    },
    {
      step: "05",
      title: "Final Check",
      desc: "We confirm the repair blends in before we call it done.",
    },
  ];


const DrywallPlasterStuccoRepair = () => {
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
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">REPAIRS THAT BLEND IN</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
            Seamless  <span className="text-primary">Drywall and Stucco Repair</span>in Thousand Oaks
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
            Drywall, plaster, and stucco repair for homeowners in Thousand Oaks, Westlake Village, and Simi Valley,
             matched to your existing finish so the repair disappears into the wall.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>
      {/* Trust section */}
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

      {/* MAIN CONTENT */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Repairs That Disappear <span className="text-primary">Into Your Existing Wall</span>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                A stucco or drywall repair that does not match the surrounding texture and color is often more noticeable than the original damage. Sun exposure, age, 
                and the original application all affect how a wall looks today, so matching a repair means more than just using the same product off the shelf.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Mier & Murphy Builders repairs drywall, plaster, and stucco for homeowners across Thousand Oaks and the Conejo Valley. Whether it is a stucco crack, a texture mismatch,
                 or interior wall damage, we assess the existing finish before we start so the repair holds up visually, not just structurally.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                We handle repairs of every size, from a single drywall patch to larger stucco sections, and we will tell you honestly if what you are seeing points to a bigger issue worth inspecting.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Drywall, Plaster, and Stucco Repair Services:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                        "Drywall repair and patching",
                        "Stucco crack repair",
                        "Stucco color matching",
                        "Interior and exterior texture matching",
                        "Water-damaged drywall replacement",
                        "Venetian plaster and decorative finishes",
                        
                        

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
                    <p className="font-serif text-lg font-bold text-foreground">Licensed Repair Contractor</p>
                    <p className="font-sans text-xs text-muted-foreground">CA Lic. #1077044</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Every drywall and stucco repair is handled by a licensed, family-owned team with 20 years of experience
                 matching finishes so the fix blends right into your wall.
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
          subheading="How We Make Every"
          heading={`Our \u00A0`}
          headingHighlight="Repair Blend In"
          description="A repair that lasts starts with the right prep and the right match. Here is how we approach every drywall and stucco job."
          variant="dark"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Why Choose Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Why Homeowners Trust Our <span className="text-primary">Repair and Matching Work</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed p-5">
              Anyone can slap on a patch. Here is what makes our drywall and stucco repairs actually disappear into the surrounding wall.
                </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Seamless Matching", desc: "We match texture and color so the repair does not stand out as a patch." },
              { icon: Shield, title: "Any Size Job", desc: "From a single patch to large stucco sections, no job too small." },
              { icon: Clock, title: "Honest Assessment ", desc: "We tell you if a crack points to a bigger moisture or structural issue." },
              { icon: Star, title: "20 Years of Experience", desc: "Two decades of drywall, plaster, and stucco work across the Conejo Valley." },
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
               Wall Finishes and Textures <span className="text-primary">We Match Perfectly</span>
              </h2>
                 <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
                 Southern California homes use a wide range of wall finishes. We match the exact one you already have so your repair is completely invisible.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Smooth Finis ", desc: "Clean, flat interior and exterior finishes matched to existing walls.", keywords: "Full Bathroom Remodel" },
              { title: "Sand & Float Texture", desc: "Common Southern California stucco texture, matched to your home.", keywords: "level 5 drywall finish westlake village" },
              { title: "Lace / Skip Trowel", desc: "Hand-troweled texture matched to the surrounding surface.", keywords: "skip trowel texture ventura county" },
              { title: "Dash Texture", desc: "Traditional dash-coat stucco texture repair and matching.", keywords: "knockdown texture thousand oaks" },
              { title: "Color Matching", desc: "Blending repaired sections into surrounding stucco color.", keywords: "sand float plaster westlake village" },
              { title: "Venetian Plaster ", desc: "Decorative plaster finishes for homeowners who want them.", keywords: "crown molding installation thousand oaks" },
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
              Repair Contractors <span className="text-primary">Near You in Ventura County</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We serve homeowners across Thousand Oaks and the surrounding Conejo Valley, matching repairs to the wall finishes common throughout the area.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Thousand Oaks", 
              "Westlake Village", 
              "Simi Valley", 
              "Moorpark ",
              "Oak Park", 
              "Agoura Hills ",
              "Newbury Park", 
              "Camarillo ",
              "Ventura County",
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
            Get Your Drywall or Stucco <span className="text-primary">Repair Estimated</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            Send us a photo of what needs repair or schedule a free estimate, and we will tell you exactly what it takes to fix it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+18059989082"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Call (805) 998-9082
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
              Common Water Damage and Mold <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
               Answers to the questions homeowners ask most about water damage, mold, and what it takes to fix them for good.</p>
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

export default DrywallPlasterStuccoRepair;
