export interface TauServer {
  version: string;
  mode: string;
  respawn: number;
  enter: number;
  ai: number;
  host?: any;
  players: number;
  stationtime: string;
  gamestate: number;
  roundduration: string;
  map_name: string;
  popcap: number;
  round_id: number;
  revision: string;
  admins: number;
  cached: number;
  error?: number;
}

export interface ServerModel {
  /** Server name */
  name: string;
  /** Byond server URL */
  url: string;
  /** Server description */
  description?: string;
  /** Additional server related buttons */
  buttons?: [{ text: string; url: string }];
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
