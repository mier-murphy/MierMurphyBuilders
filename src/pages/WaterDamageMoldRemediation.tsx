import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Paintbrush, Award, Clock, Shield, Star, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import projectWater from "@/assets/water/water-hero.webp";
import projectWaterMain from "@/assets/water/water-hero-main.webp";

import iicrcFirmBadge from "@/assets/iicrc-firm-badge.png";
import iicrcMoldBadge from "@/assets/iicrc-mold-badge.png";

// TODO: replace with the actual IICRC certification badge asset — this currently
// points at the same interior photo as `projectInterior`, so the "badge" renders a room photo.
import iicrcBadge from "@/assets/iicrc-badge.avif";

const SITE_URL = "https://mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/services/water-damage-mold-remediation`;
const OG_IMAGE = `${SITE_URL}/service-water-damage-mold-remediation.jpg`;

const PAGE_TITLE = "Water Damage & Mold Remediation | Mier & Murphy Builders";
const PAGE_DESCRIPTION =
  "Fast, IICRC-certified water damage restoration and mold remediation in Thousand Oaks, CA. Mier & Murphy Builders restores your home safely.";
const PAGE_KEYWORDS =
  "water damage restoration thousand oaks; mold remediation thousand oaks; emergency restoration contractor; mold removal ventura county";

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
      q: "How do I know if I have mold, and what should I do?",
      a: "Common signs include a musty smell, visible spotting, and past water damage that was not fully dried out. If you suspect mold, contact us for an inspection.",
    },
    {
      q: "What is the difference between water damage restoration and mold remediation?",
      a: "Restoration removes water and dries out a structure. Remediation removes mold that has already started growing. We handle both, and one often leads into the other.",
    },
    {
      q: "How fast can you respond?",
      a: "Call us and we will let you know how quickly we can get to you based on your situation and location.",
    },
    {
      q: "Will my homeowners insurance cover this?",
      a: "Many claims are covered depending on the cause and your policy. We can help document the damage, but confirm coverage with your provider.",
    },
    {
      q: "Can you fix the damage after the water is gone?",
      a: "Yes. We handle both restoration and the repair work, so you are not coordinating between separate companies.",
    },
    {
      q: "How do you make sure the mold does not come back?",
      a: "We address the moisture source that caused it, not just the visible growth.",
    },
    {
      q: "What areas do you serve?",
      a: "Thousand Oaks, Westlake Village, Simi Valley, Moorpark, Oak Park, Agoura Hills, and the surrounding Conejo Valley.",
    },
  ];

const process = [
  { step: "01", title: "Call Us", desc: "Tell us what you are seeing: active leak, standing water, or suspected mold." },
  { step: "02", title: "Inspection", desc: "We assess the source, the extent of the damage, and whether mold is present or likely." },
  { step: "03", title: "Extraction & Drying", desc: "We remove standing water and dry the structure properly." },
  { step: "04", title: "Mold Remediation", desc: "If mold is present, we contain the area and remove it to IICRC S520 standards." },
  { step: "05", title: "Reconstruction ", desc: "We repair the drywall, flooring, and finishes to put your home back together." },
];

const finishes = [
  { title: "Water Extraction", desc: "Removal of standing water from leaks, floods, and appliance failures." },
  { title: "Structural Drying", desc: "Proper drying of walls, flooring, and framing to stop mold before it starts." },
  { title: "Mold Inspection", desc: "Assessment of where mold is present and what is driving it." },
  { title: "Mold Remediation", desc: "Contained removal following IICRC S520 standards." },
  { title: "Source Repair", desc: "Fixing the leak or moisture problem so the issue does not return." },
  { title: "Reconstruction", desc: "Rebuilding drywall, flooring, and finishes once the space is dry and clean." },
];

// JSON-LD: Service (name/description now match the page's actual subject matter)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Water Damage Restoration & Mold Remediation",
  serviceType: "Water Damage Restoration and Mold Remediation",
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
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certification",
      name: "IICRC S500 (Water Damage) & S520 (Mold Remediation) Certified",
    },
  },
  areaServed: areasServed.map((name) => ({ "@type": "City", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Water Damage & Mold Remediation Services",
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
    { "@type": "ListItem", position: 3, name: "Water Damage & Mold Remediation", item: PAGE_URL },
  ],
};

const WaterDamageMoldRemediation = () => {
  return (
    <>
      <Helmet>
        {/* Primary meta tags */}
        <title>
    Water Damage & Mold Remediation | Mier & Murphy Builders
  </title>
        <meta name="title" content={PAGE_TITLE} />
        <meta
    name="description"
    content="Fast, IICRC-certified water damage restoration and mold remediation in Thousand Oaks, CA. Mier & Murphy Builders restores your home safely."
  />
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
        <meta property="og:image:alt" content="IICRC certified water damage restoration and mold remediation in Thousand Oaks, CA" />
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
          <img src={projectWater} alt="Luxury interior plaster finish in a Thousand Oaks estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Paintbrush className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">IICRC CERTIFIED RESTORATION</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
            Trusted <span className="text-primary">Water Damage and Mold Remediation</span> Experts
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
            IICRC certified water damage and mold remediation for homeowners in Thousand Oaks, Westlake Village,
             and Simi Valley. We know what water damage does to a home, because it happened to ours.
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
              
              <span className="font-sans text-xs font-semibold text-primary tracking-[0.4em]">RESTORATION IS PERSONAL</span>
            </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Restoration Is <span className="text-primary">Personal for Our Family</span>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                After our own family dealt with mold in our home, we learned firsthand what water damage does to a house, and to the people living in it.
                 That is why we became IICRC certified, and why we treat every job like our own family will be breathing the air.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Mier & Murphy Builders provides IICRC certified water damage restoration and mold remediation across Thousand Oaks and the Conejo Valley, 
                following S500 (water damage) and S520 (mold remediation) standards.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                Water damage that is not fully dried out does not just go away. It sits inside walls, under flooring, and behind cabinetry, and it becomes
                 the starting point for mold. Mold removed without fixing the moisture source often comes back. That is why we treat extraction, drying, and 
                 remediation as one job, not three separate problems.
                </p>

                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Our Water Damage and Mold Restoration Services:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                        "Water extraction and structural drying",
                        "Mold inspection and testing coordination",
                        "IICRC S520 mold remediation",
                        "Leak and moisture source repair",
                        "Drywall, flooring, and finish reconstruction",
                        "Insurance claim documentation support",

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
                  src={projectWaterMain}
                  alt="Premium Venetian plaster application in Westlake Village home"
                  className="w-full h-80 lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-8 glass ">
              <div className="bg-[#f9f9f6] border border-gray-200 rounded-2xl p-4 mb-2 shadow-sm flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img 
              src={iicrcFirmBadge}
              alt="IICRC Certified Firm badge" 
              className="w-24 h-24 object-contain shrink-0" 
            />
            <div className="space-y-2">
             
              <h3 className="font-playfair text-2xl font-bold text-gray-900">IICRC Firm</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A professional cleaning, restoration, or inspection company that is certified by the IICRC. Technicians who work for the firm have completed IICRC training and certification courses.
              </p>
            </div>
          </div>

          <div className="bg-[#f9f9f6] border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img 
              src={iicrcMoldBadge}
              alt="IICRC Mold Certified badge" 
              className="w-24 h-24 object-contain shrink-0" 
            />
            <div className="space-y-2">
              
              <h3 className="font-playfair text-2xl font-bold text-gray-900">IICRC Mold</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A technician or firm that is certified in mold remediation by IICRC.
              </p>
            </div>
          </div>
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
          heading={`How We Handle Your Restoration,\u00A0`}
          headingHighlight="Start to Finish"
          description="When water damage or mold hits, you want a clear plan. Here is exactly how we handle it, from your first call to the final repair."
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
              Why Homeowners Trust Our <span className="text-primary">Certified Restoration Team</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed p-5">
              Restoration is not the time to gamble on a contractor. Here is what sets our certified, family-owned team apart from the rest.
                </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "IICRC Certified ", desc: "Certified to S500 water damage and S520 mold remediation standards." },
              { icon: Shield, title: "One Company, Start to Finish", desc: "Extraction, remediation, and reconstruction handled by one crew." },
              { icon: Clock, title: "We Fix the Source", desc: "We address what caused the moisture, so the problem does not come back." },
              { icon: Star, title: "Personal Standard", desc: "We got into restoration because of our own family, and we hold every job to that bar." },
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
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">OUR SERVICES</p>


               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
               Everything We Handle <span className="text-primary">From Water to Repair</span>
              </h2>
                 <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
                 From the first drop of standing water to the last coat of paint, here is the full range of restoration work our certified team provides.
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
              Restoration Contractors <span className="text-primary">Near You in Ventura County</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We serve homeowners across Thousand Oaks and the surrounding Conejo Valley, and we understand the regional
               conditions that lead to water damage and mold here.
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
            Dealing With Water Damage or Mold <span className="text-primary">Right Now?</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            Call us now and we will help you understand what you are dealing with and exactly what it takes to fix it.
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
              Common Water Damage and Mold <span className="text-primary">FAQ</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mt-4">
               Answers to the questions homeowners ask most about water damage, mold, and what it takes to fix them for good.</p>
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

export default WaterDamageMoldRemediation;