import React, { useState } from "react";
import { FileText, Download, Eye, CheckCircle2, Shield, Printer, ExternalLink } from "lucide-react";
import { personalDetails } from "../data/portfolioData";
import confetti from "canvas-confetti";

export default function ResumeViewer() {
  const [activeTab, setActiveTab] = useState("preview");

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
            Resume Hub & Document Download
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Inspect the live document or download the official PDF version of Deepak Chandra's Senior DevOps Engineer resume.
          </p>
        </div>

        {/* Control Toolbar */}
        <div className="glass-card rounded-2xl border border-cyan-500/30 p-4 sm:p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">DeepakChandra_Senior-DevOpsEngineer.pdf</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <span>PDF Format</span> &bull; <span>143 KB</span> &bull; <span className="text-emerald-400">Verified Signature</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={() => setActiveTab(activeTab === "preview" ? "text" : "preview")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-gray-300 hover:text-white transition-colors"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>{activeTab === "preview" ? "VIEW TEXT VERSION" : "VIEW EMBEDDED PDF"}</span>
            </button>

            <a
              href={personalDetails.resumePath}
              download="DeepakChandra_Senior-DevOpsEngineer.pdf"
              onClick={triggerDownloadConfetti}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>

        {/* Resume Content Container */}
        {activeTab === "preview" ? (
          <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
            <iframe
              src={`${personalDetails.resumePath}#toolbar=0&navpanes=0`}
              title="Deepak Chandra Resume PDF"
              className="w-full h-[750px] border-0 bg-slate-900"
            />
          </div>
        ) : (
          <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-10 space-y-8 text-gray-300 font-sans">
            {/* Header section in text mode */}
            <div className="border-b border-slate-800 pb-6 space-y-2">
              <h3 className="text-3xl font-extrabold text-white">DEEPAK CHANDRA</h3>
              <p className="text-cyan-400 font-mono text-sm font-semibold">
                Senior DevOps Engineer | Platform Engineer | Cloud & Site Reliability Engineering (SRE)
              </p>
              <p className="text-xs font-mono text-gray-400">
                Dehradun, India | +91 7252815053 | deepakjoshiuk.in@gmail.com | linkedin.com/in/deepakchandra72
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">PROFESSIONAL SUMMARY</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                {personalDetails.summary}
              </p>
            </div>

            {/* Technical Skills summary */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">TECHNICAL SKILLS SUMMARY</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
                  <span className="text-cyan-300 font-bold">Cloud & Infra:</span> AWS (EKS, EC2, Lambda, S3, RDS, VPC), Azure (AKS), GCP (GKE), DigitalOcean
                </div>
                <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
                  <span className="text-cyan-300 font-bold">IaC & Automation:</span> Terraform, Ansible, CloudFormation, Jenkins, GitLab CI/CD, GitHub Actions
                </div>
                <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
                  <span className="text-cyan-300 font-bold">Containers & GitOps:</span> Kubernetes, Docker, Helm, KEDA, Argo CD
                </div>
                <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
                  <span className="text-cyan-300 font-bold">Observability & Security:</span> Prometheus, Grafana, ELK Stack, Loki, HashiCorp Vault, SonarQube
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
