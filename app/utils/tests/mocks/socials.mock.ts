import { Entry, EntrySkeletonType } from "contentful";

export const mockSocials: Entry<EntrySkeletonType, undefined, string>[] = [
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
      id: "3h1FH852ElwS6yUs4PmQyb",
      type: "Entry",
      createdAt: "2024-10-17T08:20:42.262Z",
      updatedAt: "2024-10-19T16:15:04.190Z",
      environment: {
        sys: {
          id: "master",
          type: "Link",
          linkType: "Environment",
        },
      },
      revision: 4,
      contentType: {
        sys: {
          type: "Link",
          linkType: "ContentType",
          id: "socialInfo",
        },
      },
      locale: "en-US",
    },
    fields: {
      name: "Email",
      icon: "email",
      text: "business@lukaszkosobucki.pl",
      href: "mailto:business@lukaszkosobucki.pl",
    },
  },
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
      id: "YJCKwW67z8kNkhCc2D7qT",
      type: "Entry",
      createdAt: "2024-10-17T08:21:29.314Z",
      updatedAt: "2024-10-17T08:21:29.314Z",
      environment: {
        sys: {
          id: "master",
          type: "Link",
          linkType: "Environment",
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: "Link",
          linkType: "ContentType",
          id: "socialInfo",
        },
      },
      locale: "en-US",
    },
    fields: {
      name: "Github",
      icon: "github",
      text: "LukaszKosobucki",
      href: "https://github.com/LukaszKosobucki",
    },
  },
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
      id: "6Z2Q5BlM0VK6AWM36pwaTm",
      type: "Entry",
      createdAt: "2024-10-17T08:22:20.693Z",
      updatedAt: "2024-10-17T08:22:20.693Z",
      environment: {
        sys: {
          id: "master",
          type: "Link",
          linkType: "Environment",
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: "Link",
          linkType: "ContentType",
          id: "socialInfo",
        },
      },
      locale: "en-US",
    },
    fields: {
      name: "LinkedIn",
      icon: "linkedin",
      text: "lukasz-kosobucki",
      href: "https://www.linkedin.com/in/lukasz-kosobucki/",
    },
  },
];
