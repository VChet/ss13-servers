import type { Link } from "@/types/Link";
import type { ServerModel } from "@/types/Server";

export const ss220Links: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/ss220" },
  { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club/" },
  { text: "Правила", icon: "rules", url: "https://wiki.ss220.club/index.php/Правила_Сервера" }
];

export const ss220Servers: ServerModel[] = [
  {
    name: "Main 13",
    url: "byond://141.95.72.94:4002"
  },
  {
    name: "Main 14",
    url: "byond://141.95.72.94:1212"
  },
  {
    name: "Second 14",
    url: "byond://141.95.72.94:1213"
  },
  {
    name: "Third 14",
    url: "byond://141.95.72.94:1214"
  }
];
