"use client";

import Image from "next/image";
import { useRef } from "react";
import { L } from "../../components/LanguageProvider";
import { featuredVariant, variants } from "./data";

export default function Jenis() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
              src={featuredVariant.img}
              alt={featuredVariant.alt}
              width={featuredVariant.w}
              height={featuredVariant.h}
              sizes="(max-width: 768px) 100vw, 440px"
              priority
            />
          </div>
          <div className="jenis-top-text">
            <span className="jenis-top-badge">
              <L {...featuredVariant.badge} />
            </span>
            <h3>
              <L {...featuredVariant.title} />
            </h3>
            <p>
              <L {...featuredVariant.text} />
            </p>
          </div>
        </div>

        <div className="variant-header-row">
          <div>
            <h3 className="sub-title">
              <L id="Varian Lainnya" en="Other Variants" />
            </h3>
            <p className="scroll-hint">
              <L
                id="Geser ke samping untuk melihat varian lainnya."
                en="Swipe sideways to see more variants."
              />
            </p>
          </div>
          <div className="variant-nav-btns">
            <button
              type="button"
              className="variant-nav-btn"
              aria-label="Geser ke kiri"
              onClick={() => scroll("left")}
            >
              ←
            </button>
            <button
              type="button"
              className="variant-nav-btn"
              aria-label="Geser ke kanan"
              onClick={() => scroll("right")}
            >
              →
            </button>
          </div>
        </div>

        <div className="variant-scroll" ref={scrollRef}>
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
