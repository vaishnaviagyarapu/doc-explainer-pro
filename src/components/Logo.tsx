import Link from "next/link";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link href="/" className={`flex items-center gap-2 group ${className}`} aria-label="KALNET home">
    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cta shadow-elegant">
      <span className="font-display text-sm font-bold text-primary-foreground">K</span>
    </span>
    <span className="font-display text-lg font-bold tracking-tight text-foreground">
      KALNET
    </span>
  </Link>
);