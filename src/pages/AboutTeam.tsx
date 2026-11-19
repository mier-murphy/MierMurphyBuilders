import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Users, Wrench, Heart, MessageSquare, CheckCircle, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import frankPortrait from "@/assets/frank-portrait.jpg";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const SITE_URL = "https://www.mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/about/team`;
const PAGE_TITLE = "Our Team | Mier & Murphy Builders, Thousand Oaks";
const PAGE_DESCRIPTION =
  "Meet Frank Mier and the family-owned crew behind Mier & Murphy Builders, a licensed Thousand Oaks contractor with 20 years of building experience.";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";

const teamValues = [
  {
    icon: Heart,
    title: "Family Owned and Operated",
    description:
      "Mier & Murphy Builders is a family business based in Thousand Oaks. When you call us, you reach our family, not a call center.",
  },
  {
    icon: Users,
    title: "The Same Faces on Your Job",
    description:
      "Frank and the crew are on the jobsite. The people who walk your home and give you the estimate are the people who do the work.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "You get a clear scope and an honest timeline before work starts, and you know who to call with questions while the project is underway.",
  },
  {
    icon: Wrench,
    title: "One Team, Start to Finish",
    description:
      "From water damage and mold remediation through the rebuild, one team handles the work, so nothing gets lost between trades.",
  },
];

const expertise = [
  { name: "Bathroom & Kitchen Remodeling", href: "/services/bathroom-kitchen-remodeling" },
  { name: "Water Damage & Mold Remediation", href: "/services/water-damage-mold-remediation" },
  { name: "Drywall, Plaster & Stucco Repair", href: "/services/drywall-plaster-stucco-repair" },
  { name: "Balcony & Deck Repair", href: "/services/balcony-deck-repair" },
  { name: "Commercial Tenant Improvement", href: "/services/commercial-tenant-improvement" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    { "@type": "ListItem", position: 3, name: "Our Team", item: PAGE_URL },
  ],
};

const AboutTeam = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        {/* Kept out of search until the owner confirms the team details; see notes. */}
        <meta name="robots" content="noindex, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}${heroImage}`} />
        <meta property="og:site_name" content="Mier & Murphy Builders" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── HERO with Lead Form ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Users className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">MEET OUR TEAM</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              The Family Behind <span className="text-primary">Mier &amp; Murphy Builders</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">
              A family-owned crew in Thousand Oaks, led by Frank Mier, bringing 20 years of building
              experience to remodeling, restoration, and repair.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Work With Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-sans text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* ── FRANK MIER — Founder Spotlight ── */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={frankPortrait}
                  alt="Frank Mier, founder of Mier & Murphy Builders"
                  className="rounded-2xl shadow-xl w-full aspect-square object-cover"
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
                <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
                  <span className="font-sans text-xs font-bold">20 Years of Building Experience</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-3 font-semibold">Founder</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Frank Mier: A Lifetime of Building
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  Frank Mier leads Mier &amp; Murphy Builders, a family-owned and family-operated construction
                  company in Thousand Oaks. He brings 20 years of building experience to every bathroom
                  remodel, kitchen remodel, water damage repair, and structural project the company takes on.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  Frank is on the jobsite with the crew. The person who walks your home and gives you the
                  estimate is the person responsible for delivering the work.
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  His approach is simple: a clear scope, an honest timeline, and work done the way he would
                  want it done in his own home.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary/10 border border-primary/15 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-primary">CA Lic. #1077044</span>
                  <span className="bg-primary/10 border border-primary/15 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-primary">Family Owned &amp; Operated</span>
                  <span className="bg-primary/10 border border-primary/15 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-primary">Based in Thousand Oaks</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TEAM VALUES — Dark Section ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">How We Work</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-white">
              What Makes Our Team Different
            </h2>
            <p className="font-sans text-sm text-white/50 text-center max-w-xl mx-auto mb-14">
              Four things you can expect when you hire Mier &amp; Murphy Builders.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {teamValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={(i % 2) * 0.1}>
                <div className="group bg-white/[0.06] border border-white/10 rounded-2xl p-7 h-full hover:bg-white/[0.1] hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                    <value.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-white">{value.title}</h3>
                  <p className="font-sans text-[13px] text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE — Light Section ── */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.06)" }} />
          <div className="absolute bottom-[-30%] right-[-5%] w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.04)" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(145, 55%, 35%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-4">
              The work our team handles for homeowners, HOAs, and businesses across Thousand Oaks and
              Ventura County.
            </p>
            <div className="gold-divider mb-14" />
          </ScrollReveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="flex items-center gap-3 p-4 bg-background border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm text-foreground/80 group-hover:text-primary transition-colors">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA — Dark Section ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Work With a <span className="text-primary">Family-Owned Team</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Tell us about your project. We will walk your home, explain the scope, and prepare a free
              estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get a Free Estimate
              </Link>
              <a
                href={PHONE_HREF}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;