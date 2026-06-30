import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const Contact = () => {
  useEffect(() => {
    // Load the AdvanceEdge form embed script once when this page mounts
    const existingScript = document.querySelector(
      'script[src="https://api.advanceedgellc.com/js/form_embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://api.advanceedgellc.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden pt-10">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact Mier & Murphy Builders" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/85 to-[hsl(220,20%,12%)]/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4 font-semibold">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Begin Your <span className="text-primary">Transformation</span>
            </h1>
            <p className="font-sans text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your property? Schedule a complimentary consultation 
              and let us bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-28">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-serif text-2xl font-bold mb-8">
                Contact <span className="text-primary">Information</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "(805) 555-0199", href: "tel:+18055550199" },
                  { icon: Mail, label: "Email", value: "info@mierandmurphy.com", href: "mailto:info@mierandmurphy.com" },
                  { icon: MapPin, label: "Location", value: "Thousand Oaks, California" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 7AM–6PM | Sat: 8AM–2PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="glass w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
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
                  {[
                    "Thousand Oaks (91360, 91362)",
                    "Westlake Village (91361, 91302)",
                    "Agoura Hills",
                    "Newbury Park",
                    "Oak Park",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2 font-sans text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form (AdvanceEdge embed) */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2}>
              <div className="luxury-card p-2 md:p-2">
                <iframe
                  src="https://api.advanceedgellc.com/widget/form/2NK7xMC2cHLB4WdlKzyu"
                  style={{ width: "100%", height: "950px", border: "none", borderRadius: "8px" }}
                  id="inline-2NK7xMC2cHLB4WdlKzyu"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="M&M Contact Form"
                  data-height="950"
                  data-layout-iframe-id="inline-2NK7xMC2cHLB4WdlKzyu"
                  data-form-id="2NK7xMC2cHLB4WdlKzyu"
                  title="M&M Contact Form"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;