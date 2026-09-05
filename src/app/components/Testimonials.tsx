import { useEffect, useRef, useState } from "react";
import { Quote, Terminal, Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  server: string;
}

function TestimonialCard({ quote, author, role, server, index }: TestimonialProps & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isPending = quote === "Próximamente...";

  return (
    <div
      ref={ref}
      className="transition-all duration-600"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={`rounded-2xl border overflow-hidden card-hover h-full flex flex-col ${
          isPending
            ? "bg-green-50/40 dark:bg-card/50 border-green-100 dark:border-border opacity-50"
            : "bg-green-50/60 dark:bg-card border-green-200 dark:border-border"
        }`}
      >
        {/* Card header tab */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-green-100 dark:border-border bg-green-50/80 dark:bg-muted">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <span className="ml-2 text-xs font-mono text-gray-400 dark:text-muted-foreground">
            review_{server.toLowerCase().replace(/ /g, "_").replace(/\./g, "")}.txt
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          {/* Quote icon */}
          <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-200 dark:border-green-800 flex items-center justify-center mb-4 flex-shrink-0">
            <Quote className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>

          {/* Quote text */}
          <p className={`text-base leading-relaxed flex-1 mb-6 ${isPending ? "text-gray-400 italic" : "text-gray-700 dark:text-foreground"}`}>
            &ldquo;{quote}&rdquo;
          </p>

          {/* Author */}
          <div className="border-t border-green-100 dark:border-border pt-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-bold text-gray-900 dark:text-foreground text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {author}
                </p>
                <p className="text-green-600 dark:text-green-400 text-xs font-semibold mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {role}
                </p>
                <p className="text-gray-400 dark:text-muted-foreground text-xs mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  // {server}
                </p>
              </div>
              {!isPending && (
                <div className="flex gap-0.5 flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-green-400 fill-green-400" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const testimonials: TestimonialProps[] = [
    {
      quote: "Próximamente...",
      author: "¿?",
      role: "Próximamente",
      server: "Próximamente",
    },
    {
      quote: "Mi sincera opinión sobre Diego, es 5/5. Ayuda mucho, aporta ideas y no causa conflictos, buen staff, dedicado y comprometido. No es como creen, parece cerrado pero es todo lo contrario, es una gran persona realmente.",
      author: "Theo",
      role: "Dueño del servidor",
      server: "FluxMC Network",
    },
    {
      quote: "Conozco a Diego desde hace años, tengo que decir que es una persona amable, comprometida con su trabajo y no sabe dejar una cosa a medias, es una buena persona con ganas de aprender.",
      author: "Daniqui",
      role: "Manager",
      server: "VaperMC Network",
    },
    {
      quote: "Diego desde que ha estado en el proyecto ha tenido un cambio y una evolucion notable, recomendado para proyectos profesionales. Persona muy dedicada y activa.",
      author: "Struffed",
      role: "Fundador del servidor",
      server: "Astryx Network",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-white dark:from-background to-green-50/40 dark:to-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-16 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(24px)" }}
          >
            <div
              className="inline-flex items-center gap-2 bg-gray-900 text-green-400 px-4 py-2 rounded-full mb-6 border border-gray-700"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-xs">grep -r "diwgo" reviews/*.txt</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-foreground mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Lo que{" "}
              <span
                className="text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundImage: "linear-gradient(135deg, #16a34a, #22c55e, #4ade80)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                dicen
              </span>
            </h2>
            <p className="text-gray-500 dark:text-muted-foreground text-lg">
              Opiniones de colegas y administradores con los que he trabajado
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}