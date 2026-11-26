import React from 'react';
import { PERSONAL_INFO, MILESTONES } from '../data/portfolioData';
import { Shield, Award, CheckCircle2 } from 'lucide-react';

const pillars = [
  { name: "Red Teaming & Exploitation", desc: "Vulnerability analysis, offensive payload crafting, and privilege escalation." },
  { name: "Blue Teaming & Detection", desc: "Threat hunting, packet stream analysis, and OSINT." },
  { name: "Web Security (AppSec)", desc: "OWASP Top 10 vulnerability assessment, identification, and mitigation." },
  { name: "GRC & Security Standards", desc: "Risk assessment frameworks and security policies." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="pb-4 border-b border-slate-800 flex items-baseline justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-cyber mb-1">
              <span className="text-slate-400">01.</span>
              <span>BACKGROUND_&_EXPERIENCE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-50">
              About {PERSONAL_INFO.name}
            </h2>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-slate-400">
            Hands-on Exposure & Achievements
          </span>
        </div>

        {/* Bio Intro Statement */}
        <div className="max-w-4xl">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I am a Computer Science undergraduate at <strong className="text-slate-100 font-semibold">City College of Angeles</strong> committed to developing practical offensive and defensive capabilities. My journey focuses on experiencing hands-on penetration testing and web vulnerability exploitation to engineer resilient systems.
          </p>
        </div>

        {/* 4 Core Pillars in One Balanced Line */}
        <div className="space-y-3">
          <div className="font-mono text-xs text-slate-400 font-medium">
            CORE COMPETENCIES & DOMAINS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                className="p-4 rounded-xl border border-slate-800 bg-obsidian-surface flex flex-col justify-between hover:border-slate-700/80 transition-all shadow-sm"
              >
                <div>
                  <div className="font-mono text-xs text-cyan-cyber font-semibold flex items-center gap-1.5 mb-2">
                    <Shield className="w-3.5 h-3.5 text-cyan-cyber shrink-0" />
                    <span>{pillar.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Records & Hackathons Placed Below */}
        <div className="space-y-4 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <div className="font-mono text-xs text-slate-300 font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Competition Record & Hackathons</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
              5 Verified Records
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {MILESTONES.map((m) => (
              <div
                key={m.event}
                className="rounded-xl border border-slate-800 bg-obsidian-surface p-4 flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono text-[10px] text-slate-400">{m.year}</span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded font-semibold whitespace-nowrap ${
                        m.highlight
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : m.badge === 'Student-Coach'
                            ? 'bg-emerald-500/10 text-emerald-signal border border-emerald-500/30'
                            : 'bg-cyan-muted text-cyan-cyber border border-cyan-cyber/30'
                      }`}
                    >
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-100 text-xs sm:text-sm leading-snug">
                    {m.event}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.details}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Verified Result</span>
                  <span className="text-emerald-signal flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Validated
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

    