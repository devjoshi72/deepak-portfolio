import React, { useState } from "react";
import { 
  ShieldCheck, 
  ArrowRight, 
  Award,
  Zap,
  Globe,
  RefreshCw,
  CheckCircle2
} from "lucide-react";
import { systemMetrics } from "../data/portfolioData";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("kubectl");
  const [blueGreenTraffic, setBlueGreenTraffic] = useState("GREEN");
  const [selectedTech, setSelectedTech] = useState(null);

  const handleToggleBlueGreen = () => {
    setBlueGreenTraffic((prev) => (prev === "GREEN" ? "BLUE" : "GREEN"));
  };

  const techBadges = [
    { name: "Kubernetes (EKS/AKS/GKE)", detail: "15+ Production Clusters Managed" },
    { name: "Terraform & IaC", detail: "Multi-cloud VPC Peering & automated provisioning" },
    { name: "CI/CD & GitOps (Jenkins/Argo)", detail: "Minimum Downtime Blue-Green deployment pipelines" },
    { name: "Observability (ELK/Grafana)", detail: "Centralized telemetry for 40+ microservices" },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 flex items-center">
      {/* Light Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[250px] sm:h-[400px] bg-cyan-500/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[250px] sm:w-[450px] h-[200px] sm:h-[350px] bg-blue-500/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Interactive Telemetry & Status Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] sm:text-xs font-mono">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 status-dot"></span>
            <span className="text-slate-500 font-semibold hidden sm:inline">STATUS:</span>
            <span className="text-emerald-700 font-bold">15 K8S CLUSTERS <span className="hidden sm:inline">OPERATIONAL</span></span>
          </div>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] sm:text-xs font-mono font-semibold shadow-sm">
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 inline" />
            <span>Employee of the Year 2025</span>
          </div>

          {/* Interactive Blue/Green Live Shift Toggle */}
          <button
            onClick={handleToggleBlueGreen}
            title="Click to simulate live Blue/Green minimum downtime traffic shift"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-800 text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer group shadow-sm"
          >
            <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 group-hover:rotate-180 transition-transform duration-500" />
            <span>TRAFFIC: <span className={blueGreenTraffic === "GREEN" ? "text-emerald-600 font-black" : "text-blue-600 font-black"}>{blueGreenTraffic} <span className="hidden sm:inline">CLUSTER </span>(100%)</span></span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Profile Avatar & Greeting Block */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-100">
                    <img
                      src="./profile.jpg"
                      alt="Deepak Chandra Profile Picture"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] sm:text-[10px] font-mono font-bold shadow-md border border-white flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    LIVE
                  </span>
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="font-mono text-cyan-700 text-xs sm:text-sm font-bold flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600 animate-bounce" />
                    <span>Hi, I'm</span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Deepak Chandra
                  </h1>

                  <div className="text-[10px] sm:text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Senior DevOps & SRE Specialist • 5+ Years Experience
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                Senior DevOps Engineer with <span className="text-cyan-800 font-bold bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">5+ years of experience</span> designing, automating, and managing scalable cloud and production infrastructure across AWS, Azure, GCP, and DigitalOcean. Expert in <span className="text-emerald-700 font-semibold">Kubernetes</span>, <span className="text-cyan-700 font-semibold">Terraform</span>, Ansible, CI/CD, GitOps, observability, cloud security, and distributed systems.
              </p>
            </div>

            {/* Interactive Tech Badge Pills */}
            <div className="space-y-2">
              <div className="text-[10px] sm:text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                Select Core Discipline To Inspect Details:
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {techBadges.map((badge) => (
                  <button
                    key={badge.name}
                    onClick={() => setSelectedTech(selectedTech === badge.name ? null : badge.name)}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono font-medium transition-all border cursor-pointer ${
                      selectedTech === badge.name
                        ? "bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-600/20"
                        : "bg-white text-slate-700 border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/50 shadow-sm"
                    }`}
                  >
                    {badge.name}
                  </button>
                ))}
              </div>
              {selectedTech && (
                <div className="p-2.5 sm:p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-[10px] sm:text-xs font-mono text-cyan-900 animate-fadeIn">
                  <span className="font-bold text-cyan-700">SPECIFICATION: </span>
                  {techBadges.find((b) => b.name === selectedTech)?.detail}
                </div>
              )}
            </div>

            {/* Quick System Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
              {systemMetrics.map((metric) => (
                <div key={metric.label} className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-extrabold text-slate-900">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-cyan-700 font-bold mt-0.5">{metric.label}</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono">{metric.suffix}</div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4 font-mono text-sm">
              <a
                href="/architecture"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, "", "/architecture");
                  const elem = document.getElementById("architecture");
                  if (elem) elem.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold transition-all shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/35 text-xs sm:text-sm"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Contact & Verification Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-3 text-[10px] sm:text-xs font-mono text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600" />
                <span>Dehradun, India (IST)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                <span>50k+ Active Users Supported</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600" />
                <span>Minimum Deployment Downtime</span>
              </div>
            </div>
          </div>

          {/* Interactive DevOps Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden scanline-effect">
              {/* Terminal Header */}
              <div className="bg-slate-900 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></div>
                  <span className="ml-1.5 sm:ml-2 font-mono text-[10px] sm:text-xs text-slate-400 truncate">sre-command-center ~ deepak@cloud-cluster</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-cyan-400 bg-cyan-950/80 px-2 sm:px-2.5 py-0.5 rounded-full border border-cyan-800 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="hidden sm:inline">LIVE </span>TELEMETRY
                </div>
              </div>

              {/* Interactive Terminal Tabs */}
              <div className="bg-slate-900/80 px-1.5 sm:px-2 pt-2 flex gap-0.5 sm:gap-1 border-b border-slate-800 font-mono text-[10px] sm:text-xs overflow-x-auto">
                <button
                  onClick={() => setActiveTab("kubectl")}
                  className={`px-2 sm:px-3 py-1.5 rounded-t-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === "kubectl"
                      ? "bg-slate-950 text-cyan-400 border-t border-x border-slate-800 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  kubectl get pods
                </button>
                <button
                  onClick={() => setActiveTab("terraform")}
                  className={`px-2 sm:px-3 py-1.5 rounded-t-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === "terraform"
                      ? "bg-slate-950 text-cyan-400 border-t border-x border-slate-800 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  terraform plan
                </button>
                <button
                  onClick={() => setActiveTab("observability")}
                  className={`px-2 sm:px-3 py-1.5 rounded-t-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === "observability"
                      ? "bg-slate-950 text-cyan-400 border-t border-x border-slate-800 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  grafana metrics
                </button>
              </div>

              {/* Terminal Content Output */}
              <div className="p-3 sm:p-4 bg-slate-950 font-mono text-[10px] sm:text-xs text-slate-200 min-h-[200px] sm:min-h-[260px] overflow-x-auto space-y-3">
                {activeTab === "kubectl" && (
                  <div className="space-y-1">
                    <p className="text-emerald-400 font-bold text-[10px] sm:text-xs">$ kubectl get pods -n production -o wide</p>
                    <div className="text-slate-400 text-[10px] sm:text-[11px] pt-1">
                      <div className="grid grid-cols-4 font-bold text-slate-300 border-b border-slate-800 pb-1 mb-1 gap-1">
                        <span>NAME</span>
                        <span>READY</span>
                        <span>STATUS</span>
                        <span>RESTARTS</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300 gap-1">
                        <span className="truncate">magento-app-v2</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300 gap-1">
                        <span className="truncate">kafka-broker-az1</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300 gap-1">
                        <span className="truncate">vault-secrets-mgr</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0</span>
                      </div>
                      <div className="grid grid-cols-4 text-cyan-300 gap-1">
                        <span className="truncate">druid-ingestion</span>
                        <span>1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span>0</span>
                      </div>
                    </div>
                    <p className="text-amber-400 pt-2 font-semibold text-[10px] sm:text-xs">
                      [INFO] Active Traffic: <span className="underline">{blueGreenTraffic} CLUSTER</span> (Minimum downtime).
                    </p>
                  </div>
                )}

                {activeTab === "terraform" && (
                  <div className="space-y-1">
                    <p className="text-emerald-400 font-bold">$ terraform plan -target=module.multi_cloud_vpc</p>
                    <p className="text-slate-400">
                      Terraform used the selected providers to generate the execution plan:
                    </p>
                    <div className="text-emerald-300 pt-1 space-y-1">
                      <p>+ aws_eks_cluster.prod_cluster (15 nodes auto-scaled)</p>
                      <p>+ aws_vpc_peering_connection.gcp_to_aws (50TB dataset stream)</p>
                      <p>+ vault_generic_secret.db_credentials (RBAC enforced)</p>
                    </div>
                    <p className="text-cyan-400 pt-2 font-bold">
                      Plan: 3 to add, 0 to change, 0 to destroy. Infrastructure state synced!
                    </p>
                  </div>
                )}

                {activeTab === "observability" && (
                  <div className="space-y-1">
                    <p className="text-emerald-400 font-bold break-all sm:break-normal">$ curl -s http://prometheus.internal:9090/api/v1/query?query=up</p>
                    <div className="bg-slate-900 p-2 sm:p-2.5 rounded border border-slate-800 text-[10px] sm:text-[11px] space-y-1.5">
                      <div className="flex justify-between text-slate-300 gap-2">
                        <span>Global Request Throughput:</span>
                        <span className="text-cyan-300 font-bold shrink-0">12,450 req/sec</span>
                      </div>
                      <div className="flex justify-between text-slate-300 gap-2">
                        <span>P99 Latency (Redis/Varnish):</span>
                        <span className="text-emerald-400 font-bold shrink-0">18 ms</span>
                      </div>
                      <div className="flex justify-between text-slate-300 gap-2">
                        <span>Active Microservices:</span>
                        <span className="text-purple-300 font-bold shrink-0">40 / 40 Healthy</span>
                      </div>
                      <div className="flex justify-between text-slate-300 gap-2">
                        <span>Alertmanager Trigger:</span>
                        <span className="text-emerald-400 font-bold shrink-0">0 Alerts (Nominal)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-slate-900 px-3 sm:px-4 py-2 sm:py-2.5 border-t border-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-400">
                <span>Click tabs to inspect SRE state</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
