import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "ADJOHOU Rupinie Elysée",
  title: "Hello world 👋, Je suis Rupini Elysée ADJOHOU",
  description:
    "Je suis un développeur web et mobile passionné qui s'efforce de devenir Full Stack, avec une forte motivation à apprendre et à m'améliorer constamment. J'explore de nouvelles technologies et cherche à les intégrer dans mes projets. Curieux et avide de connaissances, je m'essaie également à la cybersécurité et aux CTF pour diversifier mes compétences. Travailleur, autonome et toujours prêt à apprendre des autres, je vise à m'épanouir dans le développement et à repousser mes limites.",
  resumeLink: "https://drive.google.com/file/d/1Ol9RyDGRvcnSvqChKhiLvo-CVYPC-bXe/view?usp=sharing",
};

export const openSource = {
  githubUserName: "rup1n13",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:adjohourupinie@gmail.com",
  github: "https://github.com/rup1n13",
  instagram: "https://www.instagram.com/rup1n13",
 
};

export const skillsSection: SkillsSectionType = {
  title: "Ce que je fais",
  subTitle: "Développeur polyvalent, touche-à-tout et curieux, toujours prêt à explorer de nouveaux horizons",
  data: [
    {
      title: "Développement Web et Mobile, Cybersécurité (Bases)",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Création d'applications mobiles avec React Native et Flutter"),
        emoji("⚡ Développement backend avec Laravel et Prisma"),
        emoji("⚡ Gestion de bases de données avec MySQL et Firebase"),
        emoji("⚡ Premiers pas avec Nmap et les fondamentaux de Linux"),
        emoji("⚡ En route vers des challenges et CTF pour approfondir mes compétences"),
      ],
      softwareSkills: [
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "Laravel", iconifyTag: "logos:laravel" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "React Native", iconifyTag: "logos:react" },
        { skillName: "VueJs", iconifyTag: "logos:vue" },
        { skillName: "Firebase", iconifyTag: "logos:firebase" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
        { skillName: "Nmap", iconifyTag: "guidance:iris-scan" },
        { skillName: "Linux", iconifyTag: "logos:linux-tux" },
      ],
    },
  ],
};


export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "60"
  },
  {
    Stack: "Backend",
    progressPercentage: "70"
  },

  {
    Stack: "Cybersécurité (Bases)",
    progressPercentage: "40"
  },
];


export const educationInfo: EducationType[] = [
  {
    schoolName: "ENEAM (Ecole Nationale d'Economie Appliquée et de Management)",
    subHeader: "Licence en Informatique de Gestion, option Analyse Informatique et Programmation",
    duration: "2021 - 2023",
    desc: "Formation axée sur le développement logiciel, la gestion de bases de données et l'analyse informatique.",
    grade: "Mention Bien",
    descBullets: [
      "Projet de fin d'études : Application de gestion de garanties de crédit pour une institution de microfinance.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Stagiaire Développeur Full Stack",
    company: "Godigital",
    companyLogo: "/img/icons/common/godigital.png", 
    date: "Juillet 2022 - Septembre 2022",
    desc: "Conception et développement d'une application de gestion de tâches en utilisant Laravel. Intégration de bases de données MySQL et déploiement sur un serveur Linux.",
  },
  {
    role: "Stagiaire Développeur",
    company: "FECECAM",
    companyLogo: "/img/icons/common/fececam.png", 
    date: "Mai 2023 - Août 2023",
    desc: "Développement d'une application de gestion de garanties de crédit avec Laravel et Vue.js. Gestion des données avec MySQL et déploiement sur un serveur local.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Gestion de Garanties de Crédit",
    desc: "Application web utilisant Next.js, Laravel, Inertia.js et Prisma pour gérer les garanties dans la microfinance.",
    github: "https://github.com/BakerVibes/guarantie-track",
  },
  {
    name: "Gestionnaire de Tâches Complète",
    desc: "Projet réalisé durant mon stage de 2ᵉ année, qui permet d'organiser et de suivre l'ensemble des tâches d'un utilisateur, illustrant mes compétences en conception et développement d'applications web.",
    github: "https://github.com/SenanTech/ManagerTask",
  },
  {
    name: "Assistant Personnel AI (En projet)",
    desc: "Projet en cours visant à créer un assistant personnel inspiré de Jarvis. Actuellement, je me concentre sur l'apprentissage de React Native à travers des applications tutorées (Pokedex, méditation) pour ensuite développer cette application.",
    github: "https://github.com/rup1n13/personal-assistant",
  },
];




// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "ADJOHOU Rupinie Elysée",
  description: greetings.description,
  author: "ADJOHOU Rupinie Elysée",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://67ae4962d0474f00083b7546--beautiful-kulfi-f10252.netlify.app/",
  keywords: ["Rupinie", "ADJOHOU Rupinie", "Développeur Full Stack", "rup1n13", "Portfolio"],
};
