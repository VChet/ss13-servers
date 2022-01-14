import type { LinkButton } from "../types/LinkButtons";
import type { ServerModel, TauServer } from "../types/Server";

export const tauButtons: Array<LinkButton> = [
  { text: "Discord", type: "discord", url: "https://discord.gg/YCWRjkb" },
  { text: "Вики", type: "wiki", url: "https://wiki.taucetistation.org" },
  { text: "📃 Правила", url: "https://rules.taucetistation.org" },
  { text: "🗺️ Карта", url: "https://affectedarc07.github.io/SS13WebMap/TauCetiClassic/BoxStation" },
  { text: "Гайды", url: "https://wiki.taucetistation.org/Guides" },
  { text: "🎵 Музыка", url: "https://wiki.taucetistation.org/Music" },
  { text: "Сайт", url: "https://taucetistation.org" },
];

export const tauServers: Array<ServerModel> = [
  {
    byond_id: 1181733894,
    name: "Tau Ceti Classic",
    description: "Основной сервер с наибольшим лимитом игроков и активным вниманием администрации",
    url: "byond://game.taucetistation.org:2506",
  },
  {
    byond_id: 1240928380,
    name: "Tau Ceti Classic II",
    description: "Дополнительный сервер с меньшим ограничением на онлайн, меньшим участием администрации",
    url: "byond://game.taucetistation.org:2507",
  },
  {
    byond_id: 977601732,
    name: "Tau Ceti Classic III",
    description: "Сервер для новичков, выключены лимиты времени для профессий",
    url: "byond://game.taucetistation.org:2508",
  },
];

export async function fetchTauServer(url: string): Promise<Partial<ServerModel> | void> {
  return fetch(url)
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
