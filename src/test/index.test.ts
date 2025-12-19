import { describe, expect, it } from "vitest";
import { sum } from "../index";

describe("testing sum function", () => {
  it("2 + 3 gives 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
