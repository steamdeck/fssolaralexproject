import Image from 'next/image';
import type { SVGProps } from 'react';

export function Logo(props: Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & { width?: number, height?: number, className?: string }) {
  const { width = 32, height = 32, className, ...rest } = props;
  return (
    <div style={{ width, height }} className={className}>
      <Image
        src="/logo.png"
        alt="GH Solar Logo"
        width={width}
        height={height}
        {...rest}
      />
    </div>
  );
}
