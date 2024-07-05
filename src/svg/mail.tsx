import * as React from "react";

export function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
    viewBox="0 0 512 512"
    height="0.8em"
    width="0,8em"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#f6a921', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#cd2855', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#grad1)"
      d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"
    />
  </svg>
  );
}