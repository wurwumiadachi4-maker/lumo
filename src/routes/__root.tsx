import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyCtaBar } from "@/components/sticky-cta-bar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">გვერდი ვერ მოიძებნა</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          მოთხოვნილი გვერდი არ არსებობს ან გადატანილია.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            მთავარ გვერდზე დაბრუნება
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          გვერდი ვერ ჩაიტვირთა
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          დაფიქსირდა შეცდომა. სცადეთ განახლება ან დაბრუნდით მთავარ გვერდზე.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            თავიდან ცდა
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            მთავარი გვერდი
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "LUMO",
  telephone: "+995555025588",
  email: "dachi@lumofurniture.ge",
  url: "https://lumofurniture.ge",
  image: "https://lumofurniture.ge/lumo-logo-transparent.png",
  areaServed: {
    "@type": "City",
    name: "Tbilisi",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tbilisi",
    addressCountry: "GE",
  },
  sameAs: ["https://www.facebook.com/profile.php?id=61584012764345"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LUMO — ავეჯის დამზადება შეკვეთით თბილისში" },
      { name: "description", content: "LUMO ამზადებს სახელობო სამზარეულოებს, კარადებს, საძინებლის ავეჯსა და გარდერობებს თბილისში. ინდივიდუალური დიზაინი, ხარისხიანი მასალები და 5-წლიანი გარანტია." },
      { property: "og:title", content: "LUMO — ავეჯის დამზადება შეკვეთით თბილისში" },
      { property: "og:description", content: "LUMO ამზადებს სახელობო სამზარეულოებს, კარადებს, საძინებლის ავეჯსა და გარდერობებს თბილისში. ინდივიდუალური დიზაინი, ხარისხიანი მასალები და 5-წლიანი გარანტია." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://lumofurniture.ge/lumo-logo-transparent.png" },
      { property: "og:url", content: "https://lumofurniture.ge" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background pb-20 md:pb-0">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <StickyCtaBar />
    </QueryClientProvider>
  );
}