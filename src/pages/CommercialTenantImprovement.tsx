import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Paintbrush, Award, Clock, Shield, Star, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectCtenent from "@/assets/ctenant/ctenent-hero.webp";
import projectCtenentMain from "@/assets/ctenant/ctenent-main.webp";

// TODO: replace with the actual IICRC certification badge asset — this currently
// points at the same interior photo as `projectInterior`, so the "badge" renders a room photo.
import iicrcBadge from "@/assets/iicrc-badge.avif";

const SITE_URL = "https://mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/services/commercial-tenant-improvement`;
const OG_IMAGE = `${SITE_URL}/service-commercial-tenant-improvement.jpg`;

const PAGE_TITLE = "Commercial Tenant Improvements | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "Professional commercial tenant improvement contractor for offices, retail, and commercial spaces in Thousand Oaks and greater Los Angeles.";
const PAGE_KEYWORDS =
  "commercial tenant improvement contractor; commercial remodeling thousand oaks; office buildout contractor; commercial renovation los angeles";

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
    q: "What types of commercial spaces do you work on?",
    a: "Retail and office tenant improvement projects, including interior build-outs and renovations.",
  },
  {
    q: "Do you handle permitting for commercial projects?",
    a: "Yes. We handle the permitting process required for commercial tenant improvement work.",
  },
  {
    q: "Can you work around our business hours?",
    a: "We can discuss scheduling that minimizes disruption at the estimate stage.",
  },
  {
    q: "Do you work with landlords or property managers directly?",
    a: "Yes. We coordinate directly with landlords, property managers, or your own team.",
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
    desc: "We review your space, your lease timeline, and the scope of work.",
  },
  {
    step: "02",
    title: "Planning & Permitting",
    desc: "We handle the permitting and plan around your constraints.",
  },
  {
    step: "03",
    title: "Framing & Rough-In",
    desc: "Framing, and coordination of any rough-in trades.",
  },
  {
    step: "04",
    title: "Drywall & Finish",
    desc: "Drywall, finish work, and the details that make the space ready to operate.",
  },
  {
    step: "05",
    title: "Final Walkthrough",
    desc: "We confirm the space is complete and ready for your business.",
  },
];

const finishes = [
  {
    title: "Retail Build-Out",
    desc: "Interior build-outs for retail spaces, from framing to finish.",
  },
  {
    title: "Office Renovation",
    desc: "Renovations and reconfigurations for office spaces.",
  },
  {
    title: "Interior Framing",
    desc: "Metal and wood stud framing for commercial interiors.",
  },
  {
    title: "Drywall & Finish",
    desc: "Commercial drywall, taping, texture, and finish work.",
  },
  {
    title: "Commercial Stucco",
    desc: "Exterior stucco and repair for commercial properties.",
  },
  {
    title: "ADA Updates",
    desc: "Accessibility-related updates handled as part of your build-out.",
  },
];

// JSON-LD: Service (name/description now match the page's actual subject matter)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Commercial Tenant Improvement & Build-Out",
  serviceType: "Commercial Tenant Improvement",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Tenant Improvement Services",
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
    { "@type": "ListItem", position: 3, name: "Commercial Tenant Improvement", item: PAGE_URL },
  ],
};

const CommercialTenantImprovement = () => {
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
        <meta property="og:image:alt" content="Commercial tenant improvement build-out in Thousand Oaks, CA" />
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
          <img src={projectCtenent} alt="Luxury interior plaster finish in a Thousand Oaks estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Paintbrush className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">COMMERCIAL BUILD-OUT</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold mb-6 leading-[1.15] text-white">
             <span className="text-primary">Commercial Tenant Improvement</span> Contractor in Thousand Oaks
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
            Build-out and renovation work for retail and office spaces in Thousand Oaks, Westlake Village, 
            and the surrounding Conejo Valley, planned around your lease timeline from day one.
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
              <span className="font-sans text-xs font-semibold text-primary tracking-[0.4em]">BUILT AROUND YOUR BUSINESS</span>
            </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Build-Outs That Respect Your <span className="text-primary">Timeline and Budget</span>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Commercial projects come with a different set of pressures than residential ones, lease deadlines, landlord requirements,
                 and the need to keep disruption to a minimum if your space is operating during construction.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Mier & Murphy Builders provides commercial tenant improvement and build-out services for retail and office spaces across Thousand Oaks and the Conejo Valley. We bring the same 20 years of
                 building experience to commercial work that we bring to every residential job, with the same attention to timeline and communication.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                We plan around your constraints from the estimate stage, not after work has already started, so your project stays on schedule and your business keeps moving.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Commercial Tenant Improvement Services:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                        "Interior build-out and framing",
                        "Drywall and finish work",
                        "Retail and office renovations",
                        "Commercial stucco and exterior repair",
                        "ADA-related updates",
                        "Coordination with landlords and property managers",

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
                  src={projectCtenentMain}
                  alt="Premium Venetian plaster application in Westlake Village home"
                  className="w-full h-80 lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 glass rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={iicrcBadge} alt="IICRC Certified" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-serif text-lg font-bold text-foreground">Licensed Commercial Contractor</p>
                    <p className="font-sans text-xs text-muted-foreground">CA Lic. #1077044</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Retail and office build-outs handled by a licensed, family-owned contractor that plans around your lease deadlines and keeps your business moving through construction
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
          heading={`How We Run Your Build-Out \u00A0`}
          headingHighlight="From Estimate to Opening"
          description="A commercial project stays on budget when it stays on schedule. Here is how we run yours from the first estimate to opening day. "
          variant="dark"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">WHY BUSINESSES CHOOSE US</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Why Businesses Trust Our <span className="text-primary">Commercial Build-Out Team</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed p-5">
              Downtime costs money. Here is why business owners and property managers choose our family-owned team for their build-outs and renovations.
                </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Timeline-Focused", desc: "We plan around your lease deadlines and business hours from the start." },
              { icon: Shield, title: "One Point of Contact", desc: "Family-owned means you deal directly with us, not a call center." },
              { icon: Clock, title: "Landlord Coordination ", desc: "We coordinate directly with landlords and property managers when needed." },
              { icon: Star, title: "20 Years of Experience", desc: "Two decades of building work applied to your commercial project." },
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
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">BUILD-OUT SERVICES</p>


               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
               Commercial Build-Out <span className="text-primary">Services We Provide</span>
              </h2>
                 <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
                 From framing to final finish, here are the commercial build-out and renovation services we provide for retail and office spaces across the Conejo Valley.
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
              Commercial Contractors <span className="text-primary">Near You in Ventura County</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We serve commercial properties across Thousand Oaks and the surrounding Conejo Valley, from retail storefronts to office suites.
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
            Planning a Retail or Office <span className="text-primary">Build-Out Soon?</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            Get a free estimate for your tenant improvement project and a plan that keeps your business moving through construction.
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
              Common Commercial Tenant <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
              Answers to the questions business owners and property managers ask most about tenant improvement and commercial build-outs.</p>
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

export default CommercialTenantImprovement;