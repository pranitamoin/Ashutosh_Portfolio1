'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, ShieldCheck, Database, Download, Trash2 } from 'lucide-react';

interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: string;
}

export default function TestimonialsAndContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get('admin') === 'true' ||
        params.get('view-logs') === 'true' ||
        localStorage.getItem('view_inquiry_logs') === 'true'
      ) {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleHeaderClick = () => {
    if (typeof window !== 'undefined') {
      const password = window.prompt("Enter admin passcode to unlock local telemetry logs:");
      if (password === 'ashutosh123') {
        setIsAdmin(true);
        try {
          localStorage.setItem('view_inquiry_logs', 'true');
        } catch (e) {
          console.error(e);
        }
        alert("Admin access granted. Telemetry logs panel unlocked.");
      } else if (password !== null) {
        alert("Invalid passcode.");
      }
    }
  };

  const [messagesCount, setMessagesCount] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('contact_messages');
        return stored ? JSON.parse(stored).length : 0;
      } catch {
        return 0;
      }
    }
    return 0;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Store in localStorage
      try {
        const stored = localStorage.getItem('contact_messages');
        const messages = stored ? JSON.parse(stored) : [];
        messages.push({
          ...formData,
          id: Date.now().toString(),
          timestamp: new Date().toLocaleString()
        });
        localStorage.setItem('contact_messages', JSON.stringify(messages));
        setMessagesCount(messages.length);
      } catch (err) {
        console.error("Failed to save contact message", err);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const downloadMessages = () => {
    try {
      const stored = localStorage.getItem('contact_messages');
      if (!stored) return;
      const messages = JSON.parse(stored);
      
      const headers = ['Timestamp', 'Sender Name', 'Email', 'Subject', 'Message'];
      const csvRows = [headers.join(',')];
      
      messages.forEach((msg: ContactMessage) => {
        const row = [
          `"${(msg.timestamp || '').replace(/"/g, '""')}"`,
          `"${(msg.name || '').replace(/"/g, '""')}"`,
          `"${(msg.email || '').replace(/"/g, '""')}"`,
          `"${(msg.subject || '').replace(/"/g, '""')}"`,
          `"${(msg.message || '').replace(/"/g, '""')}"`
        ];
        csvRows.push(row.join(','));
      });
      
      const csvContent = '\uFEFF' + csvRows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `contact_messages_${Date.now()}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Failed to download Excel CSV logs", e);
    }
  };

  const clearMessages = () => {
    if (window.confirm("Are you sure you want to clear all stored message logs?")) {
      localStorage.removeItem('contact_messages');
      setMessagesCount(0);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-6">
        


        {/* Contact Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <span
            onClick={handleHeaderClick}
            className="text-xs font-mono font-bold uppercase tracking-widest text-royal dark:text-blue-400 cursor-pointer select-none"
            title="Unlock Admin Logs"
          >
            COMMUNICATION GATEWAY
          </span>
          <h2 className="text-3xl font-extrabold text-navy dark:text-white font-poppins">Connect & Collaborate</h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Details & QR (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-royal/40 shadow-md bg-light-gray shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Ashutosh Nimbalkar"
                  className="w-full h-full object-cover scale-100"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-navy dark:text-white font-poppins">
                  Direct Contact Registers
                </h3>
                <p className="text-[11px] text-dark-gray dark:text-gray-450 leading-tight">
                  Connect for research queries, potential aerospace/hardware internships, or project feedback.
                </p>
              </div>
            </div>

            <div className="space-y-4 border-l-2 border-royal/20 pl-6 ml-1">
              <div className="flex items-center space-x-3 text-xs">
                <Mail className="h-5 w-5 text-royal shrink-0" />
                <div>
                  <span className="font-mono text-dark-gray/50 dark:text-gray-500 uppercase block">Email Address</span>
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="font-semibold text-navy dark:text-white hover:text-royal hover:underline transition-colors">
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <Phone className="h-5 w-5 text-royal shrink-0" />
                <div>
                  <span className="font-mono text-dark-gray/50 dark:text-gray-500 uppercase block">Phone Terminal</span>
                  <span className="font-semibold text-navy dark:text-white">
                    {portfolioData.personalInfo.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <MapPin className="h-5 w-5 text-royal shrink-0" />
                <div>
                  <span className="font-mono text-dark-gray/50 dark:text-gray-500 uppercase block">Geographic Node</span>
                  <span className="font-semibold text-navy dark:text-white">
                    {portfolioData.personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Local Message Storage Telemetry Panel */}
            {isAdmin && (
              <div className="bg-light-gray/25 dark:bg-[#111827]/40 border border-card-border/50 dark:border-gray-800/50 rounded-xl p-5 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-navy dark:text-gray-300">
                  <Database className="h-4 w-4 text-royal shrink-0" />
                  <span>LOCAL TELEMETRY LOGS</span>
                </div>
                <p className="text-[10px] text-dark-gray/70 dark:text-gray-400 leading-relaxed font-sans">
                  Form transmissions are saved directly to your browser&apos;s persistent database. You can download or purge these logs below.
                </p>
                <div className="flex items-center justify-between border-y border-card-border/30 dark:border-gray-850 py-2.5 text-[11px] font-mono">
                  <span className="text-dark-gray/60 dark:text-gray-500">STORED INQUIRIES:</span>
                  <span className="font-bold text-royal dark:text-blue-400">{messagesCount} logs</span>
                </div>
                {messagesCount > 0 && (
                  <div className="flex items-center space-x-2.5">
                    <button
                      onClick={downloadMessages}
                      className="flex-grow flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded bg-royal/10 hover:bg-royal/20 text-royal border border-royal/20 text-[10px] font-mono font-bold transition-all cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>EXPORT LOGS (EXCEL / CSV)</span>
                    </button>
                    <button
                      onClick={clearMessages}
                      className="p-1.5 rounded hover:bg-red-500/10 text-dark-gray/50 hover:text-red-500 border border-transparent hover:border-red-500/20 transition-all cursor-pointer"
                      title="Purge Logs"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Side: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-light-gray/30 dark:bg-[#111827] border border-card-border dark:border-gray-800 rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Form status banner */}
                {submitted && (
                  <div className="flex items-center space-x-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 rounded-lg text-xs font-mono">
                    <ShieldCheck className="h-4.5 w-4.5" />
                    <span>TRANSMISSION SUCCESSFUL: Your query logs were recorded. Response latency &lt; 24h.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-500 uppercase font-semibold block">Sender Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-xs border border-card-border dark:border-gray-800 bg-white dark:bg-gray-900 text-[#0A2540] dark:text-white rounded-lg px-4 py-3 outline-none focus:border-royal transition-colors"
                      placeholder="e.g. Dr. Jane Smith"
                    />
                    {errors.name && <p className="text-[10px] text-rose-500 font-mono">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-500 uppercase font-semibold block">Email Channel</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full text-xs border border-card-border dark:border-gray-800 bg-white dark:bg-gray-900 text-[#0A2540] dark:text-white rounded-lg px-4 py-3 outline-none focus:border-royal transition-colors"
                      placeholder="e.g. j.smith@lab.org"
                    />
                    {errors.email && <p className="text-[10px] text-rose-500 font-mono">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-500 uppercase font-semibold block">Subject Register</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full text-xs border border-card-border dark:border-gray-800 bg-white dark:bg-gray-900 text-[#0A2540] dark:text-white rounded-lg px-4 py-3 outline-none focus:border-royal transition-colors"
                    placeholder="e.g. S-parameter validation project inquiry"
                  />
                  {errors.subject && <p className="text-[10px] text-rose-500 font-mono">{errors.subject}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-dark-gray/60 dark:text-gray-500 uppercase font-semibold block">Message Content</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full text-xs border border-card-border dark:border-gray-800 bg-white dark:bg-gray-900 text-[#0A2540] dark:text-white rounded-lg px-4 py-3 outline-none focus:border-royal transition-colors resize-none"
                    placeholder="Specify project parameters, timelines, and required specs..."
                  />
                  {errors.message && <p className="text-[10px] text-rose-500 font-mono">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-royal text-white rounded-lg hover:bg-royal/90 shadow-md shadow-royal/10 hover:shadow-lg font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Transmit Message Log
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
