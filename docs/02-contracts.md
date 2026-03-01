# Contracts (Language-Agnostic)

Implementations may differ in syntax, but must preserve behavior.

## Game
### initialize(startingPlayer)
- startingPlayer must be 'X' or 'O' otherwise error
- currentPlayer = startingPlayer
- status = 'IN_PROGRESS'
- board initialized empty

### currentPlayer() -> 'X' | 'O'
### status() -> 'IN_PROGRESS' | 'WIN' | 'DRAW'

### move(position) -> Snapshot
- (Not implemented in iteration 0 of this template; added via slices)
