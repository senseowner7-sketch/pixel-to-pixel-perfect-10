import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/data/site";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/policy", label: "Policy" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="container-x fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between border-b border-border">
        <Link to="/" className="font-display text-sm font-extrabold uppercase tracking-tight">Rushikesh Dhoran</Link>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="label transition-colors hover:text-accent" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="label md:hidden" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mnav" className="flex flex-col gap-2 py-8 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="display text-5xl" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="container-x bg-ink py-12 text-ink-foreground">
      <div className="grid gap-8 border-t border-ink-foreground/15 pt-8 md:grid-cols-4">
        <p className="font-display font-extrabold uppercase">Rushikesh Dhoran</p>
        <ul className="label space-y-1 text-ink-muted">
          <li>AI Creative Strategy</li><li>Public Policy</li><li>Political Communication</li><li>India</li>
        </ul>
        <ul className="label space-y-1">
          {site.links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-accent">{l.label} ↗</a></li>)}
        </ul>
        <p className="label text-ink-muted md:text-right">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export function SectionLabel({ n, children }: { n?: string; children: React.ReactNode }) {
  return (
    <p className="label flex gap-3 text-muted-foreground">
      {n && <span className="text-accent">{n}</span>}
      <span>{children}</span>
    </p>
  );
}
