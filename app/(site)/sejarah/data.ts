import type { Bi } from "../../lib/data";

export interface TimelineItem {
  icon: string;
  year: Bi;
  desc: Bi;
}

export const timeline: TimelineItem[] = [
  {
    icon: "🛵",
    year: { id: "1980-an", en: "1980s" },
    desc: {
      id: "Menyebar dari gerobak ke gerobak di seluruh Bandung.",
      en: "Spread from cart to cart across Bandung.",
    },
  },
  {
    icon: "🏙️",
    year: { id: "1990-an", en: "1990s" },
    desc: {
      id: "Mulai dijual di berbagai kota besar di Indonesia.",
      en: "Started being sold in major cities across Indonesia.",
    },
  },
  {
    icon: "✨",
    year: { id: "2000-an", en: "2000s" },
    desc: {
      id: "Menjadi jajanan favorit nasional dengan banyak variasi baru.",
      en: "Became a favorite national snack with many new variations.",
    },
  },
  {
    icon: "🌏",
    year: { id: "Kini", en: "Today" },
    desc: {
      id: "Batagor mendunia lewat restoran dan konten kuliner daring.",
      en: "Batagor goes global through restaurants and online food content.",
    },
  },
];

export const historyNarrative = [
  {
    id: "Ternyata versi goreng ini justru lebih gurih dan renyah dibanding versi rebusnya, sehingga cepat digemari dan mulai dijajakan berkeliling kota dengan gerobak dorong maupun sepeda.",
    en: "It turned out the fried version tasted even richer and crispier than the boiled original, so it quickly became popular and started being sold around the city from push carts and bicycles.",
  },
  {
    id: "Dari sekadar jajanan kaki lima, kini Batagor telah menjadi salah satu camilan khas Indonesia yang paling dikenal, hadir dalam berbagai variasi, dan terus digemari lintas generasi.",
    en: "From a humble street snack, Batagor has grown into one of Indonesia's most recognized specialty snacks, now available in many variations and loved across generations.",
  },
  {
    id: "Di balik kelezatannya, Batagor juga mencerminkan akulturasi kuliner Tionghoa dan Sunda di Bandung. Teknik pembuatan bakso tahu dan siomay khas Tionghoa berpadu harmonis dengan bumbu kacang serta kecap manis yang akrab di lidah masyarakat lokal.",
    en: "Behind its delicious taste, Batagor also reflects the culinary acculturation of Chinese and Sundanese influences in Bandung. Traditional Chinese fish paste and tofu dumpling techniques blend harmoniously with peanut sauce and sweet soy sauce beloved by locals.",
  },
];
