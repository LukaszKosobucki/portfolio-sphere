export type Socials = {
  NAME: string;
  ICON: string;
  TEXT: string;
  HREF: string;
}[];

export interface Site {
  TITLE: string;
  DESCRIPTION: string;
  AUTHOR: string;
}

// Global
export const SITE: Site = {
  TITLE: "Portfolio",
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
