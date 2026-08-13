import React, { useState } from "react";
import { FolderGit2, ArrowUpRight, CheckCircle2, Zap, Server, Shield, Activity, BarChart3, Database } from "lucide-react";
import { keyProjects } from "../data/portfolioData";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION CASE STUDIES & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Infrastructure Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            High-impact engineering solutions delivered across cloud migration, distributed event streaming, e-commerce caching, and enterprise observability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border ${project.borderColor} bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col justify-between group`}
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> PRODUCTION READY
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 mb-6 font-mono">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-cyan-300">{stat.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools List */}
              <div className="border-t border-slate-800/80 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-gray-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>SPEC SHEET</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Spec Sheet */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="glass-card max-w-2xl w-full rounded-2xl border border-cyan-500/40 p-6 sm:p-8 bg-[#0a0f1d] relative space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase">{activeProject.category} SPECIFICATION</span>
                  <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-3 py-1 rounded-md bg-slate-800 text-gray-300 hover:text-white font-mono text-xs"
                >
                  ESC [x]
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="text-cyan-400 font-bold">KEY TECHNICAL ACHIEVEMENTS & METRICS:</div>
                  <ul className="space-y-2 text-gray-300">
                    {activeProject.stats.map((st, i) => (
                      <li key={i} className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                        <span>{st.label}:</span>
                        <span className="text-emerald-400 font-bold">{st.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-mono text-gray-400 mb-2">INFRASTRUCTURE STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tools.map((t) => (
                      <span key={t} className="px-3 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:bg-cyan-400"
                >
                  CLOSE SPECIFICATION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
