import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const [fading, setFading] = useState(" opacity-0 ease-in ");

  useEffect(() => {
    const handleRouteChange = () => {
      setFading(" opacity-0 ease-in ");
    };

    const handleRouteChangeComplete = () => {
      const timer = setTimeout(() => {
        setFading(" opacity-100 ease-in ");
      }, 100);
      return () => clearTimeout(timer);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    const initialTimer = setTimeout(() => {
      setFading(" opacity-100 ease-in ");
    }, 100);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      clearTimeout(initialTimer);
    };
  }, [router.events]);

  return (
    <footer className="flex flex-col justify-center px-8">
        <div className="max-w-2xl mx-auto w-full text-center pb-8 pt-0">
          <p className="text-gray-500 dark:text-gray-400">
            © Kai Kim 2025
          </p>
        </div>



    </footer>
  );
};

export default Footer;
