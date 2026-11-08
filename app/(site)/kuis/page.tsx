"use client";

import { useState } from "react";
import { L, useLang } from "../../components/LanguageProvider";
import { useSavedQuestions } from "../../lib/store";

export default function Kuis() {
  const { lang } = useLang();

  const questions = useSavedQuestions();
  const [started, setStarted] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);

  const copy = (idText: string, enText: string) =>
    lang === "id" ? idText : enText;

  const startQuiz = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setStarted(true);
  };

  const pickAnswer = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === questions[index].answer) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (selected === null) return;
    setIndex(index + 1);
    setSelected(null);
  };

  const finished = started && index >= questions.length;
  const question = started && !finished ? questions[index] : null;

  return (
    <section id="quiz" className="page active">
      <div className="section-inner quiz-section">
        <h2 className="page-title">
          <L
            id="Seberapa Kenal Kamu dengan Batagor?"
            en="How Well Do You Know Batagor?"
          />
        </h2>
        <p className="section-intro">
          <L
            id="Jawab 5 pertanyaan singkat tentang Batagor dan lihat skormu."
            en="Answer 5 quick questions about Batagor and see your score."
          />
        </p>

        <div className="quiz-panel card">
          {!started && (
            <div id="quizIntro" className="quiz-state">
              <span className="quiz-mark" aria-hidden="true">
                ?
              </span>
              <h3>
                <L
                  id="Siap menguji pengetahuanmu?"
                  en="Ready to test your knowledge?"
                />
              </h3>
              <p>
                <L
                  id="Kuis ini terdiri dari 5 soal pilihan ganda. Semoga berhasil!"
                  en="This quiz has 5 multiple-choice questions. Good luck!"
                />
              </p>
              <button className="btn btn-primary" type="button" onClick={startQuiz}>
                <L id="Mulai Kuis" en="Start Quiz" />
              </button>
            </div>
          )}

          {question && (
            <div id="quizQuestion" className="quiz-state" aria-live="polite">
              <div className="quiz-progress-row">
                <span>
                  {copy("Pertanyaan ", "Question ")}
                  {index + 1} / {questions.length}
                </span>
                <span>
                  {copy("Skor: ", "Score: ")}
                  {score}
                </span>
              </div>
              <div className="quiz-progress-track">
                <span
                  style={{
                    width: `${((index + 1) / questions.length) * 100}%`,
                  }}
                ></span>
              </div>
              <h3 id="quizQuestionText">{question.question[lang]}</h3>

              <div className="quiz-options">
                {question.options.map((option, optionIndex) => {
                  let status = "";
                  if (selected !== null) {
                    if (optionIndex === question.answer) status = " correct";
                    if (
                      optionIndex === selected &&
                      optionIndex !== question.answer
                    )
                      status = " incorrect";
                  }
                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      className={`quiz-option${status}`}
                      aria-pressed={selected === optionIndex}
                      disabled={selected !== null}
                      onClick={() => pickAnswer(optionIndex)}
                    >
                      {option[lang]}
                    </button>
                  );
                })}
              </div>

              <p
                className={`quiz-feedback${
                  selected !== null
                    ? selected === question.answer
                      ? " is-correct"
                      : " is-incorrect"
                    : ""
                }`}
                role="status"
              >
                {selected === null
                  ? ""
                  : selected === question.answer
                    ? copy(
                        "Benar! Jawabanmu tepat.",
                        "Correct! That is the right answer.",
                      )
                    : copy(
                        "Belum tepat. Jawaban yang benar sudah ditandai.",
                        "Not quite. The correct answer is highlighted.",
                      )}
              </p>

              {selected !== null && (
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={nextQuestion}
                >
                  {index === questions.length - 1
                    ? copy("Lihat Hasil", "See Results")
                    : copy("Pertanyaan Berikutnya", "Next Question")}
                </button>
              )}
            </div>
          )}

          {finished && (
            <div id="quizResult" className="quiz-state" aria-live="polite">
              <span className="quiz-mark quiz-result-mark" aria-hidden="true">
                !
              </span>
              <p className="quiz-result-label">
                <L id="Skor Akhir" en="Final Score" />
              </p>
              <h3 id="quizFinalScore">
                {score} / {questions.length}
              </h3>
              <p>
                {score >= 4
                  ? copy(
                      "Pengetahuanmu tentang Batagor mantap!",
                      "You really know your Batagor!",
                    )
                  : score >= 2
                    ? copy(
                        "Bagus! Masih ada hal menarik untuk dipelajari.",
                        "Nice work! There is still more to discover.",
                      )
                    : copy(
                        "Yuk, jelajahi lagi website ini lalu coba sekali lagi.",
                        "Explore the website and give it another try.",
                      )}
              </p>
              <button className="btn btn-primary" type="button" onClick={startQuiz}>
                <L id="Main Lagi" en="Play Again" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
