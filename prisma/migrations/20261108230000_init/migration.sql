CREATE TABLE "content" (
    "key" TEXT NOT NULL,
    "id_text" TEXT NOT NULL,
    "en_text" TEXT NOT NULL,

    CONSTRAINT "content_pkey" PRIMARY KEY ("key")
);

CREATE TABLE "quiz_questions" (
    "id" SERIAL NOT NULL,
    "question_id" TEXT NOT NULL,
    "question_en" TEXT NOT NULL,
    "answer" INTEGER NOT NULL,

    CONSTRAINT "quiz_questions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "quiz_options" (
    "question_id" INTEGER NOT NULL,
    "option_index" INTEGER NOT NULL,
    "id_text" TEXT NOT NULL,
    "en_text" TEXT NOT NULL,

    CONSTRAINT "quiz_options_pkey" PRIMARY KEY ("question_id","option_index")
);

ALTER TABLE "quiz_options"
ADD CONSTRAINT "quiz_options_question_id_fkey"
FOREIGN KEY ("question_id") REFERENCES "quiz_questions"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
