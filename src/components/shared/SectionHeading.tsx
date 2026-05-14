import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  linkText,
  linkHref,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : ""
      } ${linkText ? "md:flex-row md:items-end md:justify-between" : ""} mb-8 md:mb-12`}
    >
      <div>
        <h2
          className={`font-sans text-3xl md:text-4xl lg:text-display-sm font-black uppercase tracking-tight ${
            light ? "text-white" : "text-imn-dark"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-3 text-base md:text-lg ${
              light ? "text-white/70" : "text-imn-gray-500"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className={`mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider
            transition-colors ${
              light
                ? "text-white hover:text-imn-red-light"
                : "text-imn-red hover:text-imn-red-dark"
            }`}
        >
          {linkText}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
