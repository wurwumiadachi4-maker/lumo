import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function StickyCtaBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hidden = pathname === "/start";
  const isHome = pathname === "/";

  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    setScrolledPastHero(false);
    if (!isHome) return;

    const onScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isHome]);

  if (hidden) return null;

  const visible = isHome ? scrolledPastHero : true;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-border bg-background px-4 pt-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href="https://wa.me/995511547671"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary px-4 py-3 text-sm font-semibold text-foreground"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        to="/start"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
      >
        პროექტის დაწყება →
      </Link>
    </div>
  );
}
