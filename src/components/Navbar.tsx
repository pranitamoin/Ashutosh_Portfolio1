'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Cpu } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Memberships', href: '#memberships' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check if page scrolled past 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#090D16]/95 border-b border-card-border/80 shadow-sm backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Reading Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-royal transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center space-x-2 text-navy dark:text-white font-bold text-lg tracking-wider">
          <Cpu className="h-6 w-6 text-royal animate-pulse" />
          <span className="font-poppins uppercase tracking-widest text-[15px]">Ashutosh Nimbalkar</span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-0.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[12px] font-medium tracking-wide text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal px-2.5 py-1.5 rounded-md transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-card-border hover:bg-light-gray dark:hover:bg-gray-800 transition-colors text-dark-gray dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex items-center lg:hidden space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-card-border hover:bg-light-gray dark:hover:bg-gray-800 transition-colors text-dark-gray dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-dark-gray dark:text-gray-300 hover:text-royal transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 right-0 bg-white dark:bg-[#090D16] border-b border-card-border shadow-lg py-4 transition-all duration-200">
          <div className="flex flex-col space-y-2 px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[14px] font-medium text-dark-gray hover:text-royal dark:text-gray-300 dark:hover:text-royal py-2 border-b border-card-border/40 last:border-0 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
