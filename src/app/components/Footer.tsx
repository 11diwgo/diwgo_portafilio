export function Footer() {
  return (
    <footer className="py-8 bg-stone-950 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Portafolio de Gestión de Staff de Minecraft. Todos los derechos reservados.
            </div>
            <div className="text-gray-500 text-sm">
              Construido con pasión para la comunidad de Minecraft
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}