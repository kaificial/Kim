import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useTheme, ThemeProvider } from "next-themes";

import Header from "../components/header";
import Footer from "../components/footer";
import ScrollProgressBar from "../components/scrollProgress";
import BackToTop from "../components/backToTop";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
      enableSystem={true} 
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
    >
      <ScrollProgressBar />
      <Header />
      <Head>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono&display=swap&apos;);
        </style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var finalTheme = theme === 'system' ? systemTheme : theme;
                  
                  if (finalTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback to system preference
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
