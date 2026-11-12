export const KEYOXIDE = "https://keyoxide.org/7295bb5e13e56d3e1af3d3f4fc190dcc1967f4c5";

export function secondToNice(v: number) {
  const m = Math.floor(v / 60);
  const s = v % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
