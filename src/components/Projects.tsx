'use client';

import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { X, FileText, ExternalLink, Cpu, Database, Network, TrendingUp, Settings2, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './CustomIcons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'design' | 'sim' | 'results'>('overview');

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setActiveTab('overview');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">ENGINEERING PROTOTYPES</span>
          <h2 className="text-3xl font-extrabold text-navy dark:text-white">Featured Projects</h2>
          <p className="text-sm text-dark-gray/80 dark:text-gray-400 max-w-xl mx-auto mt-2">
            Click on any card to launch the technical deep-dive console containing S-parameters, block diagrams, and measurements.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectDetails(project)}
              className="group cursor-pointer bg-light-gray/40 dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visualizer Mock Cover */}
                  <div className="relative aspect-video bg-[#050811] border-b border-card-border dark:border-gray-850 overflow-hidden w-full flex items-center justify-center">
                    {/* Subtle technical background grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[size:12px_12px] opacity-10 pointer-events-none" />
                    
                    {/* UI Graphics matching the project */}
                    {project.id === 'mimo-5g-antenna' && (
                      <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-gray-300">
                        <div className="flex justify-between items-center bg-gray-900/90 px-3 py-1 border-b border-gray-800/80 z-20">
                          <span className="font-bold text-[7px] text-gray-400">Ansys HFSS - S11 Response</span>
                          <span className="text-[6px] text-emerald-400 font-bold px-1 rounded bg-emerald-500/10 border border-emerald-500/20">SOLVED</span>
                        </div>
                        <div className="flex-grow relative p-3 flex items-end">
                          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 p-3 opacity-20">
                            {Array.from({ length: 24 }).map((_, i) => (
                              <div key={i} className="border-t border-l border-gray-600 w-full h-full" />
                            ))}
                          </div>
                          <svg className="w-full h-16 overflow-visible z-10" viewBox="0 0 120 40">
                            <path
                              d="M 0,5 Q 30,6 48,32 T 84,30 T 120,4"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="1.5"
                            />
                            <circle cx="60" cy="31" r="2.5" className="fill-red-500 animate-ping" />
                            <circle cx="60" cy="31" r="1.5" fill="#ef4444" />
                            <line x1="60" y1="40" x2="60" y2="0" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="1 1" />
                          </svg>
                        </div>
                        <div className="flex justify-between bg-gray-900/90 px-3 py-1 text-[7px] border-t border-gray-800/80 z-20">
                          <span>550 - 900 MHz</span>
                          <span className="text-royal">Marker: 750 MHz | -28.4 dB</span>
                        </div>
                      </div>
                    )}
                    {project.id === 'impedance-matcher' && (
                      <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-gray-300">
                        <div className="flex justify-between items-center bg-gray-900/90 px-3 py-1 border-b border-gray-800/80 z-20">
                          <span className="font-bold text-[7px] text-gray-400">Xilinx Vivado - Wave Analyzer</span>
                          <span className="text-[6px] text-royal font-bold px-1 rounded bg-royal/10 border border-royal/20">TIMING CLOSED</span>
                        </div>
                        <div className="flex-grow p-3 space-y-2 bg-[#020617]/90 flex flex-col justify-center z-10">
                          <div className="flex items-center space-x-2">
                            <span className="w-12 text-[6px] text-gray-500 shrink-0">clk (120MHz)</span>
                            <svg className="w-full h-2" viewBox="0 0 100 10">
                              <path d="M 0,8 L 10,8 L 10,2 L 20,2 L 20,8 L 30,8 L 30,2 L 40,2 L 40,8 L 50,8 L 50,2 L 60,2 L 60,8 L 70,8 L 70,2 L 80,2 L 80,8 L 90,8 L 90,2 L 100,2" fill="none" stroke="#10b981" strokeWidth="1" />
                            </svg>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-12 text-[6px] text-gray-500 shrink-0">rst_n</span>
                            <svg className="w-full h-2" viewBox="0 0 100 10">
                              <path d="M 0,2 L 15,2 L 15,8 L 100,8" fill="none" stroke="#ef4444" strokeWidth="1" />
                            </svg>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-12 text-[6px] text-gray-500 shrink-0">data_bus [7:0]</span>
                            <svg className="w-full h-2" viewBox="0 0 100 10">
                              <path d="M 0,8 L 25,8 L 25,2 L 55,2 L 55,8 L 75,8 L 75,2 L 95,2 L 95,8 L 100,8" fill="none" stroke="#3b82f6" strokeWidth="1" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-between bg-gray-900/90 px-3 py-1 text-[7px] border-t border-gray-800/80 z-20">
                          <span>LUT Usage: 14.2%</span>
                          <span>FSM State: ACTIVE</span>
                        </div>
                      </div>
                    )}
                    {project.id === 'lora-structural-node' && (
                      <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-gray-300">
                        <div className="flex justify-between items-center bg-gray-900/90 px-3 py-1 border-b border-gray-800/80 z-20">
                          <span className="font-bold text-[7px] text-gray-400">LoRaWAN Remote Terminal</span>
                          <span className="text-[6px] text-emerald-400 font-bold px-1 rounded bg-emerald-500/10 border border-emerald-500/20">CONNECTED</span>
                        </div>
                        <div className="flex-grow p-3 bg-[#0a0f1d] grid grid-cols-2 gap-2 items-center z-10">
                          <div className="border border-gray-800 rounded p-1.5 bg-[#111827]">
                            <div className="text-[5.5px] text-gray-500 uppercase">Stress strain</div>
                            <div className="text-xs font-bold text-royal">482 μ𝜀</div>
                            <div className="text-[5.5px] text-emerald-400 font-semibold mt-0.5">&bull; NOMINAL</div>
                          </div>
                          <div className="border border-gray-800 rounded p-1.5 bg-[#111827]">
                            <div className="text-[5.5px] text-gray-500 uppercase">Battery Node</div>
                            <div className="text-xs font-bold text-emerald-500">3.82 V</div>
                            <div className="text-[5.5px] text-gray-400 mt-0.5">Discharge: -4mA</div>
                          </div>
                        </div>
                        <div className="flex justify-between bg-gray-900/90 px-3 py-1 text-[7px] border-t border-gray-800/80 z-20">
                          <span>RSSI: -92dBm</span>
                          <span>SF7 / 125kHz</span>
                        </div>
                      </div>
                    )}
                    {project.id === 'cdc-synchronizer' && (
                      <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-gray-300">
                        <div className="flex justify-between items-center bg-gray-900/90 px-3 py-1 border-b border-gray-800/80 z-20">
                          <span className="font-bold text-[7px] text-gray-400">RTL Scope - CDC Signals</span>
                          <span className="text-[6px] text-royal font-bold px-1 rounded bg-royal/10 border border-royal/20">SAMPLING</span>
                        </div>
                        <div className="flex-grow p-3 space-y-1.5 bg-[#0a0f1d] flex flex-col justify-center z-10">
                          <div className="flex items-center space-x-1">
                            <span className="w-14 text-[6px] text-gray-500 shrink-0">clk_dest (75M)</span>
                            <svg className="w-full h-2" viewBox="0 0 100 10">
                              <path d="M 0,8 L 15,8 L 15,2 L 30,2 L 30,8 L 45,8 L 45,2 L 60,2 L 60,8 L 75,8 L 75,2 L 90,2 L 90,8 L 100,8" fill="none" stroke="#a78bfa" strokeWidth="1" />
                            </svg>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-14 text-[6px] text-gray-500 shrink-0">sync_out (2FF)</span>
                            <svg className="w-full h-2" viewBox="0 0 100 10">
                              <path d="M 0,8 L 45,8 L 45,2 L 100,2" fill="none" stroke="#10b981" strokeWidth="1" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-between bg-gray-900/90 px-3 py-1 text-[7px] border-t border-gray-800/80 z-20">
                          <span>2FF Synchronizer</span>
                          <span className="text-emerald-400">SAFE DOMAIN CROSSING</span>
                        </div>
                      </div>
                    )}
                    {project.id === 'driver-drowsiness' && (
                      <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-gray-300">
                        <div className="flex justify-between items-center bg-gray-900/90 px-3 py-1 border-b border-gray-800/80 z-20">
                          <span className="font-bold text-[7px] text-gray-400">CV Pipeline - Face Guard</span>
                          <span className="text-[6px] text-red-500 font-bold px-1 rounded bg-red-500/10 border border-red-500/20 animate-pulse">WARNING: DROWSY</span>
                        </div>
                        <div className="flex-grow relative bg-[#050811] flex items-center justify-center z-10">
                          <div className="absolute inset-2 border border-red-500/40 rounded flex items-center justify-center bg-red-500/5">
                            <div className="w-10 h-10 rounded-full border border-dashed border-red-500 flex flex-col items-center justify-center">
                              <div className="flex space-x-3 mb-1">
                                <span className="w-1.5 h-0.5 bg-red-500" />
                                <span className="w-1.5 h-0.5 bg-red-500" />
                              </div>
                              <span className="w-3.5 h-1.5 rounded-b-md border-b border-red-500" />
                            </div>
                            <div className="absolute top-1 left-1.5 text-[5.5px] text-red-400 font-sans">
                              EAR: 0.18 &bull; YAWN: YES
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between bg-gray-900/90 px-3 py-1 text-[7px] border-t border-gray-800/80 z-20">
                          <span>Camera Stream 1</span>
                          <span className="text-red-400 font-bold text-[6px]">ALARM ON</span>
                        </div>
                      </div>
                    )}
                    {project.id === 'agnix-agriculture' && (
                      <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-gray-300">
                        <div className="flex justify-between items-center bg-gray-900/90 px-3 py-1 border-b border-gray-800/80 z-20">
                          <span className="font-bold text-[7px] text-gray-400">AgniX Smart Irrigation Hub</span>
                          <span className="text-[6px] text-emerald-400 font-bold px-1 rounded bg-emerald-500/10 border border-emerald-500/20">AUTO MODE</span>
                        </div>
                        <div className="flex-grow p-3 bg-[#0d140e] flex items-center justify-around z-10">
                          <div className="relative w-12 h-12 rounded-full border-2 border-emerald-500/30 flex flex-col items-center justify-center bg-[#132216]">
                            <span className="text-[5px] text-emerald-400/80 font-bold">MOISTURE</span>
                            <span className="text-[11px] font-bold text-white leading-none">68%</span>
                          </div>
                          <div className="space-y-0.5 text-[6.5px]">
                            <div className="flex justify-between w-18 border-b border-emerald-500/10 pb-0.5">
                              <span className="text-gray-500">TEMP:</span>
                              <span className="text-white font-bold">29.4°C</span>
                            </div>
                            <div className="flex justify-between w-18">
                              <span className="text-gray-500">VALVE:</span>
                              <span className="text-emerald-400 font-bold text-[5.5px] bg-emerald-500/20 px-1 rounded">OPEN</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between bg-gray-900/90 px-3 py-1 text-[7px] border-t border-gray-800/80 z-20">
                          <span>ESP32 Node 1</span>
                          <span className="text-emerald-400">PUMP ENABLED</span>
                        </div>
                      </div>
                    )}
                    {project.id === 'metastability-demo' && (
                      <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-gray-300">
                        <div className="flex justify-between items-center bg-gray-900/90 px-3 py-1 border-b border-gray-800/80 z-20">
                          <span className="font-bold text-[7px] text-gray-400">CDC Tester - Metastability Wave</span>
                          <span className="text-[6px] text-red-500 font-bold px-1 rounded bg-red-500/10 border border-red-500/20">VIOLATION</span>
                        </div>
                        <div className="flex-grow p-3 space-y-1.5 bg-[#0a0f1d] flex flex-col justify-center z-10">
                          <div className="flex items-center space-x-1">
                            <span className="w-14 text-[6px] text-gray-500 shrink-0">clk_dest</span>
                            <svg className="w-full h-2" viewBox="0 0 100 10">
                              <path d="M 0,8 L 15,8 L 15,2 L 30,2 L 30,8 L 45,8 L 45,2 L 60,2 L 60,8 L 75,8 L 75,2 L 90,2 L 90,8 L 100,8" fill="none" stroke="#94a3b8" strokeWidth="1" />
                            </svg>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-14 text-[6px] text-red-400 shrink-0">data_unsafe</span>
                            <svg className="w-full h-2" viewBox="0 0 100 10">
                              <path d="M 0,8 L 43,8 L 45,5 L 46,2 L 47,6 L 48,3 L 50,8 L 100,8" fill="none" stroke="#ef4444" strokeWidth="1" />
                              <rect x="42" y="0" width="10" height="10" className="fill-red-500/20 animate-pulse" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-between bg-gray-900/90 px-3 py-1 text-[7px] border-t border-gray-800/80 z-20">
                          <span>Setup/Hold Timing Violation</span>
                          <span className="text-red-400 font-bold text-[6px]">METASTABLE GLITCH</span>
                        </div>
                      </div>
                    )}
 
                    <span className="absolute top-2.5 right-2.5 text-[8px] font-mono bg-navy/80 text-white/90 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10 uppercase z-30">
                      {project.category}
                    </span>
                  </div>

                {/* Card Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-navy dark:text-white font-poppins group-hover:text-royal dark:group-hover:text-royal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-dark-gray dark:text-gray-400 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Technologies used */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologiesUsed.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-royal/5 dark:bg-royal/10 text-royal px-2 py-0.5 rounded border border-royal/10">
                      {tech}
                    </span>
                  ))}
                  {project.technologiesUsed.length > 3 && (
                    <span className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-500 px-1 py-0.5">
                      +{project.technologiesUsed.length - 3} more
                    </span>
                  )}
                </div>
                
                <span className="inline-flex items-center text-xs font-mono font-bold text-royal group-hover:translate-x-1 transition-transform">
                  LAUNCH TECHNICAL LOGS &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Console Overlay Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-navy/60 dark:bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-card-border/80 dark:border-gray-800 flex items-center justify-between bg-light-gray/40 dark:bg-gray-900/50">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-royal dark:text-blue-400 font-bold uppercase tracking-widest">
                  PROJECT SPECIFICATION LOG // {selectedProject.category}
                </span>
                <h3 className="text-lg font-bold text-navy dark:text-white font-poppins">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeProjectDetails}
                className="p-2 rounded-full border border-card-border hover:bg-light-gray dark:hover:bg-gray-800 transition-colors text-dark-gray dark:text-gray-300"
                aria-label="Close logs"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Console Navigation Tabs */}
            <div className="border-b border-card-border dark:border-gray-800 bg-white dark:bg-[#111827] px-6 flex space-x-4 overflow-x-auto">
              {(['overview', 'design', 'sim', 'results'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 text-xs font-mono font-bold uppercase tracking-wider border-b-2 px-1 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-royal text-royal dark:text-blue-400'
                      : 'border-transparent text-dark-gray/60 dark:text-gray-400 hover:text-royal hover:border-royal/30'
                  }`}
                >
                  {tab === 'overview' && '1. Overview'}
                  {tab === 'design' && '2. Design & Flow'}
                  {tab === 'sim' && '3. Simulations & PCB'}
                  {tab === 'results' && '4. Results & Metrics'}
                </button>
              ))}
            </div>

            {/* Modal Body / Tab Contents */}
            <div className="p-8 overflow-y-auto flex-grow space-y-6">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase">A. System Problem Statement</h4>
                      <p className="text-sm text-navy dark:text-gray-200 leading-relaxed bg-light-gray/40 dark:bg-gray-800/30 p-4 rounded-xl border border-card-border/50 dark:border-gray-800/50">
                        {selectedProject.problemStatement}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase">B. Project Objective</h4>
                      <p className="text-sm text-navy dark:text-gray-200 leading-relaxed bg-light-gray/40 dark:bg-gray-800/30 p-4 rounded-xl border border-card-border/50 dark:border-gray-800/50">
                        {selectedProject.objective}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 bg-light-gray dark:bg-gray-900/60 p-6 rounded-xl border border-card-border dark:border-gray-800">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-royal uppercase mb-2">My Contribution</h4>
                      <p className="text-xs text-dark-gray dark:text-gray-300 leading-relaxed">
                        {selectedProject.myContribution}
                      </p>
                    </div>

                    <div className="border-t border-card-border dark:border-gray-850 pt-4">
                      <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologiesUsed.map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-mono bg-royal/10 dark:bg-royal/20 text-royal px-2.5 py-1 rounded border border-royal/10 font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.references && selectedProject.references.length > 0 && (
                      <div className="border-t border-card-border dark:border-gray-850 pt-4">
                        <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase mb-2">References / Advisors</h4>
                        <div className="flex flex-col gap-1 text-xs text-dark-gray dark:text-gray-300">
                          {selectedProject.references.map((ref, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                              <span>{ref}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: DESIGN & FLOW */}
              {activeTab === 'design' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase">Engineering Approach</h4>
                      <p className="text-sm text-navy dark:text-gray-200 leading-relaxed">
                        {selectedProject.approach}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="text-[11px] font-mono font-bold text-royal uppercase">Methodology Milestones</h5>
                        <ul className="space-y-1.5 text-xs text-dark-gray dark:text-gray-300">
                          {selectedProject.methodology.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start">
                              <span className="text-royal font-bold mr-2">{sIdx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Block Diagram Vector Rendering */}
                    <div className="border border-card-border dark:border-gray-850 rounded-xl p-5 bg-[#090D16] text-[#F8FAFC] font-mono flex flex-col justify-between">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-4 block">
                        SCHEMATIC_FLOW_BLOCK: {selectedProject.category.toLowerCase().includes("antenna") || selectedProject.category.toLowerCase().includes("rf") ? "PORT_SWEEPS" : "SIGNAL_PATH"}
                      </span>
                      
                      {(() => {
                        const nodes = selectedProject.blockDiagramText
                          .split(/\s*[-<>=]*[-<>=\s]+\s*/)
                          .filter(n => n.trim() !== '');
                        
                        return (
                          <div className="text-xs py-4 flex flex-col items-center space-y-3.5 text-center">
                            {nodes.map((node, nIdx) => {
                              const label = node.replace(/[\[\]]/g, '').trim();
                              return (
                                <React.Fragment key={nIdx}>
                                  <div className="p-2.5 border border-royal/40 bg-royal/10 dark:bg-royal/5 rounded-xl flex items-center space-x-2 w-full max-w-[280px] justify-center shadow-sm">
                                    <span className="text-[9px] font-mono text-royal font-bold bg-royal/10 px-1.5 py-0.5 rounded mr-1">#{nIdx + 1}</span>
                                    <span className="font-poppins font-medium text-white/95">{label}</span>
                                  </div>
                                  {nIdx < nodes.length - 1 && (
                                    <div className="h-4 w-0.5 border-l-2 border-dashed border-royal/30" />
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        );
                      })()}

                      <span className="text-[9px] text-[#94A3B8] border-t border-gray-800 pt-2 mt-4">
                        * Refer to original engineering report for full system details.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: SIMULATIONS & PCB */}
              {activeTab === 'sim' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase">
                        {selectedProject.category.toLowerCase().includes("antenna") || selectedProject.category.toLowerCase().includes("rf") ? "Electromagnetic Simulations" : "Behavioral & Logic Simulations"}
                      </h4>
                      <p className="text-sm text-navy dark:text-gray-200 leading-relaxed bg-light-gray/40 dark:bg-gray-800/30 p-4 rounded-xl border border-card-border/50 dark:border-gray-800/50">
                        {selectedProject.simulationImageDescription}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase">PCB Design Specifications</h4>
                      <p className="text-sm text-navy dark:text-gray-200 leading-relaxed bg-light-gray/40 dark:bg-gray-800/30 p-4 rounded-xl border border-card-border/50 dark:border-gray-800/50">
                        {selectedProject.pcbDesignDescription}
                      </p>
                    </div>
                  </div>

                  {/* High quality simulation mock graphic */}
                  <div className="border border-card-border dark:border-gray-850 bg-[#0A2540]/5 dark:bg-[#111827] rounded-xl p-6 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-500 uppercase font-bold tracking-wider">
                      {selectedProject.category.toLowerCase().includes("antenna") || selectedProject.category.toLowerCase().includes("rf") 
                        ? "Simulated S-Parameters Curve (S11 Return Loss)"
                        : selectedProject.category.toLowerCase().includes("semiconductor") || selectedProject.category.toLowerCase().includes("vlsi")
                        ? "Timing Simulation Waveforms (Propagation Delay)"
                        : "Model Accuracy & Diagnostic Learning Curve"}
                    </span>
                    
                    <div className="h-48 my-4 relative flex items-end">
                      {/* Sim chart gridlines */}
                      <div className="absolute inset-0 flex flex-col justify-between border-b border-l border-dark-gray/30">
                        {[0, 1, 2, 3].map((g) => (
                          <div key={g} className="w-full border-t border-dark-gray/10 border-dashed h-0" />
                        ))}
                      </div>
                      
                      {/* Left axis indicators */}
                      <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[9px] font-mono text-dark-gray/50">
                        {selectedProject.category.toLowerCase().includes("antenna") || selectedProject.category.toLowerCase().includes("rf") ? (
                          <>
                            <span>0 dB</span>
                            <span>-10 dB</span>
                            <span>-20 dB</span>
                            <span>-30 dB</span>
                          </>
                        ) : selectedProject.category.toLowerCase().includes("semiconductor") || selectedProject.category.toLowerCase().includes("vlsi") ? (
                          <>
                            <span>1.8 V</span>
                            <span>1.2 V</span>
                            <span>0.6 V</span>
                            <span>0.0 V</span>
                          </>
                        ) : (
                          <>
                            <span>100%</span>
                            <span>75%</span>
                            <span>50%</span>
                            <span>25%</span>
                          </>
                        )}
                      </div>

                      {/* Dynamic simulation plot line (drawn using SVG overlay) */}
                      <svg className="w-full h-full absolute inset-0 z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {selectedProject.category.toLowerCase().includes("antenna") || selectedProject.category.toLowerCase().includes("rf") ? (
                          <>
                            <path
                              d="M 0,10 Q 20,15 35,90 T 50,20 T 70,95 T 100,10"
                              className="fill-none stroke-royal stroke-2"
                            />
                            <circle cx="35" cy="90" r="2" className="fill-rose-500" />
                            <circle cx="70" cy="95" r="2" className="fill-rose-500" />
                          </>
                        ) : selectedProject.category.toLowerCase().includes("semiconductor") || selectedProject.category.toLowerCase().includes("vlsi") ? (
                          <>
                            {/* Clock wave */}
                            <path
                              d="M 0,80 L 20,80 L 20,20 L 40,20 L 40,80 L 60,80 L 60,20 L 80,20 L 80,80 L 100,80"
                              className="fill-none stroke-emerald-500/40 stroke-1"
                            />
                            {/* Signal wave with delay */}
                            <path
                              d="M 0,80 L 25,80 L 28,25 L 63,25 L 66,80 L 100,80"
                              className="fill-none stroke-royal stroke-2"
                            />
                            {/* Metastable region highlight */}
                            <rect x="20" y="5" width="10" height="90" className="fill-rose-500/10 stroke-rose-500/30 stroke-[0.5] stroke-dasharray-[1_1]" />
                          </>
                        ) : (
                          <>
                            {/* Training Accuracy line */}
                            <path
                              d="M 0,95 Q 20,45 50,25 T 100,15"
                              className="fill-none stroke-royal stroke-2"
                            />
                            {/* Validation Accuracy line */}
                            <path
                              d="M 0,95 Q 20,55 50,30 T 100,22"
                              className="fill-none stroke-emerald-500 stroke-1.5"
                            />
                            <circle cx="100" cy="22" r="2" className="fill-emerald-500" />
                          </>
                        )}
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] font-mono text-dark-gray/50 pt-2">
                      {selectedProject.category.toLowerCase().includes("antenna") || selectedProject.category.toLowerCase().includes("rf") ? (
                        <>
                          <span>550 MHz</span>
                          <span>725 MHz</span>
                          <span>900 MHz</span>
                        </>
                      ) : selectedProject.category.toLowerCase().includes("semiconductor") || selectedProject.category.toLowerCase().includes("vlsi") ? (
                        <>
                          <span>0.0 ns</span>
                          <span>5.0 ns</span>
                          <span>10.0 ns</span>
                        </>
                      ) : (
                        <>
                          <span>Epoch 1</span>
                          <span>Epoch 25</span>
                          <span>Epoch 50</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: RESULTS & METRICS */}
              {activeTab === 'results' && (
                <div className="space-y-8">
                  
                  {/* Summary performance numbers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {selectedProject.performanceMetrics.map((met, idx) => (
                      <div key={idx} className="bg-royal/5 dark:bg-royal/10 border border-royal/10 rounded-lg p-4 text-center">
                        <TrendingUp className="h-4 w-4 text-royal mx-auto mb-1.5" />
                        <span className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-400 block uppercase">
                          {met.metric}
                        </span>
                        <span className="text-sm font-extrabold text-royal font-mono mt-1 block">
                          {met.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="space-y-4 lg:col-span-2">
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase flex items-center">
                          <Settings2 className="h-3.5 w-3.5 mr-1.5 text-royal animate-spin" />
                          Experimental Results & Laboratory Setup
                        </h4>
                        <p className="text-sm text-navy dark:text-gray-200 leading-relaxed bg-light-gray/40 dark:bg-gray-800/30 p-4 rounded-xl border border-card-border/50 dark:border-gray-800/50">
                          {selectedProject.results}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-card-border dark:border-gray-800/80 rounded-xl p-5 bg-[#F8FAFC] dark:bg-gray-800/30">
                          <h5 className="text-[11px] font-mono font-bold text-rose-500 uppercase flex items-center mb-2">
                            <ShieldAlert className="h-4 w-4 mr-1" />
                            Hardware Challenges
                          </h5>
                          <p className="text-xs text-dark-gray dark:text-gray-300 leading-relaxed">
                            {selectedProject.challenges}
                          </p>
                        </div>
                        <div className="border border-card-border dark:border-gray-800/80 rounded-xl p-5 bg-[#F8FAFC] dark:bg-gray-800/30">
                          <h5 className="text-[11px] font-mono font-bold text-emerald-500 uppercase flex items-center mb-2">
                            <ShieldAlert className="h-4 w-4 mr-1 transform rotate-180" />
                            Implemented Solutions
                          </h5>
                          <p className="text-xs text-dark-gray dark:text-gray-300 leading-relaxed">
                            {selectedProject.solutions}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-light-gray dark:bg-gray-900/60 p-6 rounded-xl border border-card-border dark:border-gray-800 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-mono font-bold text-royal uppercase mb-2">Future Scope</h4>
                        <p className="text-xs text-dark-gray dark:text-gray-300 leading-relaxed">
                          {selectedProject.futureScope}
                        </p>
                      </div>

                      <div className="border-t border-card-border dark:border-gray-850 pt-4 mt-6">
                        <h4 className="text-xs font-mono font-bold text-dark-gray/60 dark:text-gray-500 uppercase mb-2">Hardware Fabrication Note</h4>
                        <p className="text-[11px] text-dark-gray/80 dark:text-gray-400 leading-relaxed">
                          {selectedProject.hardwarePhotoDescription}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer / Navigation Controls */}
            <div className="p-6 border-t border-card-border/80 dark:border-gray-800/80 flex flex-wrap justify-between items-center bg-light-gray/40 dark:bg-gray-900/50 gap-4">
              <span className="text-[10px] font-mono text-dark-gray/50 dark:text-gray-500">
                ASHUTOSH_NIMBALKAR_ECE_PORTFOLIO_V1
              </span>
              
              <div className="flex items-center space-x-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold border border-card-border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg hover:bg-light-gray dark:hover:bg-gray-750 text-dark-gray dark:text-white transition-colors"
                  >
                    <GithubIcon className="h-4 w-4 mr-2" />
                    GitHub Repository
                  </a>
                )}
                {selectedProject.reportUrl && (
                  <a
                    href={selectedProject.reportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold bg-[#0A2540] dark:bg-white text-white dark:text-[#0A2540] rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Technical Report
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold bg-royal text-white rounded-lg hover:bg-royal/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demonstration
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
