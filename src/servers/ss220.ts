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
    name: "Main",
    description: "Основной сервер",
    url: "byond://play.ss220.space:7721",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    name: "Second",
    description: "Второй сервер. Общая база персонажей",
    url: "byond://play.ss220.space:7726",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    name: "Vega",
    description: "Третий сервер. Общая база персонажей",
    url: "byond://play.ss220.space:7729",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    name: "Cleo",
    description: "Четвертый сервер. Общая база персонажей",
    url: "byond://play.ss220.space:7728",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    name: "Extended",
    description: "Долгие раунды без раундстартовых антагонистов",
    url: "byond://ex.ss220.space:7724",
    build: "Paradise",
    map: "Cyberiad",
    mode: "extended",
  },
  {
    name: "Whitelist Paradise",
    description: "Ежедневная ротация. Требуется 30+ часов на Main/Second/EX",
    url: "byond://play.ss220.space:7723",
    build: "Paradise",
    map: "Delta/Cyberiad",
    mode: "secret",
  },
  {
    name: "Sierra",
    description: "Атмосферное и более требовательное РП",
    url: "byond://play.ss220.space:7725",
    build: "Infinity",
    map: "Sierra",
    mode: "secret",
  },
  {
    name: "Whitelist Prime",
    description: "Допуск покупается у стримеров",
    url: "byond://play.ss220.space:7722",
    build: "Paradise",
    map: "Cyberiad",
  },
  {
    name: "TGMC",
    description: "TerraGov Marine Corps",
    url: "byond://play.ss220.space:7727",
    build: "TGMC",
    buttons: [{ text: "Вики", type: "wiki", url: "https://tg.ss220.space" }],
  },
];
