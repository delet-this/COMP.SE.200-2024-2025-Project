import { describe, test, expect } from "vitest";

import isEmpty from "src/isEmpty.js";

describe("isEmpty.js", () => {
  test("Null input, expecting true", async () => {
    expect(isEmpty(null)).toBe(true);
  });

  test("String input, expecting false", async () => {
    expect(isEmpty("abc")).toBe(false);
  });

  test("Zero-length string input, expecting true", async () => {
    expect(isEmpty("")).toBe(true);
  });
});
