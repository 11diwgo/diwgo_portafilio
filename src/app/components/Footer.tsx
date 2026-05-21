export function Footer() {
  return (
    <footer
      className="py-12 border-t border-green-100"
      style={{ background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">

          {/* Brand */}
          <div
            className="text-green-700 font-black text-2xl tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            _diwgo_
            <span className="text-green-400 animate-blink ml-0.5">█</span>
          </div>

          <p className="text-gray-500 text-sm max-w-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            // Gestión de comunidades/servidores de Minecraft
          </p>

          <div className="h-px w-16 bg-green-300" />

          <div className="space-y-1">
            <p className="text-gray-400 text-sm font-mono">Made with ☕ by _diwgo_</p>
            <p className="text-gray-300 text-xs font-mono uppercase tracking-widest">
              No es un producto oficial de Mojang • Sin afiliación con Microsoft
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
