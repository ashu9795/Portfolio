import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with initial values
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

// Custom hook to use the theme context
export default function useTheme() {
  return useContext(ThemeContext);
}

// ThemeProvider component to provide theme-related functions and state
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  // Function to switch to dark mode
  const darkTheme = () => {
    setThemeMode('dark');
  };

  // Function to switch to light mode
  const lightTheme = () => {
    setThemeMode('light');
  };

  // Apply the theme mode to the body class
  useEffect(() => {
    if (themeMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
