interface SocialIconProps {
  name: 'facebook' | 'instagram' | 'youtube';
  size?: number;
  className?: string;
}

export default function SocialIcon({ name, size = 16, className }: SocialIconProps) {
  const common = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  };

  if (name === 'facebook') {
    return (
      <svg {...common}>
        <path d="M14 9.5V7.5c0-.83.67-1.5 1.5-1.5H17V3h-2.5A4 4 0 0 0 10.5 7v2.5H8V13h2.5v8h3.5v-8H17l.5-3.5h-3.5Z" />
      </svg>
    );
  }

  if (name === 'instagram') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5 15 12l-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
