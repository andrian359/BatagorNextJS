"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { defaultContent, type Bi, type ContentKey } from "../lib/data";
import { useSavedContent } from "../lib/store";

export type Lang = "id" | "en";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: Record<ContentKey, Bi>;
}

const LangContext = createContext<LangContextValue>({
  lang: "id",
  setLang: () => {},
  content: defaultContent,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");
  const content = useSavedContent();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function L({ id, en }: Bi) {
  const { lang } = useLang();
  return <>{lang === "id" ? id : en}</>;
}

export function C({ k }: { k: ContentKey }) {
  const { lang, content } = useLang();
  return <>{content[k][lang]}</>;
}
