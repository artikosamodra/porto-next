"use client";
// pages/index.js

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      if (theme === "light") {
        setInitialRender(false);
      } else {
        setTheme("light");
      }
    }
  }, [theme, initialRender, setTheme]);

  return (
    <div>
      {initialRender ? (
        <button onClick={() => setTheme("light")} className="text-cyan-600">
          <Moon size={24} weight="fill" />
        </button>
      ) : (
        <>
          {theme === "light" ? (
            <button onClick={() => setTheme("dark")} className="text-cyan-600">
              <Moon size={24} weight="fill" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("light")}
              className="text-yellow-400"
            >
              <Sun size={24} weight="fill" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
