import { useGlobalContext } from "@/app/context/global-context";
import { mockSocials } from "@/app/utils/tests/mocks/socials.mock";
import { mockTitle } from "@/app/utils/tests/mocks/title.mock";
import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, jest, mock, test } from "bun:test";
import Drawer from "./drawer";

mock.module("@/app/context/global-context", () => ({
  useGlobalContext: jest.fn(),
}));

mock.module("../theme-switcher/theme-switcher", () => () => <div data-testid="theme-switcher" />);

describe("Drawer Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should render with drawer hidden when isDrawerOpen is false", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({ isDrawerOpen: false });
    render(<Drawer socials={mockSocials} title={mockTitle} />);

    const drawer = screen.getByRole("navigation").parentElement;
    expect(drawer).not.toHaveClass("h-full");
  });

  test("should render with drawer visible when isDrawerOpen is true", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({ isDrawerOpen: true });
    render(<Drawer socials={mockSocials} title={mockTitle} />);

    const drawer = screen.getByRole("navigation").parentElement;
    expect(drawer).toHaveClass("h-full");
  });

  test("should render the correct number of social links", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({ isDrawerOpen: true });
    render(<Drawer socials={mockSocials} title={mockTitle} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  test("should render social links with correct href and aria-label", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({ isDrawerOpen: true });
    render(<Drawer socials={mockSocials} title={mockTitle} />);

    const linkedinLink = screen.getByTestId("LinkedIn");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/lukasz-kosobucki/");
    const emailLink = screen.getByTestId("Email");
    expect(emailLink).toHaveAttribute("href", "mailto:business@lukaszkosobucki.pl");

    const githubLink = screen.getByTestId("Github");
    expect(githubLink).toHaveAttribute("href", "https://github.com/LukaszKosobucki");
  });

  test("should render the correct SVG icons for social links", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({ isDrawerOpen: true });

    render(<Drawer socials={mockSocials} title={mockTitle} />);

    const linkedinIcon = screen.getByTestId("LinkedIn").querySelector("use");
    const emailIcon = screen.getByTestId("Email").querySelector("use");
    const githubIcon = screen.getByTestId("Github").querySelector("use");

    expect(linkedinIcon).toHaveAttribute("href", "/social.svg#linkedin");
    expect(emailIcon).toHaveAttribute("href", "/social.svg#email");
    expect(githubIcon).toHaveAttribute("href", "/social.svg#github");
  });

  test("should render the ThemeSwitcher component", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({ isDrawerOpen: true });
    render(<Drawer socials={mockSocials} title={mockTitle} />);

    expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
  });
});
