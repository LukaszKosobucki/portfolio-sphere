import { fakeTimers } from "@/app/utils/tests/fake-timers";
import { render } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import MeteorShower from "./meteor-shower";

const clock = fakeTimers();
describe("MeteorShower Component", () => {
  test("should render without crashing", () => {
    const { container } = render(<MeteorShower />);
    expect(container).toBeInTheDocument();
  });

  test("should have four shower elements", () => {
    const { container } = render(<MeteorShower />);
    const showers = container.querySelectorAll(".shower");
    expect(showers.length).toBe(4);
  });

  test("should create a meteor after interval", async () => {
    const { container } = render(<MeteorShower />);

    expect(container.querySelectorAll(".meteor").length).toBe(0);

    clock.tick(1500);
    const meteorsAfterFirstInterval = container.querySelectorAll(".meteor");
    expect(meteorsAfterFirstInterval.length).toBe(1);

    clock.tick(1500);

    const meteorsAfterSecondInterval = container.querySelectorAll(".meteor");
    expect(meteorsAfterSecondInterval.length).toBe(2);
  });
});
