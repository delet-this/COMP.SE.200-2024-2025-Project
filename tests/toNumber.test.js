import { describe, test, expect } from "vitest";

import toNumber from "src/toNumber.js";

describe("toNumber.js", () => {
  describe("Strings", () => {
    test("Integers", async () => {
      expect(toNumber("1")).toEqual(1);
      expect(toNumber("0")).toEqual(0);
      expect(toNumber("-1")).toEqual(-1);
    });

    test("Decimals", async () => {
      expect(toNumber("1.2")).toEqual(1.2);
      expect(toNumber("1.23")).toEqual(1.23);
      expect(toNumber("-1.2")).toEqual(-1.2);
    });

    test("Non-numeric string", async () => {
      expect(() => toNumber("abc")).toEqual(NaN);
    });
  });

  describe("Numbers", () => {
    test("Integers", async () => {
      expect(toNumber(1)).toEqual(1);
      expect(toNumber(0)).toEqual(0);
      expect(toNumber(-1)).toEqual(-1);
    });

    test("Decimals", async () => {
      expect(toNumber(1.2)).toEqual(1.2);
      expect(toNumber(1.23)).toEqual(1.23);
      expect(toNumber(-1.2)).toEqual(-1.2);
    });

    test("Static values", async () => {
      expect(toNumber(Infinity)).toEqual(Infinity);
      expect(toNumber(Number.MAX_VALUE)).toEqual(Number.MAX_VALUE);
      expect(toNumber(Number.MIN_VALUE)).toEqual(Number.MIN_VALUE);
    });
  });

  test("Arrays", async () => {
    expect(toNumber([1])).toEqual(1);
    expect(toNumber([1, 2])).toEqual(NaN);
  });
});
