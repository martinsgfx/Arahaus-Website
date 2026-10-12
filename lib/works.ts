export type ProjectImages = {
  main: string;
  left: string;
  right: string;
};

export type Project = {
  slug: string;
  name: string;
  images: ProjectImages;
};

export const projects: Project[] = [
  {
    slug: "technest",
    name: "Technest",
    images: {
      main: "/works/technest-main.jpg",
      left: "/works/technest-left.jpg",
      right: "/works/technest-right.jpg",
    },
  },
  {
    slug: "z-fest",
    name: "Z Fest",
    images: {
      main: "/works/z-fest-main.jpg",
      left: "/works/z-fest-left.jpg",
      right: "/works/z-fest-right.jpg",
    },
  },
  {
    slug: "welcome-pack",
    name: "Welcome Pack",
    images: {
      main: "/works/welcome-pack-main.jpg",
      left: "/works/welcome-pack-left.jpg",
      right: "/works/welcome-pack-right.jpg",
    },
  },
  {
    slug: "zola",
    name: "Zola",
    images: {
      main: "/works/zola-main.jpg",
      left: "/works/zola-left.jpg",
      right: "/works/zola-right.jpg",
    },
  },
];