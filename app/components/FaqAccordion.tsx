import { useRef, useState } from 'react';
import Icon from './Icon';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  idPrefix?: string;
}

export default function FaqAccordion({ items, idPrefix = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTrigger = (index: number) => {
    const len = items.length;
    triggerRefs.current[(index + len) % len]?.focus();
  };

  return (
    <div className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-surface">
      {items.map((item, i) => {
        const buttonId = `${idPrefix}-button-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;
        const isOpen = openIndex === i;
        return (
          <div key={buttonId}>
            <h3>
              <button
                type="button"
                id={buttonId}
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-neutral-900 hover:bg-neutral-50"
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
                <span>{item.question}</span>
                <Icon
                  name="Plus"
                  size={18}
                  className={`shrink-0 text-accent-600 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-4 text-sm leading-6 text-neutral-600"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
