export type Bi = { id: string; en: string };

export type ContentKey =
  | "homeTitle"
  | "homeIntro"
  | "aboutTitle"
  | "aboutIntro"
  | "historyTitle"
  | "historyIntro"
  | "HistoryAdd";

export const defaultContent: Record<ContentKey, Bi> = {
  homeTitle: {
    id: "Selamat Datang di Batagor Edu!",
    en: "Welcome to Batagor Edu!",
  },
  homeIntro: {
    id: "Jelajahi pengertian, sejarah, jenis, hingga cara membuat Batagor, jajanan gurih khas Bandung yang kini digemari di banyak kota.",
    en: "Explore the meaning, history, types, and how to make Batagor, Bandung's savory snack now loved in many cities.",
  },
  aboutTitle: {
    id: "Tentang Batagor",
    en: "About Batagor",
  },
  aboutIntro: {
    id: "Batagor adalah singkatan dari Bakso Tahu Goreng. Camilan ini terbuat dari tahu yang diisi adonan ikan tenggiri, digoreng hingga garing, lalu disajikan bersama saus kacang kental, kecap manis, dan perasan jeruk limau.",
    en: "Batagor stands for Bakso Tahu Goreng, or Fried Tofu Fish Ball. It is made from tofu filled with mackerel fish paste, deep-fried until crispy, then served with thick peanut sauce, sweet soy sauce, and a squeeze of lime.",
  },
  historyTitle: {
    id: "Sejarah Batagor",
    en: "Batagor History",
  },
  historyIntro: {
    id: "Batagor pertama kali muncul di Bandung, Jawa Barat, sekitar akhir tahun 1970-an. Camilan ini tercipta dari kreativitas pedagang bakso tahu yang menggoreng dagangan yang tidak habis terjual agar bisa disajikan kembali keesokan harinya.",
    en: "Batagor first appeared in Bandung, West Java, around the late 1970s. It was created by tofu fish ball vendors who fried their unsold stock so it could be served again the next day.",
  },
  HistoryAdd: {
    id: "Tambahan Sejarah",
    en: "Additional History",
  },
};

// Re-export data teks spesifik dari masing-masing folder modul/halaman
export * from "../(site)/kuis/data";
export * from "../(site)/cara-bikin/data";
export * from "../(site)/jenis/data";
export * from "../(site)/sejarah/data";
export * from "../(site)/kontak/data";
export * from "../(site)/beranda/data";
