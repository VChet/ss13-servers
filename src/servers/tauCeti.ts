import axios from "axios";
import type { AxiosResponse } from "axios";
import type { ServerModel, TauServer } from "../types/Server";

export let tauServers: Array<ServerModel> = [
  {
    name: "Tau Ceti Classic",
    url: "byond://game.taucetistation.org:2506",
  },
  {
    name: "Tau Ceti Classic II",
    url: "byond://game.taucetistation.org:2507",
  },
  {
    name: "Tau Ceti Classic III",
    url: "byond://game.taucetistation.org:2508",
  },
];

export async function fetchTauServer(
  url: string
): Promise<Partial<ServerModel>> {
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
