import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Github, Linkedin, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian py-10 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-200 font-bold text-xs sm:text-sm">
              <Terminal className="w-3.5 h-3.5 text-cyan-cyber" />
              <span>{PERSONAL_INFO.handle}</span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="text-slate-300 font-normal">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {PERSONAL_INFO.institution} • Red Teaming • Blue Teaming • Web AppSec • GRC
            </p>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded border border-slate-800 bg-obsidian-surface hover:text-cyan-cyber hover:border-cyan-cyber/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded border border-slate-800 bg-obsidian-surface hover:text-cyan-cyber hover:border-cyan-cyber/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1.5 rounded border border-slate-800 bg-obsidian-surface hover:text-cyan-cyber hover:border-cyan-cyber/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="px-2.5 py-1 rounded border border-slate-800 bg-obsidian-surface hover:text-cyan-cyber hover:border-cyan-cyber/40 transition-colors text-[11px]"
            >
              CV.pdf
            </a>
          </div>

        </div>

        {/* Security & Colophon Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Astro, React, TypeScript, and Tailwind CSS.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.securityTxtUrl}
              className="hover:text-cyan-cyber transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-emerald-signal" />
              <span>/.well-known/security.txt</span>
            </a>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-signal"></span>
              Zero-Trust Architecture
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
