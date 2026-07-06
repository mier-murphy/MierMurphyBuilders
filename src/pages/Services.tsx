import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Paintbrush, Home, Droplets, Bug, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import projectInterior from "@/assets/project-interior.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import projectRestoration from "@/assets/project-restoration.jpg";
import projectMold from "@/assets/project-mold.jpg";

const services = [
  {
    id: "interior",
    title: "Interior Masterworks",
    subtitle: "The Art of Interior Perfection",
    icon: Paintbrush,
    image: projectInterior,
    description: "From exquisite Venetian plaster to flawless drywall installations, our interior artisans transform spaces into showcases of refined living. Every surface receives meticulous attention, every texture is crafted by hand.",
    features: [
      "Venetian Plaster & Decorative Finishes",
      "Custom Drywall Installation & Repair",
      "Texture Matching & Restoration",
      "Crown Molding & Trim Work",
      "Ceiling Treatments & Coffered Designs",
    ],
  },
  {
    id: "exterior",
    title: "Exterior Excellence",
    subtitle: "Commanding Curb Appeal",
    icon: Home,
    image: projectExterior,
    description: "Premium stucco applications and exterior finishes that protect your investment while making a stunning architectural statement. We specialize in Mediterranean, modern, and traditional exterior styles.",
    features: [
      "Premium Stucco Application",
      "Exterior Plaster & EIFS Systems",
      "Stucco Repair & Color Matching",
      "Architectural Facade Design",
      "Weather-Resistant Coating Systems",
    ],
  },
  {
    id: "water",
    title: "Water Damage Restoration",
    subtitle: "IICRC S500 Certified Response",
    icon: Droplets,
    image: projectRestoration,
    description: "When water threatens your home, every minute counts. Our IICRC S500 certified team provides rapid, professional restoration that returns your property to pre-loss condition—or better.",
    features: [
      "24/7 Emergency Response",
      "Water Extraction & Structural Drying",
      "Moisture Detection & Monitoring",
      "Content Pack-Out & Restoration",
      "Insurance Claim Assistance",
    ],
  },
  {
    id: "mold",
    title: "Mold Remediation Specialists",
    subtitle: "IICRC S520 Certified Protection",
    icon: Bug,
    image: projectMold,
    description: "Protect your family with our certified mold remediation services. We don't just remove mold—we identify the source, eliminate the threat, and implement prevention strategies.",
    features: [
      "Professional Mold Assessment",
      "Containment & Air Filtration",
      "Complete Mold Removal",
      "Antimicrobial Treatments",
      "Prevention & Maintenance Plans",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,20%,12%)]" />
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">WHAT WE DO</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Every service we offer reflects decades of mastery and an unwavering 
              commitment to excellence. Explore our full range of luxury construction 
              and restoration capabilities.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-muted/40"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}>
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full glass mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                    {service.title}
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-sans text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 group"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"}>
                <div className={`luxury-card overflow-hidden ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 lg:h-[500px] object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Lead Capture CTA */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Ready to Get Started?</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                Get a <span className="text-primary">Free Quote</span> Today
              </h2>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Tell us about your project and we'll provide a detailed, no-obligation estimate within 24 hours. 
                From interior masterworks to emergency restoration — we're here to help.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <LeadCaptureForm variant="full" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Services;
