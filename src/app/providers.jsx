"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
