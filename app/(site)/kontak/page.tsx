"use client";

import { L, useLang } from "../../components/LanguageProvider";

const quickLinks = [
  {
    href: "https://wa.me/6281234567890?text=Halo%20tim%20Batagor!",
    icon: "💬",
    name: "WhatsApp",
    info: "Chat dengan admin",
  },
  {
    href: "https://instagram.com/batagor.edu",
    icon: "📸",
    name: "Instagram",
    info: "@batagor.edu",
  },
  {
    href: "mailto:halo@batagor-edu.id",
    icon: "✉️",
    name: "Email",
    info: "halo@batagor-edu.id",
  },
];

export default function Kontak() {
  const { lang } = useLang();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // cegah halaman refresh
    alert(
      lang === "id"
        ? "Terima kasih! Kritik dan saran kamu berhasil dikirim."
        : "Thank you! Your feedback has been sent.",
    );
  };

  return (
    <section id="kontak" className="page active">
      <div className="section-inner contact-inner">
        <h2 className="page-title">
          <L id="Hubungi Kami" en="Contact Us" />
        </h2>
        <p className="contact-intro">
          <L
            id="Punya pertanyaan, kritik, atau saran untuk pengembangan website ini? Silakan hubungi kami!"
            en="Have questions, feedback, or suggestions for this website? Please reach out to us!"
          />
        </p>

        <div className="contact-grid">
          {/* Kolom kiri: jalur cepat */}
          <div className="contact-links">
            <h3 className="contact-heading">
              <L id="Jalur Cepat" en="Quick Links" />
            </h3>
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="preview-card contact-link card"
              >
                <div className="contact-link-icon" aria-hidden="true">
                  {link.icon}
                </div>
                <div>
                  <h4>{link.name}</h4>
                  <p>{link.info}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Kolom kanan: form kritik & saran */}
          <div className="contact-form-box">
            <h3 className="contact-heading">
              <L id="Kritik & Saran" en="Feedback & Suggestions" />
            </h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nama">
                  <L id="Nama Anda" en="Your Name" />
                </label>
                <input
                  id="nama"
                  type="text"
                  className="form-control"
                  placeholder="Masukkan nama..."
                  required
                />
              </div>
              <div>
                <label htmlFor="pesan">
                  <L id="Tulis Kritik & Saran" en="Write Feedback" />
                </label>
                <textarea
                  id="pesan"
                  rows={5}
                  className="form-control"
                  placeholder="Ketik pesan Anda di sini..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <L id="Kirim Pesan" en="Send Message" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
