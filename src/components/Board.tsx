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
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-grid">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}
