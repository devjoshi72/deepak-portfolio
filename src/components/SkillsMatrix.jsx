import React, { useState } from "react";
import { 
  Cloud, 
  FileCode, 
  Box, 
  GitBranch, 
  Activity, 
  ShieldCheck, 
  Database, 
  Server, 
  Cpu, 
  Check 
} from "lucide-react";
import { technicalSkills } from "../data/portfolioData";

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const iconMap = {
    Cloud: Cloud,
    FileCode: FileCode,
    Box: Box,
    GitBranch: GitBranch,
    Activity: Activity,
    ShieldCheck: ShieldCheck,
    Database: Database,
    Server: Server,
  };

  const categories = ["All", ...technicalSkills.map((s) => s.category)];

  const filteredSkills = selectedCategory === "All"
    ? technicalSkills
    : technicalSkills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-grid-pattern bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps & SRE Skill Matrix
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Core toolsets, infrastructure protocols, and automation frameworks mastered across 5+ years in production SRE environments.
          </p>
        </div>

        {/* Category Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900 text-gray-300 border-slate-800 hover:border-cyan-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((group) => {
            const IconComponent = iconMap[group.icon] || Server;
            return (
              <div
                key={group.category}
                className="glass-card glass-card-hover rounded-xl p-6 border border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{group.category}</h3>
                  </div>

                  <ul className="space-y-2 font-mono text-xs text-gray-300">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 bg-slate-950/50 px-2.5 py-1.5 rounded border border-slate-800/80">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] font-mono text-gray-500 text-right">
                  PROD VERIFIED
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
