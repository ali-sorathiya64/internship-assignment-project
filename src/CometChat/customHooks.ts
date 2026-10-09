import { useEffect, useState } from 'react';


const useSystemColorScheme = (): 'light' | 'dark' => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check the current system color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial color scheme based on system preference
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes to the color scheme preference
    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    // Clean up the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return colorScheme;
};

export default useSystemColorScheme;
