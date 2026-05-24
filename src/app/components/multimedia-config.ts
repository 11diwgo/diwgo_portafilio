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
      // { file: "holo2.jpg", caption: "Holograma de arena" },
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