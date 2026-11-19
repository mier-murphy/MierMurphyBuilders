import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface AreaPageData {
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  /** Optional 1200×630 sharing image (imported asset). Falls back to heroImage. */
  ogImage?: string;
  ogImageAlt?: string;

  // Area Information
  zipCode: string;
  cityName: string;
  tagline: string;
  heroHeadline?: string;
  heroDescription: string;
  heroImage: string;
  tier: "primary" | "secondary" | "premium";

  // Services
  services: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];

  // Local Content
  localContent: {
    heading: string;
    paragraphs: string[];
  };

  // Neighborhoods
  neighborhoodHighlights: string[];

  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Nearby Areas
  nearbyAreas: {
    name: string;
    zip: string;
    href: string;
  }[];

  // Structured Data
  jsonLd: object;
}

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";

const AreaPageTemplate = ({ data }: { data: AreaPageData }) => {
  const tierLabel =
    data.tier === "primary"
      ? "Core Service Area"
      : data.tier === "secondary"
        ? "Extended Service Area"
        : "Service Area";

  const canonicalUrl = `${SITE_URL}/areas/${data.zipCode}`;

  const defaultMetaTitle = `Contractor in ${data.cityName}, CA ${data.zipCode} | Mier & Murphy`;
  const defaultMetaDescription = `Family-owned remodeling, stucco repair, and water damage restoration in ${data.cityName} (${data.zipCode}). CA Lic. #1077044. Free estimates.`;

  const title = data.metaTitle || defaultMetaTitle;
  const description = data.metaDescription || defaultMetaDescription;
  const ogImage = `${SITE_URL}${data.ogImage || data.heroImage}`;
  const ogImageAlt =
    data.ogImageAlt || `Home in ${data.cityName} served by Mier & Murphy Builders`;
  const badgeText = data.tagline || `${tierLabel.toUpperCase()} · ZIP ${data.zipCode}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:site_name" content="Mier & Murphy Builders" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogImageAlt} />

        {/* Structured data (each page passes Service, FAQPage and BreadcrumbList) */}
        <script type="application/ld+json">{JSON.stringify(data.jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.heroImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>

        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">
                {badgeText}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 leading-[1.15] text-white">
              {data.heroHeadline ? (
                <>
                  {data.heroHeadline}{" "}
                  <span className="text-primary">
                    {data.cityName}
                  </span>
                </>
              ) : (
                <>
                  Remodeling and Repair Contractor in{" "}
                  <span className="text-primary">
                    {data.cityName}
                  </span>
                </>
              )}
            </h1>

            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">
              {data.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all group"
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-3 rounded-xl font-sans text-sm font-medium hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* Trust section */}
      <section className="py-6 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="trust-badge">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              20 Years of Building Experience
            </span>

            <span className="trust-badge">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              Family Owned & Operated
            </span>

            <span className="trust-badge">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              IICRC S500 & S520 Certified
            </span>

            <span className="trust-badge">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              CA Lic. #1077044
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">
                Our Services in {data.cityName}
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Remodeling and Repair Services in{" "}
                <span className="text-primary">
                  {data.cityName}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, i) => (
              <ScrollReveal
                key={service.title}
                delay={i * 0.1}
              >
                <div className="bg-background border border-border rounded-2xl p-8 h-full group hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>

                  <h3 className="font-serif text-lg font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content / Why Us */}
      <section
        className="section-padding"
        style={{
          background: "hsl(220, 20%, 15%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <div>
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">
                Local Expertise
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
                {data.localContent.heading}
              </h2>

              {data.localContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-sans text-sm text-white/60 leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h3 className="font-serif text-xl font-bold mb-6 text-white">
                Neighborhoods We Serve in {data.cityName}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {data.neighborhoodHighlights.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />

                    <span className="font-sans text-sm text-white/70">
                      {n}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/[0.06] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h4 className="font-serif text-base font-bold text-white">
                    Licensed & Insured
                  </h4>
                </div>

                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  Every project is handled by a licensed, family-owned
                  contractor (CA Lic. #1077044) with 20 years of building
                  experience, so your project is built right and
                  backed by our name.
                </p>
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
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">
                FAQ
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Common Questions in{" "}
                <span className="text-primary">
                  {data.cityName}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <Accordion
            type="single"
            collapsible
            className="space-y-3"
          >
            {data.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-2xl px-6"
              >
                <AccordionTrigger className="font-sans text-sm font-medium text-left py-5">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Nearby Areas */}
      <section
        className="section-padding"
        style={{
          background: "hsl(220, 20%, 15%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">
              Nearby Service Areas
            </p>

            <h2 className="font-serif text-3xl font-bold mb-8 text-white">
              Also Serving These Communities
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {data.nearbyAreas.map((area) => (
                <Link
                  key={area.zip}
                  to={area.href}
                  className="bg-white/[0.06] border border-white/10 px-5 py-3 rounded-xl font-sans text-sm text-white/70 hover:bg-white/[0.1] hover:border-primary/30 hover:text-primary transition-all"
                >
                  {area.name}{" "}
                  <span className="text-white/40">
                    ({area.zip})
                  </span>
                </Link>
              ))}
            </div>

            <Link
              to="/areas"
              className="inline-flex items-center gap-1 mt-8 font-sans text-sm font-semibold text-primary hover:gap-2 transition-all"
            >
              See all service areas
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: "hsl(145, 55%, 35% / 0.06)",
            }}
          />

          <div
            className="absolute bottom-[-30%] right-[-5%] w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background: "hsl(145, 55%, 35% / 0.04)",
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <ScrollReveal>
            <div className="gold-divider mb-8" />

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Planning a Project in{" "}
              <span className="text-primary">
                {data.cityName}
              </span>
              ?
            </h2>

            <p className="font-sans text-sm text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Schedule a free on-site estimate. We will look at the
              project with you, explain what it takes, and give you a
              clear written estimate.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all shadow-lg group"
              >
                Schedule a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-muted transition-all"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AreaPageTemplate;