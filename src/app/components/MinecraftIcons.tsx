// Iconos pixelados de Minecraft

export function DiamondSword() {
  return (
    <div className="relative w-8 h-8" style={{ imageRendering: 'pixelated' }}>
      {/* Mango */}
      <div className="absolute bottom-0 left-3 w-2 h-3 bg-amber-900"></div>
      {/* Hoja de espada */}
      <div className="absolute top-0 left-3 w-2 h-6 bg-cyan-400"></div>
      <div className="absolute top-1 left-2 w-1 h-1 bg-cyan-300"></div>
      <div className="absolute top-1 left-4 w-1 h-1 bg-cyan-500"></div>
    </div>
  );
}

export function EmeraldBlock() {
  return (
    <div className="relative w-8 h-8" style={{ imageRendering: 'pixelated' }}>
      {/* Bloque de esmeralda */}
      <div className="w-8 h-8 bg-emerald-500 border-2 border-emerald-600 relative">
        <div className="absolute top-1 left-1 w-2 h-2 bg-emerald-300"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-emerald-700"></div>
      </div>
    </div>
  );
}

export function Pickaxe() {
  return (
    <div className="relative w-8 h-8" style={{ imageRendering: 'pixelated' }}>
      {/* Mango del pico */}
      <div className="absolute bottom-0 right-1 w-2 h-5 bg-amber-900"></div>
      {/* Cabeza del pico */}
      <div className="absolute top-1 left-0 w-7 h-2 bg-cyan-400"></div>
      <div className="absolute top-0 left-1 w-1 h-1 bg-cyan-300"></div>
      <div className="absolute top-0 right-1 w-1 h-1 bg-cyan-300"></div>
    </div>
  );
}

export function CreeperFace() {
  return (
    <div className="relative w-8 h-8 bg-green-600 border border-green-700" style={{ imageRendering: 'pixelated' }}>
      {/* Ojos */}
      <div className="absolute top-2 left-1 w-2 h-2 bg-black"></div>
      <div className="absolute top-2 right-1 w-2 h-2 bg-black"></div>
      {/* Boca */}
      <div className="absolute bottom-2 left-2 w-1 h-2 bg-black"></div>
      <div className="absolute bottom-2 right-2 w-1 h-2 bg-black"></div>
      <div className="absolute bottom-1 left-2 w-4 h-1 bg-black"></div>
    </div>
  );
}

export function GrassBlock() {
  return (
    <div className="relative w-8 h-8" style={{ imageRendering: 'pixelated' }}>
      <div className="w-8 h-8 bg-amber-700 relative">
        {/* Parte superior verde */}
        <div className="absolute top-0 left-0 w-full h-2 bg-green-600"></div>
        <div className="absolute top-2 left-0 w-full h-1 bg-green-700"></div>
        {/* Detalles de tierra */}
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-stone-600"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-stone-600"></div>
      </div>
    </div>
  );
}

export function CommandBlock() {
  return (
    <div className="relative w-8 h-8" style={{ imageRendering: 'pixelated' }}>
      <div className="w-8 h-8 bg-orange-700 border-2 border-orange-800 relative">
        {/* Símbolo > en el centro */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-orange-200"></div>
        <div className="absolute top-3 left-3 w-1 h-1 bg-orange-200"></div>
        <div className="absolute top-4 left-3 w-1 h-1 bg-orange-200"></div>
        <div className="absolute top-5 left-2 w-1 h-1 bg-orange-200"></div>
      </div>
    </div>
  );
}
