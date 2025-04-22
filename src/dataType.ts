export type ExperienceData = {
  year: string;
  title: string;
  company: string;
  content: {
    website?: string;
    description: (string | { text: string; bold: boolean })[];
    project?: string;
  }[];
  position: "left" | "right";
};

export type ProfileData = {
  name: string;
  alias: string;
  picture: string;
  role: string;
  location: string;
  introduction: string;
  github: string;
  linkedin: string;
  email: string;
  extracurricular?: string;
  extracurricularImage?: string;
  pet?: string;
  petDescription?: string;
  petImage?: string[];
  extracurricularDescription?: string;
};
export type MenuItem = {
  name: string;
  path: string;
  icon?: String;
  content: React.FC;
  backgroudColor?: string;
};

export type ProjectData = {
  name: string;
  description: { text: string; bold: boolean; hyperlink?: string }[][];
  thumbnail: string;
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
};
