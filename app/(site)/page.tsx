"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { C, L } from "../components/LanguageProvider";
import { heroPlates, previews } from "./beranda/data";

export default function Beranda() {
  const [plateIndex, setPlateIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlateIndex((prev) => (prev + 1) % heroPlates.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="beranda" className="page active">
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <Image
              className="hero-ornament"
              src="/images/ornamen.svg"
              alt=""
              aria-hidden="true"
              width={480}
              height={64}
              priority
            />
            <h1>
              <C k="homeTitle" />
            </h1>
            <p>
              <C k="homeIntro" />
            </p>
          </div>
          <div className="hero-media">
            <div className="hero-plate-wrap">
              {heroPlates.map((plate, i) => (
                <Image
                  key={plate.src}
                  className={`hero-plate ${i === plateIndex ? "active" : ""}`}
                  src={plate.src}
                  alt={plate.alt}
                  width={480}
                  height={470}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
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