import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language } from '../types';

import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: (keyPath: string) => any;
  currentServiceSlug: string | null;
  setCurrentServiceSlug: (slug: string | null) => void;
  isQuoteModalOpen: boolean;
  openQuoteModal: (serviceTitle?: string) => void;
  closeQuoteModal: () => void;
  selectedQuoteService: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('toumival_lang') as Language;
    if (saved && (saved === 'fr' || saved === 'en' || saved === 'ar')) {
      return saved;
    }
    // Check URL path prefix
    const path = window.location.pathname;
    if (path.startsWith('/ar')) return 'ar';
    if (path.startsWith('/en')) return 'en';
    return 'fr';
  });

  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState('');

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('toumival_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    
    // Update body class for RTL specific font styling
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-heading');
    } else {
      document.body.classList.add('font-heading');
      document.body.classList.remove('font-arabic');
    }
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Update URL prefix seamlessly without reloading
    let newPath = window.location.pathname;
    // Strip existing prefix if any
    newPath = newPath.replace(/^\/(en|ar)/, '');
    if (newPath === '') newPath = '/';

    if (lang === 'en') {
      newPath = `/en${newPath === '/' ? '' : newPath}`;
    } else if (lang === 'ar') {
      newPath = `/ar${newPath === '/' ? '' : newPath}`;
    }

    window.history.pushState({}, '', newPath + window.location.hash);
  };

  const t = (keyPath: string) => {
    const keys = keyPath.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to FR if key not found
        let fallback: any = translations['fr'];
        for (const fbK of keys) {
          if (fallback && fallback[fbK] !== undefined) {
            fallback = fallback[fbK];
          } else {
            return keyPath;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  const openQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedQuoteService(serviceTitle);
    }
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dir,
        t,
        currentServiceSlug,
        setCurrentServiceSlug,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        selectedQuoteService
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
