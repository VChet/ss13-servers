import type { Link } from "@/types/link";
import type { ServerInfo } from "@/types/server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" },
  { text: "Правила ", icon: "rules", url: "https://wiki.ss220.club/index.php/Правила_Сервера" },
  { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club" },
  { text: "Вики Prime", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" },
  { text: "Вики Sierra", icon: "wiki", url: "https://sierra.ss220.club" }
];

export const ss220Servers: ServerInfo[] = [
  {
    name: "Green",
    build: "SS220-Paradise",
    map: "Box Station (Cyberiad)",
    mapUrl: "https://webmap.affectedarc07.co.uk/maps/ss220/deltastation",
    url: "byond://s1.ss220.club:4002"
  },
  {
    name: "Black",
    build: "SS220-Paradise",
    map: "Box Station (Cyberiad)",
    mapUrl: "https://webmap.affectedarc07.co.uk/maps/ss220/boxstation",
    url: "byond://s1.ss220.club:4000"
  },
  {
    name: "Prime",
    build: "SS220-Paradise",
    map: "Box Station (Cyberiad)",
    mapUrl: "https://webmap.affectedarc07.co.uk/maps/ss220/boxstation",
    url: "byond://s1.ss220.club:4001"
  },
  {
    name: "Sierra",
    build: "WycceraBay220",
    url: "byond://141.95.102.4:1212"
  }
];
