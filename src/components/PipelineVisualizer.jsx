import React, { useState } from "react";
import { 
  GitBranch, 
  ShieldAlert, 
  Layers, 
  Box, 
  RefreshCw, 
  Activity, 
  CheckCircle,
  ArrowRight,
  Server,
  Key,
  Database,
  Cpu
} from "lucide-react";

export default function PipelineVisualizer() {
  const [selectedNode, setSelectedNode] = useState(0);

  const pipelineStages = [
    {
      id: "code-ci",
      title: "1. Code Commit & CI Pipeline",
      subtitle: "GitLab CI / GitHub Actions / Jenkins",
      icon: GitBranch,
      badge: "Automated Triggers",
      color: "text-blue-400 border-blue-500/40 bg-blue-500/10",
      description: "Developers commit code to Git. Automated multi-stage pipelines trigger linting, unit testing, and parallel artifact build processes using Jenkins, GitLab CI, and GitHub Actions.",
      metrics: ["10+ Daily Releases Supported", "Parallel Build Matrix", "Automated Rollback Triggers"],
      tools: ["GitLab CI/CD", "GitHub Actions", "Jenkins", "Python", "Bash"],
    },
    {
      id: "security-vault",
      title: "2. Security & Secrets Management",
      subtitle: "HashiCorp Vault & SonarQube SAST",
      icon: Key,
      badge: "DevSecOps Integration",
      color: "text-purple-400 border-purple-500/40 bg-purple-500/10",
      description: "Injects dynamic short-lived secrets via HashiCorp Vault. Performs automated SonarQube static security analysis (SAST) and container vulnerability scanning before image sign-off.",
      metrics: ["Dynamic Secrets Rotation", "Zero Hardcoded Credentials", "Kubernetes RBAC Enforced"],
      tools: ["HashiCorp Vault", "SonarQube", "K8s RBAC", "Cloudflare WAF"],
    },
    {
      id: "iac-terraform",
      title: "3. IaC & Configuration Management",
      subtitle: "Terraform & Ansible Drift Prevention",
      icon: Layers,
      badge: "Declarative Infra",
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      description: "Provisions cloud resources across AWS, GCP, Azure & DigitalOcean using declarative Terraform modules. Uses Ansible playbooks to standardize middleware configuration and eliminate drift.",
      metrics: ["50+ TB Multi-Cloud Migration", "Spot Instance Scheduling", "Declarative HCL Modules"],
      tools: ["Terraform", "Ansible", "CloudFormation", "AWS VPC", "GCP Compute"],
    },
    {
      id: "k8s-gitops",
      title: "4. Kubernetes & GitOps Orchestration",
      subtitle: "Argo CD, Helm & KEDA Autoscaling",
      icon: Box,
      badge: "Self-Healing Clusters",
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      description: "Deploys helm charts across 15+ production Kubernetes clusters. Enforces GitOps sync via Argo CD and event-driven pod autoscaling (KEDA) based on real-time traffic spikes.",
      metrics: ["15+ Kubernetes Clusters", "KEDA Event-Driven Scale", "Argo CD GitOps Sync"],
      tools: ["Kubernetes", "Helm", "Argo CD", "KEDA", "Docker"],
    },
    {
      id: "blue-green",
      title: "5. Zero-Downtime Blue/Green Release",
      subtitle: "NGINX & Cloudflare Traffic Router",
      icon: RefreshCw,
      badge: "0ms Downtime",
      color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      description: "Routes production traffic seamlessly between Blue (Active) and Green (New) cluster instances. Validates health probes before shifting 100% user traffic with instant rollback capability.",
      metrics: ["Zero Deployment Downtime", "Health Probe Validation", "Instant Rollback Capability"],
      tools: ["NGINX Ingress", "Cloudflare WAF", "Varnish", "Redis Caching"],
    },
    {
      id: "observability",
      title: "6. Centralized Telemetry & SRE Alerting",
      subtitle: "Prometheus, Grafana & ELK Stack",
      icon: Activity,
      badge: "99.99% Uptime SLO",
      color: "text-rose-400 border-rose-500/40 bg-rose-500/10",
      description: "Monitors 40+ microservices using Prometheus metrics, Grafana visualization dashboards, and centralized ELK/Loki log aggregation with Alertmanager pager alerts.",
      metrics: ["40+ Microservices Monitored", "45% MTTR Reduction", "99.99% Platform Availability"],
      tools: ["Prometheus", "Grafana", "ELK Stack", "Loki", "Alertmanager"],
    },
  ];

  const currentStage = pipelineStages[selectedNode];

  return (
    <section id="architecture" className="py-20 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENTERPRISE GITOPS & DEVOPS LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Infrastructure Pipeline & Architecture
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Click on any pipeline node below to inspect Deepak’s end-to-end automation strategy, security controls, and operational metrics.
          </p>
        </div>

        {/* Interactive Pipeline Node Grid / Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-10">
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = selectedNode === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedNode(idx)}
                className={`p-4 rounded-xl text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "glass-card border-2 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                    : "glass-card border border-slate-800 hover:border-slate-700 opacity-85 hover:opacity-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${stage.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">STEP 0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm line-clamp-1">{stage.title.split(". ")[1]}</h3>
                  <p className="text-[11px] font-mono text-gray-400 mt-1 line-clamp-1">{stage.subtitle}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/60 pt-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300">
                    {stage.badge}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 text-cyan-400 transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pipeline Stage Details Card */}
        <div className="glass-card rounded-2xl border border-cyan-500/30 p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-[#070b14] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${currentStage.color}`}>
                  <currentStage.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    STAGE STACK SPECIFICATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{currentStage.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {currentStage.description}
              </p>

              {/* Tools Badges */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-gray-400">TOOLS & FRAMEWORKS UTILIZED:</span>
                <div className="flex flex-wrap gap-2">
                  {currentStage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-700 text-cyan-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Metrics Card */}
            <div className="lg:col-span-5 bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-gray-400 uppercase">STAGE OPERATIONAL HIGHLIGHTS</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {currentStage.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <span className="text-gray-200">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
