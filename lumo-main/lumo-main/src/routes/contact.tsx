import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Facebook, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "კონტაქტი — LUMO, თბილისი" },
      { name: "description", content: "მოგვიყევი შენი სივრცის შესახებ. ჩვენ დავუბრუნდებით საუბარს." },
    ],
  }),
});

const contacts = [
  {
    icon: Phone,
    label: "დაგვირეკე",
    value: "+995 555 02 55 88",
    href: "tel:+995 555 02 55 88",
  },
  {
    icon: Mail,
    label: "ელ-ფოსტა",
    value: "hello@lumo.ge",
    href: "mailto:hello@lumo.ge",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "LUMO Facebook",
    href: "https://www.facebook.com/profile.php?id=61584012764345",
  },
  {
    icon: MessageCircle,
    label: "Messenger",
    value: "LUMO Messenger",
    href: "https://m.me/61584012764345",
  },
];

function Contact() {
  return (
    <div className="container-x mx-auto max-w-7xl pt-16 md:pt-24 pb-24 md:pb-32">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">კონტაქტი</p>
      <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-2xl">
        მოვისაუბროთ შენს სივრცეზე.
      </h1>
      <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg">
        მოგვწერე ან დაგვირეკე — სიამოვნებით დაგეხმარებით
      </p>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 p-6 rounded-2xl border border-border hover:border-accent hover:bg-secondary/40 transition-all"
          >
            <c.icon className="h-6 w-6 text-accent" />
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{c.label}</div>
              <div className="text-sm font-medium group-hover:text-accent transition-colors">{c.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
