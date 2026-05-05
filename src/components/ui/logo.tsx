// BPON Logo SVG Component — Red & White "B" mark
// Enterprise-grade vector mark
export function BPONLogo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BPON Logo"
    >
      {/* Red background square with rounded corners */}
      <rect width="100" height="100" rx="16" fill="#C0392B" />
      {/* Letter B — white geometric mark */}
      <path
        d="M24 18 H56 C68 18 76 26 76 37 C76 43 73 48 68 51 C74 54 78 60 78 67 C78 80 69 82 57 82 H24 V18Z
           M38 30 V45 H54 C59 45 63 42 63 37.5 C63 33 59 30 54 30 H38Z
           M38 57 V70 H56 C62 70 65 67 65 63.5 C65 60 62 57 56 57 H38Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

// Full BPON wordmark with icon
export function BPONWordmark({
  iconSize = 36,
  textClass = 'text-primary',
  subTextClass = 'text-muted-foreground',
  showTagline = false,
}: {
  iconSize?: number;
  textClass?: string;
  subTextClass?: string;
  showTagline?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <BPONLogo size={iconSize} />
      <div>
        <span className={`font-black text-xl tracking-tight leading-none block ${textClass}`}>
          BPON
        </span>
        {showTagline && (
          <span className={`text-[10px] sm:text-xs font-medium leading-none mt-0.5 block ${subTextClass} hidden sm:block`}>
            Berlian Palm Oil Nusantara
          </span>
        )}
      </div>
    </div>
  );
}
