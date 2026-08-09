'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, ChevronUp, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './CustomIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-light-gray dark:bg-[#0E1524] border-t border-card-border/60 dark:border-gray-800/80 pt-16 pb-12 relative">
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white dark:bg-[#111827] border border-card-border dark:border-gray-850 hover:border-royal/50 hover:bg-light-gray dark:hover:bg-gray-800 rounded-full shadow-md text-dark-gray dark:text-gray-300 hover:text-royal transition-all cursor-pointer group"
        aria-label="Back to top"
      >
        <ChevronUp className="h-5 w-5 transform group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Research Quote Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-base sm:text-lg italic font-medium text-navy dark:text-white leading-relaxed">
            &ldquo;Research is transforming ideas into technologies that shape the future.&rdquo;
          </p>
          <div className="h-0.5 w-12 bg-royal/40 mx-auto" />
        </div>

        {/* Site Map & Metadata columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-card-border/60 dark:border-gray-800/40">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-navy dark:text-white font-bold text-sm tracking-wider">
              <Cpu className="h-5 w-5 text-royal" />
              <span className="font-poppins uppercase tracking-widest text-[13px]">{portfolioData.personalInfo.name}</span>
            </div>
            <p className="text-xs text-dark-gray/70 dark:text-gray-405 leading-relaxed">
              Electronics &amp; Computer Engineering Student specializing in RF, Microwave, and Electromagnetics design pathways.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3 md:pl-12">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-dark-gray/50 dark:text-gray-500">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">Home</a>
              <a href="#dashboard" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">Dashboard</a>
              <a href="#about" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">About</a>
              <a href="#skills" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">Skills</a>
              <a href="#projects" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">Projects</a>
              <a href="#publications" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">Research</a>
              <a href="#experience" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">Timeline</a>
              <a href="#contact" className="text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal transition-colors">Contact</a>
            </div>
          </div>

          {/* Core Repos & Profiles */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-dark-gray/50 dark:text-gray-500">
              Academic Nodes
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href={portfolioData.personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-card-border dark:border-gray-800 bg-white dark:bg-gray-850 hover:bg-light-gray dark:hover:bg-gray-800 hover:text-royal text-dark-gray dark:text-gray-300 transition-all shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={portfolioData.personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-card-border dark:border-gray-800 bg-white dark:bg-gray-850 hover:bg-light-gray dark:hover:bg-gray-800 hover:text-royal text-dark-gray dark:text-gray-300 transition-all shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={portfolioData.personalInfo.socials.scholar}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-card-border dark:border-gray-800 bg-white dark:bg-gray-850 hover:bg-light-gray dark:hover:bg-gray-800 hover:text-royal text-dark-gray dark:text-gray-300 transition-all shadow-sm"
                title="Google Scholar"
              >
                <GraduationCap className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-dark-gray/60 dark:text-gray-500 pt-6 border-t border-card-border/40 dark:border-gray-800/20 gap-4">
          <span>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
