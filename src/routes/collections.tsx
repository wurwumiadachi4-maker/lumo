import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import bedroom from "@/assets/bedroom.jpg";
import office from "@/assets/office.jpg";
import living from "@/assets/living.jpg";
import material from "@/assets/material.jpg";

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
    desc: "იატაკიდან ჭერამდე კარადები მუხის ვინირში ან მატ ლამინატში. გერმანული რბილი დახურვის არმატურა, ინტეგრირებული სახელურები, ქვის ან კომპაქტური ლამინატის სამუშაო ზედაპირები.",
    specs: ["Blum & Hettich არმატურა", "კვარცი / Dekton სამუშაო ზედაპირი", "PUR-კიდებიანი MDF ბირთვი"],
  },
  {
    title: "კარადები და საძინებლები",
    tag: "საძინებელი",
    img: bedroom,
    desc: "ჩაშენებული კარადები შენი კედლის ფორმით, შიდა განათებით, რბილი დახურვის უჯრეებით და დარჩენილ ოთახთან შესაბამისი საფარით.",
    specs: ["სახსრიანი ან სასრიალო კარები", "ინტეგრირებული LED განათება", "ლნის ტექსტურის ლამინატი"],
  },
  {
    title: "სახლის კაბინეტები",
    tag: "კაბინეტი",
    img: office,
    desc: "მაგიდები, თაროები და შენახვის კედლები, შექმნილი შენი მუშაობის სტილის გარშემო — მშვიდი, მოწესრიგებული და გათვლილი სამუშაო დღეზე.",
    specs: ["კაბელებით მართული მაგიდები", "მოდულური ღია თაროები", "აკუსტიკური უკანა პანელები"],
  },
  {
    title: "სალონები",
    tag: "სალონი",
    img: living,
    desc: "მედია ბლოკები, სიდბორდები და მოდულური თაროების სისტემები. გულწრფელი მასალები, მშვიდი პროპორციები, ზედმეტი დეტალების გარეშე.",
    specs: ["მცოცავი მედია ბლოკები", "კაკლის ან მუხის ვინირი", "ბიძგით სახსნელი უჯრეები"],
  },
  {
    title: "მასალების ბიბლიოთეკა",
    tag: "მასალები",
    img: material,
    desc: "ვმუშაობთ მცირე, გააზრებულ პალიტრაში — ბუნებრივი მუხა და კაკალი, MDF, პრემიუმ ლამინატები მატ საფარით რბილ ნეიტრალურ ტონებში.",
    specs: ["Egger & Kronospan ლამინატები", "ნამდვილი ხის ვინირი", "თითის ნაკვალევს მდგრადი მატი"],
  },
  // ახალი კატეგორიები ↓
  {
    title: "კარადები",
    tag: "კარადა",
    img: bedroom,
    desc: "ინდივიდუალურად დამზადებული კარადები ნებისმიერი სივრცისთვის — სასრიალო, სახსრიანი ან ღია სისტემებით. თითოეული კარადა ადაპტირებულია შენი ოთახის ზომებსა და სტილზე.",
    specs: ["სასრიალო და სახსრიანი კარის სისტემები", "შიდა მოდულური ორგანაიზება", "მატი და სპეკულური საფარი"],
  },
  {
    title: "შემოსასვლელები",
    tag: "შემოსასვლელი",
    img: office,
    desc: "პირველი შთაბეჭდილება იწყება შემოსასვლელიდან. ჩაშენებული საგარდერობო სისტემები, ფეხსაცმლის თაროები, სარკეები და კიდეები — ყველაფერი ლაკონური და პრაქტიკული.",
    specs: ["ჩაშენებული საგარდერობო სისტემა", "ფეხსაცმლის მოდულური თაროები", "ინტეგრირებული სარკე და კიდეები"],
  },
  {
    title: "კამოდები და ტუმბები",
    tag: "კამოდი / ტუმბო",
    img: living,
    desc: "მცირე, მაგრამ მნიშვნელოვანი — კამოდები და ღამის ტუმბები, რომლებიც ავსებენ სივრცეს სტილით და ფუნქციით. ხის ბუნებრივი ტექსტურა, რბილი ხაზები, ზედმეტი არაფერი.",
    specs: ["Blum რბილი დახურვის მექანიზმი", "მუხა / კაკლის ვინირი", "კომპაქტური და ჩაღრმავებული სახელურები"],
  },
];



function Collections() {
  return (
    <div>
      <section className="container-x mx-auto max-w-7xl pt-16 md:pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">კოლექციები</p>
        <h1 className="text-5xl md:text-6xl max-w-3xl">
          შექმნილია სამზარეულოებისთვის, საძინებლებისთვის, კაბინეტებისა და სალონებისთვის.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          LUMO-ს თითოეული ნაჭერი იხატება ერთი კონკრეტული ოთახისთვის.
          ეს არის ოთახები, რომლებიც ყველაზე კარგად ვიცით — მასალები
          და დეტალები, რომლებს ვენდობით.
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
