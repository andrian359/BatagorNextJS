"use client";

import { L, useLang } from "../../components/LanguageProvider";
import { teamMembers } from "./data";

export default function Kontak() {
  const { lang } = useLang();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          {/* Kolom kiri: Tim Pengembang */}
          <div className="contact-team">
            <h3 className="contact-heading">
              <L id="Tim Pengembang" en="Development Team" />
            </h3>
            <div className="contact-team-list">
              {teamMembers.map((member) => (
                <div key={member.nama} className="contact-team-card">
                  <div className="contact-team-avatar" aria-hidden="true">
                    {member.icon}
                  </div>
                  <div className="contact-team-info">
                    <h4>{member.nama}</h4>
                    <p>
                      <L {...member.peran} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
