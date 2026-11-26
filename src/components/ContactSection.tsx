import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-cyber mb-1">
            <span className="text-slate-400">05.</span>
            <span>COMMUNICATION_CHANNELS</span>
            <span className="text-slate-400">//</span>
            <span>DIRECT_CONTACT</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-50">
            Initiate Contact
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-slate-800 bg-obsidian-surface p-6 sm:p-8 space-y-6 shadow-xl">
            
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 text-cyan-cyber" />
                <span>Direct Inquiries & Opportunities</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Available for cybersecurity internships, entry-level security engineering roles, and technical collaborations.
              </p>
            </div>

            {/* Email Action Card */}
            <div className="p-4 rounded-lg border border-slate-800 bg-obsidian flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Primary Address</span>
                <div className="font-mono text-xs sm:text-sm text-slate-100 font-semibold select-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded border border-slate-800 bg-obsidian-surface hover:border-slate-700 text-slate-300 hover:text-slate-100 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-signal" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded bg-cyan-cyber hover:bg-cyan-400 text-obsidian font-semibold transition-colors"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-slate-800 bg-obsidian hover:border-cyan-cyber/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-slate-300 group-hover:text-cyan-cyber transition-colors" />
                  <div>
                    <div className="font-mono text-xs text-slate-200 font-medium">LinkedIn</div>
                    <div className="text-[11px] text-slate-400 font-mono">John Ivan Miranda</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-cyber transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-slate-800 bg-obsidian hover:border-cyan-cyber/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-300 group-hover:text-cyan-cyber transition-colors" />
                  <div>
                    <div className="font-mono text-xs text-slate-200 font-medium">GitHub</div>
                    <div className="text-[11px] text-slate-400 font-mono">@{PERSONAL_INFO.fullHandle}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-cyber transition-colors" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
