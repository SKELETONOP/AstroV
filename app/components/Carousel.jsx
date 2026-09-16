import { Children, useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export default function Carousel({ ariaLabel, className = '', children }) {
  const trackRef = useRef(null);
  const count = Children.count(children);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const firstChild = track.firstElementChild;
    const amount = (firstChild?.getBoundingClientRect().width ?? 300) + 24;
    track.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0 || count <= 1) return;
    track.scrollTo({ left: (index / (count - 1)) * maxScroll, behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) {
        setActiveIndex(0);
        return;
      }
      const ratio = track.scrollLeft / maxScroll;
      const index = Math.round(ratio * (count - 1));
      setActiveIndex(Math.min(Math.max(index, 0), count - 1));
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => track.removeEventListener('scroll', handleScroll);
  }, [count]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label={ariaLabel}
      >
        {children}
      </div>
      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/50 text-accent-600 hover:border-accent-600 hover:bg-accent-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          >
            <Icon name="ChevronLeft" size={18} />
          </button>
          <span className="h-6 w-px bg-accent-500/30" aria-hidden="true" />
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/50 text-accent-600 hover:border-accent-600 hover:bg-accent-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          >
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>
        {count > 1 && (
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeIndex}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? 'w-6 bg-accent-600' : 'w-1.5 bg-neutral-400/40 hover:bg-accent-500/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
