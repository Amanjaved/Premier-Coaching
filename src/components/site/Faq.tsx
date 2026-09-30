import { useState } from "react";
import { Plus, Minus, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  return (
    <section
      id="faq"
      className="relative bg-white dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Frequently Asked Questions"
          subtitle="Clear answers about admissions, batches, boards, sibling discounts, and our concept-based learning methodology."
          align="center"
        />

        {/* Clean, Focused Accordion (Max Width 3xl) */}
        <div className="mt-12 sm:mt-16 mx-auto max-w-3xl space-y-3.5">
          {siteContent.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-amber-400/60 dark:border-amber-400/40 bg-white dark:bg-[#0c1a33] shadow-md dark:shadow-xl ring-1 ring-amber-400/20"
                      : "border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#0c1a33]/60 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>

                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-200 ${
                        isOpen
                          ? "bg-[#f3ba2f] text-[#071328] rotate-90"
                          : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20"
                      }`}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 dark:border-white/10 px-5 sm:px-6 pb-6 pt-3 animate-in fade-in duration-200">
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Clean WhatsApp & Helpline CTA Bar */}
        <Reveal delay={0.2} className="mt-12 sm:mt-16 mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c1a33] p-6 sm:p-8 text-center space-y-4 shadow-sm dark:shadow-xl">
            <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
              Still Have Questions?
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto font-normal">
              Our academic counselors are happy to discuss your child's batch schedule, syllabus, and book a counseling session.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25d366] hover:bg-[#20ba59] px-6 py-3 text-sm font-bold text-white shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="size-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:+91${siteContent.contact.phonePrimary}`}
                className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 px-6 py-3 text-sm font-bold text-slate-800 dark:text-white transition-colors"
              >
                <Phone className="size-4 text-[#d97706] dark:text-[#f3ba2f]" />
                <span>Call +91 {siteContent.contact.phonePrimary}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
