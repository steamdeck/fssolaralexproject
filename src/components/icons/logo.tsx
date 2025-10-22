
import type { SVGProps } from 'react';

export function Logo(props: Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & { width?: number, height?: number }) {
  const { width = 32, height = 32, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      {...rest}
    >
      <g transform="translate(50,50) scale(0.8)">
        <g transform="translate(0, -10)">
          <path
            d="M 0 -45 L 20 -25 L 0 -5 L -20 -25 Z"
            fill="hsl(var(--accent))"
          />
          <circle cx="0" cy="0" r="20" fill="hsl(var(--primary))" />
          <g>
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 45})`}>
                <path d="M 0 -22 L 8 -35 L -8 -35 Z" fill="hsl(var(--accent))" />
              </g>
            ))}
          </g>
        </g>
      </g>
    </svg>
  );
}
