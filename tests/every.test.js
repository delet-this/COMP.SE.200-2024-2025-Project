import { describe, test, expect } from "vitest";

import every from "src/every.js";

describe("every.js", () => {
  test("Array of integers above zero using predicate x>0, expecting true", async () => {
    expect(every([1, 2, 3], (x) => x>0)).toBe(true);
  });

  test("Array of integers with one zero using predicate x>0, expecting false", async () => {
    expect(every([1, 0, 3], (x) => x>0)).toBe(false);
  });
});
