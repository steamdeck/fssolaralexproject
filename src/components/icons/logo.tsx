import Image from 'next/image';
import type { SVGProps } from 'react';

export function Logo(props: Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & { width?: number, height?: number, className?: string }) {
  const { width = 32, height = 32, className, ...rest } = props;
  return (
      <Image
        src="/logo.png"
        alt="Surya Solar Logo"
        width={width}
        height={height}
        className={className}
        {...rest}
      />
  );
}
