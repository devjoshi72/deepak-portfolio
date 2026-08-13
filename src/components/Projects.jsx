import React, { useState } from "react";
import { FolderGit2, ArrowUpRight, Zap } from "lucide-react";
import { keyProjects } from "../data/portfolioData";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION CASE STUDIES & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Infrastructure Projects
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            High-impact engineering solutions delivered across cloud migration, distributed event streaming, e-commerce caching, and enterprise observability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {keyProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200 bg-white relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400 hover:shadow-xl transition-all"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-bold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" /> PRODUCTION READY
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-700 font-bold mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200 mb-6 font-mono">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                      <div className="text-[10px] text-cyan-700 font-bold uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools List */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1 text-xs font-mono text-cyan-700 hover:text-cyan-900 font-bold cursor-pointer"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <div className="glass-card max-w-2xl w-full rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white relative space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-700 font-bold uppercase">{activeProject.category} SPECIFICATION</span>
                  <h3 className="text-2xl font-bold text-slate-900">{activeProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-mono text-xs font-bold cursor-pointer"
                >
                  ESC [x]
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 font-mono text-xs">
                  <div className="text-cyan-800 font-bold">KEY TECHNICAL ACHIEVEMENTS & METRICS:</div>
                  <ul className="space-y-2 text-slate-700">
                    {activeProject.stats.map((st, i) => (
                      <li key={i} className="flex items-center justify-between border-b border-slate-200 pb-1">
                        <span>{st.label}:</span>
                        <span className="text-emerald-700 font-bold">{st.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-500 font-bold mb-2">INFRASTRUCTURE STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tools.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-cyan-600 text-white font-mono font-bold text-xs hover:bg-cyan-700 cursor-pointer shadow-md"
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
