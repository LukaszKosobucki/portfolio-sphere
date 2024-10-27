import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockAuthor, mockIntroduction } from "@/app/utils/tests/mocks/hero.mock";
import { render } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import Hero from "./hero";

describe("Hero Component", () => {
  test("Should match snapshot", () => {
    const { asFragment } = render(<Hero author={mockAuthor} introduction={mockIntroduction} />);

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });
});
