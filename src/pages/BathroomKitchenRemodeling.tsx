import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Bath, Award, FileCheck, Shield, Star, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectKC from "@/assets/btkc/kc-hero.webp";
import projectKcmain from "@/assets/btkc/kc-main-1.webp";
import ogImage from "@/assets/btkc/bathroom-kitchen-og.webp";
import condoProject from "@/assets/condo-retreat/condo-retreat-hero.avif";
import ranchProject from "@/assets/ranch/ranch-hero.avif";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/services/bathroom-kitchen-remodeling`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT = "Remodeled bathroom with a glass walk-in shower and freestanding tub";

const PAGE_TITLE = "Bathroom & Kitchen Remodeling Thousand Oaks | Mier & Murphy";
const PAGE_DESCRIPTION =
  "Bathroom and kitchen remodeling in Thousand Oaks and Ventura County from a family-owned contractor. Free in-home estimates, permits handled. CA Lic. #1077044.";

const recentProjects = [
  {
    title: "Los Angeles Condo Remodel",
    desc: "Two bathrooms fully renovated, plus new kitchen countertops and backsplash tile.",
    image: condoProject,
    href: "/projects/condo-retreat",
  },
  {
    title: "Porter Ranch Home Renovation",
    desc: "New bathrooms, a remodeled kitchen, a walk-in closet, and a rebuilt staircase.",
    image: ranchProject,
    href: "/projects/ranch",
  },
];

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
      q: "Do I need a permit for my bathroom or kitchen remodel?",
      a: "Most bathroom and kitchen remodels in Thousand Oaks require a permit, especially when the work involves plumbing, electrical, or structural changes. We handle the permitting process for you.",
    },
    {
      q: "Who buys the fixtures and materials?",
      a: "You choose your fixtures, tile, cabinetry, and finishes, and we can order them for you or work with materials you already purchased. We tell you which approach makes sense at the estimate stage.",
    },
    {
      q: "How long will I be without a working bathroom or kitchen?",
      a: "We plan the schedule to keep downtime as short as possible and tell you the expected timeline before work starts. For a single bathroom remodel, most homeowners are without that bathroom for the bulk of the project.",
    },
    {
      q: "Can you match my existing tile or finishes on a partial remodel?",
      a: "In many cases yes. Bring us a sample or photo at your estimate and we will tell you what is achievable.",
    },
    {
      q: "Do you handle both design and construction?",
      a: "Yes. We guide material and layout decisions and handle the full construction process from demolition through final walkthrough.",
    },
    {
      q: "Can I stay in my home during the remodel?",
      a: "Most homeowners stay in their home during a remodel. We walk through what to expect for noise, dust containment, and access during your estimate.",
    },
    {
      q: "What areas do you serve?",
      a: "Thousand Oaks, Westlake Village, Newbury Park, Simi Valley, Moorpark, Oak Park, Agoura Hills, Camarillo, and the rest of Ventura County.",
    },
  ];

const process = [
  { step: "01", title: "Free In-Home Estimate", desc: "We walk the space with you, talk through what you want, and give you an honest scope and price range." },
  { step: "02", title: "Design & Material Selection", desc: "You choose fixtures, tile, cabinetry, and finishes. We advise on what fits your budget and timeline." },
  { step: "03", title: "Permitting", desc: "We pull the required permits and handle inspections so you do not have to." },
  { step: "04", title: "Demolition & Construction", desc: "Our crew handles plumbing, electrical, framing, drywall, and finish work." },
  { step: "05", title: "Final Walkthrough", desc: "We go through the finished space together before we call the job done." },
];

const finishes = [
  { title: "Full Bathroom Remodel", desc: "Complete tear-out and rebuild, from tile and fixtures to plumbing and layout." },
  { title: "Full Kitchen Remodel", desc: "Cabinetry, countertops, flooring, lighting, and layout changes handled as one coordinated project." },
  { title: "Walk-In Shower Conversion", desc: "Convert a dated tub or shower into a modern, accessible walk-in shower." },
  { title: "Cabinet & Countertop Replacement", desc: "Update the look and function of your space without a full gut remodel." },
  { title: "Tile & Flooring", desc: "New tile, flooring, and finish work matched to the rest of your home." },
  { title: "Aging-in-Place Updates", desc: "Grab bars, curbless showers, and accessibility-focused updates done cleanly." },
];

// JSON-LD: Service (name/description now match the page's actual subject matter)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Bathroom & Kitchen Remodeling",
  serviceType: "Bathroom and Kitchen Remodeling",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  provider: {
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#organization`,
    name: "Mier & Murphy Builders",
    telephone: "+18059989082",
    url: `${SITE_URL}/`,
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
    name: "Bathroom & Kitchen Remodeling Services",
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
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Bathroom & Kitchen Remodeling", item: PAGE_URL },
  ],
};

const ServiceBathroomKitchenRemodeling = () => {
  return (
    <>
      <Helmet>
        {/* Primary meta tags */}
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />

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
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={OG_IMAGE_ALT} />
        <meta property="og:site_name" content="Mier & Murphy Builders" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectKC} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Bath className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">FAMILY-OWNED REMODELING</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              <span className="text-primary">Bathroom and Kitchen Remodeling</span> in Thousand Oaks, CA
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
            Full bathroom and kitchen remodels for homeowners across Thousand Oaks, Westlake Village, and Simi Valley, with clear timelines, 
            permits handled for you, and a family-owned crew behind every job.
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
            <span className="trust-badge"><CheckCircle className="w-4 h-4" /> Permits Handled for You</span>
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
              <div className="inline-flex items-center gap-2 bg-primary/15 px-4 py-1.5 mb-6">
              <span className="font-sans text-xs font-semibold text-primary tracking-[0.4em]">BUILT FOR YOUR HOME</span>
            </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Remodels Built Around <span className="text-primary">Your Home and Your Budget</span>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Your bathroom and kitchen are the two rooms you use most, and the two that cost you the most when a project drags on. Mier & Murphy Builders handles full remodels 
                from the first walkthrough to the final punch list, so you always know what is happening and when your space will be usable again.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                We are a family-owned and family-operated contractor with 20 years of building experience. That means one point of contact, honest timelines told to you up front, 
                and a crew that treats your home the way we would treat our own.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                From a single bathroom refresh to a full kitchen renovation with new layout, plumbing, and cabinetry, we scope every project to your home and your budget, not a one-size-fits-all package.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Bathroom and Kitchen Remodeling Services</h3>
                <ul className="space-y-3 mb-8">
                  {[
                        "Full bathroom remodels",
                        "Full kitchen remodels",
                        "Walk-in shower conversions",
                        "Cabinet and countertop replacement",
                        "Tile, flooring, and finish work",
                        "Layout changes, plumbing, and electrical",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
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
                  src={projectKcmain}
                  alt="Tile installer setting large-format floor tile in a bathroom remodel"
                  className="w-full h-80 lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>


              <div className="mt-8 bg-[#f9f9f6] border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Recent Remodels</h3>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <Link
                      key={project.href}
                      to={project.href}
                      className="flex items-center gap-4 group"
                    >
                      <img
                        src={project.image}
                        alt=""
                        className="w-24 h-20 rounded-xl object-cover shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-sans text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {project.title}
                        </p>
                        <p className="font-sans text-sm text-gray-600 leading-relaxed">{project.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 mt-5 font-sans text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  See all projects <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
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
          heading={`How Your Remodel \u00A0`}
          headingHighlight="Comes Together, Step by Step"
          description="No surprises and no guessing. Every remodel follows the same clear five-step process, from your first free estimate to the final walkthrough together."
          variant="dark"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">WHY HOMEOWNERS CHOOSE US</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Why Thousand Oaks Homeowners <span className="text-primary">Trust Our Remodels</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed p-5">
              A remodel is a major investment in your home. Here is what you get when you choose a family-owned contractor with 20 years behind every job.
                </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Family Owned & Operated", desc: "One point of contact from estimate to final walkthrough, never a rotating crew." },
              { icon: Shield, title: "Honest Timelines", desc: "We tell you how long it will take before we start, and we tell you early if anything changes." },
              { icon: FileCheck, title: "Permits Handled", desc: "We manage the permitting and inspection process as part of your project." },
              { icon: Star, title: "20 Years of Experience", desc: "Two decades of building work behind every bathroom and kitchen we remodel." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-background border border-border rounded-2xl p-6 text-center h-full hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* REMODEL OPTIONS */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">REMODEL OPTIONS</p>
               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
               Bathroom and Kitchen <span className="text-primary">Projects We Take On</span>
              </h2>
                 <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
                 Whether you want a full renovation or a targeted upgrade, here are the bathroom and kitchen projects Conejo Valley homeowners hire us for most.
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
              Remodeling Contractors <span className="text-primary">Near You in Ventura County</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We serve homeowners across Thousand Oaks, the Conejo Valley, and Ventura County, with local knowledge of the homes and permit requirements in your area.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areasServed.map((area) => (
              <div key={area} className="flex items-center gap-2 bg-background border border-border rounded-lg p-3">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="font-sans text-xs text-foreground/80">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/areas" className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-primary hover:gap-2 transition-all">
              See all service areas <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your <span className="text-primary">Bathroom or Kitchen Remodel?</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            Schedule a free in-home estimate and get a realistic timeline for your project, with no pressure and no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get a Free Estimate
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
              Bathroom & Kitchen Remodeling <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
                Answers to the most common questions from Thousand Oaks and Westlake Village homeowners about our bathroom and kitchen remodeling services.
              </p>
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

export default ServiceBathroomKitchenRemodeling;