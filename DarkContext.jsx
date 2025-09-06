// context/DarkContext.js
'use client';
import { createContext, useState, useEffect, useContext } from 'react';

const DarkContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem('dark-mode');
    if (saved === 'true') setDarkMode(true);
  }, []);

  // Apply dark class and save preference
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add('dark');
    else html.classList.remove('dark');

    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkContext);
