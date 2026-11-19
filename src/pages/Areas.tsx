import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@/assets/Areas We Serve Hero.webp";
import ogImage from "@/assets/areas-og.webp";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/areas`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT = "Mier & Murphy Builders service areas across the Conejo Valley";

const PAGE_TITLE = "Areas We Serve | Thousand Oaks Contractor | Mier & Murphy";
const PAGE_DESCRIPTION =
  "Remodeling, repair, and restoration in Thousand Oaks, Westlake Village, Newbury Park, Agoura Hills, Oak Park, Calabasas, and nearby communities.";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";

type Area = {
  zip: string;
  name: string;
  description: string;
  href: string;
};

const areas: Area[] = [
  { zip: "91360", name: "Thousand Oaks", description: "Our home base, with remodeling, repair, and restoration for homes across central Thousand Oaks.", href: "/areas/91360" },
  { zip: "91362", name: "Newbury Park / Westlake", description: "Remodeling and repair for homes in the Thousand Oaks and Westlake area.", href: "/areas/91362" },
  { zip: "91361", name: "Westlake Village", description: "Remodeling, stucco, and restoration work for homes and condo communities in Westlake Village.", href: "/areas/91361" },
  { zip: "91320", name: "Newbury Park", description: "Kitchen and bathroom remodeling, drywall repair, and restoration for Newbury Park homeowners.", href: "/areas/91320" },
  { zip: "91301", name: "Agoura Hills", description: "Remodeling, water damage repair, and mold remediation for homes in Agoura Hills.", href: "/areas/91301" },
  { zip: "91377", name: "Oak Park", description: "Remodeling, stucco, and balcony repair for homes and communities in Oak Park.", href: "/areas/91377" },
  { zip: "91302", name: "Calabasas / Westlake Village", description: "Remodeling and restoration for homes and HOA communities in Calabasas.", href: "/areas/91302" },
  { zip: "93021", name: "Moorpark", description: "Remodeling and balcony repair for Moorpark homes and townhome communities.", href: "/areas/93021" },
  { zip: "93062", name: "Simi Valley", description: "Remodeling, repair, and restoration for Simi Valley homes and HOA communities.", href: "/areas/93062" },
  { zip: "91311", name: "Chatsworth", description: "Remodeling and repair for Chatsworth homes, from hillside properties to planned communities.", href: "/areas/91311" },
  { zip: "91367", name: "Woodland Hills", description: "Remodeling, restoration, and repair for homes and condos in Woodland Hills.", href: "/areas/91367" },
  { zip: "91364", name: "Woodland Hills South", description: "Remodeling and repair for established homes in south Woodland Hills.", href: "/areas/91364" },
  { zip: "90265", name: "Malibu", description: "Repair and restoration for coastal homes, where salt air and moisture take a toll.", href: "/areas/90265" },
  { zip: "91319", name: "Ventura County", description: "Remodeling, repair, and restoration for homeowners and HOAs across Ventura County.", href: "/areas/91319" },
  { zip: "90001", name: "Los Angeles", description: "Remodeling, repair, and commercial improvement work in the Los Angeles area.", href: "/areas/90001" },
];

const services = [
  { name: "Bathroom & Kitchen Remodeling", href: "/services/bathroom-kitchen-remodeling" },
  { name: "Water Damage & Mold Remediation", href: "/services/water-damage-mold-remediation" },
  { name: "Drywall, Plaster & Stucco Repair", href: "/services/drywall-plaster-stucco-repair" },
  { name: "Balcony & Deck Repair", href: "/services/balcony-deck-repair" },
  { name: "Commercial Tenant Improvement", href: "/services/commercial-tenant-improvement" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Areas We Serve", item: PAGE_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Areas served by Mier & Murphy Builders",
    itemListElement: areas.map((area, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: area.name,
      url: `${SITE_URL}${area.href}`,
    })),
  },
];

const Areas = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">SERVICE AREAS</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Areas We Serve From <span className="text-primary">Thousand Oaks</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">
              Family-owned and based in Thousand Oaks, we provide remodeling, repair, and restoration
              across the Conejo Valley, Ventura County, the western San Fernando Valley, and the Malibu
              coast.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-white font-sans text-sm font-semibold hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Communities We <span className="text-primary">Work In</span>
            </h2>
            <p className="font-sans text-[15px] text-muted-foreground leading-relaxed">
              Choose your community to see the services, local considerations, and common questions
              for your area. Not sure if we cover your address?{" "}
              <Link to="/contact" className="text-primary font-medium underline underline-offset-4">
                Contact us
              </Link>{" "}
              and we will let you know.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <li key={area.zip}>
                <ScrollReveal delay={Math.min(i, 5) * 0.05}>
                  <Link
                    to={area.href}
                    className="block luxury-card p-6 h-full group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span className="font-sans text-xs tracking-[0.2em] text-primary font-semibold">{area.zip}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{area.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-sans text-sm font-medium group-hover:gap-2 transition-all">
                      View {area.name} Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
            Services Available in <span className="text-primary">Every Area</span>
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 border border-border bg-background rounded-full px-5 py-2.5 font-sans text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  {service.name}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Request a <span className="text-primary">Free Estimate</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Wherever you are in our service area, tell us about your project and we will walk through
              the scope with you. Get a no-obligation estimate today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <a
                href={PHONE_HREF}
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
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

export default Areas;