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
        a: "შეგიძლიათ დაგვიკავშირდეთ ვებსაიტის, WhatsApp-ის ან ტელეფონის საშუალებით. გავეცნობით თქვენს სურვილებს, შევათანხმებთ დიზაინს, ზომებსა და მასალებს, შემდეგ კი დავიწყებთ დამზადებას. თითოეული პროექტი ინდივიდუალურად თქვენს სივრცეზე მორგებით მზადდება.",
      },
      {
        q: "ადგილზე გამოხვალთ ზომების ასაღებად?",
        a: "დიახ, ჩვენი სპეციალისტი მოვა ადგილზე, ზუსტად გაზომავს სივრცეს და დაგეხმარებათ საუკეთესო გადაწყვეტის შერჩევაში.",
      },
      {
        q: "რამდენი ხანი სჭირდება ავეჯის დამზადებას?",
        a: "დრო დამოკიდებულია პროექტის სირთულესა და მოცულობაზე. საშუალოდ: სამზარეულო — 10 დღიდან 2 კვირამდე; გარდერობი / კარადა — დაახლოებით 1 კვირა. ზუსტ ვადას პროექტის შეთანხმების შემდეგ გეტყვით.",
      },
      {
        q: "შემიძლია საკუთარი დიზაინი ან რეფერენსი მოგაწოდოთ?",
        a: "რა თქმა უნდა. თუ უკვე გაქვთ ფოტო, დიზაინი ან რეფერენსი, მოგვაწოდეთ და თქვენს სივრცეს მოვარგებთ. თუ ჯერ გადაწყვეტილი არ გაქვთ, დაგეხმარებით დიზაინის შერჩევაშიც.",
      },
    ],
  },
  {
    title: "ფასი და გადახდა",
    items: [
      {
        q: "როგორ განისაზღვრება ფასი?",
        a: "ფასი დამოკიდებულია ავეჯის ზომაზე, მასალებზე, ფურნიტურასა და დიზაინის სირთულეზე. ზუსტ ღირებულებას პროექტის დეტალების გაცნობისა და ზომების აღების შემდეგ გეტყვით.",
      },
      {
        q: "შესაძლებელია განვადებით გადახდა?",
        a: "დიახ, განვადება შესაძლებელია როგორც თიბისი ბანკის, ასევე საქართველოს ბანკის მეშვეობით.",
      },
      {
        q: "რა შედის ფასში — მიწოდება და მონტაჟი?",
        a: "ფასში შედის როგორც დამზადება, ასევე მიწოდება და მონტაჟი.",
      },
    ],
  },
  {
    title: "მასალები და ხარისხი",
    items: [
      {
        q: "რა მასალებს იყენებთ?",
        a: "ვიყენებთ ხარისხიან MDF-სა და ლამინირებულ ფილებს — Egger-ისა და Kronospan-ის მასალებს. ფურნიტურაში ვმუშაობთ Blum-ისა და Hettich-ის მექანიზმებით, რომლებიც გამოირჩევა გამძლეობითა და კომფორტული გამოყენებით.",
      },
      {
        q: "რა გარანტიას იძლევით?",
        a: "ჩვენი ავეჯი 5-წლიანი გარანტიით მზადდება. თუ გამოყენების პროცესში რაიმე პრობლემა წარმოიქმნება, ჩვენი გუნდი დაგეხმარებათ და საჭიროების შემთხვევაში უფასოდ მოვაგვარებთ.",
      },
    ],
  },
  {
    title: "ლოკაცია და მომსახურება",
    items: [
      {
        q: "გაქვთ მაღაზია ან შოურუმი?",
        a: "ამ ეტაპზე ფიზიკური შოურუმი არ გვაქვს და მხოლოდ ინდივიდუალურ შეკვეთებზე ვმუშაობთ. ჩვენი ნამუშევრების ნახვა შეგიძლიათ ვებსაიტზე და სოციალურ ქსელებში.",
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
      links: [{ rel: "canonical", href: "https://lumofurniture.ge/FAQ" }],
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