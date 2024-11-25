import { describe, test, expect } from "vitest";

import toNumber from "src/toNumber.js";

describe("toNumber.js", () => {
  test("Input '1', expecting 1", async () => {
    expect(toNumber("1")).toEqual(1);
  });

  test("Input '1.2', expecting 1.2", async () => {
    expect(toNumber("1.2")).toEqual(1.2);
  });

  test("Input '1.23', expecting 1.23", async () => {
    expect(toNumber("1.23")).toEqual(1.23);
  });

  test("Input 'abc', expecting an error", async () => {
    expect(toNumber()).toThrow();
  });
});
