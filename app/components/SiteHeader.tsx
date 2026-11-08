"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { L, useLang } from "./LanguageProvider";

const navLinks = [
  { href: "/", id: "Beranda", en: "Home" },
  { href: "/sejarah", id: "Pengertian", en: "Definition" },
  { href: "/jenis", id: "Jenis", en: "Types" },
  { href: "/cara-bikin", id: "Cara Bikin", en: "How to Make" },
  { href: "/kuis", id: "Kuis", en: "Quiz" },
  { href: "/tentang-kami", id: "Tentang Kami", en: "About Us" },
  { href: "/kontak", id: "Kontak", en: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title =
      lang === "id"
        ? "Batagor. | Website Edukasi Batagor"
        : "Batagor. | Batagor Educational Website";
  }, [lang, pathname]);

  return (
    <header className="site-header">
      <div className="logo">
        Batagor<span className="logo-dot">.</span>
      </div>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`} id="mainNav">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <L id={link.id} en={link.en} />
          </Link>
        ))}
      </nav>

      <div className="header-right">
        <button
          id="langToggle"
          className="lang-toggle"
          type="button"
          aria-label="Ganti Bahasa / Switch Language"
          onClick={() => setLang(lang === "id" ? "en" : "id")}
        >
          <span className={`lang-option ${lang === "id" ? "active" : ""}`}>
            ID
          </span>
          <span className="lang-sep">|</span>
          <span className={`lang-option ${lang === "en" ? "active" : ""}`}>
            EN
          </span>
        </button>
        <button
          id="hamburger"
          className="hamburger"
          type="button"
          aria-label="Buka menu"
          aria-controls="mainNav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
