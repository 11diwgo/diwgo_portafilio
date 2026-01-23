export function Footer() {
  return (
    <footer className="py-12 bg-stone-950 border-t border-emerald-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            
            {/* Nombre y marca personal */}
            <div className="space-y-2">
              <p className="text-emerald-400 font-bold text-xl tracking-tighter">
                _diwgo_
              </p>
              <p className="text-gray-500 text-sm max-w-xs">
                Gestión de comunidades/servidores de Minecraft.
              </p>
            </div>

            {/* Separador minimalista */}
            <div className="h-px w-16 bg-emerald-500/20"></div>

            {/* Texto sin derechos ni historias */}
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-sm">
                Made by _diwgo_.
              </p>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                No es un producto oficial de Mojang • Sin afiliación con Microsoft
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
