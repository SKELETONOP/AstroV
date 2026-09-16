import { useRef } from 'react';
import Icon from './Icon';

export default function Carousel({ ariaLabel, className = '', children }) {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const firstChild = track.firstElementChild;
    const amount = (firstChild?.getBoundingClientRect().width ?? 300) + 24;
    track.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

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
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-accent-600 hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >
          <Icon name="ChevronLeft" size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-accent-600 hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}
