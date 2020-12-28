export interface ServerModel {
  /** Server name */
  name: string
  /** Byond server URL */
  url: string
  /** Server description */
  description?: string
  /** Additional server related buttons */
  buttons?: [{
    text: string
    url: string
  }]

  /** Current map */
  map?: string
  /** Game mode */
  mode?: string
  /** Player count */
  players?: number
  /** Round time */
  duration?: string

  /** Server data parsing error code */
  error?: number
}
