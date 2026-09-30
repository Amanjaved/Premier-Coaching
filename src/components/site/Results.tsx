import { Trophy, CheckCircle2, Medal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal, CountUp } from "./Reveal";
import { DoodleSparkle } from "./Doodles";
import medals1 from "@/assets/event-medals-1.jpeg";
import medals2 from "@/assets/event-medals-2.jpeg";
import flyerToppers from "@/assets/flyer-toppers.jpeg";

export function Results() {
  const achievers = [
    {
      name: "Hubaib Khan",
      percentage: "98.9%",
      scoreNumber: 98,
      decimal: ".9%",
      badgeTitle: "Board Grand Champion",
      className: "Class 10th Board Topper",
      rank: "1st",
      isGrandChampion: true,
      achievement: "Highest Academic Score in Institute History",
    },
    {
      name: "Mohammad Arsh",
      percentage: "80%",
      scoreNumber: 80,
      decimal: "%",
      badgeTitle: "Academic Distinction",
      className: "High Achiever",
      rank: "Distinction",
      isGrandChampion: false,
      achievement: "Outstanding performance in Mathematics & Science",  
    },
    {
      name: "Dishant Gautam",
      percentage: "80%",
      scoreNumber: 80,
      decimal: "%",
      badgeTitle: "Consistent Performer",
      className: "High Achiever",
      rank: "Distinction",
      isGrandChampion: false,
      achievement: "Top scorer in weekly test diagnostic series",
    },
    {
      name: "Aryan Rathore",
      percentage: "77%",
      scoreNumber: 77,
      decimal: "%",
      badgeTitle: "Remarkable Growth",
      className: "High Achiever",
      rank: "Merit",
      isGrandChampion: false,
      achievement: "Significant jump in board examination scores",
    },
  ];

  return (
    <section
      id="results"
      className="relative overflow-hidden bg-slate-50 dark:bg-[#081426] py-16 sm:py-20 lg:py-24 text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3 size-[650px] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 size-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* Decorative Sparkles */}
      <DoodleSparkle className="absolute top-12 left-10 size-8 text-[#f3ba2f] animate-bounce" />
      <DoodleSparkle className="absolute bottom-16 right-12 size-7 text-[#f3ba2f] animate-pulse" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 z-10">
        <SectionHeading
          eyebrow="ACADEMIC ACHIEVEMENTS"
          title="Hall of Fame &amp; Board Results"
          subtitle="Celebrating our high scorers whose consistent effort, discipline, and concept clarity earned outstanding board marks."
          align="center"
        />

        {/* ==================== GIANT NUMBERS BOARD TOPPERS DISPLAY ==================== */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-white dark:bg-[#0c1a33] border border-slate-200 dark:border-white/10 p-8 sm:p-12 shadow-lg dark:shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-white/10">
            {achievers.map((student, i) => (
              <Reveal key={student.name} delay={i * 0.08} className="pt-6 sm:pt-0 sm:px-6 first:pt-0 first:px-0">
                <div className="space-y-3 text-center sm:text-left">
                  {/* Giant Score */}
                  <div className="font-serif text-5xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                    <span className={student.isGrandChampion ? "text-[#d97706] dark:text-[#f3ba2f]" : "text-slate-900 dark:text-white"}>
                      <CountUp to={student.scoreNumber} />
                      {student.decimal}
                    </span>
                  </div>

                  {/* Student Name */}
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {student.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#d97706] dark:text-[#f3ba2f]">
                      {student.className}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                    {student.achievement}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Verification Badge */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-bold text-[#d97706] dark:text-[#f3ba2f]">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>Verified student results printed on official institute brochure</span>
            </span>
            <span>Dubagga Center, Lucknow</span>
          </div>
        </div>

        {/* ==================== REAL MEDAL CEREMONY & PHOTOGRAPHIC EVIDENCE ==================== */}
        <Reveal delay={0.25} className="mt-10 sm:mt-12">
          <div className="rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-md dark:shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 dark:bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-white/15">
                  <Medal className="size-3.5 text-[#d97706] dark:text-[#f3ba2f]" /> Student Felicitation &amp; Rewards
                </span>
                <h3 className="mt-2.5 font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Recognizing Effort, Inspiring Excellence
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md">
                Hard work deserves celebration. We regularly award medals, prizes, and certificates
                to students who show dedication and academic growth.
              </p>
            </div>

            {/* 3 Real Photographs Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Photo 1: Medal Ceremony Prize */}
              <div
                data-cursor="view"
                className="group overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-white/20 bg-slate-900 shadow-sm cursor-pointer"
              >
                <img
                  src={medals1}
                  alt="Student receiving medal and prize book at Premier Coaching"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-3 bg-slate-900 text-white">
                  <p className="text-xs font-bold truncate">
                    Academic Medal Winner with Prize Book
                  </p>
                  <p className="text-[10px] text-[#f3ba2f] font-semibold mt-0.5">
                    Dubagga Center Award
                  </p>
                </div>
              </div>

              {/* Photo 2: Young Medalist */}
              <div
                data-cursor="view"
                className="group overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-white/20 bg-slate-900 shadow-sm cursor-pointer"
              >
                <img
                  src={medals2}
                  alt="Young student showing medal at Premier Coaching"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-3 bg-slate-900 text-white">
                  <p className="text-xs font-bold truncate">Young Student Academic Medalist</p>
                  <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">
                    Merit Recognition
                  </p>
                </div>
              </div>

              {/* Photo 3: Official Toppers Flyer */}
              <div
                data-cursor="view"
                className="group overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-white/20 bg-slate-900 shadow-sm cursor-pointer"
              >
                <img
                  src={flyerToppers}
                  alt="Official Toppers flyer of Premier Coaching"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-3 bg-slate-900 text-white">
                  <p className="text-xs font-bold truncate">
                    Official Achievers &amp; Faculty Banner
                  </p>
                  <p className="text-[10px] text-[#f3ba2f] font-semibold mt-0.5">
                    Board Results 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
