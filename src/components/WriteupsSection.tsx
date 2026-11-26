import React, { useState } from 'react';
import { WRITEUPS, type Writeup } from '../data/portfolioData';
import { Clock, ChevronDown, ChevronUp, ShieldCheck, Terminal, Award } from 'lucide-react';

export default function WriteupsSection() {
  const [activeCat, setActiveCat] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(WRITEUPS[0]?.id || null);

  const categories = ['All', 'CTF', 'Web', 'Forensics', 'Network'];

  const filtered = activeCat === 'All'
    ? WRITEUPS
    : WRITEUPS.filter(w => w.category === activeCat);

  const toggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const getBadgeStyle = (cat: Writeup['category']) => {
    switch (cat) {
      case 'CTF':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'Web':
        return 'text-cyan-cyber border-cyan-cyber/30 bg-cyan-muted';
      case 'Forensics':
        return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'Network':
        return 'text-emerald-signal border-emerald-500/30 bg-emerald-500/10';
      default:
        return 'text-slate-300 border-slate-700 bg-slate-800/40';
    }
  };

  return (
    <section id="writeups" className="py-12 sm:py-16 border-b border-slate-800 bg-[#0B101D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-cyber mb-1">
              <span className="text-slate-400">03.</span>
              <span>SECURITY_DISCLOSURES</span>
              <span className="text-slate-400">//</span>
              <span>TECHNICAL_POSTMORTEMS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-50">
              CTF Write-ups & Research Log
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                className={`font-mono text-xs px-3 py-1 rounded transition-all whitespace-nowrap ${
                  activeCat === cat
                    ? 'bg-cyan-muted text-cyan-cyber border border-cyan-cyber/40 font-medium'
                    : 'bg-obsidian-surface text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Changelog-Style List */}
        <div className="space-y-3">
          {filtered.map((item) => {
            const isExpanded = expandedId === item.id;
            const badgeStyle = getBadgeStyle(item.category);

            return (
              <div
                key={item.id}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-cyan-cyber/40 bg-obsidian-surface shadow-lg'
                    : 'border-slate-800 bg-obsidian-surface/70 hover:border-slate-700'
                }`}
              >
                {/* Row Header */}
                <div
                  onClick={() => toggle(item.id)}
                  className="p-4 sm:p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 flex-1">
                    
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-slate-400 w-20">
                        {item.date}
                      </span>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase font-semibold ${badgeStyle}`}>
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
                      <span>{item.title}</span>
                      {item.category === 'CTF' && (
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      )}
                    </h3>

                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {item.readTime}
                    </span>
                    <span>•</span>
                    <span className="px-1.5 py-0.5 rounded border border-slate-800 bg-obsidian text-[10px] text-slate-300">
                      {item.difficulty}
                    </span>
                    <button
                      type="button"
                      className="p-0.5 text-slate-400 hover:text-cyan-cyber ml-1"
                      aria-label="Expand"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-800/80 bg-slate-950/40 space-y-3 text-xs font-sans">
                    <p className="text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="p-3 rounded-md border border-slate-800 bg-obsidian space-y-1">
                      <div className="font-mono text-[10px] text-emerald-signal flex items-center gap-1.5 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-signal" />
                        <span>Key Finding & Defensive Takeaway:</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed font-mono text-[11px]">
                        {item.findings}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-slate-400">
                      <span>Result: VERIFIED IN JEOPARDY ENVIRONMENT</span>
                      <span className="text-cyan-cyber flex items-center gap-1">
                        <Terminal className="w-3 h-3" />
                        Full exploit walkthrough available upon interview request
                      </span>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
