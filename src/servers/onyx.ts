import type { Link } from "@/types/link";
import type { ServerModel } from "@/types/server";

export const onyxLinks: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/5BRMMFg" },
  { text: "Вики", icon: "wiki", url: "https://wiki.ss13.ru/index.php?title=Chaotic_Onyx" },
  { text: "Правила", icon: "rules", url: "https://wiki.ss13.ru/index.php?title=Onyx_Rules" },
  { text: "Сайт", url: "https://ss13.ru" }
];

export const onyxServers: ServerModel[] = [
  {
    name: "Onyx",
    description: "Классический дух оторванной от остального человечества станции, на которой вечно что-то идет не так и никто не знает, что с этим делать ",
    url: "byond://play.ss13.ru:2507",
    build: "OnyxBay"
  }
];
