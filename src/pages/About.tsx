import { Phone, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import LeadCaptureForm from "@/components/LeadCaptureForm";
import ScrollReveal from "@/components/ScrollReveal";
import projectAboutHero from "@/assets/about/about-hero.webp";
import projectAboutTeam from "@/assets/about/about-meet-team.webp";
import projectAboutStory from "@/assets/about/about-our-story.webp";
import projectAboutRoots from "@/assets/about/about-roots.webp";
import ogImage from "@/assets/about/about-og.webp";
import iicrcFirmBadge from "@/assets/iicrc-firm-badge.png";
import iicrcMoldBadge from "@/assets/iicrc-mold-badge.png";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/about`;
const OG_IMAGE = `${SITE_URL}${ogImage}`;
const OG_IMAGE_ALT = "Mier & Murphy Builders crew reviewing a home construction site";

const PAGE_TITLE = "About Mier & Murphy | Family Contractor in Thousand Oaks";
const PAGE_DESCRIPTION =
  "Meet Mier & Murphy Builders, a family-owned general contractor in Thousand Oaks with 20 years of building experience. Licensed, CA Lic. #1077044.";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";
const CSLB_URL =
  "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1077044";

// JSON-LD: AboutPage. The business itself (address, phone, license, founder,
// reviews profiles) is defined once on the homepage as `${SITE_URL}/#organization`,
// so this page only references it instead of repeating a second, different copy.
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    width: 1200,
    height: 630,
  },
};

// JSON-LD: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
  ],
};

export function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        {/* Primary meta tags */}
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="author" content="Mier & Murphy Builders" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Geo tags (matches homepage's local-SEO signals) */}
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
        <script type="application/ld+json">{JSON.stringify(aboutPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={projectAboutHero}
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
              <Users className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">OUR STORY</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold mb-6 leading-[1.15] text-white">
              Meet the Family Behind <span className="text-primary">Mier and Murphy Builders</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Twenty years of building experience, one family name, and a simple belief: your home deserves a
              contractor who treats it the way we would treat our own.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* 2. ORIGIN STORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#f9f9f6] border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 min-h-[380px]">
              <img
                src={projectAboutStory}
                alt="Contractor reviewing building plans on a sawhorse table at a framing job site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Twenty Years of Building, <span className="text-[#587b37]">One Family's Name</span>
            </h2>
            <div className="p-4 rounded-xl bg-[#587b37]/10 border-l-4 border-[#587b37] text-gray-800 text-base sm:text-lg font-medium">
              Mier & Murphy Builders is a family-owned and family-operated construction company in Thousand Oaks, with 20
              years of building experience.
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We started the way most good contractors do: with a set of skills, a reputation to build, and a belief that
              if you do honest work and stand behind it, the rest takes care of itself. Two decades later, that is still
              how we run every job.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We are not a large corporate outfit with a call center and a rotating list of subcontractors. When you call
              us, you reach our family. The same people who walk your home and give you an estimate are the people who
              stand behind the finished work.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MEET THE TEAM */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              The People Who <span className="text-[#587b37]">Show Up on Your Job</span>
            </h2>
            <div className="w-16 h-1 bg-[#587b37] mx-auto rounded-full" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
              <p>
                With Mier & Murphy, there is no mystery about who is doing the work. Frank and the crew are on the
                jobsite, and you get to know the people responsible for your project from the first handshake to the
                final walkthrough.
              </p>
              <p>
                That continuity matters. It means nothing gets lost between a salesperson and a subcontractor who never
                spoke. It means the person who promised you something is the person who delivers it. And it means that
                when we say we treat your home like our own, there is a real family standing behind those words.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-[400px]">
                <img
                  src={projectAboutTeam}
                  alt="Three crew members in hard hats reviewing a home under construction"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROMISE */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#f9f9f6]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            What You Can Expect <span className="text-[#587b37]">When You Hire Us</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Twenty years in, the things that set us apart are simple. They are also the reason our clients call us back
            and send their neighbors our way.
          </p>
          <div className="w-16 h-1 bg-[#587b37] mx-auto rounded-full" aria-hidden="true" />

          <div className="bg-[#f0f5ec] border border-[#587b37]/20 rounded-2xl p-8 sm:p-10 space-y-6 text-left text-gray-800 text-base sm:text-lg leading-relaxed mt-8 shadow-sm">
            <p>
              We show up when we say we will, and we tell you the real timeline before we start, not after demolition
              begins. We keep you in the loop, so you always know what is happening in your home and why. We respect your
              space, your time, and your budget. And we stand behind the work, because our name is on it and we live in
              the same community you do.
            </p>
            <p className="font-medium text-gray-900">
              That is the whole promise. No inflated claims, no pressure, no disappearing act after the deposit clears.
              Just honest work from a family that has been doing this for two decades.
            </p>
            <Link
              to="/about/testimonials"
              className="inline-flex items-center gap-1 text-base font-semibold text-[#587b37] hover:gap-2 transition-all"
            >
              Read what our clients say <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LOCAL ROOTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Proud to Call the <span className="text-[#587b37]">Conejo Valley Home</span>
            </h2>
            <div className="w-16 h-1 bg-[#587b37] rounded-full" aria-hidden="true" />
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We are not a company that parachutes in from somewhere else to chase work. We live here. We raise our
              families here. The homes we work on belong to our neighbors, and our reputation travels by word of mouth
              through the same community we are part of.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              That local connection is why we know the homes and the building codes in this area, why we are easy to reach
              before, during, and after a job, and why we take every project personally. When you hire us, you are not a
              ticket number. You are a neighbor.
            </p>
            <Link
              to="/areas"
              className="inline-flex items-center gap-1 text-base font-semibold text-[#587b37] hover:gap-2 transition-all"
            >
              See the areas we serve <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 min-h-[360px]">
              <img
                src={projectAboutRoots}
                alt="Contractor shaking hands with a family outside their home in a Conejo Valley neighborhood"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CREDENTIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#f9f9f6]">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            The Proof Behind <span className="text-[#587b37]">the Work We Promise</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto font-light">
            Our credentials are not decoration. They are the standards we earned and the ones you can hold us to.
          </p>
          <div className="w-16 h-1 bg-[#587b37] mx-auto rounded-full" aria-hidden="true" />
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-24 h-24 rounded-full bg-[#587b37]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-10 h-10 text-[#587b37]" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-gray-900">Licensed California Contractor</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mier & Murphy Builders holds California Contractors State License Board license #1077044. You can check
                its status on the CSLB website at any time.
              </p>
              <a
                href={CSLB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#587b37] hover:gap-2 transition-all"
              >
                Verify license #1077044 <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img
              src={iicrcFirmBadge}
              alt="IICRC Certified Firm badge"
              className="w-24 h-24 object-contain shrink-0"
              loading="lazy"
            />
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-gray-900">IICRC Firm</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A professional cleaning, restoration, or inspection company that is certified by the IICRC. Technicians
                who work for the firm have completed IICRC training and certification courses.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img
              src={iicrcMoldBadge}
              alt="IICRC Mold Certified badge"
              className="w-24 h-24 object-contain shrink-0"
              loading="lazy"
            />
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-gray-900">IICRC Mold</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A technician or firm that is certified in mold remediation by IICRC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Talk About <span className="text-primary">Your Next Project?</span>
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Whether it is a remodel, a repair, or a water damage emergency, get a free estimate from a family that treats
              your home like our own.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get a Free Estimate
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans text-sm font-medium text-primary border-2 border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Phone className="w-4 h-4" aria-hidden="true" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;