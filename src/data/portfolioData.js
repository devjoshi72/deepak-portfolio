export const personalDetails = {
  name: "Deepak Chandra",
  title: "Senior DevOps Engineer | Platform Engineer | Cloud & SRE",
  location: "Dehradun, Uttarakhand, India",
  email: "deepakjoshiuk.in@gmail.com",
  linkedin: "https://linkedin.com/in/deepakchandra72",
  github: "https://github.com/deepakchandra72",
  resumePath: "./DeepakChandra_Senior-DevOpsEngineer.pdf",
  summary: "Senior DevOps Engineer with 5+ years of experience designing, automating, and managing scalable cloud and production infrastructure across AWS, Azure, GCP, and DigitalOcean. Strong expertise in Kubernetes, Terraform, Ansible, CI/CD, GitOps, observability, cloud security, and distributed systems. Experienced in managing high-traffic Magento platforms, multi-cloud migrations, Kafka/Druid/Aerospike environments, disaster recovery, centralized monitoring, and production reliability.",
};

export const systemMetrics = [
  { label: "Production Clusters", value: "15+", suffix: "K8s Clusters", color: "from-cyan-500 to-blue-500" },
  { label: "Data Migrated", value: "50+", suffix: "Terabytes", color: "from-emerald-500 to-teal-500" },
  { label: "Daily Deployments", value: "10+", suffix: "Minimum Downtime", color: "from-purple-500 to-indigo-500" },
  { label: "Platform Uptime", value: "99.99%", suffix: "SLO Achieved", color: "from-amber-500 to-orange-500" },
];

export const technicalSkills = [
  {
    category: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: ["AWS (EKS, EC2, Lambda, S3, RDS, VPC)", "Azure (AKS)", "GCP (GKE)", "DigitalOcean", "VPC Networking"],
  },
  {
    category: "Infrastructure as Code",
    icon: "FileCode",
    skills: ["Terraform", "Ansible", "CloudFormation", "State Management", "Spot-Instance Scheduling"],
  },
  {
    category: "Containers & Orchestration",
    icon: "Box",
    skills: ["Kubernetes", "Docker", "Helm", "KEDA", "Argo CD", "GitOps"],
  },
  {
    category: "CI/CD & Automation",
    icon: "GitBranch",
    skills: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure DevOps", "AWS CodeDeploy", "Python", "Bash"],
  },
  {
    category: "Monitoring & Observability",
    icon: "Activity",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Loki", "CloudWatch", "Alertmanager"],
  },
  {
    category: "Security & Networking",
    icon: "ShieldCheck",
    skills: ["HashiCorp Vault", "Kubernetes RBAC", "SonarQube", "Cloudflare WAF", "NGINX"],
  },
  {
    category: "Databases & Middleware",
    icon: "Database",
    skills: ["Kafka", "Druid", "Aerospike", "Redis", "Varnish", "PostgreSQL", "MongoDB", "RabbitMQ"],
  },
  {
    category: "Platforms & Applications",
    icon: "Server",
    skills: ["Magento 1 & 2", "WordPress", "Drupal", "Enterprise Linux", "Windows Server"],
  },
];

export const experiences = [
  {
    role: "Senior DevOps Engineer",
    company: "Ebizon Net Info Pvt. Ltd.",
    location: "Dehradun, India",
    period: "Aug 2025 – Present",
    type: "Full-time",
    highlights: [
      "Orchestrated multi-region cloud-native infrastructure across 15+ production clusters, maintaining high availability through proactive scaling and automated self-healing configurations.",
      "Architected Blue-Green deployment pipelines supporting 10+ daily production releases, maintaining minimum downtime.",
      "Automated enterprise infrastructure provisioning using Terraform, including resource lifecycle management and spot-instance scheduling for non-critical workloads.",
      "Strengthened platform security by implementing HashiCorp Vault for dynamic secrets management and Kubernetes RBAC for least-privilege access control.",
    ],
    tags: ["Kubernetes", "Terraform", "Blue/Green", "HashiCorp Vault", "AWS/Azure/GCP", "KEDA"],
  },
  {
    role: "DevOps Engineer",
    company: "Ebizon Net Info Pvt. Ltd.",
    location: "Dehradun, India",
    period: "Sep 2024 – Aug 2025",
    type: "Full-time",
    highlights: [
      "Optimized enterprise Magento platforms using Redis and Varnish, improving application performance for 50,000+ global users.",
      "Standardized application deployment workflows using Ansible across Development, Staging, and Production environments, reducing configuration drift.",
      "Engineered centralized ELK and Grafana monitoring for 40+ microservices, improving production visibility and incident response.",
      "Managed production infrastructure, application deployments, caching, monitoring, troubleshooting, and reliability improvements across multiple environments.",
    ],
    tags: ["Magento", "Redis", "Varnish", "Ansible", "ELK Stack", "Grafana", "Prometheus"],
  },
  {
    role: "DevOps Engineer",
    company: "TorcAi Digital Media Pvt. Ltd.",
    location: "Dehradun, India",
    period: "Feb 2023 – Sep 2024",
    type: "Full-time",
    highlights: [
      "Managed large-scale distributed Kafka, Druid, and Aerospike clusters, maintaining data persistence through disaster recovery pipelines across 3 data centers.",
      "Executed a GCP-to-AWS multi-cloud migration using Terraform, including secure cross-cloud networking and migration of 50+ TB of data.",
      "Integrated SonarQube security and code-quality scanning into GitLab CI/CD pipelines to identify vulnerabilities earlier in the software development lifecycle.",
      "Supported production infrastructure, distributed systems, deployments, monitoring, troubleshooting, and disaster recovery operations.",
    ],
    tags: ["Kafka", "Druid", "Aerospike", "GCP to AWS", "Terraform", "GitLab CI/CD", "SonarQube"],
  },
  {
    role: "Operations Associate",
    company: "FirstCry – Digital Age Pvt. Ltd.",
    location: "Dehradun, India",
    period: "Sep 2022 – Feb 2023",
    type: "Full-time",
    highlights: [
      "Resolved 50+ customer inquiries daily, providing real-time technical and operational support.",
      "Coordinated with 3 internal logistics teams to ensure accurate order processing and delivery for high-volume e-commerce operations.",
    ],
    tags: ["Operations", "Technical Support", "Logistics Operations"],
  },
  {
    role: "Junior Software Engineer",
    company: "Shoviv Software Pvt. Ltd.",
    location: "Dehradun, India",
    period: "Mar 2022 – Aug 2022",
    type: "Full-time",
    highlights: [
      "Developed enterprise data recovery software using VC++ and C#, resolving 20+ high-priority defects during the software development lifecycle.",
      "Assisted with onboarding and technical training for engineering hires, covering product architecture and code-quality standards.",
    ],
    tags: ["VC++", "C#", "Data Recovery", "Code Quality"],
  },
  {
    role: "Technical Support Engineer",
    company: "Shoviv Software Pvt. Ltd.",
    location: "Dehradun, India",
    period: "Oct 2021 – Mar 2022",
    type: "Full-time",
    highlights: [
      "Provided Level-2 technical support for global customers across software and hardware environments.",
      "Diagnosed and resolved issues involving Windows Server, VMware, Microsoft Exchange, HCL Domino Server, Active Directory, networking, and remote desktop environments.",
    ],
    tags: ["Windows Server", "VMware", "Active Directory", "Network Troubleshooting", "Azure"],
  },
];

export const keyProjects = [
  {
    id: "multi-cloud-migration",
    title: "Multi-Cloud Infrastructure & Migration",
    category: "Cloud Migration",
    subtitle: "GCP to AWS 50+ TB Data & Infrastructure Migration",
    description: "Designed and managed cloud infrastructure across AWS, GCP, and Azure. Executed large-scale cloud migration using Terraform for IaC, establishing secure cross-cloud VPC peering, automated EKS deployments, and zero data loss transfer of 50+ TB digital analytics data.",
    tools: ["AWS EKS", "GCP GKE", "Terraform", "VPC Networking", "Kubernetes"],
    stats: [
      { label: "Data Moved", value: "50+ TB" },
      { label: "Downtime", value: "Minimum" },
      { label: "Cost Saved", value: "28%" },
    ],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    borderColor: "border-cyan-500/30",
  },
  {
    id: "distributed-data-platform",
    title: "Distributed Data Platform & Disaster Recovery",
    category: "Distributed Systems",
    subtitle: "Kafka, Druid & Aerospike Multi-DC Pipeline",
    description: "Managed distributed data infrastructure supporting high-volume workloads across 3 data centers. Built automated replication and failover pipelines ensuring high data persistence and operational resilience for real-time digital media workloads.",
    tools: ["Kafka", "Druid", "Aerospike", "Disaster Recovery", "Alertmanager"],
    stats: [
      { label: "Data Centers", value: "3 Regional" },
      { label: "Throughput", value: "100k+ msg/s" },
      { label: "RPO / RTO", value: "< 1 min" },
    ],
    gradient: "from-purple-600/20 via-indigo-500/10 to-transparent",
    borderColor: "border-purple-500/30",
  },
  {
    id: "ecommerce-optimization",
    title: "E-Commerce High-Traffic Platform Optimization",
    category: "Performance SRE",
    subtitle: "Magento 2 Caching & High-Availability Stack",
    description: "Optimized Magento production environments using application and infrastructure-level caching (Redis & Varnish), NGINX reverse proxies, and Kubernetes horizontal pod autoscaling for platforms serving 50,000+ global users.",
    tools: ["Magento 2", "Redis", "Varnish", "NGINX", "KEDA / K8s"],
    stats: [
      { label: "Global Users", value: "50,000+" },
      { label: "Response Speed", value: "+65% Faster" },
      { label: "Peak Cache Hit", value: "94%" },
    ],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    borderColor: "border-emerald-500/30",
  },
  {
    id: "production-observability",
    title: "Centralized Microservices Telemetry Engine",
    category: "Observability & SRE",
    subtitle: "Prometheus, Grafana & ELK Stack for 40+ Microservices",
    description: "Built centralized monitoring, logging, dashboards, and alerting for 40+ microservices using Prometheus, Grafana, ELK Stack, Loki, and Alertmanager. Improved operational visibility and supported faster incident investigation.",
    tools: ["Prometheus", "Grafana", "ELK Stack", "Loki", "CloudWatch"],
    stats: [
      { label: "Microservices", value: "40+" },
      { label: "MTTR Reduction", value: "45%" },
      { label: "Log Volume", value: "1.2 TB/day" },
    ],
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    borderColor: "border-amber-500/30",
  },
];

export const certifications = [
  {
    title: "Awarded Employee of the Year 2025",
    issuer: "Ebizon Net Info Pvt. Ltd.",
    status: "Achieved",
    badge: "🏆 Award",
    year: "2025",
    description: "Recognized for outstanding technical contribution, reliability excellence, and minimum downtime Blue-Green pipeline implementation.",
  },
  {
    title: "Oracle Cloud Infrastructure - Accredited DevOps Professional",
    issuer: "Oracle Cloud",
    status: "Verified",
    badge: "📜 Accredited Professional",
    year: "2024",
    description: "Validation of CI/CD automation, cloud deployment, and infrastructure orchestration capabilities on Oracle Cloud.",
  },
  {
    title: "Oracle Cloud Infrastructure - Credentialed Foundations Associate",
    issuer: "Oracle Cloud",
    status: "Verified",
    badge: "📜 Foundations Associate",
    year: "2024",
    description: "Core cloud architecture, networking, security, and cloud compute fundamental certification.",
  },
  {
    title: "Fortinet: Network Security Expert (NSE) Level 1",
    issuer: "Fortinet",
    status: "Verified",
    badge: "🛡️ Network Security",
    year: "2023",
    description: "Essential threat landscape awareness, firewall security, and enterprise perimeter protection standards.",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    status: "In Progress",
    badge: "⚡ In Progress (Target Q4 2026)",
    year: "2026",
    description: "Hands-on cluster administration, storage, networking, security, and troubleshooting mastery.",
  },
  {
    title: "HashiCorp Certified: Terraform Associate (004)",
    issuer: "HashiCorp",
    status: "In Progress",
    badge: "⚡ In Progress (Target Q4 2026)",
    year: "2026",
    description: "Infrastructure as Code execution, state management, module design, and HCL best practices.",
  },
];

export const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Uttarakhand Open University",
    period: "2022 - 2024",
  },
  {
    degree: "Diploma in Engineering (Information Technology)",
    institution: "Uttarakhand Board of Technical Education (UBTE)",
    period: "2018 - 2021",
  },
  {
    degree: "Bachelor of Arts (BA)",
    institution: "Uttarakhand Open University",
    period: "2018 - 2021",
  },
];
