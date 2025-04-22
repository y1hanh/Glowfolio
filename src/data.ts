import { Experience } from "./pages/experience";
import { Profile } from "./pages/profile";
import { Project } from "./pages/project";
import { MenuItem, ExperienceData, ProjectData, ProfileData } from "./dataType";

// Update your "Profile" page data here
export const profile: ProfileData = {
  name: "Yihan Huang (Evelyn)",
  alias: "Yihan",
  picture: "assets/yihan.jpeg",
  role: "Full Stack Developer",
  location: "Melbourne, Australia",
  introduction:
    "Hi, I'm Yihan — a full-stack developer who loves building things that are both powerful and user-friendly. Right now, I’m working on my final year project — a platform that helps detect toxic language on social media. I believe technology should be a force for safety, connection, and empowerment. I’m currently looking for a full-stack role where I can keep growing, build user-liked products, and make a positive impact through tech.",
  github: "https://github.com/y1hanh",
  linkedin: "www.linkedin.com/in/yihan-huang-10963a238",
  email: "huangehan@gmail.com",
  pet: "Stella",
  petDescription: "Meet Stella, 3 years old girl cat!",
  petImage: [
    "assets/stella.jpeg",
    "assets/stella2.jpeg",
    "assets/stella3.jpeg",
  ],
  extracurricular: "Ex-Communication Officer @ Monash Squash Club",
  extracurricularImage: "assets/squash_club.jpeg",
  extracurricularDescription:
    "I'm a casual squash player and I love to play it! I was also a communication officer for Monash Squash Club(2024-2025), making artfacts for the club!",
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

// Update your 'experience' page data here
export const experiences: ExperienceData[] = [
  {
    year: "2022",
    title: "Frontend Developer Intern",
    company: "Bilibili",
    content: [
      {
        website: "https://www.bilibili.com/",
        description: [
          "Crafted and customized user interface components using ",
          { text: "JavaScript, TypeScript, Webpack, and Vue3", bold: true },
          ", enhancing the platform's user experience.",
        ],
      },
      {
        description: [
          "Collaborated with cross-functional teams to diagnose and resolve complex issues, ensuring ",
          { text: "robust and reliable platform performance", bold: true },
          ".",
        ],
      },
    ],
    position: "right",
  },
  {
    year: "2023",
    title: "Master of Information Technology",
    company: "Monash University",
    content: [
      {
        description: [{ text: "GPA: 3.6/4.0, WAM: 80", bold: true }],
      },
    ],
    position: "left",
  },
  {
    year: "2024",
    title: "Summer Reseach Intern",
    company: "Shortest Path",
    content: [
      {
        description: [
          "Improved an open-source platform for",
          { text: " visualizing algorithms  ", bold: true },
          "using",
          { text: "TypeScript, React and Bun", bold: true },
          ", enhancing users' ability to debug and explore their algorithms.",
        ],
      },
      {
        project:
          "https://images-portfolio-web.s3.ap-southeast-2.amazonaws.com/highlighting_view.mp4",
        description: [
          "Designed new features for ",
          { text: "exploring search traces", bold: true },
          ", helping users understand specific sequences of decisions.",
        ],
      },
      {
        description: [
          "Implemented a new component for ",
          { text: "variable tracking", bold: true },
          " in the visualization, showing the distribution and changes of values over time.",
        ],
      },
      {
        project:
          "https://images-portfolio-web.s3.ap-southeast-2.amazonaws.com/debugging_short.mp4",
        description: [
          "Integrated ",
          { text: "invariant validation with breakpoints", bold: true },
          " to automatically catch bugs, effectively capturing complex issues that users want to monitor.",
        ],
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
        website: "https://shieldspace.games/",
        description: [
          "Designed and implemented the architecture for a full-stack web application using ",
          { text: "NLP models", bold: true },
          " to detect bullying and toxic language in user input. Used ",
          { text: "NestJS, AWS RDS, FastAPI, Python", bold: true },
          " for backend services and AI model layer. Deployed the system on ",
          { text: "DigitalOcean using PM2 and Nginx", bold: true },
          " for process management and routing.",
        ],
      },
      {
        description: [
          "Established clear communication logic between the backend application layer and the AI model layer, promoting ",
          { text: "loose coupling and modular design", bold: true },
          " to enhance scalability and maintainability. Followed ",
          { text: "Agile methodologies", bold: true },
          " throughout the product development process.",
        ],
      },
      {
        description: [
          "Established clear communication logic between the backend application layer and the AI model layer, promoting ",
          { text: "loose coupling and modular design", bold: true },
          " to enhance scalability and maintainability. Followed ",
          { text: "Agile methodologies", bold: true },
          " throughout the product development process.",
        ],
      },
    ],
    position: "left",
  },
];

// Update your 'project' page data here
export const projects: ProjectData[] = [
  {
    name: "Bilibili - A video streaming platform",
    description: [
      [
        {
          text: "Bilibili is a video streaming platform, and I worked there as a frontend developer for one year.",
          bold: false,
        },
      ],
      [
        {
          text: "I developed  ",
          bold: false,
        },
        {
          text: "internal UI library",
          bold: true,
        },
        {
          text: " and customized components for Bilibili's internal platform.",
          bold: false,
        },
      ],
    ],
    thumbnail: "assets/bilibili.png",
    technologies: ["Vue3", "JavaScript", "WebPack", "Kanban"],
    demoUrl: "https://bilibili.com",
  },
  {
    name: "Posthoc - A tool for algorithm visualization",
    description: [
      [
        {
          text: "Posthoc is an open-source platform for visualizing sequential decision-making algorithms, like MAPF, constraint problems, planning problems, etc.",
          bold: false,
        },
      ],
      [
        {
          text: "Designed new features for exploring",
          bold: false,
        },
        {
          text: " search traces",
          bold: true,
        },
        {
          text: ", and helping users understand specific sequences of decisions.",
          bold: false,
        },
      ],
      [
        {
          text: "Implemented variable tracking in the visualization, showing the distribution and changes of values over time.",
          bold: false,
        },
      ],
    ],
    thumbnail: "assets/axies.gif",
    technologies: ["React", "TypeScript", "Canvas", "Sigma"],
    demoUrl: "https://posthoc.pathfinding.ai/",
  },
  {
    name: "Shield Space - Emotional Assessment Tool for bullying detection",
    description: [
      [
        {
          text: "Shield Space is my final year project, a platform that helps detect toxic language on social media. ",
          bold: false,
        },
      ],
      [
        {
          text: "I designed ",
          bold: false,
        },
        {
          text: "system architecture ",
          bold: true,
        },
        {
          text: "for this project, and used NestJS, AWS RDS, FastAPI, Python for backend services and AI models layer. Frontend was built with React, TypeScript and MUI.",
          bold: false,
        },
      ],
      [
        {
          text: "Deployed the system on DigitalOcean using Docker and Nginx for process management and routing.",
          bold: false,
        },
      ],
    ],
    thumbnail: "assets/shieldspace.gif",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "NodeJS",
      "Agile",
      "FastAPI",
      "Python",
      "Docker",
      "AWS RDS",
    ],
    demoUrl: "https://shieldspace.games/",
  },
];
