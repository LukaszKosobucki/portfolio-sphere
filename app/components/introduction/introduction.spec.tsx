import { fetchSpecificEntries } from "@/app/services/contentful";
import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { render } from "@testing-library/react";
import { afterAll, describe, expect, jest, mock, test } from "bun:test";
import Introduction from "./introduction";

mock.module("@/app/services/contentful", () => ({
  fetchSpecificEntries: jest.fn(),
}));

mock.module("@contentful/rich-text-react-renderer", () => ({
  documentToReactComponents: jest.fn(),
}));

describe("Introduction Component", () => {
  const mockResponse = [
    {
      fields: {
        description: { content: "Mock description content" },
      },
    },
  ];

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should match snapshot", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue(mockResponse);
    (documentToReactComponents as jest.Mock).mockReturnValue(<p>Mocked rich text content</p>);
    const { asFragment } = render(await Introduction());

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });

  test("fetchSpecificEntries is called with correct arguments", async () => {
    (fetchSpecificEntries as jest.Mock).mockResolvedValue(mockResponse);
    render(await Introduction());

    expect(fetchSpecificEntries).toHaveBeenCalledWith({
      content_type: "description",
      title: "About me",
    });
  });
});
