import { MessageCircle, Phone, GraduationCap } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";

export function FloatingActions() {
  return (
    <>
      {/* Desktop/Tablet Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 print:hidden">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Premier Coaching on WhatsApp"
          className="group relative flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-108 hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] active:scale-95"
        >
          {/* Pulsing ring */}
          <span
            className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40 pointer-events-none"
            aria-hidden="true"
          />
          <MessageCircle className="size-7 fill-white text-[#25d366] transition-transform group-hover:scale-110" />
        </a>
      </div>

      {/* Fixed Mobile Bottom High-Conversion Dual CTA Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#071328]/95 p-2.5 backdrop-blur-xl sm:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.12)] print:hidden">
        {/* WhatsApp Us button */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#20ba59] active:scale-[0.98] py-3 text-xs font-bold text-white shadow-sm transition-all"
        >
          <MessageCircle className="size-4 fill-white" />
          <span>WhatsApp Us</span>
        </a>

        {/* Admission Open button */}
        <a
          href="#admission"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] active:scale-[0.98] py-3 text-xs font-bold text-[#071328] shadow-sm transition-all"
        >
          <GraduationCap className="size-4 text-[#071328]" />
          <span>Admission Open</span>
        </a>
      </div>
    </>
  );
}
