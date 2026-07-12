import { createFileRoute } from "@tanstack/react-router";
import kidsRoom from "@/assets/roomos.webp";
import { workspaceGallery } from "@/data/collections-data";
import { CategoryPage, buildFaqSchema, type FaqItem } from "@/components/category-page";

const faqs: FaqItem[] = [
  {
    q: "როგორ განვსაზღვროთ, რა ზომის სამუშაო მაგიდა იქნება ოპტიმალური?",
    a: "ყველაფერი დამოკიდებულია იმაზე, როგორ გამოიყენებთ სივრცეს. პროექტირებისას ვითვალისწინებთ კომპიუტერის, მონიტორის, წიგნების, პრინტერისა და სხვა საჭირო ნივთების ადგილსაც, რათა სამუშაო გარემო მაქსიმალურად კომფორტული იყოს.",
  },
  {
    q: "რამდენი დრო სჭირდება დამზადებას?",
    a: "საშუალოდ 5–10 სამუშაო დღე, თუმცა ზუსტი ვადა პროექტის ზომასა და სირთულეზეა დამოკიდებული.",
  },
  {
    q: "რა ღირს სამუშაო კუთხის ავეჯის დამზადება?",
    a: "ფასი დამოკიდებულია მაგიდის ზომაზე, დამატებითი თაროების/საცავის საჭიროებასა და მასალაზე. კონკრეტულ ღირებულებას სივრცის შეფასების შემდეგ მოგცემთ.",
  },
];

export const Route = createFileRoute("/collections/workspace")({
  component: WorkspacePage,
  head: () => {
    const faqSchema = buildFaqSchema(faqs);
    return {
      meta: [
        { title: "სამეცადინო და სამუშაო კუთხის ავეჯი — LUMO" },
        {
          name: "description",
          content:
            "საბავშვო ოთახის სამეცადინო და სახლის სამუშაო კუთხის ავეჯი — კომპაქტური მაგიდა-თაროს გადაწყვეტები მცირე სივრცისთვისაც. LUMO-ს ნამუშევრები თბილისში.",
        },
        { property: "og:title", content: "სამეცადინო და სამუშაო კუთხის ავეჯი — LUMO" },
        {
          property: "og:description",
          content:
            "საბავშვო ოთახის სამეცადინო და სახლის სამუშაო კუთხის ავეჯი — კომპაქტური მაგიდა-თაროს გადაწყვეტები მცირე სივრცისთვისაც.",
        },
      ],
      links: [{ rel: "canonical", href: "https://lumofurniture.ge/collections/workspace" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
});

function WorkspacePage() {
  return (
    <CategoryPage
      breadcrumbLabel="სამეცადინო/სამუშაო კუთხე"
      h1="სამეცადინო და სამუშაო კუთხის ავეჯი"
      subtitle="ვამზადებთ საბავშვო ოთახის ავეჯს, რომელიც კომფორტულია როგორც სწავლისთვის, ისე ყოველდღიური გამოყენებისთვის."
      heroImg={kidsRoom}
      heroAlt="სამეცადინო კუთხე საბავშვო ოთახში — LUMO"
      guideHeading="კომფორტული სივრცე სწავლისა და მუშაობისთვის"
      guideParagraphs={[
        "კარგად დაგეგმილი სამუშაო კუთხის ავეჯი მცირე სივრცეშიც კი საშუალებას გაძლევთ შექმნათ კომფორტული გარემო სწავლისა და მუშაობისთვის. სწორად შერჩეული სამუშაო მაგიდა, პრაქტიკული თაროები და საკმარისი სათავსო ყოველდღიურ საქმიანობას ბევრად უფრო მარტივსა და მოწესრიგებულს ხდის. თუ სივრცე შეზღუდულია, თითოეული სანტიმეტრის ეფექტურად გამოყენება განსაკუთრებით მნიშვნელოვანია.",
      ]}
      galleryHeading="ასე შეიძლება გამოიყურებოდეს თქვენი სამუშაო კუთხე"
      gallery={workspaceGallery}
      faqs={faqs}
      currentHref="/collections/workspace"
    />
  );
}
