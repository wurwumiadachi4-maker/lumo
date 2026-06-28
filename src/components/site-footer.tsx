import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <>
      <footer className="mt-32 border-t border-border/60 bg-secondary/40">
        <div className="container-x mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src="/lumo-logo-transparent.png"
              alt="LUMO"
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              ვამზადებთ თანამედროვე ავეჯს — სამზარეულოებს, საძინებლებსა და სხვადასხვა ინტერიერის ავეჯს.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">სტუდია</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections" className="hover:text-accent">კოლექციები</Link></li>
              <li><Link to="/about" className="hover:text-accent">ჩვენ შესახებ</Link></li>
              <li><Link to="/contact" className="hover:text-accent">კონტაქტი</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">კონტაქტი</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>+995 555 02 55 88</li>
              <li>dachi@lumofurniture.ge</li>
              <li><a href="https://www.facebook.com/profile.php?id=61584012764345" className="hover:text-accent">Facebook</a></li>
              <li><a href="https://m.me/61584012764345" className="hover:text-accent">Messenger</a></li>
              <li><a href="https://wa.me/995511547671" className="hover:text-accent">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="container-x mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© 2026 LUMO ყველა უფლება დაცულია.</p>
          </div>
        </div>
      </footer>

      {/* Messenger Floating Button */}
      <a
        href="https://m.me/61584012764345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-label="Messenger-ში მოგვწერეთ"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.883 1.346 5.457 3.465 7.17v3.571l3.33-1.836C9.77 20.38 10.868 20.52 12 20.52c5.523 0 10-4.145 10-9.261C22 6.145 17.523 2 12 2zm1.008 12.457l-2.548-2.718-4.976 2.718 5.474-5.814 2.61 2.718 4.914-2.718-5.474 5.814z"/>
        </svg>
        <span className="text-sm font-medium">მოგვწერეთ</span>
      </a>
    </>
  );
}