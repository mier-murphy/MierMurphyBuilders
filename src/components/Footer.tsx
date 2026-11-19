import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import mml from "@/assets/mier-logo.webp";
import GooglePreferredSource from "@/components/GooglePreferredSource";

const serviceLinks = [
  { label: "Bathroom & kitchen remodeling", href: "/services/bathroom-kitchen-remodeling" },
  { label: "Water damage & mold remediation", href: "/services/water-damage-mold-remediation" },
  { label: "Drywall, plaster & stucco repair", href: "/services/drywall-plaster-stucco-repair" },
  { label: "Balcony & deck repair", href: "/services/balcony-deck-repair" },
  { label: "Commercial tenant improvement", href: "/services/commercial-tenant-improvement" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/about/testimonials" },
  { label: "Our Projects", href: "/projects" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="section-dark">
      {/* Top curve */}
      <div className="relative -mb-px bg-muted" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0 0Q720 120 1440 0V60H0Z" fill="hsl(220, 20%, 15%)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Mier & Murphy Builders home" className="inline-block">
              <img src={mml} alt="Mier & Murphy Builders" width={160} height={64} className="w-auto mb-4" loading="lazy" />
            </Link>
            <p className="text-sm font-sans text-white/60 leading-relaxed">
              Family-owned construction company in Thousand Oaks, with 20 years of building experience in remodeling, restoration, and repair.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              <a href="https://www.facebook.com/mierandmurphy" target="_blank" rel="noopener noreferrer" aria-label="Mier & Murphy Builders on Facebook" className="text-[#597C38] hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/mier.and.murphy.builders/" target="_blank" rel="noopener noreferrer" aria-label="Mier & Murphy Builders on Instagram" className="text-[#597C38] hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            <GooglePreferredSource variant="compact" />
          </div>

          {/* Services */}
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="font-serif text-lg text-white mb-6">Our Services</h2>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm font-sans text-white/60 hover:text-brand-yellow transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className="font-serif text-lg text-white mb-6">Quick Links</h2>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm font-sans text-white/60 hover:text-brand-yellow transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-serif text-lg text-white mb-6">Contact</h2>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+18059989082" className="text-sm font-sans text-white/60 hover:text-brand-yellow transition-colors">
                    (805) 998-9082
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:frank@mierconstruction.com" className="text-sm font-sans text-white/60 hover:text-brand-yellow transition-colors break-all">
                    frank@mierconstruction.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-sans text-white/60">Thousand Oaks, CA</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs font-sans text-white/70">
            © {new Date().getFullYear()} Mier &amp; Murphy Builders. All rights reserved. CA Lic. #1077044
          </p>
          <div className="flex items-center gap-2 text-xs font-sans text-white/70">
            <Link to="/privacy-policy" className="text-white/70 hover:text-brand-yellow">
              Privacy Policy
            </Link>
            <span className="text-brand-yellow" aria-hidden="true">•</span>
            <Link to="/terms-and-conditions" className="text-white/70 hover:text-brand-yellow">
              Terms and Conditions
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-white/70">
            <Link to="/contact#iirc" className="text-white/70 hover:text-brand-yellow">
              IICRC Certified
            </Link>
            <span className="text-brand-yellow" aria-hidden="true">•</span>
            <p className="text-white/70 text-xs sm:text-sm">
              Made with{" "}
              <span role="img" aria-label="fire">🔥</span>{" "}
              by{" "}
              <a href="https://advanceedgellc.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
                AdvanceEdge
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;