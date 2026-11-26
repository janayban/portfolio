import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';
import { ChevronRight, FileText, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-28 md:pb-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-obsidian-surface text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-signal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-signal"></span>
              </span>
              <span className="text-emerald-signal font-medium">{PERSONAL_INFO.status}</span>
            </div>

            {/* Clear, High-Impact Headline */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-50 leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-sm sm:text-base text-cyan-cyber font-medium flex flex-wrap items-center gap-2">
                <span>Cybersecurity Enthusiast & CS Student</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300 text-xs sm:text-sm font-sans flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  {PERSONAL_INFO.institution}
                </span>
              </p>
            </div>

            {/* Bio text updated per user request */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Focused on <strong className="text-slate-100 font-semibold">Red Teaming, Blue Teaming, Web Security, and GRC</strong>. 
              As a Computer Science student at City College of Angeles and champion of the 2026 Cisco Ethical Hacker CTF, experiencing hands-on penetration testing and web vulnerability exploitation.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  if (window.location.hash) {
                    window.history.replaceState(null, '', window.location.pathname + window.location.search);
                  }
                }}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-cyan-cyber hover:bg-cyan-400 text-obsidian font-semibold text-xs sm:text-sm transition-all shadow-md shadow-cyan-cyber/10"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  if (window.location.hash) {
                    window.history.replaceState(null, '', window.location.pathname + window.location.search);
                  }
                }}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg border border-slate-800 bg-obsidian-surface hover:bg-obsidian-hover hover:border-slate-700 text-slate-100 font-medium text-xs sm:text-sm transition-all"
              >
                <span>Skills & Certs</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="MIRANDA-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-obsidian text-slate-300 hover:text-cyan-cyber text-xs sm:text-sm font-mono transition-all"
                title="Download CV"
              >
                <FileText className="w-4 h-4 text-cyan-cyber" />
                <span>CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Enlarged 2x2 Formal Portrait Showcase & Interactive Terminal */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Prominent, Enlarged 2x2 Formal Portrait Card */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-obsidian-surface shadow-xl flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shrink-0 shadow-lg">
                <img
                  src={PERSONAL_INFO.image}
                  alt="John Ivan Miranda - Formal Portrait"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-bold text-slate-100 text-sm sm:text-base font-mono">
                    Exploit Unit: ban
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-signal"></span>
                </div>
                <p className="text-xs text-cyan-cyber font-mono font-medium leading-relaxed">
                  Competitions: Capture the Flag (CTF) & Hackathon
                </p>
                <div className="pt-0.5 flex items-center justify-center sm:justify-start gap-1.5 text-[11px] font-mono">
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 text-emerald-signal flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-signal animate-pulse"></span>
                    Active Learner
                  </span>
                </div>
              </div>
            </div>

            {/* Live Interactive Terminal */}
            <InteractiveTerminal />

          </div>

        </div>
      </div>
    </section>
  );
}
