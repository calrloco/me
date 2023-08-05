export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "bengala - coin",
    techs: ["Astro, TailwindCSS, Contracts Wizard - Openzeppelin"],
    link: "https://bengala.vip",
  },
  {
    title: "pepedickbutt - coin",
    techs: ["Astro, TailwindCSS, Contracts Wizard - Openzeppelin"],
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
