import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, CheckCircle, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const testimonials = [
  {
    quote: "Mier & Murphy transformed our Westlake Village estate beyond anything we imagined. Their Venetian plaster work and attention to detail is unmatched by any contractor in the Conejo Valley. Frank personally oversaw every phase of the renovation.",
    author: "Robert & Catherine M.",
    location: "Westlake Village, CA 91361",
    service: "Interior Renovation & Venetian Plaster",
    rating: 5,
  },
  {
    quote: "After water damage threatened our Thousand Oaks home, Frank and his team responded within hours. The restoration was flawless—you'd never know anything happened. Truly the best restoration company in the 91360 area.",
    author: "David & Lisa T.",
    location: "Thousand Oaks, CA 91360",
    service: "Water Damage Restoration",
    rating: 5,
  },
  {
    quote: "We hired three other stucco contractors in Thousand Oaks before finding Mier & Murphy. The difference in quality is night and day. Their exterior stucco work on our 91362 home is absolutely impeccable — our neighbors constantly ask who did it.",
    author: "Jennifer P.",
    location: "Thousand Oaks, CA 91362",
    service: "Exterior Stucco Restoration",
    rating: 5,
  },
  {
    quote: "When we discovered mold in our Westlake Village home, Mier & Murphy's IICRC-certified team handled everything professionally from testing through remediation. They coordinated directly with our insurance company, making a stressful situation seamless.",
    author: "Michael & Sandra K.",
    location: "Westlake Village, CA 91361",
    service: "Mold Remediation",
    rating: 5,
  },
  {
    quote: "Frank and his team completed a full interior renovation of our Newbury Park home — drywall, texturing, crown molding, and custom painting. The craftsmanship is museum-quality. We've since recommended Mier & Murphy to everyone in the Conejo Valley.",
    author: "Thomas & Rebecca W.",
    location: "Newbury Park, CA 91320",
    service: "Full Interior Renovation",
    rating: 5,
  },
  {
    quote: "A burst pipe flooded our Thousand Oaks kitchen at 2 AM. Mier & Murphy's 24/7 emergency team was at our door within 45 minutes. They extracted the water, dried the structure, and rebuilt everything — better than original. Absolutely world-class service.",
    author: "Steven & Maria L.",
    location: "Thousand Oaks, CA 91360",
    service: "Emergency Water Damage & Rebuild",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "20+", label: "Years of Service" },
  { value: "5 ★", label: "Average Rating" },
];

const AboutTestimonials = () => {
  return (
    <>
      {/* ── HERO with Lead Form ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Client testimonials for Mier & Murphy Builders in Thousand Oaks" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">WHAT OUR CLIENTS SAY</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Voices of{" "}
              <span className="text-primary">Excellence</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">
              Don't take our word for it. Hear from Thousand Oaks, Westlake Village, and Conejo Valley 
              homeowners who have experienced the Mier & Murphy difference.
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

      {/* ── TESTIMONIALS GRID — Dark Section ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">Real Reviews from Real Homeowners</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-white">
              Trusted by Thousand Oaks' <span className="text-primary">Finest Homes</span>
            </h2>
            <p className="font-sans text-sm text-white/50 text-center max-w-xl mx-auto mb-14">
              Every review represents a family whose home we've transformed with care, precision, and dedication.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.author} delay={i * 0.1}>
                <div className="group bg-white/[0.06] border border-white/10 rounded-2xl p-7 h-full flex flex-col hover:bg-white/[0.1] hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-serif text-sm font-bold text-white">{testimonial.author}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span className="font-sans text-xs text-white/50">{testimonial.location}</span>
                    </div>
                    <span className="inline-block mt-2 bg-primary/10 border border-primary/15 px-3 py-1 rounded text-xs font-sans text-primary">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS CHOOSE US — Light Section ── */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.06)" }} />
          <div className="absolute bottom-[-30%] right-[-5%] w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.04)" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(145, 55%, 35%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">The Mier & Murphy Difference</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-foreground">
              Why Conejo Valley Homeowners <span className="text-primary">Choose Us</span>
            </h2>
            <div className="gold-divider mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Family-owned Thousand Oaks business since 2004",
              "IICRC S500 & S520 dual certified",
              "500+ completed projects in the Conejo Valley",
              "24/7 emergency water damage response",
              "Free in-home estimates for all services",
              "Licensed, bonded & insured in Ventura County",
              "Direct insurance claim coordination",
              "Master Venetian plaster & stucco artisans",
            ].map((item, i) => (
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
              Join 500+ Satisfied <span className="text-primary">Conejo Valley Homeowners</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Experience the craftsmanship, professionalism, and dedication that has made Mier & Murphy Builders 
              the most trusted luxury contractor in Thousand Oaks and Westlake Village for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get a Free Estimate
              </Link>
              <Link
                to="/about/legacy"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonials;
