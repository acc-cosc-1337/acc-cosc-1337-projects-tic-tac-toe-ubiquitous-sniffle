# Acceptance Scenarios (Given/When/Then)

## Starting player
1) Given game initialized with startingPlayer = X
   When no moves made
   Then currentPlayer is X and status is IN_PROGRESS

2) Given game initialized with startingPlayer = O
   When no moves made
   Then currentPlayer is O and status is IN_PROGRESS

3) Given game initialized with startingPlayer = invalid
   Then initialization fails
