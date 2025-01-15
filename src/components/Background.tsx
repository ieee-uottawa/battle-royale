import React from "react";

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
            <stop offset="0%" stopColor="#00ff00" stopOpacity="0.1">
              <animate
                attributeName="stopOpacity"
                values="0.1;0.3;0.1"
                dur="10s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            </stop>
            <stop offset="100%" stopColor="#0000ff" stopOpacity="0.1">
              <animate
                attributeName="stopOpacity"
                values="0.1;0.3;0.1"
                dur="10s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            </stop>
          </linearGradient>
          <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ff00" stopOpacity="0.3">
              <animate
                attributeName="stopOpacity"
                values="0.3;0.7;0.3"
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            </stop>
            <stop offset="100%" stopColor="#00ff00" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
        <circle cx="500" cy="500" r="300" fill="url(#pulse)" opacity="0.2">
          <animate
            attributeName="r"
            values="300;350;300"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          />
        </circle>
        <g fill="none" stroke="#00ff00" strokeWidth="2" opacity="0.5">
          <circle cx="500" cy="500" r="200" opacity="0.2">
            <animate
              attributeName="r"
              values="200;220;200"
              dur="15s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </circle>
          <circle cx="500" cy="500" r="100" opacity="0.3">
            <animate
              attributeName="r"
              values="100;120;100"
              dur="10s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </circle>
          <circle cx="500" cy="500" r="25" opacity="0.4">
            <animate
              attributeName="r"
              values="25;35;25"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </circle>
        </g>
        <g>
          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 4 + 2}
              fill="#00ff00"
              opacity="0.7"
            >
              <animate
                attributeName="opacity"
                values="0.7;0.2;0.7"
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 5}s`}
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0 0; ${Math.random() * 100 - 50} ${
                  Math.random() * 100 - 50
                }; 0 0`}
                dur={`${Math.random() * 15 + 10}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            </circle>
          ))}
        </g>
        <path
          d="M0,1000 C300,800 700,1200 1000,1000 L1000,1000 L0,1000 Z"
          fill="#00ff00"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            values="
              M0,1000 C300,800 700,1200 1000,1000 L1000,1000 L0,1000 Z;
              M0,1000 C300,900 700,1100 1000,1000 L1000,1000 L0,1000 Z;
              M0,1000 C300,800 700,1200 1000,1000 L1000,1000 L0,1000 Z
            "
            dur="20s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          />
        </path>
      </svg>
    </div>
  );
}
