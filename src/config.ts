import type { SocialObjects } from "@/lib/types";

export const SITE = {
  website: "https://farmtechdocs.vercel.app/", // replace this with your deployed domain
  author: "FarmTech",
  desc: "Documentación de FarmTech",
  title: "FarmTech Docs",
  ogImage: "og-image.jpg",
  repo: "https://github.com/stevenalp207/FarmTechDocs",
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const menu_items: { title: string; href: string }[] = [
  // {
  //   title: "Home",
  //   href: "/",
  // },
];

// Just works with top-level folders and files. For files, don't add extension as it looks for the slug, and not the file name.
export const side_nav_menu_order: string[] = [
  "resumen",
  "desarollo-tecnico",
  "desarollo-tecnico/arquitectura",
  "desarollo-tecnico/modulos-adquisicion",
  "desarollo-tecnico/ia",
  "desarollo-tecnico/energia-comunicacion",
  "desarollo-tecnico/logs",
  "diagramas-tecnicos",
  "diagramas-tecnicos/diagramas-flujo-electrico",
  "diagramas-tecnicos/plano-estructural",
  "resultados",
  "resultados/resultados-mediciones",    
  "resultados/resultados-ia",
  "uso-usuario",

];

// Don't delete anything. You can use 'true' or 'false'.
// These are global settings
export const docconfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: false,
  hide_side_navigations: false,
  hide_datetime: false,
  hide_time: false,
  hide_search: false,
  hide_repo_button: true,
  hide_author: false,
};

// Set your social. It will appear in footer. Don't change the `name` value.
export const Socials: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/HYP3R00T/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:rajesh@hyperoot.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.gg/tWZRBhaPhd",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@hyp3r00t",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
