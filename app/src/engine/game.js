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

  board() {
    return this._board
  }

placeMark(index) {
    if (this._status !== 'IN_PROGRESS') {
      return { ok: false, reason: 'GAME_NOT_IN_PROGRESS' }
    }

    const placed = this._board.place(index, this._currentPlayer)

    if (!placed) {
      return { ok: false, reason: 'INVALID_MOVE' }
    }

    this._currentPlayer = this._currentPlayer === 'X' ? 'O' : 'X'

    return { ok: true }
  }  
}
