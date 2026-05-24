import { ClickParticles } from "./components/ClickParticles";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { DiscordToast } from "./components/DiscordToast";
import { PageTransition } from "./components/PageTransition";

type Section = "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("inicio");

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <ClickParticles />
      <DiscordToast />
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      <AnimatePresence mode="wait">
        {activeSection === "inicio" && (
          <PageTransition id="inicio">
            <Hero onNavigate={setActiveSection} />
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

      <Footer />
    </div>
  );
}