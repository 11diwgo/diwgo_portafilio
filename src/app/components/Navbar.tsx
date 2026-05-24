import { useState, useEffect, useRef, type ReactNode } from "react";
import { Home, Briefcase, User, Star, Mail, Terminal } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

export type Section = "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto";

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { id: Section; label: string; icon: ReactNode }[] = [
  { id: "inicio",        label: "~/inicio",   icon: <Home      className="w-4 h-4" /> },
  { id: "experiencia",   label: "~/exp",      icon: <Briefcase className="w-4 h-4" /> },
  { id: "conocimientos", label: "~/sobre-mi", icon: <User      className="w-4 h-4" /> },
  { id: "testimonios",   label: "~/reviews",  icon: <Star      className="w-4 h-4" /> },
  { id: "contacto",      label: "~/contacto", icon: <Mail      className="w-4 h-4" /> },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef  = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const activeIndex = navItems.findIndex((i) => i.id === activeSection);
    const el  = itemRefs.current[activeIndex];
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect  = el.getBoundingClientRect();
      setIndicatorStyle({ left: elRect.left - navRect.left, width: elRect.width });
    }
  }, [activeSection]);

  const handleNav = (section: Section) => {
    onNavigate(section);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-green-500/5 border-b border-green-100 dark:border-gray-800"
            : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-green-50 dark:border-gray-800"
        }`}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => handleNav("inicio")} className="flex items-center gap-2 group">
            <div
              className="relative w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300"
              style={{ boxShadow: "0 0 15px rgba(34,197,94,0.5)" }}
            >
              <Terminal className="w-4 h-4 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-bold text-green-700 dark:text-green-400 text-sm tracking-tight">
              _diwgo_
              <span className="text-green-400 animate-blink">█</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative bg-green-50/80 dark:bg-gray-800/80 rounded-xl p-1 border border-green-100 dark:border-gray-700"
          >
            <div
              className="absolute top-1 h-[calc(100%-8px)] bg-green-500 rounded-lg transition-all duration-300 ease-out"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width, boxShadow: "0 0 12px rgba(34,197,94,0.6)" }}
            />
            {navItems.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  onClick={() => handleNav(item.id)}
                  className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300"
                  }`}
                >
                  <span className={`transition-all duration-200 ${isActive ? "opacity-100" : "opacity-60"}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right: DarkMode + status */}
          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle />
            <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-green" />
              <span>online</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span className={`block h-0.5 w-5 bg-green-600 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-5 bg-green-600 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-green-600 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 pb-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                    isActive
                      ? "bg-green-500 text-white shadow-lg"
                      : "text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800"
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.icon}
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