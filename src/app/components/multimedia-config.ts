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
}

export interface MediaCategory {
  id: string;
  label: string;
  icon: string;
  folder: string;     // carpeta dentro de public/multimedia/
  items: MediaItem[];
}

export const MULTIMEDIA_CATEGORIES: MediaCategory[] = [
  {
    id: "hologramas",
    label: "Hologramas",
    icon: "◈",
    folder: "hologramas",
    items: [
      // Añade tus imágenes aquí:
       { file: "holo1.png", caption: "Holograma menú recompensas" },
       { file: "holo2.png", caption: "Holograma de bienvenida" },
       { file: "holo3.png", caption: "Holograma de información de mina" },
       { file: "holo4.png", caption: "Holograma de crates" },
       { file: "holo5.png", caption: "Holograma de información de warp" },
       { file: "holo6.png", caption: "Holograma de minas (boxpvp)" },
       { file: "holo7.png", caption: "Holograma de estdística del servidor (TOP)" },
       { file: "holo8.png", caption: "Holograma de información de PvP" },
       { file: "holo9.png", caption: "Holograma de información de Room (BoxPvP)" },
       { file: "holo10.png", caption: "Holograma de información de modalidad" },
    ],
  },
  {
    id: "menus",
    label: "Menús",
    icon: "☰",
    folder: "menus",
    items: [
       { file: "menu1.png", caption: "Menú de modalidades" },
    ],
  },
  {
    id: "scoreboards",
    label: "Tabs / Scoreboards",
    icon: "▤",
    folder: "scoreboards",
    items: [
      { file: "tab1.png", caption: "Tab de lobby" },
      { file: "sc1.png", caption: "Scoreboard de lobby" },
    ],
  },
  {
    id: "otros",
    label: "Otros",
    icon: "✦",
    folder: "otros",
    items: [
       { file: "otros1.png", caption: "Lore de BoxPvP" },
    ],
  },
];