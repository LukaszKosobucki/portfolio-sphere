import { fetchSpecificEntries } from "@/app/services/contentful";
import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockProjectItem } from "@/app/utils/tests/mocks/project-item.mock";
import { render, screen, waitFor } from "@testing-library/react";
import { afterAll, describe, expect, jest, mock, test } from "bun:test";
import ProjectList from "./project-list";

mock.module("@/app/services/contentful", () => ({
  fetchSpecificEntries: jest.fn(),
}));

const mockProjects = [mockProjectItem];
describe("ProjectList Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should match the snapshot", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue(mockProjects);

    const { asFragment, getByText } = render(await ProjectList());

    await waitFor(() => {
      expect(getByText("Memory Game")).toBeInTheDocument();
    });

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });

  test("should render a list of projects when data is fetched successfully", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue(mockProjects);

    const { getByText } = render(await ProjectList());

    await waitFor(() => {
      expect(getByText("Memory Game")).toBeInTheDocument();
      expect(
        getByText(
          "Key challenge was mobile optimization. Used tools like Figma, SonarCloud, and Firestore for design, scanning, and leaderboard features.",
        ),
      ).toBeInTheDocument();
    });
    expect(fetchSpecificEntries).toHaveBeenCalledWith({
      content_type: "project",
      multiple: true,
    });
  });

  test("should render correctly when no projects are returned", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue([]);

    const { getByText } = render(await ProjectList());

    await waitFor(() => {
      const projectItems = screen.queryAllByTestId("projectItem");
      expect(projectItems).toHaveLength(0);

      expect(getByText("Projects")).toBeInTheDocument();
    });
    expect(fetchSpecificEntries).toHaveBeenCalledWith({
      content_type: "project",
      multiple: true,
    });
  });
});
