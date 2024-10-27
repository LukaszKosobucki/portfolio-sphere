import { fakeTimers } from "@/app/utils/tests/fake-timers";
import { render } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import TwinklingStars from "./twinkling-stars";
const clock = fakeTimers();

describe("TwinklingStars Component", () => {
  test("should render without crashing", () => {
    const { container } = render(<TwinklingStars />);
    expect(container).toBeInTheDocument();
  });

  test("should have a galaxy element", () => {
    render(
      <div id="galaxy">
        <TwinklingStars />
      </div>,
    );
    const galaxy = document.getElementById("galaxy");
    expect(galaxy).toBeInTheDocument();
  });

  test("should create a star after interval", () => {
    const { container } = render(
      <div id="galaxy">
        <TwinklingStars />
      </div>,
    );

    expect(container.querySelectorAll("svg.twinkle").length).toBe(0);

    clock.tick(5000);
    const starsAfterFirstInterval = container.querySelectorAll("svg.twinkle");
    expect(starsAfterFirstInterval.length).toBe(1);
  });
});
