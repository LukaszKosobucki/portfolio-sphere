import { render, screen } from "@testing-library/react";
import { describe, expect, jest, mock, test } from "bun:test";
import Particles from "./particles";

mock.module("@/app/utils/random", () => ({
  getRandom: jest.fn(() => 100),
}));

describe("Particles Component", () => {
  test("renders the Particles component with correct number of particle layers", () => {
    render(<Particles />);

    const particles1 = screen.getByTestId("particles1");
    const particles2 = screen.getByTestId("particles2");
    const particles3 = screen.getByTestId("particles3");

    expect(particles1).toBeInTheDocument();
    expect(particles2).toBeInTheDocument();
    expect(particles3).toBeInTheDocument();
  });

  test("applies the correct box-shadow for small Particles", () => {
    render(<Particles />);
    const particles1 = screen.getByTestId("particles1");

    expect(particles1).toHaveStyle({
      boxShadow: "100px 100px #000" + ", 100px 100px #000".repeat(999), // Continue as per expected value
    });
  });

  test("applies the correct box-shadow for medium Particles", () => {
    render(<Particles />);
    const particles2 = screen.getByTestId("particles2");

    expect(particles2).toHaveStyle({
      boxShadow: "100px 100px #000" + ", 100px 100px #000".repeat(499),
    });
  });

  test("applies the correct box-shadow for large Particles", () => {
    render(<Particles />);
    const particles3 = screen.getByTestId("particles3");

    expect(particles3).toHaveStyle({
      boxShadow: "100px 100px #000" + ", 100px 100px #000".repeat(249), // Continue as per expected value
    });
  });
});
