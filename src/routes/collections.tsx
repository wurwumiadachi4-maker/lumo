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
  tag: "სამზარეულო",
  img: heroKitchen,
  desc: "ყოველი სამზარეულო მზადდება თქვენი სივრცისა და ყოველდღიური საჭიროებების მიხედვით. ვქმნით თანამედროვე, პრაქტიკულ და გამძლე ავეჯს.",
  specs: ["თანამედროვე და ფუნქციური დიზაინი", "გამძლე მასალა", "ხარისხიანი მექანიზმები"],
},
  {
  title: "საძინებლები",
  tag: "საძინებელი",
  img: bedroom,
  desc: "ვამზადებთ ჩაშენებულ კარადებსა და საძინებლის ავეჯს, რომელიც იდეალურად ერგება თქვენს სივრცეს და ინტერიერს. ყველაფერი იქმნება პრაქტიკული გამოყენებისა და კომფორტისთვის.",
  specs: ["თანამედროვე დიზაინი", "ვიყენებთ სივრცეს მაქსიმალურად პრაქტიკულად"],
},
  {
  title: "ოფისები",
  tag: "კაბინეტი",
  img: office,
  desc: "ვამზადებთ საოფისე ავეჯს, რომელიც სივრცეს უფრო ორგანიზებულსა და კომფორტულს ხდის ყოველდღიური მუშაობისთვის.",
  specs: ["თანამედროვე და პრაქტიკული დიზაინი"],
},
  {
  title: "მისაღები ოთახი",
  tag: "სალონი",
  img: living,
  desc: "TV კედლები, თაროები და სხვადასხვა ინტერიერის ელემენტები, რომელიც მისაღებ ოთახს უფრო მყუდრო და თანამედროვე სივრცედ აქცევს.",
  specs: ["სივრცეზე მორგებული ავეჯი", "მყუდრო და პრაქტიკული ინტერიერი"],
},
 {
  title: "საბავშვო ოთახი",
  tag: "საბავშვო",
  img: kidsRoom,
  desc: "ვამზადებთ საბავშვო ოთახის ავეჯს, რომელიც კომფორტულია როგორც სწავლისთვის, ისე ყოველდღიური გამოყენებისთვის.",
  specs: ["პრაქტიკული და კომფორტული სამუშაო და სასწავლი კუთხე", "მოსახერხებელი თაროები და სათავსოები", "თანამედროვე და ფუნქციური დიზაინი"],
},

{
  title: "მასალები",
  tag: "მასალები",
  img: material,
  desc: "ვმუშაობთ ხარისხიან მასალებზე, რომლებიც ყოველდღიურ გამოყენებას კარგად უძლებს და ინტერიერს თანამედროვე იერს აძლევს. ფერებსა და ტექსტურებს ვარჩევთ ისე, რომ სივრცეს კარგად მოუხდეს.",
  specs: ["ხარისხიანი Egger და Kronospan ლამინატები", "MDF და ხის ტექსტურები თანამედროვე საფარებით"],
},
];
function Collections() {
  return (
    <div>
      <section className="container-x mx-auto max-w-7xl pt-16 md:pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">კოლექციები</p>
        <h1 className="text-3xl md:text-4xl max-w-3xl">
         ვამზადებთ — სამზარეულოებს, საძინებლებს, ტუმბოებს, კარადებს, კამოდებს , TV კედლებსა და სხვადასხვა ტიპის ინტერიერის ავეჯს.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
        </p>
      </section>

      <section className="container-x mx-auto max-w-7xl pb-24 md:pb-32 space-y-24 md:space-y-32">
        {items.map((it, i) => (
          <article key={it.title} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
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
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.desc}</p>
              <ul className="mt-6 space-y-2">
                {it.specs.map((s) => (
                  <li key={s} className="text-sm flex items-center gap-3">
                    <span className="h-px w-6 bg-foreground/40" /> {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex text-sm border-b border-foreground/40 pb-1 hover:border-accent hover:text-accent transition"
              >
                ამ კოლექციის განხილვა →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
