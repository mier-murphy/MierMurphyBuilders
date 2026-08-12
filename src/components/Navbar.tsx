import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, MapPin, ArrowRight } from "lucide-react";
import jgcLogo from "@/assets/jgc-logo.avif";
import mml from "@/assets/mier-logo.webp";

const megaMenuAreas = {
  primary: {
    label: "Core Service Areas",
    items: [
      { label: "Thousand Oaks", zip: "91360", href: "/areas/91360" },
      { label: "Newbury Park / Westlake", zip: "91362", href: "/areas/91362" },
      { label: "Westlake Village", zip: "91361", href: "/areas/91361" },
      { label: "Ventura County", zip: "91319", href: "/areas/91319" },

      
    ],
  },
  secondary: {
    label: "Surrounding Areas",
    items: [
      { label: "Newbury Park", zip: "91320", href: "/areas/91320" },
      { label: "Agoura Hills", zip: "91301", href: "/areas/91301" },
      { label: "Oak Park", zip: "91377", href: "/areas/91377" },
      { label: "Moorpark", zip: "93021", href: "/areas/93021" },
      { label: "Simi Valley", zip: "93062", href: "/areas/93062" },
    ],
  },
  premium: {
    label: "Premium & Extended",
    items: [
      { label: "Calabasas / Westlake", zip: "91302", href: "/areas/91302" },
      { label: "Malibu", zip: "90265", href: "/areas/90265" },
      { label: "Chatsworth", zip: "91311", href: "/areas/91311" },
      { label: "Woodland Hills", zip: "91367", href: "/areas/91367" },
      { label: "Woodland Hills South", zip: "91364", href: "/areas/91364" },
      { label: "Los Angeles", zip: "90001", href: "/areas/90001" },
    ],
  },
};

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/legacy",
    children: [
      { label: "Our Legacy & Craftsmanship", href: "/about/legacy" },
      { label: "The Team Behind Perfection", href: "/about/team" },
      { label: "Voices of Excellence", href: "/about/testimonials" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Bathroom & kitchen remodeling", href: "/services/bathroom-kitchen-remodeling" },
      { label: "Water damage & mold remediation", href: "/services/water-damage-mold-remediation" },
      { label: "Drywall, plaster & stucco repair", href: "/services/drywall-plaster-stucco-repair" },
      { label: "Balcony & deck repair", href: "/services/balcony-deck-repair" },
      { label: "Commercial tenant improvement", href: "/services/commercial-tenant-improvement" },
      
    ],
  },
  {
    label: "Areas We Serve",
    href: "/areas",
    megaMenu: true,
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    // IMPORTANT: unlock body scroll synchronously here, not just via the
    // isOpen-cleanup effect below. If the mobile menu was open, the body is
    // still `overflow: hidden` at this exact moment (the cleanup for that
    // only fires on the NEXT render, once `isOpen` has actually flipped to
    // false). Layout.tsx's own scroll-reset effect also runs on this same
    // `location` change, and if it runs while the body is still locked,
    // `window.scrollTo(0, 0)` is a no-op — the page then "unlocks" a beat
    // later still sitting at the old scroll position, which is what made
    // navigation land on the footer/mid-page on mobile only (desktop never
    // locks body scroll, so it never hit this race).
    document.body.style.overflow = "";
  }, [location]);

  // Lock body scroll while the mobile menu is open so the page behind
  // it doesn't scroll along with (or instead of) the menu's own list.
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  const isHome = location.pathname === "/";
  const navTextColor = isHome && !scrolled ? "text-white" : "text-foreground";
  const navHoverColor = "hover:text-primary";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
        ? "bg-background/95 backdrop-blur-md py-3 shadow-md border-b border-border"
          : isHome
          ? "bg-background/70 py-4"
          : "bg-background py-4 border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={mml} alt="Company Logo" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={link.megaMenu ? "static" : "relative"}
              onMouseEnter={() => (link.children || link.megaMenu) && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.href === "#" ? (
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-sans font-semibold tracking-wide transition-colors duration-300 ${
                    scrolled || !isHome ? "text-foreground/80" : "text-foreground/80"
                  } ${navHoverColor}`}
                >
                  {link.label}
                  {(link.children || link.megaMenu) && <ChevronDown className="w-3 h-3" />}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-sans font-semibold tracking-wide transition-colors duration-300 ${
                    location.pathname === link.href || location.pathname.startsWith(link.href.replace(/\/$/, '') + '/')
                      ? "text-primary"
                      : scrolled || !isHome ? "text-foreground/80" : "text-foreground/80"
                  } ${navHoverColor}`}
                >
                  {link.label}
                  {(link.children || link.megaMenu) && <ChevronDown className="w-3 h-3" />}
                </Link>
              )}

              {/* Standard Dropdown */}
              <AnimatePresence>
                {link.children && !link.megaMenu && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 min-w-[280px]"
                  >
                    <div className="bg-background rounded-xl p-2 shadow-xl border border-border">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-sm font-sans text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mega Menu */}
              <AnimatePresence>
                {link.megaMenu && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="fixed left-0 right-0 pt-2"
                    style={{ top: scrolled ? '56px' : '72px' }}
                  >
                    <div className="max-w-5xl mx-auto px-6">
                      <div className="bg-background rounded-2xl p-6 shadow-2xl border border-border">
                        <div className="grid grid-cols-3 gap-8">
                          {Object.entries(megaMenuAreas).map(([key, group]) => (
                            <div key={key}>
                              <p className="font-sans text-[10px] tracking-[0.3em] text-primary uppercase mb-4 font-bold">
                                {group.label}
                              </p>
                              <div className="space-y-1">
                                {group.items.map((area) => (
                                  <Link
                                    key={area.zip}
                                    to={area.href}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-sans text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 group/item"
                                  >
                                    <span className="flex items-center gap-2.5">
                                      <MapPin className="w-3.5 h-3.5 text-primary/50 group-hover/item:text-primary transition-colors" />
                                      {area.label}
                                    </span>
                                    <span className="text-xs text-muted-foreground font-mono">{area.zip}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                          <p className="font-sans text-xs text-muted-foreground">
                            Serving the Conejo Valley, San Fernando Valley & Malibu Coast
                          </p>
                          <Link
                            to="/areas"
                            className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-primary hover:text-primary/80 transition-colors group/all"
                          >
                            View All Areas
                            <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18059989082"
            className={`flex items-center gap-2 text-sm font-sans font-medium transition-colors ${
              scrolled || !isHome ? "text-muted-foreground hover:text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            <Phone className="w-4 h-4" />+
            (805) 998-9082
          </a>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-sans font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled || !isHome ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            {/*
              FIX: this whole block (list + CTA) is now ONE flex column
              capped to the remaining viewport height
              (calc(100vh - header offset)). The nav list is flex-1 with
              min-h-0 so it's the part that shrinks and scrolls
              (overflow-y-auto), while the CTA is flex-shrink-0 so it's
              always reserved space and always visible.

              Previously the list had its OWN max-h independent of the
              CTA's height, so on shorter screens the two could together
              exceed the viewport. Since the whole menu lives inside a
              position:fixed header (not the normal page flow), that
              overflow had no way to scroll into view — it just got cut
              off below the screen, which is why "Contact" (the last
              plain link, right above the CTA) and/or the CTA itself
              could appear missing or overlapped on mobile.
            */}
            <div
              className="flex flex-col"
              style={{ maxHeight: scrolled ? "calc(100vh - 72px)" : "calc(100vh - 88px)" }}
            >
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      className="block py-3 text-lg font-serif text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    {link.megaMenu && (
                      <div className="pl-4 space-y-3 pb-2">
                        {Object.entries(megaMenuAreas).map(([key, group]) => (
                          <div key={key}>
                            <p className="text-[10px] tracking-[0.2em] text-primary uppercase font-bold font-sans py-1">{group.label}</p>
                            {group.items.map((area) => (
                              <Link
                                key={area.zip}
                                to={area.href}
                                className="flex items-center justify-between py-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                              >
                                <span>{area.label}</span>
                                <span className="text-xs font-mono text-muted-foreground/60">{area.zip}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA — always reserved/visible space, never pushed off-screen */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-border bg-background">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-sans font-semibold"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;