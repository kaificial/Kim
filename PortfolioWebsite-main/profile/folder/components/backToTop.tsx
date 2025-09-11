import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 w-9 h-9 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 dark:ring-gray-400 transition-transform duration-150 ease-out hover:scale-105"
          aria-label="Back to top"
        >
          <svg 
            className="w-4 h-4 text-gray-700 dark:text-gray-300 transition-all duration-150 ease-out" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 19V5m0 0l-7 7m7-7l7 7" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
