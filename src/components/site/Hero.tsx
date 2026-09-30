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
      className="relative min-h-screen lg:min-h-[102vh] flex flex-col justify-between overflow-hidden text-white pt-40 sm:pt-48 lg:pt-56 pb-20 sm:pb-24 lg:pb-28 select-none bg-[#050e1d]"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(5, 14, 29, 0.82) 0%, rgba(5, 14, 29, 0.70) 45%, rgba(5, 14, 29, 0.95) 100%),
          url(${heroGroupPhoto})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center 28%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle Ambient Backlight Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 size-[750px] rounded-full bg-blue-600/10 blur-[160px]"
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
          className="flex flex-wrap items-center justify-center gap-4 pt-8 sm:pt-10"
        >
          {/* Primary Button */}
          <a
            href="#admission"
            onClick={scrollToAdmission}
            className="rounded-full bg-[#f3ba2f] hover:bg-[#e0ab24] px-8 sm:px-10 py-3.5 sm:py-4 text-base font-bold text-[#071328] shadow-lg shadow-amber-500/25 transition-all hover:scale-103 active:scale-95 cursor-pointer"
          >
            <span>Book Free Demo &amp; Counseling</span>
          </a>

          {/* Secondary Button */}
          <a
            href="#courses"
            onClick={scrollToCourses}
            className="rounded-full bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 px-8 sm:px-10 py-3.5 sm:py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:scale-103 active:scale-95 cursor-pointer"
          >
            <span>Explore Academic Courses →</span>
          </a>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HORIZONTAL EDITORIAL TRUST STRIP (NO CARDS, CLEAN HORIZONTAL BAND)    */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mx-auto max-w-[1360px] px-4 sm:px-6 w-full z-10 pt-16 sm:pt-20 lg:pt-24"
      >
        <div className="rounded-2xl border border-white/15 bg-[#071328]/90 backdrop-blur-xl px-6 sm:px-8 py-5 sm:py-6 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Item 1 */}
            <div className="pt-3 md:pt-0 md:px-4 first:pt-0 first:px-0">
              <span className="block text-base sm:text-lg font-bold text-[#f3ba2f]">Class 1st–12th</span>
              <span className="block text-xs sm:text-sm text-slate-300 mt-0.5">Primary Foundation &amp; Board Batches</span>
            </div>

            {/* Item 2 */}
            <div className="pt-3 md:pt-0 md:px-4">
              <span className="block text-base sm:text-lg font-bold text-white">CBSE • ICSE • UP Board</span>
              <span className="block text-xs sm:text-sm text-slate-300 mt-0.5">Board-Aligned Study Material</span>
            </div>

            {/* Item 3 */}
            <div className="pt-3 md:pt-0 md:px-4">
              <span className="block text-base sm:text-lg font-bold text-[#f3ba2f]">Small Batch Sizes</span>
              <span className="block text-xs sm:text-sm text-slate-300 mt-0.5">Individual Attention &amp; Daily Doubts</span>
            </div>

            {/* Item 4 */}
            <div className="pt-3 md:pt-0 md:px-4">
              <span className="block text-base sm:text-lg font-bold text-white">Online &amp; Offline</span>
              <span className="block text-xs sm:text-sm text-slate-300 mt-0.5">Dubagga Center &amp; Live Remote</span>
            </div>
          </div>
        </div>

        {/* Bottom Motto */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-amber-300/80 mt-4">
          Learn • Practice • Succeed — Discipline Today, Success Tomorrow
        </p>
      </motion.div>
    </section>
  );
}
