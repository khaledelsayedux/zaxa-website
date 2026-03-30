import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router';

interface NavigationContextType {
  previousPath: string | null;
  currentPath: string;
  direction: 'left' | 'right' | null;
}

const NavigationContext = createContext<NavigationContextType>({
  previousPath: null,
  currentPath: '/',
  direction: null,
});

export const useNavigation = () => useContext(NavigationContext);

// Define page order for directional transitions (pages with hero backgrounds)
const PAGE_ORDER: Record<string, number> = {
  '/': 0,           // Home
  '/about': 1,      // About
  '/projects': 2,   // Projects
  '/contact': 3,    // Contact
};

export function NavigationProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    // Determine navigation direction based on page order
    const prevIndex = previousPath ? PAGE_ORDER[previousPath] : undefined;
    const currentIndex = PAGE_ORDER[location.pathname];

    if (prevIndex !== undefined && currentIndex !== undefined) {
      // Moving to the right (forward navigation)
      if (currentIndex > prevIndex) {
        setDirection('right');
      }
      // Moving to the left (backward navigation)
      else if (currentIndex < prevIndex) {
        setDirection('left');
      } else {
        setDirection(null);
      }
    } else {
      setDirection(null);
    }

    // Update path tracking
    setPreviousPath(currentPath);
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={{ previousPath, currentPath, direction }}>
      {children}
    </NavigationContext.Provider>
  );
}
