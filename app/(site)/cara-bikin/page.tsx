"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { L, useLang } from "../../components/LanguageProvider";
import { recipeCards, recipes, type RecipeKey } from "./data";

export default function CaraBikin() {
  const { lang } = useLang();

  const [recipeKey, setRecipeKey] = useState<RecipeKey | null>(null);
  const [stepIndex, setStepIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setStepIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const recipe = recipeKey ? recipes[recipeKey] : null;
  const activeStep =
    recipe && stepIndex !== null ? recipe.steps[stepIndex] : null;

  const backToRecipes = () => {
    setStepIndex(null);
    setRecipeKey(null);
  };

  return (
    <>
      <section id="cara-bikin" className="page active">
        <div className="section-inner">
          <h2 className="page-title">
            <L id="Cara Membuat Batagor" en="How to Make Batagor" />
          </h2>

          {!recipe && (
            <div id="faseResep">
              <p className="section-intro">
                <L
                  id="Pilih salah satu resep di bawah ini untuk melihat tahapan pembuatannya."
                  en="Choose one of the recipes below to see its preparation steps."
                />
              </p>

              <div className="recipe-select-row">
                {recipeCards.map((card) => (
                  <article
                    className="recipe-card"
                    key={card.key}
                    onClick={() => {
                      setRecipeKey(card.key);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Image
                      className="thumb"
                      src={card.img}
                      alt={card.alt}
                      width={card.w}
                      height={card.h}
                      sizes="(min-width: 780px) 340px, 100vw"
                    />
                    <h3>
                      <L {...card.title} />
                    </h3>
                    <p>
                      <L {...card.text} />
                    </p>
                    <span className="card-link">
                      <L id="Lihat tahapannya" en="See the steps" />
                    </span>
                  </article>
                ))}
              </div>
            </div>
          )}

          {recipe && (
            <div id="faseLangkah">
              <button
                className="btn-kembali"
                type="button"
                onClick={backToRecipes}
              >
                <L id="Kembali" en="Back" />
              </button>
              <h3 className="step-phase-title">{recipe.title[lang]}</h3>
              <div className="step-grid">
                {recipe.steps.map((step, index) => (
                  <div
                    className="step-card"
                    key={step.title.en}
                    onClick={() => setStepIndex(index)}
                  >
                    <span className="step-number">{index + 1}</span>
                    <h4>{step.title[lang]}</h4>
                    <p>{step.short[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div
        className={`modal-overlay ${activeStep ? "active" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setStepIndex(null);
        }}
      >
        <div
          className="modal-box"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalStepTitle"
        >
          <button
            className="modal-close"
            type="button"
            aria-label="Tutup"
            onClick={() => setStepIndex(null)}
          >
            &times;
          </button>
          {activeStep && stepIndex !== null && (
            <>
              <h3 id="modalStepTitle">
                {lang === "id" ? "Langkah" : "Step"} {stepIndex + 1}:{" "}
                {activeStep.title[lang]}
              </h3>
              <p>{activeStep.detail[lang]}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
