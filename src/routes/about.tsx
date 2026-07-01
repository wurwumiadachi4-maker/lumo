import { createFileRoute, Link } from "@tanstack/react-router";
import craft from "@/assets/finalese.png";
import material from "@/assets/material.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "ჩვენ შესახებ — LUMO, თბილისი" },
      { name: "description", content: "LUMO — ავეჯის დამზადება შეკვეთით." },
    ],
  }),
});

function About() {
  return (
    <div>

      {/* HERO */}
      <section className="container-x mx-auto max-w-7xl pt-8 md:pt-12 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">ჩვენ შესახებ</p>
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <h1 className="md:col-span-7 text-3xl md:text-4xl leading-[1.05]">
            LUMO — ავეჯი შენი სივრცისთვის
          </h1>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed md:pb-2">
            სამზარეულოები, კარადები და სხვადასხვა ტიპის ინტერიერის ავეჯი — პრაქტიკული, თანამედროვე დიზაინით და ხარისხიანი მასალებით.
          </p>
        </div>
      </section>

      {/* FULL IMAGE */}
      <section className="container-x mx-auto max-w-7xl pb-24">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
          <img
            src={craft}
            alt="LUMO"
            loading="lazy"
            width={1280}
            height={960}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-secondary/20">
        <div className="container-x mx-auto max-w-7xl py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["15+", "წელი გამოცდილება"],
            ["840+", "დასრულებული პროექტი"],
            ["100%", "ინდივიდუალური მიდგომა"],
            ["5 წ.", "გარანტია ნაწარმზე"],
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
            <p>15 წელზე მეტია ჩვენი გუნდი აწარმოებს ავეჯს — ათასობით სამზარეულო, კარადა და საძინებელი.</p>
            <p>ვიყენებთ ხარისხიან მასალებს, თანამედროვე ტექნოლოგიებსა და სუფთა დამუშავების მეთოდებს.</p>
            <p>ყოველი პროექტი შესრულდება შეთანხმებულ დროში და მაღალი ხარისხით.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x mx-auto max-w-7xl pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {[
            ["ფუნქციურობა", "ავეჯი უნდა იყოს მოსახერხებელი ყოველდღიურობაში და კარგად მოერგოს სივრცეს."],
            ["გამძლეობა", "ვიყენებთ ხარისხიან მასალებს და მექანიზმებს, რომლებიც წლების შემდეგაც კომფორტულად და საიმედოდ მუშაობს."],
            ["თანამედროვე სტილი", "თანამედროვე დიზაინი, რომელიც სივრცეს უფრო დახვეწილს, მყუდროს და კომფორტულს ხდის."],
            ["ინდივიდუალობა", "ყოველი პროექტი იქმნება სპეციალურად შენი სივრცისა და სტილის მიხედვით."],
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
              alt="მასალები"
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
                ვმუშაობთ მხოლოდ იმ მასალებთან, რომლებსაც ვენდობით.
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              ვიყენებთ ხარისხიან MDF-ს, ლამინატებს და მექანიზმებს, რომლებიც გამძლეობით და პრაქტიკულობით გამოირჩევა. ვმუშაობთ ისეთ ბრენდებთან, როგორიცაა (Egger, Kronospan, Blum, Hettich),
            </p>
            <div className="flex flex-wrap gap-2">
              {["MDF", "ლამინატი", "Egger", "Kronospan", "Blum", "Hettich",].map((tag) => (
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
               გეგმავთ ახალ პროექტს? - მიიღეთ უფასო კონსულტაცია
            </h2>
          </div>
          <Link
            to="/start"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full text-sm hover:bg-accent hover:text-white transition"
          >
            პროექტის დაწყება <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}