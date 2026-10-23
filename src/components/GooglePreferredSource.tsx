import { Star } from "lucide-react";

const SITE_DOMAIN = "mierandmurphybuilders.com";
const PREFERRED_SOURCE_URL = `https://www.google.com/preferences/source?q=${SITE_DOMAIN}`;

type Props = {
  variant?: "card" | "compact";
};

/**
 * Lets visitors add the site as a Google "preferred source" in Top Stories.
 * Plain link — no scripts, no effect on page speed.
 */
const GooglePreferredSource = ({ variant = "card" }: Props) => {
  if (variant === "compact") {
    return (
      <a
        href={PREFERRED_SOURCE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-5 px-3.5 py-2 rounded-lg bg-white text-[#1f2937] text-xs font-sans font-semibold shadow-sm hover:bg-white/90 transition-colors"
      >
        <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
        Prefer us on Google
      </a>
    );
  }

  return (
    <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border bg-muted/50 p-5">
      <div className="flex items-start gap-3">
        <Star className="w-5 h-5 mt-0.5 flex-shrink-0 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
        <div>
          <p className="font-serif text-base font-bold">Found this useful?</p>
          <p className="font-sans text-sm text-muted-foreground">
            Add Mier &amp; Murphy Builders as a preferred source to see our articles more often in Google.
          </p>
        </div>
      </div>
      <a
        href={PREFERRED_SOURCE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 font-sans text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Add as preferred source
      </a>
    </div>
  );
};

export default GooglePreferredSource;
