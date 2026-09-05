# 🚀 GUÍA DE INSTALACIÓN - COMPONENTES ANIMADOS

## 📦 PASO 1: Instalar Dependencias

```bash
npm install framer-motion react-intersection-observer
```

## 📁 PASO 2: Crear la carpeta de componentes

Si no existe aún, crea esta estructura:

```
src/
  components/
    ├── ScrollReveal.tsx          ← Copia aquí
    ├── GlowCard.tsx              ← Copia aquí
    ├── AnimatedButton.tsx        ← Copia aquí
    ├── Counter.tsx               ← Copia aquí
    ├── AnimatedProgressBar.tsx   ← Copia aquí
    ├── TypewriterText.tsx        ← Copia aquí
    ├── FloatingElement.tsx       ← Copia aquí
    ├── PageTransition.tsx        ← Copia aquí
    │
    └── [tus componentes actuales]
  lib/
    └── animations.ts             ← Copia aquí
```

## 📋 PASO 3: Reemplazar Componentes

### Para reemplazar Hero.tsx:
1. Abre `src/app/components/Hero.tsx`
2. Reemplaza TODO el contenido con el de `Hero-improved.tsx`
3. Guarda

### Para reemplazar Skills.tsx:
1. Abre `src/app/components/Skills.tsx`
2. Reemplaza TODO el contenido con el de `Skills-improved.tsx`
3. Guarda

## 💻 PASO 4: Ejemplos de Uso

### Usar ScrollReveal:
```tsx
import { ScrollReveal } from "@/components/ScrollReveal";

export function MyComponent() {
  return (
    <ScrollReveal direction="up" delay={0.2}>
      <div>Contenido que aparece al scroll</div>
    </ScrollReveal>
  );
}
```

### Usar GlowCard:
```tsx
import { GlowCard } from "@/components/GlowCard";

export function MyCard() {
  return (
    <GlowCard intensity="high">
      <h3>Título</h3>
      <p>Contenido</p>
    </GlowCard>
  );
}
```

### Usar AnimatedButton:
```tsx
import { AnimatedButton } from "@/components/AnimatedButton";
import { ChevronRight } from "lucide-react";

export function MyButton() {
  return (
    <AnimatedButton
      label="Haz clic"
      icon={<ChevronRight />}
      variant="primary"
      onClick={() => console.log("Clicked!")}
    />
  );
}
```

### Usar Counter:
```tsx
import { Counter } from "@/components/Counter";

export function Stats() {
  return (
    <div>
      <Counter to={247} suffix=" players" />
      <Counter to={100} duration={3} suffix="%" />
    </div>
  );
}
```

### Usar AnimatedProgressBar:
```tsx
import { AnimatedProgressBar } from "@/components/AnimatedProgressBar";

export function Skills() {
  return (
    <>
      <AnimatedProgressBar label="React" percentage={90} />
      <AnimatedProgressBar label="Discord.js" percentage={85} />
      <AnimatedProgressBar label="Minecraft Plugins" percentage={95} color="bg-green-500" />
    </>
  );
}
```

### Usar TypewriterText:
```tsx
import { TypewriterText } from "@/components/TypewriterText";

export function Hero() {
  return (
    <h1 className="text-4xl font-bold">
      <TypewriterText text="/lp group owner add diwgo_" speed={40} />
    </h1>
  );
}
```

### Usar FloatingElement:
```tsx
import { FloatingElement } from "@/components/FloatingElement";

export function IconCollection() {
  return (
    <FloatingElement delay={0.5} distance={20}>
      <img src="icon.png" alt="Icon" />
    </FloatingElement>
  );
}
```

### Usar PageTransition con AnimatePresence:
```tsx
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <AnimatePresence mode="wait">
      {activeSection === "inicio" && (
        <PageTransition id="inicio">
          <Hero />
        </PageTransition>
      )}
      {activeSection === "skills" && (
        <PageTransition id="skills">
          <Skills />
        </PageTransition>
      )}
    </AnimatePresence>
  );
}
```

## 🎨 Usar variantes de animación predefinidas:

```tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export function MyAnimatedComponent() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
        className="card"
      >
        Contenido
      </motion.div>
    </motion.div>
  );
}
```

## 🧪 PASO 5: Probar

```bash
npm run dev
```

Abre `http://localhost:5173` (o el puerto que uses) y deberías ver:
- ✨ Animaciones suaves en scroll
- 🎪 Efectos hover mejorados
- 💫 Transiciones de página fluidas
- 🔥 Botones con ripple effect

## 📝 NOTAS IMPORTANTES

### Props comunes:

**ScrollReveal:**
- `direction`: "up" | "left" | "right" | "none" (default: "up")
- `delay`: número en segundos (default: 0)
- `duration`: número en segundos (default: 0.6)
- `triggerOnce`: boolean (default: true)

**GlowCard:**
- `intensity`: "low" | "medium" | "high" (default: "medium")
- `className`: string adicional

**AnimatedButton:**
- `label`: texto del botón
- `variant`: "primary" | "secondary"
- `icon`: ReactNode (opcional)
- `onClick`: función

**Counter:**
- `to`: número final (requerido)
- `from`: número inicial (default: 0)
- `duration`: segundos (default: 2)
- `suffix`: texto después (ej: "%" o " players")
- `prefix`: texto antes

## 🔥 CAMBIOS PRINCIPALES APLICADOS

### Hero.tsx mejorado:
✅ Animaciones de entrada suaves
✅ Palabras del título animadas individualmente
✅ Badge de Discord con pulso mejorado
✅ Botones con ripple effect
✅ Iconos flotantes mejorados
✅ Console lines con animación typewriter
✅ Stats cards con hover effect
✅ Cards inferiores con scroll reveal

### Skills.tsx mejorado:
✅ Scroll reveal en todas las cards
✅ Animación staggered en el grid
✅ Cards expandibles con animación suave
✅ Dots pulsantes en niveles
✅ Glow effect al hover
✅ Stats animados con contador

## ⚡ PERFORMANCE TIPS

1. **Usa `triggerOnce={true}`** en ScrollReveal para que solo animen UNA VEZ
2. **No animes propiedades `left/top`** → Usa `x/y` de motion
3. **Usa `will-change: transform`** en CSS para elementos que se transforman
4. **Debounce mouse events** si tienes muchos elementos interactivos
5. **Test en mobile** → Las animaciones pueden ser lentas en dispositivos antiguos

## 🐛 TROUBLESHOOTING

### Las animaciones no funcionan:
- ✓ Verifica que Framer Motion está instalado: `npm list framer-motion`
- ✓ Verifica que react-intersection-observer está instalado
- ✓ Asegúrate de importar de la ruta correcta

### Los imports dan error:
- ✓ Verifica la ruta del @alias en `vite.config.ts`
- ✓ O usa rutas relativas: `import { ScrollReveal } from "../ScrollReveal"`

### Hay lag/stuttering:
- ✓ Reduce la cantidad de animaciones simultáneas
- ✓ Usa `will-change: auto` en los estilos CSS
- ✓ Aumenta el `threshold` en useInView para que se active después

## 📞 ¿NECESITAS AYUDA?

1. Revisa los ejemplos en EJEMPLOS_CODIGO.md
2. Consulta la documentación de Framer Motion: https://www.framer.com/motion
3. Consulta react-intersection-observer: https://github.com/thebuilder/react-intersection-observer

---

¡Listo! Ahora tienes tu portafolio lleno de animaciones profésionales. 🚀
