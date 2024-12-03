import { describe, test, expect } from "vitest";

import words from "src/words.js";

describe("words.js", () => {
  test("Alphanumerics", async () => {
    expect(words("The 10 quick brown foxes")).toEqual([
      "The",
      "10",
      "quick",
      "brown",
      "foxes",
    ]);
  });

  test("Non-standard latin alphabets", async () => {
    expect(words("fåå bär føøbãr")).toEqual(["fåå", "bär", "føøbãr"]);
  });

  test("Punctuation", async () => {
    expect(words("foo, bar, foobar.")).toEqual(["foo", "bar", "foobar"]);
    expect(words("foo,bar,foobar.")).toEqual(["foo", "bar", "foobar"]);
  });

  test("Special characters", async () => {
    expect(words("foo & bar 10%")).toEqual(["foo", "bar", "10"]);
    expect(words("foo&bar10%")).toEqual(["foo", "bar", "10"]);
  });

  test("Using regex", async () => {
    expect(words("foo & bar 10%", /[a-z]+|\d+%*/g)).toEqual([
      "foo",
      "bar",
      "10%",
    ]);
  });
});
