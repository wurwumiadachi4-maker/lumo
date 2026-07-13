import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { WorkGallery, type WorkCategory, type WorkImage } from "@/components/work-gallery";
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

/* ----------------------------------------------------------------
   კატეგორია-სპეციფიკური guide სექციისთვის (მაგ. სამზარეულოს მასალის
   ბარათები) — გამოიყენება customGuideBody-ში.
------------------------------------------------------------------- */
export interface MaterialCardData {
  title: string;
  description: string;
  swatchClassName: string;
  badge?: string;
}

export function MaterialCards({ items }: { items: MaterialCardData[] }) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4"
        >
          <div className={`mt-0.5 h-11 w-11 flex-shrink-0 rounded-xl ${item.swatchClassName}`} />
          <div>
            <h4 className="text-sm font-medium mb-1">{item.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            {item.badge && (
              <span className="mt-1.5 inline-block text-xs font-semibold text-accent">{item.badge}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export interface ColorSwatchData {
  label: string;
  swatchClassName: string;
}

export function ColorSwatches({ items }: { items: ColorSwatchData[] }) {
  return (
    <div className="mt-6 flex gap-3">
      {items.map((item) => (
        <div key={item.label} className="flex-1 text-center">
          <div className={`mb-1.5 h-12 rounded-xl border border-border ${item.swatchClassName}`} />
          <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-6 rounded-r-xl border-l-2 border-accent bg-secondary/30 py-3 px-4 text-sm italic leading-relaxed text-foreground/80">
      {children}
    </blockquote>
  );
}

function getBreakImage(images: WorkImage[], breakIndex: number): WorkImage | null {
  if (images.length === 0) return null;
  return images[(4 + breakIndex) % images.length];
}

interface CategoryPageProps {
  breadcrumbLabel: string;
  h1: string;
  subtitle: string;
  heroImg: string;
  heroAlt: string;
  categoryNoun: string;
  guideHeading: string;
  guideParagraphs: string[];
  customGuideBody?: ReactNode;
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
  categoryNoun,
  guideHeading,
  guideParagraphs,
  customGuideBody,
  galleryHeading,
  gallery,
  faqs,
  currentHref,
}: CategoryPageProps) {
  const stripImages = gallery.images.slice(0, 4);

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
      <section className="container-x mx-auto max-w-7xl pb-10 md:pb-20">
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

      {/* PHOTO STRIP — ასპირაციული, არა "დასრულებული პროექტის" პრეტენზია */}
      {stripImages.length > 0 && (
        <section className="pb-8 md:hidden">
          <p className="container-x mx-auto max-w-7xl text-base font-semibold mb-3">
            წარმოიდგინეთ თქვენი {categoryNoun}
          </p>
          <div className="container-x mx-auto max-w-7xl">
            <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
              {stripImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ადრეული inline CTA */}
      <section className="container-x mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-primary p-4 text-primary-foreground md:p-5">
          <div className="text-sm">
            <strong className="mb-0.5 block text-sm md:text-base font-semibold">
              უკვე გადაწყვეტილი გაქვთ?
            </strong>
            <span className="text-primary-foreground/70">გამოტოვეთ დანარჩენი — მოგვწერეთ სივრცის შესახებ.</span>
          </div>
          <Link
            to="/start"
            className="flex-shrink-0 whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            დაწყება
          </Link>
        </div>
      </section>

      {/* GUIDE / DESCRIPTION */}
      <section className="container-x mx-auto max-w-4xl pb-20 md:pb-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
          პრაქტიკული გზამკვლევი
        </p>
        <h2 className="text-2xl md:text-3xl mb-6">{guideHeading}</h2>
        <div className="text-muted-foreground leading-relaxed">
          {guideParagraphs.map((p, i) => {
            const showBreak = i % 2 === 1 && i < guideParagraphs.length - 1;
            const breakImg = showBreak ? getBreakImage(gallery.images, Math.floor(i / 2)) : null;
            return (
              <div key={i} className={i > 0 ? "mt-4" : undefined}>
                <p>{p}</p>
                {breakImg && (
                  <img
                    src={breakImg.src}
                    alt={breakImg.alt}
                    loading="lazy"
                    className="mt-4 aspect-video w-full rounded-xl object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
        {customGuideBody}
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
