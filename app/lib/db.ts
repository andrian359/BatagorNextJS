import {
  defaultContent,
  defaultQuestions,
  type Bi,
  type ContentKey,
  type QuizQuestion,
} from "./data";
import { prisma } from "./prisma";

async function seedDatabase() {
  const contentCount = await prisma.content.count();
  if (contentCount === 0) {
    await prisma.content.createMany({
      data: Object.entries(defaultContent).map(([key, value]) => ({
        key,
        idText: value.id,
        enText: value.en,
      })),
    });
  }

  const questionCount = await prisma.quizQuestion.count();
  if (questionCount === 0) {
    await replaceQuestionsInDatabase(defaultQuestions);
  }
}

export async function readContent(): Promise<Record<ContentKey, Bi>> {
  await seedDatabase();
  const result = { ...defaultContent };
  const rows = await prisma.content.findMany();
  for (const row of rows) {
    if (row.key in result) {
      result[row.key as ContentKey] = { id: row.idText, en: row.enText };
    }
  }
  return result;
}

export async function replaceContent(content: Record<ContentKey, Bi>) {
  if (!content || typeof content !== "object") {
    throw new Error("Format konten tidak valid.");
  }

  await prisma.$transaction(
    Object.entries(content).map(([key, value]) =>
      prisma.content.upsert({
        where: { key },
        create: { key, idText: value.id.trim(), enText: value.en.trim() },
        update: { idText: value.id.trim(), enText: value.en.trim() },
      }),
    ),
  );
}

export async function readQuestions(): Promise<QuizQuestion[]> {
  await seedDatabase();
  const questions = await prisma.quizQuestion.findMany({
    orderBy: { id: "asc" },
    include: { options: { orderBy: { optionIndex: "asc" } } },
  });

  return questions.map((question) => ({
    question: { id: question.questionId, en: question.questionEn },
    options: question.options.map((option) => ({
      id: option.idText,
      en: option.enText,
    })),
    answer: question.answer,
  }));
}

async function replaceQuestionsInDatabase(questions: QuizQuestion[]) {
  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error("woy Minimal harus ada satu soal.");
  }

  for (const question of questions) {
    if (
      question.options.length !== 4 ||
      question.answer < 0 ||
      question.answer > 3 ||
      !question.question.id.trim() ||
      !question.question.en.trim() ||
      question.options.some(
        (option) => !option.id.trim() || !option.en.trim(),
      )
    ) {
      throw new Error(
        "Setiap soal harus memiliki pertanyaan, 4 pilihan, dan jawaban valid.",
      );
    }
  }

  await prisma.$transaction(async (transaction) => {
    await transaction.quizQuestion.deleteMany();
    for (const question of questions) {
      await transaction.quizQuestion.create({
        data: {
          questionId: question.question.id.trim(),
          questionEn: question.question.en.trim(),
          answer: question.answer,
          options: {
            create: question.options.map((option, optionIndex) => ({
              optionIndex,
              idText: option.id.trim(),
              enText: option.en.trim(),
            })),
          },
        },
      });
    }
  });
}

export async function replaceQuestions(questions: QuizQuestion[]) {
  await replaceQuestionsInDatabase(questions);
}
