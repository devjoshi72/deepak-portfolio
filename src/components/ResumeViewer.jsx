import React from "react";
import { FileText, Download, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { personalDetails } from "../data/portfolioData";
import confetti from "canvas-confetti";

export default function ResumeViewer() {
  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="resume" className="py-20 relative bg-grid-pattern bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>EXECUTIVE CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Download Official Resume
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Get the official PDF document of Deepak Chandra's Senior DevOps & SRE Engineer resume.
          </p>
        </div>

        {/* Download Action Card */}
        <div className="glass-card rounded-2xl border border-cyan-500/30 p-8 max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 via-slate-950 to-[#070b14] relative overflow-hidden shadow-2xl space-y-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-lg shadow-cyan-500/10">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">DeepakChandra_Senior-DevOpsEngineer.pdf</h3>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mt-1">
                  <span>PDF Document</span> &bull; <span>143 KB</span> &bull; <span className="text-emerald-400 font-semibold flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 inline" /> Verified CV</span>
                </div>
              </div>
            </div>

            <a
              href={personalDetails.resumePath}
              download="DeepakChandra_Senior-DevOpsEngineer.pdf"
              onClick={triggerDownloadConfetti}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold text-sm transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>

          {/* Quick Resume Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-cyan-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 5+ Yrs Cloud Experience
              </div>
              <p className="text-gray-400 text-[11px]">AWS, Azure, GCP, DigitalOcean multi-cloud architectures</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 15+ Production Clusters
              </div>
              <p className="text-gray-400 text-[11px]">Kubernetes, EKS/AKS/GKE, Terraform IaC & Argo CD</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-amber-400 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Awarded Excellence
              </div>
              <p className="text-gray-400 text-[11px]">Employee of the Year 2025 & OCI Professional Credentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
