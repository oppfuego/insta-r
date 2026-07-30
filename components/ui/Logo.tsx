import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Brand mark: a rising pulse/heartbeat line inside a rounded gradient tile.
 * Pure SVG so it scales crisply and needs no image asset.
 */
export function LogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${siteConfig.name} logo`}
      className={className}
    >
      <defs>
        <linearGradient id="tp-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#tp-logo-gradient)" />
      <path
        d="M8 21.5h5.2l3-7.4 4.4 12.6 3.1-7.6 2.1 2.4H32"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-bold text-gray-900 ${className}`}>
      {siteConfig.brandPrefix}
      <span className="text-violet-600">{siteConfig.brandSuffix}</span>
    </span>
  );
}

export default function Logo({
  href = "/",
  markSize = 36,
  className = "",
  wordmarkClassName = "text-xl",
  showWordmark = true,
  withShadow = true,
}: {
  href?: string | null;
  markSize?: number;
  className?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  withShadow?: boolean;
}) {
  const content = (
    <>
      <LogoMark
        size={markSize}
        className={
          withShadow
            ? "rounded-xl shadow-lg shadow-violet-500/25 transition-shadow group-hover:shadow-violet-500/40"
            : "rounded-xl"
        }
      />
      {showWordmark && <LogoWordmark className={wordmarkClassName} />}
    </>
  );

  if (!href) {
    return <span className={`flex items-center gap-2 ${className}`}>{content}</span>;
  }

  return (
    <Link href={href} className={`group flex items-center gap-2 ${className}`}>
      {content}
    </Link>
  );
}
