import { useState, useEffect, useRef } from "react";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import { useRouter } from "next/router";

const tabsData = [
  {
    label: "Home",
    href: "/",
    left: 0,
    width: 70,
  },
  {
    label: "Projects",
    href: "/projects",
    left: 75,
    width: 85,
  },
  {
    label: "Resume",
    href: "#",
    left: 165,
    width: 80,
  },
];
const Header = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col justify-center px-4 sm:px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16">
        {/* Desktop Navigation */}
        <div className="flex ml-[-0.60rem] flex-wrap gap-2">
          {tabsData.map((tab, idx) => {
            const isActive = router.asPath === tab.href;
            return (
              <Link
                href={tab.href}
                key={idx}
                className={`nav-link inline-block p-3 sm:px-4 sm:py-2.5 z-20 rounded-xl transition-all ease-in-out hover:shadow-lg hover:shadow-white/20 dark:hover:shadow-white/10 text-sm sm:text-base font-medium hover:scale-105 focus:outline-none ${
                  isActive
                    ? 'text-black dark:text-white bg-white dark:bg-black shadow-md'
                    : 'text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>


        {/* Theme Switch */}
        <div>
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Header;
