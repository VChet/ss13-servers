import type { LinkButton } from "../types/LinkButtons";
import type { ServerModel } from "../types/Server";

export const ss220Buttons: Array<LinkButton> = [
  { text: "Discord", type: "discord", url: "https://discord.ss220.space" },
  { text: "Вики Paradise", type: "wiki", url: "https://wiki.ss220.space/index.php/Правила_Сервера" },
  { text: "Вики Infinity", type: "wiki", url: "https://sierra.ss220.space/index.php/Правила_Сервера" },
  { text: "Гайды Paradise", url: "https://wiki.ss220.space/index.php/Руководства" },
  { text: "📃 Правила Paradise", url: "http://wiki.ss220.space/index.php/Правила_Сервера" },
  { text: "📃 Правила Infinity", url: "https://sierra.ss220.space/index.php/Правила_Сервера" },
  { text: "🗺️ Карта Cyberiad", url: "https://affectedarc07.github.io/SS13WebMap/Paradise/Cyberiad" },
  { text: "🗺️ Карта Delta", url: "https://affectedarc07.github.io/SS13WebMap/Paradise/Delta" },
  { text: "🗺️ Карта Sierra", url: "https://sierra.ss220.space/index.php/ИКН_Сьерра" },
];

export const ss220Servers: Array<ServerModel> = [
  {
    byond_id: 752040047,
    name: "Paradise Main",
    description: "Основной сервер",
    url: "byond://play.ss220.space:7721",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 2127956120,
    name: "Paradise Secondary",
    description: "Второй сервер. Общая база персонажей",
    url: "byond://play.ss220.space:7726",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 893329138,
    name: "Paradise Vega",
    description: "Третий сервер. Общая база персонажей",
    url: "byond://play.ss220.space:7729",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 1448634978,
    name: "Paradise Cleo",
    description: "Четвертый сервер. Общая база персонажей",
    url: "byond://play.ss220.space:7728",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 1443289377,
    name: "Paradise Extended eXperimental",
    description: "Долгие раунды без раундстартовых антагонистов",
    url: "byond://ex.ss220.space:7724",
    build: "Paradise",
    map: "Cyberiad",
    mode: "extended",
  },
  {
    byond_id: 2124444586,
    name: "Paradise WL",
    description: "Ежедневная ротация. Требуется 30+ часов на Main/Second/EX",
    url: "byond://play.ss220.space:7723",
    build: "Paradise",
    map: "Delta/Cyberiad",
    mode: "secret",
  },
  {
    byond_id: 408186142,
    name: "Sierra",
    description: "Атмосферное и более требовательное РП",
    url: "byond://play.ss220.space:7725",
    build: "Infinity",
    map: "Sierra",
    mode: "secret",
  },
  {
    byond_id: 1691886814,
    name: "Whitelist Prime",
    description: "Допуск покупается у стримеров",
    url: "byond://play.ss220.space:7722",
    build: "Paradise",
    map: "Cyberiad",
  },
  {
    byond_id: 1555823671,
    name: "TerraGov Marine Corps",
    description: "TerraGov Marine Corps",
    url: "byond://play.ss220.space:7727",
    build: "TGMC",
    buttons: [{ text: "Вики", type: "wiki", url: "https://tg.ss220.space" }],
  },
];
