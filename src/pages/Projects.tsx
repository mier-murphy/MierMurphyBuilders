import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import projectInterior from "@/assets/project-interior.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import projectRestoration from "@/assets/project-restoration.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectMold from "@/assets/project-mold.jpg";
import heroCraftsmanship from "@/assets/hero-craftsmanship.jpg";

const categories = ["All", "Interior", "Exterior", "Restoration"];

const projects = [
  { title: "Westlake Village Estate Living Room", category: "Interior", image: projectInterior, sqft: "3,200", timeline: "6 weeks" },
  { title: "Thousand Oaks Mediterranean Facade", category: "Exterior", image: projectExterior, sqft: "4,800", timeline: "8 weeks" },
  { title: "Emergency Water Restoration", category: "Restoration", image: projectRestoration, sqft: "2,100", timeline: "3 weeks" },
  { title: "Luxury Master Bathroom", category: "Interior", image: projectBathroom, sqft: "450", timeline: "4 weeks" },
  { title: "Mold Remediation & Rebuild", category: "Restoration", image: projectMold, sqft: "1,800", timeline: "5 weeks" },
  { title: "Venetian Plaster Feature Wall", category: "Interior", image: heroCraftsmanship, sqft: "800", timeline: "2 weeks" },
  { title: "Stucco Repair & Repaint", category: "Exterior", image: projectExterior, sqft: "3,500", timeline: "4 weeks" },
  { title: "Whole-Home Water Damage Recovery", category: "Restoration", image: projectRestoration, sqft: "3,800", timeline: "8 weeks" },
  { title: "Custom Drywall & Coffered Ceiling", category: "Interior", image: projectInterior, sqft: "1,200", timeline: "3 weeks" },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCraftsmanship} alt="Mier & Murphy Builders project portfolio" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/80 to-[hsl(220,20%,12%)]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <span className="font-sans text-xs font-semibold text-primary tracking-wide">PORTFOLIO</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white">
              Our Signature <span className="text-primary">Portfolio</span>
            </h1>
            <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-lg">
              Every project tells a story of dedication, expertise, and uncompromising quality.
              Explore our work across Thousand Oaks and Westlake Village.
            </p>
          </motion.div>
          <LeadCaptureForm variant="full" />
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-lg font-sans text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.title + i} delay={i * 0.05}>
                <div className="luxury-card group cursor-pointer">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-sans text-xs text-primary tracking-wider uppercase mb-2">Project Details</p>
                        <p className="font-sans text-sm text-muted-foreground">{project.sqft} sq ft • {project.timeline}</p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-3 py-1 glass rounded-full text-xs font-sans text-primary mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "hsl(220, 20%, 15%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-divider mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
              Let's Start <span className="text-primary">Your Project</span>
            </h2>
            <p className="font-sans text-[15px] text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Every portfolio piece began with a conversation. Share your vision with us and 
              receive a complimentary consultation and detailed estimate.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-sans text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
            >
              Get a Free Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Projects;
