import { useState } from "react";
import Board from "./Board";
import "./Game.css";

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((_, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button className="history-btn" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <main className="game-shell">
        <header className="game-header">
          <p className="eyebrow">Classic board game</p>
          <h1>Tic-Tac-Toe</h1>
          <p className="game-subtitle">Take turns, make three in a row, and claim the win.</p>
        </header>

        <section className="game-content" aria-label="Tic-Tac-Toe game">
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <button className="reset-btn" type="button" onClick={resetGame}>
              Reset game
            </button>
          </div>

          <aside className="game-info" aria-label="Game history">
            <div className="history-heading">
              <h2>Game history</h2>
              <span>{history.length - 1} moves</span>
            </div>
            <ol className="history-list">{moves}</ol>
          </aside>
        </section>
      </main>
    </div>
  );
}
