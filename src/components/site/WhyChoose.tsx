import { CheckCircle2, XCircle, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { DoodleSparkle } from "./Doodles";

export function WhyChoose() {
  const { whyChoose } = siteContent;

  const comparisons = [
    {
      parameter: "Batch Size & Attention",
      premier: "Small batches (max 15–20) for genuine personal attention",
      others: "Overcrowded batches (40–60+) where students get lost",
    },
    {
      parameter: "Teaching Methodology",
      premier: "Concept-first derivation, logical problem-solving & real examples",
      others: "Rote memorization and passive board-copying",
    },
    {
      parameter: "Evaluation & Testing",
      premier: "Weekly Saturday diagnostic tests with written feedback",
      others: "Irregular tests with little to no performance tracking",
    },
    {
      parameter: "Study Material & Notes",
      premier: "Structured chapter notes, formula sheets & 10-year question banks",
      others: "Incomplete photocopies or unguided textbook reading",
    },
    {
      parameter: "Doubt Clearance",
      premier: "Daily dedicated 1-on-1 doubt sessions after every lecture",
      others: "Doubts left pending or rushed due to lack of time",
    },
    {
      parameter: "Parent Communication",
      premier: "Regular WhatsApp updates, test reports & parent-teacher meetings",
      others: "Minimal communication until final exam results",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative bg-white dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE PREMIER ADVANTAGE"
          title="Why Choose Premier Coaching?"
          subtitle="See how our student-first standard compares to traditional crowded tuitions and creates a proven environment for academic success."
          align="center"
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* ==================== LEFT COLUMN: COMPARATIVE BENCHMARK TABLE ==================== */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33]/90 shadow-md dark:shadow-2xl backdrop-blur-xl">
                {/* Header row */}
                <div className="grid grid-cols-12 gap-2 bg-slate-100 dark:bg-[#081426] p-3.5 sm:p-4 border-b border-slate-200 dark:border-white/10">
                  <div className="col-span-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Feature
                  </div>
                  <div className="col-span-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#d97706] dark:text-[#f3ba2f] flex items-center gap-1.5">
                    <Sparkles className="size-3.5" /> Premier Coaching
                  </div>
                  <div className="col-span-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Other Tuitions
                  </div>
                </div>

                {/* Comparison Rows */}
                <div className="divide-y divide-slate-100 dark:divide-white/5">
                  {comparisons.map((item, idx) => (
                    <div
                      key={item.parameter}
                      className={`grid grid-cols-12 gap-2 p-3.5 sm:p-4 text-xs sm:text-sm transition-colors hover:bg-slate-50 dark:hover:bg-white/5 ${
                        idx % 2 === 0
                          ? "bg-white dark:bg-[#0c1a33]/60"
                          : "bg-slate-50/60 dark:bg-[#081426]/60"
                      }`}
                    >
                      {/* Parameter */}
                      <div className="col-span-4 font-bold text-slate-900 dark:text-white flex items-center">
                        {item.parameter}
                      </div>

                      {/* Premier Standard (Highlighted in gold) */}
                      <div className="col-span-5 font-medium text-slate-800 dark:text-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-[#d97706] dark:text-[#f3ba2f] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item.premier}</span>
                      </div>

                      {/* Ordinary Coaching */}
                      <div className="col-span-3 text-slate-400 flex items-start gap-1.5">
                        <XCircle className="size-4 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-xs leading-snug">{item.others}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Sibling Discount Banner inside table */}
                <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#081426] border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-lg bg-[#f3ba2f] text-[#071328] text-xs font-bold shadow-xs">
                      %
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Special 50% Tuition Fee Discount for Siblings Enrolling Together!
                    </span>
                  </div>
                  <a
                    href="#admission"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d97706] dark:text-[#f3ba2f] hover:underline shrink-0"
                  >
                    <span>Claim Offer</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ==================== RIGHT COLUMN: REAL STUDENT COMMUNITY SHOWCASE ==================== */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.15} className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Photo Frame */}
              <div className="overflow-hidden rounded-3xl border-2 border-slate-200 dark:border-white/15 bg-white dark:bg-[#0c1a33] shadow-xl dark:shadow-2xl">
                <img
                  src={whyChoose.photo.src}
                  alt={whyChoose.photo.alt}
                  width={640}
                  height={480}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Photo footer tag */}
                <div className="bg-slate-900 dark:bg-[#050e1d] p-4 text-white flex items-center justify-between border-t border-slate-800 dark:border-white/10">
                  <div>
                    <span className="block text-[10px] font-bold text-[#f3ba2f] uppercase tracking-wider">
                      Student Community
                    </span>
                    <span className="block font-serif text-sm font-bold text-white">
                      Enthusiastic Learners at Premier Coaching
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Dubagga Center</span>
                </div>
              </div>

              {/* Floating Shield Badge: Trusted Learning Partner Since 2018 */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 z-20 flex items-center gap-3 rounded-2xl bg-[#f3ba2f] p-4 text-[#071328] shadow-2xl border-2 border-white/20 transition-transform hover:scale-105">
                <ShieldCheck className="size-7 text-[#071328] shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#071328]/80 leading-none">
                    Since 2018
                  </p>
                  <p className="font-serif text-sm font-bold text-[#071328] leading-tight mt-0.5">
                    Dubagga's Most Trusted Coaching
                  </p>
                </div>
              </div>

              {/* Floating Sparkle Doodle */}
              <DoodleSparkle className="absolute -top-4 -right-3 size-8 text-[#f3ba2f] animate-bounce" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
