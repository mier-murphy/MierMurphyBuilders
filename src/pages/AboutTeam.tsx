import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Wrench, Heart, Target, CheckCircle, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import frankPortrait from "@/assets/frank-portrait.jpg";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const teamValues = [
  {
    icon: Wrench,
    title: "Master-Level Tradesmen",
    description: "Every team member at Mier & Murphy has a minimum of 10 years of hands-on construction experience. From Venetian plaster artisans to certified water damage technicians, our Thousand Oaks crew represents the finest tradespeople in the Conejo Valley.",
  },
  {
    icon: Heart,
    title: "Family-First Culture",
    description: "As a family-owned Thousand Oaks business, we treat every client's home like our own. Our team members are local residents of Thousand Oaks, Westlake Village, and the Conejo Valley — your neighbors building your dream home.",
  },
  {
    icon: Target,
    title: "Continuous Training",
    description: "Our team holds active IICRC S500 and S520 certifications and undergoes regular training in the latest construction techniques, safety protocols, and restoration technologies to serve Thousand Oaks homeowners at the highest level.",
  },
  {
    icon: Users,
    title: "Dedicated Project Management",
    description: "Every Thousand Oaks and Westlake Village project gets a dedicated project manager who provides daily updates, transparent timelines, and direct communication — because luxury homeowners deserve white-glove service.",
  },
];

const expertise = [
  "Venetian Plaster & Decorative Finishes",
  "Custom Drywall Installation & Repair",
  "Premium Stucco Application & Restoration",
  "IICRC S500 Water Damage Restoration",
  "IICRC S520 Mold Remediation",
  "Interior & Exterior Painting",
  "Crown Molding & Architectural Trim",
  "Emergency 24/7 Flood Response",
  "Insurance Claim Coordination",
  "Mediterranean & Spanish Colonial Restoration",
];

const AboutTeam = () => {
  return (
    <>
      {/* ── HERO with Lead Form ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="The Mier & Murphy Builders team serving Thousand Oaks and Westlake Village luxury homes" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">MEET OUR CRAFTSMEN</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              The Team Behind{" "}
              <span className="text-primary">Perfection</span> in Thousand Oaks
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">
              Behind every flawless Venetian plaster wall, every perfectly restored water-damaged home, 
              and every expertly remediated property in the Conejo Valley stands a team of dedicated 
              craftsmen led by Frank Mier.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Work With Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* ── FRANK MIER — Founder Spotlight ── */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={frankPortrait}
                  alt="Frank Mier - Founder of Mier & Murphy Builders, master craftsman serving Thousand Oaks since 2004"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
                  <span className="font-sans text-xs font-bold">30+ Years Experience</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Founder & Master Craftsman</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Frank Mier: A Lifetime of Building
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  Frank Mier began his construction journey at age 10, learning the art of building from 
                  master craftsmen in Southern California. By the time he founded Mier & Murphy Builders 
                  in Thousand Oaks in 2004, he had already accumulated over a decade of hands-on experience 
                  in every aspect of residential and commercial construction.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  His work on the iconic Apple campus in Cupertino sharpened his precision and attention to 
                  detail to world-class levels — skills he now brings to every Thousand Oaks estate, 
                  Westlake Village luxury home, and Conejo Valley restoration project.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  Today, with over 500 completed projects and dual IICRC certifications (S500 & S520), 
                  Frank leads a team of master tradesmen who share his "Build to Live, Live to Build" 
                  philosophy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary/10 border border-primary/15 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-primary">IICRC S500 Certified</span>
                  <span className="bg-primary/10 border border-primary/15 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-primary">IICRC S520 Certified</span>
                  <span className="bg-primary/10 border border-primary/15 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-primary">CA Licensed Contractor</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TEAM VALUES — Dark Section ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">Why Thousand Oaks Homeowners Trust Our Team</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-white">
              What Makes Our Team Different
            </h2>
            <p className="font-sans text-sm text-white/50 text-center max-w-xl mx-auto mb-14">
              Four principles that guide our team of master craftsmen across Thousand Oaks, Westlake Village, and the Conejo Valley.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {teamValues.map((value, i) => (
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

      {/* ── EXPERTISE — Light Section ── */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.06)" }} />
          <div className="absolute bottom-[-30%] right-[-5%] w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.04)" }} />
          <div className="absolute top-10 right-[15%] w-24 h-24 border border-primary/10 rounded-full" />
          <div className="absolute bottom-12 left-[10%] w-16 h-16 border border-primary/10 rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(145, 55%, 35%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">Our Full Service Capabilities</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-foreground">
              Comprehensive <span className="text-primary">Expertise</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-4">
              Our Thousand Oaks team is trained and certified across every discipline needed for luxury home 
              construction, renovation, and emergency restoration in the Conejo Valley.
            </p>
            <div className="gold-divider mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground/80">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Dark Section ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Work With Thousand Oaks' <span className="text-primary">Finest Craftsmen</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Ready to experience the difference a dedicated, IICRC-certified team makes? Contact Mier & Murphy 
              Builders for a complimentary consultation at your Thousand Oaks or Westlake Village home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Schedule a Free Consultation
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
    </>
  );
};

export default AboutTeam;
