import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Star, Hammer } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import frankPortrait from "@/assets/frank-portrait.jpg";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const timeline = [
  { year: "1994", title: "A Passion Ignited", description: "Frank Mier begins learning construction at age 10, working alongside master craftsmen." },
  { year: "2004", title: "Mier & Murphy Founded", description: "The company is established in Thousand Oaks with a commitment to uncompromising quality." },
  { year: "2010", title: "Apple Campus Project", description: "Frank contributes to the iconic Apple campus, honing skills at the highest level of construction." },
  { year: "2015", title: "IICRC Certification", description: "Achieving S500 and S520 certifications, expanding into water damage and mold remediation." },
  { year: "2024", title: "500+ Projects", description: "Celebrating 20 years and over 500 completed projects for Thousand Oaks' most discerning homeowners." },
];

const certifications = [
  { name: "IICRC S500", description: "Water Damage Restoration", icon: Shield },
  { name: "IICRC S520", description: "Mold Remediation", icon: Shield },
  { name: "Licensed Contractor", description: "State of California", icon: Award },
  { name: "Fully Insured", description: "Comprehensive Coverage", icon: Star },
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Craftsmanship" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">Our Story</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Legacy Forged in <span className="gold-gradient-text">Craftsmanship</span>
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg">
              For over two decades, Mier & Murphy Builders has set the standard for luxury 
              construction in Thousand Oaks and Westlake Village. What began as a young boy's 
              passion has become the region's most trusted name in premium craftsmanship.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding" id="team">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-4">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase">Our Journey</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4">
              Two Decades of <span className="gold-gradient-text">Excellence</span>
            </h2>
            <div className="gold-divider mb-16" />
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""} pl-12 md:pl-0`}>
                    <span className="font-serif text-2xl font-bold gold-gradient-text">{item.year}</span>
                    <h3 className="font-serif text-lg font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <div className="absolute left-4 md:relative md:left-auto flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 shadow-[0_0_15px_hsl(43,64%,52%,0.4)]" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding bg-secondary/50 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Hammer className="w-10 h-10 text-primary mx-auto mb-8" />
            <blockquote className="font-serif text-3xl md:text-4xl font-bold italic leading-snug mb-8">
              "Build to Live,{" "}
              <span className="gold-gradient-text">Live to Build</span>"
            </blockquote>
            <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This philosophy drives every decision we make. We don't just construct walls 
              and ceilings—we create environments where families thrive, memories are made, 
              and homes become legacies. Every project receives the same dedication whether 
              it's a Venetian plaster accent wall or a complete estate restoration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-padding" id="certifications">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-4">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase">Credentials</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4">
              Unrivaled <span className="gold-gradient-text">Certifications</span>
            </h2>
            <div className="gold-divider mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.1}>
                <div className="luxury-card p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full glass mb-4">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{cert.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
