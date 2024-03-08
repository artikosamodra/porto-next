"use client";
// pages/index.js
import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      setInitialRender(false);
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="lg:pt-0 pt-4">
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <Sun size={24} weight="fill" className="text-yellow-500" />
        ) : (
          <Moon size={24} weight="fill" className="text-cyan-600" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
