import { describe, test, expect, vitest } from "vitest";

import every from "src/every.js";

const gtZero = (x) => x > 0

describe("every.js", () => {
  describe("Predicate x > 0", () => {
    test("All integers greater than zero", async () => {
      const gtZeroMock = vitest.fn(gtZero);
      expect(every([1, 2, 3], gtZeroMock)).toBe(true);
      expect(gtZeroMock).toHaveBeenCalledTimes(3);
    });

    test("One integer equal to zero", async () => {
      const gtZeroMock = vitest.fn(gtZero);
      expect(every([1, 0, 3], gtZeroMock)).toBe(false);
      expect(gtZeroMock).toHaveBeenCalledTimes(2);
    });

    test("One integer less than zero", async () => {
      const gtZeroMock = vitest.fn(gtZero);
      expect(every([-1, 2, 3], gtZeroMock)).toBe(false);
      expect(gtZeroMock).toHaveBeenCalledTimes(1);
    });
  });

  test("Null array", async () => {
    expect(every([])).toBe(true);
    expect(every([], gtZero)).toBe(true);
  });

  test("No predicate", async () => {
    expect(every([1, 2, 3], () => {})).toBe(false);
  });
});
