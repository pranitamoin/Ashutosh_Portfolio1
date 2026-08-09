'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Cpu, Terminal, LineChart, Wifi } from 'lucide-react';



export default function InterestsAndSkills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-light-gray dark:bg-[#0E1524] border-y border-card-border/60 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Skills Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">SKILLS MATRIX</span>
          <h2 className="text-3xl font-extrabold text-navy dark:text-white">Technical Proficiencies</h2>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {/* Programming */}
          <div className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4 border-b border-card-border/60 dark:border-gray-800 pb-2">
              <Terminal className="h-4.5 w-4.5 text-royal" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy dark:text-white">Programming</h3>
            </div>
            <div className="flex flex-col space-y-2.5">
              {skills.programming.map((skill, sIdx) => (
                <div key={sIdx} className="text-xs font-medium text-dark-gray dark:text-gray-300 bg-light-gray dark:bg-gray-850 px-3 py-1.5 rounded-lg border border-card-border/50 dark:border-gray-800/50">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Simulation */}
          <div className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4 border-b border-card-border/60 dark:border-gray-800 pb-2">
              <Layers className="h-4.5 w-4.5 text-royal" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy dark:text-white">Simulation</h3>
            </div>
            <div className="flex flex-col space-y-2.5">
              {skills.simulation.map((skill, sIdx) => (
                <div key={sIdx} className="text-xs font-medium text-dark-gray dark:text-gray-300 bg-light-gray dark:bg-gray-850 px-3 py-1.5 rounded-lg border border-card-border/50 dark:border-gray-800/50">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Hardware */}
          <div className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4 border-b border-card-border/60 dark:border-gray-800 pb-2">
              <Cpu className="h-4.5 w-4.5 text-royal" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy dark:text-white">Hardware</h3>
            </div>
            <div className="flex flex-col space-y-2.5">
              {skills.hardware.map((skill, sIdx) => (
                <div key={sIdx} className="text-xs font-medium text-dark-gray dark:text-gray-300 bg-light-gray dark:bg-gray-850 px-3 py-1.5 rounded-lg border border-card-border/50 dark:border-gray-800/50">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4 border-b border-card-border/60 dark:border-gray-800 pb-2">
              <Wifi className="h-4.5 w-4.5 text-royal" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy dark:text-white">Communication</h3>
            </div>
            <div className="flex flex-col space-y-2.5">
              {skills.communication.map((skill, sIdx) => (
                <div key={sIdx} className="text-xs font-medium text-dark-gray dark:text-gray-300 bg-light-gray dark:bg-gray-850 px-3 py-1.5 rounded-lg border border-card-border/50 dark:border-gray-800/50">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Research & Lab */}
          <div className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4 border-b border-card-border/60 dark:border-gray-800 pb-2">
              <LineChart className="h-4.5 w-4.5 text-royal" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy dark:text-white">Research Method</h3>
            </div>
            <div className="flex flex-col space-y-2.5">
              {skills.engineering.map((skill, sIdx) => (
                <div key={sIdx} className="text-xs font-medium text-dark-gray dark:text-gray-300 bg-light-gray dark:bg-gray-850 px-3 py-1.5 rounded-lg border border-card-border/50 dark:border-gray-800/50">
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
