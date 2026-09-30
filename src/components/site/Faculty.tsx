import {
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import heroGroup from "@/assets/hero-group.jpeg";
import facultyBoard from "@/assets/faculty-board.jpeg";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export function Faculty() {
  return (
    <section
      id="faculty"
      className="relative bg-slate-50 dark:bg-[#081426] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/3 -right-20 size-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 size-[450px] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="OUR EXPERT MENTORS"
          title="Meet Our Dedicated Faculty"
          subtitle="Experienced educators with advanced university degrees committed to nurturing conceptual clarity, discipline, and board success for every child."
          align="split"
        />

        {/* ==================== 4 PROMINENT FACULTY PROFILES ==================== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.faculty.map((teacher, i) => {
            return (
              <Reveal key={teacher.name} delay={i * 0.07}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33] p-7 shadow-sm hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1">
                  <div>
                    {/* Top Monogram / Initials */}
                    <div className="flex items-center justify-between">
                      <div className="grid size-13 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 border border-amber-500/25 dark:border-amber-400/30 text-amber-800 dark:text-[#f3ba2f] font-serif text-lg font-bold">
                        {initials(teacher.name)}
                      </div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Mentor 0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#d97706] dark:group-hover:text-[#f3ba2f] transition-colors">
                      {teacher.name}
                    </h3>

                    {/* Subject Specialization */}
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-800 dark:text-[#f3ba2f] border border-amber-500/20">
                        <BookOpen className="size-3 shrink-0" />
                        <span>{teacher.subjects}</span>
                      </span>
                    </div>

                    {/* Verified Degree from Board */}
                    <div className="mt-3.5 flex items-start gap-2.5 rounded-xl bg-slate-50 dark:bg-white/5 p-3 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <GraduationCap className="size-4 shrink-0 text-[#d97706] dark:text-[#f3ba2f] mt-0.5" />
                      <span className="font-medium leading-snug">{teacher.qualification}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>Dubagga Faculty</span>
                    <span className="text-[#d97706] dark:text-[#f3ba2f] font-bold">Daily Doubts</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ==================== CLASSROOM & REAL ASSET BANNER ==================== */}
        <Reveal delay={0.25} className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#071b3a] via-[#0b2754] to-[#071328] p-6 sm:p-8 text-white shadow-2xl border border-slate-700/60 dark:border-white/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left narrative */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f3ba2f] border border-amber-400/30 backdrop-blur-md">
                  <Award className="size-3.5" /> Direct Mentorship in Action
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Small Batches for Authentic Individual Attention
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  Every child has a different learning pace. Our faculty takes the time to observe
                  each student's progress during weekly tests, encouraging questions without
                  hesitation and tailoring explanations to individual strengths.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl bg-white/10 p-3 border border-white/15 backdrop-blur-xs">
                    <span className="block font-serif text-lg font-bold text-[#f3ba2f]">Max 15–20</span>
                    <span className="block text-xs text-slate-300">Students per batch</span>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 border border-white/15 backdrop-blur-xs">
                    <span className="block font-serif text-lg font-bold text-white">Daily</span>
                    <span className="block text-xs text-slate-300">Doubt sessions</span>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 border border-white/15 backdrop-blur-xs">
                    <span className="block font-serif text-lg font-bold text-[#f3ba2f]">Regular</span>
                    <span className="block text-xs text-slate-300">Parent PTM updates</span>
                  </div>
                </div>
              </div>

              {/* Right Photo Composition */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Background tilted faculty board */}
                  <div className="absolute -top-3 -right-2 w-48 sm:w-56 overflow-hidden rounded-2xl border-2 border-white/15 bg-[#0c1a33] shadow-xl rotate-4 opacity-80 transition-transform hover:rotate-0 hover:z-20 hover:scale-105">
                    <img
                      src={facultyBoard}
                      alt="Premier Coaching official faculty qualifications board"
                      width={300}
                      height={200}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Main Classroom Session Photo */}
                  <div className="relative z-10 w-4/5 overflow-hidden rounded-2xl border-2 border-white/20 bg-[#0c1a33] shadow-2xl">
                    <img
                      src={heroGroup}
                      alt="Premier Coaching faculty with students"
                      width={400}
                      height={300}
                      className="aspect-[4/3] w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="bg-[#050e1d] text-white px-3 py-1.5 text-[11px] font-bold flex items-center justify-between border-t border-white/10">
                      <span>Faculty &amp; Students</span>
                      <span className="text-[#f3ba2f]">Dubagga Center</span>
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
