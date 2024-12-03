import { describe, test, expect } from "vitest";

import chunk from "src/chunk.js";

describe("chunk.js", () => {
  test("Even chunks", async () => {
    // expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
    //   ["a", "b"],
    //   ["c", "d"],
    // ]);
    // expect(chunk(["a", "b", "c", "d", "e", "f"], 2)).toEqual([
    //   ["a", "b"],
    //   ["c", "d"],
    //   ["e", "f"],
    // ]);
  });

  test("Uneven chunks", async () => {
    // expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
    // expect(chunk(["a", "b", "c", "d", "e"], 2)).toEqual([
    //   ["a", "b"],
    //   ["c", "d"],
    //   ["e"],
    // ]);
  });

  test("Chunk longer than given array", async () => {
    // expect(chunk(["a", "b"], 3)).toEqual(["a", "b"]);
    // expect(chunk(["a", "b", "c"], 6)).toEqual(["a", "b", "c"]);
  });

  test("Null array", async () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test("Negative chunk size", async () => {
    expect(chunk(["a", "b"], -1)).toEqual([]);
  });

  test("Default chunk size", async () => {
    // expect(chunk(["a", "b"])).toEqual([["a"], ["b"]]);
    // expect(chunk(["a", "b", "c"])).toEqual([["a"], ["b"], ["c"]]);
  });
});
