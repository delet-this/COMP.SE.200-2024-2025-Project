import { describe, test, expect, vitest } from "vitest";

import reduce from "src/reduce.js";

describe("reduce.js", () => {
  const sum = (acc, n) => acc + n;

  test("Zero elements", async () => {
    const sumMock = vitest.fn(sum);
    expect(reduce([], sumMock, 0)).toBe(0);
    expect(sumMock).not.toHaveBeenCalled();
  });

  test("One element", async () => {
    const sumMock = vitest.fn(sum);
    expect(reduce([1], sumMock, 0)).toBe(1);
    expect(sumMock).toHaveBeenCalledTimes(1);
  });

  test("Two elements", async () => {
    const sumMock = vitest.fn(sum);
    expect(reduce([1, 2], sumMock, 0)).toBe(3);
    expect(sumMock).toHaveBeenCalledTimes(2);
  });

  test("Undefined array", async () => {
    const sumMock = vitest.fn(sum);
    expect(reduce(undefined, sumMock)).toStrictEqual(undefined);
    expect(sumMock).not.toHaveBeenCalled();
  });

  test("Null array", async () => {
    const sumMock = vitest.fn(sum);
    expect(reduce(null, sumMock)).toStrictEqual(undefined);
    expect(sumMock).not.toHaveBeenCalled();
  });

  test("String", async () => {
    const str = "Hello";
    const upperMock = vitest.fn((acc, s) => acc + s.toUpperCase());
    expect(reduce(str, upperMock, "")).toBe(str.toUpperCase());
    expect(upperMock).toHaveBeenCalledTimes(str.length);
  });

  test("Elements of different types", async () => {
    const fnMock = vitest.fn((acc) => acc + 1);
    const arr = [1, "2", () => {}];
    expect(reduce(arr, fnMock, 0)).toBe(arr.length);
    expect(fnMock).toHaveBeenCalledTimes(arr.length);
  });

  test("No-op function", async () => {
    const fnMock = vitest.fn(() => {});
    const arr = [1, 2, 3];
    expect(reduce(arr, fnMock, 42)).toBe(undefined);
    expect(fnMock).toHaveBeenCalledTimes(arr.length);
  });
});
