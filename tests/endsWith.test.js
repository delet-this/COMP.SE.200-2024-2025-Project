import { describe, test, expect } from "vitest";

import endsWith from "src/endsWith.js";

describe("endsWith.js", () => {
  test("Empty string, empty target", async () => {
    expect(endsWith("", "")).toBe(true);
  });

  test("Non-empty string, empty target", async () => {
    expect(endsWith("", "")).toBe(true);
  });

  test("One character string, one character target", async () => {
    expect(endsWith("a", "a")).toBe(true);
    expect(endsWith("a", "b")).toBe(false);
  });

  test("Positive position", async () => {
    expect(endsWith("abc", "c", 3)).toBe(true);
    expect(endsWith("abc", "b", 2)).toBe(true);
    expect(endsWith("abc", "a", 1)).toBe(true);
  });

  test("Zero position", async () => {
    expect(endsWith("a", "a", 0)).toBe(false);
    expect(endsWith("a", "b", 0)).toBe(false);
    expect(endsWith("a", "", 0)).toBe(true);
  });

  test("Negative position", async () => {
    // Negative position should be the same as zero position
    expect(endsWith("a", "a", -1)).toBe(false);
    expect(endsWith("a", "b", -1)).toBe(false);
    expect(endsWith("a", "", -1)).toBe(true);
  });

  test("Multiple character string", async () => {
    expect(endsWith("Hello", "")).toBe(true);
    expect(endsWith("Hello", "o")).toBe(true);
    expect(endsWith("Hello", "lo")).toBe(true);
    expect(endsWith("Hello", "Hello")).toBe(true);
    expect(endsWith("Hello", "a")).toBe(false);
  });

  test("Longer target", async () => {
    expect(endsWith("a", "aa")).toBe(false);
  });
});
