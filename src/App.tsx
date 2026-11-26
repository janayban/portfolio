import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import WriteupsSection from './components/WriteupsSection';
import SkillsLabsSection from './components/SkillsLabsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-obsidian text-slate-50 antialiased relative min-h-screen">
      {/* Subtle Background Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none subtle-grid opacity-35 z-0" />

      {/* Sticky Minimalist Navigation with Monospace Handle and Status Pill */}
      <Navbar />

      <main className="relative z-10">
        {/* Compact High-Impact Hero with Live Interactive Terminal */}
        <Hero />

        {/* Background, Academic Credentials & Competition Milestones */}
        <AboutSection />

        {/* Featured Projects Bento Grid with Security Controls */}
        <ProjectsSection />

        {/* CTF Write-ups & Security Research Changelog */}
        <WriteupsSection />

        {/* Skills Matrix, Badges & 7ANALYTICS Academic Labs */}
        <SkillsLabsSection />

        {/* Direct Contact & Cryptographic Identity */}
        <ContactSection />
      </main>

      {/* Clean Footer with RFC 9116 Security Policy */}
      <Footer />
    </div>
  );
}
