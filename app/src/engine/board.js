export class Board {
  constructor() {
    // 9 cells: null | 'X' | 'O'
    this._cells = Array(9).fill(null)
  }

  cells() {
    // Return a copy so callers can't mutate internal state.
    return [...this._cells]
  }

  canPlace(index) {
    if (!Number.isInteger(index)) return false
    if (index < 0 || index > 8) return false
    if (this._cells[index] !== null) return false
    return true
  }

  place(index, player) {
    if (!this.canPlace(index)) {
      return false
    }

    this._cells[index] = player
    return true
  }
}
