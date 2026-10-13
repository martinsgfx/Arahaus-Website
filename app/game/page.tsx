import type { Metadata } from "next";
import GameStage from "../../components/game/GameStage";

export const metadata: Metadata = {
  title: "Solve the Puzzle",
  description:
    "Solve our creative puzzle and piece together the work of Arahaus Creative Studio.",
  alternates: { canonical: "/game" },
};

export default function GamePage() {
  return (
    <main>
      <GameStage />
    </main>
  );
}