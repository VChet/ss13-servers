import type { Link } from "@/types/link";

export interface ServerInfo {
  /** Server name */
  name: string
  /** Byond server URL */
  url: string
  /** Server description */
  description?: string
  /** Additional server related buttons */
  buttons?: Link[]
  /** Build */
  build?: string
  /** Current map */
  map?: string
  /** Current map url */
  mapUrl?: string
  /** Game mode */
  mode?: string
  /** Player count */
  players?: number
  /** Round time */
  duration?: string

  /** Server data parsing error code */
  error?: number
}
