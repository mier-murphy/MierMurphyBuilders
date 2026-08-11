import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";

interface ComingSoonProps {
  serviceName: string;
  eyebrow?: string;
  description: string;
  icon: LucideIcon;
}

const ComingSoon = ({
  serviceName,
  eyebrow = "Service Page Under Construction",
  description,
  icon: Icon,
}: ComingSoonProps) => {
  return (
    <>
      <Helmet>
        <title>{serviceName} | Coming Soon | Mier & Murphy Builders</title>
        <meta
          name="description"
          content={`Our ${serviceName} page is currently being built. Contact Mier & Murphy Builders directly for details on this service.`}
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background px-6 py-32">
        {/* Blueprint grid backdrop — faint drafting-table grid, a nod to the
            plans-and-permits world of a builder rather than a generic
            abstract background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Coarser guide lines every 4th cell, like blueprint major gridlines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-xl"
        >
          {/* Permit placard — corner bolts, dashed border, mimicking a
              real job-site notice board */}
          <div className="relative border-2 border-dashed border-primary/40 bg-background/80 backdrop-blur-sm rounded-2xl px-8 py-12 sm:px-12 sm:py-14 text-center shadow-xl">
            {/* Corner bolts */}
            <span className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-primary/30" />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-primary/30" />
            <span className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-primary/30" />
            <span className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-primary/30" />

            <p className="font-sans text-[11px] tracking-[0.3em] text-primary uppercase font-bold mb-6">
              {eyebrow}
            </p>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
              {serviceName}
            </h1>

            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
              {description}
            </p>

            <div className="gold-divider mx-auto mb-8 max-w-[120px]" />

            <p className="font-sans text-xs text-muted-foreground mb-8 uppercase tracking-wider">
              This page is being drafted — the service itself is available today
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-sans font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md w-full sm:w-auto justify-center"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-foreground/80 hover:text-primary px-6 py-3 transition-colors w-full sm:w-auto justify-center"
              >
                See Our Completed Work
              </Link>
            </div>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-primary transition-colors mx-auto w-full justify-center"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default ComingSoon;