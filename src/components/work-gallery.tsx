import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface WorkImage {
  src: string;
  alt: string;
}

export interface WorkCategory {
  title: string;
  images: WorkImage[];
}

interface LightboxState {
  categoryIndex: number;
  imageIndex: number;
}

export function WorkGallery({ categories }: { categories: WorkCategory[] }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const touchStartX = useRef<number | null>(null);

  const closeLightbox = () => setLightbox(null);

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const imgs = categories[prev.categoryIndex].images;
      return { ...prev, imageIndex: (prev.imageIndex + 1) % imgs.length };
    });
  }, [categories]);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const imgs = categories[prev.categoryIndex].images;
      return { ...prev, imageIndex: (prev.imageIndex - 1 + imgs.length) % imgs.length };
    });
  }, [categories]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, goNext, goPrev]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  const currentImages = lightbox ? categories[lightbox.categoryIndex].images : [];
  const currentImage = lightbox ? currentImages[lightbox.imageIndex] : null;

  return (
    <>
      <div className="space-y-12 md:space-y-16">
        {categories.map((cat, ci) => (
          <CategoryStrip
            key={cat.title}
            category={cat}
            onImageTap={(imgIndex) => setLightbox({ categoryIndex: ci, imageIndex: imgIndex })}
          />
        ))}
      </div>

      {lightbox && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeLightbox}
            aria-label="დახურვა"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition p-2 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {currentImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="წინა"
              className="absolute left-2 md:left-6 text-white/50 hover:text-white transition p-2 md:p-3 z-10"
            >
              <ChevronLeft className="h-7 w-7 md:h-8 md:w-8" />
            </button>
          )}

          <img
            src={currentImage.src}
            alt={currentImage.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[88vw] object-contain rounded-lg select-none"
            draggable={false}
          />

          {currentImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="შემდეგი"
              className="absolute right-2 md:right-6 text-white/50 hover:text-white transition p-2 md:p-3 z-10"
            >
              <ChevronRight className="h-7 w-7 md:h-8 md:w-8" />
            </button>
          )}

          {currentImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.2em]">
              {lightbox.imageIndex + 1} / {currentImages.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function CategoryStrip({
  category,
  onImageTap,
}: {
  category: WorkCategory;
  onImageTap: (imageIndex: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? (el.scrollLeft / max) * 100 : 0;
    setProgress(pct);
  };

  const showProgress = category.images.length > 1;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-xl md:text-2xl">{category.title}</h3>
        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {category.images.length} პროექტი
        </span>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1"
      >
        {category.images.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => onImageTap(idx)}
            className="relative flex-shrink-0 snap-start w-[72%] sm:w-[38%] md:w-[28%] lg:w-[22%] aspect-[4/5] rounded-xl overflow-hidden bg-muted"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {showProgress && (
        <div className="mt-3 h-[3px] bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(progress, 6)}%` }}
          />
        </div>
      )}
    </div>
  );
}