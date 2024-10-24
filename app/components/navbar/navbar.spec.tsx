import Navbar from "@/app/components/navbar/navbar";
import { useGlobalContext } from "@/app/context/global-context";
import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockSocials } from "@/app/utils/tests/mocks/socials.mock";
import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, jest, mock, test } from "bun:test";
import { useTheme } from "next-themes";

const mockAuthor = "Author Name";
const mockTitle = "Test Navbar";

mock.module("@/app/context/global-context", () => ({
  useGlobalContext: jest.fn(),
}));

mock.module("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("Navbar component", () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({ isDrawerOpen: false });
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "light",
      setTheme: mockSetTheme,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should match snapshot", () => {
    const { asFragment } = render(
      <Navbar socials={mockSocials} author={mockAuthor} title={mockTitle} />,
    );

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });

  test("should render the author name", () => {
    render(<Navbar socials={mockSocials} author={mockAuthor} title={mockTitle} />);
    const authorName = screen.getByText(mockAuthor);
    expect(authorName).toBeInTheDocument();
  });

  test("should render the social links", () => {
    render(<Navbar socials={mockSocials} author={mockAuthor} title={mockTitle} />);

    // Check that both social icons are rendered
    const githubLink = screen.getByTestId("Github");
    const linkedinLink = screen.getByTestId("LinkedIn");
    const emailLink = screen.getByTestId("Email");

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute("href", "https://github.com/LukaszKosobucki");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/lukasz-kosobucki/");
    expect(emailLink).toHaveAttribute("href", "mailto:business@lukaszkosobucki.pl");
  });

  test("should not have 'scrolled' class when the page is not scrolled", async () => {
    Object.defineProperty(global.window, "scrollY", { value: 0 });

    render(<Navbar socials={mockSocials} author={mockAuthor} title={mockTitle} />);

    const header = screen.getByTestId("header");
    expect(header).not.toHaveClass("scrolled");
  });
  test("should apply the 'scrolled' class when the page is scrolled", async () => {
    Object.defineProperty(global.window, "scrollY", { value: 550 });

    render(<Navbar socials={mockSocials} author={mockAuthor} title={mockTitle} />);

    const header = screen.getByTestId("header");
    expect(header).toHaveClass("scrolled");
  });

  test("should render the hamburger menu", () => {
    render(<Navbar socials={mockSocials} author={mockAuthor} title={mockTitle} />);

    const hamburger = screen.getByTestId("hamburger");
    expect(hamburger).toBeInTheDocument();
  });
});
