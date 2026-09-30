import { CheckCircle2, Percent, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function WhyChoose() {
  const { whyChoose } = siteContent;

  const reasons = [
    {
      num: "01",
      title: "Small Batches for Individual Attention",
      desc: "Controlled batch sizes of 15–20 students so teachers can observe every child's work, clarify doubts patiently, and ensure no student gets left behind.",
    },
    {
      num: "02",
      title: "Concept-First Teaching Methodology",
      desc: "Deep conceptual clarity, step-by-step formula derivations, and practical numerical understanding rather than superficial rote memorization.",
    },
    {
      num: "03",
      title: "Weekly Saturday Diagnostic Tests",
      desc: "Regular chapter-wise assessments with detailed answer-writing analysis, helping students prepare systematically for school exams and board patterns.",
    },
    {
      num: "04",
      title: "Comprehensive Study Material & Notes",
      desc: "Structured printed chapter notes, quick formula sheets, and previous 10-year board question banks tailored to CBSE, ICSE, and UP State Board syllabi.",
    },
    {
      num: "05",
      title: "Direct Parent-Teacher Communication",
      desc: "Continuous progress updates, test score reports, and personalized academic counseling so parents are always informed of their child's academic journey.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative bg-white dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE PREMIER ADVANTAGE"
          title="Why Parents Choose Premier Coaching"
          subtitle="Our student-first approach combines rigorous discipline, conceptual depth, and personal academic mentorship in Dubagga, Lucknow."
          align="center"
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ==================== LEFT COLUMN (7 Cols): 5 STRONG EDITORIAL REASONS ==================== */}
          <div className="lg:col-span-7 space-y-6 divide-y divide-slate-100 dark:divide-white/10">
            {reasons.map((reason, idx) => (
              <Reveal key={reason.num} delay={idx * 0.06}>
                <div className="pt-6 first:pt-0 flex items-start gap-4 sm:gap-6">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#d97706] dark:text-[#f3ba2f] shrink-0">
                    {reason.num}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ==================== RIGHT COLUMN (5 Cols): ONE PROMINENT REAL PHOTOGRAPH ==================== */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-3xl border-2 border-slate-200 dark:border-white/15 bg-slate-900 shadow-xl dark:shadow-2xl">
                <img
                  src={whyChoose.photo.src}
                  alt={whyChoose.photo.alt}
                  width={640}
                  height={500}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-103"
                />

                <div className="bg-[#071328] p-5 text-white border-t border-white/10">
                  <span className="text-[11px] font-bold text-[#f3ba2f] uppercase tracking-wider block">
                    Student Community • Dubagga Center
                  </span>
                  <span className="font-serif text-base sm:text-lg font-bold text-white block mt-1">
                    Disciplined, Encouraging &amp; Safe Learning Environment
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Located behind Yadav Bazar, Dubagga, Lucknow
                  </span>
                </div>
              </div>

              {/* Sibling Concession Callout */}
              <div className="mt-5 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 p-4 border border-amber-500/25 dark:border-amber-400/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#f3ba2f] text-[#071328] font-bold shrink-0">
                    <Percent className="size-5" />
                  </span>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      50% Special Discount for Siblings
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      When brothers and sisters enroll together
                    </span>
                  </div>
                </div>
                <a
                  href="#admission"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#d97706] dark:text-[#f3ba2f] hover:underline shrink-0"
                >
                  <span>Apply</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
