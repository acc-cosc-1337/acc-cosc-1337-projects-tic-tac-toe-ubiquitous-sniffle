import { useMemo, useRef, useState } from "react";
import { Game } from "./engine/game.js"; 

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value ?? ""}
    </button>
  );
}

function Board({ cells, onSquareClick }) {
  return (
    <table className="board">
      <tbody>
        {[0, 1, 2].map((row) => (
          <tr key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <td key={index}>
                  <Square
                    value={cells[index]}
                    onClick={() => onSquareClick(index)}
                  />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  const [startingPlayer, setStartingPlayer] = useState("X");
  const [error, setError] = useState("");

  // Keep the mutable Game instance in a ref (doesn't trigger re-renders).
  const gameRef = useRef(null);

  // Keep a read-only snapshot in React state (this drives rendering).
  const [snapshot, setSnapshot] = useState({
    status: "NOT_STARTED",
    currentPlayer: null,
    board: Array(9).fill(null),
  });

  function refreshSnapshot() {
    const g = gameRef.current;
    if (!g) return;

    setSnapshot({
      status: g.status(),
      currentPlayer: g.currentPlayer(),
      board: g.board().cells(),
    });
  }

  function startGame() {
    setError("");
    try {
      gameRef.current = new Game(startingPlayer);
      refreshSnapshot();
    } catch (e) {
      gameRef.current = null;
      setSnapshot({
        status: "NOT_STARTED",
        currentPlayer: null,
        board: Array(9).fill(null),
      });
      setError(e?.message ?? "Failed to start game");
    }
  }

  function handleSquareClick(index) {
    setError("");

    const g = gameRef.current;
    if (!g) {
      setError("Start the game first.");
      return;
    }

    // Card 2: App does NOT choose the player. Game uses its internal currentPlayer.
    const result = g.placeMark(index);

    if (!result.ok) {
      // Invalid move must NOT change turn (engine already guarantees that)
      setError(result.reason);
    }

    // Always refresh snapshot to reflect any changes (or lack of change)
    refreshSnapshot();
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>Tic Tac Toe</h1>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <label>Starting player:</label>
        <select
          value={startingPlayer}
          onChange={(e) => setStartingPlayer(e.target.value)}
        >
          <option value="X">X</option>
          <option value="O">O</option>
        </select>

        <button onClick={startGame}>Start Game</button>
      </div>

      <div style={{ marginTop: 12 }}>
        <div>
          <strong>Status:</strong> {snapshot.status}
        </div>
        <div>
          <strong>Current Player:</strong>{" "}
          {snapshot.currentPlayer ?? "(none)"}
        </div>
        {error && (
          <div style={{ marginTop: 8 }}>
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>

      <div style={{ marginTop: 16 }}>
        <Board cells={snapshot.board} onSquareClick={handleSquareClick} />
      </div>
    </div>
  );
}