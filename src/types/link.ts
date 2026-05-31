export type LinkIcon = |
  "byond" |
  "discord" |
  "map" |
  "music" |
  "rules" |
  "steam" |
  "wiki";

export interface Link {
  text: string
  url: string
  icon?: LinkIcon
}
