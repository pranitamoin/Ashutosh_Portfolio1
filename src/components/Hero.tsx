'use client';

import React from 'react';
import { Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './CustomIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-8 overflow-hidden bg-white dark:bg-[#090D16]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20 pointer-events-none" />

      {/* Background soft blue blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/10 dark:bg-royal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Biography & Call to Actions (8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-royal/10 text-royal dark:bg-royal/20 border border-royal/20 w-fit">
              <span className="h-2 w-2 rounded-full bg-royal animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">Available for R&D Opportunities</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A2540] dark:text-white leading-tight">
                {portfolioData.personalInfo.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-dark-gray/80 dark:text-gray-400 font-poppins uppercase">
                {portfolioData.personalInfo.tagline}
              </p>
            </div>

            <p className="text-[#334155] dark:text-gray-300 max-w-2xl text-base leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/Ashutosh_Nimbalkar_Resume.pdf"
                download="Ashutosh_Nimbalkar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0A2540] dark:bg-white text-white dark:text-[#0A2540] text-sm font-semibold hover:opacity-90 transition-all duration-200"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Resume CV
              </a>
            </div>

            {/* Social Profiles */}
            <div className="flex items-center space-x-5 pt-6 border-t border-card-border/60 dark:border-gray-800/80 max-w-2xl">
              <span className="text-xs uppercase tracking-wider text-dark-gray/60 dark:text-gray-500 font-semibold font-mono">Index Registers:</span>
              <a
                href={portfolioData.personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#334155] dark:text-gray-400 hover:text-royal dark:hover:text-royal transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={portfolioData.personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#334155] dark:text-gray-400 hover:text-royal dark:hover:text-royal transition-colors"
                title="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-[#334155] dark:text-gray-400 hover:text-royal dark:hover:text-royal transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Premium Visual Profile Presentation (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
            <div className="relative group">
              
              {/* Spinning gradient ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-royal via-indigo-500 to-emerald-500 rounded-full opacity-60 blur-sm group-hover:opacity-85 transition-opacity duration-300 animate-[spin_8s_linear_infinite]" />
              
              {/* Outer decorative ring border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-royal to-emerald-500 rounded-full" />
              
              {/* Main Circular Profile Photo */}
              <div className="relative w-72 h-72 md:w-84 md:h-84 rounded-full overflow-hidden border-4 border-white dark:border-[#090D16] bg-light-gray shadow-xl z-10">
                <img
                  src="/profile.jpg"
                  alt="Ashutosh Nimbalkar"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Interactive Float Badge 1: Active R&D Indicator */}
              <div className="absolute bottom-2 -right-1.5 bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 px-3 py-1 rounded-full shadow-lg flex items-center space-x-1.5 z-20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-navy dark:text-gray-200">ACTIVE R&D</span>
              </div>

              {/* Interactive Float Badge 2: Institute Tag */}
              <div className="absolute -top-1.5 -left-4 bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 px-3.5 py-1 rounded-full shadow-lg flex items-center space-x-1.5 z-20">
                <span className="text-[9px] font-mono font-bold text-royal">CSMSS COE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
