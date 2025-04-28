import type { Link } from "@/types/link";
import type { ServerInfo } from "@/types/server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" },
  { text: "Правила ", icon: "rules", url: "https://wiki.ss220.club/index.php/Правила_Сервера" },
  { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club" },
  { text: "Вики Prime", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" }
];

export const ss220Servers: ServerInfo[] = [
  {
    name: "Green",
    build: "Paradise",
    map: "Box Station (Cyberiad)\nDeltaStation (Kerberos)\nMetaStation (Cerebron)",
    url: "byond://s1.ss220.club:4002"
  },
  {
    name: "Black",
    build: "Paradise",
    map: "Box Station (Cyberiad)\nDeltaStation (Kerberos)\nMetaStation (Cerebron)",
    url: "byond://s1.ss220.club:4000"
  },
  {
    name: "Prime",
    build: "Paradise",
    map: "Box Station (Cyberiad)\nDeltaStation (Kerberos)\nMetaStation (Cerebron)",
    url: "byond://s1.ss220.club:4001"
  }
];
