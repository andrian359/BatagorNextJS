import Image from "next/image";
import Link from "next/link";
import { C, L } from "../components/LanguageProvider";

const previews = [
  {
    href: "/sejarah",
    img: "/images/batagor3.jpeg",
    size: 736,
    alt: "Sejarah Batagor",
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

export default function Beranda() {
  return (
    <section id="beranda" className="page active">
      <div className="hero">
        <div className="hero-inner">
          <Image
            className="hero-ornament"
            src="/images/ornamen.svg"
            alt=""
            aria-hidden="true"
            width={600}
            height={80}
            priority
          />
          <h1>
            <C k="homeTitle" />
          </h1>
          <p>
            <C k="homeIntro" />
          </p>
          <Link href="/sejarah" className="btn btn-primary">
            <L id="Pelajari Pengertiannya" en="Learn the Definition" />
          </Link>
        </div>
      </div>

      <div className="section-inner">
        <div className="card-grid">
          {previews.map((p) => (
            <Link key={p.href} href={p.href} className="preview-card card">
              <Image
                className="thumb"
                src={p.img}
                alt={p.alt}
                width={p.size}
                height={p.size}
                sizes="(min-width: 780px) 340px, 100vw"
              />
              <h3>
                <L {...p.title} />
              </h3>
              <p>
                <L {...p.text} />
              </p>
              <span className="card-link">
                <L {...p.link} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
