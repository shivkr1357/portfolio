"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    console.warn("useTheme must be used within a ThemeProvider");
    return {
      theme: "dark" as const,
      toggleTheme: () => console.log("toggleTheme called"),
    };
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      // Check for saved theme preference or default to dark
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.warn("Error accessing localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      // Save theme preference to localStorage
      localStorage.setItem("theme", theme);

      // Apply theme to document
      document.documentElement.setAttribute("data-theme", theme);
    } catch (error) {
      console.warn("Error saving theme:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
