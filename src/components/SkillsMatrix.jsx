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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            DevOps & SRE Skill Matrix
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Core toolsets, infrastructure protocols, and automation frameworks mastered across 5+ years in production SRE environments.
          </p>
        </div>

        {/* Category Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 font-mono text-[10px] sm:text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl border transition-all cursor-pointer font-medium ${
                selectedCategory === cat
                  ? "bg-cyan-600 text-white font-bold border-cyan-600 shadow-md shadow-cyan-600/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:border-cyan-400 hover:bg-cyan-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((group) => {
            const IconComponent = iconMap[group.icon] || Server;
            return (
              <div
                key={group.category}
                className="glass-card rounded-2xl p-6 border border-slate-200 bg-white hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{group.category}</h3>
                  </div>

                  <ul className="space-y-2 font-mono text-xs text-slate-700">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 font-medium">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 text-right font-semibold">
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
