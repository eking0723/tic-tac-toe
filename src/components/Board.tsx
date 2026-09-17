import Square from "./Square";
import calculateWinner from "./calculateWinner";
import "./Game.css";

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  const status = winner ? `Player ${winner} wins!` : isDraw ? "It’s a draw!" : `Player ${xIsNext ? "X" : "O"}'s turn`;

  return (
    <div className="board">
      <div className={`status ${winner ? "winner" : isDraw ? "draw" : ""}`} role="status" aria-live="polite">
        {winner ? <span className="status-icon" aria-hidden="true">🏆</span> : null}
        <span>{status}</span>
      </div>
      <div className="board-grid">
        {squares.map((square, i) => (
          <Square key={i} value={square} disabled={Boolean(winner || isDraw || square)} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}
