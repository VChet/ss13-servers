import type { ServerModel } from "../types/Server";

export const ss220Servers: Array<ServerModel> = [
  {
    name: "Main",
    url: "byond://launch.ss220.space:7721",
    build: "Paradise",
    map: "Kerberos",
    mode: "secret",
  },
  {
    name: "Extended eXperimental",
    url: "byond://launch.ss220.space:7724",
    build: "Paradise",
    map: "Cyberiad",
    mode: "extended",
  },
  {
    name: "Whitelist Paradise",
    url: "byond://launch.ss220.space:7723",
    build: "Paradise",
    map: "Kerberos",
    mode: "secret",
  },
  {
    name: "Whitelist Sierra",
    url: "byond://launch.ss220.space:7725",
    build: "Infinity",
    map: "Sierra",
    mode: "secret",
  },
  {
    name: "Whitelist Prime",
    url: "byond://launch.ss220.space:7722",
    build: "Paradise",
  },
];
