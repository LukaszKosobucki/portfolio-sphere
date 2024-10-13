export type Socials = {
  NAME: string;
  ICON: string;
  TEXT: string;
  HREF: string;
}[];
export type Page = {
  TITLE: string;
  DESCRIPTION: string;
};

export interface Site extends Page {
  AUTHOR: string;
}

export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Global
export const SITE: Site = {
  TITLE: "Lukasz Kosobucki",
  DESCRIPTION:
    "Learn more about my projects and work experience as a Frontend Software Engineer",
  AUTHOR: "Lukasz Kosobucki",
};

export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "markhorn.dev@gmail.com",
    HREF: "mailto:markhorn.dev@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
];
