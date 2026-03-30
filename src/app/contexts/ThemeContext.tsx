import { createContext, useContext, useEffect, ReactNode } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Force dark mode only
  const theme: Theme = 'dark';

  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add('dark');
  }, []);

  // No-op function for compatibility
  const toggleTheme = () => {
    // Do nothing - dark mode only
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}