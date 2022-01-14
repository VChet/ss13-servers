type Icons = "wiki" | "discord" | "rules" | "map" | "music";

export type Link = {
  text: string;
  icon?: Icons;
  url: string;
};
