# Glossary

- **Mark**: 'X' or 'O'
- **Empty**: an unoccupied cell
- **Position**: a target cell index (0–8) (UI may map row/col to index)
- **Status**: 'IN_PROGRESS' | 'WIN' | 'DRAW'
- **Starting player**: the mark chosen at initialization
- **Current player**: whose turn it is right now
- **Terminal state**: WIN or DRAW (no further moves allowed)
- **Snapshot**: read-only view of board + status + current player (+ winner if any)
