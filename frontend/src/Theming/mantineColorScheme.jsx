import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  bg: "bg-slate-950",
  text: "white",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  const value = {
    bg: theme === "dark" ? "bg-slate-950" : "bg-stone-50",
    text: theme === "dark" ? "white" : "black",
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
