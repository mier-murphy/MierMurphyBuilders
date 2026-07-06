import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const areas = [
  { zip: "91360", name: "Thousand Oaks", tier: "Primary", description: "Central Thousand Oaks – very high residential density and the heart of our operations.", href: "/areas/91360" },
  { zip: "91362", name: "Newbury Park / Westlake", tier: "Primary", description: "Higher-income households at the Westlake–Newbury Park border.", href: "/areas/91362" },
  { zip: "91361", name: "Westlake Village", tier: "Primary", description: "Premium lakeside segment with luxury estates and gated communities.", href: "/areas/91361" },
  { zip: "91320", name: "Newbury Park", tier: "Secondary", description: "Family-oriented community with strong homeowner investment.", href: "/areas/91320" },
  { zip: "91301", name: "Agoura Hills", tier: "Secondary", description: "Affluent hillside community with service-friendly market.", href: "/areas/91301" },
  { zip: "91377", name: "Oak Park", tier: "Secondary", description: "High household income and low contractor competition.", href: "/areas/91377" },
  { zip: "91302", name: "Calabasas / Westlake Village", tier: "Premium", description: "Luxury gated communities and high lifetime-value clients.", href: "/areas/91302" },
  { zip: "91311", name: "Chatsworth", tier: "Extended", description: "Diverse residential landscape from horse properties to planned communities.", href: "/areas/91311" },
  { zip: "91367", name: "Woodland Hills", tier: "Extended", description: "Western San Fernando Valley's premier executive community.", href: "/areas/91367" },
  { zip: "91364", name: "Woodland Hills South", tier: "Extended", description: "Hillside luxury and established residential charm along Mulholland.", href: "/areas/91364" },
  { zip: "90265", name: "Malibu", tier: "Premium", description: "Iconic coastal properties requiring marine-grade expertise.", href: "/areas/90265" },
];

const tierColors: Record<string, string> = {
  Primary: "bg-primary/20 text-primary",
  Secondary: "bg-accent/20 text-accent",
  Premium: "bg-primary/30 text-primary",
  Extended: "bg-muted text-muted-foreground",
};

const Areas = () => {
  return (
    <>
      <Helmet>
        <title>Areas We Serve | Mier & Murphy Builders – Thousand Oaks & Beyond</title>
        <meta name="description" content="Mier & Murphy Builders serves Thousand Oaks, Westlake Village, Newbury Park, Agoura Hills, Oak Park, Calabasas, Woodland Hills, and Malibu with premium painting, restoration & renovation." />
      </Helmet>

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Mier & Murphy Builders service areas across the Conejo Valley" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">SERVICE AREAS</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Areas We <span className="text-primary">Serve</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Proudly serving the most prestigious communities across the Conejo Valley, western San Fernando Valley, and Malibu coast.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <ScrollReveal key={area.zip} delay={i * 0.05}>
                <Link to={area.href} className="block luxury-card p-6 h-full group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-sans text-xs tracking-[0.2em] text-primary font-semibold">{area.zip}</span>
                    </div>
                    <span className={`text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-1 rounded ${tierColors[area.tier]}`}>{area.tier}</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">{area.name}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{area.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-sans text-sm font-medium group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Request a <span className="text-primary">Free Estimate</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              No matter where you are in the Conejo Valley, our team is ready to bring luxury craftsmanship 
              to your doorstep. Get a no-obligation quote today.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
            >
              Get a Free Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Areas;
