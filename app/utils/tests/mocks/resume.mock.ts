import { Entry, EntrySkeletonType } from "contentful";

export const mockResume: Entry<EntrySkeletonType, undefined, string>[] = [
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: "Link",
          linkType: "Space",
          id: "p44hxzq21dxq",
        },
      },
      id: "6vY7oWMb3T2JTOGYyguWc9",
      type: "Entry",
      createdAt: "2024-10-17T17:39:14.599Z",
      updatedAt: "2024-10-19T12:02:00.888Z",
      environment: {
        sys: {
          id: "master",
          type: "Link",
          linkType: "Environment",
        },
      },
      revision: 2,
      contentType: {
        sys: {
          type: "Link",
          linkType: "ContentType",
          id: "document",
        },
      },
      locale: "en-US",
    },
    fields: {
      title: "resume",
      text: "Download my resume",
      file: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "p44hxzq21dxq",
            },
          },
          id: "YTJPmJFknLpHW9LRZmp4X",
          type: "Asset",
          createdAt: "2024-10-17T17:34:03.319Z",
          updatedAt: "2024-10-19T11:59:27.225Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 2,
          locale: "en-US",
        },
        fields: {
          title: "resume",
          description: "resume oct 2024",
          file: {
            url: "//assets.ctfassets.net/p44hxzq21dxq/YTJPmJFknLpHW9LRZmp4X/8d03e0740fcd65ebf4a4fb56c72fc2d4/lukasz-kosobucki-resume.pdf",
            details: {
              size: 45856,
            },
            fileName: "lukasz-kosobucki-resume.pdf",
            contentType: "application/pdf",
          },
        },
      },
    },
  },
];
