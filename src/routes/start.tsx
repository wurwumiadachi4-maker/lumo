import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export const Route = createFileRoute("/start")({
  component: StartFunnel,
  head: () => ({
    meta: [
      { title: "პროექტის დაწყება — უფასო კონსულტაცია | LUMO" },
      {
        name: "description",
        content:
          "დაიწყეთ თქვენი სამზარეულოს, გარდერობის ან ინდივიდუალური ავეჯის პროექტი LUMO-სთან — მოგვიყევით 1 წუთში სივრცის შესახებ და მიიღეთ უფასო კონსულტაცია და ღირებულების შეფასება.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lumofurniture.ge/start" }],
  }),
});

/* ---------- Types ---------- */

type FurnitureType =
  | "kitchen"
  | "bedroom"
  | "wardrobe"
  | "office"
  | "living"
  | "kids"
  | "other";

type Size = "small" | "medium" | "large" | "unsure";
type Priority = "economy" | "balance" | "premium";
type ContactMethod = "whatsapp" | "call" | "callback";

interface FunnelData {
  furniture: FurnitureType[];
  size: Size | null;
  priority: Priority | null;
  contactMethod: ContactMethod | null;
  name: string;
  phone: string;
}

const initialData: FunnelData = {
  furniture: [],
  size: null,
  priority: null,
  contactMethod: null,
  name: "",
  phone: "",
};

/* ---------- Labels (Georgian) ---------- */

const furnitureLabels: Record<FurnitureType, string> = {
  kitchen: "სამზარეულო",
  bedroom: "საძინებელი",
  wardrobe: "გარდერობი",
  office: "საოფისე",
  living: "მისაღები",
  kids: "საბავშვო",
  other: "სხვა",
};

const sizeLabels: Record<Size, string> = {
  small: "მცირე (10მ²-მდე)",
  medium: "საშუალო (10–20მ²)",
  large: "დიდი (20მ²-ზე მეტი)",
  unsure: "არ ვიცი ზუსტად",
};

const priorityLabels: Record<Priority, string> = {
  economy: "ეკონომიური",
  balance: "ბალანსი (ფასი/ხარისხი)",
  premium: "პრემიუმი",
};

/* ---------- WhatsApp number ---------- */
const WHATSAPP_NUMBER = "995511547671";
const PHONE_NUMBER = "+995555025588";

/* ---------- Component ---------- */

function StartFunnel() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FunnelData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5; // 0..4 = questions/contact
  const progress = Math.round(((step + 1) / (totalSteps + 1)) * 100);

  const canProceed = (() => {
    switch (step) {
      case 0:
        return data.furniture.length > 0;
      case 1:
        return data.size !== null;
      case 2:
        return data.priority !== null;
      case 3:
        return data.contactMethod !== null;
      case 4:
        // contact details validation
        if (data.contactMethod === "callback") {
          return data.name.trim().length > 1 && /^[+\d\s\-()]{9,}$/.test(data.phone);
        }
        return true; // whatsapp/call goes via link
      default:
        return true;
    }
  })();

  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
  setStep((s) => Math.min(s + 1, totalSteps));
  scrollToTop();
  };

  const back = () => {
  setStep((s) => Math.max(s - 1, 0));
  scrollToTop();
  };

  /* ---------- Build WhatsApp message ---------- */
  const buildMessage = () => {
    const lines: string[] = ["გამარჯობა LUMO! მაინტერესებს პროექტი:"];
    if (data.furniture.length)
      lines.push(
        `• ავეჯი: ${data.furniture.map((f) => furnitureLabels[f]).join(", ")}`,
      );
    if (data.size) lines.push(`• ზომა: ${sizeLabels[data.size]}`);
    if (data.priority) lines.push(`• პრიორიტეტი: ${priorityLabels[data.priority]}`);
    if (data.name) lines.push(`• სახელი: ${data.name}`);
    return encodeURIComponent(lines.join("\n"));
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`;

  /* ---------- Submitted screen ---------- */
  if (submitted) {
    return (
      <div className="container-x mx-auto max-w-3xl py-16 md:py-24">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
            <Check className="h-7 w-7 text-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl mb-4">მადლობა, {data.name || "მეგობარო"}!</h1>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            თქვენი მოთხოვნა მივიღეთ. ჩვენი გუნდი დაგიკავშირდებათ 24 საათში — ჩვეულებრივ
            ბევრად უფრო ადრე.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition"
          >
            მთავარ გვერდზე დაბრუნება
          </a>
        </div>
      </div>
    );
  }

  /* ---------- Main funnel ---------- */
  return (
    <div className="container-x mx-auto max-w-3xl pt-8 md:pt-12 pb-16 md:pb-24">
      {/* Progress */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>ნაბიჯი {Math.min(step + 1, totalSteps + 1)} / {totalSteps + 1}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="min-h-[400px]">
        {step === 0 && (
          <StepFurniture
            value={data.furniture}
            onChange={(furniture) => setData({ ...data, furniture })}
          />
        )}
        {step === 1 && (
          <StepSize
            value={data.size}
            onChange={(size) => setData({ ...data, size })}
          />
        )}
        {step === 2 && (
          <StepPriority
            value={data.priority}
            onChange={(priority) => setData({ ...data, priority })}
          />
        )}
        {step === 3 && (
          <StepContactMethod
            value={data.contactMethod}
            onChange={(contactMethod) => setData({ ...data, contactMethod })}
          />
        )}
        {step === 4 && (
          <StepContactDetails
            data={data}
            onChange={setData}
            whatsappLink={whatsappLink}
            onSubmittedCallback={() => setSubmitted(true)}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between gap-4">
        <button
          onClick={back}
          disabled={step === 0}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-muted-foreground hover:text-foreground transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" />
          უკან
        </button>

        {step < 4 ? (
          <button
            onClick={next}
            disabled={!canProceed}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            შემდეგი
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

/* ---------- Step 1: Furniture type (multi-select cards) ---------- */

function StepFurniture({
  value,
  onChange,
}: {
  value: FurnitureType[];
  onChange: (v: FurnitureType[]) => void;
}) {
  const options: { id: FurnitureType; label: string; desc: string }[] = [
    { id: "kitchen", label: "სამზარეულო", desc: "სამზარეულოს დამზადება" },
    { id: "bedroom", label: "საძინებელი", desc: "საძინებლის ავეჯი" },
    { id: "wardrobe", label: "გარდერობი", desc: "გარდერობის დამზადება" },
    { id: "office", label: "საოფისე", desc: "ოფისის ავეჯი" },
    { id: "living", label: "მისაღები", desc: "მისაღები ოთახის ავეჯი" },
    { id: "kids", label: "საბავშვო", desc: "საბავშვო ოთახის ავეჯი" },
    { id: "other", label: "სხვა", desc: "სხვა ტიპის ავეჯი" },
  ];

  const toggle = (id: FurnitureType) => {
    if (value.includes(id)) onChange(value.filter((v) => v !== id));
    else onChange([...value, id]);
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl leading-tight mb-3">
        რა სახის ავეჯი გჭირდებათ?
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        შეგიძლიათ მონიშნოთ რამდენიმე ვარიანტი
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => {
          const selected = value.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={`p-5 md:p-6 rounded-xl border-2 transition-all text-left ${
                selected
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-foreground/30"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-base md:text-lg font-medium">{opt.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{opt.desc}</div>
                </div>
                {selected && (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Step 2: Size ---------- */

function StepSize({
  value,
  onChange,
}: {
  value: Size | null;
  onChange: (v: Size) => void;
}) {
  const options: { id: Size; label: string; desc: string }[] = [
    { id: "small", label: "მცირე", desc: "10მ²-მდე" },
    { id: "medium", label: "საშუალო", desc: "10–20მ²" },
    { id: "large", label: "დიდი", desc: "20მ²-ზე მეტი" },
    { id: "unsure", label: "არ ვიცი ზუსტად", desc: "ჩვენ გავზომავთ ადგილზე" },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl leading-tight mb-3">
        როგორი ფართობია?
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        დაგვეხმარება პროექტის მასშტაბის შეფასებაში
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => {
          const selected = value === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`p-5 md:p-6 rounded-xl border-2 transition-all text-left ${
                selected
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-foreground/30"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-base md:text-lg font-medium">{opt.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{opt.desc}</div>
                </div>
                {selected && (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Step 3: Priority ---------- */

function StepPriority({
  value,
  onChange,
}: {
  value: Priority | null;
  onChange: (v: Priority) => void;
}) {
  const options: { id: Priority; label: string; desc: string }[] = [
    {
      id: "economy",
      label: "ეკონომიური",
      desc: "ხარისხიანი ავეჯი ხელმისაწვდომ ფასად",
    },
    {
      id: "balance",
      label: "ბალანსი",
      desc: "ოპტიმალური ფასი/ხარისხის თანაფარდობით",
    },
    {
      id: "premium",
      label: "პრემიუმი",
      desc: "უმაღლესი ხარისხის მასალები და დეტალები",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl leading-tight mb-3">
        რა არის თქვენი პრიორიტეტი?
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        დაგვეხმარება შესაბამისი მასალების და გადაწყვეტების შერჩევაში
      </p>
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => {
          const selected = value === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`p-5 md:p-6 rounded-xl border-2 transition-all text-left ${
                selected
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-foreground/30"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-base md:text-lg font-medium">{opt.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{opt.desc}</div>
                </div>
                {selected && (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Step 4: Contact method choice ---------- */

function StepContactMethod({
  value,
  onChange,
}: {
  value: ContactMethod | null;
  onChange: (v: ContactMethod) => void;
}) {
  const options: { id: ContactMethod; label: string; desc: string; icon: any; highlight?: boolean }[] = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      desc: "მყისიერი მესიჯი — ყველაზე სწრაფი",
      icon: MessageCircle,
      highlight: true,
    },
    {
      id: "call",
      label: "დარეკვა",
      desc: "მე დავრეკავ ახლავე",
      icon: Phone,
    },
    {
      id: "callback",
      label: "დამირეკეთ",
      desc: "შეიყვანე ნომერი — ჩვენ დაგირეკავთ",
      icon: PhoneCall,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl leading-tight mb-3">
        როგორ დაგიკავშირდეთ?
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        აირჩიეთ თქვენთვის ყველაზე მოსახერხებელი არხი
      </p>
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => {
          const selected = value === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`p-5 md:p-6 rounded-xl border-2 transition-all text-left ${
                selected
                  ? "border-accent bg-accent/5"
                  : opt.highlight
                    ? "border-accent/40 hover:border-accent"
                    : "border-border hover:border-foreground/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    selected ? "bg-accent" : "bg-secondary"
                  }`}
                >
                  <opt.icon
                    className={`h-5 w-5 ${selected ? "text-accent-foreground" : "text-foreground/70"}`}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-base md:text-lg font-medium">{opt.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{opt.desc}</div>
                </div>
                {selected && (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Step 5: Contact details / final action ---------- */

function StepContactDetails({
  data,
  onChange,
  whatsappLink,
  onSubmittedCallback,
}: {
  data: FunnelData;
  onChange: (d: FunnelData) => void;
  whatsappLink: string;
  onSubmittedCallback: () => void;
}) {
  const method = data.contactMethod;

  if (method === "whatsapp") {
    return (
      <div>
        <h2 className="text-3xl md:text-4xl leading-tight mb-3">
          მზად ვართ WhatsApp-ისთვის
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          ღილაკზე დაჭერით გადახვალთ WhatsApp-ში — ჩვენ უკვე გვექნება თქვენი არჩევანი
        </p>
        <div className="rounded-xl border border-border bg-secondary/30 p-5 mb-6">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            თქვენი არჩევანი
          </div>
          <SummaryBlock data={data} />
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full text-base font-medium hover:opacity-90 transition"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp-ში გადასვლა
        </a>
        <p className="text-xs text-center text-muted-foreground mt-4">
          ჩვენი გუნდი დაგიკავშირდებათ 24 საათში
        </p>
      </div>
    );
  }

  if (method === "call") {
    return (
      <div>
        <h2 className="text-3xl md:text-4xl leading-tight mb-3">
          დაგვირეკეთ ნებისმიერ დროს
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          ჩვენი გუნდი მზადაა თქვენი კონსულტაციისთვის
        </p>
        <div className="rounded-xl border border-border bg-secondary/30 p-5 mb-6">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            თქვენი არჩევანი
          </div>
          <SummaryBlock data={data} />
        </div>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-base font-medium hover:opacity-90 transition"
        >
          <Phone className="h-5 w-5" />
          {PHONE_NUMBER}
        </a>
        <p className="text-xs text-center text-muted-foreground mt-4">
          სამუშაო საათები: 10:00 – 19:00
        </p>
      </div>
    );
  }

  // callback
  return (
    <div>
      <h2 className="text-3xl md:text-4xl leading-tight mb-3">
        დატოვეთ კონტაქტი
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        ჩვენ დაგიკავშირდებით 24 საათში — ჩვეულებრივ ბევრად უფრო ადრე
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">სახელი</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            placeholder="თქვენი სახელი"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">ტელეფონის ნომერი</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            placeholder="+995 5XX XX XX XX"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition"
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-secondary/30 p-5 my-6">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          თქვენი არჩევანი
        </div>
        <SummaryBlock data={data} />
      </div>

      <button
        onClick={() => {
          // TODO: Replace with real submission (Formspree, your backend, etc.)
          // For now we just acknowledge.
          if (data.name.trim().length > 1 && /^[+\d\s\-()]{9,}$/.test(data.phone)) {
            // Optional: send a webhook here
            fetch("/api/lead", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            }).catch(() => {
              // ignore — backend may not exist yet
            });
            onSubmittedCallback();
          }
        }}
        disabled={
          !(data.name.trim().length > 1 && /^[+\d\s\-()]{9,}$/.test(data.phone))
        }
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-base font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <PhoneCall className="h-5 w-5" />
        უფასო კონსულტაციის მიღება
      </button>
      <p className="text-xs text-center text-muted-foreground mt-4">
        თქვენი მონაცემები არ გადაეცემა მესამე მხარეს
      </p>
    </div>
  );
}

/* ---------- Summary block ---------- */

function SummaryBlock({ data }: { data: FunnelData }) {
  const items: { label: string; value: string }[] = [];
  if (data.furniture.length)
    items.push({
      label: "ავეჯი",
      value: data.furniture.map((f) => furnitureLabels[f]).join(", "),
    });
  if (data.size) items.push({ label: "ზომა", value: sizeLabels[data.size] });
  if (data.priority)
    items.push({ label: "პრიორიტეტი", value: priorityLabels[data.priority] });

  return (
    <div className="space-y-2 text-sm">
      {items.map((i) => (
        <div key={i.label} className="flex flex-wrap gap-2">
          <span className="text-muted-foreground">{i.label}:</span>
          <span className="text-foreground font-medium">{i.value}</span>
        </div>
      ))}
    </div>
  );
}