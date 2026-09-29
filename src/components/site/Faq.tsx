import { useState, useMemo } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle2,
  Search,
  X,
  HelpCircle,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import studentsGroup3 from "@/assets/students-group-3.jpeg";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggle = (i: number) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  const categorizedFaqs = useMemo(() => {
    return siteContent.faqs.map((faq, index) => {
      let category = "ACADEMICS";
      if (faq.q.includes("classes") || faq.q.includes("boards") || faq.q.includes("subjects")) {
        category = "CURRICULUM";
      } else if (
        faq.q.includes("discount") ||
        faq.q.includes("admission") ||
        faq.q.includes("enquire")
      ) {
        category = "ADMISSIONS";
      } else if (faq.q.includes("batch") || faq.q.includes("online") || faq.q.includes("located")) {
        category = "LOGISTICS";
      }
      return { ...faq, index, category };
    });
  }, []);

  const filteredFaqs = useMemo(() => {
    return categorizedFaqs.filter((f) => {
      const matchesCategory = filter === "ALL" || f.category === filter;
      const qLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !qLower || f.q.toLowerCase().includes(qLower) || f.a.toLowerCase().includes(qLower);
      return matchesCategory && matchesSearch;
    });
  }, [categorizedFaqs, filter, searchQuery]);

  return (
    <section
      id="faq"
      className="relative bg-white dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know"
          subtitle="Clear answers about admissions, batches, boards, sibling scholarships, and our concept-based learning methodology."
          align="center"
        />

        {/* Search Bar + Category Filters */}
        <div className="mt-8 sm:mt-10 mx-auto max-w-2xl space-y-3.5">
          {/* Interactive Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(0);
              }}
              placeholder="Search questions (e.g. 'sibling discount', 'online', 'batches')..."
              className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c1a33] py-2.5 pl-11 pr-10 text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm focus:border-[#f3ba2f] focus:outline-none focus:ring-1 focus:ring-[#f3ba2f]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid size-6 place-items-center rounded-full text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-800 dark:hover:text-white"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { id: "ALL", label: "All Questions" },
              { id: "ADMISSIONS", label: "Admissions & Fees" },
              { id: "CURRICULUM", label: "Classes & Boards" },
              { id: "LOGISTICS", label: "Batches & Location" },
            ].map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setFilter(cat.id);
                    setOpenIndex(0);
                  }}
                  className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#f3ba2f] text-[#071328] shadow-md shadow-amber-500/20 scale-102"
                      : "bg-slate-50 dark:bg-[#0c1a33] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Accordion Left + Counselor Card Right */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categorized FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 dark:border-white/20 bg-slate-50/60 dark:bg-[#0c1a33]/60 p-8 text-center space-y-4 shadow-sm">
                <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30">
                  <HelpCircle className="size-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                    No matching questions found
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">
                    We're here to help! Ask our counselors directly on WhatsApp or call our
                    helpline.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={whatsappLink(
                      `Hi Premier Coaching, I had a question about: "${searchQuery}"`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-2.5 text-xs font-bold text-white shadow-soft hover:bg-[#20ba59]"
                  >
                    <MessageCircle className="size-4 fill-white" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              filteredFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <Reveal key={faq.q} delay={i * 0.04}>
                    <div
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-amber-400/60 dark:border-amber-400/40 bg-white dark:bg-[#0c1a33] shadow-md dark:shadow-xl ring-1 ring-amber-400/20"
                          : "border-slate-200/90 dark:border-white/10 bg-slate-50/60 dark:bg-[#0c1a33]/80 hover:border-slate-300 dark:hover:border-white/25 shadow-xs"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggle(i)}
                        className="flex w-full items-center justify-between gap-4 p-4 sm:p-4.5 text-left cursor-pointer"
                      >
                        <span className="flex items-center gap-2.5 font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          <span
                            className={`size-2 rounded-full shrink-0 transition-colors ${
                              isOpen ? "bg-[#f3ba2f]" : "bg-slate-300 dark:bg-white/30"
                            }`}
                          />
                          <span>{faq.q}</span>
                        </span>

                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-full transition-all duration-200 ${
                            isOpen
                              ? "bg-[#f3ba2f] text-[#071328] rotate-90"
                              : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20"
                          }`}
                        >
                          {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="border-t border-slate-100 dark:border-white/10 px-4 pb-4 pt-2.5 animate-in fade-in duration-200">
                          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })
            )}
          </div>

          {/* Right Column: Direct Counselor Assistance Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33]/90 p-6 sm:p-8 shadow-md dark:shadow-2xl text-center">
                {/* Photo of Classroom discussion */}
                <div
                  className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs"
                  data-cursor="view"
                >
                  <img
                    src={studentsGroup3}
                    alt="Premier Coaching classroom session"
                    width={400}
                    height={250}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-6 text-left space-y-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30">
                    <Sparkles className="size-3 text-[#d97706] dark:text-[#f3ba2f]" /> Academic Counseling
                  </div>
                  <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    Still Have Questions?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Our team is happy to help parents select the right batch, understand the
                    syllabus coverage, and book a free counseling interaction.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 space-y-2.5">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#20ba59] active:scale-95"
                  >
                    <MessageCircle className="size-4 fill-white" />
                    <span>Chat with Counselor on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:+91${siteContent.contact.phonePrimary}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/15 px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 dark:text-white transition-colors"
                  >
                    <Phone className="size-4 text-[#d97706] dark:text-[#f3ba2f]" />
                    <span>Call Helpline: +91 {siteContent.contact.phonePrimary}</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  <CheckCircle2 className="size-3.5 text-[#d97706] dark:text-[#f3ba2f]" />
                  <span>Prompt Response for Batch Inquiries</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
