export function MinecraftBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/20 border border-purple-500/30 rounded" 
         style={{ 
           imageRendering: 'pixelated',
           fontFamily: 'monospace'
         }}>
      <div className="w-2 h-2 bg-cyan-400" style={{ imageRendering: 'pixelated' }}></div>
      <div className="w-2 h-2 bg-purple-400" style={{ imageRendering: 'pixelated' }}></div>
    </div>
  );
}

export function PixelDivider() {
  return (
    <div className="flex items-center justify-center gap-1 my-8">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={`w-2 h-2 ${i % 2 === 0 ? 'bg-purple-500' : 'bg-cyan-500'}`}
          style={{ imageRendering: 'pixelated' }}
        ></div>
      ))}
    </div>
  );
}
