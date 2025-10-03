import "./Game.css";

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className={`square ${value === "X" ? "x" : value === "O" ? "o" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
