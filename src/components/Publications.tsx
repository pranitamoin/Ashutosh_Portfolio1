'use client';

import React, { useState } from 'react';
import { portfolioData, Publication } from '../data/portfolioData';
import { FileText, Copy, Check, ExternalLink, Calendar, Search } from 'lucide-react';

export default function Publications() {
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);
  const [copiedPubId, setCopiedPubId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAbstract = (id: string) => {
    setExpandedPubId(expandedPubId === id ? null : id);
  };

  const copyCitation = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPubId(id);
    setTimeout(() => setCopiedPubId(null), 2500);
  };

  const filteredPublications = portfolioData.publications.filter((pub) => {
    const query = searchQuery.toLowerCase();
    return (
      pub.title.toLowerCase().includes(query) ||
      pub.abstract.toLowerCase().includes(query) ||
      pub.keywords.some((kw) => kw.toLowerCase().includes(query))
    );
  });

  return (
    <section id="publications" className="py-24 bg-light-gray dark:bg-[#0E1524] border-y border-card-border/60 dark:border-gray-800/80">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">RESEARCH ARCHIVE</span>
          <h2 className="text-3xl font-extrabold text-navy dark:text-white font-poppins">Research Publications</h2>
          <p className="text-sm text-dark-gray/80 dark:text-gray-400 max-w-xl mx-auto">
            Peer-reviewed research and symposium contributions in computational electromagnetics and RF hardware systems.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="absolute left-3 top-7.5 h-4.5 w-4.5 text-dark-gray/40 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search by keywords, titles, abstracts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs border border-card-border dark:border-gray-800 bg-white dark:bg-[#111827] text-[#0A2540] dark:text-white rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-all"
            />
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* Info Column */}
                <div className="space-y-2 flex-grow">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-royal font-bold uppercase">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{pub.venue} ({pub.year})</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-[#0A2540] dark:text-white font-poppins leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-[#334155] dark:text-gray-450 mt-1">
                    <span className="font-semibold text-royal/90 dark:text-blue-450 font-mono text-[9px] uppercase tracking-wider mr-1">Authors:</span>
                    {pub.authors}
                  </p>
                  


                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.keywords.map((kw, kwIdx) => (
                      <span key={kwIdx} className="text-[10px] font-mono bg-light-gray dark:bg-gray-800 text-dark-gray/70 dark:text-gray-400 px-2 py-0.5 rounded border border-card-border/40 dark:border-gray-800/40">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Grid */}
                <div className="flex md:flex-col items-center justify-start gap-2.5 md:min-w-[170px] pt-1.5 md:pt-0">
                  <button
                    onClick={() => toggleAbstract(pub.id)}
                    className="w-full text-center py-2 text-xs font-mono font-bold border border-card-border dark:border-gray-700 hover:bg-light-gray dark:hover:bg-gray-800 rounded-lg text-dark-gray dark:text-white transition-colors"
                  >
                    {expandedPubId === pub.id ? 'Hide Abstract' : 'Read Abstract'}
                  </button>

                  <button
                    onClick={() => copyCitation(pub.id, pub.citation)}
                    className="w-full py-2 text-xs font-mono font-bold border border-royal/20 hover:border-royal/50 bg-royal/5 hover:bg-royal/10 rounded-lg text-royal transition-colors flex items-center justify-center space-x-1.5"
                  >
                    {copiedPubId === pub.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied Citation</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Abstract Dropdown Content */}
              {expandedPubId === pub.id && (
                <div className="mt-6 border-t border-card-border/60 dark:border-gray-800/80 pt-4 space-y-4 animate-[slideDown_0.2s_ease-out]">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-500 uppercase font-semibold">Abstract</span>
                    <p className="text-xs text-dark-gray dark:text-gray-300 leading-relaxed text-justify">
                      {pub.abstract}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center justify-between text-[11px] font-mono border-t border-card-border/40 dark:border-gray-800/40 pt-4 mt-2">
                    <span className="text-dark-gray/60 dark:text-gray-500">
                      DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-royal hover:underline font-bold">{pub.doi}</a>
                    </span>
                    
                    <div className="flex items-center space-x-4">
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert("PDF download started! (Demonstration Only)"); }}
                        className="inline-flex items-center text-royal font-bold hover:underline"
                      >
                        <FileText className="h-3.5 w-3.5 mr-1" />
                        Download PDF
                      </a>
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert("Opening presentation slides... (Demonstration Only)"); }}
                        className="inline-flex items-center text-royal font-bold hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Slides
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="text-center py-12 text-dark-gray/60 dark:text-gray-500 text-xs font-mono">
              No publications matched your current filter parameter.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
