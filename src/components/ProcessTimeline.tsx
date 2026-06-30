import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  heading: string;
  headingHighlight?: string;
  subheading: string;
  description: string;
  variant?: "light" | "dark";
}

const ProcessTimeline = ({ steps, heading, headingHighlight, subheading, description, variant = "light" }: ProcessTimelineProps) => {
  const isDark = variant === "dark";
  return (
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.4em] text-primary uppercase mb-4">{subheading}</p>
          <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : ""}`}>
            {heading}{headingHighlight && <span className="text-primary">{headingHighlight}</span>}
          </h2>
          <p className={`font-sans text-sm max-w-2xl mx-auto leading-relaxed ${isDark ? "text-white/50" : "text-muted-foreground"}`}>{description}</p>
        </div>
      </ScrollReveal>

      {/* Horizontal connector bar – desktop only */}
      <div className="hidden md:block relative mb-8">
        <div className={`absolute top-5 left-[8%] right-[8%] h-px ${isDark ? "bg-white/10" : "bg-border/50"}`} />
        <motion.div
          className="absolute top-5 left-[8%] h-px bg-gradient-to-r from-primary via-primary/60 to-primary"
          initial={{ width: "0%" }}
          whileInView={{ width: "84%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        <div className="flex justify-between px-[5%]">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.4, type: "spring", stiffness: 250 }}
              className={`relative z-10 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center shadow-[0_0_12px_-2px_hsl(43,64%,52%,0.4)] ${isDark ? "bg-[hsl(220,20%,15%)]" : "bg-background"}`}
            >
              <span className="font-sans text-xs font-bold text-primary">{step.step}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${
        steps.length <= 5 
          ? "lg:grid-cols-5"
          : steps.length === 6 
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4"
      }`}>
        {steps.map((step, i) => (
          <ScrollReveal key={step.step}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`group relative h-full rounded-lg border p-6 transition-all duration-300 ${
                isDark
                  ? "border-white/10 bg-white/[0.06] hover:border-primary/30 hover:bg-white/[0.1]"
                  : "border-border/40 hover:border-primary/40 bg-card hover:shadow-[0_20px_50px_-15px_hsla(43,64%,52%,0.12)]"
              }`}
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                  <span className="font-sans text-sm font-bold text-primary">{step.step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden flex-1 h-px bg-border/30" />
                )}
              </div>

              <h3 className={`font-serif text-base font-bold mb-2 group-hover:text-primary transition-colors duration-300 ${isDark ? "text-white" : "text-foreground"}`}>
                {step.title}
              </h3>
              <p className={`font-sans text-sm leading-relaxed ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
                {step.desc}
              </p>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
