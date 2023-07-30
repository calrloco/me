type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "briganticarlo@outlook.it",
  title: "Hi, I’m Carlo Briganti 👋",
  description:
    "Im Fullstack Developer, committed to crafting exceptional digital experiences. I balance versatility and expertise to drive your visions to reality.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/carlo-briganti-ab220a187/?originalSubdomain=it",
    },
    {
      label: "Github",
      link: "https://github.com/calrloco",
    },
    {
      label: "Laracast",
      link: "https://laracasts.com/@JabatoForever",
    },
  ],
};

export default presentation;
