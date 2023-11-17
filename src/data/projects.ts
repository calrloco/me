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
    techs: ["Laravel, React, TailwindCSS, FilamentPHP"],
    link: "https://letiziatriches.com",
  },
  {
    title: "Novachem.ch",
    techs: ["Laravel", "FilamentPHP, AlpineJs, LW, TailwindCSS"],
    link: "https://novachem.ch",
  },
];

export default projects;
