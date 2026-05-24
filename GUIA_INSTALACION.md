# 🚀 PORTAFOLIO CON ANIMACIONES - GUÍA DE INSTALACIÓN

## ✨ QUÉ INCLUYE ESTE ZIP

Este ZIP contiene tu repositorio **completamente configurado** con:

✅ Todos los componentes animados (ScrollReveal, GlowCard, AnimatedButton, etc)
✅ Hero.tsx y Skills.tsx mejorados con animaciones
✅ animations.ts con variantes predefinidas
✅ package.json actualizado con framer-motion y react-intersection-observer
✅ Documentación completa

---

## 🎯 INSTALACIÓN (5 MINUTOS)

### PASO 1: Extrae el ZIP
```bash
# Descomprime el archivo
# Verás una carpeta llamada "diwgo_portafilio"
```

### PASO 2: Entra a la carpeta
```bash
cd diwgo_portafilio
```

### PASO 3: Instala las dependencias
```bash
npm install
```
Este comando **automáticamente instala** framer-motion y react-intersection-observer porque ya están en `package.json`

### PASO 4: Corre el proyecto
```bash
npm run dev
```

¡Verás tu portafolio con TODAS las animaciones funcionando! 🎉

---

## 📤 CONECTAR CON GITHUB

Ahora necesitas conectar esto con tu repositorio en GitHub.

### OPCIÓN A: Si YA tienes un repositorio en GitHub (Recomendado)

```bash
# 1. Configura tu usuario de Git (primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# 2. Conecta con tu repositorio
git remote set-url origin https://github.com/11diwgo/diwgo_portafilio.git

# 3. Obtén los cambios del servidor
git pull origin main

# 4. Sube tu código
git add .
git commit -m "Add animations - framer-motion and improved components"
git push origin main
```

### OPCIÓN B: Si NO tienes repositorio en GitHub aún

```bash
# 1. Inicializa Git
git init

# 2. Configura tu usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# 3. Conecta con GitHub
git remote add origin https://github.com/11diwgo/diwgo_portafilio.git

# 4. Sube todo
git add .
git commit -m "Initial commit with animations"
git push -u origin main
```

---

## 🖥️ ¿QUÉ PASA SI TIENES 2 PCs?

Buena noticia: **Git está hecho para esto**. Aquí te muestro cómo:

### ESCENARIO: Tienes PC1 y PC2

#### En PC1 (donde estás ahora):
```bash
# Ya lo configuraste todo
git add .
git commit -m "Mis cambios"
git push
```

#### En PC2 (tu otra computadora):
```bash
# Clonas el repositorio
git clone https://github.com/11diwgo/diwgo_portafilio.git
cd diwgo_portafilio

# Instala dependencias
npm install

# ¡Listo! Tienes el mismo código con todo configurado
npm run dev
```

### FLUJO CON 2 PCs:

```
PC1: Hago cambios → git add . → git commit → git push (a GitHub)
                                                ↓
                                            GitHub
                                                ↓
                                          git pull
PC2: Obtengo cambios ← git pull (desde GitHub)
```

### EJEMPLO REAL:

**PC1 (Escritorio):**
```bash
# Editas Hero.tsx
git add src/app/components/Hero.tsx
git commit -m "Improve Hero animations"
git push
```

**PC2 (Laptop):**
```bash
# Obtienes los cambios de PC1
git pull

# Tienes el Hero.tsx actualizado
npm run dev
```

---

## 📋 COMANDOS GIT BÁSICOS

### Ver estado
```bash
git status
```

### Ver cambios
```bash
git diff
```

### Crear rama (para no romper main)
```bash
git checkout -b mi-rama
# ... haces cambios ...
git add .
git commit -m "Mi cambio"
git push origin mi-rama
```

### Sincronizar 2 PCs
```bash
# Antes de trabajar
git pull

# Después de trabajar
git add .
git commit -m "Mi mensaje"
git push

# En la otra PC
git pull
```

---

## 🚨 SOLUCIONAR CONFLICTOS

Si dos PCs editan el mismo archivo:

```bash
# PC2 intenta hacer push pero hay conflicto
git pull  # Descarga los cambios de PC1

# Abre el archivo y verás algo como:
<<<<<<< HEAD
  // Tu código de PC2
=======
  // Código de PC1
>>>>>>> origin/main

# Edita y elige qué código mantener, luego:
git add .
git commit -m "Resolvér conflicto"
git push
```

---

## 💡 TIPS

### Antes de trabajar:
```bash
git pull  # ← SIEMPRE empieza con esto
npm run dev
```

### Después de terminar:
```bash
git add .
git commit -m "Descripción clara"
git push
```

### Si rompes algo:
```bash
# Ver historial
git log

# Volver a un commit anterior
git revert <commit-id>

# O descartar cambios locales
git checkout -- src/
```

---

## 📁 ESTRUCTURA FINAL

```
diwgo_portafilio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ScrollReveal.tsx ✨
│   │   │   ├── GlowCard.tsx ✨
│   │   │   ├── AnimatedButton.tsx ✨
│   │   │   ├── Counter.tsx ✨
│   │   │   ├── AnimatedProgressBar.tsx ✨
│   │   │   ├── TypewriterText.tsx ✨
│   │   │   ├── FloatingElement.tsx ✨
│   │   │   ├── PageTransition.tsx ✨
│   │   │   ├── Hero.tsx ✨ (mejorado)
│   │   │   ├── Skills.tsx ✨ (mejorado)
│   │   │   └── [otros]
│   │   └── App.tsx
│   └── lib/
│       └── animations.ts ✨
│
├── package.json ✅ (con framer-motion y react-intersection-observer)
├── .git/ (Git está configurado)
└── [otros archivos]
```

---

## ✅ CHECKLIST

- [ ] Extraje el ZIP
- [ ] Ejecuté `npm install`
- [ ] Ejecuté `npm run dev` y funciona
- [ ] Configuré git (`git config --global user.name/email`)
- [ ] Conecté con GitHub (`git remote set-url origin ...`)
- [ ] Hice `git push` para subir todo
- [ ] Probé clonar en otra PC y funciona

---

## 🎓 APRENDE MÁS

**Documentación incluida en la carpeta:**
- `INSTALACION_Y_USO.md` - Cómo usar cada componente
- `INDICE_COMPLETO.md` - Referencia de todos los archivos
- `SUGERENCIAS_ANIMACIONES.md` - Ideas para más animaciones

---

## 🆘 PROBLEMAS?

### "npm install no funciona"
```bash
# Asegúrate de estar en la carpeta correcta
cd diwgo_portafilio
npm install
```

### "git: no se reconoce el comando"
Instala Git desde: https://git-scm.com/

### "Error al hacer push"
```bash
# Primero actualiza
git pull

# Luego intenta de nuevo
git push
```

### "Tengo cambios sin guardar"
```bash
# Guarda tus cambios
git add .
git commit -m "Mis cambios"
git push
```

---

## 🚀 ¡LISTO!

Ya tienes:
✅ Tu portafolio con animaciones profesionales
✅ Git conectado a GitHub
✅ Listo para trabajar en 2+ PCs
✅ Documentación completa

**¿Necesitas ayuda?** Revisa la documentación o contacta.

¡Buen coding! 💻✨
