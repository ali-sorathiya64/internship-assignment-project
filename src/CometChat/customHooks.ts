import { useEffect, useState } from 'react';


const useSystemColorScheme = (): 'light' | 'dark' => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial color scheme based on system preference
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    
    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return colorScheme;
};

export default useSystemColorScheme;
