"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  server: string;
}

function TestimonialCard({ quote, author, role, server }: TestimonialProps) {
  return (
    <Card className="bg-stone-900/50 border-emerald-700/50 hover:border-green-500/50 transition-all duration-300">
      <CardContent className="p-6 text-center">
        <Quote className="w-8 h-8 text-emerald-500/30 mx-auto mb-4" />
        <p className="text-gray-500 text-lg mb-6 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="border-t border-stone-800 pt-4">
          <p className="font-semibold text-white/50">{author}</p>
          <p className="text-emerald-500/40 text-sm">{role}</p>
          <p className="text-gray-600 text-xs font-mono mt-1">{server}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  // INTERRUPTOR: Ahora está en true para que veas los recuadros
  const mostrarSeccion = true;

  if (!mostrarSeccion) return null;

  const testimonials: TestimonialProps[] = [
    {
      quote: "Mi sincera opinión sobre Diego, es 5/5. Ayuda mucho, aporta ideas y no causa conflictos, buen staff, dedicado y comprometido. No es como creen, parece cerrado pero es todo lo contrario, es una gran persona realmente.",
      author: "Theo",
      role: "Dueño del servidor",
      server: "FluxMC Network"
    },
    {
      quote: "Conozco a Diego desde hace años, tengo que decir que es una persona amable, comprometida con su trabajo y no sabe dejar una cosa a medias, es una buena persona con ganas de aprender.",
      author: "Daniqui",
      role: "Manager",
      server: "VaperMC Network"
    },
    {
      quote: "Diego es una persona sumamente eficaz en diversos aspectos. Se compromete profundamente con cada responsabilidad que asume y demuestra un alto nivel de profesionalismo en su trabajo. En el poco tiempo que lleva en Astryx, se ha convertido en una de las piezas más fundamentales del proyecto. Sin duda, es un gran profesional y un valioso miembro del equipo.",
      author: "Addwed",
      role: "Dueño del servidor",
      server: "Astryx Network"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-tight">
              Testimonios
            </h2>
            <p className="text-xl text-gray-500">
              Opiniones de colegas y administradores con los que he trabajado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
