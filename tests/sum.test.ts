import { describe, expect, it } from "vitest";
import { sum } from "../src/sum";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(4, 6)).toBe(10);
  });

  it("works with negatives", () => {
    expect(sum(-10, 7)).toBe(-3);
  });
});
