import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // function to get initial theme
  const getInitialTheme = () => {
    // check localStorage first
    const savedTheme = localStorage.getItem("news-theme");

    if (savedTheme) return savedTheme;

    // otherwise use system theme
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("news-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
