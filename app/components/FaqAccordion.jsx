import { useRef, useState } from 'react';
import Icon from './Icon';

export default function FaqAccordion({ items, idPrefix = 'faq' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const triggerRefs = useRef([]);

  const focusTrigger = (index) => {
    const len = items.length;
    triggerRefs.current[(index + len) % len]?.focus();
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const buttonId = `${idPrefix}-button-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;
        const isOpen = openIndex === i;
        return (
          <div key={buttonId} className="overflow-hidden rounded-2xl border border-accent-500/30 bg-surface shadow-soft">
            <h3>
              <button
                type="button"
                id={buttonId}
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-accent-50/5"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    focusTrigger(i + 1);
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    focusTrigger(i - 1);
                  } else if (e.key === 'Home') {
                    e.preventDefault();
                    triggerRefs.current[0]?.focus();
                  } else if (e.key === 'End') {
                    e.preventDefault();
                    triggerRefs.current[items.length - 1]?.focus();
                  }
                }}
              >
                {item.icon && (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-500/50 text-accent-600">
                    <Icon name={item.icon} size={18} />
                  </span>
                )}
                <span className="flex-1 font-display text-base font-medium text-neutral-900">{item.question}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500/50 text-accent-600 transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <Icon name="Plus" size={16} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`px-5 pb-5 text-sm leading-6 text-neutral-600 ${item.icon ? 'sm:pl-19' : ''}`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
