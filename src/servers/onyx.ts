import type { Link } from "@/types/Link";
import type { ServerModel } from "@/types/Server";

export const onyxLinks: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/5BRMMFg" },
  { text: "Правила", icon: "rules", url: "https://wiki.ss13.ru/index.php?title=Onyx_Rules" },
  { text: "Сайт", url: "https://ss13.ru" }
];

export const onyxServers: ServerModel[] = [
  {
    name: "Chaotic Onyx",
    description:
      "Классический дух оторванной от остального человечества станции, на которой вечно что-то идет не так и никто не знает, что с этим делать ",
    url: "byond://play.ss13.ru:2506",
    build: "OnyxBay",
    buttons: [{ text: "Вики", icon: "wiki", url: "https://wiki.ss13.ru/index.php?title=Chaotic_Onyx" }]
  }
];
