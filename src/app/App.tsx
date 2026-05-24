import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Navbar, type Section } from "./components/Navbar";
import { DiscordToast } from "./components/DiscordToast";
import { PageTransition } from "./components/PageTransition";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("inicio");

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    // Scroll suave al top (opcional)
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#d8eedf" }}>
      {/* Navbar siempre visible */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Toast Discord rotatorio */}
      <DiscordToast />

      {/* Secciones con transiciones suaves */}
      <AnimatePresence mode="wait">
        {activeSection === "inicio" && (
          <PageTransition id="inicio">
            <Hero onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {activeSection === "experiencia" && (
          <PageTransition id="experiencia">
            <Experience />
          </PageTransition>
        )}

        {activeSection === "conocimientos" && (
          <PageTransition id="conocimientos">
            <Skills />
          </PageTransition>
        )}

        {activeSection === "testimonios" && (
          <PageTransition id="testimonios">
            <Testimonials />
          </PageTransition>
        )}

        {activeSection === "contacto" && (
          <PageTransition id="contacto">
            <Contact />
          </PageTransition>
        )}
      </AnimatePresence>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
}
