import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Paintbrush, Award, Clock, Shield, Star, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectBalcony from "@/assets/balcony/balcony-hero.webp";
import projectBalconyMain from "@/assets/balcony/balcony-main.webp";
// TODO: replace with the actual IICRC certification badge asset — this currently
// points at the same interior photo as `projectInterior`, so the "badge" renders a room photo.
import iicrcBadge from "@/assets/iicrc-badge.avif";

const SITE_URL = "https://mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/services/balcony-deck-repair`;
const OG_IMAGE = `${SITE_URL}/service-balcony-deck-repair.jpg`;

const PAGE_TITLE = "Balcony & Deck Repair Services | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "Restore and repair your balcony or deck with Mier & Murphy Builders. Reliable deck contractors serving Thousand Oaks and Ventura County homeowners.";
const PAGE_KEYWORDS =
  "deck repair thousand oaks; balcony repair contractor; exterior deck restoration; waterproofing contractor ventura county";

const areasServed = [
  "Thousand Oaks",
  "Westlake Village",
  "Simi Valley",
  "Moorpark",
  "Oak Park",
  "Agoura Hills",
  "Newbury Park",
  "Camarillo",
  "Ventura County",
];

const faqs = [
  {
    q: "Do I need an SB-326 or SB-721 balcony inspection?",
    a: "If your property is a multi-family rental with three or more units, or a condo or HOA property, California law likely requires periodic inspection. Contact us to check your deadline.",
  },
  {
    q: "What happens if my inspection finds a problem?",
    a: "The law requires repair of structural issues within a set timeframe. We complete the repair work to bring your property into compliance.",
  },
  {
    q: "Do you work with HOAs and property managers?",
    a: "Yes. We are experienced working with HOAs and property managers on these projects.",
  },
  {
    q: "How do I know if my deck or balcony has a problem?",
    a: "Signs include soft or spongy decking, visible cracks, water staining underneath, or loose railings.",
  },
  {
    q: "Can you repair just one balcony, or does it need to be building-wide?",
    a: "Either. We can repair a single balcony or handle a building-wide project.",
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
    desc: "We assess the balcony or deck and what your inspection or property needs.",
  },
  {
    step: "02",
    title: "Scope & Documentation",
    desc: "We identify the structural work required and document it for the record.",
  },
  {
    step: "03",
    title: "Repair or Rebuild",
    desc: "We complete the framing, decking, railing, and waterproofing work.",
  },
  {
    step: "04",
    title: "Waterproofing",
    desc: "We seal and flash the structure to protect against future water damage.",
  },
  {
    step: "05",
    title: "Final Inspection Support",
    desc: "We confirm the work is complete and ready for sign-off.",
  },
];

const finishes = [
  {
    title: "SB-326 Repair",
    desc: "Repair work for condominium and HOA-managed common interest developments.",
  },
  {
    title: "SB-721 Repair",
    desc: "Repair work for rental properties with three or more units.",
  },
  {
    title: "Structural Rebuilds",
    desc: "Full balcony and deck rebuilds where structural damage is found.",
  },
  {
    title: "Waterproofing & Flashing",
    desc: "Sealing and flashing to protect against future water intrusion.",
  },
  {
    title: "Railing Replacement",
    desc: "Repair and replacement of damaged or non-compliant railings.",
  },
  {
    title: "Dry Rot Repair",
    desc: "Removal and repair of dry-rotted framing and decking.",
  },
];

// JSON-LD: Service (name/description now match the page's actual subject matter)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "SB-326 & SB-721 Balcony & Deck Repair",
  serviceType: "Balcony and Deck Structural Repair",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  provider: {
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#organization`,
    name: "Mier & Murphy Builders",
    telephone: "+18059989082",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thousand Oaks",
      addressRegion: "CA",
      postalCode: "91360",
      addressCountry: "US",
    },
  },
  areaServed: areasServed.map((name) => ({ "@type": "City", name })),
  audience: {
    "@type": "Audience",
    audienceType: "Homeowners, HOAs, and Property Managers",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Balcony & Deck Repair Services",
    itemListElement: finishes.map((f) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: f.title,
        description: f.desc,
      },
    })),
  },
};

// JSON-LD: FAQPage
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// JSON-LD: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Balcony & Deck Repair", item: PAGE_URL },
  ],
};

const BalconyDeckRepair = () => {
  return (
    <>
      <Helmet>
        {/* Primary meta tags */}
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content={PAGE_KEYWORDS} />
        <meta name="author" content="Mier & Murphy Builders" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Geo tags */}
        <meta name="geo.placename" content="Thousand Oaks" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.position" content="34.1706;-118.8376" />
        <meta name="ICBM" content="34.1706, -118.8376" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="SB-326 and SB-721 compliant balcony repair in Thousand Oaks, CA" />
        <meta property="og:site_name" content="Mier & Murphy Builders" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectBalcony} alt="Luxury interior plaster finish in a Thousand Oaks estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Paintbrush className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">SB-326 & SB-721 COMPLIANT</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold mb-6 leading-[1.15] text-white">
             <span className="text-primary">Balcony and Deck Repair Experts</span> in Thousand Oaks
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
            Structural balcony and deck repair for homeowners, HOAs, and property managers in Thousand Oaks, Westlake Village,
             and Simi Valley. We help you meet California's inspection deadlines.
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
              <div className="inline-flex items-center gap-2 bg-primary/15  px-4 py-1.5 mb-6">              
              <span className="font-sans text-xs font-semibold text-primary tracking-[0.4em]">KNOW THE LAW</span>
            </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                California Sets Hard Deadlines. <span className="text-primary">We Help You Comply.</span>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                California law requires periodic inspection of exterior elevated elements, balconies, decks, walkways, and stairways, on multi-family residential buildings. 
                If your property has not had this inspection, or if repairs were identified and not yet completed, the clock is already running.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Mier & Murphy Builders provides balcony and deck repair for homeowners, HOAs, and property managers across Thousand Oaks and the Conejo Valley, including SB-326 and SB-721 compliant repair work.
                We have completed full balcony rebuilds and understand what these inspections require, from the structural repair to the documentation.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                Almost no local competitor is talking about this work. We are, because we have done it, and because meeting these deadlines protects both your residents and your property.
                </p>
                <p className="font-sans text-xs text-muted-foreground/80 leading-relaxed mb-8 italic">
                Inspection deadlines and thresholds vary by property type, unit count, and inspection cycle. Contact us or your local building department to confirm the exact requirement for your property.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Balcony and Deck Repair Services:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                        "SB-326 and SB-721 repair work",
                        "Structural balcony rebuilds",
                        "Deck framing and decking replacement",
                        "Railing repair and replacement",
                        "Waterproofing and flashing repair",
                        "Dry rot and structural damage repair",

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
                  src={projectBalconyMain}
                  alt="Premium Venetian plaster application in Westlake Village home"
                  className="w-full h-80 lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 glass rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={iicrcBadge} alt="IICRC Certified" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-serif text-lg font-bold text-foreground">HOA-Experienced Balcony Contractor</p>
                    <p className="font-sans text-xs text-muted-foreground">SB-326 & SB-721 Compliant</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                We handle SB-326 and SB-721 balcony work directly with HOAs and property managers, from structural repair to the documentation 
                your inspection record requires.
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
          subheading="OUR PROCESS"
          heading={`How We Take You From \u00A0`}
          headingHighlight="Inspection to Sign-Off"
          description="Compliance work involves more than the repair itself. Here is how we handle your project from the first assessment through final sign-off. "
          variant="dark"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">WHY OWNERS CHOOSE US</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Why HOAs and Owners <span className="text-primary">Trust Our Balcony Work</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed p-5">
              Balcony compliance is not something to hand to just any contractor. Here is why HOAs, owners, and property managers choose our team.
                </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "SB-326 & SB-721 Experience", desc: "We understand what these inspections require and how to meet them." },
              { icon: Shield, title: "HOA-Experienced", desc: "We have worked directly with HOAs and property managers on compliance work." },
              { icon: Clock, title: "Structural Rebuilds ", desc: "We handle full balcony rebuilds, not just surface repairs." },
              { icon: Star, title: "Minimal Disruption", desc: "We keep resident disruption as low as possible during the project." },
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
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">REPAIR SERVICES</p>


               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
               Balcony and Deck Work <span className="text-primary">We Take On</span>
              </h2>
                 <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
                 From compliance-driven repairs to full rebuilds, here is the balcony and deck work we handle for owners, HOAs, and property managers.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishes.map((finish) => (
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
              Balcony Repair Contractors <span className="text-primary">Near You in Ventura County</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We serve homeowners, HOAs, and property managers across Thousand Oaks and the surrounding Conejo Valley on balcony and deck compliance work.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areasServed.map((area) => (
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
            Meet Your Balcony Inspection Deadline <span className="text-primary">With Confidence</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need a single repair or a full rebuild, we help you get your property compliant and keep your residents safe.
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
              Common Balcony and Deck <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
              Answers to the questions owners and property managers ask most about SB-326, SB-721, and balcony compliance.</p>
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

export default BalconyDeckRepair;