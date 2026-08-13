import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PipelineVisualizer from "./components/PipelineVisualizer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsMatrix from "./components/SkillsMatrix";
import Certifications from "./components/Certifications";
import ResumeViewer from "./components/ResumeViewer";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import InteractiveTerminal from "./components/InteractiveTerminal";

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a12] text-gray-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <PipelineVisualizer />
        <Experience />
        <Projects />
        <SkillsMatrix />
        <Certifications />
        <ResumeViewer />
        <ContactSection />
      </main>
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
