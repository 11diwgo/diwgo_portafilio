export function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-foreground text-lg" style={{ fontFamily: "'Fraunces', serif" }}>
              diwgo
            </div>
            <p className="text-muted-foreground text-sm mt-0.5">
              Gestión de comunidades y servidores de Minecraft
            </p>
          </div>
          <p className="text-muted-foreground/70 text-xs">
            No es un producto oficial de Mojang · Sin afiliación con Microsoft
          </p>
        </div>
      </div>
    </footer>
  );
}