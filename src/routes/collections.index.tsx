import { createFileRoute, Link } from "@tanstack/react-router";
import { WorkGallery } from "@/components/work-gallery";
import { items, workCategories } from "@/data/collections-data";

export const Route = createFileRoute("/collections/")({
  component: Collections,
  head: () => ({
    meta: [
      { title: "სამზარეულოს, კარადის და ავეჯის კოლექციები — LUMO" },
      { name: "description", content: "დაათვალიერეთ LUMO-ს კოლექციები — სამზარეულოს დამზადება, კარადები, გარდერობები, საძინებლისა და საოფისე ავეჯი. ინდივიდუალურად დამზადებული თბილისში, MDF და პრემიუმ მასალებით." },
      { property: "og:title", content: "სამზარეულოს, კარადის და ავეჯის კოლექციები — LUMO" },
      { property: "og:description", content: "დაათვალიერეთ LUMO-ს კოლექციები — სამზარეულოს დამზადება, კარადები, გარდერობები, საძინებლისა და საოფისე ავეჯი. ინდივიდუალურად დამზადებული თბილისში, MDF და პრემიუმ მასალებით." },
    ],
    links: [{ rel: "canonical", href: "https://lumofurniture.ge/collections" }],
  }),
});

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
        to={it.href}
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
              <Link
                to={it.href}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted block"
              >
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </Link>
            </div>
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl">
                <Link to={it.href} className="hover:text-accent transition-colors">
                  {it.title}
                </Link>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.descFull}</p>
              <ul className="mt-6 space-y-2">
                {it.specs.map((s) => (
                  <li key={s} className="text-sm flex items-center gap-3">
                    <span className="h-px w-6 bg-foreground/40" /> {s}
                  </li>
                ))}
              </ul>
              <Link
                to={it.href}
                className="mt-6 inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-0.5 hover:border-accent hover:text-accent transition"
              >
                გაიცანით მეტი →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* ჩვენი ნამუშევრები */}
      <section className="container-x mx-auto max-w-7xl pb-24 md:pb-32">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">გალერეა</p>
        <h2 className="text-3xl md:text-4xl mb-10 md:mb-12">ასე შეიძლება გამოიყურებოდეს თქვენი ავეჯი</h2>
        <WorkGallery categories={workCategories} />
      </section>

      {/* CTA */}
      <section className="container-x mx-auto max-w-7xl pb-8 md:pb-24">

        <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl text-primary-foreground">გეგმავთ ახალ პროექტს?</h2>
            <p className="mt-2 text-primary-foreground/70 text-sm">სიამოვნებით დაგეხმარებით.</p>
          </div>
          <Link
            to="/start"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition whitespace-nowrap self-start md:self-center"
          >
            პროექტის დაწყება →
          </Link>
        </div>
      </section>
    </div>
  );
}
