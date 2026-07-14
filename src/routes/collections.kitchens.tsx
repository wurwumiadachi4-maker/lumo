import { createFileRoute } from "@tanstack/react-router";
import heroKitchen from "@/assets/kitchenos.webp";
import kitchenSmallLight from "@/assets/smallkitchen.webp";
import kitchenGraphiteLarge from "@/assets/work/kitchen-0.webp";
import kitchenWhiteOak from "@/assets/work/kitchen-7.webp";
import { kitchenGallery } from "@/data/collections-data";
import {
  CategoryPage,
  buildFaqSchema,
  MaterialCards,
  ColorSwatches,
  PullQuote,
  type FaqItem,
} from "@/components/category-page";

const faqs: FaqItem[] = [
  {
    q: "რამდენი დრო სჭირდება სამზარეულოს დამზადებას?",
    a: "საშუალოდ 1 კვირიდან 2 კვირა. უფრო დიდი ან რთული პროექტების შემთხვევაში ვადას წინასწარ შეგითანხმებთ.",
  },
  {
    q: "რომელი მასალაა საუკეთესო სამზარეულოსთვის?",
    a: "ჩვენი გამოცდილებით, უმეტესობისთვის საუკეთესო არჩევანია MDF — თანამედროვე იერი, კარგი გამძლეობა ტენიან გარემოშიც და ხარისხ-ფასის საუკეთესო ბალანსი. ლამინატი ეკონომიური და პრაქტიკული ალტერნატივაა. მასივ ხეს ვამზადებთ მხოლოდ სპეციალური მოთხოვნის შემთხვევაში — ლამაზია, მაგრამ საგრძნობლად ძვირი და მეტ მოვლას საჭიროებს, ამიტომ უმეტეს პროექტზე მას აქტიურად არ ვურჩევთ.",
  },
  {
    q: "რა ღირს სამზარეულოს დამზადება?",
    a: "ფასი დამოკიდებულია ზომაზე, მასალებზე, ფურნიტურასა და პროექტის სირთულეზე. ზუსტ ღირებულებას უფასო კონსულტაციისა და სივრცის შეფასების შემდეგ გთავაზობთ.",
  },
];

export const Route = createFileRoute("/collections/kitchens")({
  component: KitchensPage,
  head: () => {
    const faqSchema = buildFaqSchema(faqs);
    return {
      meta: [
        { title: "სამზარეულოს დამზადება შეკვეთით თბილისში — LUMO" },
        {
          name: "description",
          content:
            "სამზარეულოს დამზადება შეკვეთით LUMO-სთან — MDF სამზარეულოები ინდივიდუალური დიზაინით, პრემიუმ მასალებითა და 5-წლიანი გარანტიით. იხილეთ ჩვენი ნამუშევრები თბილისში.",
        },
        { property: "og:title", content: "სამზარეულოს დამზადება შეკვეთით თბილისში — LUMO" },
        {
          property: "og:description",
          content:
            "სამზარეულოს დამზადება შეკვეთით LUMO-სთან — MDF სამზარეულოები ინდივიდუალური დიზაინით, პრემიუმ მასალებითა და 5-წლიანი გარანტიით.",
        },
      ],
      links: [{ rel: "canonical", href: "https://lumofurniture.ge/collections/kitchens" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
});

function KitchensPage() {
  return (
    <CategoryPage
      breadcrumbLabel="სამზარეულოები"
      h1="სამზარეულოს დამზადება შეკვეთით"
      subtitle="ყოველი სამზარეულო თქვენი სივრცისა და ყოველდღიური საჭიროებების მიხედვით მზადდება — თანამედროვე დიზაინით, გამძლე მასალებითა და ხარისხიანი ფურნიტურით."
      heroImg={heroKitchen}
      heroAlt="თანამედროვე სამზარეულო — LUMO"
      categoryNoun="სამზარეულო"
      guideHeading="სამზარეულო, რომელიც თქვენს ყოველდღიურ ცხოვრებას ერგება"
      guideParagraphs={[
        "სამზარეულო ერთ-ერთი ყველაზე ხშირად გამოყენებული სივრცეა სახლში, ამიტომ მისი დაგეგმვა მხოლოდ ვიზუალურ მხარეს არ უნდა დაეყრდნოს. კარგად დაპროექტებული განლაგება, ხარისხიანი მასალები და გამძლე ფურნიტურა განსაზღვრავს, რამდენად კომფორტული იქნება მისი გამოყენება წლების განმავლობაში.",
        "სწორედ ამიტომ, სამზარეულოს დამზადება ყოველთვის იწყება თქვენი სივრცისა და ყოველდღიური საჭიროებების გაცნობით. მაგალითად, ერთ-ერთი ყველაზე გავრცელებული შეცდომა სამზარეულოს დაგეგმვისას სამუშაო ზონების არასწორი განლაგებაა. მაცივარი, ნიჟარა და ქურა ყოველდღიურად ყველაზე ხშირად გამოიყენება, ამიტომ მათ შორის გადაადგილება მარტივი და მოსახერხებელი უნდა იყოს. სწორად დაგეგმილი განლაგება ამცირებს ზედმეტ მოძრაობას და სამზარეულოს გამოყენებას ბევრად უფრო კომფორტულს ხდის.",
      ]}
      customGuideBody={
        <>
          <MaterialCards
            items={[
              {
                title: "MDF",
                description: "გლუვი ფასადები და თანამედროვე დიზაინი, ტენიან გარემოშიც გამძლე.",
                swatchClassName: "bg-sand",
                badge: "✓ ყველაზე ხშირად არჩეული",
              },
              {
                title: "ლამინატი",
                description: "ეკონომიური და ხარისხიანი, ყოველდღიური გამოყენებისთვის შესანიშნავი.",
                swatchClassName: "bg-stone-warm",
              },
              {
                title: "მასივი ხე",
                description: "ბუნებრივი ტექსტურა და გამორჩეული იერი, მეტ მოვლას საჭიროებს.",
                swatchClassName: "bg-primary",
              },
            ]}
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Egger-ისა და Kronospan-ის ხარისხიან მასალებს Blum-ისა და Hettich-ის ფურნიტურასთან ერთად ვიყენებთ.
          </p>

          <h3 className="mt-8 text-sm font-medium">რომელი ფერი უხდება თქვენს სივრცეს</h3>
          <ColorSwatches
            items={[
              {
                label: "ღია ტონი — პატარა სივრცე",
                photo: { src: kitchenSmallLight, alt: "პატარა სამზარეულო ღია ტონის კარადებით" },
              },
              {
                label: "გრაფიტისფერი — დიდი სივრცე",
                photo: { src: kitchenGraphiteLarge, alt: "დიდი სამზარეულო გრაფიტისფერი კარადებით" },
              },
              {
                label: "თეთრი + მუხა — უნივერსალური",
                photo: { src: kitchenWhiteOak, alt: "სამზარეულო თეთრი და ხის ტონის კარადებით" },
              },
            ]}
          />

          <PullQuote>
            ბოლო წლებში საქართველოში სულ უფრო პოპულარული ხდება მინიმალისტური სამზარეულოები, სახელურის გარეშე
            (handle-less) შესრულებული ფასადებით.
          </PullQuote>
        </>
      }
      galleryHeading="ასე შეიძლება გამოიყურებოდეს თქვენი სამზარეულო"
      gallery={kitchenGallery}
      faqs={faqs}
      currentHref="/collections/kitchens"
    />
  );
}
