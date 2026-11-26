import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Github, Shield, Terminal } from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Web Application', 'Mobile Application', 'Desktop Application'];

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-10 sm:py-14 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-cyber mb-1">
              <span className="text-slate-400">02.</span>
              <span>ENGINEERED_SOFTWARE</span>
              <span className="text-slate-400">//</span>
              <span>PRODUCTION_TOOLING</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-50">
              Featured Projects & Tooling
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs px-3 py-1 rounded transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-cyan-muted text-cyan-cyber border border-cyan-cyber/40 font-medium'
                    : 'bg-obsidian-surface text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 4-Column Grid: Fully visible in one whole section view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-slate-800 bg-obsidian-surface hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Visual Thumbnail (without Featured badge and without GitHub icon) */}
              <div className="relative overflow-hidden bg-slate-900 border-b border-slate-800/80 h-32 sm:h-36">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-surface via-transparent to-transparent"></div>

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-slate-700 bg-obsidian/90 text-cyan-cyber backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-cyan-cyber transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-[11px] text-cyan-cyber font-mono font-medium line-clamp-1">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 pt-0.5">
                    {project.description}
                  </p>
                </div>

                {/* Key System Highlights */}
                {project.securityControls && project.securityControls.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <div className="font-mono text-[10px] text-slate-300 flex items-center gap-1">
                      <Shield className="w-3 h-3 text-cyan-cyber shrink-0" />
                      <span>Key Highlights:</span>
                    </div>
                    <ul className="space-y-0.5">
                      {project.securityControls.slice(0, 3).map((ctrl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                          <span className="text-emerald-signal font-mono shrink-0">•</span>
                          <span className="line-clamp-1">{ctrl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Monospace Stack Tags */}
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-slate-800 bg-obsidian text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout (Sole GitHub repository link) */}
        <div className="p-3 rounded-lg border border-slate-800 bg-obsidian-surface/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal className="w-4 h-4 text-cyan-cyber shrink-0" />
            <span>Looking for source code, commit history, and test schemas?</span>
          </div>
          <a
            href="https://github.com/janayban"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-slate-800 bg-obsidian hover:border-cyan-cyber/40 text-slate-200 hover:text-cyan-cyber transition-all shrink-0"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/janayban</span>
          </a>
        </div>

      </div>
    </section>
  );
}
