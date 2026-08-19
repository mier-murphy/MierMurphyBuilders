import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, CheckCircle, MapPin, Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const SITE_URL = "https://mierandmurphybuilders.com";
const PAGE_URL = `${SITE_URL}/about/testimonials`;

const PAGE_TITLE = "Client Reviews & Testimonials | Mier & Murphy Builders";

const PAGE_DESCRIPTION =
  "Read reviews and testimonials from homeowners across Thousand Oaks and Ventura County who trusted Mier & Murphy Builders with their custom homes.";

  const testimonials = [
    {
      quote: "Mier and Murphy were the best! From the beginning, they understood and explained the situation what was happening when no one else could. They explained what needed to remedy the problem. Frank was sympathetic and supportive. His team of workers and himself were 100% professional and respectful at all times. The complex the work in a timely manner and exceeded my expectations. I am very happy for the help and work they did and it seems to have remedied my situation. Frank had some suggestions for improvements along the way and was very conscious of using low VOC chemicals so not to cause any harm. Frank is very knowledgeable and competent and he's reasonable and worked with me on some of the costs. I had to do some footwork to find the same finishes I had but mostly because I wanted to keep the project moving along without any delays. Overall I am very pleased with the results and highly recommend Mier and Murphy for any projects you might have. I wouldn't hesitate to have them help me again, if ever needed.",
      author: "Jennifer B.",
      location: "Los Angeles, CA",    
      rating: 5,
    },
    {
      quote: "Frank is knowledgeable, nice, good prices, great work, timely, & cleaned the area well.",
      author: "Cathy S.",
      location: "Los Angeles, CA",
      
      rating: 5,
    },
    {
      quote: "Our experience with Frank and his crew was fantastic. We converted a detached, dusty garage that was used for storage into a finished bonus room with attic storage. Frank talked us through each step, from initial quote through every stage of construction, to finishes. He was patient, informative, and attentive to both the biggest elements and the smallest details. It was great to have the project in the hands of a team that was experienced and who we could trust to deliver the best result. We know we will enjoy this space for years to come! Now we are talking with Frank about future projects because we are so thrilled with the way this first one turned out.",
      author: "J. V.",
      location: "North Hollywood, CA",
      
      rating: 5,
    },
    {
      quote: "Mier construction did a great job on our new driveway. Very easy to work with attention to detail and fast. They were done in a few days. Getting so many compliments from our neighbors about our new driveway. They also beat all the other bids on the driveway project. We highly recommend them.",
      author: "Tim M.",
      location: "Los Angeles, CA",
     
      rating: 5,
    },
    {
      quote: "Frank worked on building out our newest storefront (Asurion Tech Repair & Solutions). It was a blank canvas as the unit we are renting was freshly divided from an old bank space. Frank and team worked really efficiently to build out the new layout with drywall, electrical, drop ceiling, and resurfacing the concrete floors. They were extremely communicative about the progress and any delays we faced (due to city permits).",
      author: "Corinne B.",
      location: "Los Angeles, CA",
      
      rating: 5,
    },
    {
      quote: "Mier Construction was great to deal with during our home remodel. They were very considerate and clean. They were very knowledgeable about offering advice on materials to use and the overall aesthetic of what would look best. They did a complete gutting of our home and put up new drywall throughout the house. They also helped us turn an old closet space into a functional laundry and storage room. Their attention to detail was really great that we continue to get compliments every time someone walks into the house for the first time. They were fair with their pricing and the high quality of work reflected that. You get what you pay for! I highly recommend them. They will be our first call for any future home projects.",
      author: "Christopher M.",
      location: "Sylmar, CA",
      
      rating: 5,
    },
    {
      quote: "Frank and his team were great to work with - very conscientious of keeping the renovation space clean and tidy at end of each day and also had good communication when working through the city permits and delays. We had a partial kitchen remodel along with two bathroom renovations and added a partition wall to bedroom. Frank did an excellent job of submitting all the necessary paperwork required from the HOA and working in a condo building. His bid was fair and the final cost was within the expected amount. We would definitely recommend this company!",
      author: "Debbie F.",
      location: "Washington", // ⚠ no state/city listed in source data — verify this entry
      
      rating: 5,
    },
    {
      quote: "We needed work done as part of our backyard renovation - which included adding a cement pad for seating, re-stuccoing our block wall and adding a 3 ft vinyl privacy fence in top. Frank provided us with a quote and schedule. Project was started within a day of giving notice to proceed and finished a day early. He and his crew were on time and professional. Definitely would hire again.",
      author: "Mathew M.",
      location: "Thousand Oaks, CA",
      
      rating: 5,
    },
    {
      quote: "Frank replaced 3 old door knobs in my home and installed a utility shelf in the wash room. Even though these were smaller projects it still made a huge difference and I'm so thankful for Frank's attention to detail and quick work. I highly recommend Frank and will definitely continue to hire him for home repairs and upgrades. Thanks again, Frank!",
      author: "Jennifer N.",
      location: "Los Angeles, CA",
      
      rating: 5,
    },
    {
      quote: "We just finished having work done at our house from this team. I cannot say enough good things about both the company and the work that they did. They were professional, prompt, and their work was exceptional. My family is looking forward to the next time we need work done around the house so that we can call Meier Construction and know that it will be done correctly and add a great value.",
      author: "Chris W.",
      location: "Culver City, CA",
      
      rating: 5,
    },
    {
      quote: "We had water damaged drywalls that needed to be repaired in two areas (downstairs hallway and upstairs bathroom), and also some flooring work in the bathroom. We decided to choose Mier Construction because they can do both drywall and flooring. The best thing they could offer was to start the repairing right away. They did high quality job and always kept the area clean. They finished the job quickly as they promised. We are very satisfied.",
      author: "Yi W.",
      location: "Thousand Oaks, CA",
     
      rating: 5,
    },
  ];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "20+", label: "Years of Service" },
  { value: "5 ★", label: "Average Rating" },
];

const AboutTestimonials = () => {
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:site_name" content="Mier & Murphy Builders" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>

      {/* ── HERO with Lead Form ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Client testimonials for Mier & Murphy Builders in Thousand Oaks" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-40 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">WHAT OUR CLIENTS SAY</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Voices of{" "}
              <span className="text-primary">Real Homeowners</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg mb-8">
            Do not take our word for it. Hear from Thousand Oaks, Westlake Village, and Conejo Valley homeowners who have worked with Mier & Murphy Builders firsthand.
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
      {/* ── TESTIMONIALS GRID — Dark Section ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">Real Reviews from Real Homeowners</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-white">
              Trusted by <span className="text-primary">Conejo Valley Homeowners</span>
            </h2>
            <p className="font-sans text-sm text-white/50 text-center max-w-xl mx-auto mb-14">
              Every review represents a family whose home we've transformed with care, precision, and dedication.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.author} delay={i * 0.1}>
                <div className="group bg-white/[0.06] border border-white/10 rounded-2xl p-7 h-full flex flex-col hover:bg-white/[0.1] hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-serif text-sm font-bold text-white">{testimonial.author}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span className="font-sans text-xs text-white/50">{testimonial.location}</span>
                    </div>
                  
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS CHOOSE US — Light Section ── */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.06)" }} />
          <div className="absolute bottom-[-30%] right-[-5%] w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "hsl(145, 55%, 35% / 0.04)" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(145, 55%, 35%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase text-center mb-3 font-semibold">The Mier & Murphy Difference</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-4 text-foreground">
              Why Conejo Valley Homeowners <span className="text-primary">Choose Us</span>

            </h2>
            
            <div className="gold-divider mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Family-owned and family-operated in Thousand Oaks",
              "20 years of building experience",
              "IICRC S500 and S520 dual certified",
              "Direct insurance claim documentation support",
              "Free in-home estimates for all services",
              "Licensed California contractor, CA Lic. #1077044",
              "One team from remediation through rebuild",
              "HOA-experienced on balcony and deck projects,"
              
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground/80">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Dark Section ── */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Work With a <span className="text-primary">Family-Owned Contracto</span> You Can Trust
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Experience the honest work, real certifications, and family name that have made Mier & Murphy Builders a trusted contractor in Thousand Oaks and the Conejo Valley for two decades of building experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Get a Free Estimate
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonials;