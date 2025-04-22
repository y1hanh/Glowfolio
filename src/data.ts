import { Experience } from "./pages/ExperiencePage";
import { Profile } from "./pages/ProfilePage";
import { Project } from "./pages/ProjectPage";
import { MenuItem, ExperienceData, ProjectData, ProfileData } from "./dataType";

// Update your "Profile" page data here
export const profile: ProfileData = {
  name: "Your name",
  alias: "Your alias",
  welcomeMessage: 'console.log("👋 Welcome to Yihan\'s Dev Space");',
  picture: "assets/XXX.jpeg",
  role: "Full Stack Developer",
  location: "Melbourne, Australia",
  introduction: "Hi I am XX.",
  github: "https://github.com/xxxx",
  linkedin: "www.linkedin.com/in/xxxx",
  email: "xxx@gmail.com",
};

// Update your menu items here
export const menu: MenuItem[] = [
  {
    name: "Profile",
    path: "profile",
    content: Profile,
  },
  {
    name: "Experience",
    path: "experience",
    content: Experience,
  },
  { name: "Project", path: "project", content: Project },
];

// Update your 'welcome message' code here
export const code = `
const ${profile.alias} = {
  name: "${profile.name}",
  role: ["Creative Technologist", "Software Engineer", "Cat Lover"],
  stack: ["React", "TypeScript", "NodeJS", "NestJS", "Python", "FastAPI", "Kubernetes", "AWS", "RDS", "JAVA", "Spring"],
  vibe: "Calm but curious 🌱, fullstack + UX lover 💻",
};

${profile.alias}.projects.forEach(p => p.showcase());
${profile.alias}.sayHi();
// → "Let's build meaningful things together."

// → Click to view resume 
`;

// Update your 'experience' page head line here
export const experiencePageHeadline = {
  title: "Tracing my path in tech",
  subtitle:
    "Each step here tells a part of my story—growing, building, and finding my place in tech.",
};

// Update your 'experience' page data here
export const experiences: ExperienceData[] = [
  {
    year: "2022",
    title: "Frontend Developer Intern",
    company: "XXX",
    content: [
      {
        website: "https://www.bilibili.com/",
        description: [
          "XXX ",
          { text: "JavaScript, TypeScript, Webpack, and Vue3", bold: true },
          "XXX",
        ],
      },
      {
        description: [
          "XXX ",
          { text: "robust and reliable platform performance", bold: true },
          ".",
        ],
      },
    ],
    position: "right",
  },
  {
    year: "2023",
    title: "Bachelor of Computer Science",
    company: "XXX University",
    content: [
      {
        description: [{ text: "GPA: XXX, WAM: XX", bold: true }],
      },
    ],
    position: "left",
  },
  {
    year: "2024",
    title: "Software Engineer",
    company: "XXXX",
    content: [
      {
        description: [
          "XX",
          { text: " algorithms  ", bold: true },
          "using",
          { text: " TypeScript, React and Bun", bold: true },
          ", XXX",
        ],
      },
      {
        project: "https://example.mp4",
        description: ["some  ", { text: "demo videos", bold: true }, ""],
      },
    ],
    position: "right",
  },
  {
    year: "2025",
    title: "Full Stack Developer",
    company: "Industry Experience Project",
    content: [
      {
        website: "https://example.com/",
        description: ["XXX ", { text: " XXX", bold: true }],
      },
    ],
    position: "left",
  },
];

// Update your 'project' page data here
export const projects: ProjectData[] = [
  {
    name: "XXX - XXX",
    description: [
      [
        {
          text: "XXX",
          bold: false,
        },
      ],
      [
        {
          text: " XXX",
          bold: true,
        },
      ],
    ],
    thumbnail: "assets/example.png",
    technologies: ["XXX", "XX", "XXX", "XXX"],
    demoUrl: "https://example.com",
  },
  {
    name: "XXXX",
    description: [
      [
        {
          text: "xxxx.",
          bold: false,
        },
      ],
      [
        {
          text: "XXX",
          bold: true,
        },
      ],
    ],
    thumbnail: "assets/xxx.gif",
    technologies: ["XXX", "XX", "XX", "XX"],
    demoUrl: "https://example.com/",
  },
  {
    name: "XXXX",
    description: [
      [
        {
          text: "XXX",
          bold: false,
        },
        {
          text: "XXX",
          bold: true,
        },
        {
          text: "xxxx",
          bold: false,
        },
      ],
      [
        {
          text: "xxxxx",
          bold: false,
        },
      ],
    ],
    thumbnail: "assets/example.gif",
    technologies: ["XX", "XXXXXX", "XXX"],
    demoUrl: "https://example.com/",
  },
];
