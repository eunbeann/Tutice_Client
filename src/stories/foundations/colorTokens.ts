import { theme } from "../../style/theme";

type ColorName = keyof typeof theme.colors;

interface ColorGroup {
  title: string;
  subtitle: string;
  colors: Record<string, string>;
}

function pick(names: ColorName[]): Record<string, string> {
  return Object.fromEntries(names.map((name) => [name, theme.colors[name]]));
}

function byPrefix(prefix: string): ColorName[] {
  return (Object.keys(theme.colors) as ColorName[]).filter((name) => new RegExp(`^${prefix}\\d+$`).test(name));
}

export const colorGroups: ColorGroup[] = [
  { title: "Green", subtitle: "메인 컬러 · green1 ~ green10", colors: pick(byPrefix("green")) },
  { title: "Red", subtitle: "서브 컬러 · red1 ~ red10", colors: pick(byPrefix("red")) },
  { title: "Greyscale", subtitle: "회색 · grey0 ~ grey900", colors: pick([...byPrefix("grey"), "white"]) },
  {
    title: "Calendar",
    subtitle: "캘린더 · 학생 컬러",
    colors: pick(["yellowGreen", "lightGreen", "yellow", "orange", "red", "pink", "purple", "skyblue", "blue", "bluegrey"]),
  },
  { title: "Semantic", subtitle: "상태 컬러", colors: pick(["semantic_red"]) },
];
