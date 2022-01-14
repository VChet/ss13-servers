export function pluralize(number: number, titles: Array<string>) {
  const cases = [2, 0, 1, 1, 1, 2];
  const text = titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  return `${number} ${text}`;
}

export function getBuildEmoji(build: string): string {
  switch (build.toLowerCase()) {
    case "paradise":
      return "🌴";
    case "infinity":
      return "♾️";
    case "beestation":
      return "🐝";
    default:
      return "";
  }
}
