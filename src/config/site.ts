// Site configuration
export const siteConfig = {
  name: "LinuxHubuz",
  description: "O'zbekiston uchun eng yaxshi Linux qo'llanmalar platformasi. NixOS, Kali Linux, Parrot OS, Manjaro distributivlarini o'zbek tilida o'rganing. Bepul darsliklar, qadamba-qadam yo'riqnomalar va professional maslahatlar.",
  url: "https://linuxhub.uz",
  author: "LinuxHubuz Team",
  links: {
    github: "https://github.com/linuxhub-uz",
    telegram: "https://t.me/linuxhub_uz",
  },
  keywords: [
    // Primary keywords
    "Linux o'zbekcha",
    "Linux qo'llanma",
    "Linux darslik",
    "Linux o'rganish",
    // Distro specific
    "NixOS o'zbekcha",
    "NixOS qo'llanma",
    "Kali Linux o'zbekcha",
    "Kali Linux qo'llanma",
    "Parrot OS o'zbekcha",
    "Manjaro o'zbekcha",
    // General
    "Linux distributivlari",
    "Linux boshlang'ich",
    "Linux terminal",
    "Linux buyruqlar",
    "Open source",
    "Bepul operatsion tizim",
    // Location
    "O'zbekiston Linux",
    "Uzbek Linux",
    "LinuxHubuz",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
