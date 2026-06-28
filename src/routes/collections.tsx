import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/kitchenos.png";
import bedroom from "@/assets/bedroomes.png";
import office from "@/assets/offices.png";
import living from "@/assets/livinges.png";
import material from "@/assets/material.jpg";
import kidsRoom from "@/assets/roomos.png";

export const Route = createFileRoute("/collections")({
  component: Collections,
  head: () => ({
    meta: [
      { title: "კოლექციები — LUMO სახელობო ავეჯი" },
      { name: "description", content: "სახელობო სამზარეულოები, კარადები, საოფისე ავეჯი და სალონის ინტერიერები — დამზადებული ინდივიდუალურად თბილისში." },
      { property: "og:title", content: "კოლექციები — LUMO" },
      { property: "og:description", content: "სახელობო სამზარეულოები, კარადები, საოფისე ავეჯი და სალონის ინტერიერები." },
    ],
  }),
});

const items = [
  {
    title: "სამზარეულოები",
    img: heroKitchen,
    desc: "თანამედროვე და პრაქტიკული სამზარეულოები ყოველდღიური კომფორტისთვის.",
    descFull: "ყოველი სამზარეულო მზადდება თქვენი სივრცისა და ყოველდღიური საჭიროებების მიხედვით. ვქმნით თანამედროვე, პრაქტიკულ და გამძლე ავეჯს.",
    specs: ["თანამედროვე და ფუნქციური დიზაინი", "გამძლე მასალა", "ხარისხიანი მექანიზმები"],
  },
  {
    title: "საძინებლები",
    img: bedroom,
    desc: "მყუდრო და ფუნქციური ავეჯი კომფორტული საძინებლისთვის.",
    descFull: "ვამზადებთ ჩაშენებულ კარადებსა და საძინებლის ავეჯს, რომელიც იდეალურად ერგება თქვენს სივრცეს და ინტერიერს.",
    specs: ["თანამედროვე დიზაინი", "სივრცის მაქსიმალური გამოყენება"],
  },
  {
    title: "ოფისები",
    img: office,
    desc: "პრაქტიკული და თანამედროვე საოფისე ავეჯი სამუშაო სივრცისთვის.",
    descFull: "ვამზადებთ საოფისე ავეჯს, რომელიც სივრცეს უფრო ორგანიზებულსა და კომფორტულს ხდის ყოველდღიური მუშაობისთვის.",
    specs: ["თანამედროვე და პრაქტიკული დიზაინი"],
  },
  {
    title: "მისაღები ოთახი",
    img: living,
    desc: "TV კედლები და ინტერიერის ავეჯი თანამედროვე მისაღებისთვის.",
    descFull: "TV კედლები, თაროები და სხვადასხვა ინტერიერის ელემენტები, რომელიც მისაღებ ოთახს უფრო მყუდრო და თანამედროვე სივრცედ აქცევს.",
    specs: ["სივრცეზე მორგებული ავეჯი", "მყუდრო და პრაქტიკული ინტერიერი"],
  },
  {
    title: "საბავშვო ოთახი",
    img: kidsRoom,
    desc: "მოსახერხებელი და ფუნქციური ავეჯი სამუშაო და სასწავლო სივრცისთვის.",
    descFull: "ვამზადებთ საბავშვო ოთახის ავეჯს, რომელიც კომფორტულია როგორც სწავლისთვის, ისე ყოველდღიური გამოყენებისთვის.",
    specs: ["პრაქტიკული სამუშაო კუთხე", "მოსახერხებელი თაროები", "ფუნქციური დიზაინი"],
  },
  {
    title: "მასალები",
    img: material,
    desc: "Egger, Kronospan, Blum — მხოლოდ ხარისხიანი და გამძლე მასალები.",
    descFull: "ვმუშაობთ ხარისხიან მასალებზე, რომლებიც ყოველდღიურ გამოყენებას კარგად უძლებს და ინტერიერს თანამედროვე იერს აძლევს.",
    specs: ["Egger და Kronospan ლამინატები", "MDF და ხის ტექსტურები"],
  },
];

function Collections() {
  return (
    <div>
      {/* HERO */}
      <section className="container-x mx-auto max-w-7xl pt-16 md:pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">კოლექციები</p>
        <h1 className="text-xl md:text-4xl max-w-xl leading-tight">
          ვამზადებთ თანამედროვე ინტერიერის ავეჯს — სამზარეულოებს, კარადებს, TV კედლებს და სხვა.
        </h1>
      </section>

{/* MOBILE: Overlay text on image */}
<section className="md:hidden container-x mx-auto max-w-7xl pb-24">
  <div className="space-y-5">
    {items.map((it) => (
      <Link
        key={it.title}
        to="/contact"
        className="group block relative aspect-[4/5] overflow-hidden rounded-2xl"
      >
        <img
          src={it.img}
          alt={it.title}
          loading="lazy"
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-2xl font-medium text-white">{it.title}</h2>
          <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
            {it.desc}
          </p>
        </div>
      </Link>
    ))}
  </div>
</section>
      {/* DESKTOP: Original alternating layout */}
      <section className="hidden md:block container-x mx-auto max-w-7xl pb-32 space-y-32">
        {items.map((it, i) => (
          <article key={it.title} className="grid md:grid-cols-12 gap-16 items-center">
            <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl">{it.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.descFull}</p>
              <ul className="mt-6 space-y-2">
                {it.specs.map((s) => (
                  <li key={s} className="text-sm flex items-center gap-3">
                    <span className="h-px w-6 bg-foreground/40" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="container-x mx-auto max-w-7xl pb-8 md:pb-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl text-primary-foreground">გეგმავთ ახალ პროექტს?</h2>
            <p className="mt-2 text-primary-foreground/70 text-sm">დაგვიკავშირდით — სიამოვნებით დაგეხმარებით.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition whitespace-nowrap self-start md:self-center"
          >
            დაგვიკავშირდი →
          </Link>
        </div>
      </section>
    </div>
  );
}