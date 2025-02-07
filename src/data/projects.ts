export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "exentiastays.com",
    techs: ["Laravel, InertiaJs, React"],
    link: "https://exentiastays.com",
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
  {
    title: "bengala - coin",
    techs: ["Astro, TailwindCSS, Contracts Wizard - Openzeppelin"],
    link: "https://bengalacoin.netlify.app",
  },
  {
    title: "pepedickbutt - coin",
    techs: ["Astro, TailwindCSS, Contracts Wizard - Openzeppelin"],
    link: "https://pepedb.netlify.app",
  },
];

export default projects;
