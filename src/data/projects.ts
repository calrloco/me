export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "pepedickbutt.vip",
    techs: ["Astro, TailwindCSS, Solidity"],
    link: "https://codenanshu.in/projects/ttf-apple-fonts/",
  },
  {
    title: "Letiziatriches.com",
    techs: ["Laravel, React, TS, TailwindCSS, FilamentPHP"],
    link: "https://letiziatriches.com",
  },
  {
    title: "Novachem.ch",
    techs: ["Larvael", "FilamentPHP, AlpineJs, TailwindCSS"],
    link: "https://codenanshu.in/projects/firstly/",
  },
];

export default projects;
