'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ShieldCheck, Calendar } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-light-gray dark:bg-[#0E1524] border-y border-card-border/60 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Certifications Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">CREDENTIALS MATRIX</span>
          <h2 className="text-3xl font-extrabold text-navy dark:text-white font-poppins">Certifications & Training</h2>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-dark-gray/60 dark:text-gray-500 uppercase font-semibold">
                    Issuer: {cert.issuer.split(' ')[0]}
                  </span>
                  <Award className="h-4.5 w-4.5 text-royal" />
                </div>
                
                <h3 className="text-sm font-bold text-navy dark:text-white font-poppins leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center space-x-1 text-xs text-dark-gray/60 dark:text-gray-400 font-mono">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{cert.date}</span>
                </div>
                
                {cert.credentialId && (
                  <p className="text-[10px] font-mono text-dark-gray/80 dark:text-gray-500">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
