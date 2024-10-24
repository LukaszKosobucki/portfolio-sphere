import { useGlobalContext } from "@/app/context/global-context";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterAll, beforeEach, describe, expect, jest, mock, test } from "bun:test";
import Hamburger from "./hamburger";

mock.module("@/app/context/global-context", () => ({
  useGlobalContext: jest.fn(),
}));

mock.module("../theme-switcher/theme-switcher", () => () => <div data-testid="theme-switcher" />);

describe("Hamburger Component", () => {
  const mockSetIsDrawerOpen = jest.fn();

  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      isDrawerOpen: false,
      setIsDrawerOpen: mockSetIsDrawerOpen,
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should render ThemeSwitcher component", () => {
    render(<Hamburger />);

    expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
  });

  test("should render the menu icon when drawer is closed (isDrawerOpen is false)", () => {
    render(<Hamburger />);

    const menuIcon = screen.getByLabelText("Open drawer with menu").querySelector("svg#menu");
    expect(menuIcon).toBeInTheDocument();
  });

  test("should render the close icon when drawer is open (isDrawerOpen is true)", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      isDrawerOpen: true,
      setIsDrawerOpen: mockSetIsDrawerOpen,
    });

    render(<Hamburger />);

    const closeIcon = screen.getByLabelText("Open drawer with menu").querySelector("svg#x");
    expect(closeIcon).toBeInTheDocument();
  });

  test("should toggle isDrawerOpen when button is clicked", () => {
    render(<Hamburger />);
    const button = screen.getByLabelText("Open drawer with menu");
    fireEvent.click(button);

    expect(mockSetIsDrawerOpen).toHaveBeenCalledWith(true);
  });

  test("should close the drawer when button is clicked again", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      isDrawerOpen: true,
      setIsDrawerOpen: mockSetIsDrawerOpen,
    });

    render(<Hamburger />);
    const button = screen.getByLabelText("Open drawer with menu");
    fireEvent.click(button);

    expect(mockSetIsDrawerOpen).toHaveBeenCalledWith(false);
  });
});
