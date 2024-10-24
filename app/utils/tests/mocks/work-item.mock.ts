import { Entry, EntrySkeletonType } from "contentful";

export const mockWorkItem: Entry<EntrySkeletonType, undefined, string> = {
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
    id: "6tov7hmxqVfzFHgi0qLUdR",
    type: "Entry",
    createdAt: "2024-07-16T16:22:26.735Z",
    updatedAt: "2024-10-16T15:14:47.782Z",
    environment: {
      sys: {
        id: "master",
        type: "Link",
        linkType: "Environment",
      },
    },
    revision: 7,
    contentType: {
      sys: {
        type: "Link",
        linkType: "ContentType",
        id: "experience",
      },
    },
    locale: "en-US",
  },
  fields: {
    name: "YouGov",
    workTitle: "Junior Software Engineer",
    description: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Working in an international team, I collaborated on a high-traffic website for the 2024 UK general\nelections, developed secure admin tools, and created reusable, mobile-first components. I utilized\ntools like Grafana, ELK, and New Relic for monitoring, and Rancher for bug investigation and beta\ntesting. Additionally, I redesigned and launched new subpages for Germany, the UK, and the US, and\nupgraded search functionalities across multiple countries. I also led the migration of the project from\nAngular 14 to Angular 17, and transitioned the component structure from ngModule to Standalone.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
    dateStart: "2023-01-04",
    dateEnd: "2023-08-04",
  },
};
export const mockEntryWithoutEndDate: Entry<EntrySkeletonType, undefined, string> = {
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
    id: "6tov7hmxqVfzFHgi0qLUdR",
    type: "Entry",
    createdAt: "2024-07-16T16:22:26.735Z",
    updatedAt: "2024-10-16T15:14:47.782Z",
    environment: {
      sys: {
        id: "master",
        type: "Link",
        linkType: "Environment",
      },
    },
    revision: 7,
    contentType: {
      sys: {
        type: "Link",
        linkType: "ContentType",
        id: "experience",
      },
    },
    locale: "en-US",
  },
  fields: {
    name: "YouGov",
    workTitle: "Junior Software Engineer",
    description: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Working in an international team, I collaborated on a high-traffic website for the 2024 UK general\nelections, developed secure admin tools, and created reusable, mobile-first components. I utilized\ntools like Grafana, ELK, and New Relic for monitoring, and Rancher for bug investigation and beta\ntesting. Additionally, I redesigned and launched new subpages for Germany, the UK, and the US, and\nupgraded search functionalities across multiple countries. I also led the migration of the project from\nAngular 14 to Angular 17, and transitioned the component structure from ngModule to Standalone.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
    dateStart: "2023-09-04",
  },
};
