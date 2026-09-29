import { useState, useEffect, useCallback, useRef } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";
import { useTheme } from "@/hooks/use-theme";
import officialLogo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Courses", href: "#courses", id: "courses" },
  { label: "Subjects", href: "#subjects", id: "subjects" },
  { label: "Faculty", href: "#faculty", id: "faculty" },
  { label: "Results", href: "#results", id: "results" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;

    setIsScrolled(scrollY > 20);

    if (totalScrollable > 0) {
      setScrollProgress((scrollY / totalScrollable) * 100);
    }

    if (isClickScrollingRef.current) return;

    if (totalScrollable > 0 && scrollY + 50 >= totalScrollable) {
      setActiveSection(navItems[navItems.length - 1].id);
      return;
    }

    const probePosition = scrollY + 200;
    for (let i = navItems.length - 1; i >= 0; i--) {
      const el = document.getElementById(navItems[i].id);
      if (el && probePosition >= el.offsetTop) {
        setActiveSection(navItems[i].id);
        return;
      }
    }
    setActiveSection("hero");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const matched = navItems.find((item) => item.id === hash);
        if (matched) setActiveSection(matched.id);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [handleScroll]);

  const handleNavClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveSection(id);
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);

    const targetEl = document.getElementById(id);
    if (targetEl) {
      e.preventDefault();
      window.history.pushState(null, "", `#${id}`);
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300">
      {/* Hairline Golden Scroll Progress Bar */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-white/5 z-60 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#f3ba2f] via-[#e5b842] to-[#ff9800] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Editorial Navbar with Light & Dark Mode */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#071328]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 py-3 shadow-md dark:shadow-2xl"
            : "bg-transparent py-4 sm:py-5 border-b border-white/15"
        }`}
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 flex items-center justify-between gap-6">
          {/* Brand Logo & Editorial Title on Left */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick("hero", e)}
            className="flex items-center gap-3 shrink-0 group cursor-pointer"
          >
            <div className="size-9 sm:size-10 rounded-xl bg-gradient-to-br from-[#0a1e45] to-[#123875] p-1.5 shadow-sm ring-1 ring-white/20 flex items-center justify-center">
              <img
                src={officialLogo}
                alt="Premier Coaching Crest"
                width={36}
                height={36}
                className="size-full object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#f3ba2f] group-hover:text-[#ffd666] transition-colors">
                Premier Coaching
              </span>
              <span
                className={`block text-[9px] font-bold uppercase tracking-widest ${
                  isScrolled
                    ? "text-slate-500 dark:text-slate-400"
                    : "text-slate-300 dark:text-slate-400"
                }`}
              >
                Dubagga • Lucknow
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul
            className={`hidden xl:flex items-center gap-7 text-xs sm:text-sm font-semibold ${
              isScrolled
                ? "text-slate-700 dark:text-white/90"
                : "text-white/90"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative py-1">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#d97706] dark:text-[#f3ba2f] font-bold"
                        : isScrolled
                          ? "hover:text-[#d97706] dark:hover:text-[#f3ba2f]"
                          : "hover:text-[#f3ba2f]"
                    }`}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeEditorialIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#f3ba2f]"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            {/* Theme Toggle Button (Light / Dark) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className={`grid size-9.5 place-items-center rounded-xl transition-all cursor-pointer border ${
                isScrolled
                  ? "bg-slate-100 hover:bg-slate-200 border-slate-200/90 text-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 dark:text-white"
                  : "bg-white/15 hover:bg-white/25 border-white/20 text-white"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="size-4.5 text-[#f3ba2f] transition-transform hover:rotate-45" />
              ) : (
                <Moon className="size-4.5 text-slate-800 dark:text-slate-200 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* WhatsApp Link */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <MessageCircle className="size-4 text-emerald-500 dark:text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Helpline Phone */}
            <a
              href={`tel:+91${siteContent.contact.phonePrimary}`}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-[#d97706] dark:text-slate-300 dark:hover:text-[#f3ba2f]"
                  : "text-slate-300 hover:text-[#f3ba2f]"
              }`}
            >
              <Phone className="size-3.5 text-[#f3ba2f]" />
              <span className="hidden md:inline">+91 {siteContent.contact.phonePrimary}</span>
            </a>

            {/* Golden Primary CTA Button: Book demo */}
            <a
              href="#admission"
              onClick={(e) => handleNavClick("admission", e)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-[#071328] shadow-md transition-all hover:scale-103 active:scale-95 cursor-pointer"
            >
              <span>Book demo</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`grid size-9 place-items-center rounded-xl transition-all border ${
                isScrolled
                  ? "bg-slate-100 hover:bg-slate-200 border-slate-200/90 text-slate-800 dark:bg-white/10 dark:border-white/10 dark:text-white"
                  : "bg-white/15 hover:bg-white/25 border-white/20 text-white"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="size-4 text-[#f3ba2f]" />
              ) : (
                <Moon className="size-4 text-slate-800 dark:text-slate-200" />
              )}
            </button>

            <a
              href="#admission"
              onClick={(e) => handleNavClick("admission", e)}
              className="sm:hidden inline-flex items-center rounded-lg bg-[#f3ba2f] px-3 py-1.5 text-xs font-bold text-[#071328]"
            >
              <span>Demo</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              className={`grid size-9 place-items-center rounded-xl border ${
                isScrolled
                  ? "bg-slate-100 hover:bg-slate-200 border-slate-200/90 text-slate-800 dark:bg-white/10 dark:border-white/10 dark:text-white"
                  : "bg-white/15 hover:bg-white/25 border-white/20 text-white"
              }`}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-slate-200/90 dark:border-white/10 bg-white/98 dark:bg-[#071328]/98 px-4 pt-3 pb-5 shadow-2xl backdrop-blur-2xl xl:hidden"
            >
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          setMobileOpen(false);
                          handleNavClick(item.id, e);
                        }}
                        className={`flex items-center rounded-xl px-3 py-2.5 transition-all ${
                          isActive
                            ? "bg-[#f3ba2f] text-[#071328] font-bold"
                            : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10"
                        }`}
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
                <a
                  href="#admission"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick("admission", e);
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#f3ba2f] py-2.5 text-xs font-bold text-[#071328] shadow-md"
                >
                  <Sparkles className="size-3.5" />
                  <span>Book Free Demo Class</span>
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#00c853] py-2.5 text-xs font-bold text-white shadow-xs"
                >
                  <MessageCircle className="size-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
