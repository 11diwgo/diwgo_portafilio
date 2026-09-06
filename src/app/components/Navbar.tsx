import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

export type Section = "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto" | "multimedia";

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { id: Section; label: string }[] = [
  { id: "inicio", label: "Inicio" },
  { id: "experiencia", label: "Experiencia" },
  { id: "conocimientos", label: "Sobre mí" },
  { id: "testimonios", label: "Reviews" },
  { id: "multimedia", label: "Multimedia" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (section: Section) => {
    onNavigate(section);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-border"
            : "bg-background/60 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => handleNav("inicio")}
            className="text-foreground text-lg"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            diwgo
          </button>

          <div ref={navRef} className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`relative text-sm transition-colors py-1 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-0 right-0 h-px bg-primary" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <DarkModeToggle />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"}`}>
          <div className="px-4 py-3 flex flex-col gap-1 bg-background">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-left px-2 py-2.5 rounded-md text-sm transition-colors ${
                    isActive ? "text-foreground bg-secondary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2 pl-2">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16" />
    </>
  );
}