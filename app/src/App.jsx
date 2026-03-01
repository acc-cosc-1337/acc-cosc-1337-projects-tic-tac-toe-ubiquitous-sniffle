import { useMemo, useState } from 'react'
import { Game } from './engine/index.js'

export default function App() {
  const [startingPlayer, setStartingPlayer] = useState('X')

  const game = useMemo(() => new Game(startingPlayer), [startingPlayer])

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Tic Tac Toe Engine</h1>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <label>
          Starting player:&nbsp;
          <select value={startingPlayer} onChange={(e) => setStartingPlayer(e.target.value)}>
            <option value="X">X</option>
            <option value="O">O</option>
          </select>
        </label>

        <span>
          Current: <strong>{game.currentPlayer()}</strong>
        </span>

        <span>
          Status: <strong>{game.status()}</strong>
        </span>
      </div>

      <p style={{ marginTop: 16, opacity: 0.7 }}>
        This UI is just a demo harness. The engine lives in <code>src/engine/</code>.
      </p>
    </div>
  )
}
