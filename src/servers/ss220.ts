import type { Link } from "@/types/link";
import type { ServerInfo } from "@/types/server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" }
];

export const ss220Servers: ServerInfo[] = [
  {
    name: "Paradise",
    description: "Основной сервер",
    build: "Paradise",
    url: "byond://paradise.ss13.ss220.club:4000",
    buttons: [
      { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club/index.php" },
      { text: "Правила", icon: "rules", url: "https://wiki.ss220.club/index.php/Правила_Сервера" }
    ]
  },
  {
    name: "BandaStation",
    description: "Весёлые раунды с кучей различных возможностей и максимальной свободой действий",
    build: "/tg/",
    url: "byond://bandastation.ss13.ss220.club:2200",
    buttons: [
      { text: "Вики", icon: "wiki", url: "https://bs.ss220.club/index.php" },
      { text: "Правила", icon: "rules", url: "https://bs.ss220.club/index.php/Правила" }
    ]
  },
  {
    name: "Prime",
    description: "Сервер с вайтлистом для стримеров",
    build: "Paradise",
    url: "byond://prime.ss13.ss220.club:3254",
    buttons: [
      { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" },
      { text: "Правила", icon: "rules", url: "https://wiki.ss220.club/index.php/Prime_Portal/Правила_сервера" }
    ]
  }
];
