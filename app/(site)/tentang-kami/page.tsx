import { L } from "../../components/LanguageProvider";

const team = [
  { nama: "Andrian", icon: "👨🏻‍💻", peran: "Mahasiswa Teknik Informatika" },
  { nama: "Diana", icon: "👩🏻‍💻", peran: "Mahasiswi Teknik Informatika" },
  { nama: "Ivan", icon: "👨🏻‍💻", peran: "Mahasiswa Teknik Informatika" },
  { nama: "Kenny", icon: "👨🏻‍💻", peran: "Mahasiswa Teknik Informatika" },
];

export default function TentangKami() {
  return (
    <section id="tentang-kami" className="page active">
      <div className="section-inner">
        <h2 className="page-title center-text">
          <L id="Tim di Balik Layar" en="The Team Behind the Screen" />
        </h2>
        <p className="team-intro">
          <L
            id="Proyek website edukasi Batagor ini dikembangkan oleh mahasiswa S1 Teknik Informatika Universitas Tarumanagara sebagai pemenuhan tugas UTS Pemrograman Web."
            en="This Batagor educational website project was developed by undergraduate Computer Science students of Tarumanagara University for a Web Programming midterm project."
          />
        </p>

        <div className="card-grid team-grid">
          {team.map((anggota) => (
            <article className="preview-card team-card" key={anggota.nama}>
              <div className="team-emoji" aria-hidden="true">
                {anggota.icon}
              </div>
              <h3>{anggota.nama}</h3>
              <p>{anggota.peran}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
