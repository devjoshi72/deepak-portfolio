import React from "react";
import { Cpu, Terminal, Shield, ArrowUp, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import { personalDetails } from "../data/portfolioData";

export default function Footer({ onOpenTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800 text-gray-400 font-mono text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-white text-base">
                DEEPAK<span className="text-cyan-400">.CHANDRA</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                PROD v5.2
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Senior DevOps Engineer specializing in Kubernetes, Multi-Cloud Architecture, Terraform Infrastructure as Code, zero-downtime Blue-Green deployments, and telemetry.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot"></span>
              <span>All 15 Kubernetes Production Clusters Operational (99.99% Uptime)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-white font-bold uppercase text-xs mb-3">NAVIGATION HIERARCHY</div>
            <ul className="space-y-1.5 text-gray-300">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">&gt; System Overview</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">&gt; Pipeline Architecture</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">&gt; Career Trajectory</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">&gt; Case Studies</a></li>
              <li><a href="#resume" className="hover:text-cyan-400 transition-colors">&gt; Download Resume PDF</a></li>
            </ul>
          </div>

          {/* Terminal & Socials */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-bold uppercase text-xs">SRE CLI & SOCIAL TOUCHPOINTS</div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
              >
                <Terminal className="w-4 h-4" />
                <span>LAUNCH CLI TERMINAL</span>
              </button>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-gray-300 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-gray-300 hover:text-cyan-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[11px] text-gray-500">
              GitHub Pages Deployment Compatible &bull; Vite + React + Tailwind CSS
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Deepak Chandra. Designed for High Uptime & Engineering Excellence.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
