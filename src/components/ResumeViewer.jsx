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
    <section id="resume" className="py-12 sm:py-16 lg:py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-mono font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>EXECUTIVE CURRICULUM VITAE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Download Resume
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Get the PDF document of Deepak Chandra's Senior DevOps & SRE Engineer resume.
          </p>
        </div>

        {/* Download Action Card */}
        <div className="glass-card rounded-xl sm:rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto bg-gradient-to-br from-white via-slate-50 to-cyan-50/40 relative overflow-hidden shadow-xl space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 border-b border-slate-200 pb-4 sm:pb-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-cyan-100 text-cyan-800 border border-cyan-300 shadow-md">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg lg:text-xl break-all sm:break-normal">DeepakChandra_Senior-DevOpsEngineer.pdf</h3>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mt-1 font-medium">
                  <span>PDF Document</span> &bull; <span>143 KB</span> &bull; <span className="text-emerald-700 font-bold flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 inline" /> Verified CV</span>
                </div>
              </div>
            </div>

            <a
              href={personalDetails.resumePath}
              download="DeepakChandra_Senior-DevOpsEngineer.pdf"
              onClick={triggerDownloadConfetti}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono font-bold text-sm transition-all shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/40 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>

          {/* Quick Resume Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
              <div className="text-cyan-800 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" /> 5+ Yrs Cloud Experience
              </div>
              <p className="text-slate-500 text-[11px]">AWS, Azure, GCP, DigitalOcean multi-cloud architectures</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
              <div className="text-emerald-800 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 15+ Production Clusters
              </div>
              <p className="text-slate-500 text-[11px]">Kubernetes, EKS/AKS/GKE, Terraform IaC & Argo CD</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
              <div className="text-amber-800 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Awarded Excellence
              </div>
              <p className="text-slate-500 text-[11px]">Employee of the Year 2025 & OCI Professional Credentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
