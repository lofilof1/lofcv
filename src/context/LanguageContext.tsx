import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  t: (typeof translations)[Language];
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => localStorage.getItem('language') === 'en' ? 'en' : 'tr');

  const updateLanguage = (next: Language) => {
    setLang(next);
    localStorage.setItem('language', next);
    document.documentElement.lang = next;
  };

  const value = {
    lang,
    t: translations[lang],
    setLang: updateLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
