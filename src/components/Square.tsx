import "./Game.css";

interface SquareProps {
  value: string | null;
  disabled: boolean;
  onSquareClick: () => void;
}

export default function Square({ value, disabled, onSquareClick }: SquareProps) {
  return (
    <button
      className={`square ${value === "X" ? "x" : value === "O" ? "o" : ""}`}
      disabled={disabled}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
