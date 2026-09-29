import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import officialLogo from "@/assets/logo.png";
import { Sparkles, GraduationCap } from "lucide-react";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [statusText, setStatusText] = useState("Preparing Academic Portal...");

  useEffect(() => {
    const duration = 1100; // 1.1s total smooth load
    const interval = 16;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next < 35) {
          setStatusText("Initializing Academic Curriculum...");
        } else if (next < 70) {
          setStatusText("Preparing Faculty & Doubt Desks...");
        } else if (next < 95) {
          setStatusText("Calibrating Board Test Series...");
        } else {
          setStatusText("Welcome to Premier Coaching");
        }

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 180);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#050e1d] text-white select-none overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Multi-layered Ambient Light Spheres */}
          <div className="pointer-events-none absolute -top-24 size-[550px] rounded-full bg-blue-600/10 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-24 size-[550px] rounded-full bg-amber-500/10 blur-[150px]" />
          <div className="pointer-events-none absolute size-[400px] rounded-full bg-amber-400/10 blur-[120px]" />

          {/* Central Logo & Orbital Ring */}
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            {/* Orbital Badge Container */}
            <div className="relative mb-6 flex size-28 items-center justify-center">
              {/* Outer Rotating Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#f3ba2f]/40"
              />

              {/* Inner Counter-Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-[#f3ba2f]/30 opacity-70"
              />

              {/* Logo Core */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0c1a33] to-[#123875] p-3 shadow-2xl border border-white/20"
              >
                <img
                  src={officialLogo}
                  alt="Premier Coaching Logo"
                  width={64}
                  height={64}
                  className="size-14 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* Floating Sparkle Glyph */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute -top-1 -right-1 grid size-7 place-items-center rounded-full bg-[#f3ba2f] text-[#071328] shadow-lg"
              >
                <Sparkles className="size-3.5 fill-current" />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="space-y-1.5"
            >
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                <span>Premier</span>
                <span className="text-[#f3ba2f]">Coaching</span>
              </h1>

              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#f3ba2f]">
                <GraduationCap className="size-3.5 text-[#f3ba2f]" />
                <span>CLASSES 1ST TO 12TH • DUBAGGA</span>
              </div>
            </motion.div>

            {/* Progress Bar Container with Laser Head */}
            <div className="mt-8 w-64 sm:w-72">
              <div className="relative h-2 rounded-full bg-white/10 overflow-hidden border border-white/15 p-0.5 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#0c1a33] via-[#e5b842] to-[#f3ba2f] shadow-[0_0_12px_rgba(243,186,47,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status and Percentage Display */}
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="truncate pr-2 font-sans text-[11px] text-slate-400">
                  {statusText}
                </span>
                <span className="font-mono text-xs font-bold text-[#f3ba2f]">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Academic Seal Strip */}
          <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-3 text-[11px] font-bold text-slate-400 tracking-wider">
            <span>CBSE</span>
            <span className="size-1 rounded-full bg-white/30" />
            <span>ICSE</span>
            <span className="size-1 rounded-full bg-white/30" />
            <span>UP STATE BOARD</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
