import { Board } from './board.js'

const VALID_PLAYERS = new Set(['X', 'O'])

export class Game {
  constructor(startingPlayer) {
    if (!VALID_PLAYERS.has(startingPlayer)) {
      throw new Error("startingPlayer must be 'X' or 'O'")
    }
    this._startingPlayer = startingPlayer
    this._currentPlayer = startingPlayer
    this._status = 'IN_PROGRESS'
    this._board = new Board()
  }

  currentPlayer() {
    return this._currentPlayer
  }

  status() {
    return this._status
  }

  // Future slices will add: move(), snapshot(), etc.
}
