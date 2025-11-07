
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
        src="https://i.ibb.co/1GzfGM4W/Whats-App-Image-2025-10-11-at-10-33-52-AM.jpg"
        alt="GH Solar Logo"
        width={width}
        height={height}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </div>
  );
}
