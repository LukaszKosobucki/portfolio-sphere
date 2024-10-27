import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockSocials } from "@/app/utils/tests/mocks/socials.mock";
import { render } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import Contact from "./contact";

describe("Contact Component", () => {
  test("Should match snapshot", () => {
    const { asFragment } = render(<Contact socials={mockSocials} />);

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });
});
