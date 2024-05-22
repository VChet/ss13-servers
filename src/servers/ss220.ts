import type { Link } from "@/types/Link";
import type { ServerModel } from "@/types/Server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" },
  { text: "Вики 13", icon: "wiki", url: "https://wiki.ss220.club" },
  { text: "Правила 13 ", icon: "rules", url: "https://wiki.ss220.club/index.php/Правила_Сервера" }
];

export const ss220Servers: ServerModel[] = [
  {
    name: "Green",
    url: "byond://s1.ss220.club:4002"
  },
  {
    name: "Black",
    url: "byond://s1.ss220.club:4000"
  },
  {
    name: "Prime",
    url: "byond://s1.ss220.club:4001",
    buttons: [
      { text: "Вики Prime", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" }
    ]
  },
  {
    name: "Sierra",
    url: "byond://s3.ss220.club:1212"
  }
];
