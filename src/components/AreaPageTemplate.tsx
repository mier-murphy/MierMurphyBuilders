import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Shield, Clock, Award, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface AreaPageData {
  zipCode: string;
  cityName: string;
  tagline: string;
  heroHeadline?: string;
  heroDescription: string;
  heroImage: string;
  tier: "primary" | "secondary" | "premium";
  stats: { label: string; value: string }[];
  services: { title: string; description: string; icon: React.ReactNode }[];
  localContent: {
    heading: string;
    paragraphs: string[];
  };
  neighborhoodHighlights: string[];
  faqs: { question: string; answer: string }[];
  nearbyAreas: { name: string; zip: string; href: string }[];
  jsonLd: object;
}

const AreaPageTemplate = ({ data }: { data: AreaPageData }) => {
  const tierLabel = data.tier === "primary" ? "Core Service Area" : data.tier === "secondary" ? "Extended Service Area" : "Premium Service Zone";

  return (
    <>
      <Helmet>
        <title>{`Luxury Builders & Restoration in ${data.cityName} ${data.zipCode} | Mier & Murphy`}</title>
        <meta name="description" content={`Premium interior & exterior painting, stucco, water damage restoration & mold remediation in ${data.cityName} (${data.zipCode}). Licensed, IICRC certified. 20+ years serving luxury homes. Call today.`} />
        <script type="application/ld+json">{JSON.stringify(data.jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={`${data.cityName} painting and restoration services`} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">{tierLabel.toUpperCase()} · ZIP {data.zipCode}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 leading-[1.15] text-white">
              {data.heroHeadline ? (
                <>{data.heroHeadline} <span className="text-primary">{data.cityName}</span></>
              ) : (
                <>Luxury Builders & Restoration Experts in <span className="text-primary">{data.cityName}</span></>
              )}
            </h1>
            <p className="font-sans text-xs tracking-[0.2em] text-primary/70 uppercase mb-4">Interior · Exterior · Water Damage · Mold Remediation · Custom Renovations</p>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">{data.heroDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all group">
                Get a Free Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+18055550199" className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-3 rounded-xl font-sans text-sm font-medium hover:bg-white/10 transition-all">
                <Phone className="w-4 h-4" /> (805) 555-0199
              </a>
            </div>
          </motion.div>

          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.stats.map((stat) => (
            <ScrollReveal key={stat.label}>
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="font-sans text-xs text-white/50 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Our Services in {data.cityName}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Complete Home Solutions for <span className="text-primary">{data.cityName}</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="bg-background border border-border rounded-2xl p-8 h-full group hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content / Why Us */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <div>
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Local Expertise</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">{data.localContent.heading}</h2>
              {data.localContent.paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-sm text-white/60 leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <h3 className="font-serif text-xl font-bold mb-6 text-white">Neighborhoods We Serve in {data.cityName}</h3>
              <div className="grid grid-cols-2 gap-3">
                {data.neighborhoodHighlights.map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-sans text-sm text-white/70">{n}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-white/[0.06] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <h4 className="font-serif text-base font-bold text-white">Licensed & Insured</h4>
                </div>
                <p className="font-sans text-sm text-white/60 leading-relaxed">Fully licensed California contractor with comprehensive liability insurance and workers' compensation coverage for your peace of mind.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/40">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">FAQ</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Common Questions in <span className="text-primary">{data.cityName}</span>
              </h2>
            </div>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-2xl px-6">
                <AccordionTrigger className="font-serif text-sm font-medium text-left py-5">{faq.question}</AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Nearby Service Areas</p>
            <h2 className="font-serif text-3xl font-bold mb-8 text-white">Also Serving These Communities</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.nearbyAreas.map((area) => (
                <Link key={area.zip} to={area.href} className="bg-white/[0.06] border border-white/10 px-5 py-3 rounded-xl font-sans text-sm text-white/70 hover:bg-white/[0.1] hover:border-primary/30 hover:text-primary transition-all">
                  {area.name} <span className="text-white/40">({area.zip})</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.06)" }} />
          <div className="absolute bottom-[-30%] right-[-5%] w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.04)" }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-primary">{data.cityName}</span> Home?
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">Schedule a free on-site consultation with our expert team. We'll assess your project, provide a detailed estimate, and show you why {data.cityName} homeowners trust Mier & Murphy.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all shadow-lg group">
                Schedule Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+18055550199" className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-muted transition-all">
                <Phone className="w-4 h-4" /> Call (805) 555-0199
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AreaPageTemplate;
