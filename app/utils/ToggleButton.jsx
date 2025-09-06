'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center cursor-pointer w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300 p-1"
    >
      <div
        className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="text-white w-4 h-4 m-auto mt-[4px]" />
        ) : (
          <Sun className="text-yellow-500 w-4 h-4 m-auto mt-[4px]" />
        )}
      </div>
    </button>
  );
}
