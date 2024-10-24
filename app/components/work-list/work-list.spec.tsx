import { fetchSpecificEntries } from "@/app/services/contentful";
import { WORK } from "@/app/utils/consts";
import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockWorkList } from "@/app/utils/tests/mocks/work-list.mock";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { render, waitFor } from "@testing-library/react";
import { afterAll, describe, expect, jest, mock, test } from "bun:test";
import WorkList from "./work-list";

mock.module("@/app/services/contentful", () => ({
  fetchSpecificEntries: jest.fn(),
}));

mock.module("@contentful/rich-text-react-renderer", () => ({
  documentToReactComponents: jest.fn(),
}));

describe("WorkList Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should match snapshot", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue(mockWorkList);
    (documentToReactComponents as jest.Mock).mockReturnValue(<p>Mocked rich text content</p>);

    const { asFragment, getByText } = render(await WorkList());

    await waitFor(() => {
      expect(getByText("YouGov")).toBeInTheDocument();
    });

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });

  test("should render a list of work items", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue(mockWorkList);
    const { getByText } = render(await WorkList());

    expect(getByText(WORK.TITLE)).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText("YouGov")).toBeInTheDocument();
      expect(getByText("Capgemini")).toBeInTheDocument();
    });

    expect(fetchSpecificEntries).toHaveBeenCalledWith({
      content_type: "experience",
      multiple: true,
      order: "-fields.dateStart",
    });
  });

  test("should handle empty work list", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue([]);

    const { queryByText, getByText } = render(await WorkList());

    await waitFor(() => {
      expect(queryByText("YouGov")).not.toBeInTheDocument();
      expect(queryByText("Capgemini")).not.toBeInTheDocument();
    });

    expect(getByText(WORK.TITLE)).toBeInTheDocument();
  });
});
