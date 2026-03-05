import { describe, it, expect } from "vitest";
import { Game } from "../engine/game.js";

describe("Card 2 — turn rules", () => {
  it("valid move places mark for current player and switches turn", () => {
    const game = new Game("X");

    expect(game.currentPlayer()).toBe("X");

    const r1 = game.placeMark(0);
    expect(r1.ok).toBe(true);

    // After valid move, turn switches
    expect(game.currentPlayer()).toBe("O");

    // Board reflects the move
    expect(game.board().cells()[0]).toBe("X");
  });

  it("invalid move does not change turn (clicking an occupied square)", () => {
    const game = new Game("X");

    // X plays index 0 (valid)
    expect(game.placeMark(0).ok).toBe(true);
    expect(game.currentPlayer()).toBe("O");

    // O tries index 0 again (invalid)
    const r2 = game.placeMark(0);
    expect(r2.ok).toBe(false);
    expect(r2.reason).toBe("INVALID_MOVE");

    // Turn must NOT change after invalid move
    expect(game.currentPlayer()).toBe("O");
  });

  it("invalid move does not change turn (out of range index)", () => {
    const game = new Game("X");

    const r = game.placeMark(99);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("INVALID_MOVE");

    // Turn stays the same
    expect(game.currentPlayer()).toBe("X");
  });

  it("alternation continues while IN_PROGRESS (X then O then X)", () => {
    const game = new Game("X");

    expect(game.currentPlayer()).toBe("X");
    expect(game.placeMark(0).ok).toBe(true);
    expect(game.currentPlayer()).toBe("O");

    expect(game.placeMark(1).ok).toBe(true);
    expect(game.currentPlayer()).toBe("X");

    expect(game.placeMark(2).ok).toBe(true);
    expect(game.currentPlayer()).toBe("O");
  });

  it("moves are rejected if game is not IN_PROGRESS (no turn change)", () => {
    const game = new Game("X");

    // Force status for the test (until Card 3 read-only is hardened)
    game._status = "DONE";

    const r = game.placeMark(0);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("GAME_NOT_IN_PROGRESS");

    // Turn must not change
    expect(game.currentPlayer()).toBe("X");
  });
});