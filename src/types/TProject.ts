export type TProject = {
  name: string;
  description: string;
  technologies: string[];
  links: {
    category: string;
    url: string;
    caption: string;
  }[];
  mainImage: string;
  otherImages: {
    src: string;
    title: string;
  }[];
};
