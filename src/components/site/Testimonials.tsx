import { Quote, Star, CheckCircle2, HeartHandshake } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Testimonials() {
  if (!siteContent.showTestimonials || !siteContent.testimonials.length) return null;

  return (
    <section className="relative bg-slate-50 dark:bg-[#081426] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300">
      {/* Subtle ambient light */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="PARENT VOICES &amp; TRUST"
          title="What Parents &amp; Students Say"
          subtitle="Real feedback from families in Dubagga who experienced the Premier Coaching standard of discipline and concept clarity."
          align="center"
        />

        {/* Community Trust Metric Bar */}
        <div className="mt-7 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33]/90 px-4 sm:px-6 py-2 backdrop-blur-md shadow-sm dark:shadow-xl text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
            <span className="flex items-center gap-1.5 text-amber-700 dark:text-[#f3ba2f]">
              <HeartHandshake className="size-4 text-[#d97706] dark:text-[#f3ba2f]" />
              <span>Trusted by 500+ Families in Dubagga</span>
            </span>
            <span className="hidden sm:inline-block h-3.5 w-px bg-slate-200 dark:bg-white/20" />
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-200">
              <span className="flex text-[#d97706] dark:text-[#f3ba2f]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </span>
              <span className="font-serif font-bold text-[#d97706] dark:text-[#f3ba2f]">4.9 / 5.0</span>
              <span className="text-slate-500 dark:text-slate-400 font-normal">(Verified Reviews)</span>
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <Reveal key={t.name + i} delay={i * 0.08}>
                <figure className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1a33]/85 p-6 sm:p-7 shadow-sm hover:shadow-md dark:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40">
                  {/* Card Header: Initial Badge + Star Rating */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 border border-amber-500/25 dark:border-amber-400/30 text-xs font-serif font-bold text-[#d97706] dark:text-[#f3ba2f] shadow-xs">
                          {initials}
                        </span>
                        <div>
                          <span className="font-serif block text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                            {t.name}
                          </span>
                          <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            {t.relation}
                          </span>
                        </div>
                      </div>

                      <span className="grid size-8 place-items-center rounded-xl bg-amber-500/10 dark:bg-amber-400/10 text-[#d97706] dark:text-[#f3ba2f] transition-transform duration-300 group-hover:scale-110">
                        <Quote className="size-3.5" />
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="mt-4 flex items-center gap-1 text-[#d97706] dark:text-[#f3ba2f]">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="size-3.5 fill-current" />
                      ))}
                    </div>

                    {/* Review Body */}
                    <blockquote className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                      "{t.text}"
                    </blockquote>
                  </div>

                  {/* Card Footer: Verified Parent Badge */}
                  <figcaption className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-bold text-amber-800 dark:text-[#f3ba2f] bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/25 dark:border-amber-400/25 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="size-3.5 text-[#d97706] dark:text-[#f3ba2f]" />
                      <span>Verified Feedback</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">Dubagga Center</span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
