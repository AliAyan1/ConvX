"use client";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext"

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">UnitConvertX</Link>
        <div className="flex items-center gap-4">
          <Link href="/converter" className="hover:text-blue-600 dark:hover:text-blue-400">Unit Converter</Link>
          <Link href="/currency" className="hover:text-blue-600 dark:hover:text-blue-400">Currency Exchange</Link>
          <button
            onClick={toggleTheme}
            className="ml-4 text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </header>
  );
};
