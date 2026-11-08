import Image from "next/image";
import { C, L } from "../../components/LanguageProvider";

const timeline = [
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

export default function Sejarah() {
  return (
    <section id="sejarah" className="page active">
      {/* Pita dekoratif pojok, murni hiasan */}
      <svg
        className="corner-ribbon"
        viewBox="0 0 260 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,0 L260,0 Q120,75 0,45 Z"
          fill="#F1E1C4"
          opacity="0.15"
        ></path>
        <path d="M0,0 L190,0 Q95,55 0,28 Z" fill="#C6874A" opacity="0.3"></path>
      </svg>

      {/* Blok 1: Tentang Batagor (foto kiri, teks kanan) */}
      <div className="sejarah-about-inner">
        <div className="about-media">
          <Image
            className="about-photo-main"
            src="/images/batagor4.jpeg"
            alt="Batagor Siap Saji"
            width={735}
            height={925}
            sizes="380px"
          />
          <Image
            className="about-photo-sauce"
            src="/images/sauss_kacang.jpeg"
            alt="Saus Kacang"
            width={736}
            height={736}
            sizes="180px"
          />
        </div>
        <div className="about-text">
          <h2 className="script-heading">
            <C k="aboutTitle" />
          </h2>
          <p>
            <C k="aboutIntro" />
          </p>
        </div>
      </div>

      {/* Blok 2: Sejarah Batagor (teks kiri, linimasa kanan) */}
      <div className="sejarah-history-inner">
        <div className="history-text">
          <h2 className="script-heading">
            <C k="historyTitle" />
          </h2>
          <p>
            <C k="historyIntro" />
          </p>
          <p>
            <L
              id="Ternyata versi goreng ini justru lebih gurih dan renyah dibanding versi rebusnya, sehingga cepat digemari dan mulai dijajakan berkeliling kota dengan gerobak dorong maupun sepeda."
              en="It turned out the fried version tasted even richer and crispier than the boiled original, so it quickly became popular and started being sold around the city from push carts and bicycles."
            />
          </p>
          <p>
            <L
              id="Dari sekadar jajanan kaki lima, kini Batagor telah menjadi salah satu camilan khas Indonesia yang paling dikenal, hadir dalam berbagai variasi, dan terus digemari lintas generasi."
              en="From a humble street snack, Batagor has grown into one of Indonesia's most recognized specialty snacks, now available in many variations and loved across generations."
            />
          </p>
        </div>

        <div className="history-timeline">
          <div className="timeline-badge">
            <div className="badge-circle" aria-hidden="true">
              🥟
            </div>
            <span className="badge-year">
              <L id="~ Akhir 1970-an" en="~ Late 1970s" />
            </span>
          </div>

          <div className="timeline-track">
            {timeline.map((node) => (
              <div className="timeline-node" key={node.year.en}>
                <div className="node-circle" aria-hidden="true">
                  {node.icon}
                </div>
                <div>
                  <span className="node-label">
                    <L {...node.year} />
                  </span>
                  <p className="node-desc">
                    <L {...node.desc} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
