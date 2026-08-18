export const site = {
  name: "Stéphane Kamdem",
  shortName: "SK",
  role: "Développeur Full Stack",
  school: "ECE — École d’ingénieurs",
  program: "Développement web et intelligence artificielle",
  location: "Paris, France",
  email: "kamdemalec61@gmail.com",
  phone: "+33 6 35 09 98 87",
  phoneRaw: "+33635099887",
  whatsapp: "https://wa.me/33635099887",
  availability: "Recherche d’alternance · Full Stack",
  tagline:
    "Étudiant ingénieur à l’ECE, je construis des applications web modernes — et je me forme à l’IA.",
  description:
    "Portfolio de Stéphane Kamdem, développeur full stack à Paris, étudiant à l’ECE en développement web et intelligence artificielle.",
};

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/apropos", label: "À propos" },
  { href: "/competences", label: "Compétences" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    index: "01",
    title: "Développement web",
    text: "Sites et applications full stack, du front jusqu’au déploiement.",
  },
  {
    index: "02",
    title: "Applications",
    text: "Interfaces web et mobiles, pensées pour un usage réel.",
  },
  {
    index: "03",
    title: "Web & IA",
    text: "Formation ingénieur à l’ECE, orientée développement web et intelligence artificielle.",
  },
];

export const about = {
  intro:
    "Passionné et déterminé, je suis étudiant ingénieur à l’ECE à Paris, en développement web et intelligence artificielle. Je recherche une alternance en développement full stack pour mettre en pratique mes connaissances, découvrir de nouvelles technologies et contribuer à des projets ambitieux.",
  body: "Mon parcours m’a mené du Cameroun à Toulouse, puis à Paris. J’ai travaillé sur des projets web sécurisés, du e-commerce et des applications de gestion — en équipe, avec Git, Docker et un vrai souci du produit.",
};

export const experiences = [
  {
    year: "Avr. – juin 2026",
    title: "Développeur web — site e-commerce",
    place: "WO-SYSTEME, Toulouse",
    points: [
      "Conception et développement du site e-commerce",
      "Mise en place des fonctionnalités métier et de l’interface",
    ],
  },
  {
    year: "2023",
    title: "Stage en robotique",
    place: "Orange Digital Center Cameroon",
    points: [
      "Conception d’algorithmes pour un robot",
      "Ateliers de programmation et travail en équipe",
    ],
  },
];

export const education = [
  {
    year: "2026 – en cours",
    title: "Cycle ingénieur — Web & IA",
    place: "ECE, Paris",
    text: "École d’ingénieurs, spécialité développement web et intelligence artificielle.",
  },
  {
    year: "2025 – 2026",
    title: "Bachelor 2 en Informatique",
    place: "Keyce Informatique, Toulouse",
    text: "Option Développeur Web — technologies web modernes et bonnes pratiques.",
  },
  {
    year: "2024 – 2025",
    title: "Bachelor 1 en Informatique",
    place: "Keyce Informatique, Cameroun",
    text: "Tronc commun — bases de la programmation et des systèmes d’information.",
  },
  {
    year: "2020 – 2021",
    title: "Baccalauréat Scientifique",
    place: "Collège La Perfection, Cameroun",
    text: "Série C.",
  },
];

export const certifications = [
  {
    year: "Oct. 2025",
    title: "Intelligence artificielle",
    place: "OpenClassrooms",
  },
  {
    year: "Oct. 2024",
    title: "Python",
    place: "OpenClassrooms",
  },
  {
    year: "2025",
    title: "Certification développeur",
    place: "CodinGame",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Angular", level: 70 },
      { name: "Flutter", level: 70 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Python & Django", level: 75 },
      { name: "C / C++", level: 70 },
    ],
  },
  {
    title: "Données & outils",
    items: [
      { name: "MySQL", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Visual Basic", level: 70 },
    ],
  },
];

export const softSkills = [
  {
    title: "Travail d’équipe",
    text: "Collaboration efficace, notamment via Git et GitHub.",
  },
  {
    title: "Déploiement",
    text: "Conteneurisation Docker et mise en production d’applications.",
  },
  {
    title: "Langues",
    text: "Français et anglais.",
  },
  {
    title: "Curiosité",
    text: "Lecture, basketball, et beaucoup de code.",
  },
];

export const techMarquee = [
  "Next.js",
  "React",
  "Angular",
  "Node.js",
  "JavaScript",
  "Python",
  "Django",
  "PHP",
  "Flutter",
  "MySQL",
  "Docker",
  "Git",
  "C++",
];

export type ProjectCategory = "web" | "mobile" | "design";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  status: string;
  description: string;
  tech: string[];
  featured: boolean;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "todolistpro",
    title: "TodoListPro",
    category: "mobile" as ProjectCategory,
    year: "2025",
    status: "En ligne",
    description:
      "Application mobile de gestion de tâches : création, organisation et suivi des to-do lists. Disponible en téléchargement APK.",
    tech: ["Mobile", "Application"],
    featured: true,
    github: "https://github.com/AlecSteph/TodoListPro",
    demo: "https://lnkd.in/dwgsksSS",
  },
  {
    slug: "gestion-taches-entreprise",
    title: "Application Gestion Tâches Entreprise",
    category: "web" as ProjectCategory,
    year: "2025",
    status: "Terminé",
    description:
      "Application pour planifier, suivre et organiser les tâches d’équipe de manière collaborative et centralisée.",
    tech: ["Gestion", "Collaboratif"],
    featured: false,
    github: "https://github.com/AlecSteph/ApplicationGestionTacheEntreprise",
  },
  {
    slug: "wo-systeme",
    title: "Site e-commerce WO-SYSTEME",
    category: "web" as ProjectCategory,
    year: "2026",
    status: "Terminé",
    description:
      "Conception et développement d’un site e-commerce pour WO-SYSTEME, de l’interface jusqu’aux fonctionnalités métier.",
    tech: ["Développement web", "E-commerce"],
    featured: false,
  },
  {
    slug: "heligxiam-marketplace",
    title: "Heligxiam Marketplace",
    category: "web" as ProjectCategory,
    year: "2025 – 2026",
    status: "Terminé",
    description:
      "Plateforme e-commerce : modélisation MCD/MLD, base SQL, et application Angular (utilisateurs, produits, commandes, paiement, livraison).",
    tech: ["Angular", "SQL", "Merise"],
    featured: false,
    github: "https://github.com/AlecSteph/Heligxiam_Makertplace",
  },
  {
    slug: "gestion-articles",
    title: "Gestion des articles",
    category: "web" as ProjectCategory,
    year: "2024 – 2025",
    status: "Terminé",
    description:
      "Application pour créer, modifier, supprimer et organiser des articles (titre, contenu, catégorie, date) dans un environnement professionnel ou éducatif.",
    tech: ["Python", "SQLite"],
    featured: false,
    github: "https://github.com/AlecSteph/Gestion-des-articles",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/AlecSteph" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/st%C3%A9phane-kamdem-8631343a7/",
  },
];
