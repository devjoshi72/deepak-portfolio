import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Building2 } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  const [filterTag, setFilterTag] = useState("All");

  const allTags = ["All", ...new Set(experiences.flatMap((exp) => exp.tags))];

  const filteredExperiences = filterTag === "All"
    ? experiences
    : experiences.filter((exp) => exp.tags.includes(filterTag));

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TRAJECTORY & PROVEN IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Work Experience
            </h2>
            <p className="text-slate-600 text-sm max-w-xl font-normal">
              5+ years of hands-on experience scaling production clusters, automating deployment pipelines, and managing multi-cloud infrastructure.
            </p>
          </div>

          {/* Filter Tag Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs max-w-md">
            {allTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  filterTag === tag
                    ? "bg-cyan-600 text-white font-bold border-cyan-600 shadow-sm"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:border-cyan-400 hover:bg-cyan-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 lg:ml-8 space-y-6 sm:space-y-10">
          {filteredExperiences.map((exp, idx) => (
            <div key={idx} className="relative pl-5 sm:pl-6 lg:pl-10 group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[13px] sm:-left-[17px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500 transition-all shadow-md">
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600" />
              </div>

              {/* Card Content */}
              <div className="glass-card rounded-2xl p-6 border border-slate-200 bg-white space-y-4 hover:border-cyan-300 transition-all hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.role.includes("Senior") && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1 font-bold">
                          <Award className="w-3 h-3 text-amber-600" /> LEADERSHIP
                        </span>
                      )}
                    </div>
                    <div className="text-cyan-700 font-mono text-sm font-bold mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
                    <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
                      <Calendar className="w-3 h-3 text-cyan-600" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
                      <MapPin className="w-3 h-3 text-cyan-600" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2.5 text-sm text-slate-700 font-normal">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-50 text-cyan-800 border border-cyan-200 font-semibold"
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
