# Deepak Chandra - Senior DevOps Engineer Portfolio

An impressive, high-performance portfolio built with **React**, **Vite**, **Tailwind CSS**, and pre-configured for instant deployment on **GitHub Pages**.

![SRE Telemetry Header](public/favicon.svg)

---

## 🚀 Quick Start & Local Development

To run this portfolio locally on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite local development server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 🌐 Deploying to GitHub Pages

This repository includes two seamless methods to deploy your portfolio to GitHub Pages:

### Option A: 1-Command CLI Deployment (Recommended)

1. Make sure your code is committed to Git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. Link your GitHub repository:
   ```bash
   git remote add origin https://github.com/<your-github-username>/MyPortfolio.git
   git branch -M main
   git push -u origin main
   ```

3. Deploy directly to GitHub Pages with 1 command:
   ```bash
   npm run deploy
   ```
   *This command automatically compiles your production bundle and pushes the `dist` folder to the `gh-pages` branch.*

4. On GitHub, go to **Settings** -> **Pages** -> ensure **Source** is set to `Deploy from a branch` and select **`gh-pages`** (`/root`).

---

### Option B: Automated GitHub Actions CI/CD Workflow

This project includes `.github/workflows/deploy.yml`. 

1. Simply push your code to `main` branch on GitHub:
   ```bash
   git push origin main
   ```
2. On GitHub, navigate to **Settings** -> **Pages** -> set **Source** to **GitHub Actions**.
3. Every time you push a commit, GitHub Actions will automatically test, build, and deploy your updated portfolio.

---

## 📄 PDF Resume Integration

Your official resume PDF is located in the `public/` directory:
- `public/DeepakChandra_Senior-DevOpsEngineer.pdf`
- `public/resume.pdf`

Visitors can inspect the live embedded document in the **Resume Hub** section or download it directly with one click.

---

## 🛠️ Tech Stack & Key Features

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons, Framer Motion
- **SRE Command Center Theme**: Cyber dark aesthetic with live system telemetry badges
- **Interactive SRE CLI Terminal**: Launchable terminal modal with custom commands (`help`, `kubectl get pods`, `terraform plan`, `skills`, `download-resume`)
- **GitOps Pipeline Visualizer**: Interactive multi-stage CI/CD flow diagram
- **Production Case Studies**: Highlights multi-cloud migration (50+ TB), Kafka/Druid multi-DC pipelines, Magento e-commerce caching, and 40+ microservice telemetry
- **Certifications & Honors**: Highlights Employee of the Year 2025 award, OCI Professional Certifications, and CKA / Terraform Associate targets.
