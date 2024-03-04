"use client";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="border border-2 border-slate-600 rounded-lg p-2"
        >
          <Moon size={24} />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="border border-2 border-slate-600 rounded-lg p-2"
        >
          <Sun size={24} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;