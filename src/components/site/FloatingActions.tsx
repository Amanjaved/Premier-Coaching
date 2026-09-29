import { MessageCircle, Phone, GraduationCap } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";

export function FloatingActions() {
  return (
    <>
      {/* Desktop/Tablet Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5">
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

      {/* Fixed Mobile Bottom High-Conversion CTA Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-1.5 border-t border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#081426]/95 p-2 backdrop-blur-xl sm:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_25px_rgba(0,0,0,0.4)]">
        {/* Call button */}
        <a
          href={`tel:+91${siteContent.contact.phonePrimary}`}
          className="inline-flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 py-2 text-[11px] font-bold text-slate-800 dark:text-white transition-transform active:scale-95 border border-slate-200 dark:border-white/10"
        >
          <Phone className="size-4 text-[#d97706] dark:text-[#f3ba2f]" />
          <span>CALL</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center gap-1 rounded-xl bg-[#25d366] hover:bg-[#20ba59] py-2 text-[11px] font-bold text-white shadow-xs transition-transform active:scale-95"
        >
          <MessageCircle className="size-4 fill-white" />
          <span>WHATSAPP</span>
        </a>

        {/* Enquire button */}
        <a
          href="#admission"
          className="inline-flex flex-col items-center justify-center gap-1 rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] py-2 text-[11px] font-bold text-[#071328] shadow-md transition-transform active:scale-95"
        >
          <GraduationCap className="size-4 text-[#071328]" />
          <span>ADMISSION</span>
        </a>
      </div>
    </>
  );
}
