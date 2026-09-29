import {
  Phone,
  MessageCircle,
  Sparkles,
  Percent,
  GraduationCap,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";
import { Reveal } from "./Reveal";
import { EnquiryForm } from "./EnquiryForm";

export function Admission() {
  return (
    <section
      id="admission"
      className="relative bg-slate-50 dark:bg-[#081426] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 -left-40 size-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/3 -right-40 size-[500px] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ==================== LEFT COLUMN: BRANDED ADMISSION PORTAL OVERVIEW ==================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0c1a33] dark:via-[#081426] dark:to-[#050e1d] p-6 sm:p-8 text-slate-800 dark:text-white shadow-md dark:shadow-2xl border border-slate-200 dark:border-white/15">
                {/* Header Pills */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 dark:border-amber-400/30 bg-amber-500/10 dark:bg-amber-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-[#f3ba2f] backdrop-blur-md">
                    <Sparkles className="size-3.5 text-[#d97706] dark:text-[#f3ba2f]" /> 2025–26 Enrollment
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3ba2f] px-3 py-1 text-xs font-bold text-[#071328] shadow-sm">
                    <Percent className="size-3.5 text-[#071328]" /> 50% Sibling Off
                  </span>
                </div>

                {/* Title & Crest */}
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/15 border border-amber-500/25 dark:border-amber-400/30 text-amber-700 dark:text-[#f3ba2f] shadow-xs shrink-0">
                    <GraduationCap className="size-6 text-[#d97706] dark:text-[#f3ba2f]" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                      {siteContent.admission.heading}
                    </h2>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-300">
                      Classes 1st–12th • CBSE • ICSE • UP Board
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  Take the first step toward stronger subject fundamentals and higher board
                  percentages. Book a counseling session or enroll your child in our small,
                  disciplined batches.
                </p>

                {/* 4-Step Simple Admission Process */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/15 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Admission Process:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <span className="grid size-5 place-items-center rounded-full bg-amber-500/15 dark:bg-amber-400/15 border border-amber-500/30 dark:border-amber-400/30 text-[10px] font-bold text-amber-800 dark:text-[#f3ba2f] shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Fill the quick enquiry form below</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="grid size-5 place-items-center rounded-full bg-amber-500/15 dark:bg-amber-400/15 border border-amber-500/30 dark:border-amber-400/30 text-[10px] font-bold text-amber-800 dark:text-[#f3ba2f] shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Free student &amp; parent academic counseling</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="grid size-5 place-items-center rounded-full bg-amber-500/15 dark:bg-amber-400/15 border border-amber-500/30 dark:border-amber-400/30 text-[10px] font-bold text-amber-800 dark:text-[#f3ba2f] shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Subject diagnostic baseline assessment</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="grid size-5 place-items-center rounded-full bg-amber-500/15 dark:bg-amber-400/15 border border-amber-500/30 dark:border-amber-400/30 text-[10px] font-bold text-amber-800 dark:text-[#f3ba2f] shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Batch allocation &amp; study material distribution</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-7 pt-5 border-t border-slate-100 dark:border-white/15 space-y-2.5">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#20ba59] active:scale-95"
                  >
                    <MessageCircle className="size-4 fill-white" />
                    <span>WhatsApp Direct Admission Helpline</span>
                  </a>

                  <a
                    href={`tel:+91${siteContent.contact.phonePrimary}`}
                    className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 py-3 text-xs sm:text-sm font-bold text-slate-800 dark:text-white border border-slate-200 dark:border-white/15 transition-colors"
                  >
                    <Phone className="size-4 text-[#d97706] dark:text-[#f3ba2f]" />
                    <span>Call: +91 {siteContent.contact.phonePrimary}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ==================== RIGHT COLUMN: ENQUIRY FORM ==================== */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
