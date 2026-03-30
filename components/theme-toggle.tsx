"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      className="themeToggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <span>{theme === "light" ? "Dark" : "Light"}</span>
      <span className="themeToggleThumb" aria-hidden="true" />
    </button>
  );
}
