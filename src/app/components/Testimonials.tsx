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
      <CardContent className="p-6">
        <Quote className="w-8 h-8 text-green-400 mb-4" />
        <p className="text-gray-300 text-lg mb-6 italic">&ldquo;{quote}&rdquo;</p>
        <div className="border-t border-stone-700 pt-4">
          <p className="font-semibold text-white">{author}</p>
          <p className="text-emerald-400 text-sm">{role}</p>
          <p className="text-gray-500 text-sm">{server}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Uno de los gestores de staff más dedicados y profesionales con los que he trabajado. Su capacidad para construir y mantener un equipo cohesionado es excepcional. Los plugins que desarrolló siguen siendo fundamentales para nuestro servidor.",
      author: "Alex Chen",
      role: "Propietario del Servidor",
      server: "Red Estilo Hypixel"
    },
    {
      quote: "Transformaron nuestro equipo de moderación de desorganizado a una máquina bien aceitada. La satisfacción de los jugadores mejoró dramáticamente bajo su liderazgo. Los bots de Discord que programó nos ahorraron cientos de horas.",
      author: "Sarah Martínez",
      role: "Co-Propietaria",
      server: "Servidor Survival Towny"
    },
    {
      quote: "Los programas de capacitación que desarrollaron todavía se usan hoy en día. Su documentación y procedimientos establecieron el estándar para toda nuestra red. Un profesional completo tanto en gestión como en desarrollo.",
      author: "James Wilson",
      role: "Desarrollador Principal",
      server: "Servidor Creativo de Construcción"
    }
  ];

  return (
    <section className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Testimonios
            </h2>
            <p className="text-xl text-gray-400">
              Lo que dicen los propietarios de servidores y colegas
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