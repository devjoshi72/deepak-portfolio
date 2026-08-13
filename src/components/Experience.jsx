import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Award, CheckCircle2, Building2 } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  const [filterTag, setFilterTag] = useState("All");

  // Extract all unique tags
  const allTags = ["All", ...new Set(experiences.flatMap((exp) => exp.tags))];

  const filteredExperiences = filterTag === "All"
    ? experiences
    : experiences.filter((exp) => exp.tags.includes(filterTag));

  return (
    <section id="experience" className="py-20 relative bg-grid-pattern bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TRAJECTORY & PROVEN IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Work Experience
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              5+ years of hands-on experience scaling production clusters, automating deployment pipelines, and managing multi-cloud infrastructure.
            </p>
          </div>

          {/* Filter Tag Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs max-w-md">
            {allTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1 rounded-full border transition-all ${
                  filterTag === tag
                    ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-sm"
                    : "bg-slate-900 text-gray-300 border-slate-800 hover:border-cyan-500/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10">
          {filteredExperiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md shadow-cyan-500/20">
                <Building2 className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Card Content */}
              <div className="glass-card glass-card-hover rounded-xl p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.role.includes("Senior") && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                          <Award className="w-3 h-3" /> LEADERSHIP
                        </span>
                      )}
                    </div>
                    <div className="text-cyan-400 font-mono text-sm font-semibold mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gray-400">
                    <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2.5 text-sm text-gray-300">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
