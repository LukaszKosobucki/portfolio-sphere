import { render, screen } from "@testing-library/react";
import { describe, expect, jest, mock, test } from "bun:test";
import Stars from "./stars";

mock.module("@/app/utils/random", () => ({
  getRandom: jest.fn(() => 100),
}));

describe("Stars Component", () => {
  test("renders the Stars component with correct number of star layers", () => {
    render(<Stars />);

    const stars1 = screen.getByTestId("stars1");
    const stars2 = screen.getByTestId("stars2");
    const stars3 = screen.getByTestId("stars3");

    expect(stars1).toBeInTheDocument();
    expect(stars2).toBeInTheDocument();
    expect(stars3).toBeInTheDocument();
  });

  test("applies the correct box-shadow for small stars", () => {
    render(<Stars />);
    const stars1 = screen.getByTestId("stars1");

    expect(stars1).toHaveStyle({
      boxShadow: "100px 100px #fff" + ", 100px 100px #fff".repeat(999), // Continue as per expected value
    });
  });

  test("applies the correct box-shadow for medium stars", () => {
    render(<Stars />);
    const stars2 = screen.getByTestId("stars2");

    expect(stars2).toHaveStyle({
      boxShadow: "100px 100px #fff" + ", 100px 100px #fff".repeat(499),
    });
  });

  test("applies the correct box-shadow for large stars", () => {
    render(<Stars />);
    const stars3 = screen.getByTestId("stars3");

    expect(stars3).toHaveStyle({
      boxShadow: "100px 100px #fff" + ", 100px 100px #fff".repeat(249), // Continue as per expected value
    });
  });
});
