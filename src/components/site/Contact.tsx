import {
  Phone,
  MessageCircle,
  MapPin,
  Navigation,
  ArrowRight,
  Clock,
  ExternalLink,
  Car,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { siteContent } from "@/data/siteContent";
import { whatsappLink } from "@/lib/enquiry";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import building from "@/assets/building.jpeg";

export function Contact() {
  const { contact } = siteContent;

  const directionsUrl =
    (contact as { mapDirectUrl?: string }).mapDirectUrl ||
    `https://www.google.com/maps/dir/?api=1&destination=26.875355666865893,80.8488055402853`;

  const mapSrc =
    contact.mapEmbedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.7215561446554!2d80.8488055402853!3d26.875355666865893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff006e570e7b%3A0xc306de5147444ee5!2sDileep%20Market!5e0!3m2!1sen!2sin!4v1790765177409!5m2!1sen!2sin";

  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Trigger map loading when within 1000px of viewport
    if (typeof window !== "undefined" && "IntersectionObserver" in window && mapContainerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShouldLoadMap(true);
            observer.disconnect();
          }
        },
        { rootMargin: "1000px" }
      );
      observer.observe(mapContainerRef.current);

      // 2. Fallback: preload after 2 seconds of idle time so it's ready before the user scrolls
      const idleTimer = setTimeout(() => {
        setShouldLoadMap(true);
      }, 2000);

      return () => {
        observer.disconnect();
        clearTimeout(idleTimer);
      };
    } else {
      setShouldLoadMap(true);
    }
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-slate-50 dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="CAMPUS & CONNECT"
          title="Visit Our Coaching Center"
          subtitle="Experience our disciplined learning environment in Dubagga, Lucknow. Drop by for a counseling session or reach out directly."
          align="center"
        />

        {/* ==================== 3 CONTACT QUICK CHANNELS ==================== */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Direct Phone Helpline */}
          <Reveal delay={0.05}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1a33]/90 p-6 sm:p-7 shadow-sm hover:shadow-md dark:shadow-xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 shadow-xs transition-transform group-hover:scale-105">
                  <Phone className="size-5" />
                </span>
                <span className="block mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Direct Helpline
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Speak with Faculty
                </h3>
                <div className="mt-4 space-y-1">
                  <a
                    href={`tel:+91${contact.phonePrimary}`}
                    className="block text-base font-bold text-slate-900 dark:text-white hover:text-[#d97706] dark:hover:text-[#f3ba2f] transition-colors"
                  >
                    +91 {contact.phonePrimary}
                  </a>
                  <a
                    href={`tel:+91${contact.phoneSecondary}`}
                    className="block text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-[#d97706] dark:hover:text-[#f3ba2f] transition-colors"
                  >
                    +91 {contact.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
                <a
                  href={`tel:+91${contact.phonePrimary}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d97706] dark:text-[#f3ba2f] hover:underline"
                >
                  <span>Call Primary Helpline</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Card 2: WhatsApp Support */}
          <Reveal delay={0.1}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1a33]/90 p-7 shadow-sm hover:shadow-md dark:shadow-xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-xs transition-transform group-hover:scale-105">
                  <MessageCircle className="size-5 fill-current text-emerald-600 dark:text-emerald-400" />
                </span>
                <span className="block mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  WhatsApp Support
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Instant WhatsApp Chat
                </h3>
                <p className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                  +91 {contact.phonePrimary}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-1">
                  Instant syllabus, fee structure &amp; batch timing info
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <span>Open WhatsApp Conversation</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Dubagga Center Address */}
          <Reveal delay={0.15}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1a33]/90 p-7 shadow-sm hover:shadow-md dark:shadow-xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 shadow-xs transition-transform group-hover:scale-105">
                  <MapPin className="size-5" />
                </span>
                <span className="block mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Campus Address
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Dubagga Center
                </h3>
                <p className="mt-4 text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {contact.address}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-1">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d97706] dark:text-[#f3ba2f] hover:underline"
                >
                  <span>Get Turn-by-Turn Navigation</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ==================== CAMPUS SHOWCASE & MAP ==================== */}
        <Reveal delay={0.2} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33]/95 shadow-md dark:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column (5 Cols): Institute Building Photo & Directions Guide */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-gradient-to-b dark:from-[#0c1a33] dark:to-[#081426]">
                <div className="space-y-6">
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Open for Admissions</span>
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Dubagga, Lucknow
                    </span>
                  </div>

                  {/* Real Photo of Coaching Building */}
                  <div
                    data-cursor="view"
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-900 shadow-md cursor-pointer"
                  >
                    <img
                      src={building}
                      alt="Premier Coaching Building premises behind Yadav Bazar, Dubagga"
                      width={500}
                      height={320}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-bold flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-[#f3ba2f]" />
                        <span>Institute Building</span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-xs">
                        Dubagga Center
                      </span>
                    </div>
                  </div>

                  {/* Landmark & Commute Instructions */}
                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                      How to Reach Premier Coaching
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-[#d97706] dark:text-[#f3ba2f] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-900 dark:text-white">Key Landmark:</strong> Located directly
                          behind the main Yadav Bazar market lane.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Car className="size-4 text-[#d97706] dark:text-[#f3ba2f] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-900 dark:text-white">Transit Access:</strong> Just 2 minutes
                          from Dubagga Chauraha / Hardoi Road. Accessible by e-rickshaw, auto, and
                          personal vehicle.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Clock className="size-4 text-[#d97706] dark:text-[#f3ba2f] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-900 dark:text-white">Counseling Timings:</strong> Center is
                          open during morning and evening batch hours for parent counseling.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Primary CTA Buttons for Directions & WhatsApp Pin */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 space-y-2.5">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] px-5 py-3.5 text-xs sm:text-sm font-bold text-[#071328] shadow-md shadow-amber-500/20 transition-all hover:scale-102 active:scale-95"
                  >
                    <Navigation className="size-4 text-[#071328]" />
                    <span>Get Turn-by-Turn Directions in Google Maps</span>
                  </a>

                  <a
                    href={whatsappLink(
                      "Hi Premier Coaching, please share your center's exact location pin on WhatsApp.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/15 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-white transition-colors"
                  >
                    <MessageCircle className="size-4 text-emerald-500" />
                    <span>Request Live Location Pin on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column (7 Cols): Framed Interactive Map Viewport */}
              <div className="lg:col-span-7 flex flex-col bg-slate-900">
                {/* Clean Map Header Bar */}
                <div className="bg-slate-900 dark:bg-[#081426] px-4 py-3 flex items-center justify-between text-white border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span className="size-2 rounded-full bg-[#f3ba2f] animate-pulse" />
                    <span className="font-serif">Premier Coaching Center • Dubagga</span>
                  </div>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#f3ba2f] hover:underline"
                  >
                    <span>Open in Full Maps</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>

                {/* Map Viewport Container */}
                <div
                  ref={mapContainerRef}
                  className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-full w-full flex-1 overflow-hidden bg-slate-900"
                >
                  {/* Stylized Loading Skeleton / Facade */}
                  <div
                    className={`absolute inset-0 z-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-700 ${
                      mapLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  >
                    {/* Background Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-15 bg-[radial-gradient(#f3ba2f_1px,transparent_1px)] [background-size:20px_20px]"
                      aria-hidden="true"
                    />

                    {/* Glowing Pin & Pulse */}
                    <div className="relative mb-4">
                      <span className="absolute -inset-3 rounded-full bg-amber-400/20 animate-ping" />
                      <span className="relative grid size-12 place-items-center rounded-2xl bg-amber-500/20 text-[#f3ba2f] border border-amber-400/40 shadow-lg shadow-amber-500/10">
                        <MapPin className="size-6" />
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1.5 max-w-xs">
                      <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-200">
                        <Loader2 className="size-3.5 text-[#f3ba2f] animate-spin" />
                        <span>Loading Interactive Map...</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Dubagga Center • Behind Yadav Bazar
                      </p>
                    </div>

                    <div className="mt-5 relative z-10">
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors"
                      >
                        <span>Open Directly in Google Maps</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </div>

                  {/* Preloaded Map Iframe */}
                  {shouldLoadMap && (
                    <iframe
                      title="Premier Coaching Location Map - Dubagga, Lucknow"
                      src={mapSrc}
                      loading="eager"
                      onLoad={() => setMapLoaded(true)}
                      className={`size-full border-0 absolute inset-0 transition-opacity duration-700 ${
                        mapLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}

                  {/* Top-Left Floating Branded Pin Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2 rounded-xl bg-slate-900/95 dark:bg-[#081426]/95 px-3.5 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md border border-white/15 pointer-events-none">
                    <MapPin className="size-3.5 text-[#f3ba2f] shrink-0" />
                    <span className="truncate">Behind Yadav Bazar, Dubagga, Lucknow</span>
                  </div>
                </div>

                {/* Bottom Transit Banner */}
                <div className="bg-slate-900 dark:bg-[#081426] px-4 py-2.5 flex items-center justify-between text-slate-300 text-[11px] border-t border-white/10">
                  <span className="truncate">
                    Safe campus environment with 2-wheeler and bicycle parking.
                  </span>
                  <a
                    href={`tel:+91${contact.phonePrimary}`}
                    className="hidden sm:inline-flex items-center gap-1 text-[#f3ba2f] font-bold hover:underline shrink-0"
                  >
                    <Phone className="size-3" />
                    <span>Need Help? Call +91 {contact.phonePrimary}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
