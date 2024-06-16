export type LinkIcon = "wiki" | "discord" | "rules" | "map" | "document" | "music";

export interface Link {
  text: string
  icon?: LinkIcon
  url: string
}
