import { fakeTimers } from "@/app/utils/tests/fake-timers";
import { render } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import Galaxy from "./galaxy";

const clock = fakeTimers();

describe("Galaxy Component", () => {
  test("should render wtesthout crashing", () => {
    const { container } = render(<Galaxy />);
    expect(container).toBeInTheDocument();
  });

  test("should render TwinklingStars and MeteorShower components", () => {
    render(<Galaxy />);

    clock.tick(5000);

    expect(document.querySelector("svg.twinkle")).toBeInTheDocument();
    expect(document.querySelector(".meteor")).toBeInTheDocument(); // Adjust this based on any text or element in MeteorShower
  });
});
