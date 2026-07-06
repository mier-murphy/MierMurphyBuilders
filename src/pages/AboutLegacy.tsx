import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Award, Shield, Star, CheckCircle, Quote, Users, Calendar, Trophy } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import frankPortrait from "@/assets/frank-portrait.jpg";
import iicrcBadge from "@/assets/iicrc-badge.png";

const timeline = [
  { year: "1994", title: "A Passion Ignited", description: "Frank Mier begins learning construction at age 10, working alongside master craftsmen in Southern California." },
  { year: "2004", title: "Mier & Murphy Founded", description: "The company is established in Thousand Oaks with a commitment to uncompromising quality for Conejo Valley homeowners." },
  { year: "2010", title: "Apple Campus Project", description: "Frank contributes to the iconic Apple campus in Cupertino, bringing Silicon Valley precision to Thousand Oaks homes." },
  { year: "2015", title: "IICRC Dual Certification", description: "Achieving S500 & S520 certifications — becoming Thousand Oaks' only dual-certified luxury contractor." },
  { year: "2024", title: "500+ Projects Completed", description: "Celebrating 20 years and over 500 completed projects for the Conejo Valley's most discerning homeowners." },
];

const certifications = [
  { name: "IICRC S500", description: "Certified for emergency flood and water extraction", icon: Shield },
  { name: "IICRC S520", description: "Professional mold testing, containment & removal", icon: Shield },
  { name: "Licensed Contractor", description: "CA licensed — Ventura County building codes compliant", icon: Award },
  { name: "Fully Insured", description: "Comprehensive liability & workers' comp coverage", icon: Star },
];

const coreValues = [
  { icon: Hammer, title: "Artisan Craftsmanship", description: "Every finish executed by hand with techniques perfected over 30 years in Southern California construction." },
  { icon: Users, title: "Hyperlocal Expertise", description: "As Thousand Oaks residents, we know Conejo Valley homes — from Santa Ana wind damage to Mediterranean preservation." },
  { icon: Quote, title: "Transparent Communication", description: "Detailed timelines, honest estimates, and daily updates. You deserve to know exactly what's happening." },
  { icon: Trophy, title: "Legacy-Quality Results", description: "We build homes meant to last generations. Our work stands the test of time and California weather." },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "20+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "<60min", label: "Emergency Response" },
];

const AboutLegacy = () => {
  return (
    <>
      {/* ── HERO with Lead Form ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury craftsmanship in Thousand Oaks" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">EST. 2004 — THOUSAND OAKS, CA</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              A Legacy Forged in{" "}
              <span className="text-primary">Craftsmanship</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">
              For over two decades, Mier & Murphy Builders has been the most trusted luxury contractor
              in Thousand Oaks and Westlake Village — setting the Conejo Valley's gold standard for
              premium construction, restoration, and remediation.
            </p>
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* ── PHILOSOPHY — Featured Quote ── */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/[0.03]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/[0.03]" />
        
        <div className="max-w-5xl mx-auto relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
              {/* Portrait */}
              <div className="relative mx-auto md:mx-0">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-primary/10 shadow-xl">
                  <img src={frankPortrait} alt="Frank Mier, Founder" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
                  <span className="font-sans text-xs font-bold">30+ Years</span>
                </div>
              </div>

              {/* Quote */}
              <div>
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground leading-snug">
                  "Build to Live, Live to Build"
                </h2>
                <p className="font-sans text-[15px] text-foreground/70 leading-relaxed mb-3">
                  This philosophy drives every decision we make. We don't just construct walls and ceilings — 
                  we create environments where Thousand Oaks families thrive, memories are made, and homes 
                  become legacies that endure for generations.
                </p>
                <p className="font-sans text-[15px] text-foreground/70 leading-relaxed mb-6">
                  Every project receives the same dedication — whether it's a Venetian plaster accent wall 
                  in a Westlake Village estate or a complete water damage restoration.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-primary rounded-full" />
                  <p className="font-sans text-sm font-semibold text-foreground">Frank Mier</p>
                  <p className="font-sans text-xs text-foreground/50">Founder & Master Craftsman</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CORE VALUES — Card Grid ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">What Sets Us Apart</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-white">
              The Values Behind Every Project
            </h2>
            <p className="font-sans text-sm text-white/50 text-center max-w-xl mx-auto mb-14">
              Four principles that have guided 500+ projects across Thousand Oaks, Westlake Village, and the Conejo Valley.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="group bg-white/[0.06] border border-white/10 rounded-2xl p-7 h-full hover:bg-white/[0.1] hover:border-primary/30 transition-all duration-400">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-white">{value.title}</h3>
                  <p className="font-sans text-[13px] text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE — Alternating Cards ── */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-6 text-foreground">
              20+ Years of Excellence
            </h2>
            <div className="gold-divider mb-16" />
          </ScrollReveal>

          {/* Desktop: alternating timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <ScrollReveal key={item.year} delay={i * 0.1}>
                    <div className={`flex flex-col md:flex-row items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Card */}
                      <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                        <motion.div
                          whileHover={{ y: -4 }}
                          className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 inline-block max-w-md"
                        >
                          <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                          <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </motion.div>
                      </div>

                      {/* Center node */}
                      <div className="relative flex-shrink-0 z-10">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-background">
                          <span className="font-sans text-xs font-bold text-primary-foreground">{item.year}</span>
                        </div>
                      </div>

                      {/* Spacer for the other side */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS — Two-column feature ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }} id="certifications">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="text-center lg:text-left">
                <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Industry Credentials</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                  Certifications That Matter
                </h2>
                <p className="font-sans text-sm text-white/60 leading-relaxed mb-8">
                  Mier & Murphy is one of the only dual IICRC-certified luxury contractors in the Conejo Valley — 
                  every project meets the highest national standards.
                </p>
                <div className="inline-flex bg-white/[0.06] border border-white/10 rounded-2xl p-6">
                  <img
                    src={iicrcBadge}
                    alt="IICRC Certified Firm badge"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div key={cert.name} className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                      <cert.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-base font-bold mb-2 text-white">{cert.name}</h3>
                    <p className="font-sans text-[13px] text-white/60 leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA — Light with green accents ── */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.06)" }} />
          <div className="absolute bottom-[-30%] right-[-5%] w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.04)" }} />
          <div className="absolute top-10 right-[15%] w-24 h-24 border border-primary/10 rounded-full" />
          <div className="absolute bottom-12 left-[10%] w-16 h-16 border border-primary/10 rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(145, 55%, 35%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Experience Our <span className="text-primary">Craftsmanship</span>?
            </h2>
            <p className="font-sans text-[15px] text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              From luxury renovations to emergency restorations — contact us for a free, no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+18055550199"
                className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-foreground/5 transition-all duration-300"
              >
                Call (805) 555-0199
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AboutLegacy;
