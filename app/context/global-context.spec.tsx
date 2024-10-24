import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { fakeTimers } from "../utils/tests/fake-timers";
import { GlobalProvider, useGlobalContext } from "./global-context";

const TestComponent = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalContext();

  return (
    <div>
      <p data-testid="drawer-status">{isDrawerOpen ? "Drawer is open" : "Drawer is closed"}</p>
      <button data-testid="toggle-drawer" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        Toggle Drawer
      </button>
    </div>
  );
};
const clock = fakeTimers();
describe("GlobalProvider", () => {
  test("should provide default context values", () => {
    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>,
    );

    const drawerStatus = screen.getByTestId("drawer-status");
    expect(drawerStatus).toHaveTextContent("Drawer is closed");
  });

  test("should toggle 'isDrawerOpen' when calling 'setIsDrawerOpen'", () => {
    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>,
    );

    const drawerStatus = screen.getByTestId("drawer-status");
    const toggleButton = screen.getByTestId("toggle-drawer");

    expect(drawerStatus).toHaveTextContent("Drawer is closed");

    fireEvent.click(toggleButton);
    expect(drawerStatus).toHaveTextContent("Drawer is open");

    fireEvent.click(toggleButton);
    expect(drawerStatus).toHaveTextContent("Drawer is closed");
  });

  test("should add 'show' class to elements with class 'animate' after render", async () => {
    render(
      <GlobalProvider>
        <div className="animate" data-testid="animated-element-1"></div>
        <div className="animate" data-testid="animated-element-2"></div>
      </GlobalProvider>,
    );

    const animatedElement1 = screen.getByTestId("animated-element-1");
    const animatedElement2 = screen.getByTestId("animated-element-2");

    expect(animatedElement1).not.toHaveClass("show");
    expect(animatedElement2).not.toHaveClass("show");

    clock.tick(300);

    expect(animatedElement1).toHaveClass("show");
    expect(animatedElement2).toHaveClass("show");
  });
});
