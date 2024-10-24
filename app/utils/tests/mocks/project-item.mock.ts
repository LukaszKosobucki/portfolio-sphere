import { Entry, EntrySkeletonType } from "contentful";

export const mockProjectItem: Entry<EntrySkeletonType, undefined, string> = {
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
    id: "1mTTMHKQ4ixtMYGtTE6elp",
    type: "Entry",
    createdAt: "2024-10-16T14:11:31.952Z",
    updatedAt: "2024-10-16T14:32:14.844Z",
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
        id: "project",
      },
    },
    locale: "en-US",
  },
  fields: {
    name: "Memory Game",
    url: "https://www.memory-game.lukaszkosobucki.pl/",
    description:
      "Key challenge was mobile optimization. Used tools like Figma, SonarCloud, and Firestore for design, scanning, and leaderboard features.",
    tags: ["Typescript", "React", "xState", "Jest"],
    date: "2023-01-25",
  },
};
