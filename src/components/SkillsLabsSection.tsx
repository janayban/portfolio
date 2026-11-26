import React, { useState, useEffect, useMemo } from 'react';
import { SKILL_GROUPS, CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../data/portfolioData';
import {
  Shield,
  Award,
  CheckCircle2,
  Terminal,
  Code2,
  ExternalLink,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Calendar,
  Sparkles,
  Filter
} from 'lucide-react';

type TabCategory = 'All' | 'Pentesting & Security' | 'Networking (CCNA)' | 'Linux & AI' | 'Hackathons & CTFs';

export default function SkillsLabsSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabCategory>('All');
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  // Compute counts per category
  const categories: { label: TabCategory; count: number }[] = useMemo(() => [
    { label: 'All', count: CERTIFICATIONS.length },
    { label: 'Pentesting & Security', count: CERTIFICATIONS.filter(c => c.category === 'Pentesting & Security').length },
    { label: 'Networking (CCNA)', count: CERTIFICATIONS.filter(c => c.category === 'Networking (CCNA)').length },
    { label: 'Linux & AI', count: CERTIFICATIONS.filter(c => c.category === 'Linux & AI').length },
    { label: 'Hackathons & CTFs', count: CERTIFICATIONS.filter(c => c.category === 'Hackathons & CTFs').length },
  ], []);

  // Filtered certifications list based on active tab
  const filteredCerts = useMemo(() => {
    if (activeTab === 'All') return CERTIFICATIONS;
    return CERTIFICATIONS.filter(cert => cert.category === activeTab);
  }, [activeTab]);

  // Selected certificate for lightbox
  const currentCert: Certification | null = selectedCertIndex !== null ? CERTIFICATIONS[selectedCertIndex] : null;

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCertIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedCertIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedCertIndex((prev) => (prev !== null ? (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length : null));
      } else if (e.key === 'ArrowRight') {
        setSelectedCertIndex((prev) => (prev !== null ? (prev + 1) % CERTIFICATIONS.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCertIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertIndex]);

  const handlePrev = () => {
    setSelectedCertIndex((prev) => (prev !== null ? (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length : null));
  };

  const handleNext = () => {
    setSelectedCertIndex((prev) => (prev !== null ? (prev + 1) % CERTIFICATIONS.length : null));
  };

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-cyber mb-1">
              <span className="text-slate-400">03.</span>
              <span>TECHNICAL_COMPETENCIES</span>
              <span className="text-slate-400">//</span>
              <span>VERIFIED_CREDENTIALS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-50">
              Skills & Credentials
            </h2>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-slate-400">
            Core Tooling, Active Certifications & Competition Badges
          </span>
        </div>

        {/* 3-Column Skills Grid (6 symmetrical skills per column) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-800 bg-obsidian-surface p-5 flex flex-col justify-between hover:border-slate-700/80 transition-all shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-200 font-semibold border-b border-slate-800/80 pb-2">
                  {idx === 0 && <Shield className="w-4 h-4 text-cyan-cyber" />}
                  {idx === 1 && <Terminal className="w-4 h-4 text-emerald-signal" />}
                  {idx === 2 && <Code2 className="w-4 h-4 text-sky-400" />}
                  <span>{group.title}</span>
                </div>

                <ul className="space-y-2 pt-1">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-cyber shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verified competency</span>
                <span className="text-emerald-signal flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Disclosure Widget Container */}
        <div className="rounded-2xl border border-slate-800 bg-obsidian-surface overflow-hidden shadow-sm transition-all duration-300">
          
          {/* Disclosure Header (Interactive Clickable Trigger) */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="w-full p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left hover:bg-slate-900/50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 flex-nowrap">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-100 whitespace-nowrap group-hover:text-cyan-cyber transition-colors">
                    Verified Certifications and Credentials
                  </h3>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 whitespace-nowrap shrink-0">
                    {CERTIFICATIONS.length} Records
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 truncate">
                  {isExpanded
                    ? 'Click to collapse certifications section'
                    : 'Click to expand & inspect credential proofs, CCNA certificates, and competition badges'}
                </p>
              </div>
            </div>

            {/* Right Trigger Button Indicator */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <span className="text-xs font-mono text-cyan-cyber font-medium group-hover:underline">
                {isExpanded ? 'Collapse' : 'Expand Credentials'}
              </span>
              <div
                className={`p-1.5 rounded-lg border border-slate-800 bg-slate-900/80 text-cyan-cyber group-hover:border-cyan-500/50 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Disclosure Content (Enclosed certs and filter tabs) */}
          {isExpanded && (
            <div className="p-4 sm:p-6 border-t border-slate-800/80 bg-slate-950/40 space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Filter className="w-3.5 h-3.5 text-cyan-cyber" />
                  <span>Category Filter:</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
                  {categories.map((cat) => {
                    const isActive = activeTab === cat.label;
                    return (
                      <button
                        key={cat.label}
                        onClick={() => setActiveTab(cat.label)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/60 shadow-sm shadow-cyan-950/50 font-semibold'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isActive
                              ? 'bg-cyan-500/20 text-cyan-200'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredCerts.map((cert) => {
                  const originalIndex = CERTIFICATIONS.findIndex(c => c.id === cert.id);
                  const isCapen = cert.id === 'capen';

                  return (
                    <div
                      key={cert.id}
                      onClick={() => setSelectedCertIndex(originalIndex)}
                      className={`group relative rounded-xl border bg-obsidian-surface hover:border-cyan-500/50 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cyan-950/30 ${
                        isCapen
                          ? 'border-amber-500/40 ring-1 ring-amber-500/20'
                          : 'border-slate-800'
                      }`}
                    >
                      {/* Image Preview Container */}
                      <div className="relative aspect-[16/11] w-full bg-slate-900/90 overflow-hidden border-b border-slate-800/80">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1.5 z-10">
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-md font-medium border ${
                              isCapen
                                ? 'bg-amber-950/80 text-amber-300 border-amber-500/60 shadow-sm'
                                : 'bg-slate-900/80 text-cyan-300 border-slate-700/80'
                            }`}
                          >
                            {cert.badge}
                          </span>

                          {isCapen && (
                            <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/60 backdrop-blur-md">
                              <Sparkles className="w-2.5 h-2.5" />
                              Top Pentest Cert
                            </span>
                          )}
                        </div>

                        {/* Hover Inspect Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-950/40 backdrop-blur-[2px]">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-500/60 text-xs font-mono shadow-md">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect Certificate</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="text-[11px] font-mono text-cyan-cyber/90 mb-1 flex items-center justify-between">
                            <span className="truncate">{cert.issuer}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-cyber transition-colors line-clamp-2">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {cert.subtitle}
                          </p>
                        </div>

                        <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-500" />
                            <span>{cert.date}</span>
                          </div>
                          {cert.credentialId ? (
                            <span className="text-[10px] text-cyan-400/80 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                              ID: {cert.credentialId}
                            </span>
                          ) : (
                            <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Interactive Lightbox / Modal */}
      {selectedCertIndex !== null && currentCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSelectedCertIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-obsidian-surface border border-slate-700/80 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                  {String(selectedCertIndex + 1).padStart(2, '0')} / {String(CERTIFICATIONS.length).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-100 truncate max-w-md sm:max-w-lg">
                    {currentCert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {currentCert.issuer} • {currentCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-cyber hover:bg-slate-800/80 transition-all border border-slate-800"
                  title="Open image in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedCertIndex(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 transition-all border border-slate-800"
                  title="Close modal (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display with Navigation Arrows */}
            <div className="relative flex-1 bg-black/70 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              <img
                src={currentCert.image}
                alt={currentCert.title}
                className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-xl border border-slate-800/80"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/60 shadow-lg backdrop-blur-sm transition-all"
                title="Previous certificate (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/60 shadow-lg backdrop-blur-sm transition-all"
                title="Next certificate (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-cyan-cyber bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-900/80">
                  {currentCert.badge}
                </span>
                <span className="text-slate-300 font-medium">
                  {currentCert.subtitle}
                </span>
              </div>

              <div className="flex items-center gap-3 font-mono text-slate-400 text-[11px] shrink-0">
                {currentCert.credentialId && (
                  <span className="text-cyan-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    Credential ID: {currentCert.credentialId}
                  </span>
                )}
                <span className="hidden sm:inline text-slate-400">
                  Use arrow keys ◀ ▶ to navigate • Esc to close
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
