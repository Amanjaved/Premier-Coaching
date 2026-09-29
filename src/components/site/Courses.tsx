import { useState } from "react";
import {
  Sprout,
  GraduationCap,
  School,
  Trophy,
  MessageCircleQuestion,
  Laptop,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { enquireAboutCourse } from "@/lib/enquiry";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const courseDetails: Record<
  string,
  { targetClasses: string; features: string[]; isPopular?: boolean }
> = {
  "Foundation Batch": {
    targetClasses: "Classes 1st to 8th",
    features: [
      "Mathematics & Science conceptual building",
      "English grammar & vocabulary strengthening",
      "Regular homework and school assignment support",
      "Interactive small batches with friendly teachers",
    ],
    isPopular: false,
  },
  "Board Exam Preparation": {
    targetClasses: "Classes 9th, 10th, 11th & 12th",
    features: [
      "CBSE, ICSE & UP State Board syllabus focus",
      "Previous 10 years solved board question papers",
      "Timed mock board examinations every month",
      "Answer-writing presentation & speed coaching",
    ],
    isPopular: true,
  },
  "School / Tuition Support": {
    targetClasses: "All Classes (1st–12th)",
    features: [
      "Daily curriculum guidance aligned with school timetable",
      "Unit test and half-yearly revision sessions",
      "Formula quick-sheets and chapter synopsis notes",
      "Continuous parent-teacher progress updates",
    ],
    isPopular: false,
  },
  "Competitive Exam Guidance": {
    targetClasses: "Middle & Senior Batches",
    features: [
      "Aptitude, mental ability and logical reasoning",
      "Science & Math Olympiad preparation",
      "Scholarship exam practice questions",
      "Critical thinking and competitive speed drills",
    ],
    isPopular: false,
  },
  "Doubt Clearing & Revision": {
    targetClasses: "All Enrolled Students",
    features: [
      "Daily dedicated post-lecture doubt clearing",
      "1-on-1 problem solving with subject faculty",
      "Weekend rapid revision marathon sessions",
      "Missed lecture backup support",
    ],
    isPopular: false,
  },
};

const iconMap: Record<string, { Icon: LucideIcon; color: string; bg: string }> = {
  sprout: { Icon: Sprout, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
  "graduation-cap": {
    Icon: GraduationCap,
    color: "text-[#d7193f]",
    bg: "bg-rose-50 border-rose-200",
  },
  school: { Icon: School, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  trophy: { Icon: Trophy, color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
  "message-circle-question": {
    Icon: MessageCircleQuestion,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-200",
  },
};

export function Courses() {
  const [filter, setFilter] = useState<"ALL" | "FOUNDATION" | "BOARDS" | "SUPPORT">("ALL");

  const filteredCourses = siteContent.courses.filter((course) => {
    if (filter === "ALL") return true;
    if (filter === "FOUNDATION")
      return course.subtitle.includes("1st to 8th") || course.title.includes("Foundation");
    if (filter === "BOARDS")
      return course.subtitle.includes("9th to 12th") || course.title.includes("Board");
    if (filter === "SUPPORT")
      return (
        course.title.includes("Support") ||
        course.title.includes("Revision") ||
        course.title.includes("Competitive")
      );
    return true;
  });

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

        {/* Category Filter Tabs */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {[
            { id: "ALL", label: "All Programs" },
            { id: "FOUNDATION", label: "Foundation (Class 1st–8th)" },
            { id: "BOARDS", label: "Board Prep (Class 9th–12th)" },
            { id: "SUPPORT", label: "Tuition & Revision Support" },
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#f3ba2f] text-[#071328] shadow-md shadow-amber-500/20 scale-102"
                    : "bg-white dark:bg-[#0c1a33] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Course Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCourses.map((course, i) => {
            const details = courseDetails[course.title] || {
              targetClasses: course.subtitle,
              features: [
                "Small batch size for personal focus",
                "Regular weekly tests & performance reviews",
                "Comprehensive printed study material",
                "Daily 1-on-1 doubt solving",
              ],
              isPopular: false,
            };

            const iconConfig = iconMap[course.icon] || iconMap.school;
            const { Icon } = iconConfig;

            return (
              <Reveal key={course.title} delay={i * 0.06}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border p-6 sm:p-7 transition-all duration-300 ${
                    details.isPopular
                      ? "border-amber-400 dark:border-amber-400/50 bg-white dark:bg-[#0c1a33] ring-1 ring-amber-400/30 shadow-md dark:shadow-xl"
                      : "border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1a33]/85 hover:border-amber-400/40 shadow-sm hover:shadow-md dark:shadow-xl"
                  }`}
                >
                  {/* Popular Badge */}
                  {details.isPopular && (
                    <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-[#f3ba2f] px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#071328] shadow-md">
                      <Sparkles className="size-3" /> Most Enrolled
                    </div>
                  )}

                  <div>
                    {/* Header: Icon & Target Class */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid size-12 place-items-center rounded-2xl border border-amber-500/25 dark:border-amber-400/30 bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-[#f3ba2f] shadow-xs transition-transform group-hover:scale-105">
                        <Icon className="size-6" strokeWidth={2.3} />
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        <Calendar className="size-3 text-slate-500 dark:text-slate-400" />
                        <span>{details.targetClasses}</span>
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#d97706] dark:group-hover:text-[#f3ba2f] transition-colors">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                      {course.text}
                    </p>

                    {/* Feature Checkpoints */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10 space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        What's Included:
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {details.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-[#d97706] dark:text-[#f3ba2f] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => enquireAboutCourse(`${course.title} (${course.subtitle})`)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#071328] shadow-md shadow-amber-500/15 transition-all hover:scale-102 active:scale-95 cursor-pointer w-full justify-center group/btn"
                    >
                      <span>Enquire for Batch</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
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
