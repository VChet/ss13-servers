import type { Link } from "@/types/Link";
import type { ServerModel } from "@/types/Server";

export const ss220Links: Array<Link> = [
  { text: "Discord", icon: "discord", url: "https://discord.ss220.space" },
  { text: "Вики Paradise", icon: "wiki", url: "https://wiki.ss220.space/index.php/Правила_Сервера" },
  { text: "Вики Infinity", icon: "wiki", url: "https://sierra.ss220.space/index.php/Правила_Сервера" },
  { text: "Гайды Paradise", url: "https://wiki.ss220.space/index.php/Руководства" },
  { text: "Правила Paradise", icon: "rules", url: "http://wiki.ss220.space/index.php/Правила_Сервера" },
  { text: "Правила Infinity", icon: "rules", url: "https://sierra.ss220.space/index.php/Правила_Сервера" },
  { text: "Карта Cyberiad", icon: "map", url: "https://affectedarc07.github.io/SS13WebMap/Paradise/Cyberiad" },
  { text: "Карта Delta", icon: "map", url: "https://affectedarc07.github.io/SS13WebMap/Paradise/Delta" },
  { text: "Карта Sierra", icon: "map", url: "https://sierra.ss220.space/index.php/ИКН_Сьерра" },
];

export const ss220Servers: Array<ServerModel> = [
  {
    byond_id: 1810591415,
    name: "Paradise Main",
    description: "Основной сервер",
    url: "byond://ru.game.ss220.space:7721",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 282453224,
    name: "Paradise Secondary",
    description: "Второй сервер. Общая база персонажей",
    url: "byond://ru.game.ss220.space:7726",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 1011094487,
    name: "Paradise Vega",
    description: "Третий сервер. Общая база персонажей",
    url: "byond://ru.game.ss220.space:7729",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 1914061651,
    name: "Paradise Cleo",
    description: "Четвертый сервер. Общая база персонажей",
    url: "byond://ru.game.ss220.space:7728",
    build: "Paradise",
    map: "Delta",
    mode: "secret",
  },
  {
    byond_id: 2110023106,
    name: "Paradise Extended eXperimental",
    description: "Долгие раунды без раундстартовых антагов",
    url: "byond://ex.ss220.space:7724",
    build: "Paradise",
    map: "Cyberiad",
    mode: "extended",
  },
  {
    byond_id: 1304658937,
    name: "Paradise WL",
    description: "Ежедневная ротация. Требуется 75+ часов на Main/Secondary/Extended",
    url: "byond://ru.game.ss220.space:7723",
    build: "Paradise",
    map: "Delta/Cyberiad",
    mode: "secret",
  },
  {
    byond_id: 189414552,
    name: "Sierra",
    description: "Атмосферное и более требовательное РП",
    url: "byond://ru.game.ss220.space:7725",
    build: "Infinity",
    map: "Sierra",
    mode: "secret",
  },
  {
    byond_id: 9225362,
    name: "Whitelist Prime",
    description: "Допуск покупается у стримеров",
    url: "byond://ru.game.ss220.space:7722",
    build: "Paradise",
    map: "Cyberiad",
    mode: "secret",
  },
  {
    byond_id: 429929376,
    name: "TerraGov Marine Corps",
    description: "Тактическая командная РП игра в жанре шутера в сеттинге про чужих",
    url: "byond://ru.game.ss220.space:7727",
    build: "TGMC",
    buttons: [{ text: "Вики", icon: "wiki", url: "https://tg.ss220.space" }],
  },
  {
    byond_id: 1176035444,
    name: "tgstation",
    description: "На пути к MRP",
    url: "byond://ru.game.ss220.space:7730",
    build: "TG Station",
    map: "MetaStation",
  },
];
