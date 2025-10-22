
import type { SVGProps } from 'react';
import Image from 'next/image';

export function Logo(props: Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & { width?: number, height?: number }) {
  const { width = 150, height = 50, ...rest } = props;
  return (
    <svg 
      viewBox="0 0 200 70"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#FFD700', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#FFA500', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#005C97', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#363795', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Sun */}
      <g transform="translate(30, 25)">
        <path d="M-15.3,5.2C-12,2,-10.8-2.6-7.8-5.3c-7.8,3.2-12.2,12-9.7,20C-16,16.5-16.7,9.6-15.3,5.2z" fill="url(#sunGradient)"/>
        <path d="M-21.2,16.5c-0.3-1.1-0.4-2.3-0.4-3.4c0-9.4,7.6-17,17-17c2,0,4,0.4,5.8,1.1C-9.3-5.2-22.1,3.4-21.2,16.5z" fill="url(#sunGradient)"/>
        {[...Array(12)].map((_, i) => (
          <path 
            key={i}
            transform={`rotate(${i * 30})`}
            d="M0,-18 L1.5,-14 L-1.5,-14 Z" 
            fill="#FFA500" 
          />
        ))}
      </g>
      
      {/* Roof */}
      <g transform="translate(40, 10)">
        <path d="M0,25 L30,0 L60,0 L80,20 L95,20 L125, -5 L145,15 L110,45 L40,45 Z" fill="url(#roofGradient)" />
        {/* Panels */}
        {[...Array(6)].map((_, i) => (
          <path key={`row1-${i}`} d={`M${5+i*18},33 L${18+i*18},22 L${23+i*18},22 L${10+i*18},33 Z`} fill="#363795" opacity="0.5"/>
        ))}
        {[...Array(5)].map((_, i) => (
           <path key={`row2-${i}`} d={`M${35+i*15},12 L${45+i*15},5 L${50+i*15},5 L${40+i*15},12 Z`} fill="#363795" opacity="0.5"/>
        ))}
         <path d="M97,19 L110,10 L115,10 L102,19 Z" fill="#363795" opacity="0.5"/>
         <path d="M112,8 L125,0 L130,0 L117,8 Z" fill="#363795" opacity="0.5"/>
      </g>
      
      {/* House Base */}
      <g transform="translate(85, 30)">
        <path d="M0,0 L10,0 L10,20 L0,20 Z" fill="#00406A"/>
        <path d="M20,0 L30,0 L30,20 L20,20 Z" fill="#00406A"/>
        <rect x="2" y="12" width="6" height="6" fill="#FFFFE0" opacity="0.7"/>
        <rect x="22" y="12" width="6" height="6" fill="#FFFFE0" opacity="0.7"/>
      </g>

      {/* Text */}
      <text x="45" y="58" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#005C97">
        GH SOLAR
      </text>
      <text x="95" y="68" fontFamily="sans-serif" fontSize="7" fill="#6c757d">
        Eco Polis Pvt. Ltd.
      </text>
    </svg>
  );
}
