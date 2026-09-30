import {
  Sigma,
  Atom,
  FlaskConical,
  Leaf,
  Languages,
  Globe2,
  LineChart,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { enquireAboutCourse } from "@/lib/enquiry";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const subjectsConfig = [
  {
    name: "Mathematics",
    Icon: Sigma,
    tagline: "Formula Mastery & Problem-Solving",
    classes: "Classes 1st–12th",
    desc: "Step-by-step derivations, algebra, proofs, calculus, and daily problem-solving practice.",
    topics: ["Algebra & Quadratics", "Trigonometric Proofs", "Coordinate Geometry", "Calculus & Statistics"],
  },
  {
    name: "Physics",
    Icon: Atom,
    tagline: "Numerical Clarity & Core Mechanics",
    classes: "Classes 9th–12th",
    desc: "Core mechanics, electricity, and optics taught with extensive board numerical drills.",
    topics: ["Kinematics & Laws of Motion", "Current Electricity", "Optics & Wave Theory", "Magnetism & EMI"],
  },
  {
    name: "Chemistry",
    Icon: FlaskConical,
    tagline: "Reactions, Equations & Mechanisms",
    classes: "Classes 9th–12th",
    desc: "Reaction pathways, periodic trends, and mole calculations with structured chapter notes.",
    topics: ["Organic Reaction Pathways", "Periodic Table Trends", "Chemical Bonding", "Mole Concept & Stoichiometry"],
  },
  {
    name: "Biology",
    Icon: Leaf,
    tagline: "Diagrams & Point-Wise Answers",
    classes: "Classes 9th–12th",
    desc: "Human physiology, genetics, and botany with high-scoring diagrams and point-wise answers.",
    topics: ["Human Anatomy & Physiology", "Genetics & Heredity", "Cell Structure & Division", "Plant Physiology"],
  },
  {
    name: "English",
    Icon: Languages,
    tagline: "Grammar & High-Scoring Literature",
    classes: "Classes 1st–12th",
    desc: "Grammar precision, comprehension, and structured formats for board literature exams.",
    topics: ["Grammar & Sentence Syntax", "Formal Letter & Essay Formats", "Literature Theme Analysis", "Board Answer Presentation"],
  },
  {
    name: "Social Studies & Commerce",
    Icon: Globe2,
    tagline: "Conceptual Context & Analytics",
    classes: "Classes 6th–12th",
    desc: "Historical chronology, map skills, accountancy fundamentals, and economic concepts.",
    topics: ["History & Civics Chronology", "Geography Map Skills", "Accountancy Fundamentals", "Economics & Market Dynamics"],
  },
];

export function Subjects() {
  return (
    <section
      id="subjects"
      className="relative bg-white dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="ACADEMIC CURRICULUM"
          title="In-Depth Subject Guidance"
          subtitle="Explore our rigorous curriculum across all core school disciplines from Class 1st to 12th."
          align="center"
        />

        {/* ==================== LARGE TYPOGRAPHIC SUBJECT GRID ==================== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-white/10 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl">
          {subjectsConfig.map((sub, i) => (
            <Reveal key={sub.name} delay={i * 0.05} className="h-full">
              <div className="group relative flex h-full flex-col justify-between bg-white dark:bg-[#0c1a33] p-7 sm:p-8 lg:p-9 transition-colors duration-300 hover:bg-slate-50/80 dark:hover:bg-[#0f2142]">
                <div className="space-y-4">
                  {/* Top Meta Line */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#d97706] dark:text-[#f3ba2f]">
                      {sub.classes}
                    </span>
                    <sub.Icon className="size-5 text-slate-400 group-hover:text-[#d97706] dark:group-hover:text-[#f3ba2f] transition-colors" />
                  </div>

                  {/* Large Typographic Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-[#d97706] dark:group-hover:text-[#f3ba2f] transition-colors">
                    {sub.name}
                  </h3>

                  <p className="text-xs font-semibold text-amber-800 dark:text-[#f3ba2f]/90">
                    {sub.tagline}
                  </p>

                  {/* Description in readable 15px font */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                    {sub.desc}
                  </p>

                  {/* Syllabus Focus Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {sub.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => enquireAboutCourse(`Subject: ${sub.name}`)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#d97706] dark:text-[#f3ba2f] hover:underline cursor-pointer group/link"
                  >
                    <span>Enquire for {sub.name} Batch</span>
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Curriculum Strip */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>All subjects include printed chapter-wise notes, formula sheets, and Saturday test series.</span>
        </div>
      </div>
    </section>
  );
}
