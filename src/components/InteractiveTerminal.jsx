import React, { useState, useRef, useEffect } from "react";
import { Terminal, X, Minimize2, Maximize2, Sparkles, Download } from "lucide-react";
import { personalDetails, experiences } from "../data/portfolioData";

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "SRE Interactive Terminal v5.2 (Cloud Reliability CLI)" },
    { type: "system", content: "Type 'help' to see all available commands, or try 'kubectl get pods'." },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "input", content: `$ ${inputVal}` }];

    if (cmd === "help") {
      newHistory.push({
        type: "output",
        content: `AVAILABLE SRE CLI COMMANDS:
  summary          - Show professional summary
  experience       - List work history and senior DevOps roles
  skills           - Show cloud, IaC, and Kubernetes tech stack
  kubectl get pods - Query live production cluster pod statuses
  terraform plan   - Simulate multi-cloud infrastructure plan
  award            - View Employee of the Year 2025 details
  contact          - Display phone, email, and LinkedIn details
  download-resume  - Download official Deepak Chandra PDF resume
  clear            - Clear terminal output window`,
      });
    } else if (cmd === "summary" || cmd === "cat summary") {
      newHistory.push({
        type: "output",
        content: `SUMMARY: ${personalDetails.summary}`,
      });
    } else if (cmd === "experience" || cmd.includes("kubectl get exp")) {
      const expText = experiences
        .map((e) => `• ${e.role} @ ${e.company} (${e.period})\n  Highlights: ${e.highlights[0]}`)
        .join("\n\n");
      newHistory.push({ type: "output", content: expText });
    } else if (cmd === "skills" || cmd.includes("kubectl get skills")) {
      newHistory.push({
        type: "output",
        content: `TECH MATRIX:
  Cloud: AWS (EKS, VPC, RDS), Azure (AKS), GCP (GKE), DigitalOcean
  IaC: Terraform, Ansible, CloudFormation
  Containers: Kubernetes, Docker, Helm, KEDA, Argo CD
  Observability: Prometheus, Grafana, ELK, Loki, Alertmanager
  Security: HashiCorp Vault, K8s RBAC, SonarQube, Cloudflare WAF`,
      });
    } else if (cmd.includes("kubectl get pods")) {
      newHistory.push({
        type: "output",
        content: `NAMESPACE    NAME                             READY   STATUS    RESTARTS   AGE
production   magento-frontend-6df8           1/1     Running   0          42d
production   kafka-data-stream-az1           1/1     Running   0          18d
production   druid-analytics-broker          1/1     Running   0          18d
production   vault-secret-injector           1/1     Running   0          90d
production   prometheus-k8s-0                1/1     Running   0          120d`,
      });
    } else if (cmd.includes("terraform")) {
      newHistory.push({
        type: "output",
        content: `Terraform v1.8.5 on linux_amd64
+ module.gcp_to_aws_migration.vpc_peering (50+ TB Data Link Verified)
+ module.eks_cluster.node_group ("15 Clusters Auto-healing")
+ module.vault.dynamic_secrets ("RBAC Enforced")

Plan: 3 to add, 0 to change, 0 to destroy. Zero downtime guaranteed!`,
      });
    } else if (cmd === "contact") {
      newHistory.push({
        type: "output",
        content: `CONTACT INFORMATION:
  Phone: ${personalDetails.phone}
  Email: ${personalDetails.email}
  LinkedIn: ${personalDetails.linkedin}
  Location: ${personalDetails.location}`,
      });
    } else if (cmd === "award") {
      newHistory.push({
        type: "output",
        content: `🏆 AWARD: Employee of the Year 2025
  Issuer: Ebizon Net Info Pvt. Ltd.
  Citation: Recognized for zero-downtime Blue-Green pipelines, 15+ cluster reliability, and engineering excellence.`,
      });
    } else if (cmd === "download-resume") {
      const link = document.createElement("a");
      link.href = personalDetails.resumePath;
      link.download = "DeepakChandra_Senior-DevOpsEngineer.pdf";
      link.click();
      newHistory.push({
        type: "output",
        content: "[SUCCESS] Downloading DeepakChandra_Senior-DevOpsEngineer.pdf...",
      });
    } else if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else {
      newHistory.push({
        type: "error",
        content: `zsh: command not found: ${inputVal}. Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-card max-w-3xl w-full rounded-2xl border border-emerald-500/40 bg-[#070b14] overflow-hidden shadow-2xl flex flex-col h-[520px]">
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white">sre-interactive-cli -- bash</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output Body */}
        <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-2 bg-[#070a12] text-slate-200">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === "system" && <div className="text-cyan-400">[SYS] {item.content}</div>}
              {item.type === "input" && <div className="text-emerald-400 font-bold">{item.content}</div>}
              {item.type === "output" && <pre className="text-gray-300 whitespace-pre-wrap font-mono text-xs bg-slate-900/60 p-2 rounded border border-slate-800">{item.content}</pre>}
              {item.type === "error" && <div className="text-rose-400">{item.content}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form Bar */}
        <form onSubmit={handleCommandSubmit} className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-400 font-bold">deepak@sre-cli:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'kubectl get pods', 'skills', etc..."
            className="flex-1 bg-transparent border-0 outline-none text-white placeholder-gray-500 font-mono"
            autoFocus
          />
          <button type="submit" className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30">
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
}
