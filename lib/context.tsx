"use client";

import { createContext, useState, useContext } from "react";

interface AppContextType {
  theme: string;
  setTheme: (theme: string) => void;
  quickLinks: string;
  setQuickLinks: (quickLinks: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const AppContext = createContext<AppContextType>({
  theme: 'dark',
  setTheme: () => {},
  quickLinks: '',
  setQuickLinks: () => {},
  language: '',
  setLanguage: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');
  const [quickLinks, setQuickLinks] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <AppContext.Provider
      value={{ theme, setTheme, quickLinks, setQuickLinks, language, setLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Función para acceder al contexto
export function useAppContext() {
  return useContext(AppContext);
}
