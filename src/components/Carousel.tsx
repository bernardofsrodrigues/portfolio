import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: ReactNode[];
  /** Tailwind basis classes per slide, e.g. "basis-full md:basis-1/2" */
  slideClassName?: string;
  ariaLabel?: string;
};

export function Carousel({ children, slideClassName = "basis-full md:basis-1/2", ariaLabel }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, skipSnaps: false });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  return (
    <div className="relative" aria-label={ariaLabel} role="region">
      <div className="overflow-hidden px-1 py-2 -mx-1" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {children.map((child, i) => (
            <div key={i} className={`min-w-0 shrink-0 grow-0 ${slideClassName} pl-5 first:pl-0`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-emerald hover:text-emerald transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-emerald hover:text-emerald transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? "w-6 bg-emerald" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
