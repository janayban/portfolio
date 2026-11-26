import React, { useState } from 'react';
import { SKILL_GROUPS, CERTIFICATIONS, LAB_ACTIVITIES } from '../data/portfolioData';
import { Shield, Award, CheckCircle2, Database, ExternalLink, Terminal, Code2 } from 'lucide-react';

export default function SkillsLabsSection() {
  const [showLabs, setShowLabs] = useState(false);
  const [labFilter, setLabFilter] = useState<'All' | 'Midterms' | 'Finals'>('All');

  const filteredLabs = labFilter === 'All'
    ? LAB_ACTIVITIES
    : LAB_ACTIVITIES.filter(l => l.category === labFilter);

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-cyber mb-1">
              <span className="text-slate-400">04.</span>
              <span>TECHNICAL_COMPETENCIES</span>
              <span className="text-slate-400">//</span>
              <span>VERIFIED_CREDENTIALS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-50">
              Skills, Credentials & Labs
            </h2>
          </div>

          {/* Toggle between Core Matrix & Academic Labs */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowLabs(false)}
              className={`font-mono text-xs px-3 py-1 rounded transition-all ${
                !showLabs
                  ? 'bg-cyan-muted text-cyan-cyber border border-cyan-cyber/40 font-medium'
                  : 'bg-obsidian-surface text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              Core Matrix & Certs
            </button>
            <button
              type="button"
              onClick={() => setShowLabs(true)}
              className={`font-mono text-xs px-3 py-1 rounded transition-all flex items-center gap-1.5 ${
                showLabs
                  ? 'bg-cyan-muted text-cyan-cyber border border-cyan-cyber/40 font-medium'
                  : 'bg-obsidian-surface text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <Database className="w-3 h-3" />
              <span>7ANALYTICS Labs ({LAB_ACTIVITIES.length})</span>
            </button>
          </div>
        </div>

        {/* View 1: Core Skills & Badges */}
        {!showLabs && (
          <div className="space-y-8">
            
            {/* 3-Column Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SKILL_GROUPS.map((group, idx) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-slate-800 bg-obsidian-surface p-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-200 font-semibold border-b border-slate-800/80 pb-2">
                      {idx === 0 && <Shield className="w-4 h-4 text-cyan-cyber" />}
                      {idx === 1 && <Terminal className="w-4 h-4 text-emerald-signal" />}
                      {idx === 2 && <Code2 className="w-4 h-4 text-sky-400" />}
                      <span>{group.title}</span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {group.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-cyber shrink-0"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Verified via labs</span>
                    <span className="text-emerald-signal flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Digital Credential Badges */}
            <div className="rounded-lg border border-slate-800 bg-obsidian-surface p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-slate-100">
                    Recognized Digital Badges & Certifications
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  Cisco & Credly Verified
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-800/80 bg-obsidian/80 hover:border-slate-700 p-3 flex flex-col items-center text-center transition-all"
                  >
                    <div className="w-14 h-14 mb-2 flex items-center justify-center p-1 rounded bg-slate-900/60 border border-slate-800">
                      <img
                        src={cert.file}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain filter hover:brightness-110 transition-all"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs font-semibold text-slate-200">
                      {cert.title}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* View 2: Academic Telemetry & 7ANALYTICS Labs */}
        {showLabs && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400 font-mono">
                Academic Telemetry: 7ANALYTICS Laboratory Tasks
              </p>
              <div className="flex gap-1.5 font-mono text-xs">
                {(['All', 'Midterms', 'Finals'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setLabFilter(filter)}
                    className={`px-2.5 py-0.5 rounded text-[11px] transition-colors ${
                      labFilter === filter
                        ? 'bg-cyan-muted text-cyan-cyber border border-cyan-cyber/40'
                        : 'bg-obsidian-surface text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLabs.map((lab) => (
                <div
                  key={lab.id}
                  className="rounded-lg border border-slate-800 bg-obsidian-surface p-4 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-cyan-cyber px-2 py-0.5 rounded border border-cyan-cyber/30 bg-cyan-muted">
                        {lab.category}
                      </span>
                      <span className="text-slate-400">{lab.period}</span>
                    </div>

                    <h4 className="font-bold text-slate-100 text-xs sm:text-sm">
                      {lab.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lab.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {lab.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-slate-800 bg-obsidian text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">Google Drive</span>
                    <a
                      href={lab.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-cyan-cyber hover:text-cyan-300 border border-cyan-cyber/30 px-2 py-0.5 rounded bg-cyan-muted transition-colors"
                    >
                      <span>View File</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
