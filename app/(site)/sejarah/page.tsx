import Image from "next/image";
import { C, L } from "../../components/LanguageProvider";
import { historyNarrative, timeline } from "./data";

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
          {historyNarrative.map((item, idx) => (
            <p key={idx}>
              <L {...item} />
            </p>
          ))}
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
