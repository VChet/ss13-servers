import type { Link } from "@/types/Link";
import type { ServerModel } from "@/types/Server";

export const ss220Links: Array<Link> = [{ text: "Discord", icon: "discord", url: "https://discord.gg/ss220" }];

export const ss220Servers: Array<ServerModel> = [
  {
    name: "Prime",
    url: "byond://135.125.189.154:4001",
    buttons: [
      { text: "Вики", icon: "wiki", url: "https://wiki.ss220.club/index.php/Раздел_Prime_сервера" },
      {
        text: "Космозакон",
        icon: "wiki",
        url: "https://wiki.ss220.club/index.php/Prime_Portal/Космический_Закон",
      },
    ],
  },
  {
    name: "Main",
    url: "byond://136.243.82.223:4002",
    buttons: [
      { text: "Вики", icon: "wiki", url: "https://wiki.ss220.space/index.php/Правила_Сервера" },
      { text: "Космозакон", icon: "wiki", url: "https://wiki.ss220.club/index.php/Космический_Закон" },
    ],
  },
  {
    name: "Skyrat",
    url: "byond://136.243.82.223:4003",
    buttons: [{ text: "Вики", icon: "wiki", url: "https://skyrat.ss220.club" }],
  },
];
