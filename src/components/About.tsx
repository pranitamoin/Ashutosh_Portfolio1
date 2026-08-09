'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen } from 'lucide-react';

const AREAS_OF_INTEREST = [
  "Semiconductor & VLSI Design",
  "Embedded Systems & IoT",
  "FPGA & Digital Design",
  "Data Analytics & Business Intelligence",
  "Artificial Intelligence & Machine Learning",
  "Python, SQL & Data Visualization",
  "Research & Development",
  "Computer Architecture & Hardware Design"
];



export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 bg-white dark:bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">ENGINEER PROFILE</span>
          <h2 className="text-3xl font-extrabold text-navy dark:text-white">About Me</h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy dark:text-white font-poppins">
                Bridging Academic Concept realization with Empirical Engineering
              </h3>
              <p className="text-[#334155] dark:text-gray-300 leading-relaxed text-[15px]">
                I am a passionate Electronics and Computer Engineering (ECE) student with a strong interest in Embedded Systems, VLSI Design, Data Analytics, Artificial Intelligence, and Research & Development. I thrive on solving real-world engineering challenges through technology, continuously exploring innovations across semiconductor logic, embedded processors, and data-driven systems.
              </p>
              <p className="text-[#334155] dark:text-gray-300 leading-relaxed text-[15px]">
                My academic and project experience includes working on research papers, hands-on embedded systems firmware, FPGA/VHDL-based designs, and radio astronomy coaxial feed systems. Through internships and active technical leadership, I have developed strong problem-solving capabilities while staying aligned with modern engineering practices.
              </p>
            </div>

            {/* Research Philosophy Card */}
            <div className="border border-card-border dark:border-gray-800 rounded-xl p-6 bg-light-gray/50 dark:bg-gray-800/30">
              <h4 className="text-sm font-mono font-bold uppercase text-royal dark:text-blue-400 mb-2">Research Philosophy</h4>
              <p className="text-sm italic text-navy/90 dark:text-gray-200 font-medium">
                &ldquo;{portfolioData.personalInfo.philosophy}&rdquo;
              </p>
            </div>

            {/* Academic Highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-navy dark:text-white">
                <BookOpen className="h-5 w-5 text-royal" />
                <h4 className="text-base font-bold font-poppins uppercase tracking-wider">Education & Credentials</h4>
              </div>
              <div className="space-y-6 border-l-2 border-royal/20 pl-5 ml-1">
                <div className="relative">
                  <div className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-royal bg-white dark:bg-[#090D16]" />
                  <h5 className="text-[15px] font-bold text-navy dark:text-white">Bachelor of Technology (B.Tech) in Electronics & Computer Engineering</h5>
                  <p className="text-xs font-mono text-royal dark:text-blue-400 font-semibold">CSMSS Chh. Shahu College of Engineering, Chhatrapati Sambhajinagar</p>
                  <p className="text-xs font-mono text-dark-gray/60 dark:text-gray-400 mt-0.5">2023 &ndash; 2027 | CGPA- 8.1</p>
                  <p className="text-xs text-dark-gray/80 dark:text-gray-400 mt-1.5">Core coursework: Electromagnetics, Antenna Design, Microwave Engineering, DSP, VLSI Systems, Real-Time Operating Systems.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-royal bg-white dark:bg-[#090D16]" />
                  <h5 className="text-[15px] font-bold text-navy dark:text-white">Higher Secondary Certificate (HSC - Class XII)</h5>
                  <p className="text-xs font-mono text-royal dark:text-blue-400 font-semibold">Vinayakrao Patil Mahavidyalaya, Vaijapur</p>
                  <p className="text-xs font-mono text-dark-gray/60 dark:text-gray-400 mt-0.5">2021 &ndash; 2023 | Percentage: 64.50%</p>
                  <p className="text-xs text-dark-gray/80 dark:text-gray-400 mt-1.5">Major subjects: Physics, Chemistry, Mathematics, and Languages.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-royal bg-white dark:bg-[#090D16]" />
                  <h5 className="text-[15px] font-bold text-navy dark:text-white">Secondary School Certificate (SSC - Class X)</h5>
                  <p className="text-xs font-mono text-royal dark:text-blue-400 font-semibold">Sadguru Narayangiriji Maharaj Mahavidyalaya, Virgaon</p>
                  <p className="text-xs font-mono text-dark-gray/60 dark:text-gray-400 mt-0.5">Completed 2021 | Percentage: 78.60%</p>
                  <p className="text-xs text-dark-gray/80 dark:text-gray-400 mt-1.5">General studies curriculum including Mathematics, Sciences, and Social Sciences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interests & Memberships */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Areas of Interest */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-navy dark:text-white font-poppins">
                Areas of Interest
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AREAS_OF_INTEREST.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2.5 p-3 rounded-lg border border-card-border/60 dark:border-gray-800/80 bg-light-gray/30 dark:bg-gray-800/20 text-xs font-semibold text-navy/90 dark:text-gray-350 hover:border-royal/30 dark:hover:border-royal/30 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>



          </div>

        </div>

      </div>
    </section>
  );
}
