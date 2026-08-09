'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';

export default function ExperienceAndLeadership() {
  return (
    <>
      {/* SECTION 1: PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="py-24 bg-white dark:bg-[#090D16]">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="space-y-2 mb-16 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">CHRONOLOGY OF WORK</span>
            <h2 className="text-3xl font-extrabold text-navy dark:text-white font-poppins">Professional Experience</h2>
            <p className="text-sm text-dark-gray/80 dark:text-gray-400 max-w-xl mx-auto mt-2">
              Engineering internships, research roles, and technical development timelines.
            </p>
          </div>

          {/* Timeline Stack */}
          <div className="relative border-l-2 border-card-border dark:border-gray-800 ml-4 pl-8 space-y-12">
            {portfolioData.timeline.map((event) => (
              <div key={event.id} className="relative group">
                {/* Timeline Bullet */}
                <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-[#090D16] bg-royal/30 group-hover:bg-royal transition-all duration-300 shadow-sm" />
                
                <div className="space-y-4 bg-light-gray/25 dark:bg-[#111827]/40 border border-card-border/40 dark:border-gray-800/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Event Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-mono bg-royal/10 dark:bg-royal/20 text-royal px-2.5 py-0.5 rounded border border-royal/10 uppercase font-semibold">
                        {event.type}
                      </span>
                      <span className="text-xs font-bold text-royal dark:text-blue-450 font-mono">{event.duration}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-[#0A2540] dark:text-white font-poppins">
                      {event.title}
                    </h4>
                    
                    <p className="text-xs text-dark-gray/70 dark:text-gray-400 font-mono">
                      {event.organization} &bull; {event.location}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-mono uppercase text-dark-gray/50 dark:text-gray-500 font-bold tracking-wider">Key Responsibilities:</h5>
                    <ul className="space-y-1.5 text-xs text-dark-gray dark:text-gray-300">
                      {event.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start">
                          <span className="text-royal font-extrabold mr-2 mt-0.5 text-sm leading-none">&bull;</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learnings */}
                  <div className="bg-royal/5 dark:bg-royal/10 p-4 rounded-lg border border-royal/10">
                    <h5 className="text-[10px] font-mono uppercase text-royal dark:text-blue-400 font-bold tracking-wider mb-2">Key Learning Outcome:</h5>
                    <ul className="space-y-1 text-xs text-dark-gray/95 dark:text-gray-300">
                      {event.learnings.map((learn, lIdx) => (
                        <li key={lIdx} className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{learn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack used */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {event.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-mono bg-light-gray dark:bg-gray-800 text-dark-gray/80 dark:text-gray-400 px-2.5 py-1 rounded border border-card-border/60 dark:border-gray-700/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: LEADERSHIP & VOLUNTEERING */}
      <section id="leadership" className="py-24 bg-light-gray dark:bg-[#0E1524] border-t border-card-border/60 dark:border-gray-800/80">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="space-y-2 mb-16 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">ORGANIZATIONAL IMPACT</span>
            <h2 className="text-3xl font-extrabold text-navy dark:text-white font-poppins">Leadership & Volunteering</h2>
            <p className="text-sm text-dark-gray/80 dark:text-gray-400 max-w-xl mx-auto mt-2">
              Volunteering roles, leadership initiatives, and technical student chapter contributions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.leadership.map((lead) => (
              <div
                key={lead.id}
                className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-dark-gray/60 dark:text-gray-400 font-mono">
                      <span>{lead.organization}</span>
                      <span className="font-semibold text-royal dark:text-blue-405">{lead.duration}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#0A2540] dark:text-white font-poppins">
                      {lead.role}
                    </h4>
                  </div>

                  <p className="text-xs text-dark-gray dark:text-gray-400 leading-relaxed italic">
                    &ldquo;{lead.description}&rdquo;
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-[10px] font-mono uppercase text-royal dark:text-blue-400 font-bold tracking-wider">Responsibilities & Key Initiatives:</h5>
                    <ul className="space-y-1 text-xs text-dark-gray dark:text-gray-300">
                      {lead.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-royal font-extrabold mr-2 mt-0.5">&bull;</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 rounded-lg p-4 mt-6">
                  <h5 className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold flex items-center mb-1 tracking-wider">
                    <Award className="h-4 w-4 mr-1 shrink-0" />
                    Measurable Impact
                  </h5>
                  <p className="text-xs text-dark-gray/90 dark:text-gray-205 leading-relaxed">
                    {lead.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
