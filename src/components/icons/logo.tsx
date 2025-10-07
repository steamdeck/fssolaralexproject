import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4.5a7.5 7.5 0 1 0 5.3 2.2" />
      <path d="M12 3v1.5" />
      <path d="M18.36 5.64l-1.06 1.06" />
      <path d="M21 12h-1.5" />
      <path d="M18.36 18.36l-1.06-1.06" />
      <path d="M12 21v-1.5" />
      <path d="M5.64 18.36l1.06-1.06" />
      <path d="M3 12h1.5" />
      <path d="M5.64 5.64l1.06 1.06" />
      <path d="m2 14 3-3 5.5 5.5" />
      <path d="m14 2 3 3-5.5 5.5" />
      <path d="M12.5 10.5 9 7" />
    </svg>
  );
}
