import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockProjectItem } from "@/app/utils/tests/mocks/project-item.mock";
import { render, screen } from "@testing-library/react";
import { describe, expect, jest, mock, test } from "bun:test";
import ProjectItem from "./project-item";

mock.module("@/app/utils/format-date", () => ({
  formatDate: jest.fn((date: string) => `Formatted ${date}`),
}));

describe("ProjectItem Component", () => {
  test("should render correctly with all fields", async () => {
    const { getByText, getByTestId } = render(await ProjectItem({ entry: mockProjectItem }));

    expect(getByText("Memory Game")).toBeInTheDocument();

    expect(
      getByText(
        "Key challenge was mobile optimization. Used tools like Figma, SonarCloud, and Firestore for design, scanning, and leaderboard features.",
      ),
    ).toBeInTheDocument();

    expect(getByText("Formatted 2023-01-25")).toBeInTheDocument();

    const linkElement = getByTestId("projectItem");
    expect(linkElement).toHaveAttribute("href", "https://www.memory-game.lukaszkosobucki.pl/");
    expect(linkElement).toHaveAttribute("target", "_blank");

    expect(screen.getByText("Typescript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  test("should match the snapshot", async () => {
    const { asFragment } = render(await ProjectItem({ entry: mockProjectItem }));

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });
});
