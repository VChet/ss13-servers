import type { Link } from "@/types/Link";
import type { ServerModel } from "@/types/Server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" },
  { text: "Вики 13", icon: "wiki", url: "https://wiki.ss220.club" },
  { text: "Вики 14", icon: "wiki", url: "https://station14.ru/wiki/Заглавная_страница" },
  { text: "Правила 13 ", icon: "rules", url: "https://wiki.ss220.club/index.php/Правила_Сервера" },
  { text: "Правила 14", icon: "rules", url: "https://docs.google.com/document/d/1tJRijRc2qiQN7qfjClUKAI5bKg5a8aFKnNhnXfa1Kg8/edit?usp=sharing" }
];

export const ss220Servers: ServerModel[] = [
  {
    name: "[13] Green",
    url: "byond://s2.ss220.club:4002"
  },
  {
    name: "[13] Black",
    url: "byond://s1.ss220.club:4000"
  },
  {
    name: "[13] Prime",
    url: "byond://s1.ss220.club:4001",
    buttons: [
      { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" }
    ]
  },
  {
    name: "[14] Persey",
    url: "s2.ss220.club:1212"
  },
  {
    name: "[14] Orion",
    url: "s2.ss220.club:1213"
  }
];
