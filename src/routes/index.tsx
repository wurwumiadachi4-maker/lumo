import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import bedroom from "@/assets/bedroom.jpg";
import office from "@/assets/office.jpg";
import living from "@/assets/living.jpg";
import material from "@/assets/material.jpg";
import { ArrowUpRight, Ruler, Hammer, Leaf, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LUMO — სახელობო ავეჯი, თბილისი" },
      { name: "description", content: "სახელობო ავეჯი სამზარეულოებისთვის, საძინებლებისთვის, კაბინეტებისა და სალონებისთვის. თბილისი, საქართველო." },
    ],
  }),
});

const collections = [
  { title: "სამზარეულო", img: heroKitchen, to: "/collections", desc: "გააზრებული შენახვა, ინტეგრირებული სახელურები, გამძლე საფარი." },
  { title: "საძინებელი", img: bedroom, to: "/collections", desc: "კარადები, სათავეები და ჩაშენებული ავეჯი — შენი კედლის ზომით." },
  { title: "კაბინეტი", img: office, to: "/collections", desc: "მაგიდები, თაროები და მშვიდი გარემო კონცენტრირებული მუშაობისთვის." },
  { title: "სალონი", img: living, to: "/collections", desc: "მედია ბლოკები და მოდულური თაროები გულწრფელი მასალებით." },
];

const values = [
  { icon: Ruler, title: "ზუსტი შესრულება", text: "ყოველი პროექტი მზადდება დეტალებზე განსაკუთრებული ყურადღებით." },
  { icon: Leaf, title: "გამძლე მასალები", text: "MDF, ლამინირებული ზედაპირები, რომლებიც დიდხანს ინარჩუნებს იერსახეს." },
  { icon: ShieldCheck, title: "12 წლიანი გამოცდილება", text: "ავეჯის დიზაინსა და წარმოებაში დაგროვილი გამოცდილება, რომელსაც თითოეულ პროექტში ვდებთ." },
  { icon: Hammer, title: "თანამედროვე სტილი", text: "თანამედროვე დიზაინი, რომელიც სივრცეს უფრო დახვეწილს და კომფორტულს ხდის." },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="container-x mx-auto max-w-7xl pt-12 md:pt-20 pb-10 md:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6 fade-up">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                სახელობო ავეჯი · თბილისი, საქართველო
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
                ავეჯი, რომელიც თქვენს სივრცეს იდეალურად მოერგება
              </h1>
              <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
                LUMO გთავაზობთ ავეჯის დამზადებას ინდივიდუალური დიზაინით — პრემიუმ ხარისხით და თქვენზე მორგებული სტილით. ჩვენი მიზანია ელეგანტური ინტერიერი ყველასთვის ხელმისაწვდომი გავხადოთ.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/collections"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition"
                >
                  კოლექციების ნახვა <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 rounded-full text-sm hover:bg-foreground hover:text-background transition"
                >
                  დაგვიკავშირდი
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 fade-up">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[5/6]">
                <img
                  src={heroKitchen}
                  alt="სახელობო მუხის სამზარეულო"
                  width={1920}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="border-y border-border/60 bg-secondary/40">
          <div className="container-x mx-auto max-w-7xl py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {[
              ["12+", "წელი გამოცდილება"],
              ["840", "დასრულებული პროექტი"],
              ["10 წ.", "გარანტია ყველა ნაწარმზე"],
              ["100%", "სრულად ინდივიდუალური"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl text-foreground">{n}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="container-x mx-auto max-w-7xl py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">კოლექციები</p>
            <h2 className="text-4xl md:text-5xl max-w-2xl">თანამედროვე ავეჯი ყველა სივრცისთვის.</h2>
          </div>
          <Link to="/collections" className="text-sm inline-flex items-center gap-1 hover:text-accent">
            ყველა კოლექციის ნახვა <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((c) => (
            <Link to={c.to} key={c.title} className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-md">{c.desc}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-secondary/40 border-y border-border/60">
        <div className="container-x mx-auto max-w-7xl py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[5/6] rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src={material}
              alt="მუხის ვინირი მატ ლამინატის გვერდით"
              loading="lazy"
              width={1280}
              height={800}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">ფილოსოფია</p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              ყველაფერი გათვლილია კომფორტზე, პრაქტიკულობაზე და სივრცის ეფექტურად გამოყენებაზე.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              ვიყენებთ ხარისხიან და გამძლე მასალებს, რომლებიც ყოველდღიურ
              მოხმარებას მარტივად უძლებს. 
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <v.icon className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">{v.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{v.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x mx-auto max-w-7xl py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">პროცესი</p>
        <h2 className="text-4xl md:text-5xl max-w-3xl">გაზომვიდან მზა ოთახამდე — ოთხ ეტაპად.</h2>
        <div className="mt-16 grid md:grid-cols-4 gap-10 md:gap-6">
          {[
            ["01", "დავალება", "ვხვდებით, ვუსმენთ, ვზომავთ. შენ გვიყვები, როგორ გამოიყენება ოთახი სინამდვილეში."],
            ["02", "დიზაინი", "ნახაზები, მასალები, საფარი. ვიმეორებთ სანამ ყველა მილიმეტრი სწორი არ იქნება."],
            ["03", "სახელოსნო", "შენი ნაჭერი იჭრება, კიდეები ეკვრება და წინასწარ აიწყობა ჩვენს სახელოსნოში."],
            ["04", "მონტაჟი", "ჩვენი გუნდი მიჰყავს და ამონტაჟებს. შენ იღებ მზა ოთახს — არა ბრტყელ ყუთს."],
          ].map(([n, t, d]) => (
            <div key={n} className="border-t border-foreground/15 pt-6">
              <div className="text-xs tracking-[0.2em] text-accent">{n}</div>
              <h3 className="text-2xl mt-3">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mx-auto max-w-7xl pb-8">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl max-w-xl text-primary-foreground">
              გაქვს ოთახი გონებაში?
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/70">
              მოგვიყევი ცოტა შენი სივრცის შესახებ. ჩვენ დავუბრუნდებით საუბარს — არა გაყიდვის სიტყვებს.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition self-start md:self-end"
          >
            პროექტის დაწყება <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}