import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Hero />
      <div id="experiencia">
        <Experience />
      </div>
      <Testimonials />
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}