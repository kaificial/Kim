import { useState, useEffect } from "react";

const FloatingSocialPills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  useEffect(() => {
    // Show the floating pills after a delay to match the original animation timing
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800); // Same timing as navPillsVisible in index.tsx

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-800 ${
      isVisible ? " opacity-100 translate-y-0 " : " opacity-0 translate-y-4 "
    }`}>
      <div className="relative">
        {/* Animated background glow */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-full blur-lg transition-all duration-500 ${
          isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
        }`}></div>
        
        {/* Main pill container with enhanced styling */}
        <div 
          className={`bg-gradient-to-r from-blue-50/95 to-indigo-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-xl rounded-full py-2.5 px-4 md:px-5 border border-blue-200/60 dark:border-gray-600/60 shadow-2xl transition-all duration-300 touch-manipulation cursor-pointer ${
            isHovered ? 'shadow-blue-500/25 dark:shadow-blue-400/25 scale-105' : 'shadow-gray-500/10 dark:shadow-gray-400/10'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <div className="relative inline-flex items-center space-x-4">
            {/* GitHub */}
            <a
              className="group/link relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:shadow-xl focus:outline-none focus:ring-0"
              href="https://github.com/kaificial"
              target="_blank"
              rel="noreferrer noopener"
              onMouseEnter={() => setActiveIcon('github')}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 rounded-full opacity-0 group-hover/link:opacity-15 transition-all duration-300 group-hover/link:scale-110"></div>
              <svg className={`relative w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                activeIcon === 'github' ? 'text-gray-800 dark:text-gray-200 scale-110' : 'group-hover/link:text-gray-800 dark:group-hover/link:text-gray-200'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-3 py-2 text-xs font-semibold text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-xl opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700 dark:border-gray-300">
                GitHub
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
              </span>
            </a>
            
            {/* LinkedIn */}
            <a
              className="group/link relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:shadow-xl focus:outline-none focus:ring-0"
              href="https://www.linkedin.com/in/newjeans/"
              target="_blank"
              rel="noreferrer noopener"
              onMouseEnter={() => setActiveIcon('linkedin')}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full opacity-0 group-hover/link:opacity-10 transition-all duration-300 group-hover/link:scale-110"></div>
              <svg className={`relative w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                activeIcon === 'linkedin' ? 'text-gray-700 dark:text-gray-300 scale-110' : 'group-hover/link:text-gray-700 dark:group-hover/link:text-gray-300'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-3 py-2 text-xs font-semibold text-white bg-gray-700 dark:bg-gray-300 dark:text-gray-800 rounded-xl opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-600 dark:border-gray-400">
                LinkedIn
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700 dark:border-t-gray-300"></div>
              </span>
            </a>
            
            {/* Resume */}
            <a
              className="group/link relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:shadow-xl focus:outline-none focus:ring-0"
              href="#"
              onMouseEnter={() => setActiveIcon('resume')}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full opacity-0 group-hover/link:opacity-10 transition-all duration-300 group-hover/link:scale-110"></div>
              <svg className={`relative w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                activeIcon === 'resume' ? 'text-gray-700 dark:text-gray-300 scale-110' : 'group-hover/link:text-gray-700 dark:group-hover/link:text-gray-300'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-3 py-2 text-xs font-semibold text-white bg-gray-700 dark:bg-gray-300 dark:text-gray-800 rounded-xl opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-600 dark:border-gray-400">
                Resume
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700 dark:border-t-gray-300"></div>
              </span>
            </a>
            
            {/* Email */}
            <a
              className="group/link relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:shadow-xl focus:outline-none focus:ring-0"
              href="mailto:kaifieldkim@gmail.com"
              onMouseEnter={() => setActiveIcon('email')}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full opacity-0 group-hover/link:opacity-10 transition-all duration-300 group-hover/link:scale-110"></div>
              <svg className={`relative w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                activeIcon === 'email' ? 'text-gray-700 dark:text-gray-300 scale-110' : 'group-hover/link:text-gray-700 dark:group-hover/link:text-gray-300'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-3 py-2 text-xs font-semibold text-white bg-gray-700 dark:bg-gray-300 dark:text-gray-800 rounded-xl opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-600 dark:border-gray-400">
                Email
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700 dark:border-t-gray-300"></div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocialPills;
