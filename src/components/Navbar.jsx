import React, { useState, useEffect } from "react";
import { Download, Menu, X, Cpu, RefreshCw } from "lucide-react";
import { personalDetails } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive cluster status switcher state
  const [clusterIndex, setClusterIndex] = useState(0);
  const clusterStatuses = [
    { text: "15/15 K8s Clusters Online", color: "bg-emerald-500", textColor: "text-emerald-700" },
    { text: "AWS EKS: 8/8 Active", color: "bg-cyan-500", textColor: "text-cyan-700" },
    { text: "Azure AKS: 4/4 Active", color: "bg-blue-500", textColor: "text-blue-700" },
    { text: "GCP GKE: 3/3 Active", color: "bg-indigo-500", textColor: "text-indigo-700" },
  ];

  const handleNextClusterStatus = () => {
    setClusterIndex((prev) => (prev + 1) % clusterStatuses.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Profile", path: "/profile", targetId: "hero" },
    { label: "Architecture", path: "/architecture", targetId: "architecture" },
    { label: "Experience", path: "/experience", targetId: "experience" },
    { label: "Projects", path: "/projects", targetId: "projects" },
    { label: "Skills", path: "/skills", targetId: "skills" },
    { label: "Let's Connect", path: "/connect", targetId: "connect" },
  ];

  const handleNavClick = (e, path, targetId) => {
    e.preventDefault();
    window.history.pushState(null, "", path);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentStatus = clusterStatuses[clusterIndex];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 sm:py-2.5 shadow-sm"
          : "bg-white/80 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand & Telemetry */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <a
              href="/profile"
              onClick={(e) => handleNavClick(e, "/profile", "hero")}
              className="flex items-center gap-2 sm:gap-2.5 group min-w-0"
            >
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-50 border border-cyan-200 group-hover:border-cyan-500 transition-all shadow-sm shrink-0">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-mono font-extrabold text-slate-900 tracking-tight text-sm sm:text-base lg:text-lg truncate">
                  DEEPAK<span className="text-cyan-600">.CHANDRA</span>
                </span>
                <span className="hidden xl:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 font-bold shrink-0">
                  SR. DEVOPS & SRE
                </span>
              </div>
            </a>

            {/* Status Telemetry Ticker */}
            <button
              onClick={handleNextClusterStatus}
              title="Click to cycle active cluster metrics"
              className="hidden 2xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 transition-all cursor-pointer text-[11px] font-mono"
            >
              <span className={`w-2 h-2 rounded-full ${currentStatus.color} status-dot`}></span>
              <span className={`font-bold ${currentStatus.textColor}`}>{currentStatus.text}</span>
              <RefreshCw className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path, item.targetId)}
                className="px-3 py-1.5 rounded-lg hover:text-cyan-700 hover:bg-cyan-50 font-semibold transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Controls: Download Resume */}
          <div className="hidden sm:flex items-center gap-2.5 font-mono text-xs shrink-0">
            <a
              href={personalDetails.resumePath}
              download="DeepakChandra_Senior-DevOpsEngineer.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-all shadow-md shadow-cyan-600/20 cursor-pointer"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">DOWNLOAD RESUME</span>
              <span className="md:hidden">RESUME</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalDetails.resumePath}
              download="DeepakChandra_Senior-DevOpsEngineer.pdf"
              className="sm:hidden p-2 rounded-lg bg-cyan-600 text-white shadow-sm"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 font-mono text-sm shadow-xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, item.path, item.targetId);
                }}
                className="px-3 py-2.5 rounded-lg text-slate-700 hover:text-cyan-700 hover:bg-cyan-50 font-semibold active:bg-cyan-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Download Resume */}
          <div className="pt-2 border-t border-slate-100">
            <a
              href={personalDetails.resumePath}
              download="DeepakChandra_Senior-DevOpsEngineer.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-600 text-white font-bold"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
