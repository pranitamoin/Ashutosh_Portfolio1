'use client';

import React, { useEffect, useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { BarChart3, Award, FileText, CalendarRange, Users2, Hourglass } from 'lucide-react';

// Counter sub-component for count-up animation
function Counter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (value === 0) return;

    const startTimestamp = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef} className="font-num">{count}</span>;
}

const STAT_ICONS: { [key: string]: React.ReactNode } = {
  "Projects Completed": <BarChart3 className="h-5 w-5 text-royal" />,
  "Research Papers Published": <FileText className="h-5 w-5 text-royal" />,
  "Conference Presentations": <Award className="h-5 w-5 text-royal" />,
  "Months of R&D Internships": <CalendarRange className="h-5 w-5 text-royal" />,
  "IEEE Leadership Roles": <Users2 className="h-5 w-5 text-royal" />,
  "Simulation Hours logged": <Hourglass className="h-5 w-5 text-royal" />
};

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 bg-light-gray dark:bg-[#0E1524] border-y border-card-border/60 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400">TELEMETRY CONSOLE</span>
            <h2 className="text-3xl font-extrabold text-navy dark:text-white">Engineering Dashboard</h2>
          </div>
          <p className="text-sm font-mono text-dark-gray/60 dark:text-gray-400 mt-2 md:mt-0">
            System status: <span className="text-emerald-500 font-bold">ONLINE</span> | Logged sessions: 582
          </p>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Subtle design element: corner grid lines */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-royal/10 dark:border-royal/5 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-dark-gray/50 dark:text-gray-500 font-semibold tracking-wider">
                  REG_0x0{idx + 1}
                </span>
                <div className="p-2 rounded-lg bg-royal/5 dark:bg-royal/10 border border-royal/10">
                  {STAT_ICONS[stat.label] || <BarChart3 className="h-5 w-5 text-royal" />}
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-4xl font-extrabold text-navy dark:text-white tracking-tight flex items-baseline">
                  <Counter value={stat.value} />
                  <span className="text-royal ml-0.5">{stat.suffix}</span>
                </p>
                <h3 className="text-sm font-semibold text-dark-gray dark:text-gray-300 font-poppins">
                  {stat.label}
                </h3>
              </div>

              {/* Graphical simulation wave background */}
              <div className="h-8 mt-4 flex items-end justify-between opacity-30 dark:opacity-15">
                {[...Array(12)].map((_, barIdx) => {
                  // Create pseudo-random heights that align nicely
                  const heights = [30, 45, 60, 40, 25, 55, 75, 50, 35, 70, 85, 40];
                  const height = heights[(barIdx + idx * 3) % heights.length];
                  return (
                    <div
                      key={barIdx}
                      style={{ height: `${height}%` }}
                      className="w-1.5 bg-royal rounded-t-sm"
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
