import {
  Lightbulb,
  ClipboardCheck,
  BookOpen,
  Medal,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  FileText,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Highlights() {
  return (
    <section
      id="highlights"
      className="relative bg-slate-50 dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background subtle glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHY PREMIER COACHING"
          title="Designed for Academic Excellence"
          subtitle="Explore the structural advantages that help students build unshakeable fundamentals, improve grades, and excel in board exams."
          align="center"
        />

        {/* ==================== MODERN BENTO GRID ==================== */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: ANCHOR HERO CARD (Spans 2 columns on lg) */}
          <Reveal className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100/80 dark:from-[#0c1a33] dark:via-[#081426] dark:to-[#050e1d] p-6 sm:p-8 text-slate-800 dark:text-white shadow-lg dark:shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all">
              {/* Top ambient radial glow */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-amber-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 dark:bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 backdrop-blur-md">
                    <Sparkles className="size-3.5" /> Flagship Strength
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                    01 / ADVANTAGE
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  Experienced &amp; Dedicated Subject Specialists
                </h3>

                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal max-w-2xl">
                  Unlike coaching centers where a single teacher handles multiple unrelated
                  subjects, Premier Coaching features dedicated mentors with post-graduate
                  qualifications (M.Sc., LL.M, B.Pharma) for Physics, Chemistry, Mathematics,
                  Biology, and English.
                </p>
              </div>

              {/* Micro-Features: Subject Badges */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Dedicated Mentors For:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Physics (Mechanics & Optics)",
                    "Mathematics (Algebra & Calculus)",
                    "Chemistry (Organic & Inorganic)",
                    "Biology (Botany & Physiology)",
                    "English (Grammar & Writing)",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-white shadow-xs backdrop-blur-xs hover:border-amber-400/40 transition-colors"
                    >
                      <CheckCircle2 className="size-3.5 text-[#d97706] dark:text-[#f3ba2f]" />
                      <span>{subject}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: CONCEPT-FIRST PEDAGOGY */}
          <Reveal delay={0.08} className="lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white dark:bg-[#0c1a33]/85 p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 shadow-xs">
                    <Lightbulb className="size-5" strokeWidth={2.4} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    02 / PEDAGOGY
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Concept-Based Teaching
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  We demystify challenging theories with intuitive everyday analogies, live
                  numerical problem-solving, and formula derivation rather than rote memorization.
                </p>
              </div>

              {/* Progress visual pill */}
              <div className="mt-5 rounded-2xl bg-slate-50 dark:bg-[#081426] p-3.5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-white">
                  <span>Focus on Core Logic</span>
                  <span className="text-[#d97706] dark:text-[#f3ba2f]">100%</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-[#f3ba2f] w-[95%]" />
                </div>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  Zero blind rote memorization
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: REGULAR ASSESSMENTS & ANALYTICS */}
          <Reveal delay={0.12} className="lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white dark:bg-[#0c1a33]/85 p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 shadow-xs">
                    <ClipboardCheck className="size-5" strokeWidth={2.4} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    03 / TESTING
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Weekly Diagnostic Tests
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  Every chapter concludes with a timed mock test matching current CBSE, ICSE, and UP
                  State Board question blueprints.
                </p>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 dark:bg-[#081426] p-3.5 border border-slate-200 dark:border-white/10 space-y-1.5 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="size-3.5 text-[#d97706] dark:text-[#f3ba2f]" /> Saturday Test Series
                  </span>
                  <span className="text-[#071328] bg-[#f3ba2f] px-2 py-0.5 rounded-full font-bold text-[10px]">
                    Weekly
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Individual feedback reports sent to parents via WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 4: COMPLETE STUDY MATERIAL & NOTES */}
          <Reveal delay={0.16} className="lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white dark:bg-[#0c1a33]/85 p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 shadow-xs">
                    <BookOpen className="size-5" strokeWidth={2.4} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    04 / RESOURCES
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Printed Notes &amp; Formula Sheets
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  Concise, chapter-by-chapter theory notes, solved numerical problem sets, and
                  quick-revision formula booklets provided directly to enrolled students.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-[#f3ba2f] bg-amber-500/10 px-3 py-2 rounded-xl border border-amber-500/25">
                <FileText className="size-3.5 shrink-0 text-[#d97706] dark:text-[#f3ba2f]" />
                <span>Previous 10 Years Board Papers Solved</span>
              </div>
            </div>
          </Reveal>

          {/* Card 5: DISCIPLINE & RESULTS */}
          <Reveal delay={0.2} className="lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white dark:bg-[#0c1a33]/85 p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 shadow-xs">
                    <Medal className="size-5" strokeWidth={2.4} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    05 / CULTURE
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Discipline &amp; Result Focus
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  We foster a respectful, punctual, and highly focused learning environment where
                  student effort is acknowledged and celebrated with medals, awards, and
                  scholarships.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 dark:bg-[#081426] p-3.5 border border-slate-200 dark:border-white/10 shadow-xs">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                    Top Result
                  </span>
                  <span className="font-serif text-lg font-bold text-[#d97706] dark:text-[#f3ba2f]">
                    98.9% Scored
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                    Sibling Benefit
                  </span>
                  <span className="font-serif text-lg font-bold text-amber-600 dark:text-amber-400">
                    50% Special Off
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
