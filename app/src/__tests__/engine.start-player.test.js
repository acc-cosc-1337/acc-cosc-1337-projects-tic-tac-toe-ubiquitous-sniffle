import { describe, it, expect } from 'vitest'
import { Game } from '../engine/game.js'

describe('Slice: Starting Player Initialization', () => {
  it('accepts startingPlayer = X and sets currentPlayer = X', () => {
    const g = new Game('X')
    expect(g.currentPlayer()).toBe('X')
    expect(g.status()).toBe('IN_PROGRESS')
  })

  it('accepts startingPlayer = O and sets currentPlayer = O', () => {
    const g = new Game('O')
    expect(g.currentPlayer()).toBe('O')
    expect(g.status()).toBe('IN_PROGRESS')
  })

  it('rejects invalid startingPlayer', () => {
    expect(() => new Game('Z')).toThrow()
  })
})
