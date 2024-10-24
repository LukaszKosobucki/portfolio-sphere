import { beforeEach, describe, expect, jest, mock, test } from "bun:test";
import { Entry, EntrySkeletonType, createClient } from "contentful";
import { fetchSpecificEntries } from "./contentful";

mock.module("contentful", () => ({
  createClient: jest.fn(),
}));

describe("fetchSpecificEntries", () => {
  const mockGetEntries = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (createClient as jest.Mock).mockReturnValue({
      getEntries: mockGetEntries,
    });
  });

  test("should construct the correct query and fetch a single entry", async () => {
    mockGetEntries.mockResolvedValue({
      items: [{ fields: { title: "About Me", description: "Description content" } }],
    });

    const result = await fetchSpecificEntries({ content_type: "description", title: "About Me" });

    expect(createClient).toHaveBeenCalledWith({
      space: process.env.CONTENTFUL_SPACE_ID ?? "",
      environment: "master",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
    });

    expect(mockGetEntries).toHaveBeenCalledWith({
      content_type: "description",
      "fields.title": "About Me",
      limit: 1,
    });

    expect(result).toEqual([
      { fields: { title: "About Me", description: "Description content" } } as unknown as Entry<
        EntrySkeletonType,
        undefined,
        string
      >,
    ]);
  });

  test('should fetch multiple entries when "multiple" option is set', async () => {
    mockGetEntries.mockResolvedValue({
      items: [
        { fields: { title: "Entry 1", description: "Content 1" } },
        { fields: { title: "Entry 2", description: "Content 2" } },
      ],
    });

    const result = await fetchSpecificEntries({ content_type: "description", multiple: true });

    expect(mockGetEntries).toHaveBeenCalledWith({
      content_type: "description",
      limit: 100,
    });

    expect(result).toEqual([
      { fields: { title: "Entry 1", description: "Content 1" } } as unknown as Entry<
        EntrySkeletonType,
        undefined,
        string
      >,
      { fields: { title: "Entry 2", description: "Content 2" } } as unknown as Entry<
        EntrySkeletonType,
        undefined,
        string
      >,
    ]);
  });

  test("should fetch entries with ordering if provided", async () => {
    mockGetEntries.mockResolvedValue({
      items: [{ fields: { title: "Ordered Entry", description: "Ordered Content" } }],
    });

    const result = await fetchSpecificEntries({
      content_type: "description",
      order: "sys.createdAt",
    });

    expect(mockGetEntries).toHaveBeenCalledWith({
      content_type: "description",
      limit: 1,
      order: "sys.createdAt",
    });

    expect(result).toEqual([
      { fields: { title: "Ordered Entry", description: "Ordered Content" } } as unknown as Entry<
        EntrySkeletonType,
        undefined,
        string
      >,
    ]);
  });

  test("should handle errors from the API correctly", async () => {
    mockGetEntries.mockRejectedValue(new Error("Contentful API error"));

    await expect(fetchSpecificEntries({ content_type: "description" })).rejects.toThrow(
      "Contentful API error",
    );
  });
});
