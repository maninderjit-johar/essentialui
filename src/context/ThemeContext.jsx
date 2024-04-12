import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primary: "#1976d2", // Default primary color
    secondary: "#dc004e", // Default secondary color
  });

  const updateTheme = (newTheme) => {
    setTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
    applyTheme(newTheme);
  };

  const applyTheme = (theme) => {
    document.body.style.setProperty("--primary-color", theme.primary);
    document.body.style.setProperty("--secondary-color", theme.secondary);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
