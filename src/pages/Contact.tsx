import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/Contact Hero.webp";
import ogImage from "@/assets/contact-og.webp";
import iicrcFirmBadge from "@/assets/iicrc-firm-badge.png";
import iicrcMoldBadge from "@/assets/iicrc-mold-badge.png";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/contact`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT = "Front entry of a stucco home in Thousand Oaks at sunset";

const PAGE_TITLE = "Contact Mier & Murphy Builders | Thousand Oaks, CA";
const PAGE_DESCRIPTION =
  "Request a free estimate from Mier & Murphy Builders. Call (805) 998-9082 or send the form. Serving Thousand Oaks, Westlake Village, and Ventura County.";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";
const EMAIL = "frank@mierconstruction.com";

const FORM_ID = "2NK7xMC2cHLB4WdlKzyu";
const FORM_SCRIPT = "https://api.advanceedgellc.com/js/form_embed.js";

const serviceAreas = [
  { name: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
  { name: "Thousand Oaks & Westlake", zip: "91362", href: "/areas/91362" },
  { name: "Westlake Village", zip: "91361", href: "/areas/91361" },
  { name: "Newbury Park", zip: "91320", href: "/areas/91320" },
  { name: "Agoura Hills", zip: "91301", href: "/areas/91301" },
  { name: "Oak Park", zip: "91377", href: "/areas/91377" },
  { name: "Simi Valley", zip: "93062", href: "/areas/93062" },
  { name: "Moorpark", zip: "93021", href: "/areas/93021" },
];

// JSON-LD: ContactPage. The business details (address, phone, license) are
// defined once on the homepage as `${SITE_URL}/#organization`.
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@id": `${SITE_URL}/#organization`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+18059989082",
      email: EMAIL,
      areaServed: "US-CA",
      availableLanguage: "English",
    },
  },
};

// JSON-LD: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
  ],
};

const Contact = () => {
  // Load the AdvanceEdge form embed script once when this page mounts
  useEffect(() => {
    if (!document.querySelector(`script[src="${FORM_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = FORM_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden pt-10">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/85 to-[hsl(220,20%,12%)]/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4 font-semibold">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contact <span className="text-primary">Mier & Murphy Builders</span>
            </h1>
            <p className="font-sans text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and we will set up a free estimate. For an active leak or water damage, call us
              directly at{" "}
              <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-28">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-serif text-2xl font-bold mb-8">
                Contact <span className="text-primary">Information</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
                  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: MapPin, label: "Location", value: "Thousand Oaks, California" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 7AM–6PM | Sat: 8AM–2PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="glass w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-sans text-sm text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 luxury-card p-6">
                <h3 className="font-serif text-lg font-bold mb-3">Service Areas</h3>
                <ul className="space-y-2">
                  {serviceAreas.map((area) => (
                    <li key={area.zip}>
                      <Link
                        to={area.href}
                        className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
                        {area.name} ({area.zip})
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/areas"
                  className="inline-flex items-center gap-1 mt-4 font-sans text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  See all service areas <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form (AdvanceEdge embed) */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2}>
              <div className="luxury-card p-2 md:p-2">
                <iframe
                  src={`https://api.advanceedgellc.com/widget/form/${FORM_ID}`}
                  style={{ width: "100%", height: "950px", border: "none", borderRadius: "8px" }}
                  id={`inline-${FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="M&M Contact Form"
                  data-height="950"
                  data-layout-iframe-id={`inline-${FORM_ID}`}
                  data-form-id={FORM_ID}
                  title="Request a free estimate from Mier & Murphy Builders"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IICRC CERTIFICATION. Keep id="iirc": the footer links to /contact#iirc,
          and Layout.tsx scrolls to the hash after navigation. */}
      <section className="section-padding bg-[#fcfcf8] scroll-mt-24" id="iirc">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">
                Restoration Certification
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                IICRC <span className="text-primary">Certified</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Our water damage and mold remediation work follows the IICRC S500 and S520 standards, the industry
                guidelines for drying, cleanup, and safe mold removal.
              </p>
              <div className="gold-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="luxury-card p-8 h-full flex items-start gap-6">
                <div className="flex-shrink-0 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <img
                    src={iicrcFirmBadge}
                    alt="IICRC Certified Firm badge"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-foreground">
                    IICRC <span className="text-primary">Firm</span>
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    A professional cleaning, restoration, or inspection company that is certified by the IICRC.
                    Technicians who work for the firm have completed IICRC training and certification courses.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="luxury-card p-8 h-full flex items-start gap-6">
                <div className="flex-shrink-0 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <img
                    src={iicrcMoldBadge}
                    alt="IICRC Mold Certified badge"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-foreground">
                    IICRC <span className="text-primary">Mold</span>
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    A technician or firm that is certified in mold remediation by the IICRC.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                to="/services/water-damage-mold-remediation"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 group"
              >
                Water Damage & Mold Remediation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;