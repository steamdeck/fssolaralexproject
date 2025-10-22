
import Image from 'next/image';

export function Logo({
  width = 50,
  height = 50,
  ...props
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div style={{ width, height }} {...props}>
      <Image
        src="/logo.png"
        alt="GH Solar Logo"
        width={width}
        height={height}
        className="rounded-full"
      />
    </div>
  );
}
