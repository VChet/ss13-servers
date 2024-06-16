import type { TauServer } from "@/types/api/tau-ceti";
import type { Link } from "@/types/link";
import type { ServerModel } from "@/types/server";

export const tauLinks: Link[] = [
  { text: "Discord", icon: "discord", url: "https://discord.gg/YCWRjkb" },
  { text: "Вики", icon: "wiki", url: "https://wiki.taucetistation.org" },
  { text: "Правила", icon: "rules", url: "https://rules.taucetistation.org" },
  { text: "Карта", icon: "map", url: "https://webmap.affectedarc07.co.uk/maps/tcc/box" },
  { text: "Гайды", url: "https://wiki.taucetistation.org/Guides" },
  { text: "Музыка", icon: "music", url: "https://wiki.taucetistation.org/Music" },
  { text: "Сайт", url: "https://taucetistation.org" }
];

export const tauServers: ServerModel[] = [
  {
    name: "Tau Ceti Classic",
    description: "Основной сервер с наибольшим лимитом игроков и активным вниманием администрации",
    url: "byond://game.taucetistation.org:2506"
  },
  {
    name: "Tau Ceti Classic II",
    description: "Дополнительный сервер с меньшим ограничением на онлайн, меньшим участием администрации",
    url: "byond://game.taucetistation.org:2507"
  }
];

function getEndpoint(name: ServerModel["name"]): string {
  switch (name) {
    case "Tau Ceti Classic": return "https://taucetistation.org/server/tauceti/json";
    case "Tau Ceti Classic II": return "https://taucetistation.org/server/tauceti2/json";
    default: throw new Error(`Unknown server name: ${name}`);
  }
}

export async function fetchServer(name: ServerModel["name"]): Promise<Partial<ServerModel> | void> {
  try {
    const response = await fetch(getEndpoint(name));
    const data: TauServer = await response.json();
    return {
      error: data.error,
      build: data.version,
      map: data.map_name,
      mode: data.mode,
      players: data.players,
      duration: data.roundduration
    };
  } catch (error) {
    console.error(error);
  }
}
