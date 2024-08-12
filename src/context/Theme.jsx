import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// ThemeProvider component

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ Theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
