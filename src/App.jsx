import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PipelineVisualizer from "./components/PipelineVisualizer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsMatrix from "./components/SkillsMatrix";
import Certifications from "./components/Certifications";
import ResumeViewer from "./components/ResumeViewer";
import ContactSection from "./components/ContactSection";

export default function App() {
  useEffect(() => {
    const pathToIdMap = {
      "/profile": "hero",
      "/architecture": "architecture",
      "/experience": "experience",
      "/projects": "projects",
      "/skills": "skills",
      "/connect": "connect",
      "/lets-connect": "connect",
    };

    const handleRouteScroll = () => {
      const currentPath = window.location.pathname.toLowerCase();
      const targetId = pathToIdMap[currentPath];
      if (targetId) {
        setTimeout(() => {
          const elem = document.getElementById(targetId);
          if (elem) elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    handleRouteScroll();

    window.addEventListener("popstate", handleRouteScroll);
    return () => window.removeEventListener("popstate", handleRouteScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PipelineVisualizer />
        <Experience />
        <Projects />
        <SkillsMatrix />
        <Certifications />
        <ResumeViewer />
        <ContactSection />
      </main>
    </div>
  );
}
