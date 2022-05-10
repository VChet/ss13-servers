import type { Link } from "@/types/Link";
import type { ServerModel, TauServer } from "@/types/Server";

export const tauLinks: Array<Link> = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/YCWRjkb" },
  { text: "Вики", icon: "wiki", url: "https://wiki.taucetistation.org" },
  { text: "Правила", icon: "rules", url: "https://rules.taucetistation.org" },
  { text: "Карта", icon: "map", url: "https://affectedarc07.github.io/SS13WebMap/TauCetiClassic/BoxStation" },
  { text: "Гайды", url: "https://wiki.taucetistation.org/Guides" },
  { text: "Музыка", icon: "music", url: "https://wiki.taucetistation.org/Music" },
  { text: "Сайт", url: "https://taucetistation.org" },
];

export const tauServers: Array<ServerModel> = [
  {
    byond_id: 86267430,
    name: "Tau Ceti Classic",
    description: "Основной сервер с наибольшим лимитом игроков и активным вниманием администрации",
    url: "byond://game.taucetistation.org:2506",
  },
  {
    byond_id: 1765697859,
    name: "Tau Ceti Classic II",
    description: "Дополнительный сервер с меньшим ограничением на онлайн, меньшим участием администрации",
    url: "byond://game.taucetistation.org:2507",
  },
  {
    byond_id: 443681219,
    name: "Tau Ceti Classic III",
    description: "Сервер для новичков, выключены лимиты времени для профессий",
    url: "byond://game.taucetistation.org:2508",
  },
];

function getEndpoint(serverId: number): string {
  switch (serverId) {
    case 86267430:
      return "https://taucetistation.org/server/tauceti/json";
    case 1765697859:
      return "https://taucetistation.org/server/tauceti2/json";
    case 443681219:
      return "https://taucetistation.org/server/tauceti3/json";
    default:
      return "";
  }
}

export function fetchTauServer(serverId: number): Promise<Partial<ServerModel> | void> {
  return fetch(getEndpoint(serverId))
    .then((response) => response.json())
    .then((data: TauServer) => ({
      error: data.error,
      build: data.version,
      map: data.map_name,
      mode: data.mode,
      players: data.players,
      duration: data.roundduration,
    }))
    .catch((error) => {
      console.error(error);
    });
}
