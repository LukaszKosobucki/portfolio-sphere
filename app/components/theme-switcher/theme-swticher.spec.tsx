import { fireEvent, render, screen } from "@testing-library/react";
import { afterAll, beforeEach, describe, expect, jest, mock, test } from "bun:test";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./theme-switcher";

mock.module("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeSwitcher Component", () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "light",
      setTheme: mockSetTheme,
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should render the ThemeSwitcher button (desktop only by default)", () => {
    render(<ThemeSwitcher allowMobile={false} />);

    const themeSwitcher = screen.getByTestId("theme-switcher");

    expect(themeSwitcher).toBeInTheDocument();
    expect(themeSwitcher).toHaveClass("hidden md:flex");
  });

  test("should render the ThemeSwitcher button for mobile when allowMobile is true", () => {
    render(<ThemeSwitcher allowMobile={true} />);

    const themeSwitcher = screen.getByTestId("theme-switcher");

    expect(themeSwitcher).toBeInTheDocument();
    expect(themeSwitcher).toHaveClass("flex");
  });

  test("should render the sun icon when the theme is light", () => {
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "light",
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitcher allowMobile={true} />);

    const sunIcon = screen.getByTestId("theme-switcher").querySelector("svg#sun");
    expect(sunIcon).toBeInTheDocument();
  });

  test("should render the moon icon when the theme is dark", () => {
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitcher allowMobile={true} />);

    const moonIcon = screen.getByTestId("theme-switcher").querySelector("svg#moon");
    expect(moonIcon).toBeInTheDocument();
  });

  test("should toggle the theme from light to dark when clicked", () => {
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "light",
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitcher allowMobile={true} />);

    const button = screen.getByTestId("theme-switcher");

    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  test("should toggle the theme from dark to light when clicked", () => {
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitcher allowMobile={true} />);

    const button = screen.getByTestId("theme-switcher");
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  test("should have correct aria-label for toggling the theme", () => {
    render(<ThemeSwitcher allowMobile={true} />);

    const button = screen.getByTestId("theme-switcher");
    expect(button).toHaveAttribute("aria-label", "Toggle light and dark theme");
  });
});
