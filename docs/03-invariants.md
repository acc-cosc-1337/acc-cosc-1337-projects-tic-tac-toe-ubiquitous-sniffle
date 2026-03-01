# Invariants

## Game
- startingPlayer ∈ {'X','O'}
- currentPlayer ∈ {'X','O'}
- At initialization: currentPlayer == startingPlayer
- status ∈ {'IN_PROGRESS','WIN','DRAW'}
- Terminal states are immutable (once WIN/DRAW, cannot revert)

## Board (future slices)
- 9 cells
- each cell ∈ {Empty, X, O}
