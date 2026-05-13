import React, { createContext, useContext, useEffect, useState } from "react";

// Prototype theme context. Holds the current theme ("Light" | "Dark"),
// exposes a setter, and syncs the value to a data-theme attribute on
// <html> so CSS variables can switch the palette.
const ThemeContext = createContext({
  theme: "Light",
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  // Initialize from localStorage so the choice survives a refresh.
  // Falls back to "Light" if nothing is stored or the value is bad.
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "Light";
    const stored = window.localStorage.getItem("ib-theme");
    return stored === "Dark" || stored === "Light" ? stored : "Light";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "Dark" ? "dark" : "light"
    );
    try {
      window.localStorage.setItem("ib-theme", theme);
    } catch (e) {
      // Ignore storage errors (private mode, etc.) — not critical for the prototype.
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
