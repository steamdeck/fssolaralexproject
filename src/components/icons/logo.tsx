
import Image from 'next/image';

export function Logo({
  width = 150,
  height = 75,
  ...props
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div {...props} style={{ width, height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://i.ibb.co/4g4tRhq2/ccrpes-Whats-App-Image-2025-11-15-at-12-50-34-PM-removebg-preview-1.jpg"
        alt="GH Solar Logo"
        width={width}
        height={height}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </div>
  );
}
