import type { ServerModel } from "../types/Server";
import type { LinkButton } from "../types/LinkButtons";

export const ss220Buttons: Array<LinkButton> = [
  { text: "Discord", url: "https://discord.ss220.space" },
  { text: "Правила", url: "https://ss220.space/wiki/index.php/Правила_Сервера" },
  { text: "Вики Paradise", url: "https://ss220.space/wiki" },
  { text: "Вики Infinity", url: "https://wiki.infinity-ss13.info" },
  { text: "Карта Kerberos (Delta)", url: "https://affectedarc07.github.io/SS13WebMap/Paradise/Delta" },
  { text: "Карта Cyberiad (BoxStation)", url: "https://affectedarc07.github.io/SS13WebMap/Paradise/Cyberiad" },
]

export const ss220Servers: Array<ServerModel> = [
  {
    name: "Main",
    description: "Основной",
    url: "byond://launch.ss220.space:7721",
    build: "Paradise",
    map: "Kerberos",
    mode: "secret",
  },
  {
    name: "Extended eXperimental",
    description: "Без антагонистов",
    url: "byond://launch.ss220.space:7724",
    build: "Paradise",
    map: "Cyberiad",
    mode: "extended",
  },
  {
    name: "Whitelist Paradise",
    description: "Доступ после 30 часов игры",
    url: "byond://launch.ss220.space:7723",
    build: "Paradise",
    map: "Kerberos",
    mode: "secret",
  },
  {
    name: "Whitelist Sierra",
    description: "Доступ после 30 часов игры",
    url: "byond://launch.ss220.space:7725",
    build: "Infinity",
    map: "Sierra",
    mode: "secret",
  },
  {
    name: "Whitelist Prime",
    description: "Ротация билдов. Нужно покупать допуск у стримеров",
    url: "byond://launch.ss220.space:7722",
    build: "Paradise",
  },
];
