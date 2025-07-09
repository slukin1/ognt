import { LOCAL_STORAGE_KEYS } from "configs";
import { createContext, useEffect, useContext, ReactNode, useState } from "react";
// import { useLocalStorage } from "usehooks-ts";

const themeValues = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: (theme: "light" | "dark") => void;
} | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme);
    if (storedTheme) {
      if (storedTheme in themeValues) {
        setTheme(storedTheme as keyof typeof themeValues);
      } else {
        setTheme("light");
        localStorage.setItem(LOCAL_STORAGE_KEYS.theme, "light");
      }
    } else {
      setTheme("dark");
      localStorage.setItem(LOCAL_STORAGE_KEYS.theme, "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
    document.documentElement.setAttribute("style", `color-scheme: ${theme};`);
  }, [theme]);

  const toggleTheme = (theme: "light" | "dark") => {
    setTheme(theme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.theme, theme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Error in useTheme");
  }
  return context;
};

export default ThemeProvider;
