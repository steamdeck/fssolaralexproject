
import type { SVGProps } from 'react';

export function Logo(props: Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & { width?: number, height?: number }) {
  const { width = 50, height = 50, ...rest } = props;
  return (
    <svg
      viewBox="0 0 100 100" // Changed to a square viewBox
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
        </linearGradient>
      </defs>
      
      {/* Centered square container */}
      <rect x="0" y="0" width="100" height="100" fill="transparent" />

      {/* Sun Icon */}
      <g transform="translate(50, 50)"> 
        <circle cx="0" cy="0" r="24" fill="url(#logoGradient)" />
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={38 * Math.cos((i * 45 * Math.PI) / 180)}
            y2={38 * Math.sin((i * 45 * Math.PI) / 180)}
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            transform={`rotate(22.5)`} // Offset rotation for better balance
          />
        ))}
         <circle cx="0" cy="0" r="12" fill="hsl(var(--background))" />
      </g>

    </svg>
  );
}
