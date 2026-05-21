import { useState } from "react";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Navbar, type Section } from "./components/Navbar";
import { DiscordToast } from "./components/DiscordToast";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("inicio");

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#d8eedf" }}>
      {/* Navbar siempre visible */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Toast Discord rotatorio */}
      <DiscordToast />

      {activeSection === "inicio" && (
        <Hero onNavigate={handleNavigate} />
      )}

      {activeSection === "experiencia" && (
        <Experience />
      )}

      {activeSection === "conocimientos" && (
        <Skills />
      )}

      {activeSection === "testimonios" && (
        <Testimonials />
      )}

      {activeSection === "contacto" && (
        <Contact />
      )}

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
}

