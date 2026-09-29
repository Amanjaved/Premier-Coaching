import { useState } from "react";
import {
  Atom,
  FlaskConical,
  Sigma,
  Leaf,
  Languages,
  Globe2,
  LineChart,
  ArrowRight,
  BookOpen,
  FileCheck,
  CheckCircle2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { enquireAboutCourse } from "@/lib/enquiry";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface SubjectTheme {
  Icon: LucideIcon;
  color: string;
  badgeBg: string;
  gradient: string;
  tagline: string;
  topics: string[];
}

const subjectMeta: Record<string, SubjectTheme> = {
  Mathematics: {
    Icon: Sigma,
    color: "text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    gradient: "from-blue-600 to-indigo-600",
    tagline: "Formula Mastery & Problem-Solving",
    topics: [
      "Algebra & Quadratic Equations",
      "Trigonometric Proofs",
      "Coordinate & Euclidean Geometry",
      "Calculus & Statistics",
    ],
  },
  Physics: {
    Icon: Atom,
    color: "text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    gradient: "from-indigo-600 to-blue-700",
    tagline: "Numerical Clarity & Core Mechanics",
    topics: [
      "Kinematics & Newton's Laws",
      "Electricity & Magnetism",
      "Ray Optics & Wave Theory",
      "Thermodynamics & Modern Physics",
    ],
  },
  Chemistry: {
    Icon: FlaskConical,
    color: "text-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    gradient: "from-amber-500 to-orange-600",
    tagline: "Reactions, Equations & Mechanisms",
    topics: [
      "Organic Chemistry Mechanisms",
      "Inorganic Periodic Trends",
      "Chemical Bonding & Structure",
      "Mole Concept & Stoichiometry",
    ],
  },
  Biology: {
    Icon: Leaf,
    color: "text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gradient: "from-emerald-600 to-teal-700",
    tagline: "Diagrams & Point-Wise Presentation",
    topics: [
      "Human Anatomy & Physiology",
      "Genetics & Molecular Biology",
      "Cell Structure & Division",
      "Botany & Ecology",
    ],
  },
  English: {
    Icon: Languages,
    color: "text-[#d7193f]",
    badgeBg: "bg-rose-50 text-[#d7193f] border-rose-200",
    gradient: "from-[#d7193f] to-[#f4511e]",
    tagline: "Grammar Accuracy & High-Scoring Literature",
    topics: [
      "Tenses, Modals & Voice",
      "Letter, Notice & Essay Formats",
      "Literature Theme Analysis",
      "Board Answer-Writing Presentation",
    ],
  },
  "Social Studies": {
    Icon: Globe2,
    color: "text-sky-600",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    gradient: "from-sky-600 to-blue-700",
    tagline: "Historical Context & Map Work",
    topics: [
      "History Chronologies & Events",
      "Geography Map Skills & Topography",
      "Civics & Democratic Politics",
      "Economics & Consumer Rights",
    ],
  },
  Commerce: {
    Icon: LineChart,
    color: "text-purple-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    gradient: "from-purple-600 to-indigo-700",
    tagline: "Accountancy & Business Economics",
    topics: [
      "Double Entry Bookkeeping",
      "Financial Accounting Principles",
      "Micro & Macro Economics",
      "Balance Sheets & Trial Balance",
    ],
  },
};

export function Subjects() {
  const [activeSubject, setActiveSubject] = useState<string>("Mathematics");

  const currentMeta = subjectMeta[activeSubject] || subjectMeta.Mathematics;
  const currentSubjectData =
    siteContent.subjects.find((s) => s.name === activeSubject) || siteContent.subjects[0];

  return (
    <section
      id="subjects"
      className="relative bg-white dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="SUBJECT MATRIX"
          title="In-Depth Subject Guidance"
          subtitle="Explore our rigorous curriculum across all core school disciplines from Class 1st to 12th."
          align="center"
        />

        {/* ==================== INTERACTIVE SUBJECT SELECTOR PILLS ==================== */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {siteContent.subjects.map((sub) => {
            const isSelected = activeSubject === sub.name;
            const meta = subjectMeta[sub.name] || subjectMeta.Mathematics;
            const { Icon } = meta;

            return (
              <button
                key={sub.name}
                type="button"
                onClick={() => setActiveSubject(sub.name)}
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#f3ba2f] text-[#071328] shadow-md shadow-amber-500/20 scale-102"
                    : "bg-slate-50 dark:bg-[#0c1a33] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 shadow-xs"
                }`}
              >
                <Icon className={`size-4 ${isSelected ? "text-[#071328]" : "text-[#d97706] dark:text-[#f3ba2f]"}`} />
                <span>{sub.name}</span>
              </button>
            );
          })}
        </div>

        {/* ==================== FEATURED SPOTLIGHT CARD FOR ACTIVE SUBJECT ==================== */}
        <Reveal key={activeSubject} className="mt-8 sm:mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-slate-50/80 dark:bg-[#0c1a33]/90 p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider border border-amber-500/25 dark:border-amber-400/30 bg-amber-500/10 dark:bg-amber-400/10 text-amber-800 dark:text-[#f3ba2f]">
                    <currentMeta.Icon className="size-3.5" />
                    <span>{currentMeta.tagline}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white dark:bg-white/5 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                    Classes 1st to 12th
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 text-amber-800 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 px-3 py-1 text-xs font-bold">
                    <Sparkles className="size-3" /> CBSE • ICSE • UP Board
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                  {currentSubjectData.name} Coaching
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  {currentSubjectData.description}
                </p>

                {/* Key Syllabus Topics */}
                <div className="pt-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                    Core Syllabus Focus Areas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentMeta.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-2 rounded-xl bg-white dark:bg-white/5 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-xs"
                      >
                        <CheckCircle2 className="size-3.5 text-[#d97706] dark:text-[#f3ba2f] shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => enquireAboutCourse(`Subject: ${currentSubjectData.name}`)}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#071328] shadow-md shadow-amber-500/20 transition-all hover:scale-102 active:scale-95 cursor-pointer"
                  >
                    <span>Enquire for {currentSubjectData.name} Batch</span>
                    <ArrowRight className="size-4" />
                  </button>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Includes printed notes &amp; weekly test papers
                  </span>
                </div>
              </div>

              {/* Right Visual Box */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl bg-gradient-to-br from-[#0c1a33] via-[#081426] to-[#050e1d] p-6 sm:p-7 text-white shadow-2xl border border-white/15 flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-amber-400/15 border border-amber-400/30 text-[#f3ba2f] shadow-xs">
                        <currentMeta.Icon className="size-6" strokeWidth={2.4} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#f3ba2f] bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Concept + Practice
                      </span>
                    </div>

                    <h4 className="mt-6 font-serif text-xl font-bold text-white">
                      The Premier Pedagogy
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                      Step-by-step formula breakdowns, chapter summary notes, daily classroom
                      problem-solving, and regular doubt sessions with our subject faculty.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-200">
                      <BookOpen className="size-4 text-[#f3ba2f]" />
                      <span>Chapter Notes</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <FileCheck className="size-4 text-[#f3ba2f]" />
                      <span>Saturday Tests</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
