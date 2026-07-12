import { createFileRoute } from "@tanstack/react-router";
import living from "@/assets/livinges.webp";
import { livingGallery } from "@/data/collections-data";
import { CategoryPage, buildFaqSchema, type FaqItem } from "@/components/category-page";

const faqs: FaqItem[] = [
  {
    q: "რა დრო სჭირდება TV კედლის დამზადებას?",
    a: "საშუალოდ 5–10 სამუშაო დღე, დიზაინის სირთულის მიხედვით.",
  },
  {
    q: "შესაძლებელია განათების ინტეგრაცია?",
    a: "დიახ. სურვილის შემთხვევაში TV კედელში LED განათებასაც ვამონტაჟებთ.",
  },
  {
    q: "შესაძლებელია ტექნიკის (როუტერი, კონსოლი, receiver) მოთავსება კედლის შიგნით, გახურების გარეშე?",
    a: "დიახ. დახურულ განყოფილებებში ვგეგმავთ ვენტილაციის ხვრელებს ან კაბელის არხებს, რომ ტექნიკამ თავისუფლად \"ისუნთქოს\" და არ გახურდეს ხანგრძლივი გამოყენებისას.",
  },
  {
    q: "რა ღირს TV კედლის დამზადება?",
    a: "ფასზე გავლენას ახდენს კედლის სიგანე, დამატებითი ფუნქციები (LED განათება, დახურული საცავი) და არჩეული მასალა. ზუსტ ღირებულებას უფასო კონსულტაციისას განვსაზღვრავთ.",
  },
];

export const Route = createFileRoute("/collections/living")({
  component: LivingPage,
  head: () => {
    const faqSchema = buildFaqSchema(faqs);
    return {
      meta: [
        { title: "TV კედელი და მისაღების ავეჯი შეკვეთით — LUMO" },
        {
          name: "description",
          content:
            "TV კედლები და მისაღების ინდივიდუალური ავეჯი — თანამედროვე დიზაინი, სივრცეზე მორგებული ზომები LUMO-სგან, თბილისში.",
        },
        { property: "og:title", content: "TV კედელი და მისაღების ავეჯი შეკვეთით — LUMO" },
        {
          property: "og:description",
          content: "TV კედლები და მისაღების ინდივიდუალური ავეჯი — თანამედროვე დიზაინი, სივრცეზე მორგებული ზომები.",
        },
      ],
      links: [{ rel: "canonical", href: "https://lumofurniture.ge/collections/living" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
});

function LivingPage() {
  return (
    <CategoryPage
      breadcrumbLabel="მისაღები ოთახი"
      h1="TV კედელი და მისაღების ავეჯი"
      subtitle="TV კედლები, თაროები და სხვადასხვა ინტერიერის ელემენტები, რომელიც მისაღებ ოთახს უფრო მყუდრო და თანამედროვე სივრცედ აქცევს."
      heroImg={living}
      heroAlt="TV კედელი მისაღებში — LUMO"
      guideHeading="თანამედროვე TV კედლები თქვენი მისაღებისთვის"
      guideParagraphs={[
        "კარგად დაპროექტებული TV კედელი მისაღები ოთახის ერთ-ერთი მნიშვნელოვანი აქცენტი ხდება. ინდივიდუალურად დამზადებული TV კედელი საშუალებას გაძლევთ ტელევიზორი და დეკორატიული თაროები ერთიან დიზაინში გააერთიანოთ. კაბელები მთლიანად იმალება, სურვილის შემთხვევაში ემატება ინტეგრირებული LED განათებაც, რაც სივრცეს უფრო თანამედროვე და მოწესრიგებულ იერს აძლევს. სწორედ ამიტომ, მისაღები ოთახის ავეჯი მხოლოდ ლამაზი კი არა, პრაქტიკულიც უნდა იყოს. თითოეულ პროექტს თქვენი სივრცის, ინტერიერისა და საჭიროებების მიხედვით ვამზადებთ.",
      ]}
      galleryHeading="ასე შეიძლება გამოიყურებოდეს თქვენი მისაღები"
      gallery={livingGallery}
      faqs={faqs}
      currentHref="/collections/living"
    />
  );
}
