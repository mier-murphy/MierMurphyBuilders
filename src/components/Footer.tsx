import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import jgcLogo from "@/assets/jgc-logo.avif";
import mml from "@/assets/mier-logo.webp";
const Footer = () => {
  return (
    <footer className="section-dark">
      {/* Top curve */}
      <div className="relative -mb-px bg-muted">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0 0Q720 120 1440 0V60H0Z" fill="hsl(220, 20%, 15%)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src={mml} alt="Company Logo" className=" w-auto mb-4" />
            <p className="text-sm font-sans text-white/60 leading-relaxed">
            Family-owned construction company in Thousand Oaks, with 20 years of building experience in remodeling, restoration, and repair. 
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
              { label: "Bathroom & kitchen remodeling", href: "/services/bathroom-kitchen-remodeling" },
              { label: "Water damage & mold remediation", href: "/services/water-damage-mold-remediation" },
              { label: "Drywall, plaster & stucco repair", href: "/services/drywall-plaster-stucco-repair" },
              { label: "Balcony & deck repair", href: "/services/balcony-deck-repair" },
              { label: "Commercial tenant improvement", href: "/services/commercial-tenant-improvement" }].
              map((item) =>
              <li key={item.label}>
                  <Link
                  to={item.href}
                  className="text-sm font-sans text-white/50 hover:text-brand-yellow transition-colors duration-300">

                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
              { label: "Our Legacy", href: "/about/legacy" },
              { label: "Our Team", href: "/about/team" },
              { label: "Testimonials", href: "/about/testimonials" },
              { label: "Our Projects", href: "/projects" },
              { label: "Areas We Serve", href: "/areas" },
              { label: "Contact Us", href: "/contact" }].
              map((item) =>
              <li key={item.label}>
                  <Link
                  to={item.href}
                  className="text-sm font-sans text-white/50 hover:text-brand-yellow transition-colors duration-300">

                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                <a href="tel:+18059989082" className="text-sm font-sans text-white/50 hover:text-brand-yellow transition-colors">
                  (805) 998-9082
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                <a href="mailto:frank@mierconstruction.com" className="text-sm font-sans text-white/50 hover:text-brand-yellow transition-colors">
                  frank@mierconstruction.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                <span className="text-sm font-sans text-white/50">
                  Thousand Oaks, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-white/40">
            © {new Date().getFullYear()} Mier & Murphy Builders. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-sans text-white/40">
            <span>              <a
                href="/PrivacyPolicy"
                className=" text-white/40 hover:text-brand-yellow"
              >
Privacy Policy              </a></span>
            <span className="text-brand-yellow">•</span>
            <span><a
                href="/TermsAndConditions"
                className="text-white/40   hover:text-brand-yellow"
              >
Terms Of Conditions              </a></span>
          
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-white/40">
            <span>IICRC Certified</span>
            <span className="text-brand-yellow">•</span>
            <span>CA Lic. #1077044</span>
            <span className="text-brand-yellow">•</span>
            <span>Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;