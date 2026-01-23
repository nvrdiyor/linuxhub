// Site configuration
export const siteConfig = {
  name: "LinuxHub",
  description: "Linux distributivlari uchun O'zbek tilidagi qo'llanma",
  url: "https://linuxhub.uz",
  author: "LinuxHub Team",
  links: {
    github: "https://github.com/linuxhub-uz",
    telegram: "https://t.me/linuxhub_uz",
  },
  keywords: [
    "Linux",
    "NixOS",
    "Kali Linux", 
    "Parrot OS",
    "Manjaro",
    "O'zbek",
    "Uzbek",
    "Qo'llanma",
    "Documentation",
    "Tutorial",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
