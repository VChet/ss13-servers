import axios from "axios";
import type { AxiosResponse } from "axios";
import type { ServerModel, TauServer } from "../types/Server";

export const tauServers: Array<ServerModel> = [
  {
    name: "Tau Ceti Classic",
    description: 'Основной сервер с наибольшим лимитом игроков и активным вниманием администрации',
    url: "byond://game.taucetistation.org:2506",
  },
  {
    name: "Tau Ceti Classic II",
    description: 'Дополнительный сервер с меньшим ограничением на онлайн, меньшим участием администрации',
    url: "byond://game.taucetistation.org:2507",
  },
  {
    name: "Tau Ceti Classic III",
    description: 'Сервер для новичков, выключены лимиты времени для профессий',
    url: "byond://game.taucetistation.org:2508",
  },
];

export async function fetchTauServer(url: string): Promise<Partial<ServerModel>> {
  const { data }: AxiosResponse<TauServer> = await axios.get(url);
  return {
    error: data.error,
    build: data.version,
    map: data.map_name,
    mode: data.mode,
    players: data.players,
    duration: data.roundduration,
  };
}
