/**
 * CONFIGURACIÓN DE GALERÍA MULTIMEDIA
 * ─────────────────────────────────────────────────────────────────
 * Pon tus imágenes en:  public/multimedia/<categoria>/
 * Luego añade el nombre del archivo aquí abajo.
 *
 * La ruta base es automática, solo necesitas el nombre del archivo.
 * Ejemplo: "mi-holograma.png" → public/multimedia/hologramas/mi-holograma.png
 */

export interface MediaItem {
  file: string;       // nombre del archivo (ej: "holo1.png")
  caption?: string;   // descripción opcional
  tags?: string[];    // etiquetas para filtrar (ej: ["lobby", "boxpvp"])
}

export interface MediaCategory {
  id: string;
  label: string;
  items: MediaItem[];
}

export const MULTIMEDIA_CATEGORIES: MediaCategory[] = [
  {
    id: "hologramas",
    label: "Hologramas",
    items: [
      { file: "holo1.png", caption: "Holograma menú recompensas", tags: ["lobby"] },
      { file: "holo2.png", caption: "Holograma de bienvenida", tags: ["lobby"] },
      { file: "holo3.png", caption: "Holograma de información de mina", tags: ["survival"] },
      { file: "holo4.png", caption: "Holograma de crates", tags: ["crates"] },
      { file: "holo5.png", caption: "Holograma de información de warp", tags: ["lobby"] },
      { file: "holo6.png", caption: "Holograma de minas (boxpvp)", tags: ["boxpvp"] },
      { file: "holo7.png", caption: "Holograma de estdística del servidor (TOP)", tags: ["lobby"] },
      { file: "holo8.png", caption: "Holograma de información de PvP", tags: ["pvp"] },
      { file: "holo9.png", caption: "Holograma de información de Room (BoxPvP)", tags: ["boxpvp"] },
      { file: "holo10.png", caption: "Holograma de información de modalidad", tags: ["lobby"] },
      { file: "holo11.png", caption: "Holograma de Discord", tags: ["discord"] },
      { file: "holo12.png", caption: "Holograma de Tienda", tags: ["tienda"] },
      { file: "holo13.png", caption: "Holograma de bienvenida", tags: ["lobby"] },
    ],
  },
  {
    id: "menus",
    label: "Menús",
    items: [
      { file: "menu1.png", caption: "Menú de modalidades", tags: ["lobby"] },
      { file: "menu2.gif", caption: "Menú de warps del servidor", tags: ["warps"] },
      { file: "menu3.gif", caption: "Menú principal de una modalidad", tags: ["survival"] },
      { file: "menu4.gif", caption: "Menú de kits", tags: ["kits"] },
      { file: "menu5.gif", caption: "Menú de protecciones (Survival)", tags: ["survival"] },
    ],
  },
  {
    id: "scoreboards",
    label: "Tabs / Scoreboards",
    items: [
      { file: "tab1.png", caption: "Tab de lobby", tags: ["lobby"] },
      { file: "sc1.png", caption: "Scoreboard de lobby", tags: ["lobby"] },
    ],
  },
  {
    id: "otros",
    label: "Otros",
    items: [
      { file: "otros1.png", caption: "Lore de BoxPvP", tags: ["boxpvp"] },
      { file: "otros2.png", caption: "Mensajes de chat automáticos", tags: ["chat"] },
    ],
  },
];