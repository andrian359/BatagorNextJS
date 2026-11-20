import type { Bi } from "../../lib/data";

export interface Variant {
  img: string;
  w: number;
  h: number;
  alt: string;
  title: Bi;
  text: Bi;
}

export interface FeaturedVariant {
  badge: Bi;
  title: Bi;
  text: Bi;
  img: string;
  w: number;
  h: number;
  alt: string;
}

export const featuredVariant: FeaturedVariant = {
  badge: { id: "Varian Utama", en: "Main Variant" },
  title: { id: "Batagor Goreng (Original)", en: "Fried Batagor (Original)" },
  text: {
    id: "Versi paling klasik dan paling banyak dicari. Tahu, kulit pangsit, dan siomay ikan digoreng kering hingga renyah keemasan, lalu disiram saus kacang kental dan kecap manis. Biasanya disantap dengan tambahan perasan jeruk limau dan sambal.",
    en: "The most classic and popular version. Tofu, wonton skin, and fish dumplings are deep-fried until golden and crispy, then topped with thick peanut sauce and sweet soy sauce, usually finished with a squeeze of lime and chili sauce.",
  },
  img: "/images/batagor-original.jpeg",
  w: 520,
  h: 367,
  alt: "Batagor Goreng Klasik",
};

export const variants: Variant[] = [
  {
    img: "/images/kuah.jpeg",
    w: 736,
    h: 736,
    alt: "Batagor Kuah",
    title: { id: "Batagor Kuah", en: "Batagor Kuah (Soupy)" },
    text: {
      id: "Disajikan dalam kuah kaldu hangat berbumbu, mirip mi kocok. Cocok dinikmati saat cuaca dingin.",
      en: "Served in a warm, seasoned savory broth, similar to mi kocok. Perfect for cold weather.",
    },
  },
  {
    img: "/images/bakar.jpeg",
    w: 459,
    h: 459,
    alt: "Batagor Bakar",
    title: { id: "Batagor Bakar", en: "Grilled Batagor" },
    text: {
      id: "Alternatif yang lebih rendah minyak, dipanggang di atas bara hingga sedikit gosong dan beraroma smoky.",
      en: "A lower-oil alternative, grilled over charcoal until slightly charred with a smoky aroma.",
    },
  },
  {
    img: "/images/puyuh.jpeg",
    w: 648,
    h: 486,
    alt: "Batagor Telur Puyuh",
    title: { id: "Batagor Isi Telur Puyuh", en: "Batagor with Quail Egg" },
    text: {
      id: "Diberi tambahan telur puyuh di dalam adonan untuk tekstur dan rasa yang lebih kaya.",
      en: "Filled with an added quail egg for a richer texture and flavor.",
    },
  },
  {
    img: "/images/kering_pedas.jpeg",
    w: 960,
    h: 739,
    alt: "Batagor Kering Pedas",
    title: { id: "Batagor Kering Pedas", en: "Spicy Dry Batagor" },
    text: {
      id: "Setelah digoreng, dilumuri bubuk cabai kering ala jajanan kekinian yang pedas dan gurih.",
      en: "After frying, coated with dry chili powder for a spicy, savory, modern snack twist.",
    },
  },
  {
    img: "/images/kuah_kari.jpeg",
    w: 680,
    h: 780,
    alt: "Batagor Kuah Kari",
    title: { id: "Batagor Kuah Kari", en: "Curry Batagor" },
    text: {
      id: "Variasi kuah dengan tambahan bumbu kari dan santan, memberi rasa gurih yang lebih kaya rempah.",
      en: "A soup variation with added curry spices and coconut milk, giving a richer, more fragrant savory flavor.",
    },
  },
  {
    img: "/images/mini.jpeg",
    w: 388,
    h: 388,
    alt: "Batagor Mini",
    title: { id: "Batagor Mini", en: "Mini Batagor" },
    text: {
      id: "Dibuat dalam ukuran kecil seperti cocktail, cocok sebagai camilan pesta atau teman arisan.",
      en: "Made in small, bite-sized portions like cocktail snacks, perfect for parties or casual gatherings.",
    },
  },
  {
    img: "/images/wawaw.webp",
    w: 388,
    h: 388,
    alt: "Batagor Ujian",
    title: { id: "Batagor Ujian", en: "Test Batagor" },
    text: {
      id: "Dibuat dalam ukuran kecil seperti cocktail, cocok sebagai camilan pesta atau teman arisan.",
      en: "Made in small, bite-sized portions like cocktail snacks, perfect for parties or casual gatherings.",
    },
  },
];
