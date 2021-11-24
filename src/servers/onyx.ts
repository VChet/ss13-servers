import type { LinkButton } from "../types/LinkButtons";
import type { ServerModel } from "../types/Server";

export const onyxButtons: Array<LinkButton> = [
  { text: "Discord", type: "discord", url: "https://discord.gg/4JFNdbk" },
  { text: "Вики OnyxBay", type: "wiki", url: "https://wiki.ss13.ru" },
  { text: "Вики BeeStation", type: "wiki", url: "https://bloodrave.ru" },
  { text: "Гайды OnyxBay", url: "https://wiki.ss13.ru/index.php?title=Guides" },
  { text: "Гайды BeeStation", url: "https://bloodrave.ru/Руководства" },
  { text: "📃 Правила", url: "https://wiki.ss13.ru/index.php?title=Onyx_Rules" },
  { text: "Сайт", url: "https://ss13.ru" },
];

export const onyxServers: Array<ServerModel> = [
  {
    name: "Chaotic Onyx",
    description:
      "Классический дух оторванной от остального человечества станции, на которой вечно что-то идет не так и никто не знает, что с этим делать ",
    url: "byond://play.ss13.ru:2506",
    build: "OnyxBay",
  },
  {
    name: "Eos Orbital Station",
    description:
      "Настоящий ролевой сервер про чрезвычайные ситуации с упором в отыгрыш интересных и запоминающихся персонажей",
    url: "byond://play.ss13.ru:2507",
    build: "OnyxBay",
  },
  {
    name: "Crimson Dragon",
    description:
      "Квинтэссенция весёлого и динамичного безумия, заключенная внутри изолированной космической станции вместе с её параноидальным и зачастую крайне некомпетентным персоналом. Что может пойти не так?",
    url: "byond://play.ss13.ru:2508",
    build: "BeeStation",
  },
];
