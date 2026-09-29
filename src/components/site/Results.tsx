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

        {/* ==================== PODIUM & ACHIEVERS GRID ==================== */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {achievers.map((student, i) => (
            <Reveal
              key={student.name}
              delay={i * 0.08}
              className={student.isGrandChampion ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div
                className={`relative flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  student.isGrandChampion
                    ? "bg-white dark:bg-[#0c1a33] border-2 border-amber-400 dark:border-amber-400/60 shadow-lg dark:shadow-[0_0_40px_rgba(243,186,47,0.2)] hover:scale-102"
                    : "bg-white dark:bg-[#0c1a33]/85 border border-slate-200/90 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-xl hover:border-amber-400/40"
                }`}
              >
                {/* Crown / Top Badge for Grand Champion */}
                {student.isGrandChampion && (
                  <div className="absolute -top-3.5 inset-x-0 mx-auto w-fit inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-[#f3ba2f] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#071328] shadow-md">
                    <Trophy className="size-3.5 text-[#071328]" />
                    <span>Top Achiever</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid size-12 place-items-center rounded-2xl ${
                        student.isGrandChampion
                          ? "bg-[#f3ba2f] text-[#071328] shadow-md"
                          : "bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30"
                      }`}
                    >
                      <Trophy className="size-6" />
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        student.isGrandChampion
                          ? "bg-amber-500/15 dark:bg-amber-400/20 text-amber-800 dark:text-[#f3ba2f] border border-amber-500/30 dark:border-amber-400/40"
                          : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      }`}
                    >
                      {student.badgeTitle}
                    </span>
                  </div>

                  {/* Percentage Counter */}
                  <div className="mt-5">
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-0.5">
                      <span className={student.isGrandChampion ? "text-[#d97706] dark:text-[#f3ba2f]" : "text-slate-900 dark:text-white"}>
                        <CountUp to={student.scoreNumber} />
                        {student.decimal}
                      </span>
                    </div>

                    <h3 className="mt-2 font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {student.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-300">{student.className}</p>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-normal border-t border-slate-100 dark:border-white/10 pt-2.5">
                    {student.achievement}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1.5 font-bold text-[#d97706] dark:text-[#f3ba2f]">
                    <CheckCircle2 className="size-3.5 shrink-0" /> Verified Board Score
                  </span>
                  <span className="text-slate-400 dark:text-white/40 font-mono">2024</span>
                </div>
              </div>
            </Reveal>
          ))}
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
