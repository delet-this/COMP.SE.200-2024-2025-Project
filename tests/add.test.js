import { test, expect } from "vitest";

import add from "src/add.js";
import { describe } from "vitest";

describe("add.js", () => {
  test("Both operands positive", async () => {
    expect(add(1, 1)).toBe(2);
  });

  test("Both operands negative", async () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test("Odd and even operands", async () => {
    expect(add(1, 2)).toBe(3);
  });

  test("Both operands zero", async () => {
    expect(add(0, 0)).toBe(0);
  });

  test("Left hand side zero", async () => {
    expect(add(0, 1)).toBe(1);
    expect(add(0, -1)).toBe(-1);
  });

  test("Right hand side zero", async () => {
    expect(add(1, 0)).toBe(1);
    expect(add(-1, 0)).toBe(-1);
  });

  test("Floating point", async () => {
    expect(add(0.1, 0.1)).toBe(0.2);
  });

  test("String operands", async () => {
    expect(add("1", "1")).toBe("11");
  });

  test("NaN operands", async () => {
    expect(add(NaN, NaN)).toBe(NaN);
  });

  test("NaN and number", async () => {
    expect(add(NaN, -1)).toBe(NaN);
    expect(add(NaN, 0)).toBe(NaN);
    expect(add(NaN, 1)).toBe(NaN);
  });

  test("Negative NaN and number", async () => {
    expect(add(-NaN, -1)).toBe(-NaN);
    expect(add(-NaN, 0)).toBe(-NaN);
    expect(add(-NaN, 1)).toBe(-NaN);
  });

  test("Infinity and number", async () => {
    expect(add(Infinity, -1)).toBe(Infinity);
    expect(add(Infinity, 0)).toBe(Infinity);
    expect(add(Infinity, 1)).toBe(Infinity);
  });

  test("Negative infinity and number", async () => {
    expect(add(-Infinity, -1)).toBe(-Infinity);
    expect(add(-Infinity, 0)).toBe(-Infinity);
    expect(add(-Infinity, 1)).toBe(-Infinity);
  });

  test("Max value", async () => {
    expect(add(Number.MAX_VALUE, 1)).toBe(Number.MAX_VALUE);
  });

  test("Min value (near zero)", async () => {
    expect(add(Number.MIN_VALUE, 0)).toBe(Number.MIN_VALUE);
  });

  test("Negative max value", async () => {
    expect(add(-Number.MAX_VALUE, -1)).toBe(-Number.MAX_VALUE);
  });
});
