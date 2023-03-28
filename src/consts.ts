export const USER = {
   name: "Jeferson Barrero",
   cargo: "Software Engineer",
   desc: "I am a full stack developer with 5+ years of experience in web development. I have worked on many projects and have a good understanding of the latest technologies.",
   github: "https://github.com/jeffercbs",
};

export const LINKS = [
   { name: "Home", path: "/" },
   { name: "About", path: "/about" },
   { name: "Contact", path: "/contact" },
];

export const GRIDSKILLS = {
   langs: [
      { name: "JavaScript", img: "/js.svg" },
      { name: "TypeScript", img: "/ts.svg" },
      { name: "CSS", img: "/css.svg" },
      { name: "HTML", img: "/html.svg" },
      { name: "Python", img: "/py.svg" },
   ],
   frameworks: [
      { name: "React", img: "/react.svg" },
      { name: "Node", img: "/node.svg" },
      { name: "Express", img: "/express.svg" },
      { name: "svelte", img: "/svelte.svg" },
   ],
   tools: [
      { name: "Git", img: "/git.png" },
      { name: "Figma", img: "/figma.svg" },
      { name: "VS Code", img: "/vscode.svg" },
      { name: "Linux", img: "/linux.svg" },
      { name: "Terminal", img: "/terminal.svg" },
   ],
   databases: [
      { name: "MongoDB", img: "/mongodb.svg" },
      { name: "MySQL", img: "/mysql.svg" },
      { name: "PostgreSQL", img: "/postgresql.svg" },
      { name: "Prisma", img: "/prisma.svg" },
   ],
};

export const PROJECTS = [
   {
      name: "clico",
      desc: "command line utility to make better git commits in your project",
      img: "grd.jfif",
      link: "https://github.com/jeffercbs/clico",
      home: true,
   },
   {
      name: "linktree",
      desc: "A totally free and customizable alternative linktree",
      img: "https://github.com/jeffercbs/linktree/raw/main/.github/ui.jpeg",
      link: "https://github.com/jeffercbs/linktree",
      home: true,
   },
   {
      name: "Project 3",
      desc: "Project 3 description",
      img: "https://i.pinimg.com/564x/c4/e7/ef/c4e7ef5f1a8eb7e3acaa2390e580bd0e.jpg",
      link: "https://github.com",
      home: true,
   },
   {
      name: "Project 1",
      desc: "Project 1 description",
      img: "/ui.png",
      link: "https://github.com",
      home: false,
   },
];
