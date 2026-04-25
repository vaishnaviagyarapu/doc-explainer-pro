"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Button asChild size="sm" className="bg-gradient-cta text-primary-foreground shadow-elegant hover:opacity-90">
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-medium ${
                  pathname === l.href ? "bg-muted text-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gradient-cta text-primary-foreground" onClick={() => setOpen(false)}>
              <Link href="/demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};