"use client";

import { Shield, Briefcase, Star, Cpu, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export type Section = "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto";

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "inicio",        label: "Inicio",          icon: <Shield className="w-4 h-4" /> },
  { id: "experiencia",   label: "Experiencia",      icon: <Briefcase className="w-4 h-4" /> },
  { id: "conocimientos", label: "Conocimientos",    icon: <Cpu className="w-4 h-4" /> },
  { id: "testimonios",   label: "Testimonios",      icon: <Star className="w-4 h-4" /> },
  { id: "contacto",      label: "Contacto",         icon: <Mail className="w-4 h-4" /> },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section: Section) => {
    onNavigate(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-emerald-900/40 shadow-lg shadow-black/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNav("inicio")}
            className="text-emerald-400 font-bold text-lg tracking-tighter hover:text-emerald-300 transition-colors"
          >
            _diwgo_
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/50"
                      : "text-gray-400 hover:text-emerald-300 hover:bg-emerald-900/30"
                    }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-400 hover:text-emerald-400 transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-stone-950/95 border-t border-emerald-900/30 px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-200
                  ${isActive
                    ? "bg-emerald-600 text-white"
                    : "text-gray-400 hover:text-emerald-300 hover:bg-emerald-900/30"
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
