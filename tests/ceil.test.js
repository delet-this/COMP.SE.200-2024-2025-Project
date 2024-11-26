import { describe, test, expect } from "vitest";

import ceil from "src/ceil.js";

describe("ceil.js", () => {
  test("Zero", async () => {
    expect(ceil(0, 0)).toBe(0);
    expect(ceil(0, 1)).toBe(0);
    expect(ceil(0, -1)).toBe(0);
  });

  test("No decimals", async () => {
    expect(ceil(0.01, 0)).toBe(1);
    expect(ceil(1.01, 0)).toBe(2);
    expect(ceil(1.5, 0)).toBe(2);
    expect(ceil(-0.1, 0)).toBe(-0);
    expect(ceil(-0.5, 0)).toBe(-0);
    expect(ceil(-0.9, 0)).toBe(-0);
  });

  test("One decimal", async () => {
    expect(ceil(0.01, 1)).toBe(0.1);
    expect(ceil(0.05, 1)).toBe(0.1);
    expect(ceil(0.06, 1)).toBe(0.1);
    expect(ceil(0.99, 1)).toBe(1.0);

    expect(ceil(-0.01, 1)).toBe(0);
    expect(ceil(-0.11, 1)).toBe(-0.1);
  });

  test("Negative decimals", async () => {
    expect(ceil(1, -1)).toBe(10);
    expect(ceil(5, -1)).toBe(10);
    expect(ceil(6, -1)).toBe(10);
    expect(ceil(10, -1)).toBe(10);

    expect(ceil(11, -1)).toBe(20);
    expect(ceil(15, -1)).toBe(20);
    expect(ceil(16, -1)).toBe(20);

    expect(ceil(-1, -1)).toBe(0);
    expect(ceil(-5, -1)).toBe(0);
    expect(ceil(-6, -1)).toBe(0);
    expect(ceil(-10, -1)).toBe(-10);
    expect(ceil(-11, -1)).toBe(-10);
  });

  test("Infinity", async () => {
    expect(ceil(Infinity, -1)).toBe(NaN);
    expect(ceil(Infinity, 0)).toBe(Infinity);
    expect(ceil(Infinity, 1)).toBe(NaN);
  });

  test("NaN", async () => {
    expect(ceil(NaN, -1)).toBe(NaN);
    expect(ceil(NaN, 0)).toBe(NaN);
    expect(ceil(NaN, 1)).toBe(NaN);
  });

  test("NaN decimals", async () => {
    expect(ceil(0, NaN)).toBe(0);
    expect(ceil(1, NaN)).toBe(1);
    expect(ceil(15, NaN)).toBe(15);
  });

  test("Infinity decimals", async () => {
    expect(ceil(0, Infinity)).toBe(0);
    expect(ceil(1, Infinity)).toBe(1);
    expect(ceil(0.01, Infinity)).toBe(0.01);
    expect(ceil(-0.01, Infinity)).toBe(-0.01);
  });
});
