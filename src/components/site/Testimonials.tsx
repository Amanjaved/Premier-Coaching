import { Quote, HeartHandshake, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const parentValues = [
  {
    title: "Genuine Personal Attention in Small Batches",
    quote:
      "When batches are kept to 15–20 students, the teacher knows every child's name, their weak areas, and whether they understood today's derivations before moving ahead.",
    highlight: "Controlled Batch Sizes",
  },
  {
    title: "Concept-Based Understanding Over Rote Learning",
    quote:
      "Instead of forcing children to memorize guidebooks, teachers explain the fundamental principles and physical logic behind every mathematical and scientific formula.",
    highlight: "First-Principles Teaching",
  },
  {
    title: "Structured Saturday Tests & Transparent Progress",
    quote:
      "Regular chapter-wise diagnostic tests every Saturday ensure continuous evaluation. Parents receive timely feedback long before school unit and board exams.",
    highlight: "Continuous Assessment",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-slate-50 dark:bg-[#081426] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300">
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="PARENT PERSPECTIVES"
          title="What Parents Value About Premier Coaching"
          subtitle="The academic principles and disciplined care that make families in Dubagga trust our center with their children's education."
          align="center"
        />

        {/* 3 Large Editorial Value Columns */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {parentValues.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33] p-7 sm:p-8 shadow-sm hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-amber-400/40">
                <div className="space-y-4">
                  {/* Top Quote Icon */}
                  <span className="grid size-11 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 text-[#d97706] dark:text-[#f3ba2f]">
                    <Quote className="size-5" />
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <blockquote className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal italic">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-amber-800 dark:text-[#f3ba2f]">
                    <CheckCircle2 className="size-3.5 text-[#d97706] dark:text-[#f3ba2f]" />
                    <span>{item.highlight}</span>
                  </span>
                  <span className="text-slate-400">Premier Standard</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
