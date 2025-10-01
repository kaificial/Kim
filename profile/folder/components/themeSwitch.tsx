import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isThemeSwitching, setIsThemeSwitching] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('theme-switching');
    };
  }, []);

  const handleThemeChange = () => {
    setIsRotating(true);
    setIsThemeSwitching(true);
    
    // Make the theme change feel instant
    document.body.classList.add('theme-switching');
    
    // Actually switch the theme
    setTheme(theme === "dark" ? "light" : "dark");
    
    // Clean up and stop the spinning animation
    setTimeout(() => {
      document.body.classList.remove('theme-switching');
      setIsThemeSwitching(false);
      setIsRotating(false);
    }, 100);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={handleThemeChange}
      className="w-9 h-9 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 dark:ring-gray-400 transition-transform duration-150 ease-out hover:scale-105"
    >
      {theme === "dark" ? (
        <SunIcon 
          className={`w-5 h-5 text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isRotating ? 'rotate-[360deg] scale-110' : 'rotate-0 scale-100'
          }`} 
        />
      ) : (
        <MoonIcon 
          className={`w-5 h-5 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isRotating ? 'rotate-[360deg] scale-110' : 'rotate-0 scale-100'
          }`} 
        />
      )}
    </button>
  );
};

export default ThemeSwitch;
