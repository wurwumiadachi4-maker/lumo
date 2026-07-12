import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { WorkGallery, type WorkCategory } from "@/components/work-gallery";
import type { CategoryHref } from "@/data/collections-data";

export interface FaqItem {
  q: string;
  a: string;
}

const allCategoryLinks: { href: CategoryHref; label: string }[] = [
  { href: "/collections/kitchens", label: "სამზარეულოები" },
  { href: "/collections/bedrooms", label: "საძინებლები" },
  { href: "/collections/wardrobes", label: "გარდერობი/კარადა" },
  { href: "/collections/offices", label: "ოფისები" },
  { href: "/collections/living", label: "მისაღები ოთახები" },
  { href: "/collections/workspace", label: "სამეცადინო/სამუშაო კუთხე" },
];

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

interface CategoryPageProps {
  breadcrumbLabel: string;
  h1: string;
  subtitle: string;
  heroImg: string;
  heroAlt: string;
  guideHeading: string;
  guideParagraphs: string[];
  galleryHeading: string;
  gallery: WorkCategory;
  faqs: FaqItem[];
  currentHref: CategoryHref;
}

export function CategoryPage({
  breadcrumbLabel,
  h1,
  subtitle,
  heroImg,
  heroAlt,
  guideHeading,
  guideParagraphs,
  galleryHeading,
  gallery,
  faqs,
  currentHref,
}: CategoryPageProps) {
  return (
    <div>
      {/* HERO */}
      <section className="container-x mx-auto max-w-7xl pt-16 md:pt-24 pb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
          <Link to="/collections" className="hover:text-accent transition-colors">
            კოლექციები
          </Link>{" "}
          / {breadcrumbLabel}
        </p>
        <h1 className="text-3xl md:text-5xl max-w-2xl leading-tight">{h1}</h1>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">{subtitle}</p>
      </section>

      {/* HERO IMAGE */}
      <section className="container-x mx-auto max-w-7xl pb-16 md:pb-20">
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-muted">
          <img
            src={heroImg}
            alt={heroAlt}
            loading="eager"
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* GUIDE / DESCRIPTION */}
      <section className="container-x mx-auto max-w-4xl pb-20 md:pb-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
          პრაქტიკული გზამკვლევი
        </p>
        <h2 className="text-2xl md:text-3xl mb-6">{guideHeading}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {guideParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-x mx-auto max-w-7xl pb-24 md:pb-32">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">გალერეა</p>
        <h2 className="text-3xl md:text-4xl mb-10 md:mb-12">{galleryHeading}</h2>
        <WorkGallery categories={[gallery]} />
      </section>

      {/* FAQ */}
      <section className="container-x mx-auto max-w-7xl pb-24 md:pb-32">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">კითხვები</p>
        <h2 className="text-3xl md:text-4xl mb-8 md:mb-10">ხშირად დასმული კითხვები</h2>
        <div className="max-w-3xl divide-y divide-border/60 border-y border-border/60">
          {faqs.map((item) => (
            <FaqRow key={item.q} item={item} />
          ))}
        </div>
      </section>

      {/* ასევე იხილეთ */}
      <section className="container-x mx-auto max-w-7xl pb-16 md:pb-20">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">ასევე იხილეთ</p>
        <div className="flex flex-wrap gap-3">
          {allCategoryLinks
            .filter((c) => c.href !== currentHref)
            .map((c) => (
              <Link
                key={c.href}
                to={c.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition"
              >
                {c.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
        </div>
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

function FaqRow({ item }: { item: FaqItem }) {
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
