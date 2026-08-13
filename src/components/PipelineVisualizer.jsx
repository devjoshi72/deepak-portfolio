import React, { useState } from "react";
import { 
  CheckCircle,
  ArrowRight,
  Cpu
} from "lucide-react";

import {
  GitLabLogo,
  VaultLogo,
  TerraformLogo,
  KubernetesLogo,
  NginxLogo,
  PrometheusLogo,
  JenkinsLogo,
  AnsibleLogo,
  ArgoCDLogo,
  CloudflareLogo,
  GrafanaLogo,
  GithubIcon
} from "./Icons";

export default function PipelineVisualizer() {
  const [selectedNode, setSelectedNode] = useState(0);

  const getToolLogo = (toolName) => {
    if (toolName.includes("GitLab")) return <GitLabLogo className="w-4 h-4" />;
    if (toolName.includes("Jenkins")) return <JenkinsLogo className="w-4 h-4" />;
    if (toolName.includes("GitHub")) return <GithubIcon className="w-4 h-4 text-slate-800" />;
    if (toolName.includes("Vault")) return <VaultLogo className="w-4 h-4" />;
    if (toolName.includes("Terraform")) return <TerraformLogo className="w-4 h-4" />;
    if (toolName.includes("Ansible")) return <AnsibleLogo className="w-4 h-4" />;
    if (toolName.includes("Kubernetes") || toolName.includes("K8s")) return <KubernetesLogo className="w-4 h-4" />;
    if (toolName.includes("Argo")) return <ArgoCDLogo className="w-4 h-4" />;
    if (toolName.includes("NGINX")) return <NginxLogo className="w-4 h-4" />;
    if (toolName.includes("Cloudflare")) return <CloudflareLogo className="w-4 h-4" />;
    if (toolName.includes("Prometheus")) return <PrometheusLogo className="w-4 h-4" />;
    if (toolName.includes("Grafana")) return <GrafanaLogo className="w-4 h-4" />;
    return null;
  };

  const pipelineStages = [
    {
      id: "code-ci",
      title: "1. Code Commit & CI Pipeline",
      subtitle: "GitLab CI / GitHub Actions / Jenkins",
      logo: GitLabLogo,
      badge: "Automated Triggers",
      color: "border-orange-200 bg-orange-50/50",
      description: "Developers commit code to Git. Automated multi-stage pipelines trigger linting, unit testing, and parallel artifact build processes using Jenkins, GitLab CI, and GitHub Actions.",
      metrics: ["10+ Daily Releases Supported", "Parallel Build Matrix", "Automated Rollback Triggers"],
      tools: ["GitLab CI/CD", "GitHub Actions", "Jenkins", "Python", "Bash"],
    },
    {
      id: "security-vault",
      title: "2. Security & Secrets Management",
      subtitle: "HashiCorp Vault & SonarQube SAST",
      logo: VaultLogo,
      badge: "DevSecOps Integration",
      color: "border-teal-200 bg-teal-50/50",
      description: "Injects dynamic short-lived secrets via HashiCorp Vault. Performs automated SonarQube static security analysis (SAST) and container vulnerability scanning before image sign-off.",
      metrics: ["Dynamic Secrets Rotation", "Zero Hardcoded Credentials", "Kubernetes RBAC Enforced"],
      tools: ["HashiCorp Vault", "SonarQube", "K8s RBAC", "Cloudflare WAF"],
    },
    {
      id: "iac-terraform",
      title: "3. IaC & Configuration Management",
      subtitle: "Terraform & Ansible Drift Prevention",
      logo: TerraformLogo,
      badge: "Declarative Infra",
      color: "border-purple-200 bg-purple-50/50",
      description: "Provisions cloud resources across AWS, GCP, Azure & DigitalOcean using declarative Terraform modules. Uses Ansible playbooks to standardize middleware configuration and eliminate drift.",
      metrics: ["50+ TB Multi-Cloud Migration", "Spot Instance Scheduling", "Declarative HCL Modules"],
      tools: ["Terraform", "Ansible", "CloudFormation", "AWS VPC", "GCP Compute"],
    },
    {
      id: "k8s-gitops",
      title: "4. Kubernetes & GitOps Orchestration",
      subtitle: "Argo CD, Helm & KEDA Autoscaling",
      logo: KubernetesLogo,
      badge: "Self-Healing Clusters",
      color: "border-blue-200 bg-blue-50/50",
      description: "Deploys helm charts across 15+ production Kubernetes clusters. Enforces GitOps sync via Argo CD and event-driven pod autoscaling (KEDA) based on real-time traffic spikes.",
      metrics: ["15+ Kubernetes Clusters", "KEDA Event-Driven Scale", "Argo CD GitOps Sync"],
      tools: ["Kubernetes", "Helm", "Argo CD", "KEDA", "Docker"],
    },
    {
      id: "blue-green",
      title: "5. Minimum Downtime Blue/Green Release",
      subtitle: "NGINX & Cloudflare Traffic Router",
      logo: NginxLogo,
      badge: "Minimum Downtime",
      color: "border-emerald-200 bg-emerald-50/50",
      description: "Routes production traffic seamlessly between Blue (Active) and Green (New) cluster instances. Validates health probes before shifting 100% user traffic with instant rollback capability.",
      metrics: ["Minimum Deployment Downtime", "Health Probe Validation", "Instant Rollback Capability"],
      tools: ["NGINX Ingress", "Cloudflare WAF", "Varnish", "Redis Caching"],
    },
    {
      id: "observability",
      title: "6. Centralized Telemetry & SRE Alerting",
      subtitle: "Prometheus, Grafana & ELK Stack",
      logo: PrometheusLogo,
      badge: "99.99% Uptime SLO",
      color: "border-rose-200 bg-rose-50/50",
      description: "Monitors 40+ microservices using Prometheus metrics, Grafana visualization dashboards, and centralized ELK/Loki log aggregation with Alertmanager pager alerts.",
      metrics: ["40+ Microservices Monitored", "45% MTTR Reduction", "99.99% Platform Availability"],
      tools: ["Prometheus", "Grafana", "ELK Stack", "Loki", "Alertmanager"],
    },
  ];

  const currentStage = pipelineStages[selectedNode];
  const CurrentStageLogo = currentStage.logo;

  return (
    <section id="architecture" className="py-12 sm:py-16 lg:py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-[10px] sm:text-xs font-mono font-semibold">
            <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>ENTERPRISE GITOPS & DEVOPS LIFECYCLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Production Infrastructure Pipeline & Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click on any pipeline node below to inspect Deepak’s end-to-end automation strategy, security controls, and tech stack logos.
          </p>
        </div>

        {/* Interactive Pipeline Node Grid with Tech Stack Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-10">
          {pipelineStages.map((stage, idx) => {
            const StageLogo = stage.logo;
            const isSelected = selectedNode === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedNode(idx)}
                className={`p-3 sm:p-4 rounded-xl text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-white border-2 border-cyan-500 shadow-md shadow-cyan-500/10 scale-[1.02]"
                    : "bg-white border border-slate-200 hover:border-cyan-300 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 shadow-sm">
                      <StageLogo className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">STEP 0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{stage.title.split(". ")[1]}</h3>
                  <p className="text-[11px] font-mono text-slate-500 mt-1 line-clamp-1">{stage.subtitle}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-cyan-800 font-semibold">
                    {stage.badge}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 text-cyan-600 transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pipeline Stage Details Card */}
        <div className="glass-card rounded-xl sm:rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 bg-white relative overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-md">
                  <CurrentStageLogo className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-widest">
                    STAGE STACK SPECIFICATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{currentStage.title}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {currentStage.description}
              </p>

              {/* Tools Badges with Logos */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 font-bold">TOOLS & FRAMEWORKS UTILIZED:</span>
                <div className="flex flex-wrap gap-2">
                  {currentStage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-50 border border-slate-200 text-slate-800 font-semibold shadow-sm"
                    >
                      {getToolLogo(tool)}
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Metrics Card */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-mono text-slate-500 font-bold uppercase">STAGE OPERATIONAL HIGHLIGHTS</span>
                <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {currentStage.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
                    <span className="text-cyan-600 font-bold">&gt;</span>
                    <span className="text-slate-800 font-medium">{metric}</span>
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
