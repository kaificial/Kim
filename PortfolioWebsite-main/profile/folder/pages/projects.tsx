import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import ScrollProgress from "../components/scrollProgress";
import FloatingSocialPills from "../components/floatingSocialPills";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  status: 'live' | 'demo' | 'development' | 'archived';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'koda',
    title: 'Koda',
    description: 'Financial management app designed specifically for university and college students',
    longDescription: 'Helps university students track expenses, manage budgets, plan for tuition payments, and develop healthy financial habits. Features include:',
    image: '/pictures/image (14).png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Chart.js'],
    status: 'development',
    demoUrl: 'https://studentfinance-demo.vercel.app',
    githubUrl: 'https://github.com/kaificial/studentfinance',
    featured: true
  },
  {
    id: 'ratemyeats',
    title: 'RateMyEats',
    description: 'University dining hall rating platform for Canadian students',
    longDescription: 'Allows university students to rate and review their dining hall experiences. Features include user authentication, review system and search functionality',
    image: '/pictures/ratemyres-preview.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    status: 'development',
    demoUrl: 'https://ratemyres.com',
    githubUrl: 'https://github.com/kaificial/ratemyres',
    featured: true
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience.',
    longDescription: 'A modern, responsive portfolio website showcasing my projects, skills, and experience.',
    image: '/pictures/portfolio_project.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'live',
    demoUrl: 'https://kaificial.vercel.app/',
    githubUrl: 'https://github.com/kaificial/portfolio',
    featured: false
  },
  {
    id: 'keyra',
    title: 'TypeXi',
    description: 'An improved version of my first ever coding project',
    longDescription: 'Typing game for users to improve their typing speed and accuracy. Features multiple programming language modes including Java, JavaScript and Python. Includes syntax highlighting, error detection, and performance analytics',
          image: '/pictures/typexi.png',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    status: 'live',
    demoUrl: 'https://typexi.vercel.app/',
    githubUrl: 'https://github.com/kaificial/TypingGame2',
    featured: false
  }
];

const Projects: NextPage = () => {
  const [fading, setFading] = useState(" opacity-0 ease-in ");
  const [heading, setHeading] = useState("Projects");
  const [subheading, setSubHeading] = useState("");

  useEffect(() => {
    setFading(" opacity-100 ease-in ");
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

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'live':
        return 'bg-green-500';
      case 'demo':
        return 'bg-blue-500';
      case 'development':
        return 'bg-yellow-500';
      case 'archived':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'live':
        return 'Live';
      case 'demo':
        return 'Demo';
      case 'development':
        return 'In Development';
      case 'archived':
        return 'Archived';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="px-4 sm:px-8 relative overflow-hidden">
      <ScrollProgress />
      
      {/* Floating particles background */}
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
        <title>{heading} - Kai Kim</title>
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
        {/* Header Section */}
        <div className={"w-full max-w-2xl transition-opacity duration-600 delay-700 " + fading}>
          <h1
            className={
              "font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-2 text-black dark:text-white transition-opacity duration-600 " +
              fading
            }
          >
            Projects
          </h1>
          <h2
            className={
              "text-gray-700 dark:text-gray-200 mb-4 transition-opacity duration-600 delay-600 text-lg sm:text-xl " +
              fading
            }
          >
            {subheading}
          </h2>
          <p
            className={
              "text-gray-600 dark:text-gray-400 mb-8 break-normal transition-opacity duration-600 delay-700 " +
              fading
            }
          >
            A collection of projects that showcase my skills in web development, from full-stack applications to interactive demos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={"w-full max-w-2xl mt-8 transition-opacity duration-600 delay-800 " + fading}>
          <p
            className={
              "text-gray-600 font-semibold text-xl dark:text-gray-400 break-all mb-6 transition-opacity duration-600 delay-900 " +
              fading
            }
          >
            Featured Projects
          </p>
          <div className="flex flex-col gap-y-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={"transition-opacity duration-600 delay-" + (1000 + index * 100) + " " + fading}
              >
                <div className="group card-elevated project-card hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl p-8 transition-all duration-1000 ease-out border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 h-full relative overflow-hidden hover:scale-[1.02]">
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none"></div>
                  
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
                            {project.demoUrl ? 
                              (project.demoUrl.startsWith('http') ? new URL(project.demoUrl).hostname : 'localhost:3000') 
                              : 'localhost:3000'
                            }
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
                        src={project.image}
                        alt={`${project.title} Screenshot`}
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
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {project.description}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                          {project.longDescription}
                        </p>
                      </div>
                    </div>

                                         {/* Technologies */}
                     <div className="flex flex-wrap gap-2 mb-4">
                       {project.technologies.map((tech, techIndex) => (
                         <span 
                           key={techIndex}
                           className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm hover:scale-110 hover:rotate-1 hover:shadow-lg transition-all duration-700 ease-out active:scale-95 cursor-pointer"
                         >
                           {tech}
                         </span>
                       ))}
                     </div>

                    {/* Status and Actions */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 ${getStatusColor(project.status)} rounded-full animate-pulse`}></div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {getStatusText(project.status)}
                        </span>
                      </div>
                      
                      <div className="flex space-x-3">
                        {project.demoUrl && (
                          <a 
                            href={project.demoUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 bg-blue-600 dark:bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                          >
                            Live Demo
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 active:scale-95"
                          >
                            GitHub
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
      
      {/* Floating Social Media Pills */}
      <FloatingSocialPills />
    </div>
  );
};

export default Projects; 