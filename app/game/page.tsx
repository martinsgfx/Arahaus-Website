import type { Metadata } from "next";
import GameStage from "../../components/game/GameStage";

export const metadata: Metadata = { title: "Solve the Puzzle" };

export default function GamePage() {
  return (
    <main>
      <GameStage />
    </main>
  );
}