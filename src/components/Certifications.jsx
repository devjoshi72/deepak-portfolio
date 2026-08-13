import React from "react";
import { Award, ShieldCheck, CheckCircle2, GraduationCap, Clock, Sparkles } from "lucide-react";
import { certifications, education } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Recognition
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Professional certifications, industry awards, and ongoing cloud credentials validation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, idx) => {
            const isAward = cert.title.includes("Employee of the Year");
            const isInProgress = cert.status === "In Progress";
            return (
              <div
                key={idx}
                className={`glass-card glass-card-hover rounded-xl p-6 border transition-all flex flex-col justify-between ${
                  isAward
                    ? "border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 shadow-lg shadow-amber-500/10"
                    : isInProgress
                    ? "border-cyan-500/30 bg-slate-900/60"
                    : "border-slate-800 hover:border-cyan-500/40"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                        isAward
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                          : isInProgress
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                          : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                      }`}
                    >
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{cert.year}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white flex items-start gap-2">
                      {isAward && <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-1" />}
                      <span>{cert.title}</span>
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-1">{cert.issuer}</div>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">STATUS:</span>
                  <span
                    className={`font-bold flex items-center gap-1 ${
                      isAward
                        ? "text-amber-400"
                        : isInProgress
                        ? "text-cyan-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {isInProgress ? <Clock className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                    {cert.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Academic Qualifications & Education</h3>
              <p className="text-xs font-mono text-gray-400">Formal engineering and management degrees</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2 font-mono">
                <span className="text-[10px] text-cyan-400">{edu.period}</span>
                <h4 className="text-sm font-bold text-white leading-snug">{edu.degree}</h4>
                <div className="text-xs text-gray-400">{edu.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
