import type { Link } from "@/types/link";
import type { ServerInfo } from "@/types/server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" },
  { text: "Правила ", icon: "rules", url: "https://bs.ss220.club/index.php/Правила" },
  { text: "Вики", icon: "wiki", url: "https://bs.ss220.club" },
  { text: "Вики Prime", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" }
];

export const ss220Servers: ServerInfo[] = [
  {
    name: "Main",
    description: "Основной сервер",
    build: "/tg/",
    url: "byond://s4.ss220.club:2200"
  },
  {
    name: "Green",
    description: "Стабильный сервер",
    build: "Paradise",
    url: "byond://s1.ss220.club:4002"
  },
  {
    name: "Black",
    description: "Тестовый сервер",
    build: "Paradise",
    url: "byond://s4.ss220.club:4000"
  },
  {
    name: "Prime Paradise",
    description: "Сервер с вайтлистом для стримеров",
    build: "Paradise",
    url: "byond://s1.ss220.club:4001"
  },
  {
    name: "Prime TG",
    description: "Сервер с вайтлистом для стримеров",
    build: "/tg/",
    url: "byond://116.202.156.155:3254"
  }
];
