import type { Link } from "@/types/link";
import type { ServerModel } from "@/types/server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" },
  { text: "Правила ", icon: "rules", url: "https://wiki.ss220.club/index.php/Правила_Сервера" },
  { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club" },
  { text: "Вики Prime", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" },
  { text: "Вики Sierra", icon: "wiki", url: "https://sierra.ss220.club" }
];

export const ss220Servers: ServerModel[] = [
  {
    name: "Green",
    build: "SS220-Paradise",
    map: "Delta Station (Kerberos)",
    url: "byond://s1.ss220.club:4002"
  },
  {
    name: "Black",
    build: "SS220-Paradise",
    map: "Box Station (Cyberiad)",
    url: "byond://s1.ss220.club:4000"
  },
  {
    name: "Prime",
    url: "byond://s1.ss220.club:4001",
    build: "SS220-Paradise",
    map: "Box Station (Cyberiad)"
  },
  {
    name: "Sierra",
    url: "byond://s3.ss220.club:1212",
    build: "WycceraBay220"
  }
];
