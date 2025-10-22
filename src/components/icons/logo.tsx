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
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-full"
      >
        <rect width="100" height="100" rx="20" fill="hsl(var(--primary))" />
        <path
          d="M50 25 L35 45 L50 45 L50 25 M50 25 L65 45 L50 45 L50 25"
          fill="hsl(var(--primary-foreground))"
          transform="rotate(45 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="45 50 50"
            to="405 50 50"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="50" cy="50" r="10" fill="hsl(var(--accent))" />
      </svg>
    </div>
  );
}
