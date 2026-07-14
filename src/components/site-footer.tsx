import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
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
  );
}