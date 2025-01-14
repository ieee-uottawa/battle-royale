export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff00" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0000ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
        <g fill="none" stroke="#00ff00" strokeWidth="2" opacity="0.5">
          <circle cx="500" cy="500" r="200" opacity="0.2" />
          <circle cx="500" cy="500" r="100" opacity="0.3" />
          <circle cx="500" cy="500" r="25" opacity="0.4" />
        </g>
        <g fill="#00ff00" opacity="0.5">
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 3}
            />
          ))}
        </g>
        <path
          d="M0,1000 C300,800 700,1200 1000,1000 L1000,1000 L0,1000 Z"
          fill="#00ff00"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
