import { describe, test, expect } from "vitest";

import add from "src/add.js";

describe("add.js", () => {
  test("0 + 0", async () => {
    expect(add(0, 0)).toBe(0);
  });
});
