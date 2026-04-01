"use client";

import { Home, Briefcase, Cpu, Star, Mail } from "lucide-react";

export type Section = "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto";

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "inicio",        label: "Inicio",        icon: <Home      className="w-5 h-5" /> },
  { id: "experiencia",   label: "Experiencia",   icon: <Briefcase className="w-5 h-5" /> },
  { id: "conocimientos", label: "Skills",        icon: <Cpu       className="w-5 h-5" /> },
  { id: "testimonios",   label: "Testimonios",   icon: <Star      className="w-5 h-5" /> },
  { id: "contacto",      label: "Contacto",      icon: <Mail      className="w-5 h-5" /> },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const handleNav = (section: Section) => {
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-700/60 shadow-xl shadow-black/50">
        {navItems.map((item, i) => {
          const isActive = activeSection === item.id;
          return (
            <div key={item.id} className="relative group flex items-center">
              {/* Separador visual antes de Contacto */}
              {i === 4 && (
                <div className="w-px h-6 bg-stone-600/60 mx-1" />
              )}

              <button
                onClick={() => handleNav(item.id)}
                aria-label={item.label}
                className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200
                  ${isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/60 scale-105"
                    : "text-stone-400 hover:text-emerald-300 hover:bg-stone-800"
                  }`}
              >
                {item.icon}
              </button>

              {/* Tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-stone-800 border border-stone-700/60 px-2 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-md">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

