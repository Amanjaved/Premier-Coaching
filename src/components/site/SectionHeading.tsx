import { Reveal } from "./Reveal";
import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  rightElement,
}: {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  light?: boolean;
  align?: "center" | "left" | "split";
  rightElement?: ReactNode;
}) {
  const badgeClasses =
    "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-widest uppercase mb-2.5 border backdrop-blur-md transition-all shadow-xs border-amber-500/25 bg-amber-500/10 text-amber-800 dark:border-amber-400/35 dark:bg-amber-400/10 dark:text-[#f3ba2f]";

  if (align === "split") {
    return (
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <Reveal className="max-w-2xl">
          {eyebrow && (
            <div className={badgeClasses}>
              <span className="size-1.5 rounded-full bg-[#f3ba2f] animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          )}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white">
            {title}
          </h2>
        </Reveal>

        {(subtitle || rightElement) && (
          <Reveal
            delay={0.1}
            className="max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 lg:text-right"
          >
            {subtitle && (
              <p className="text-sm sm:text-base leading-relaxed font-normal text-slate-600 dark:text-slate-300">
                {subtitle}
              </p>
            )}
            {rightElement}
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center flex flex-col items-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && (
        <div className={badgeClasses}>
          <span className="size-1.5 rounded-full bg-[#f3ba2f] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base leading-relaxed font-normal max-w-xl text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}

      {/* Elegant accent line */}
      <div
        className={`mt-5 flex items-center gap-1.5 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
        aria-hidden="true"
      >
        <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-[#f3ba2f] to-amber-500" />
        <span className="size-1.5 rounded-full bg-[#f3ba2f]" />
        <span className="h-0.5 w-3 rounded-full bg-slate-300 dark:bg-white/20" />
      </div>
    </Reveal>
  );
}
