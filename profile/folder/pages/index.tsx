import Head from "next/head";
import Image from "next/image";

import { useState, useEffect, useMemo } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import ScrollProgress from "../components/scrollProgress";
import FloatingSocialPills from "../components/floatingSocialPills";

const Home: NextPage = () => {

  const heading = "Kai Kim";
  const subheading = `CS @ Queen's`;
  const [showIgnitionBlurb, setShowIgnitionBlurb] = useState(false);
  const [showHawkHacksBlurb, setShowHawkHacksBlurb] = useState(false);
  const [showQASABlurb, setShowQASABlurb] = useState(false);
  const [showReEnvisionBlurb, setShowReEnvisionBlurb] = useState(false);
  const [fading, setFading] = useState(" opacity-0 ease-in ");
  
  // Individual visibility states for waterfall effect
  const [nameVisible, setNameVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [desc1Visible, setDesc1Visible] = useState(false);
  const [desc2Visible, setDesc2Visible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  


  useEffect(() => {
    setFading(" opacity-100 ease-in ");
    
    // Waterfall effect timing - top to bottom flow
    const timer1 = setTimeout(() => setNameVisible(true), 300);
    const timer2 = setTimeout(() => setSubtitleVisible(true), 1000);
    const timer3 = setTimeout(() => setDesc1Visible(true), 1200);
    const timer4 = setTimeout(() => setDesc2Visible(true), 1400);
    const timer5 = setTimeout(() => setImageVisible(true), 1600);
    const timer7 = setTimeout(() => setExperienceVisible(true), 2000);
    const timer8 = setTimeout(() => setEducationVisible(true), 2400);
    const timer9 = setTimeout(() => setSkillsVisible(true), 2800);
    const timer10 = setTimeout(() => setProjectsVisible(true), 3200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
      clearTimeout(timer10);
    };
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
    }));
  }, []);

  return (
    <div className="px-4 sm:px-8 relative overflow-hidden">
      <ScrollProgress />
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-300/20 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.speed}s`,
            }}
          />
        ))}
      </div>

      <Head>
        <title>{heading}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta content={subheading} name="description" />
        <meta property="og:site_name" content={heading} />
        <meta property="og:description" content={subheading} />
        <meta property="og:title" content={heading} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kaikim" />
        <meta name="twitter:title" content={heading} />
        <meta name="twitter:description" content={subheading} />
      </Head>

      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 relative z-10">
        
        <div className={"w-full max-w-2xl transition-opacity duration-600 delay-300 " + fading}>
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
            <div className="flex flex-col sm:pr-8 w-full sm:w-auto sm:flex-1">
                              <h1
                  className={
                    "font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3 text-black dark:text-white transition-opacity duration-1000 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text " +
                    (nameVisible ? " opacity-100 " : " opacity-0 ")
                  }
                >
                  Kai Kim
                </h1>
              <h2
                className={
                  "text-gray-700 dark:text-gray-200 mb-6 transition-opacity duration-800 text-lg sm:text-xl font-medium flex flex-wrap items-center gap-3 " +
                  (subtitleVisible ? " opacity-100 " : " opacity-0 ")
                }
              >
                <span>{subheading}</span>
                <span className="text-xs sm:text-sm inline-flex items-center px-3 py-1.5 rounded-full text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 transition-all duration-300 shadow-lg hover:shadow-md hover:scale-105">
                  <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Toronto, ON
                </span>
              </h2>
              <p
                className={
                  "text-gray-600 dark:text-gray-400 mb-6 break-normal transition-opacity duration-800 " +
                  (desc1Visible ? " opacity-100 " : " opacity-0 ")
                }
              >
                Hello! I&apos;m a developer focused on creating engaging user experiences and building user-friendly interfaces.
              </p>
              
              {/* Social Media Links */}
              <div className={"transition-opacity duration-800 " + (desc2Visible ? " opacity-100 " : " opacity-0 ")}>
                <div className="relative">
                  <div className="relative inline-flex items-center space-x-4">
                      {/* GitHub */}
                      <a
                        className="group/link relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-3 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-lg focus:outline-none focus:ring-0"
                        href="https://github.com/kaificial"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 rounded-full opacity-0 group-hover/link:opacity-20 transition-opacity duration-300"></div>
                        <svg className="relative w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-all duration-300 group-hover/link:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                          GitHub
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                        </span>
                      </a>
                      
                      {/* LinkedIn */}
                      <a
                        className="group/link relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-lg focus:outline-none focus:ring-0"
                        href="https://www.linkedin.com/in/newjeans/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 rounded-full opacity-0 group-hover/link:opacity-20 transition-opacity duration-300"></div>
                        <svg className="relative w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-all duration-300 group-hover/link:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                          LinkedIn
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                        </span>
                      </a>
                      
                      {/* Resume */}
                      <a
                        className="group/link relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-lg focus:outline-none focus:ring-0"
                        href="#"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 rounded-full opacity-0 group-hover/link:opacity-20 transition-opacity duration-300"></div>
                        <svg className="relative w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-all duration-300 group-hover/link:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                          Resume
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                        </span>
                      </a>
                      
                      {/* Email */}
                      <a
                        className="group/link relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-lg focus:outline-none focus:ring-0"
                        href="mailto:kaifieldkim@gmail.com"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 rounded-full opacity-0 group-hover/link:opacity-20 transition-opacity duration-300"></div>
                        <svg className="relative w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-all duration-300 group-hover/link:animate-ping" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg opacity-0 group-hover/link:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                          Email
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                        </span>
                      </a>
                    </div>
                </div>
              </div>
              
            </div>
                          <div className={"duration-800 " + (imageVisible ? " opacity-100 " : " opacity-0 ") + "w-full sm:w-auto sm:flex-shrink-0 flex justify-center sm:justify-start"}>
                <div className="relative group p-1">
                  <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700 group-hover:duration-300"></div>
                  <Image
                    alt="Kai Kim"
                    height={200}
                    width={260}
                    src="/pictures/kai-profile.jpg"
                    priority
                    className="relative rounded-2xl w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[260px] shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={"w-full max-w-2xl mt-12 transition-opacity duration-800 " + (experienceVisible ? " opacity-100 " : " opacity-0 ")}>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Experience
            </h2>
          </div>
          <div className="flex flex-col gap-y-4">
            {/* ReEnvision Experience */}
            <div className="transition-all duration-700 ease-out transform">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-gray-900 dark:text-white font-semibold text-base">
                        ReEnvision
                      </h3>
                      <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                        Web Developer
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Aug 2025 - Present
                    </span>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowReEnvisionBlurb(!showReEnvisionBlurb)}
                      className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1 group"
                    >
                      <span>{showReEnvisionBlurb ? 'Show less' : 'Read more'}</span>
                      <svg 
                        className={`w-3 h-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${showReEnvisionBlurb ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Expandable Blurb */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    showReEnvisionBlurb ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mt-3">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        Developing the ReEnvision website
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          TypeScript
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Next.js
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Web Development
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Frontend
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          UI/UX
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conditional spacing when ReEnvision experience is expanded */}
            <div className={`${showReEnvisionBlurb ? 'h-4' : 'h-0'} transition-all duration-300`}></div>
            
            {/* HawkHacks Experience */}
            <div className="transition-all duration-700 ease-out transform hidden">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/pictures/Hawk.png"
                    alt="HawkHacks Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-gray-900 dark:text-white font-semibold text-base">
                        HawkHacks
                      </h3>
                      <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                        Logistics Coordinator
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Jan 2025 - Jul 2025
                    </span>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowHawkHacksBlurb(!showHawkHacksBlurb)}
                      className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1 group"
                    >
                      <span>{showHawkHacksBlurb ? 'Show less' : 'Read more'}</span>
                      <svg 
                        className={`w-3 h-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${showHawkHacksBlurb ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Expandable Blurb */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    showHawkHacksBlurb ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mt-3">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        Coordinated logistics and event planning for HawkHacks 2025
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Event Planning
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Team Management
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Communication
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conditional spacing when HawkHacks experience is expanded */}
            <div className={`${showHawkHacksBlurb ? 'h-4' : 'h-0'} transition-all duration-300`}></div>
            
            {/* Ignition Hacks Experience */}
            <div className="transition-all duration-700 ease-out transform hidden">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/pictures/ignition.png"
                    alt="Ignition Hacks Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain brightness-0 dark:brightness-100"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-gray-900 dark:text-white font-semibold text-base">
                        Ignition Hacks
                      </h3>
                      <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                        UX/UI Designer
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Dec 2024 - Apr 2025
                    </span>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowIgnitionBlurb(!showIgnitionBlurb)}
                      className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1 group"
                    >
                      <span>{showIgnitionBlurb ? 'Show less' : 'Read more'}</span>
                      <svg 
                        className={`w-3 h-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${showIgnitionBlurb ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Expandable Blurb */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    showIgnitionBlurb ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mt-3">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        Designed user interfaces and experiences for Ignition Hacks website, merchandise, etc. for Ignition Hacks 2025
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Figma
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Adobe XD
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Prototyping
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* QASA Experience */}
            <div className="transition-all duration-700 ease-out transform hidden">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/pictures/qasa.png"
                    alt="QASA Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-gray-900 dark:text-white font-semibold text-base">
                        {`QASA - Queen's Asian Student Association`}
                      </h3>
                      <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                        Graphics Coordinator
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Nov 2024 - Apr 2025
                    </span>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowQASABlurb(!showQASABlurb)}
                      className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1 group"
                    >
                      <span>{showQASABlurb ? 'Show less' : 'Read more'}</span>
                      <svg 
                        className={`w-3 h-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${showQASABlurb ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Expandable Blurb */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    showQASABlurb ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mt-3">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        Designed graphics and visual content for QASA events, social media, and promotional materials
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Graphic Design
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Adobe Creative Suite
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Social Media
                        </span>
                        <span className="skill-tag px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-105 transition-all duration-300 ease-out">
                          Event Branding
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={"w-full max-w-2xl mt-16 transition-opacity duration-800 " + (educationVisible ? " opacity-100 " : " opacity-0 ")}>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Education
            </h2>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="items-center flex-col">
              <ul className="hover-bg-animation education-card flex flex-row justify-items-start items-center mb-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 mr-4 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/pictures/queens-creast.png"
                    alt={`Queen's University Coat of Arms`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0">
                  <div className="dark:text-white text-gray-800">
                    Queen&apos;s University
                  </div>
                  <span className="dark:text-gray-400 whitespace-nowrap text-gray-600 text-sm">
                    Bachelor of Computing
                  </span>
                </div>
                <span className="grow opacity-0 md:opacity-100 w-full border-t dark:border-gray-500 mx-4 border-dashed border-gray-400"></span>
                <span className="dark:text-gray-400 sm:whitespace-nowrap whitespace-normal text-right text-gray-600 text-sm flex-shrink-0">
                  2024 - 2028
                </span>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={"w-full max-w-2xl mt-16 transition-opacity duration-800 " + (skillsVisible ? " opacity-100 " : " opacity-0 ")}>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Skills
            </h2>
          </div>
          <div className="flex flex-col gap-y-6">
            {/* Languages */}
            <div className="transition-all duration-700 ease-out transform">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Languages</h3>
                              <div className="flex flex-wrap gap-2">
                                                  <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    JavaScript
                  </span>
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    TypeScript
                  </span>
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    HTML/CSS
                  </span>
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    Python
                  </span>
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    Java
                  </span>
              </div>
            </div>

            {/* Frontend */}
            <div className="transition-all duration-700 ease-out transform">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                                  <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    React
                  </span>
                  <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    Next.js
                  </span>
                  <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    Tailwind CSS
                  </span>
              </div>
            </div>

            {/* Backend */}
            <div className="transition-all duration-700 ease-out transform">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                                  <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    Node.js
                  </span>
                  <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    Express.js
                  </span>
                  <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                    MongoDB
                  </span>
              </div>
            </div>

            {/* Tools & Others */}
            <div className="transition-all duration-700 ease-out transform">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                  Git
                </span>
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                  REST APIs
                </span>
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                  VS Code
                </span>
                <span className="skill-tag hover-bg-animation px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer border border-blue-200 dark:border-blue-700 shadow-sm">
                  Canva
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className={"w-full max-w-2xl mt-20 transition-opacity duration-800 " + (projectsVisible ? " opacity-100 " : " opacity-0 ")}>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-col gap-y-6">
            {/* Project 1 - Koda */}
            <div className="transition-all duration-700 ease-out transform">
              <div className="group card-elevated project-card hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl p-8 transition-all duration-700 ease-out border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 h-full relative overflow-hidden hover:scale-[1.02]">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"></div>
                {/* Project Image */}
                <div className="relative w-full mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {/* Windows-style header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-600">
                    {/* URL */}
                    <div className="flex-1">
                      <div className="flex items-center bg-gray-700 dark:bg-gray-800 rounded px-3 py-1">
                        {/* Lock icon */}
                        <svg className="w-3 h-3 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        {/* URL */}
                        <span className="text-xs text-gray-300 font-medium truncate">
                          koda-demo.vercel.app
                        </span>
                      </div>
                    </div>
                    
                    {/* Right side - Windows control buttons */}
                    <div className="flex items-center space-x-1 ml-2">
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 6h14v8H3V6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 6l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot area */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src="/pictures/image (14).png"
                      alt="Koda Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-gray-300 transition-colors mb-2">
                        Koda
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Financial management app designed specifically for university and college students
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      MongoDB
                    </span>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Building
                      </span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href="https://kodafinances.vercel.app"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 dark:bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        Live Demo
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/kaificial/studentfinance"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        GitHub
                        <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - RateMyEats */}
            <div className="transition-all duration-700 ease-out transform">
              <div className="group card-elevated project-card hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl p-8 transition-all duration-700 ease-out border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 h-full relative overflow-hidden hover:scale-[1.02]">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"></div>
                {/* Project Image */}
                <div className="relative w-full mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {/* Windows-style header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-600">
                    {/* URL */}
                    <div className="flex-1">
                      <div className="flex items-center bg-gray-700 dark:bg-gray-800 rounded px-3 py-1">
                        {/* Lock icon */}
                        <svg className="w-3 h-3 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        {/* URL */}
                        <span className="text-xs text-gray-300 font-medium truncate">
                          ratemyeats.com
                        </span>
                      </div>
                    </div>
                    
                    {/* Right side - Windows control buttons */}
                    <div className="flex items-center space-x-1 ml-2">
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 6h14v8H3V6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 6l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot area */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-cyan-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-amber-800 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          RateMyEats
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                          Screenshot Preview
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-gray-300 transition-colors mb-2">
                        RateMyEats
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        University dining hall rating platform for Canadian students
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      React
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      MongoDB
                    </span>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Building
                      </span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href="https://ratemyres.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 dark:bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        Live Demo
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/kaificial/ratemyres"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        GitHub
                        <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 - Rooke */}
            <div className="transition-all duration-700 ease-out transform">
              <div className="group card-elevated project-card hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl p-8 transition-all duration-700 ease-out border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 h-full relative overflow-hidden hover:scale-[1.02]">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"></div>
                {/* Project Image */}
                <div className="relative w-full mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {/* Windows-style header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-600">
                    {/* URL */}
                    <div className="flex-1">
                      <div className="flex items-center bg-gray-700 dark:bg-gray-800 rounded px-3 py-1">
                        {/* Lock icon */}
                        <svg className="w-3 h-3 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        {/* URL */}
                        <span className="text-xs text-gray-300 font-medium truncate">
                          rooke-chess.vercel.app
                        </span>
                      </div>
                    </div>
                    
                    {/* Right side - Windows control buttons */}
                    <div className="flex items-center space-x-1 ml-2">
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 6h14v8H3V6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 6l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot area */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src="/pictures/Rooke.png"
                      alt="Rooke Chess App Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-gray-300 transition-colors mb-2">
                        Rooke
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        A web-based chess app with AI opponents and sandbox mode. Remake of a high school project with modern technologies.
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      React 18
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Vite
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Tailwind CSS
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Stockfish
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Zustand
                    </span>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Live
                      </span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href="https://rooke.vercel.app"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 dark:bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        Live Demo
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/kaificial/Rooke"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        GitHub
                        <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 - Personal Portfolio */}
            <div className="transition-all duration-700 ease-out transform">
              <div className="group card-elevated project-card hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl p-8 transition-all duration-700 ease-out border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 h-full relative overflow-hidden hover:scale-[1.02]">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"></div>
                {/* Project Image */}
                <div className="relative w-full mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {/* Windows-style header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-600">
                    {/* URL */}
                    <div className="flex-1">
                      <div className="flex items-center bg-gray-700 dark:bg-gray-800 rounded px-3 py-1">
                        {/* Lock icon */}
                        <svg className="w-3 h-3 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        {/* URL */}
                        <span className="text-xs text-gray-300 font-medium truncate">
                          kaificial.vercel.app
                        </span>
                      </div>
                    </div>
                    
                    {/* Right side - Windows control buttons */}
                    <div className="flex items-center space-x-1 ml-2">
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 6h14v8H3V6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3 bg-gray-600 hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 6l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot area */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src="/pictures/portfolio_project.png"
                      alt="Personal Portfolio Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-gray-300 transition-colors mb-2">
                        Personal Portfolio
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        A modern, responsive portfolio website showcasing my projects, skills, and experience.
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer">
                      Tailwind CSS
                    </span>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Live
                      </span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href="https://kaificial.vercel.app/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 dark:bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        Live Demo
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/kaificial/portfolio"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        GitHub
                        <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* View More Projects Button */}
                      <div className="mt-6 transition-all duration-700 ease-out transform">
            <Link 
              href="/projects"
              className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg border border-blue-500 dark:border-blue-500"
            >
              View All Projects
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>



      </div>
      
      {/* Floating Social Media Pills */}
      <FloatingSocialPills />
      
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 0 rgba(59, 130, 246, 0));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.3));
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Dark mode glow adjustment */
        .dark .animate-pulse-glow {
          animation: pulse-glow-dark 2s ease-in-out infinite;
        }
        
        @keyframes pulse-glow-dark {
          0%, 100% {
            filter: drop-shadow(0 0 0 rgba(147, 197, 253, 0));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(147, 197, 253, 0.6)) drop-shadow(0 0 16px rgba(147, 197, 253, 0.3));
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
