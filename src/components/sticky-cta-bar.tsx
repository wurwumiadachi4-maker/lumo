import { Link, useRouterState } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "+995555025588";

export function StickyCtaBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hidden = pathname === "/start";

  if (hidden) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-border bg-background px-4 pt-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary px-4 py-3 text-sm font-semibold text-foreground"
      >
        <Phone className="h-4 w-4" />
        დარეკეთ
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
