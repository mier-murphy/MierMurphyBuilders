import { useEffect } from "react";

interface LeadCaptureFormProps {
  variant?: "compact" | "full";
  className?: string;
}

const LeadCaptureForm = ({ variant = "compact", className = "" }: LeadCaptureFormProps) => {
  useEffect(() => {
    // Skip re-injecting if the script is already present and running —
    // avoids re-triggering GHL's full initialization chain (the 8-request
    // stcdn.leadconnectorhq.com/_preview/*.js sequence) on every mount.
    const existing = document.querySelector(
      'script[src="https://api.advanceedgellc.com/js/form_embed.js"]'
    );
    if (existing) return;

    // Defer injection until the browser is idle (or after a short fallback
    // delay), so this doesn't compete with the hero image, fonts, and app
    // bundle for bandwidth during the critical LCP window. The iframe still
    // has its explicit height set below, so nothing shifts once it loads.
    const load = () => {
      const script = document.createElement("script");
      script.src = "https://api.advanceedgellc.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(load, { timeout: 2000 });
      return () => (window as any).cancelIdleCallback?.(id);
    } else {
      const timer = setTimeout(load, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className="luxury-card p-2 md:p-2 w-full overflow-visible shadow-none">
        <iframe
          src="https://api.advanceedgellc.com/widget/form/P3nuSM5VvQSxnsiO8vPP"
          style={{ width: "100%", height: "950px", border: "none", borderRadius: "8px" }}
          id="inline-P3nuSM5VvQSxnsiO8vPP"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="M&M Contact Form"
          data-height="950"
          data-layout-iframe-id="inline-P3nuSM5VvQSxnsiO8vPP"
          data-form-id="P3nuSM5VvQSxnsiO8vPP"
          title="M&M Contact Form"
        />
      </div>
    </div>
  );
};

export default LeadCaptureForm;