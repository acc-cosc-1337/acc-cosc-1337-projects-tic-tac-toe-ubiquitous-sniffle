# Requirements — Tic Tac Toe Engine (Iteration 1)

## Functional
1. Represent a 3×3 board.
2. Support two players: X and O.
3. Starting player is configurable at initialization.
4. Starting player must be either X or O.
5. Players alternate turns after each valid move.
6. A move selects a valid empty position.
7. Reject:
   - Out-of-bounds moves
   - Occupied moves
   - Moves after the game is over
8. Detect:
   - Win (3 in a row: row/col/diag)
   - Draw (board full, no winner)
9. Once WIN or DRAW occurs, no further moves are allowed.
10. Expose current game state at any time.

## Non-functional
- Engine is UI-agnostic.
- Unit-testable.
- Coverage gate ≥ 75% (engine scope).
- CI runs on every push and PR.
