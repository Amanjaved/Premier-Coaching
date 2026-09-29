import { motion } from "motion/react";
import heroGroupPhoto from "@/assets/hero-group.jpeg";

export function Hero() {
  const scrollToAdmission = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("admission");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToCourses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("courses");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 select-none bg-[#050e1d]"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(5, 14, 29, 0.82) 0%, rgba(5, 14, 29, 0.72) 45%, rgba(5, 14, 29, 0.94) 100%),
          url(${heroGroupPhoto})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle Ambient Backlight Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-blue-600/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* 1. CENTER EDITORIAL HEADLINE, SUBTEXT & ACTION BUTTONS                    */}
      {/* ========================================================================= */}
      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 w-full text-center z-10 my-auto">
        
        {/* Center Editorial Headline (Premier Coaching Big in Yellow, Build your future Small) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 sm:space-y-4"
        >
          {/* Top Tagline Pill from Brochure */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-sm">
            <span>✨ Learn • Practice • Succeed</span>
            <span className="text-white/40">•</span>
            <span>Your Success Our Mission!</span>
          </div>

          {/* Big Premier Coaching in Center with Same Yellow Color */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[88px] font-black tracking-tight text-[#f3ba2f] leading-[1.06] drop-shadow-md">
            Premier Coaching
          </h1>

          {/* Small Build Your Future Text */}
          <p className="font-serif text-lg sm:text-2xl lg:text-3xl text-white font-medium tracking-normal max-w-3xl mx-auto pt-1 sm:pt-2">
            Build your future with Lucknow's top mentors
          </p>

          {/* Subtitle / Key Info Strip from Brochure */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-200/90">
            <span className="bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full text-white">For Class 1st to 12th</span>
            <span className="text-white/40">•</span>
            <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full text-white">CBSE | ICSE | State Board</span>
            <span className="text-white/40">•</span>
            <span className="bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full text-white">All Subjects</span>
          </div>
        </motion.div>

        {/* Call to Action Buttons (Centered Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 pt-7 sm:pt-9"
        >
          {/* Primary Button: Book free demo (Golden-amber) */}
          <a
            href="#admission"
            onClick={scrollToAdmission}
            className="rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#071328] shadow-lg shadow-amber-500/20 transition-all hover:scale-103 active:scale-95 cursor-pointer"
          >
            <span>Book free demo</span>
          </a>

          {/* Secondary Button: Explore courses (Dark Glass Outline) */}
          <a
            href="#courses"
            onClick={scrollToCourses}
            className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur-sm transition-all hover:scale-103 active:scale-95 cursor-pointer"
          >
            <span>Explore courses</span>
          </a>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THREE FLOATING FEATURE CARDS (CENTERED AT BOTTOM FROM BROCHURE)        */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mx-auto max-w-[1240px] px-4 sm:px-6 w-full z-10 pt-10 sm:pt-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          
          {/* Feature Card 1: Class 1st to 12th */}
          <div className="rounded-2xl border border-white/10 bg-[#0c1a33]/85 backdrop-blur-xl px-5 sm:px-6 py-5 sm:py-6 shadow-2xl text-center transition-transform hover:-translate-y-1">
            <div className="font-sans text-2xl sm:text-3xl font-black text-[#f3ba2f] tracking-tight">
              Class 1st–12th
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-200 mt-1.5">
              CBSE • ICSE • State Board
            </div>
            <div className="text-[11px] text-slate-300/80 mt-1">
              Foundation & Board Exam Prep
            </div>
          </div>

          {/* Feature Card 2: Quality Teaching */}
          <div className="rounded-2xl border border-white/10 bg-[#0c1a33]/85 backdrop-blur-xl px-5 sm:px-6 py-5 sm:py-6 shadow-2xl text-center transition-transform hover:-translate-y-1">
            <div className="font-sans text-2xl sm:text-3xl font-black text-[#f3ba2f] tracking-tight">
              Quality Teaching
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-200 mt-1.5">
              Better Results
            </div>
            <div className="text-[11px] text-slate-300/80 mt-1">
              Concept-Based & Small Batches
            </div>
          </div>

          {/* Feature Card 3: Online & Offline Classes */}
          <div className="rounded-2xl border border-white/10 bg-[#0c1a33]/85 backdrop-blur-xl px-5 sm:px-6 py-5 sm:py-6 shadow-2xl text-center transition-transform hover:-translate-y-1">
            <div className="font-sans text-2xl sm:text-3xl font-black text-[#f3ba2f] tracking-tight">
              Online & Offline
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-200 mt-1.5">
              Classes Available
            </div>
            <div className="text-[11px] text-slate-300/80 mt-1">
              Learn from Anywhere, Anytime!
            </div>
          </div>

        </div>

        {/* Bottom Motto Strip from Brochure */}
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-300/80 mt-4">
          ★ Discipline Today, Success Tomorrow ★
        </p>
      </motion.div>

    </section>
  );
}
