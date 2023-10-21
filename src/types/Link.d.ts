type Icons = "wiki" | "discord" | "rules" | "map" | "document" | "music";

export type Link = {
  text: string;
  icon?: Icons;
  url: string;
};
