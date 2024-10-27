import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockResume } from "@/app/utils/tests/mocks/resume.mock";
import { mockSocials } from "@/app/utils/tests/mocks/socials.mock";
import { mockTitle } from "@/app/utils/tests/mocks/title.mock";
import { fireEvent, render } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, jest, test } from "bun:test";
import Footer from "./footer";

describe("Footer Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "scrollTo", {
      value: jest.fn(),
      writable: true,
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should match snapshot", () => {
    const { asFragment } = render(
      <Footer socials={mockSocials} title={mockTitle} resume={mockResume} />,
    );

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });

  it("should prevent default and scroll to the top smoothly", () => {
    const { getByTestId } = render(
      <Footer socials={mockSocials} title={mockTitle} resume={mockResume} />,
    );

    const button = getByTestId("back-to-top-button");
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
