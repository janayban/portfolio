import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'writeups', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Write-ups', href: '#writeups', id: 'writeups' },
    { name: 'Skills & Labs', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-slate-800 py-2.5 shadow-lg shadow-black/40'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand/Handle in Monospace */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Ivan Miranda Security Portfolio"
          >
            <div className="w-7 h-7 rounded border border-slate-800 bg-obsidian-surface flex items-center justify-center text-cyan-cyber group-hover:border-cyan-cyber/60 transition-colors">
              <Terminal className="w-3.5 h-3.5 text-cyan-cyber" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-tight text-slate-100 group-hover:text-cyan-cyber transition-colors">
                {PERSONAL_INFO.handle}
              </span>
              <span className="font-mono text-[9px] text-slate-400">
                [cca:sec_ops]
              </span>
            </div>
          </a>

          {/* Center/Right Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <nav className="flex items-center bg-obsidian-surface/90 border border-slate-800 rounded-lg p-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`font-mono text-xs px-3 py-1 rounded transition-all duration-150 ${
                      isActive
                        ? 'text-cyan-cyber bg-cyan-muted font-medium border border-cyan-cyber/30'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 border border-transparent'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Subtle Status Pill */}
            <div className="ml-2 hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full border border-slate-800 bg-obsidian-surface text-[11px] font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-signal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-signal"></span>
              </span>
              <span>Available for roles</span>
            </div>

            {/* Resume button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="ml-2 inline-flex items-center gap-1 font-mono text-xs text-slate-200 hover:text-cyan-cyber px-3 py-1 rounded border border-slate-800 hover:border-cyan-cyber/50 bg-obsidian-surface transition-all"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-slate-800 bg-obsidian-surface text-[10px] font-mono text-slate-300">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-signal"></span>
              <span>Available</span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded border border-slate-800 bg-obsidian-surface text-slate-300 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pt-2 pb-3 border-t border-slate-800 bg-obsidian/95 backdrop-blur-xl rounded-lg px-2">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs px-3 py-2 rounded text-slate-300 hover:text-cyan-cyber hover:bg-slate-800/60"
                >
                  &gt; {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between px-3">
                <span className="text-[10px] font-mono text-slate-400">
                  Status: Available for security roles
                </span>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  className="font-mono text-xs text-cyan-cyber border border-cyan-cyber/30 px-2 py-0.5 rounded bg-cyan-muted"
                >
                  CV.pdf
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
