import { useState } from "react";
import { Send, Shield, Award, Clock } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { z } from "zod";
import ScrollReveal from "./ScrollReveal";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone is too long")
    .regex(/^[\d\s\-\(\)\+\.]+$/, "Please enter a valid phone number"),
  email: z.string().trim().max(255, "Email is too long")
    .refine((val) => val === "" || z.string().email().safeParse(val).success, "Please enter a valid email"),
  service: z.string().max(50).optional(),
});

interface LeadCaptureFormProps {
  variant?: "compact" | "full";
  className?: string;
}

const LeadCaptureForm = ({ variant = "compact", className = "" }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0]?.message || "Please check your input.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll contact you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", service: "" });
      setIsSubmitting(false);
    }, 800);
  };

  const inputClass =
    "w-full   rounded-xl px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={className}
    >
            <ScrollReveal delay={0.2}>
              <div className="luxury-card p-2 md:p-2 bg-[#1F242EF2] border-none">
                <iframe
                  src="https://api.advanceedgellc.com/widget/form/RPCz6XYtpV7o0WxW0b7C"
                  style={{ width: "100%", height: "620px", border: "none", borderRadius: "8px" }}
                  id="inline-RPCz6XYtpV7o0WxW0b7C" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="M&M Home ContactForm"
                  data-height="582"
                  data-layout-iframe-id="inline-RPCz6XYtpV7o0WxW0b7C"
                  data-form-id="RPCz6XYtpV7o0WxW0b7C"
                  title="M&M Home ContactForm"
                />
              </div>
            </ScrollReveal>
    </motion.div>
  );
};

export default LeadCaptureForm;
