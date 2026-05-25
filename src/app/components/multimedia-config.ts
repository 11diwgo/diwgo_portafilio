export interface MediaItem {
  file: string;
  caption?: string;
  tags?: string[];
  plugin?: string;
}

export interface MultimediaCategory {
  name: string;
  icon: string;
  items: MediaItem[];
}

export const MULTIMEDIA_CATEGORIES: MultimediaCategory[] = [
  {
    name: "Hologramas",
    icon: "Wand2",
    items: [
      { file: "holograma1.png", caption: "Holograma Lobby Principal", tags: ["lobby"], plugin: "FakePlayerAPI" },
      { file: "holograma2.png", caption: "Animación NPC", tags: ["survival", "lobby"], plugin: "Citizens" },
      { file: "holograma3.png", caption: "Efecto Glow Box", tags: ["boxpvp", "pvp"], plugin: "ParticleLib" },
      { file: "holograma4.gif", caption: "Portal Dinámico", tags: ["survival", "crates"], plugin: "WorldEdit" },
      { file: "holograma5.png", caption: "Logo Tienda", tags: ["tienda", "lobby"], plugin: "DeluxeMenus" },
      { file: "holograma6.png", caption: "Tabla de Líderes", tags: ["discord", "boxpvp"], plugin: "PlaceholderAPI" },
    ],
  },
  {
    name: "Menús",
    icon: "Menu",
    items: [
      { file: "menu1.png", caption: "Menú Principal Survival", tags: ["survival", "kits"], plugin: "DeluxeMenus" },
      { file: "menu2.png", caption: "Menú Warps", tags: ["warps", "lobby"], plugin: "DeluxeMenus" },
      { file: "menu3.png", caption: "Tienda de Items", tags: ["survival", "warps"], plugin: "QuickShop" },
      { file: "menu4.gif", caption: "Selector de Clase", tags: ["kits", "pvp"], plugin: "DeluxeMenus" },
    ],
  },
  {
    name: "Scoreboards",
    icon: "List",
    items: [
      { file: "scoreboard1.png", caption: "Scoreboard Lobby", tags: ["lobby"], plugin: "FeatherBoard" },
      { file: "scoreboard2.png", caption: "Stats PVP", tags: ["boxpvp", "pvp"], plugin: "Placeholder API" },
    ],
  },
  {
    name: "Otros",
    icon: "Image",
    items: [
      { file: "otros1.png", caption: "Lore BoxPvP", tags: ["boxpvp"], plugin: "CMI" },
      { file: "otros2.png", caption: "Chat Custom", tags: ["chat"], plugin: "LiteBans" },
      { file: "otros3.gif", caption: "Animación Login", tags: ["survival"], plugin: "LoginAnnouncer" },
    ],
  },
];