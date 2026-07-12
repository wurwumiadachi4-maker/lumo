import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "მთავარი" },
  { to: "/collections", label: "კოლექციები" },
  { to: "/about", label: "ჩვენ შესახებ" },
  { to: "/FAQ", label: "კითხვები" },
  { to: "/contact", label: "კონტაქტი" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[50px] bg-background/50 border-b border-border/60">
      <div className="container-x mx-auto max-w-7xl flex items-center justify-between h-12 md:h-20">
        <Link to="/" className="flex items-center h-full group">
          <img
            src="/lumo-logo-transparent.png"
            alt="LUMO"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/75 hover:text-foreground transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
          <a href="tel:+995555025588"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition"
          >
            <Phone className="h-3.5 w-3.5" />
            დარეკე
          </a>
        </nav>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="მენიუს გახსნა"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+995555025588"
              className="mt-2 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm w-fit"
            >
              <Phone className="h-3.5 w-3.5" />
              დარეკე
            </a>
          </div>
        </div>
      )}
    </header>
  );
}