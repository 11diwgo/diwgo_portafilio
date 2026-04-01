import { useState } from "react";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Navbar, type Section } from "./components/Navbar";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("inicio");

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Navbar siempre visible */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Spacer para que el contenido no quede debajo del navbar fijo */}
      <div className="pt-14">

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

      </div>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
}
