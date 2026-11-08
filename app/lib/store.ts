import { useEffect, useState } from "react";
import {
  defaultContent,
  defaultQuestions,
  type Bi,
  type ContentKey,
  type QuizQuestion,
} from "./data";

export function cloneDefaultQuestions(): QuizQuestion[] {
  return structuredClone(defaultQuestions);
}

export function cloneDefaultContent(): Record<ContentKey, Bi> {
  return structuredClone(defaultContent);
}

export const loadQuestions = () => cloneDefaultQuestions();
export const loadContent = () => cloneDefaultContent();

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!response.ok) throw new Error(`Request gagal (${response.status}).`);
  return response.json() as Promise<T>;
}

export const saveQuestions = (questions: QuizQuestion[]) =>
  request<QuizQuestion[]>("/api/questions", {
    method: "PUT",
    body: JSON.stringify(questions),
  });

export const saveContent = (content: Record<ContentKey, Bi>) =>
  request<Record<ContentKey, Bi>>("/api/content", {
    method: "PUT",
    body: JSON.stringify(content),
  });

export const fetchQuestions = () => request<QuizQuestion[]>("/api/questions");
export const fetchContent = () =>
  request<Record<ContentKey, Bi>>("/api/content");

export function useSavedQuestions(): QuizQuestion[] {
  const [questions, setQuestions] = useState(loadQuestions);
  useEffect(() => {
    fetchQuestions()
      .then(setQuestions)
      .catch((error: unknown) =>
        console.error("Gagal memuat soal kuis dari database.", error),
      );
  }, []);
  return questions;
}

export function useSavedContent(): Record<ContentKey, Bi> {
  const [content, setContent] = useState(loadContent);
  useEffect(() => {
    fetchContent()
      .then(setContent)
      .catch((error: unknown) =>
        console.error("Gagal memuat konten dari database.", error),
      );
  }, []);
  return content;
}
