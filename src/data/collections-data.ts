import type { WorkCategory } from "@/components/work-gallery";

import heroKitchen from "@/assets/kitchenos.webp";
import wardrobeImg from "@/assets/Wardrobe.webp";
import wardrobe1 from "@/assets/wardrobe1.webp";
import wardrobe2 from "@/assets/wardrobe2.webp";
import tvWallUnit1 from "@/assets/TV wall unit.webp";
import tvWallUnit2 from "@/assets/TV wall unit2.webp";
import tvWallUnit3 from "@/assets/TV wall unit3.webp";
import tvUnit from "@/assets/TV unit.webp";
import bedroom from "@/assets/bedroomes.webp";
import bedroom2 from "@/assets/work/Bedroom2.webp";
import bedroomNew1 from "@/assets/bedroom1.webp";
import bedroomNew2 from "@/assets/bedroom2.webp";
import bedroomNew3 from "@/assets/bedroom3.webp";
import office from "@/assets/offices.webp";
import office2 from "@/assets/work/office2.webp";
import living from "@/assets/livinges.webp";
import material from "@/assets/material.webp";
import kidsRoom from "@/assets/roomos.webp";
import kidsRoom2 from "@/assets/work/roomos2.webp";
import workRoom from "@/assets/work/office-1.webp";
import workRoomAlt from "@/assets/work/office-2.webp";
import kitchenWork1 from "@/assets/work/kitchen-1.webp";
import kitchenWork0 from "@/assets/work/kitchen-0.webp";
import kitchenWork01 from "@/assets/work/kitchen-01.webp";
import kitchenWork3 from "@/assets/work/kitchen-3.webp";
import ourmadekitchen from "@/assets/work/ourmadekitchen.webp";
import kitchenWork4 from "@/assets/work/kitchen-4.webp";
import kitchenWork5 from "@/assets/work/kitchen-5.webp";
import kitchenWork56 from "@/assets/work/kitchen-05.webp";
import kitchenWork6 from "@/assets/work/kitchen-6.webp";
import kitchenWork7 from "@/assets/work/kitchen-7.webp";
import kitchenWork8 from "@/assets/work/kitchen-8.webp";
import ourmadekitchenn from "@/assets/work/ourmadekitchenn.webp";

/* ----------------------------------------------------------------
   ცალკეული კატეგორიის SEO ლენდინგ გვერდების URL-ები.
   ახალი კატეგორიის დამატებისას აქ დაამატე ტიპი და route ფაილი.
------------------------------------------------------------------- */
export type CategoryHref =
  | "/collections/kitchens"
  | "/collections/bedrooms"
  | "/collections/wardrobes"
  | "/collections/offices"
  | "/collections/living"
  | "/collections/workspace";

export interface CollectionItem {
  title: string;
  href: CategoryHref | "/start";
  img: string;
  desc: string;
  descFull: string;
  specs: string[];
}

/* ----------------------------------------------------------------
   მთავარი /collections გვერდის overview ბარათები.
------------------------------------------------------------------- */
export const items: CollectionItem[] = [
  {
    title: "სამზარეულოები",
    href: "/collections/kitchens",
    img: heroKitchen,
    desc: "სამზარეულოს დამზადება შეკვეთით — თანამედროვე და პრაქტიკული სამზარეულოები ყოველდღიური კომფორტისთვის.",
    descFull:
      "ყოველი სამზარეულო შეკვეთით მზადდება თქვენი სივრცისა და ყოველდღიური საჭიროებების მიხედვით. ვქმნით თანამედროვე და პრაქტიკულ MDF სამზარეულოს, გამძლე მასალებითა და ხარისხიანი ფურნიტურით.",
    specs: ["თანამედროვე და ფუნქციური დიზაინი", "გამძლე მასალა", "ხარისხიანი მექანიზმები"],
  },
  {
    title: "საძინებლები",
    href: "/collections/bedrooms",
    img: bedroom,
    desc: "გარდერობის დამზადება და კარადის დამზადება — მყუდრო და ფუნქციური ავეჯი კომფორტული საძინებლისთვის.",
    descFull:
      "გვთავაზობთ გარდერობის დამზადებასა და კარადის დამზადებას საძინებლისთვის — ჩაშენებული კარადები და საძინებლის ავეჯი, რომელიც იდეალურად ერგება თქვენს სივრცეს და ინტერიერს.",
    specs: ["თანამედროვე დიზაინი", "სივრცის მაქსიმალური გამოყენება"],
  },
  {
    title: "გარდერობი/კარადა",
    href: "/collections/wardrobes",
    img: wardrobeImg,
    desc: "გარდერობის დამზადება — ინდივიდუალურად დაგეგმილი საცავი, სივრცის მაქსიმალური გამოყენებით.",
    descFull:
      "ვქმნით გარდერობებსა და კარადებს, რომლებიც ზუსტად ერგება თქვენი სახლის ზომებსა და საჭიროებებს — სწორად განაწილებული თაროები, საკიდები და უჯრები ყოველდღიურ გამოყენებას მოსახერხებელს ხდის.",
    specs: ["ინდივიდუალური შიდა განლაგება", "ხარისხიანი ფურნიტურა"],
  },
  {
    title: "ოფისები",
    href: "/collections/offices",
    img: office,
    desc: "ოფისის ავეჯი — პრაქტიკული და თანამედროვე გადაწყვეტები სამუშაო სივრცისთვის.",
    descFull:
      "ვამზადებთ ოფისის ავეჯს — მაგიდებს, კარადებსა და თაროებს, რომელიც სივრცეს უფრო ორგანიზებულსა და კომფორტულს ხდის ყოველდღიური მუშაობისთვის.",
    specs: ["თანამედროვე და პრაქტიკული დიზაინი"],
  },
  {
    title: "მისაღები ოთახი",
    href: "/collections/living",
    img: living,
    desc: "TV კედლები და ინტერიერის ავეჯი თანამედროვე მისაღებისთვის.",
    descFull:
      "TV კედლები, თაროები და სხვადასხვა ინტერიერის ელემენტები, რომელიც მისაღებ ოთახს უფრო მყუდრო და თანამედროვე სივრცედ აქცევს.",
    specs: ["სივრცეზე მორგებული ავეჯი", "მყუდრო და პრაქტიკული ინტერიერი"],
  },
  {
    title: "საბავშვო ოთახი",
    href: "/collections/workspace",
    img: kidsRoom,
    desc: "საბავშვო ოთახის ავეჯი — მოსახერხებელი და ფუნქციური, სამუშაო და სასწავლო სივრცისთვის.",
    descFull:
      "ვამზადებთ საბავშვო ოთახის ავეჯს, რომელიც კომფორტულია როგორც სწავლისთვის, ისე ყოველდღიური გამოყენებისთვის.",
    specs: ["პრაქტიკული სამუშაო კუთხე", "მოსახერხებელი თაროები", "ფუნქციური დიზაინი"],
  },
  {
    title: "მასალები",
    href: "/start",
    img: material,
    desc: "Egger, Kronospan, Blum — მხოლოდ ხარისხიანი და გამძლე მასალები.",
    descFull:
      "ვმუშაობთ ხარისხიან მასალებზე, რომლებიც ყოველდღიურ გამოყენებას კარგად უძლებს და ინტერიერს თანამედროვე იერს აძლევს.",
    specs: ["Egger და Kronospan ლამინატები", "MDF და ხის ტექსტურები"],
  },
];

/* ----------------------------------------------------------------
   კატეგორიების გალერეები — ერთადერთი წყარო. ახალი ფოტოს დამატება
   აქ ავტომატურად აისახება როგორც /collections overview-ზე, ისე
   შესაბამის დამოუკიდებელ route-ზეც (WorkGallery უბრალოდ map-ავს
   images მასივზე, ფოტოების რაოდენობაზე დამოუკიდებელია).
------------------------------------------------------------------- */
export const kitchenGallery: WorkCategory = {
  title: "სამზარეულო",
  images: [
    { src: ourmadekitchenn, alt: "სამზარეულო ხის ზედა და ნაცრისფერი ქვედა კარადებით, მარმარილოს ფონითა და საუზმის კუნძულით" },
    { src: kitchenWork0, alt: "სამზარეულო შავი ქვედა და ხის ზედა კარადებით, ჩაშენებული შავი ტექნიკითა და სასადილო მაგიდით" },
    { src: kitchenWork01, alt: "მუქი სამზარეულო ხის ზედა კარადებით, შავი აირის გაზქურითა და ჩაშენებული ტექნიკით" },
    { src: kitchenWork1, alt: "სამზარეულო ხის ზედა და ნაცრისფერი ქვედა კარადებით, მარმარილოს ფონითა და საუზმის კუნძულით" },
    { src: kitchenWork3, alt: "სამზარეულო თეთრი ზედა და ხის ქვედა კარადებით, შავი ჩაშენებული ღუმელით" },
    { src: ourmadekitchen, alt: "თანამედროვე სამზარეულო თეთრი ზედა და ხის ქვედა კარადებით, შავი ონკანითა და ჭურჭლის სარეცხით" },
    { src: kitchenWork4, alt: "სამზარეულო თეთრი ზედა და მუქი კარადებით, კრამიტის ფონითა და ჩაშენებული შავი ღუმლებით" },
    { src: kitchenWork5, alt: "კრემისფერი სამზარეულო აგურის ფაქტურის ფონით, ღვინის თაროთი და ხის სამუშაო ზედაპირით" },
    { src: kitchenWork56, alt: "სამზარეულო მუქი მარმარილოს კუნძულით, ხის კარადებითა და შავი ბარის სკამებით" },
    { src: kitchenWork6, alt: "ნაცრისფერი სამზარეულო ხის ზედა კარადებით, თეთრი სამუშაო ზედაპირითა და შავი არმატურით" },
    { src: kitchenWork7, alt: "სამზარეულო თეთრი ზედა და კაკლის ხის ქვედა კარადებით, პრიალა თეთრი სამუშაო ზედაპირით" },
    { src: kitchenWork8, alt: "კრემისფერი სამზარეულო ვარდისფერი აგურის ფონითა და შავი დაკიდებული სანათით" },
  ],
};

export const workspaceGallery: WorkCategory = {
  title: "სამეცადინო/სამუშაო კუთხე",
  images: [
    { src: kidsRoom, alt: "სამუშაო კუთხე მწვანე ფოთლოვანი ტაპეტის ფონზე, ხის კედლის თაროებითა და გრძელი მაგიდით" },
    { src: kidsRoom2, alt: "იგივე სამუშაო კუთხე კუთხური რაკურსით — ხის თაროები, მაგიდა და მწვანე კომოდი ფონზე" },
    { src: workRoomAlt, alt: "სამუშაო კუთხე ჩაშენებული ხის თაროებით და გრძელი მაგიდით, მუქი საოფისე სკამით" },
    { src: workRoom, alt: "სამუშაო კუთხე თეთრი კარადისა და ხის თაროების კომბინაციით, შავი ბადისებრი საოფისე სკამით" },
  ],
};

export const bedroomGallery: WorkCategory = {
  title: "საძინებელი",
  images: [
    { src: bedroomNew1, alt: "საძინებელი თეთრი ჭერამდე მისული კარადებით, ხის ვერტიკალური ფიცრული ნიშითა და კრემისფერი ხუროსებრი თავსახურით" },
    { src: bedroomNew2, alt: "საძინებელი კრემისფერი კარადებით მუქი ხის არშიებით, მუქი ხის ნიშითა და მუქი ნაცრისფერი ავეჯით" },
    { src: bedroomNew3, alt: "საძინებელი კრემისფერი კარადებით, კაკლის ხის ნიშითა და მოყავისფრო ხუროსებრი თავსახურით, მარმარილოს იატაკით" },
    { src: bedroom, alt: "საძინებელი კრემისფერი პრიალა კარადებით, კაკლის ხის აქცენტითა და შავი ავეჯით" },
    { src: bedroom2, alt: "საძინებელი კრემისფერი კარადებით, კაკლის ხის საწოლის თავსახურითა და ჩაშენებული თაროებით" },
  ],
};

export const wardrobeGallery: WorkCategory = {
  title: "გარდერობი",
  images: [
    { src: wardrobe1, alt: "მუქი ბეჟი ჭერამდე მისული გარდერობი, ხის ფიცრული აქცენტური კედლითა და ჩაშენებული სკამით" },
    { src: wardrobe2, alt: "თეთრი ჭერამდე მისული გარდერობი ხის ფიცრული ნიშითა და ჩაშენებული სკამით" },
    { src: wardrobeImg, alt: "ჭერამდე მისული მუხის ტექსტურის გარდერობი, ზედა და ქვედა უჯრებით და გასაღები კარებით" },
  ],
};

export const officeGallery: WorkCategory = {
  title: "საოფისე",
  images: [
    { src: office, alt: "საოფისე სივრცე ორი მაგიდით და კაკლის ხის კედლის თაროებით, ჩაშენებული ტელევიზორითა და მცენარეებით" },
    { src: office2, alt: "მისაღების მაგიდა მუქი ხის ტექსტურითა და ვერტიკალური ზოლებიანი კარადით" },
  ],
};

export const livingGallery: WorkCategory = {
  title: "მისაღები",
  images: [
    { src: tvWallUnit1, alt: "TV კედელი კაკლის ხის ზედაპირიანი თეთრი კარადითა და ხის ვერტიკალური ფიცრების აქცენტური კედლით" },
    { src: tvWallUnit2, alt: "მწვანე ფერის დაკიდებული TV კედელი ხის ზედაპირითა და ქვედა LED განათებით" },
    { src: living, alt: "TV კედელი თეთრი პანელითა და შიდა განათებით, კაკლის ხის აქცენტური სვეტითა და საბარგულით" },
    { src: tvUnit, alt: "კაკლის ხისა და თეთრი ფასადების კომბინაციის სატელევიზიო კონსოლი, ღია თაროთი შუაში" },
    { src: tvWallUnit3, alt: "მუქი ნაცრისფერი ღარისებრი ტექსტურის TV კედელი ჩაშენებული ღია და დახურული თაროებით" },
  ],
};

export const workCategories: WorkCategory[] = [
  kitchenGallery,
  workspaceGallery,
  bedroomGallery,
  wardrobeGallery,
  officeGallery,
  livingGallery,
];
