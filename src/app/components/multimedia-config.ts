export interface MediaItem {
  file: string;
  caption?: string;
  tags?: string[];
  plugin?: string;
}

export interface MultimediaCategory {
  name: string;
  icon: string;
  folder: string;
  items: MediaItem[];
}

export const MULTIMEDIA_CATEGORIES: MultimediaCategory[] = [
  {
    name: "Hologramas",
    icon: "Wand2",
    folder: "hologramas",
    items: [
      { file: "holo1.png",  caption: "Holograma menú recompensas",                    tags: ["lobby", "otros"], plugin: "FancyHolograms" },
      { file: "holo2.png",  caption: "Holograma de bienvenida",                       tags: ["boxpvp"], plugin: "FancyHolograms" },
      { file: "holo3.png",  caption: "Holograma de información de mina",              tags: ["boxpvp"],plugin: "FancyHolograms" },
      { file: "holo4.png",  caption: "Holograma de crates",                           tags: ["boxpvp"],  plugin: "FancyHolograms" },
      { file: "holo5.png",  caption: "Holograma de información de warp",              tags: ["boxpvp", "survival", "otros"], plugin: "FancyHolograms"  },
      { file: "holo6.png",  caption: "Holograma de minas",                            tags: ["boxpvp"], plugin: "FancyHolograms" },
      { file: "holo7.png",  caption: "Holograma de estadísticas del servidor (TOP)",  tags: ["survival", "boxpvp", "otros"], plugin: "FancyHolograms"  },
      { file: "holo8.png",  caption: "Holograma de información de PvP",               tags: ["boxpvp"], plugin: "FancyHolograms" },
      { file: "holo9.png",  caption: "Holograma de información de Room",              tags: ["boxpvp"], plugin: "FancyHolograms" },
      { file: "holo10.png", caption: "Holograma de información de modalidad",         tags: ["lobby"], plugin: "FancyHolograms" },
      { file: "holo11.png", caption: "Holograma de Discord",                          tags: ["lobby", "global"], plugin: "FancyHolograms" },
      { file: "holo12.png", caption: "Holograma de Tienda",                           tags: ["lobby" ,"global"],  plugin: "Información Privada" },
      { file: "holo13.png", caption: "Holograma de bienvenida",                       tags: ["survival"],   plugin: "FancyHolograms" },
      { file: "holo14.png", caption: "Holograma de información de NPC",               tags: ["fullpvp"],   plugin: "Información Privada" },
      { file: "holo15.png", caption: "Holograma de información de mina",              tags: ["fullpvp"],   plugin: "Información Privada" },
      { file: "holo16.png", caption: "Holograma de información de NPC",              tags: ["fullpvp"],   plugin: "Información Privada" },
      { file: "holo16.png", caption: "Holograma de información (AFK ZONE)",              tags: ["fullpvp", "survival", "boxpvp"],   plugin: "Información Privada" },
    ],
  },

  {
    name: "Menús",
    icon: "Menu",
    folder: "menus",
    items: [
      { file: "menu1.png", caption: "Menú de modalidades",             tags: ["lobby"],    plugin: "DeluxeMenus" },
      { file: "menu2.gif", caption: "Menú de warps del servidor",      tags: ["survival"],    plugin: "DeluxeMenus" },
      { file: "menu3.gif", caption: "Menú principal de una modalidad", tags: ["survival"], plugin: "DeluxeMenus" },
      { file: "menu4.gif", caption: "Menú de kits",                    tags: ["boxpvp", "survival"],     plugin: "PlayerKits2" },
      { file: "menu5.gif", caption: "Menú de protecciones", tags: ["survival"], plugin: "DeluxeMenus" },
      { file: "menu5.gif", caption: "Menú de tags", tags: ["fullpvp", "survival", "boxpvp"], plugin: "Información Privada" },
    ],
  },

  {
    name: "Tabs / Scoreboards",
    icon: "List",
    folder: "scoreboards",
    items: [
      { file: "tab1.png", caption: "Tab de lobby",        tags: ["lobby"], plugin: "TAB"         },
      { file: "sc1.png",  caption: "Scoreboard de lobby", tags: ["lobby"], plugin: "TAB" },
      { file: "sc2.png",  caption: "Scoreboard de survival", tags: ["survival"], plugin: "TAB" },
    ],
  },


  {
    name: "Otros",
    icon: "Image",
    folder: "otros",
    items: [
      { file: "otros1.png", caption: "Lore de BoxPvP",                                    tags: ["boxpvp"],   plugin: "ItemEdit" },
      { file: "otros2.png", caption: "Mensajes de chat automáticos",                      tags: ["global"],   plugin: "AutomaticBroadcast"     },
      { file: "otros3.png", caption: "MOTD de servidor",                                  tags: ["global"], plugin: "Sistemas propios"     },
    ],
  },
];