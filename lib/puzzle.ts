export type PuzzleId = "o" | "u" | "l";

export type PuzzleTheme = {
  image: string;
  accent: string; // tray background and highlighted slot outline
  accentDark: string; // selected piece outline and Guide button text
  accentLight: string; // Guide button background
  accentMid: string; // Guide button when pressed
};

export const puzzles: Record<PuzzleId, PuzzleTheme> = {
  // O: the pink piece (TODO: confirm image and colors)
  o: {
    image: "/game/puzzle/araaus-puzzle.png",
    accent: "#c77dc0",
    accentDark: "#4a1d47",
    accentLight: "#fbeafa",
    accentMid: "#e9b7e5",
  },
  // U: the red piece (TODO: confirm colors)
  u: {
    image: "/game/puzzle/araaus-puzzle-red.png",
    accent: "#e5232e",
    accentDark: "#5c0a0f",
    accentLight: "#ffe9ea",
    accentMid: "#ffb3b8",
  },
  // L: the blue piece (colors taken from your original code)
  l: {
    image: "/game/puzzle/araaus-puzzle-blue.png",
    accent: "#098efb",
    accentDark: "#043156",
    accentLight: "#e7f4ff",
    accentMid: "#95cfff",
  },
};