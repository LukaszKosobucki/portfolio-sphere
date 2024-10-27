import { formatDate } from "@/app/utils/format-date";
import { formatSnapshot } from "@/app/utils/tests/format-snapshot";
import { mockEntryWithoutEndDate, mockWorkItem } from "@/app/utils/tests/mocks/work-item.mock";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { render, screen } from "@testing-library/react";
import { afterAll, beforeEach, describe, expect, jest, mock, test } from "bun:test";
import WorkItem from "./work-item";

mock.module("@/app/utils/format-date", () => ({
  formatDate: jest.fn(),
}));

mock.module("@contentful/rich-text-react-renderer", () => ({
  documentToReactComponents: jest.fn(),
}));

describe("WorkItem Component", () => {
  beforeEach(() => {
    (formatDate as jest.Mock).mockImplementation((date: string) => date);
    (documentToReactComponents as jest.Mock).mockImplementation(() => <div>Mock Description</div>);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should match snapshot", async () => {
    const { asFragment } = render(await WorkItem({ entry: mockWorkItem }));

    expect(formatSnapshot(asFragment())).toMatchSnapshot();
  });

  test("should render formatted start and end dates", () => {
    render(<WorkItem entry={mockWorkItem} />);

    expect(formatDate).toHaveBeenCalledWith("2023-01-04");
    expect(formatDate).toHaveBeenCalledWith("2023-08-04");

    expect(screen.getByText("2023-01-04 - 2023-08-04")).toBeInTheDocument();
  });

  test('should render "continuing" if dateEnd is not provided', () => {
    render(<WorkItem entry={mockEntryWithoutEndDate} />);

    expect(formatDate).toHaveBeenCalledWith("2023-09-04");
    expect(screen.getByText("2023-09-04 - present")).toBeInTheDocument();
  });

  test("should render the name and workTitle", () => {
    render(<WorkItem entry={mockWorkItem} />);

    expect(screen.getByText("YouGov")).toBeInTheDocument();
    expect(screen.getByText("Junior Software Engineer")).toBeInTheDocument();
  });

  test("should render the description", () => {
    render(<WorkItem entry={mockWorkItem} />);

    expect(documentToReactComponents).toHaveBeenCalledWith(
      mockWorkItem.fields.description,
      expect.any(Object),
    );
    expect(screen.getByText("Mock Description")).toBeInTheDocument();
  });
});
