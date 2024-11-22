import { describe, test, expect } from "vitest";

import words from "src/words.js";

describe("words.js", () => {
  test("Input with only alphanumerics", async () => {
    expect(words("The 10 quick brown foxes")).toEqual(["The", "10", "quick", "brown", "foxes"]);
  });

  test("Input with words using non-standard latin alphabets", async () => {
    expect(words("fåå bär føøbãr")).toEqual(["fåå", "bär", "føøbãr"]);
  });

  test("Input with punctuation", async () => {
    expect(words("foo, bar, foobar.")).toEqual(["foo", "bar", "foobar"]);
  });

  test("Input with special characters", async () => {
    expect(words("foo & bar 10%")).toEqual(["foo", "bar", "10"]);
  });

  test("Input with special characters, using a regex", async () => {
    expect(words("foo & bar 10%", /[a-z]+|\d+%*/g)).toEqual(["foo", "bar", "10%"]);
  });
});
