import {
  Laptop,
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { enquireAboutCourse } from "@/lib/enquiry";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Courses() {
  return (
    <section
      id="courses"
      className="relative bg-slate-50 dark:bg-[#081426] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Ambient background blur */}
      <div
        className="pointer-events-none absolute top-1/4 -left-40 size-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-40 size-[500px] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="ACADEMIC PROGRAMS"
          title="Courses &amp; Learning Pathways"
          subtitle="Structured academic coaching tailored for primary foundation, secondary board excellence, and comprehensive school curriculum support."
          align="center"
        />

        {/* ==================== 4 LARGE EDITORIAL COURSE ROWS ==================== */}
        <div className="mt-12 sm:mt-16 space-y-4">
          {[
            {
              num: "01",
              title: "Foundation Batch",
              target: "Classes 1st to 8th",
              desc: "Building rock-solid conceptual foundations in Mathematics, Science, and English. We focus on active curiosity, formula understanding, and homework assistance in small, interactive batches.",
              highlights: [
                "Maths & Science conceptual basics",
                "English grammar & vocabulary",
                "Small batch size for personal focus",
                "Regular weekly progress reviews",
              ],
              badge: "Primary & Middle School",
            },
            {
              num: "02",
              title: "Board Exam Preparation",
              target: "Classes 9th to 12th",
              desc: "Comprehensive board syllabus coverage, blueprint test series, and previous 10-year question bank practice for CBSE, ICSE, and UP State Board examinations.",
              highlights: [
                "CBSE, ICSE & UP Board blueprints",
                "Previous 10-year question practice",
                "Timed mock exams every month",
                "Answer-writing presentation coaching",
              ],
              badge: "High-Scoring Board Track",
              isPopular: true,
            },
            {
              num: "03",
              title: "School / Tuition Support",
              target: "All Classes (1st–12th)",
              desc: "Daily school curriculum assistance aligned with your school timetable, unit test revisions, formula quick-sheets, and continuous parent-teacher communication.",
              highlights: [
                "Daily school curriculum guidance",
                "Unit test & term exam prep",
                "Formula sheets & chapter notes",
                "Direct parent updates",
              ],
              badge: "Daily Academic Mentorship",
            },
            {
              num: "04",
              title: "Doubt Clearing & Revision Marathons",
              target: "Weekly Dedicated Batches",
              desc: "Specialized small-group and 1-on-1 problem-solving sessions where every pending doubt is cleared patiently by subject specialists ahead of school and board exams.",
              highlights: [
                "Dedicated 1-on-1 doubt solving",
                "Weekend rapid concept revision",
                "Step-by-step problem breakdowns",
                "Open question atmosphere",
              ],
              badge: "Concept Reinforcement",
            },
          ].map((course, idx) => (
            <Reveal key={course.title} delay={idx * 0.07}>
              <div
                className={`group relative rounded-3xl border p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                  course.isPopular
                    ? "border-amber-400/60 dark:border-amber-400/40 bg-white dark:bg-[#0c1a33] shadow-md dark:shadow-xl ring-1 ring-amber-400/20"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33]/80 hover:border-amber-400/40 hover:bg-slate-50/50 dark:hover:bg-[#0c1a33]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left Column: Number, Title, Target */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-[#d97706] dark:text-[#f3ba2f]">
                        {course.num}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-800 dark:text-[#f3ba2f] border border-amber-500/20">
                        {course.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 dark:text-white group-hover:text-[#d97706] dark:group-hover:text-[#f3ba2f] transition-colors leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {course.target}
                    </p>
                  </div>

                  {/* Middle Column: Detailed description and checkpoints */}
                  <div className="lg:col-span-5 space-y-3">
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                      {course.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {course.highlights.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="size-4 text-[#d97706] dark:text-[#f3ba2f] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Prominent Arrow Action Button */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <button
                      type="button"
                      onClick={() => enquireAboutCourse(`${course.title} (${course.target})`)}
                      className="inline-flex w-full lg:w-auto items-center justify-center gap-3 rounded-full bg-[#f3ba2f] hover:bg-[#e0ab24] px-7 py-4 text-sm sm:text-base font-bold text-[#071328] shadow-md shadow-amber-500/20 transition-all hover:scale-103 active:scale-95 cursor-pointer group/btn"
                    >
                      <span>Enquire for Batch</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ==================== CURRICULUM BOARDS & ONLINE LEARNING BANNER ==================== */}
        <Reveal delay={0.2} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#071b3a] via-[#0b2754] to-[#071328] p-8 sm:p-10 text-white shadow-2xl border border-slate-700/60 dark:border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#f3ba2f] border border-amber-400/30">
                <BookOpen className="size-3.5" /> Comprehensive Board Coverage
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                CBSE • ICSE • UP State Board
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal">
                Board-specific test series, blueprint question banks, and NCERT / ICSE textbook
                deep-dives tailored to each curriculum's marking scheme.
              </p>
            </div>

            {/* Right Live Online Classes Card */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-md">
              <div className="grid size-14 place-items-center rounded-2xl bg-[#f3ba2f] text-[#071328] shadow-sm shrink-0">
                <Laptop className="size-7" />
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#f3ba2f]">
                  Flexible Learning
                </span>
                <span className="block font-serif text-base sm:text-lg font-bold text-white">
                  Online Classes Available
                </span>
                <span className="block text-xs text-slate-300 font-normal">
                  Attend live lectures from home with recording backups
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
