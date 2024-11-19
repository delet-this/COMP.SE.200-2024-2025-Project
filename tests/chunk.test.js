import { describe, test, expect } from "vitest";

import chunk from "src/chunk.js";

describe("chunk.js", () => {
  test("Array of length 4 split into chunks of length 2", async () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test("Array of length 4 split into chunks of length 3", async () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test("Array of length 0 split into chunks of length 2", async () => {
    expect(chunk([], 2)).toEqual([]);
  });
});