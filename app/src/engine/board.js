export class Board {
  constructor() {
    // 9 cells: null | 'X' | 'O'
    this._cells = Array(9).fill(null)
  }

  cells() {
    // Return a copy so callers can't mutate internal state.
    return [...this._cells]
  }
}
