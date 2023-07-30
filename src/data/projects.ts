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
    link: "https://pepedickbutt.vip",
  },
  {
    title: "Letiziatriches.com",
    techs: ["Laravel, React, TS, TailwindCSS, FilamentPHP"],
    link: "https://letiziatriches.com",
  },
  {
    title: "Novachem.ch",
    techs: ["Larvael", "FilamentPHP, AlpineJs, TailwindCSS"],
    link: "https://novachem.ch",
  },
];

export default projects;
