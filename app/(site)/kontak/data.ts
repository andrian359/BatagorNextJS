import type { Bi } from "../../lib/data";

export interface TeamMember {
  nama: string;
  icon: string;
  peran: Bi;
}

export const teamMembers: TeamMember[] = [
  {
    nama: "Andrian",
    icon: "👨🏻‍💻",
    peran: {
      id: "Mahasiswa Teknik Informatika",
      en: "Computer Science Student",
    },
  },
  {
    nama: "Diana",
    icon: "👩🏻‍💻",
    peran: {
      id: "Mahasiswi Teknik Informatika",
      en: "Computer Science Student",
    },
  },
  {
    nama: "Ivan",
    icon: "👨🏻‍💻",
    peran: {
      id: "Mahasiswa Teknik Informatika",
      en: "Computer Science Student",
    },
  },
  {
    nama: "Kenny",
    icon: "👨🏻‍💻",
    peran: {
      id: "Mahasiswa Teknik Informatika",
      en: "Computer Science Student",
    },
  },
];
