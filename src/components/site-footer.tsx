import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="container-x mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">
            LUMO<span className="text-accent">.</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            სახელობო ავეჯი თბილისიდან, საქართველო. შექმნილია სწორედ შენი
            ცხოვრების წესისთვის — გათვლილი ათწლეულებზე.
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
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">მოგვიდით</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>ჭავჭავაძის გამზ. 14</li>
            <li>თბილისი, საქართველო</li>
            <li>+995 555 12 34 56</li>
            <li>hello@lumo.ge</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} LUMO Furniture. ყველა უფლება დაცულია.</p>
          <p>დამზადებულია თბილისში · მიეწოდება მთელ მსოფლიოში</p>
        </div>
      </div>
    </footer>
  );
}
