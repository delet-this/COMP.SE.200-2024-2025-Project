import { describe, test, expect } from "vitest";

import isEmpty from "src/isEmpty.js";

describe("isEmpty.js", () => {
  test("Values with no enumerable properties", async () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(1)).toBe(true);
  });

  describe("Enumerable objects", () => {
    test("String", async () => {
      expect(isEmpty("abc")).toBe(false);
      expect(isEmpty("")).toBe(true);
    });

    test("Array", async () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
      expect(isEmpty([])).toBe(true);
    });

    test("Map", async () => {
      expect(isEmpty({ foo: "bar" })).toBe(false);
      expect(isEmpty(new Map([]))).toBe(true);
    });

    test("Set", async () => {
      expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
      expect(isEmpty(new Set([]))).toBe(true);
    });
  });
});
