import { createFileRoute, Link } from "@tanstack/react-router";
import craft from "@/assets/craft.jpg";
import material from "@/assets/material.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "ჩვენ შესახებ — LUMO, თბილისი" },
      { name: "description", content: "LUMO — ავეჯის დამზადება შეკვეთით. თანამედროვე და ხარისხიანი ავეჯი ინდივიდუალური ზომებისა და დიზაინის მიხედვით." },
    ],
  }),
});

function About() {
  return (
    <div>

      {/* HERO */}
      <section className="container-x mx-auto max-w-7xl pt-16 md:pt-24 pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">ჩვენ შესახებ</p>
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <h1 className="md:col-span-7 text-5xl md:text-6xl leading-[1.05]">
            LUMO — ავეჯის დამზადება შეკვეთით.
          </h1>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed md:pb-2">
            გთავაზობთ თანამედროვე და ხარისხიანი ავეჯის დამზადებას
            ინდივიდუალური ზომებისა და დიზაინის მიხედვით. ჩვენი მიზანია,
            თითოეული პროექტი მაქსიმალურად მოვარგოთ თქვენს სივრცეს.
          </p>
        </div>
      </section>

      {/* FULL IMAGE */}
      <section className="container-x mx-auto max-w-7xl pb-24">
        <div className="relative aspect-[16/8] rounded-2xl overflow-hidden">
          <img
            src={craft}
            alt="LUMO-ს სახელოსნო"
            loading="lazy"
            width={1280}
            height={960}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-[0.25em] opacity-70 mb-1">LUMO სახელოსნო</p>
            <p className="text-lg font-light">თბილისი, საქართველო</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-secondary/20">
        <div className="container-x mx-auto max-w-7xl py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["12+", "წელი გამოცდილება"],
            ["840+", "დასრულებული პროექტი"],
            ["100%", "ინდივიდუალური მიდგომა"],
            ["10 წ.", "გარანტია ნაწარმზე"],
          ].map(([n, l]) => (
            <div key={l} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-light text-foreground">{n}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="container-x mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light leading-snug">
              ყოველი პროექტი იქმნება დეტალებზე ყურადღებით.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-0.5 hover:border-accent hover:text-accent transition"
            >
              დაგვიკავშირდით <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              LUMO-ს გუნდი უკვე წლებია ქმნის სამზარეულოს, საძინებლის,
              კარადებისა და სხვადასხვა ტიპის ავეჯს, რომელიც აერთიანებს
              პრაქტიკულობას, გამძლეობასა და თანამედროვე დიზაინს.
            </p>
            <p>
              ვიყენებთ ხარისხიან მასალებს, თანამედროვე ტექნოლოგიებსა და
              სუფთა დამუშავების მეთოდებს — დიზაინიდან საბოლოო მონტაჟამდე.
            </p>
            <p>
              შეკვეთებს ვიღებთ მთელი საქართველოს მასშტაბით. ყოველი
              პროექტი შესრულდება შეთანხმებულ დროში და მაღალი ხარისხით.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x mx-auto max-w-7xl pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {[
            ["ფუნქციურობა", "შენახვა, სივრცე და ერგონომიკა — ნებისმიერ ვიზუალურ გადაწყვეტამდე."],
            ["გამძლეობა", "ვირჩევთ მასალებს, რომლებიც კარგად ბერდებიან. 15 წლის შემდეგაც სწორად უნდა იგრძნობოდეს."],
            ["სიმარტივე", "მშვიდი პროპორციები, მცირე პალიტრა. სილამაზე გამოკლებით მოდის."],
            ["ხელმისაწვდომობა", "ელეგანტური ინტერიერი ყველასთვის. პრემიუმ ხარისხი — სამართლიანი ფასით."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8 md:p-10">
              <h3 className="text-lg font-light mb-3">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-secondary/30 border-y border-border/40">
        <div className="container-x mx-auto max-w-7xl py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={material}
              alt="მასალის ნიმუშები — LUMO"
              loading="lazy"
              width={1280}
              height={800}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">მასალები</p>
              <h2 className="text-3xl md:text-4xl font-light leading-snug">
                ვმუშაობთ მხოლოდ იმ მასალებთან, რომლებს ვენდობით.
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              ევროპული სტანდარტის MDF, ლამინირებული პანელები (Egger, Kronospan),
              ნამდვილი მუხისა და კაკლის ვინირი, ქვისა და კომპაქტური ლამინატის
              სამუშაო ზედაპირები. ყველა არმატურა Blum ან Hettich-ია.
            </p>
            <div className="flex flex-wrap gap-2">
              {["MDF", "ლამინატი", "Egger", "Kronospan", "Blum", "Hettich", "მუხის ვინირი"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mx-auto max-w-7xl py-20 md:py-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-primary-foreground max-w-lg">
              თუ გსურთ ავეჯი, რომელიც თქვენს სივრცეს იდეალურად მოერგება — დაგვიკავშირდით.
            </h2>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full text-sm hover:bg-accent hover:text-white transition"
          >
            კონტაქტი <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}