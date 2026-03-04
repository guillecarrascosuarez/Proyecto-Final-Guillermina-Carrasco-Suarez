import { describe, expect, it } from "vitest";
import { sum } from "../src/sum";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(2, 3)).toBe(3);
  });

  it("works with negatives", () => {
    expect(sum(-10, 7)).toBe(-3);
  });
});
