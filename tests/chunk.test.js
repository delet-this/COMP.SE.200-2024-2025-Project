import { describe, test, expect } from "vitest";

import chunk from "src/chunk.js";

describe("chunk.js", () => {
  test("Array of length 4 split into chunks of length 2, expecting two arrays of length 2", async () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test("Array of length 4 split into chunks of length 3, expecting an array of length 3 and an array of length 1", async () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test("Array of length 0 split into chunks of length 2, expecting an array of length 0", async () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test("Array of length 2 split into chunks of 3, expecting array of length 2", async () => {
    expect(chunk(['a', 'b'], 3)).toEqual(['a', 'b']);
  });
});
