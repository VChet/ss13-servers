import type { Link } from "@/components/Link";

export interface TauServer {
  admins: number;
  ai: number;
  cached: number;
  enter: number;
  error?: number;
  gamestate: number;
  host: null;
  map_name: string;
  mode: string;
  players: number;
  popcap: number;
  respawn: number;
  revision: string;
  round_id: number;
  roundduration: string;
  stationtime: string;
  version: string;
}

export interface ServerModel {
  /** Server name */
  name: string;
  /** Byond server URL */
  url: string;
  /** Server description */
  description?: string;
  /** Additional server related buttons */
  buttons?: Link[];
  /** Build */
  build?: string;
  /** Current map */
  map?: string;
  /** Game mode */
  mode?: string;
  /** Player count */
  players?: number;
  /** Round time */
  duration?: string;

  /** Server data parsing error code */
  error?: number;
}
