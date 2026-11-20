import type { Bi } from "../../lib/data";

export interface QuizQuestion {
  question: Bi;
  options: Bi[];
  answer: number;
}

export const defaultQuestions: QuizQuestion[] = [
  {
    question: {
      id: "Apa kepanjangan dari Batagor?",
      en: "What does Batagor stand for?",
    },
    options: [
      {
        id: "Bakso Tahu Goreng",
        en: "Fried Tofu Fish Balls",
      },
      {
        id: "Bakwan Tahu Goreng",
        en: "Fried Tofu Fritters",
      },
      {
        id: "Bakar Tahu Goreng",
        en: "Grilled Fried Tofu",
      },
      {
        id: "Baso Tahu Gurih",
        en: "Savory Tofu Meatballs",
      },
    ],
    answer: 0,
  },
  {
    question: {
      id: "Batagor berasal dari kota mana?",
      en: "Which city did Batagor originate in?",
    },
    options: [
      {
        id: "Bandung",
        en: "Bandung",
      },
      {
        id: "Surabaya",
        en: "Surabaya",
      },
      {
        id: "Yogyakarta",
        en: "Yogyakarta",
      },
      {
        id: "Medan",
        en: "Medan",
      },
    ],
    answer: 0,
  },
  {
    question: {
      id: "Ikan apa yang umum digunakan untuk adonan Batagor klasik?",
      en: "Which fish is commonly used in classic Batagor filling?",
    },
    options: [
      {
        id: "Ikan tuna",
        en: "Tuna",
      },
      {
        id: "Ikan tenggiri",
        en: "Mackerel",
      },
      {
        id: "Ikan lele",
        en: "Catfish",
      },
      {
        id: "Ikan bandeng",
        en: "Milkfish",
      },
    ],
    answer: 1,
  },
  {
    question: {
      id: "Saus apa yang biasanya disajikan bersama Batagor?",
      en: "Which sauce is usually served with Batagor?",
    },
    options: [
      {
        id: "Saus tomat",
        en: "Tomato sauce",
      },
      {
        id: "Saus keju",
        en: "Cheese sauce",
      },
      {
        id: "Saus kacang",
        en: "Peanut sauce",
      },
      {
        id: "Saus kari",
        en: "Curry sauce",
      },
    ],
    answer: 2,
  },
  {
    question: {
      id: "Sekitar kapan Batagor mulai muncul di Bandung?",
      en: "Around when did Batagor first appear in Bandung?",
    },
    options: [
      {
        id: "Akhir 1960-an",
        en: "Late 1960s",
      },
      {
        id: "Akhir 1970-an",
        en: "Late 1970s",
      },
      {
        id: "Akhir 1980-an",
        en: "Late 1980s",
      },
      {
        id: "Akhir 1990-an",
        en: "Late 1990s",
      },
    ],
    answer: 1,
  },
];
