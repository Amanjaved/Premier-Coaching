import { siteContent } from "@/data/siteContent";
import officialLogo from "@/assets/logo.png";

/**
 * Official Premier Coaching Brand Logo.
 * Uses the official local asset exclusively, supporting both light and dark backgrounds.
 */
export function Logo({
  light = false,
  className = "",
  showText = true,
}: {
  light?: boolean;
  className?: string;
  showText?: boolean;
}) {
  const logoSrc = siteContent.brand.logoSrc || officialLogo;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white p-1 transition-all ${
          light ? "shadow-sm ring-1 ring-white/20" : "shadow-xs ring-1 ring-slate-200"
        }`}
      >
        <img
          src={logoSrc}
          alt="Premier Coaching official logo"
          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          width={48}
          height={48}
          loading="eager"
        />
      </span>
      {showText && (
        <span className="leading-tight">
          <span
            className={`block font-display text-lg font-extrabold tracking-tight sm:text-xl ${
              light ? "text-white" : "text-navy"
            }`}
          >
            Premier Coaching
          </span>
          <span
            className={`block text-[0.65rem] font-bold uppercase tracking-wider ${
              light ? "text-gold" : "text-crimson"
            }`}
          >
            Learn • Practice • Succeed
          </span>
        </span>
      )}
    </span>
  );
}
