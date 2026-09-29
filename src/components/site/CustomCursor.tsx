import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "motion/react";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "input" | "view" | "drag">(
    "default",
  );
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  // Direct instantaneous mouse coordinates (zero latency)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth, fluid trailing springs for the outer halo (luxurious liquid inertia)
  const haloX = useSpring(mouseX, { stiffness: 450, damping: 32, mass: 0.08 });
  const haloY = useSpring(mouseY, { stiffness: 450, damping: 32, mass: 0.08 });

  // Add click ripple
  const triggerRipple = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev.slice(-3), { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  useEffect(() => {
    // Disable completely on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("input, textarea, [contenteditable='true']")) {
        setCursorType("input");
      } else if (
        target.closest(
          "[data-cursor='view'], #gallery img, .gallery-item, #results img, [data-lightbox='true']",
        )
      ) {
        setCursorType("view");
      } else if (
        target.closest(
          "a, button, [role='button'], select, label, input[type='checkbox'], input[type='radio'], .cursor-pointer",
        )
      ) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      triggerRipple(e.clientX, e.clientY);
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY, triggerRipple]);

  if (isTouch || !isVisible) return null;

  const isPointer = cursorType === "pointer";
  const isInput = cursorType === "input";
  const isView = cursorType === "view";

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden select-none">
      {/* ---------------- 1. Click Ripple Shockwaves ---------------- */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.2, opacity: 0.85 }}
            animate={{ scale: 2.8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: ripple.x,
              top: ripple.y,
              transform: "translate(-50%, -50%)",
            }}
            className="size-10 rounded-full border-2 border-[#ffc400] bg-gradient-to-r from-[#d7193f]/30 to-[#ffc400]/30 pointer-events-none"
          />
        ))}
      </AnimatePresence>

      {/* ---------------- 2. Fluid Magnetic Follower Halo ---------------- */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none transition-colors duration-200"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isView ? 76 : isPointer ? 48 : isInput ? 0 : 34,
          height: isView ? 76 : isPointer ? 48 : isInput ? 0 : 34,
          opacity: isInput ? 0 : 1,
          borderColor: isView
            ? "rgba(255, 196, 0, 0.85)"
            : isPointer
              ? "rgba(215, 25, 63, 0.65)"
              : "rgba(27, 78, 155, 0.35)",
          borderWidth: isView ? "2px" : "1.5px",
          backgroundColor: isView
            ? "rgba(5, 19, 41, 0.92)"
            : isPointer
              ? "rgba(215, 25, 63, 0.08)"
              : "rgba(255, 196, 0, 0.04)",
          boxShadow: isView
            ? "0 0 25px rgba(255, 196, 0, 0.4), inset 0 0 15px rgba(255, 196, 0, 0.2)"
            : isPointer
              ? "0 0 18px rgba(215, 25, 63, 0.25)"
              : "0 0 10px rgba(27, 78, 155, 0.15)",
          backdropFilter: isView ? "blur(8px)" : "blur(0px)",
          scale: isClicking ? 0.78 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        {/* Dynamic "VIEW" Badge with eye glyph for Gallery & Achievement photos */}
        {isView && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center gap-0.5 text-center"
          >
            <svg
              className="size-3.5 text-[#ffc400]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="text-[9px] font-black uppercase tracking-widest text-[#ffc400] leading-none">
              VIEW
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* ---------------- 3. Zero-Latency Precision Pointer ---------------- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          // When in default mode, offset slightly so tip is exactly at hotspot (0,0)
          translateX: isView ? "-50%" : isPointer ? "-50%" : isInput ? "-50%" : "-2px",
          translateY: isView ? "-50%" : isPointer ? "-50%" : isInput ? "-50%" : "-2px",
        }}
      >
        {isInput ? (
          // Sleek text-caret indicator when hovering inputs
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-5 w-[2px] rounded-full bg-[#d7193f] shadow-[0_0_8px_rgba(215,25,63,0.8)]"
          />
        ) : isView ? (
          // In view mode, center is subtle gold dot inside badge
          <div className="size-1 rounded-full bg-[#ffc400] opacity-0" />
        ) : isPointer ? (
          // Interactive target dot when hovering links/buttons
          <motion.div
            animate={{
              scale: isClicking ? 0.7 : 1.25,
            }}
            transition={{ duration: 0.12 }}
            className="relative flex items-center justify-center size-3.5"
          >
            <span className="absolute inset-0 rounded-full bg-[#ffc400] opacity-60 animate-ping" />
            <span className="size-2 rounded-full bg-[#d7193f] border border-[#ffc400] shadow-[0_0_8px_rgba(215,25,63,0.9)]" />
          </motion.div>
        ) : (
          // Flagship Precision Arrow Pointer: High-contrast aerodynamic needle
          <motion.div
            animate={{
              scale: isClicking ? 0.82 : 1,
              rotate: isClicking ? -12 : 0,
            }}
            transition={{ duration: 0.1 }}
            className="relative"
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_2px_8px_rgba(5,19,41,0.45)]"
            >
              {/* Outer stroke for crisp visibility on both dark and light backgrounds */}
              <path
                d="M1.5 2.5L8.5 21.5L12.5 13.5L20.5 11.5L1.5 2.5Z"
                fill="#071b3a"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Internal Flame Accent Ribbon */}
              <path d="M4.5 5.5L9 18L12 12.5L17.5 11L4.5 5.5Z" fill="url(#cursor-flame-gradient)" />
              {/* Ultra-sharp Golden Tip Dot */}
              <circle cx="2" cy="3" r="1.5" fill="#ffc400" />
              <defs>
                <linearGradient
                  id="cursor-flame-gradient"
                  x1="4.5"
                  y1="5.5"
                  x2="17.5"
                  y2="18"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffc400" />
                  <stop offset="0.5" stopColor="#f4511e" />
                  <stop offset="1" stopColor="#d7193f" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
