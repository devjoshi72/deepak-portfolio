import React, { useState } from "react";
import { 
  ShieldCheck, 
  Terminal, 
  Download, 
  ArrowRight, 
  Layers, 
  Server, 
  CheckCircle2, 
  Award,
  Zap,
  Globe
} from "lucide-react";
import { personalDetails, systemMetrics } from "../data/portfolioData";
import confetti from "canvas-confetti";

export default function Hero({ onOpenTerminal }) {
  const [activeTab, setActiveTab] = useState("kubectl");

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-grid-pattern bg-radial-gradient flex items-center">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Operational Status Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono mb-8 text-cyan-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot"></span>
          <span className="text-gray-300">STATUS:</span>
          <span className="text-emerald-400 font-semibold">15 PRODUCTION K8S CLUSTERS OPERATIONAL</span>
          <span className="text-gray-500">|</span>
          <span className="text-amber-400 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 inline" /> Employee of the Year 2025
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="font-mono text-cyan-400 text-sm tracking-wider uppercase flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span>Platform Engineer & Cloud Reliability Specialist</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Architecting High-Availability <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                  Multi-Cloud Infrastructure
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Senior DevOps Engineer with <span className="text-cyan-300 font-semibold">5+ years of experience</span> automating, scaling, and protecting mission-critical workloads across AWS, Azure, GCP, and DigitalOcean. Expert in <span className="text-emerald-400">Kubernetes</span>, <span className="text-cyan-400">Terraform</span>, GitOps, zero-downtime Blue-Green deployments, and multi-DC distributed data streams.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {systemMetrics.map((metric) => (
                <div key={metric.label} className="p-3 rounded-lg glass-card border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className={`text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-white font-medium mt-0.5">{metric.label}</div>
                  <div className="text-[10px] text-gray-400 font-mono">{metric.suffix}</div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-sm">
              <a
                href="#architecture"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalDetails.resumePath}
                download="DeepakChandra_Senior-DevOpsEngineer.pdf"
                onClick={triggerConfetti}
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg glass-card border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-all text-xs"
              >
                <Terminal className="w-4 h-4" />
                <span>LAUNCH CLI</span>
              </button>
            </div>

            {/* Quick Contact info */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-gray-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dehradun, India (IST)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>50k+ Users Supported</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Deployment Downtime</span>
              </div>
            </div>
          </div>

          {/* Interactive DevOps Terminal Preview Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-xl glass-card border border-slate-700/60 shadow-2xl shadow-cyan-950/40 overflow-hidden scanline-effect">
              {/* Terminal Titlebar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-gray-400">sre-command-center ~ deepak@cloud-cluster</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  LIVE
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="bg-slate-950/80 px-2 pt-2 flex gap-1 border-b border-slate-800/60 font-mono text-xs">
                <button
                  onClick={() => setActiveTab("kubectl")}
                  className={`px-3 py-1.5 rounded-t-md transition-colors ${
                    activeTab === "kubectl"
                      ? "bg-slate-900 text-cyan-400 border-t border-x border-cyan-500/40 font-semibold"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  kubectl get pods
                </button>
                <button
                  onClick={() => setActiveTab("terraform")}
                  className={`px-3 py-1.5 rounded-t-md transition-colors ${
                    activeTab === "terraform"
                      ? "bg-slate-900 text-cyan-400 border-t border-x border-cyan-500/40 font-semibold"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  terraform output
                </button>
                <button
                  onClick={() => setActiveTab("observability")}
                  className={`px-3 py-1.5 rounded-t-md transition-colors ${
                    activeTab === "observability"
                      ? "bg-slate-900 text-cyan-400 border-t border-x border-cyan-500/40 font-semibold"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  grafana metrics
                </button>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 bg-[#070b14] font-mono text-xs text-gray-300 min-h-[260px] overflow-x-auto space-y-3">
                {activeTab === "kubectl" && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-emerald-400">$ kubectl get pods -n production -o wide</p>
                    <div className="text-gray-400 text-[11px] pt-1">
                      <div className="grid grid-cols-4 font-bold text-gray-200 border-b border-slate-800 pb-1 mb-1">
                        <span>NAME</span>
                        <span>READY</span>
                        <span>STATUS</span>
                        <span>RESTARTS</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300">
                        <span>magento-app-v2-7f</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0 (0d downtime)</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300">
                        <span>kafka-broker-az1</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300">
                        <span>vault-secrets-mgr</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300">
                        <span>druid-ingestion-keda</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0</span>
                      </div>
                    </div>
                    <p className="text-amber-400 pt-2">
                      [INFO] Blue/Green Deployment strategy: 100% traffic shifted to Green cluster.
                    </p>
                  </div>
                )}

                {activeTab === "terraform" && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-emerald-400">$ terraform plan -target=module.multi_cloud_vpc</p>
                    <p className="text-gray-400">
                      Terraform used the selected providers to generate the following execution plan:
                    </p>
                    <div className="text-emerald-300 pt-1 space-y-1">
                      <p>+ aws_eks_cluster.prod_cluster (15 nodes auto-scaled)</p>
                      <p>+ aws_vpc_peering_connection.gcp_to_aws (50TB dataset stream)</p>
                      <p>+ vault_generic_secret.db_credentials (rotated)</p>
                    </div>
                    <p className="text-cyan-400 pt-2 font-bold">
                      Plan: 3 to add, 0 to change, 0 to destroy. Infrastructure state synced!
                    </p>
                  </div>
                )}

                {activeTab === "observability" && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-emerald-400">$ curl -s http://prometheus.internal:9090/api/v1/query?query=up</p>
                    <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 text-[11px] space-y-1">
                      <div className="flex justify-between text-gray-300">
                        <span>Global Request Rate:</span>
                        <span className="text-cyan-300 font-bold">12,450 req/sec</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>P99 Latency (Redis/Varnish):</span>
                        <span className="text-emerald-400 font-bold">18 ms</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Active Microservices Scraped:</span>
                        <span className="text-purple-300 font-bold">40 / 40 Healthy</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Alertmanager Active Trigger:</span>
                        <span className="text-emerald-400 font-bold">0 Alerts (All Systems Nominal)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer CTA */}
              <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Click tabs to inspect SRE configurations</span>
                <button
                  onClick={onOpenTerminal}
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Full Interactive CLI</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
