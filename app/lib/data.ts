export type Bi = { id: string; en: string };

export interface QuizQuestion {
  question: Bi;
  options: Bi[];
  answer: number;
}

export interface RecipeStep {
  title: Bi;
  short: Bi;
  detail: Bi;
}

export interface Recipe {
  title: Bi;
  steps: RecipeStep[];
}

export type ContentKey =
  | "homeTitle"
  | "homeIntro"
  | "aboutTitle"
  | "aboutIntro"
  | "historyTitle"
  | "historyIntro";

export type RecipeKey = "tenggiri" | "ayam" | "saus-kacang";

export const defaultQuestions: QuizQuestion[] = [
  {
    "question": {
      "id": "Apa kepanjangan dari Batagor?",
      "en": "What does Batagor stand for?"
    },
    "options": [
      {
        "id": "Bakso Tahu Goreng",
        "en": "Fried Tofu Fish Balls"
      },
      {
        "id": "Bakwan Tahu Goreng",
        "en": "Fried Tofu Fritters"
      },
      {
        "id": "Bakar Tahu Goreng",
        "en": "Grilled Fried Tofu"
      },
      {
        "id": "Baso Tahu Gurih",
        "en": "Savory Tofu Meatballs"
      }
    ],
    "answer": 0
  },
  {
    "question": {
      "id": "Batagor berasal dari kota mana?",
      "en": "Which city did Batagor originate in?"
    },
    "options": [
      {
        "id": "Bandung",
        "en": "Bandung"
      },
      {
        "id": "Surabaya",
        "en": "Surabaya"
      },
      {
        "id": "Yogyakarta",
        "en": "Yogyakarta"
      },
      {
        "id": "Medan",
        "en": "Medan"
      }
    ],
    "answer": 0
  },
  {
    "question": {
      "id": "Ikan apa yang umum digunakan untuk adonan Batagor klasik?",
      "en": "Which fish is commonly used in classic Batagor filling?"
    },
    "options": [
      {
        "id": "Ikan tuna",
        "en": "Tuna"
      },
      {
        "id": "Ikan tenggiri",
        "en": "Mackerel"
      },
      {
        "id": "Ikan lele",
        "en": "Catfish"
      },
      {
        "id": "Ikan bandeng",
        "en": "Milkfish"
      }
    ],
    "answer": 1
  },
  {
    "question": {
      "id": "Saus apa yang biasanya disajikan bersama Batagor?",
      "en": "Which sauce is usually served with Batagor?"
    },
    "options": [
      {
        "id": "Saus tomat",
        "en": "Tomato sauce"
      },
      {
        "id": "Saus keju",
        "en": "Cheese sauce"
      },
      {
        "id": "Saus kacang",
        "en": "Peanut sauce"
      },
      {
        "id": "Saus kari",
        "en": "Curry sauce"
      }
    ],
    "answer": 2
  },
  {
    "question": {
      "id": "Sekitar kapan Batagor mulai muncul di Bandung?",
      "en": "Around when did Batagor first appear in Bandung?"
    },
    "options": [
      {
        "id": "Akhir 1960-an",
        "en": "Late 1960s"
      },
      {
        "id": "Akhir 1970-an",
        "en": "Late 1970s"
      },
      {
        "id": "Akhir 1980-an",
        "en": "Late 1980s"
      },
      {
        "id": "Akhir 1990-an",
        "en": "Late 1990s"
      }
    ],
    "answer": 1
  }
];

export const defaultContent: Record<ContentKey, Bi> = {
  "homeTitle": {
    "id": "Selamat Datang di Dunia Batagor!",
    "en": "Welcome to the World of Batagor!"
  },
  "homeIntro": {
    "id": "Jelajahi pengertian, sejarah, jenis, hingga cara membuat Batagor, jajanan gurih khas Bandung yang kini digemari di banyak kota.",
    "en": "Explore the meaning, history, types, and how to make Batagor, Bandung's savory snack now loved in many cities."
  },
  "aboutTitle": {
    "id": "Tentang Batagor",
    "en": "About Batagor"
  },
  "aboutIntro": {
    "id": "Batagor adalah singkatan dari Bakso Tahu Goreng. Camilan ini terbuat dari tahu yang diisi adonan ikan tenggiri, digoreng hingga garing, lalu disajikan bersama saus kacang kental, kecap manis, dan perasan jeruk limau.",
    "en": "Batagor stands for Bakso Tahu Goreng, or Fried Tofu Fish Ball. It is made from tofu filled with mackerel fish paste, deep-fried until crispy, then served with thick peanut sauce, sweet soy sauce, and a squeeze of lime."
  },
  "historyTitle": {
    "id": "Sejarah Batagor",
    "en": "Batagor History"
  },
  "historyIntro": {
    "id": "Batagor pertama kali muncul di Bandung, Jawa Barat, sekitar akhir tahun 1970-an. Camilan ini tercipta dari kreativitas pedagang bakso tahu yang menggoreng dagangan yang tidak habis terjual agar bisa disajikan kembali keesokan harinya.",
    "en": "Batagor first appeared in Bandung, West Java, around the late 1970s. It was created by tofu fish ball vendors who fried their unsold stock so it could be served again the next day."
  }
};

export const recipes: Record<RecipeKey, Recipe> = {
  "tenggiri": {
    "title": {
      "id": "Resep Isian Tenggiri",
      "en": "Mackerel Filling Recipe"
    },
    "steps": [
      {
        "title": {
          "id": "Menyiapkan Adonan Ikan",
          "en": "Preparing the Fish Mixture"
        },
        "short": {
          "id": "Campur ikan giling dengan bumbu dan tepung sagu.",
          "en": "Mix ground fish with seasoning and tapioca flour."
        },
        "detail": {
          "id": "Giling halus 300 gram daging ikan tenggiri segar, lalu campurkan dengan 100 gram tepung sagu, 2 siung bawang putih halus, 1 sendok teh garam, sedikit merica, dan 3 sendok makan air es. Uleni adonan dengan tangan selama kurang lebih 3-4 menit hingga teksturnya kalis, sedikit lengket, dan mudah dibentuk. Semakin lama diuleni, tekstur batagor yang dihasilkan akan semakin kenyal.",
          "en": "Finely grind 300 grams of fresh mackerel fish, then mix it with 100 grams of tapioca flour, 2 cloves of minced garlic, 1 teaspoon of salt, a pinch of pepper, and 3 tablespoons of ice water. Knead the mixture by hand for about 3-4 minutes until it becomes elastic, slightly sticky, and easy to shape. The longer you knead it, the chewier the final texture will be."
        }
      },
      {
        "title": {
          "id": "Mengisi Tahu",
          "en": "Filling the Tofu"
        },
        "short": {
          "id": "Belah tahu dan isi dengan adonan ikan.",
          "en": "Cut open the tofu and fill it with the fish mixture."
        },
        "detail": {
          "id": "Ambil tahu putih berbentuk kotak, belah menjadi dua bagian. Gunakan sendok kecil untuk mengeruk sedikit bagian tengah tahu agar ada ruang, lalu isi rongga tersebut dengan adonan ikan menggunakan sendok atau tangan yang sudah dibasahi air agar adonan tidak lengket. Ratakan permukaannya agar terlihat rapi.",
          "en": "Take square white tofu and cut it in half. Use a small spoon to scoop out a little of the center to create space, then fill that hollow with the fish mixture using a spoon or wet hands so it does not stick. Smooth the surface so it looks neat."
        }
      },
      {
        "title": {
          "id": "Mengisi Kulit Pangsit",
          "en": "Filling the Wonton Skin"
        },
        "short": {
          "id": "Bungkus sisa adonan dengan kulit pangsit.",
          "en": "Wrap the remaining mixture in wonton skin."
        },
        "detail": {
          "id": "Letakkan selembar kulit pangsit di telapak tangan, beri satu sendok teh adonan ikan di tengahnya. Lipat keempat sisi kulit ke atas mengelilingi adonan seperti membentuk siomay, biarkan bagian atasnya sedikit terbuka. Tekan perlahan bagian bawahnya agar berdiri kokoh dan tidak mudah rusak saat dikukus.",
          "en": "Place a wonton skin on your palm and add one teaspoon of the fish mixture in the center. Fold all four sides of the skin upward around the mixture, similar to shaping a siomay dumpling, leaving the top slightly open. Gently press the base so it stands firmly and will not fall apart during steaming."
        }
      },
      {
        "title": {
          "id": "Mengukus Adonan",
          "en": "Steaming the Mixture"
        },
        "short": {
          "id": "Kukus semua bahan selama 15-20 menit.",
          "en": "Steam everything for 15-20 minutes."
        },
        "detail": {
          "id": "Panaskan panci kukusan hingga airnya mendidih dan mengeluarkan uap yang stabil. Susun tahu isi dan siomay pangsit di atas nampan kukus yang sudah diolesi sedikit minyak agar tidak lengket. Kukus dengan api sedang selama 15-20 menit hingga adonan ikan benar-benar matang, lalu angkat dan biarkan dingin sebelum digoreng.",
          "en": "Heat a steamer pot until the water boils and produces steady steam. Arrange the filled tofu and wonton dumplings on a lightly oiled steaming tray so they do not stick. Steam over medium heat for 15-20 minutes until the fish mixture is fully cooked, then remove and let it cool before frying."
        }
      },
      {
        "title": {
          "id": "Menggoreng hingga Renyah",
          "en": "Frying Until Crispy"
        },
        "short": {
          "id": "Goreng dengan minyak panas hingga keemasan.",
          "en": "Deep-fry in hot oil until golden."
        },
        "detail": {
          "id": "Panaskan minyak goreng cukup banyak dengan api sedang. Masukkan tahu dan siomay yang sudah dikukus dan didinginkan, goreng sambil sesekali dibalik agar matang merata. Angkat ketika warnanya kuning keemasan dan renyah, lalu tiriskan di atas kertas minyak sebelum dipotong dan disajikan dengan saus kacang.",
          "en": "Heat a generous amount of cooking oil over medium heat. Add the steamed and cooled tofu and dumplings, frying while occasionally turning so they cook evenly. Remove once golden brown and crispy, then drain on paper towels before cutting and serving with peanut sauce."
        }
      }
    ]
  },
  "ayam": {
    "title": {
      "id": "Resep Isian Ayam",
      "en": "Chicken Filling Recipe"
    },
    "steps": [
      {
        "title": {
          "id": "Menyiapkan Adonan Ayam",
          "en": "Preparing the Chicken Mixture"
        },
        "short": {
          "id": "Campur ayam giling dengan telur dan tepung sagu.",
          "en": "Mix ground chicken with egg and tapioca flour."
        },
        "detail": {
          "id": "Giling halus 300 gram daging ayam tanpa kulit, campurkan dengan 80 gram tepung sagu, 1 butir telur, 2 siung bawang putih halus, setengah sendok teh kaldu bubuk, dan sedikit merica. Aduk rata menggunakan spatula atau tangan hingga adonan terasa lembut dan tidak lengket berlebihan.",
          "en": "Finely grind 300 grams of skinless chicken meat, then mix it with 80 grams of tapioca flour, 1 egg, 2 cloves of minced garlic, half a teaspoon of powdered broth, and a pinch of pepper. Stir well using a spatula or your hands until the mixture feels soft and not overly sticky."
        }
      },
      {
        "title": {
          "id": "Mengisi Tahu dan Pangsit",
          "en": "Filling the Tofu and Wonton"
        },
        "short": {
          "id": "Isi tahu dan kulit pangsit dengan adonan ayam.",
          "en": "Fill the tofu and wonton skin with the chicken mixture."
        },
        "detail": {
          "id": "Dengan cara yang sama seperti isian ikan, belah tahu putih dan keruk bagian tengahnya, lalu isi dengan adonan ayam. Gunakan sisa adonan untuk mengisi kulit pangsit, lipat ujung-ujungnya ke atas hingga membentuk siomay kecil yang rapi.",
          "en": "Using the same method as the fish filling, cut open the white tofu, scoop out the center, and fill it with the chicken mixture. Use the remaining mixture to fill the wonton skins, folding the edges upward to form neat little dumplings."
        }
      },
      {
        "title": {
          "id": "Mengukus hingga Matang",
          "en": "Steaming Until Cooked"
        },
        "short": {
          "id": "Kukus adonan selama sekitar 15 menit.",
          "en": "Steam the mixture for about 15 minutes."
        },
        "detail": {
          "id": "Susun tahu dan pangsit isi ayam di atas nampan kukusan yang sudah diberi sedikit minyak. Kukus dengan api sedang selama 15 menit, cek kematangan dengan menusuk salah satu bagian menggunakan tusuk gigi; jika tidak ada cairan mentah yang keluar, adonan sudah matang sempurna.",
          "en": "Arrange the chicken-filled tofu and wontons on a lightly oiled steaming tray. Steam over medium heat for 15 minutes, checking doneness by poking one piece with a toothpick; if no raw liquid comes out, the filling is fully cooked."
        }
      },
      {
        "title": {
          "id": "Menggoreng Sebentar",
          "en": "Frying Briefly"
        },
        "short": {
          "id": "Goreng sebentar sebelum disajikan.",
          "en": "Fry briefly before serving."
        },
        "detail": {
          "id": "Setelah dingin, goreng tahu dan pangsit isi ayam sebentar saja, sekitar 2-3 menit di minyak panas, hanya untuk membuat bagian luarnya renyah keemasan tanpa membuat isiannya kering. Angkat dan tiriskan di atas saringan atau kertas minyak.",
          "en": "Once cooled, fry the chicken-filled tofu and wontons briefly, about 2-3 minutes in hot oil, just enough to make the outside golden and crispy without drying out the filling. Remove and drain on a rack or paper towel."
        }
      },
      {
        "title": {
          "id": "Menyajikan Hidangan",
          "en": "Serving the Dish"
        },
        "short": {
          "id": "Potong dan sajikan dengan pelengkap.",
          "en": "Cut and serve with the toppings."
        },
        "detail": {
          "id": "Potong-potong batagor ayam yang sudah digoreng, tata di atas piring saji. Siram dengan saus kacang secukupnya, tambahkan kecap manis, dan beri perasan jeruk limau serta sedikit sambal rawit sebelum dihidangkan selagi hangat.",
          "en": "Cut the fried chicken batagor into pieces and arrange them on a serving plate. Drizzle with enough peanut sauce, add sweet soy sauce, and finish with a squeeze of lime and a little chili sauce before serving while warm."
        }
      }
    ]
  },
  "saus-kacang": {
    "title": {
      "id": "Resep Saus Kacang",
      "en": "Peanut Sauce Recipe"
    },
    "steps": [
      {
        "title": {
          "id": "Menyangrai Kacang Tanah",
          "en": "Roasting the Peanuts"
        },
        "short": {
          "id": "Sangrai atau goreng kacang tanah hingga matang.",
          "en": "Roast or fry the peanuts until cooked."
        },
        "detail": {
          "id": "Siapkan 250 gram kacang tanah kupas, lalu sangrai tanpa minyak di atas wajan dengan api kecil sambil terus diaduk selama sekitar 10 menit, atau goreng sebentar dengan sedikit minyak hingga kecokelatan dan beraroma harum. Angkat dan biarkan dingin sebelum dihaluskan.",
          "en": "Prepare 250 grams of shelled peanuts, then dry-roast them in a pan over low heat while stirring continuously for about 10 minutes, or shallow-fry them briefly in a little oil until golden brown and fragrant. Remove and let them cool before blending."
        }
      },
      {
        "title": {
          "id": "Menghaluskan Bumbu",
          "en": "Blending the Seasoning"
        },
        "short": {
          "id": "Haluskan kacang bersama bawang putih dan cabai.",
          "en": "Blend the peanuts with garlic and chili."
        },
        "detail": {
          "id": "Haluskan kacang tanah yang sudah disangrai bersama 3 siung bawang putih dan 3-5 buah cabai rawit (sesuaikan tingkat kepedasan) menggunakan blender atau ulekan hingga menjadi pasta yang cukup halus namun masih sedikit bertekstur.",
          "en": "Blend the roasted peanuts together with 3 cloves of garlic and 3-5 bird’s eye chilies (adjust to taste) using a blender or mortar and pestle until it forms a fairly smooth paste with a slight texture remaining."
        }
      },
      {
        "title": {
          "id": "Merebus Saus",
          "en": "Simmering the Sauce"
        },
        "short": {
          "id": "Rebus bumbu halus dengan air dan gula merah.",
          "en": "Simmer the paste with water and palm sugar."
        },
        "detail": {
          "id": "Masukkan bumbu halus ke dalam panci, tambahkan 400 ml air, 50 gram gula merah serut, 1 sendok teh garam, dan sedikit air asam jawa. Masak dengan api kecil sambil terus diaduk agar tidak menggumpal di dasar panci, hingga mendidih dan mulai mengental.",
          "en": "Put the blended paste into a pot, add 400 ml of water, 50 grams of shaved palm sugar, 1 teaspoon of salt, and a little tamarind water. Cook over low heat while stirring continuously to prevent lumps from forming at the bottom, until it boils and starts to thicken."
        }
      },
      {
        "title": {
          "id": "Menyesuaikan Rasa",
          "en": "Adjusting the Flavor"
        },
        "short": {
          "id": "Koreksi rasa gurih, manis, dan pedas.",
          "en": "Balance the savory, sweet, and spicy taste."
        },
        "detail": {
          "id": "Cicipi saus yang sedang dimasak, tambahkan garam jika kurang gurih, gula merah jika kurang manis, atau cabai rawit halus jika ingin lebih pedas. Terus masak hingga kekentalan saus sesuai selera, tidak terlalu encer maupun terlalu kental.",
          "en": "Taste the sauce as it cooks, adding more salt if it needs more savoriness, more palm sugar if it needs more sweetness, or extra chili if you want it spicier. Keep cooking until the sauce reaches your preferred thickness, neither too runny nor too thick."
        }
      },
      {
        "title": {
          "id": "Menyajikan Saus Kacang",
          "en": "Serving the Peanut Sauce"
        },
        "short": {
          "id": "Siramkan di atas batagor sebelum disantap.",
          "en": "Pour over the batagor before eating."
        },
        "detail": {
          "id": "Setelah saus kacang matang dan mengental sempurna, angkat dan biarkan sedikit hangat. Siramkan secukupnya di atas batagor goreng yang sudah dipotong-potong, lalu tambahkan kecap manis dan perasan jeruk limau segar sesaat sebelum disajikan agar rasanya paling maksimal.",
          "en": "Once the peanut sauce is fully cooked and thickened, remove it from the heat and let it cool slightly. Pour a generous amount over the cut pieces of fried batagor, then add sweet soy sauce and a squeeze of fresh lime just before serving for the best flavor."
        }
      }
    ]
  }
};
