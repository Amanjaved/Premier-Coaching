import {
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Award,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";
import officialLogo from "@/assets/logo.png";

export function Footer() {
  const { contact } = siteContent;

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Institute", href: "#about" },
    { label: "Our Strengths", href: "#highlights" },
    { label: "Academic Courses", href: "#courses" },
    { label: "Subject Matrix", href: "#subjects" },
    { label: "Meet the Faculty", href: "#faculty" },
    { label: "Why Choose Us", href: "#why-choose" },
    { label: "Board Results", href: "#results" },
    { label: "Photo Gallery", href: "#gallery" },
    { label: "Admission FAQs", href: "#faq" },
    { label: "Contact & Location", href: "#contact" },
  ];

  const courseLinks = [
    { label: "Foundation Batch (Class 1st–8th)", href: "#courses" },
    { label: "Board Exam Preparation (9th–12th)", href: "#courses" },
    { label: "School Tuition Support", href: "#courses" },
    { label: "Competitive Exam & Olympiad", href: "#courses" },
    { label: "1-on-1 Doubt Clearing Sessions", href: "#courses" },
  ];

  return (
    <footer className="relative bg-[#030914] text-white pt-16 sm:pt-20 pb-24 sm:pb-14 border-t border-white/10 overflow-hidden print:pb-8 print:pt-8 print:border-none print:break-inside-avoid">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 size-96 rounded-full bg-blue-600/5 blur-[140px] print:hidden"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 size-80 rounded-full bg-amber-500/5 blur-[140px] print:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column (Col 4 on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero" className="inline-flex items-center gap-3">
              <div className="size-12 rounded-xl bg-gradient-to-br from-[#0c1a33] to-[#123875] p-2 shadow-sm ring-1 ring-white/20">
                <img
                  src={officialLogo}
                  alt="Premier Coaching Crest"
                  width={48}
                  height={48}
                  className="size-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="leading-tight">
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#f3ba2f]">
                  Premier Coaching
                </span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-400/80">
                  LEARN • PRACTICE • SUCCEED
                </span>
              </div>
            </a>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-sm font-normal">
              Providing disciplined, concept-based coaching for school students from Class 1st to
              12th in Dubagga, Lucknow. Focused on CBSE, ICSE, and UP State Board success.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300">
                <Award className="size-4 text-[#f3ba2f]" /> Dubagga's Dedicated Coaching Institute
              </span>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
                <Sparkles className="size-4 text-[#f3ba2f]" /> Discipline Today, Success Tomorrow
              </span>
            </div>
          </div>

          {/* Quick Links (Col 2 on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3ba2f] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f3ba2f] hover:translate-x-0.5"
                  >
                    <ArrowRight className="size-3.5 text-[#f3ba2f]/70" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Pathways (Col 3 on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3ba2f] mb-4">
              Academic Courses
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
              {courseLinks.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f3ba2f] hover:translate-x-0.5"
                  >
                    <GraduationCap className="size-4 text-[#f3ba2f]" />
                    <span>{course.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 3 on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3ba2f] mb-4">
              Contact &amp; Campus
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4.5 shrink-0 text-[#f3ba2f]" />
                <span className="leading-snug">{contact.address}, Lucknow, UP</span>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4.5 shrink-0 text-[#f3ba2f]" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:+91${contact.phonePrimary}`}
                    className="font-bold text-white hover:text-[#f3ba2f]"
                  >
                    +91 {contact.phonePrimary}
                  </a>
                  <a
                    href={`tel:+91${contact.phoneSecondary}`}
                    className="text-slate-300 hover:text-[#f3ba2f]"
                  >
                    +91 {contact.phoneSecondary}
                  </a>
                </div>
              </li>

              <li className="pt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-soft transition-transform active:scale-95 hover:bg-[#20ba59]"
                >
                  <MessageCircle className="size-4 fill-white" />
                  <span>Connect on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
          <p>{siteContent.footer.copyright}</p>
          <p>Premier Coaching Institute • Dubagga, Lucknow, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
