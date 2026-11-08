import Image from "next/image";
import { L } from "../../components/LanguageProvider";
import type { Bi } from "../../lib/data";

interface Variant {
  img: string;
  w: number;
  h: number;
  alt: string;
  title: Bi;
  text: Bi;
}

const variants: Variant[] = [
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
];

export default function Jenis() {
  return (
    <section id="jenis" className="page active">
      <div className="section-inner">
        <h2 className="page-title">
          <L id="Jenis-Jenis Batagor" en="Types of Batagor" />
        </h2>

        <div className="jenis-top">
          <div className="jenis-top-media">
            <Image
              className="jenis-top-photo"
              src="/images/original.jpeg"
              alt="Batagor Goreng Klasik"
              width={680}
              height={964}
              sizes="240px"
            />
          </div>
          <div className="jenis-top-text">
            <h3>
              <L id="Batagor Goreng (Original)" en="Fried Batagor (Original)" />
            </h3>
            <p>
              <L
                id="Versi paling klasik dan paling banyak dicari. Tahu, kulit pangsit, dan siomay ikan digoreng kering hingga renyah keemasan, lalu disiram saus kacang kental dan kecap manis. Biasanya disantap dengan tambahan perasan jeruk limau dan sambal."
                en="The most classic and popular version. Tofu, wonton skin, and fish dumplings are deep-fried until golden and crispy, then topped with thick peanut sauce and sweet soy sauce, usually finished with a squeeze of lime and chili sauce."
              />
            </p>
          </div>
        </div>

        <h3 className="sub-title">
          <L id="Varian Lainnya" en="Other Variants" />
        </h3>
        <p className="scroll-hint">
          <L
            id="Geser ke samping untuk melihat varian lainnya."
            en="Swipe sideways to see more variants."
          />
        </p>

        <div className="variant-scroll">
          {variants.map((v) => (
            <div className="variant-card" key={v.alt}>
              <Image
                className="thumb-sm"
                src={v.img}
                alt={v.alt}
                width={v.w}
                height={v.h}
                sizes="260px"
              />
              <h4>
                <L {...v.title} />
              </h4>
              <p>
                <L {...v.text} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
