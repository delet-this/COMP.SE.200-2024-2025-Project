import { describe, test, expect, vitest } from "vitest";

import map from "src/map.js";

describe("map.js", () => {
  const increment = (n) => n + 1;

  test("Zero elements", async () => {
    const incMock = vitest.fn(increment);
    expect(map([], incMock)).toStrictEqual([]);
    expect(incMock).not.toHaveBeenCalled();
  });

  test("One element", async () => {
    const incMock = vitest.fn(increment);
    expect(map([1], incMock)).toStrictEqual([2]);
    expect(incMock).toHaveBeenCalledTimes(1);
  });

  test("Two elements", async () => {
    const incMock = vitest.fn(increment);
    expect(map([1, 2], incMock)).toStrictEqual([2, 3]);
    expect(incMock).toHaveBeenCalledTimes(2);
  });

  test("No-op function", async () => {
    const fnMock = vitest.fn(() => {});
    const arr = [1, 2, 3];
    expect(map(arr, fnMock)).toStrictEqual([undefined, undefined, undefined]);
    expect(fnMock).toHaveBeenCalledTimes(arr.length);
  });

  test("Array of different types", async () => {
    const fnMock = vitest.fn(() => 0);
    const arr = [1, "2", () => {}];
    expect(map(arr, fnMock)).toStrictEqual([0, 0, 0]);
    expect(fnMock).toHaveBeenCalledTimes(arr.length);
  });

  test("Undefined array", async () => {
    const incMock = vitest.fn(increment);
    expect(map(undefined, incMock)).toStrictEqual([]);
    expect(incMock).not.toHaveBeenCalled();
  });

  test("Null array", async () => {
    const incMock = vitest.fn(increment);
    expect(map(null, incMock)).toStrictEqual([]);
    expect(incMock).not.toHaveBeenCalled();
  });

  test("String", async () => {
    const fnMock = vitest.fn((s, i) => s.concat(i));
    expect(map("abc", fnMock)).toStrictEqual(["a0", "b1", "c2"]);
    expect(fnMock).toHaveBeenCalledTimes(3);
  });

  test("Accessing array", async () => {
    const fnMock = vitest.fn((_, i, arr) => arr[i]);
    const arr = [1, 2, 3];
    expect(map(arr, fnMock)).toStrictEqual(arr);
    expect(fnMock).toHaveBeenCalledTimes(arr.length);
  });
});
