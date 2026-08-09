'use client';

import React from 'react';
import { Award, Cpu, Network, Radio } from 'lucide-react';

const IEEE_SOCIETIES = [
  { name: "Computer Society", icon: <Cpu className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Communications Society", icon: <Network className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Electron Devices Society", icon: <Radio className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Electronics Packaging Society", icon: <Cpu className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Information Theory Society", icon: <Network className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Power & Energy Society", icon: <Radio className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Industry Applications Society", icon: <Cpu className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Vehicular Technology Society", icon: <Network className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Engineering in Medicine & Biology Society", icon: <Radio className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Broadcast Technology Society", icon: <Cpu className="h-4 w-4 text-royal animate-pulse" /> },
  { name: "Women in Engineering (WIE)", icon: <Network className="h-4 w-4 text-royal animate-pulse" /> }
];

export default function ProfessionalMemberships() {
  return (
    <section id="memberships" className="py-24 bg-white dark:bg-[#090D16] border-t border-card-border/60 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">GLOBAL NETWORKS</span>
          <h2 className="text-3xl font-extrabold text-navy dark:text-white font-poppins">Professional Memberships</h2>
          <p className="text-sm text-dark-gray/80 dark:text-gray-400 max-w-2xl mx-auto mt-2">
            Active student member across global technical societies, participating in peer-to-peer technical networks, webinars, and international conferences.
          </p>
        </div>

        {/* Primary Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* IEEE Chair Card */}
          <div className="bg-light-gray/30 dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-royal/10 text-royal border border-royal/20 shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-navy dark:text-white font-poppins">
                IEEE Student Branch Chair
              </h3>
              <p className="text-xs font-mono text-royal dark:text-blue-400 font-semibold">CSMSS Student Chapter</p>
              <p className="text-xs text-dark-gray dark:text-gray-400 leading-relaxed mt-1">
                Leading the student branch to organize technical workshops, hackathons, and guest lectures to bridge the gap between academic theory and industry engineering practices.
              </p>
            </div>
          </div>

          {/* IETE Card */}
          <div className="bg-light-gray/30 dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-navy dark:text-white font-poppins">
                IETE Student Member
              </h3>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Institution of Electronics and Telecommunication Engineers</p>
              <p className="text-xs text-dark-gray dark:text-gray-400 leading-relaxed mt-1">
                Engaging in local and national technical programs, expanding engineering perspectives, and collaborating on electronics design projects.
              </p>
            </div>
          </div>

        </div>

        {/* IEEE Societies Sub-grid */}
        <div className="space-y-6">
          <h4 className="text-sm font-mono font-bold uppercase text-navy dark:text-gray-300 tracking-wider flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-royal mr-2" />
            Active IEEE Society Chapters
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {IEEE_SOCIETIES.map((soc, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2.5 p-3.5 rounded-lg border border-card-border/60 dark:border-gray-800/85 bg-light-gray/20 dark:bg-[#111827]/40 hover:border-royal/30 dark:hover:border-royal/30 transition-colors shadow-sm"
              >
                <div className="shrink-0 p-1.5 rounded bg-royal/5 dark:bg-royal/10 border border-royal/10">
                  {soc.icon}
                </div>
                <span className="text-[11px] font-medium text-navy/95 dark:text-gray-300 leading-tight">
                  IEEE {soc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
