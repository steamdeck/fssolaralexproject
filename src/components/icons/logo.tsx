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
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 240 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun */}
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#FFD700' }} />
            <stop offset="100%" style={{ stopColor: '#F9A825' }} />
          </radialGradient>
        </defs>
        <path d="M42.5,50 A30,30 0 0,1 102.5,50" fill="url(#sunGradient)"/>
        <g fill="#F9A825">
            <path transform="translate(72.5, 50) rotate(0)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
            <path transform="translate(72.5, 50) rotate(22.5)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
            <path transform="translate(72.5, 50) rotate(45)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
            <path transform="translate(72.5, 50) rotate(67.5)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
            <path transform="translate(72.5, 50) rotate(90)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
            <path transform="translate(72.5, 50) rotate(112.5)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
            <path transform="translate(72.5, 50) rotate(135)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
             <path transform="translate(72.5, 50) rotate(157.5)" d="M-2.5,-30 L2.5,-30 L0,-40 Z" />
        </g>
        
        {/* Roof */}
        <path d="M70,50 L155,20 L240,50 L200,50 L200,70 L180,70 L180,50 L155,40 L130,50 L130,70 L110,70 L110,50 Z" fill="#0D47A1" />

        {/* Solar Panels */}
        <g fill="#1565C0" stroke="#42A5F5" strokeWidth="0.5">
          <rect x="73" y="44" width="15" height="8" />
          <rect x="90" y="40" width="15" height="8" />
          <rect x="107" y="36" width="15" height="8" />
          <rect x="124" y="32" width="15" height="8" />
          <rect x="140" y="28" width="15" height="8" />

          <rect x="157" y="24" width="15" height="8" />
          <rect x="174" y="28" width="15" height="8" />
          <rect x="191" y="32" width="15" height="8" />
          <rect x="208" y="36" width="15" height="8" />
          <rect x="225" y="40" width="15" height="8" />
        </g>

        {/* Windows */}
        <g fill="#212121">
          <rect x="115" y="55" width="10" height="10" />
          <rect x="185" y="55" width="10" height="10" />
        </g>
        
        {/* Text */}
        <text x="80" y="95" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#0D47A1">
          GH SOLAR
        </text>
        <text x="82" y="115" fontFamily="Arial, sans-serif" fontSize="12" fill="#424242">
          Eco Polis Pvt. Ltd.
        </text>
      </svg>
    </div>
  );
}
