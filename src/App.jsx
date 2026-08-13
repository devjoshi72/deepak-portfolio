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
