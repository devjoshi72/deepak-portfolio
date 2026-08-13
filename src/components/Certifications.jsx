import React from "react";
import { Award, CheckCircle2, GraduationCap, Clock, Sparkles } from "lucide-react";
import { certifications, education } from "../data/portfolioData";
import { OracleLogo, EbizonLogo, KubernetesLogo } from "./Icons";

export default function Certifications() {
  const renderIssuerLogo = (issuer) => {
    if (issuer.includes("Oracle")) return <OracleLogo className="w-8 h-8" />;
    if (issuer.includes("Ebizon")) return <EbizonLogo className="w-8 h-8" />;
    if (issuer.includes("CNCF") || issuer.includes("Linux") || issuer.includes("Kubernetes")) return <KubernetesLogo className="w-8 h-8" />;
    return <Award className="w-8 h-8 text-cyan-700" />;
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & HONORS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Recognition
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Professional certifications, industry awards, and ongoing cloud credentials validation.
          </p>
        </div>

        {/* Certifications Grid with Company Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {certifications.map((cert, idx) => {
            const isAward = cert.title.includes("Employee of the Year");
            const isInProgress = cert.status === "In Progress";
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-6 border transition-all flex flex-col justify-between hover:shadow-lg ${
                  isAward
                    ? "border-amber-300 bg-amber-50/60 shadow-md shadow-amber-500/10"
                    : isInProgress
                    ? "border-cyan-200 bg-white"
                    : "border-slate-200 bg-white hover:border-cyan-400"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                      {renderIssuerLogo(cert.issuer)}
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border font-bold ${
                        isAward
                          ? "bg-amber-100 text-amber-900 border-amber-300"
                          : isInProgress
                          ? "bg-cyan-100 text-cyan-900 border-cyan-300"
                          : "bg-emerald-100 text-emerald-900 border-emerald-300"
                      }`}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-start gap-2">
                      {isAward && <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-1" />}
                      <span>{cert.title}</span>
                    </h3>
                    <div className="text-xs font-mono text-cyan-700 font-bold mt-1">{cert.issuer}</div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-bold">STATUS:</span>
                  <span
                    className={`font-bold flex items-center gap-1 ${
                      isAward
                        ? "text-amber-800"
                        : isInProgress
                        ? "text-cyan-700"
                        : "text-emerald-700"
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
        <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Academic Qualifications & Education</h3>
              <p className="text-xs font-mono text-slate-500 font-medium">Formal engineering and management degrees</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 font-mono">
                <span className="text-[10px] text-cyan-700 font-bold">{edu.period}</span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">{edu.degree}</h4>
                <div className="text-xs text-slate-500 font-medium">{edu.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
