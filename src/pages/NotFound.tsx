import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

const PHONE_HREF = "tel:+18059989082";
const PHONE_DISPLAY = "(805) 998-9082";

const popularLinks = [
  { name: "Bathroom & Kitchen Remodeling", href: "/services/bathroom-kitchen-remodeling" },
  { name: "Water Damage & Mold Remediation", href: "/services/water-damage-mold-remediation" },
  { name: "Drywall, Plaster & Stucco Repair", href: "/services/drywall-plaster-stucco-repair" },
  { name: "Balcony & Deck Repair", href: "/services/balcony-deck-repair" },
  { name: "Commercial Tenant Improvement", href: "/services/commercial-tenant-improvement" },
  { name: "Our Projects", href: "/projects" },
  { name: "Areas We Serve", href: "/areas" },
  { name: "Blog", href: "/blog" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }

    // Report broken links to Google Analytics so they can be found and fixed.
    const { gtag } = window as Window & { gtag?: (...args: unknown[]) => void };
    gtag?.("event", "page_not_found", {
      page_path: location.pathname,
      page_referrer: document.referrer || undefined,
    });
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Mier & Murphy Builders</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="bg-muted pt-40 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase font-semibold mb-3">
            Error 404
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            We Couldn't Find That Page
          </h1>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
            The page may have moved or the link may be out of date. Try one of the pages below, or
            contact us and we will point you in the right direction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Return to Home
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans text-sm font-semibold text-primary border-2 border-primary/20 hover:bg-primary/5 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <h2 className="font-serif text-xl font-bold mb-4 text-foreground">Popular Pages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {popularLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="flex items-center justify-between gap-3 bg-background border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground/80 hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NotFound;