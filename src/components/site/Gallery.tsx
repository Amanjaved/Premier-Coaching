import { useState, useEffect, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Sparkles,
  Image as ImageIcon,
  Award,
  Calendar,
} from "lucide-react";
import { siteContent, type GalleryCategory } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const categories: Array<"ALL" | GalleryCategory> = [
  "ALL",
  "CLASSES",
  "STUDENTS",
  "EVENTS",
  "ACHIEVEMENTS",
  "CAMPUS",
];

export function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    filter === "ALL"
      ? siteContent.gallery.images
      : siteContent.gallery.images.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));
  }, [lightboxIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0,
    );
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="relative bg-white dark:bg-[#050e1d] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 -right-40 size-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -left-40 size-[500px] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="LIFE AT PREMIER COACHING"
          title={siteContent.gallery.heading}
          subtitle={siteContent.gallery.subheading}
          align="center"
        />

        {/* Category Filters with Counts */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count =
              cat === "ALL"
                ? siteContent.gallery.images.length
                : siteContent.gallery.images.filter((img) => img.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#f3ba2f] text-[#071328] shadow-md shadow-amber-500/20 scale-102"
                    : "bg-slate-50 dark:bg-[#0c1a33] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/30"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-black/20 text-[#071328]"
                      : "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Visual Story (First 3-4 Images) */}
        {filteredImages.length >= 3 && (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* Primary Large Hero Image (Index 0) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <Reveal>
                <div
                  role="button"
                  data-cursor="view"
                  tabIndex={0}
                  onClick={() => openLightbox(0)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openLightbox(0);
                  }}
                  className="group relative block w-full h-[320px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-3xl border-2 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0c1a33] shadow-md dark:shadow-2xl cursor-pointer transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#f3ba2f]"
                >
                  <img
                    src={filteredImages[0].src}
                    alt={filteredImages[0].alt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d]/95 via-[#050e1d]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#071328] bg-[#f3ba2f] px-3 py-1 rounded-full w-fit mb-2 shadow-sm">
                      {filteredImages[0].category} • Featured
                    </span>
                    <h3 className="text-lg sm:text-2xl font-serif font-bold leading-tight text-white">
                      {filteredImages[0].title || filteredImages[0].alt}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                      <Eye className="size-4 text-[#f3ba2f]" /> Click to view full resolution
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Companion Large Images (Index 1 & 2) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 sm:gap-6">
              {filteredImages.slice(1, 3).map((img, idx) => {
                const actualIndex = idx + 1;
                return (
                  <Reveal key={img.src + actualIndex} delay={0.1 * actualIndex} className="flex-1">
                    <div
                      role="button"
                      data-cursor="view"
                      tabIndex={0}
                      onClick={() => openLightbox(actualIndex)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") openLightbox(actualIndex);
                      }}
                      className="group relative block w-full h-[180px] sm:h-[205px] lg:h-[228px] overflow-hidden rounded-3xl border-2 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0c1a33] shadow-md dark:shadow-xl cursor-pointer transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#f3ba2f]"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d]/90 via-[#050e1d]/30 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#071328] bg-[#f3ba2f] px-2.5 py-0.5 rounded-full w-fit mb-1.5 shadow-sm">
                          {img.category}
                        </span>
                        <h4 className="text-sm sm:text-base font-serif font-bold leading-snug text-white line-clamp-1">
                          {img.title || img.alt}
                        </h4>
                        <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-amber-300 font-medium">
                          <Eye className="size-3 text-[#f3ba2f]" /> View photo
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

        {/* Gallery Collection: Remaining Photos Masonry + Campus Culture Highlight */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Dynamic Photo Masonry Columns */}
          <div className="lg:col-span-8 xl:col-span-9 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {(filteredImages.length >= 3 ? filteredImages.slice(3) : filteredImages).map(
              (img, offsetIdx) => {
                const actualIndex = filteredImages.length >= 3 ? offsetIdx + 3 : offsetIdx;
                return (
                  <Reveal
                    key={img.src + actualIndex}
                    delay={(offsetIdx % 3) * 0.05}
                    className="break-inside-avoid mb-4 inline-block w-full"
                  >
                    <div
                      role="button"
                      data-cursor="view"
                      tabIndex={0}
                      onClick={() => openLightbox(actualIndex)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") openLightbox(actualIndex);
                      }}
                      className="group relative block w-full overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0c1a33] shadow-sm hover:shadow-md dark:shadow-xl cursor-pointer transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#f3ba2f]"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={800}
                        loading="lazy"
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d]/95 via-[#050e1d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#071328] bg-[#f3ba2f] px-2.5 py-1 rounded-full w-fit backdrop-blur-md mb-1.5 shadow-sm">
                          {img.category}
                        </span>
                        <p className="text-xs sm:text-sm font-serif font-bold leading-snug text-white">
                          {img.title || img.alt}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-amber-300 font-semibold">
                          <Eye className="size-3.5 text-[#f3ba2f]" /> Click to view fullscreen
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              },
            )}
          </div>

          {/* Right: Institutional Community Highlight Card */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-5 lg:sticky lg:top-28">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a33] via-[#081426] to-[#050e1d] p-6 sm:p-7 text-white shadow-2xl border border-white/15">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#f3ba2f] border border-amber-400/30">
                  <Sparkles className="size-3 text-[#f3ba2f]" /> Campus Culture
                </span>

                <h3 className="mt-4 font-serif text-xl font-bold text-white leading-tight">
                  More Than a Coaching Center
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  We believe complete learning happens when academics are paired with creativity,
                  awareness, and joyful celebration of student milestones.
                </p>

                <div className="mt-6 pt-5 border-t border-white/15 space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="grid size-8 place-items-center rounded-xl bg-amber-400/15 text-[#f3ba2f] shrink-0 border border-amber-400/30">
                      <Award className="size-4" />
                    </span>
                    <div>
                      <strong className="block text-white font-bold">
                        Art &amp; Talent Competitions
                      </strong>
                      <span className="text-slate-300">
                        Drawing contests &amp; creative expression awards
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid size-8 place-items-center rounded-xl bg-amber-400/15 text-[#f3ba2f] shrink-0 border border-amber-400/30">
                      <Calendar className="size-4" />
                    </span>
                    <div>
                      <strong className="block text-white font-bold">World Awareness Days</strong>
                      <span className="text-slate-300">
                        World Water Day &amp; environmental poster campaigns
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid size-8 place-items-center rounded-xl bg-amber-400/15 text-[#f3ba2f] shrink-0 border border-amber-400/30">
                      <Sparkles className="size-4" />
                    </span>
                    <div>
                      <strong className="block text-white font-bold">Achievement Ceremonies</strong>
                      <span className="text-slate-300">
                        Annual cake cuttings &amp; topper felicitations
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-white/15">
                  <a
                    href="#admission"
                    className="block text-center rounded-xl bg-[#f3ba2f] hover:bg-[#e0ab24] py-3 text-xs font-bold text-[#071328] shadow-lg shadow-amber-500/20 transition-all hover:scale-102"
                  >
                    Join Our Student Community →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ==================== FULLSCREEN ACCESSIBLE LIGHTBOX MODAL ==================== */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Modal Header Controls */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20">
            <span className="rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
              {lightboxIndex !== null ? `${lightboxIndex + 1} of ${filteredImages.length}` : ""}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close modal"
              className="grid size-11 place-items-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 cursor-pointer"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 hover:scale-105 cursor-pointer z-20"
          >
            <ChevronLeft className="size-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 hover:scale-105 cursor-pointer z-20"
          >
            <ChevronRight className="size-7" />
          </button>

          {/* Centered Large Image with Caption */}
          <div
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
            />
            <div className="bg-[#071b3a] p-4 text-white flex items-center justify-between border-t border-white/10">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#ffc400]">
                  {activeImage.category}
                </span>
                <p className="text-sm font-bold text-white mt-0.5">
                  {activeImage.title || activeImage.alt}
                </p>
              </div>
              <span className="text-xs text-slate-400 font-medium">Premier Coaching Life</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
