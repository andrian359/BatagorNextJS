import type { Bi } from "../../lib/data";

export interface HeroPlate {
  src: string;
  alt: string;
}

export interface PreviewItem {
  href: string;
  img: string;
  size: number;
  alt: string;
  title: Bi;
  text: Bi;
  link: Bi;
}

export const heroPlates: HeroPlate[] = [
  { src: "/images/piring-batagor.png", alt: "Sepiring Batagor Khas Bandung" },
  { src: "/images/piring-batagor2.jpeg", alt: "Batagor Saus Kacang & Kerupuk" },
  { src: "/images/piring-batagor3.jpeg", alt: "Batagor Kuah Hangat" },
  { src: "/images/piring-batagor4.jpeg", alt: "Batagor Alas Daun Pisang" },
];

export const previews: PreviewItem[] = [
  {
    href: "/sejarah",
    img: "/images/batagor3.jpeg",
    size: 736,
    alt: "Ilustrasi sejarah Batagor di Bandung",
    title: { id: "Pengertian & Sejarah", en: "Definition & History" },
    text: {
      id: "Cari tahu arti nama Batagor dan bagaimana camilan legendaris ini pertama kali muncul di Bandung.",
      en: "Find out what the name Batagor means and how this legendary snack first appeared in Bandung.",
    },
    link: { id: "Baca selengkapnya", en: "Read more" },
  },
  {
    href: "/jenis",
    img: "/images/batagor.jpeg",
    size: 736,
    alt: "Ragam Batagor",
    title: { id: "Jenis Batagor", en: "Types of Batagor" },
    text: {
      id: "Dari yang digoreng garing sampai yang berkuah hangat, kenali berbagai variasi Batagor di sini.",
      en: "From crispy fried to warm and soupy, get to know Batagor's many variations here.",
    },
    link: { id: "Lihat jenisnya", en: "See the types" },
  },
  {
    href: "/cara-bikin",
    img: "/images/batagor2.jpeg",
    size: 736,
    alt: "Resep Batagor",
    title: { id: "Cara Bikin", en: "How to Make" },
    text: {
      id: "Ingin membuat Batagor sendiri di rumah? Ikuti tahapan resep yang dibagi langkah demi langkah.",
      en: "Want to make your own Batagor at home? Follow the recipe broken down step by step.",
    },
    link: { id: "Mulai memasak", en: "Start cooking" },
  },
];
