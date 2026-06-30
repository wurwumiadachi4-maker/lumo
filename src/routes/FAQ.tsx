import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

/* ----------------------------------------------------------------
   FAQ DATA
   ⚠️ დაჩი — გადაამოწმე ყველა პასუხი! განსაკუთრებით:
   ფასები, ვადები, მონტაჟი, გასვლითი ზომვა, გადახდის პირობები.
   სადაც ფაქტი არ ვიცი, [ფრჩხილებში] დავტოვე — ჩაასწორე.
------------------------------------------------------------------- */

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: "შეკვეთა და პროცესი",
    items: [
      {
        q: "როგორ ხდება ავეჯის შეკვეთა?",
        a: "პროცესი მარტივია: თქვენ ტოვებთ განაცხადს ვებსაიტზე ან გვიკავშირდებით WhatsApp-ით ან ზარით. ჩვენ გესაუბრებით თქვენს საჭიროებებზე, ვათანხმებთ დიზაინსა და ზომებს, შემდეგ ვამზადებთ ავეჯს და ვაწყობთ ადგილზე. მთელი პროცესი ინდივიდუალურია — თითოეული პროექტი თქვენს სივრცეზეა მორგებული.",
      },
      {
        q: "ადგილზე გამოხვალთ ზომების ასაღებად?",
        a: "[დიახ — ჩვენი სპეციალისტი გამოვა თქვენთან და ზუსტად გაზომავს სივრცეს, რომ ავეჯი იდეალურად მოერგოს. გადაამოწმე: ეს უფასოა თუ ფასიანი, და რომელ ლოკაციებზე ვრცელდება — მხოლოდ თბილისი თუ რეგიონებიც.]",
      },
      {
        q: "რამდენი ხანი სჭირდება ავეჯის დამზადებას?",
        a: "[ვადა დამოკიდებულია პროექტის სირთულესა და მოცულობაზე. დაახლოებით — სამზარეულო X კვირა, გარდერობი Y კვირა და ა.შ. ჩაასწორე რეალური ვადებით.]",
      },
      {
        q: "შემიძლია საკუთარი დიზაინი ან რეფერენსი მოგაწოდოთ?",
        a: "რა თქმა უნდა. თუ უკვე გაქვთ დიზაინი, ფოტო ან რეფერენსი — მოგვაწოდეთ და ჩვენ მას მოვარგებთ თქვენს სივრცეს. თუ არ გაქვთ, ჩვენი გუნდი დაგეხმარებათ შესაბამისი გადაწყვეტის შერჩევაში.",
      },
    ],
  },
  {
    title: "ფასი და გადახდა",
    items: [
      {
        q: "როგორ განისაზღვრება ფასი?",
        a: "ფასი ინდივიდუალურია და დამოკიდებულია რამდენიმე ფაქტორზე: ავეჯის ზომაზე, შერჩეულ მასალაზე, ფურნიტურასა და დიზაინის სირთულეზე. ზუსტ ფასს ვაცხადებთ მას შემდეგ, რაც გავეცნობით თქვენს პროექტს და ავიღებთ ზომებს. ვებსაიტზე განაცხადის დატოვების შემდეგ მიიღებთ უფასო კონსულტაციას.",
      },
      {
        q: "შესაძლებელია განვადებით გადახდა?",
        a: "[გადაამოწმე — გაქვთ თუ არა განვადება, რომელ ბანკებთან, რა პირობებით. თუ არა, ეს კითხვა საერთოდ წაშალე.]",
      },
      {
        q: "რა შედის ფასში — მონტაჟი და მიწოდება?",
        a: "[გადაამოწმე: შედის თუ არა მიწოდება და მონტაჟი ფასში, თუ ცალკე ფასდება. ეს ერთ-ერთი ყველაზე ხშირი კითხვაა, ამიტომ ზუსტი პასუხი მნიშვნელოვანია.]",
      },
    ],
  },
  {
    title: "მასალები და ხარისხი",
    items: [
      {
        q: "რა მასალებს იყენებთ?",
        a: "ვმუშაობთ მაღალხარისხიან მასალებთან: MDF, Egger-ისა და Kronospan-ის ფილებზე, ხოლო ფურნიტურაში ვიყენებთ Blum-ისა და Hettich-ის მექანიზმებს — ეს არის მსოფლიოში აღიარებული ბრენდები, რომლებიც უზრუნველყოფენ ავეჯის გამძლეობასა და გლუვ, ხანგრძლივ მუშაობას.",
      },
      {
        q: "რა გარანტიას იძლევით?",
        a: "ჩვენ ვიძლევით 10 წლის გარანტიას ყველა ნაწარმზე. ეს ნიშნავს, რომ ვართ დარწმუნებული ჩვენი ავეჯის ხარისხსა და გამძლეობაში.",
      },
      {
        q: "რა ფერებსა და სტილში შემიძლია არჩევანი?",
        a: "არჩევანი ფართოა — ნათელი ბუნებრივი ხის ფაქტურებიდან მუქ, ელეგანტურ ტონებამდე და კლასიკურ თეთრამდე. შესაბამის ფერსა და სტილს ერთად შევარჩევთ, რომ თქვენს ინტერიერს იდეალურად მოერგოს.",
      },
    ],
  },
  {
    title: "ლოკაცია და მომსახურება",
    items: [
      {
        q: "გაქვთ მაღაზია ან გამოფენა?",
        a: "[გადაამოწმე — ფიზიკური showroom არ გაქვთ, ამიტომ პასუხი ალბათ: ჩვენ ვმუშაობთ ინდივიდუალური შეკვეთებით და ფიზიკურ გამოფენას არ ვაწყობთ. სამაგიეროდ, ჩვენს ვებსაიტზე და სოციალურ ქსელებში შეგიძლიათ იხილოთ ჩვენი ნამუშევრები. დასრულებულ პროექტებსაც გაჩვენებთ კონსულტაციისას.]",
      },
      {
        q: "რომელ რეგიონებში მუშაობთ?",
        a: "[გადაამოწმე — მხოლოდ თბილისი, თუ რეგიონებშიც ემსახურებით. ჩაასწორე ზუსტი ინფორმაციით.]",
      },
    ],
  },
];

export const Route = createFileRoute("/FAQ")({
  component: Faq,
  head: () => {
    // FAQPage JSON-LD schema — Google-ის "People Also Ask" / rich results-ისთვის
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqCategories.flatMap((cat) =>
        cat.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            // schema-ში [ფრჩხილებიან] placeholder-ებს ვწმენდთ
            text: item.a.replace(/\[.*?\]/g, "").trim() || item.a,
          },
        })),
      ),
    };

    return {
      meta: [
        { title: "ხშირად დასმული კითხვები — LUMO" },
        {
          name: "description",
          content:
            "პასუხები ხშირად დასმულ კითხვებზე — შეკვეთის პროცესი, ფასები, მასალები, გარანტია და მომსახურება. LUMO — ავეჯის დამზადება შეკვეთით თბილისში.",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
});

function Faq() {
  return (
    <div>
      {/* HERO */}
      <section className="container-x mx-auto max-w-7xl pt-8 md:pt-12 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          ხშირად დასმული კითხვები
        </p>
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <h1 className="md:col-span-7 text-3xl md:text-4xl leading-[1.05]">
            პასუხები თქვენს კითხვებზე
          </h1>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed md:pb-2">
            აქ თავი მოვუყარეთ ყველაზე ხშირ კითხვებს შეკვეთის, ფასების, მასალებისა და
            მომსახურების შესახებ. თუ პასუხს ვერ იპოვით — დაგვიკავშირდით.
          </p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="container-x mx-auto max-w-3xl pb-20">
        <div className="space-y-12">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {category.title}
              </h2>
              <div className="divide-y divide-border/60 border-y border-border/60">
                {category.items.map((item) => (
                  <FaqAccordion key={item.q} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA → funnel */}
      <section className="container-x mx-auto max-w-7xl pb-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl mb-2">პასუხი ვერ იპოვეთ?</h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              დაიწყეთ პროექტი ან დაგვიკავშირდით — ჩვენი გუნდი მზადაა უფასო კონსულტაციისთვის.
            </p>
          </div>
          <Link
            to="/start"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition self-start md:self-auto whitespace-nowrap"
          >
            პროექტის დაწყება <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-medium group-hover:text-accent transition-colors">
          {item.q}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 mt-1 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-muted-foreground leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}