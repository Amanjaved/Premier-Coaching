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
      desc: "Deep conceptual clarity and analytical problem-solving over rote memorization, helping students retain formulas and fundamentals naturally.",
      Icon: BookOpen,
      accent: "from-amber-400 to-amber-500",
      bgLight: "bg-amber-500/10 text-amber-700 dark:text-[#f3ba2f] border-amber-500/30",
    },
    {
      number: "02",
      title: "Weekly Diagnostic Testing",
      desc: "Saturday assessments with chapter-wise analytics to identify weak areas early, paired with real board exam paper patterns.",
      Icon: BarChart3,
      accent: "from-amber-400 to-amber-500",
      bgLight: "bg-amber-500/10 text-amber-700 dark:text-[#f3ba2f] border-amber-500/30",
    },
    {
      number: "03",
      title: "Dedicated 1-on-1 Mentorship",
      desc: "Strictly controlled batch sizes ensure our subject specialists know every child and provide daily post-class doubt clearing.",
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

        <div className="mt-12 sm:mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ==================== LEFT COLUMN (55%): PROMINENT REAL PHOTO STAGE ==================== */}
          <div className="lg:col-span-7 relative">
            <Reveal className="relative">
              {/* Outer architectural frame with subtle breakout */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#0c1a33]/90 p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-xl">
                {/* Main Real Building Image - More Prominent Visual Stature */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[16/10.5] w-full shadow-inner">
                  <img
                    src={about.photo.src}
                    alt={about.photo.alt}
                    width={960}
                    height={640}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d]/90 via-transparent to-black/10" />

                  {/* Location badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#050e1d]/90 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-xl border border-white/20 backdrop-blur-md">
                      <MapPin className="size-4 text-[#f3ba2f] shrink-0" />
                      <span>{about.locationTag}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3ba2f] px-3.5 py-1.5 text-xs font-bold text-[#071328] shadow-md backdrop-blur-md">
                      <Sparkles className="size-3.5" /> Dubagga Campus
                    </span>
                  </div>
                </div>

                {/* Bottom Architectural Info Strip */}
                <div className="mt-3 px-3 py-1 flex items-center justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">Independent Academic Facility</span>
                  <span className="text-[#d97706] dark:text-[#f3ba2f] font-bold">
                    Safe &amp; Disciplined Environment
                  </span>
                </div>
              </div>

              {/* Real Classroom In-Session Overlapping Badge */}
              <div className="hidden sm:block absolute -bottom-6 -right-4 w-56 lg:w-64 z-20 transition-transform duration-300 hover:scale-105">
                <div className="overflow-hidden rounded-2xl border-2 border-white dark:border-white/15 bg-white dark:bg-[#0c1a33] shadow-2xl">
                  <img
                    src={studentsGroup4}
                    alt="Students attending lecture at Premier Coaching"
                    width={320}
                    height={200}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-[#071328] text-white border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#f3ba2f] block">
                      Active Classroom
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-white block mt-0.5">
                      Small Interactive Batches
                    </span>
                  </div>
                </div>
              </div>

              <DoodleSparkle className="absolute -top-4 -left-2 size-8 text-[#f3ba2f] animate-bounce" />
            </Reveal>
          </div>

          {/* ==================== RIGHT COLUMN (45%): EDITORIAL NARRATIVE ==================== */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:pt-0">
            <Reveal delay={0.1}>
              <div className="space-y-3.5">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  Where Academic Potential Meets Structured Guidance
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  {about.body}
                </p>
              </div>
            </Reveal>

            {/* Editorial Institutional Pillars (No Repeated Cards - Clean Minimal List) */}
            <div className="space-y-4 pt-2 divide-y divide-slate-100 dark:divide-white/10">
              {corePillars.map((pillar, i) => (
                <Reveal key={pillar.number} delay={0.14 + i * 0.08}>
                  <div className="pt-4 first:pt-0 flex items-start gap-4">
                    <span className="font-mono text-2xl font-black text-[#d97706] dark:text-[#f3ba2f] shrink-0 mt-0.5">
                      {pillar.number}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mission & Motto Strip */}
            <Reveal delay={0.35}>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <div className="flex-1 rounded-2xl bg-slate-50 dark:bg-white/5 p-4 border border-slate-200 dark:border-white/10">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#d97706] dark:text-[#f3ba2f]">
                    Our Mission
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Your Success, Our Mission.
                  </span>
                </div>
                <div className="flex-1 rounded-2xl bg-slate-50 dark:bg-white/5 p-4 border border-slate-200 dark:border-white/10">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#d97706] dark:text-[#f3ba2f]">
                    Our Motto
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Discipline Today, Success Tomorrow.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
