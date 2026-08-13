import React, { useState, useEffect } from "react";
import { Terminal, Download, Menu, X, Shield, Cpu, Activity, FileText } from "lucide-react";
import { personalDetails } from "../data/portfolioData";

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#hero" },
    { label: "Pipeline Architecture", href: "#architecture" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills Matrix", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume Hub", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070a12]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Live Telemetry Tag */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 group-hover:border-cyan-400 transition-colors">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-white tracking-wider text-base sm:text-lg">
                  DEEPAK<span className="text-cyan-400">.CHANDRA</span>
                </span>
                <span className="hidden md:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                  SR. DEVOPS & SRE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot"></span>
                <span>PROD CLUSTERS: 15/15 ONLINE</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs text-gray-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 rounded-md hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Control Buttons */}
          <div className="hidden sm:flex items-center gap-3 font-mono text-xs">
            {/* Terminal CLI Toggle */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all shadow-sm"
              title="Launch SRE Terminal CLI"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI TERMINAL</span>
            </button>

            {/* Resume Download */}
            <a
              href={personalDetails.resumePath}
              download="DeepakChandra_Senior-DevOpsEngineer.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold tracking-wide transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME PDF</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-md bg-slate-900 border border-emerald-500/40 text-emerald-400"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-slate-900 border border-slate-800 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-6 font-mono text-sm">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={personalDetails.resumePath}
                download="DeepakChandra_Senior-DevOpsEngineer.pdf"
                className="flex items-center justify-center gap-2 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
