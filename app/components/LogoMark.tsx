interface LogoMarkProps {
  size?: number;
  className?: string;
}

const rays = Array.from({ length: 12 }, (_, i) => i * 30);

export default function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g stroke="var(--accent-500)" strokeWidth="1.4" strokeLinecap="round">
        {rays.map((deg) => (
          <line
            key={deg}
            x1="20"
            y1="3"
            x2="20"
            y2="6.5"
            transform={`rotate(${deg} 20 20)`}
            opacity="0.85"
          />
        ))}
      </g>
      <circle cx="20" cy="20" r="13.5" fill="none" stroke="var(--accent-500)" strokeWidth="1.6" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontSize="17"
        fill="var(--accent-500)"
        fontFamily="'Noto Sans Devanagari', 'Nirmala UI', sans-serif"
      >
        ॐ
      </text>
    </svg>
  );
}
