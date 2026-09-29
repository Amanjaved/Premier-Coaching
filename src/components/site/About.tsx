import {
  MapPin,
  Target,
  ShieldCheck,
  BookOpen,
  BarChart3,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { DoodleSparkle } from "./Doodles";
import studentsGroup4 from "@/assets/students-group-4.jpeg";

export function About() {
  const { about } = siteContent;

  const corePillars = [
    {
      number: "01",
      title: "Concept-Based Mastery",
      desc: "We prioritize deep conceptual understanding and logical problem-solving over rote memorization, helping students retain formulas and theories naturally.",
      Icon: BookOpen,
      accent: "from-amber-400 to-amber-500",
      bgLight: "bg-amber-500/10 text-amber-700 dark:text-[#f3ba2f] border-amber-500/30",
    },
    {
      number: "02",
      title: "Weekly Diagnostic Testing",
      desc: "Every Saturday assessment with chapter-wise analytics to identify weak areas early, reinforced with structured previous-year board questions.",
      Icon: BarChart3,
      accent: "from-amber-400 to-amber-500",
      bgLight: "bg-amber-500/10 text-amber-700 dark:text-[#f3ba2f] border-amber-500/30",
    },
    {
      number: "03",
      title: "Dedicated 1-on-1 Mentorship",
      desc: "Strictly controlled batch sizes ensure our subject specialists know every child by name and provide daily post-class doubt resolution.",
      Icon: Users,
      accent: "from-amber-400 to-amber-500",
      bgLight: "bg-amber-500/10 text-amber-700 dark:text-[#f3ba2f] border-amber-500/30",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-white dark:bg-[#081426] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background ambient decorative flares */}
      <div
        className="pointer-events-none absolute top-10 right-0 size-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-0 size-96 rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        {/* Section Heading with split layout */}
        <SectionHeading
          eyebrow="ABOUT PREMIER COACHING"
          title="Building Strong Foundations for a Brighter Future"
          subtitle="A student-first coaching institution in Dubagga, Lucknow committed to academic discipline, concept clarity, and measurable board excellence."
          align="split"
        />

        <div className="mt-10 sm:mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ==================== LEFT COLUMN: MULTI-LAYERED PHOTO STAGE ==================== */}
          <div className="lg:col-span-6 relative">
            <Reveal className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer architectural card frame */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#0c1a33]/90 p-2 sm:p-2.5 shadow-xl backdrop-blur-xl">
                {/* Main Building Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full">
                  <img
                    src={about.photo.src}
                    alt={about.photo.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d]/90 via-transparent to-black/20" />

                  {/* Location badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#050e1d]/90 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white shadow-xl border border-white/20 backdrop-blur-md">
                      <MapPin className="size-3.5 text-[#f3ba2f] shrink-0" />
                      <span className="truncate">{about.locationTag}</span>
                    </div>

                    <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#f3ba2f] px-3 py-1.5 text-xs font-bold text-[#071328] shadow-md backdrop-blur-md">
                      <Sparkles className="size-3.5" /> Dubagga Center
                    </span>
                  </div>
                </div>

                {/* Bottom Architectural Info Strip */}
                <div className="mt-2.5 px-3 py-1.5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">Independent Academic Facility</span>
                  <span className="text-[#d97706] dark:text-[#f3ba2f] font-bold">
                    Safe &amp; Disciplined Environment
                  </span>
                </div>
              </div>

              {/* Floating Overlapping Card: Real Classroom In-Session */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 w-3/5 max-w-[250px] z-20 transition-transform duration-300 hover:scale-105">
                <div className="overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-white/15 bg-white dark:bg-[#0c1a33] shadow-2xl rotate-2">
                  <img
                    src={studentsGroup4}
                    alt="Students attending lecture at Premier Coaching"
                    width={320}
                    height={200}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-2.5 bg-gradient-to-br from-slate-900 to-[#071328] text-white border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#f3ba2f]">
                      <Award className="size-3 text-[#f3ba2f]" /> Est. 2018
                    </div>
                    <div className="font-serif text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">
                      8+ Years of Academic Excellence
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Sparkle */}
              <DoodleSparkle className="absolute -top-4 -left-2 size-7 text-[#f3ba2f] animate-bounce" />
            </Reveal>
          </div>

          {/* ==================== RIGHT COLUMN: EDITORIAL NARRATIVE & STAGGERED PILLARS ==================== */}
          <div className="lg:col-span-6 space-y-5 pt-3 lg:pt-0">
            <Reveal delay={0.1}>
              <div className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  Where Academic Potential Meets Structured Guidance
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  {about.body}
                </p>
              </div>
            </Reveal>

            {/* 3 Staggered Institutional Pillars */}
            <div className="space-y-3 pt-1">
              {corePillars.map((pillar, i) => (
                <Reveal key={pillar.number} delay={0.14 + i * 0.08}>
                  <div className="group relative flex items-start gap-3.5 sm:gap-4 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/80 dark:bg-[#0c1a33]/85 p-3.5 sm:p-4 shadow-sm hover:shadow-md dark:shadow-xl transition-all duration-300 hover:border-amber-400/40 hover:translate-x-1">
                    {/* Number & Icon Pill */}
                    <div className="flex flex-col items-center gap-0.5 shrink-0">
                      <span
                        className={`grid size-10 place-items-center rounded-xl border ${pillar.bgLight} shadow-xs transition-transform group-hover:scale-105`}
                      >
                        <pillar.Icon className="size-5" strokeWidth={2.2} />
                      </span>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#d97706] dark:text-[#f3ba2f]">
                        {pillar.number}
                      </span>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#d97706] dark:group-hover:text-[#f3ba2f] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mission & Motto Banner */}
            <Reveal delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50 dark:bg-[#0c1a33]/85 p-4 border border-slate-200 dark:border-white/10 shadow-sm">
                  <span className="grid size-10 place-items-center rounded-xl bg-amber-500/10 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 shadow-xs shrink-0">
                    <Target className="size-5" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-[#f3ba2f]">
                      Our Mission
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Your Success, Our Mission.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50 dark:bg-[#0c1a33]/85 p-4 border border-slate-200 dark:border-white/10 shadow-sm">
                  <span className="grid size-10 place-items-center rounded-xl bg-amber-500/10 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 shadow-xs shrink-0">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-[#f3ba2f]">
                      Our Motto
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Discipline Today, Success Tomorrow.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
