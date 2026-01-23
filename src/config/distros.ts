// Icon names that can be serialized (no React component references)
export type IconName =
    | "book-open"
    | "download"
    | "settings"
    | "code"
    | "terminal"
    | "shield"
    | "layers"
    | "cpu";

export interface NavItem {
    title: string;
    slug: string;
}

export interface NavSection {
    title: string;
    id: string;
    iconName?: IconName;
    items: NavItem[];
}

export interface DistroConfig {
    id: string;
    name: string;
    description: string;
    logo: string;
    color: string;
    colorClass: string;
    docsUrl: string;
    status: "active" | "coming-soon";
    navigation: NavSection[];
}

export const distros: DistroConfig[] = [
    {
        id: "nixos",
        name: "NixOS",
        description: "Deklarativ konfiguratsiyaga ega takrorlanadigan Linux distributivi",
        logo: "/images/distros/nixos.svg",
        color: "#5277c3",
        colorClass: "nixos",
        docsUrl: "https://nixos.org/manual/nixos/stable/",
        status: "active",
        navigation: [
            {
                id: "getting-started",
                title: "Boshlash",
                iconName: "book-open",
                items: [
                    { title: "Kirish", slug: "introduction" },
                    { title: "NixOS nima?", slug: "what-is-nixos" },
                    { title: "Asosiy tushunchalar", slug: "core-concepts" },
                ],
            },
            {
                id: "installation",
                title: "O'rnatish",
                iconName: "download",
                items: [
                    { title: "Talablar", slug: "installation/requirements" },
                    { title: "ISO yuklab olish", slug: "installation/download" },
                    { title: "O'rnatish jarayoni", slug: "installation/guide" },
                    { title: "Dual boot", slug: "installation/dual-boot" },
                ],
            },
            {
                id: "configuration",
                title: "Konfiguratsiya",
                iconName: "settings",
                items: [
                    { title: "configuration.nix", slug: "configuration/basics" },
                    { title: "Paketlar boshqaruvi", slug: "configuration/packages" },
                    { title: "Xizmatlar", slug: "configuration/services" },
                    { title: "Foydalanuvchilar", slug: "configuration/users" },
                ],
            },
            {
                id: "nix-language",
                title: "Nix tili",
                iconName: "code",
                items: [
                    { title: "Asoslar", slug: "nix-language/basics" },
                    { title: "Funksiyalar", slug: "nix-language/functions" },
                    { title: "Derivatsiyalar", slug: "nix-language/derivations" },
                ],
            },
        ],
    },
    {
        id: "kali",
        name: "Kali Linux",
        description: "Penetratsion test va xavfsizlik auditi uchun distributiv",
        logo: "/images/distros/kali.svg",
        color: "#367bf0",
        colorClass: "kali",
        docsUrl: "https://www.kali.org/docs/",
        status: "active",
        navigation: [
            {
                id: "getting-started",
                title: "Boshlash",
                iconName: "book-open",
                items: [
                    { title: "Kirish", slug: "introduction" },
                    { title: "Kali nima?", slug: "what-is-kali" },
                    { title: "Etik hacking", slug: "ethical-hacking" },
                ],
            },
            {
                id: "installation",
                title: "O'rnatish",
                iconName: "download",
                items: [
                    { title: "Talablar", slug: "installation/requirements" },
                    { title: "Virtual mashina", slug: "installation/virtual-machine" },
                    { title: "USB dan o'rnatish", slug: "installation/usb" },
                    { title: "WSL", slug: "installation/wsl" },
                ],
            },
            {
                id: "tools",
                title: "Asboblar",
                iconName: "terminal",
                items: [
                    { title: "Nmap", slug: "tools/nmap" },
                    { title: "Metasploit", slug: "tools/metasploit" },
                    { title: "Burp Suite", slug: "tools/burp-suite" },
                    { title: "Wireshark", slug: "tools/wireshark" },
                ],
            },
            {
                id: "security",
                title: "Xavfsizlik",
                iconName: "shield",
                items: [
                    { title: "Tarmoq skanerlash", slug: "security/network-scanning" },
                    { title: "Zaifliklarni topish", slug: "security/vulnerability-assessment" },
                    { title: "Parol buzish", slug: "security/password-cracking" },
                ],
            },
        ],
    },
    {
        id: "parrot",
        name: "Parrot OS",
        description: "Xavfsizlik, rivojlantirish va maxfiylik uchun distributiv",
        logo: "/images/distros/parrot.svg",
        color: "#00d4aa",
        colorClass: "parrot",
        docsUrl: "https://parrotsec.org/docs/",
        status: "active",
        navigation: [
            {
                id: "getting-started",
                title: "Boshlash",
                iconName: "book-open",
                items: [
                    { title: "Kirish", slug: "introduction" },
                    { title: "Parrot nima?", slug: "what-is-parrot" },
                    { title: "Versiyalar", slug: "editions" },
                ],
            },
            {
                id: "installation",
                title: "O'rnatish",
                iconName: "download",
                items: [
                    { title: "Talablar", slug: "installation/requirements" },
                    { title: "O'rnatish qo'llanmasi", slug: "installation/guide" },
                    { title: "Virtual muhit", slug: "installation/virtual" },
                ],
            },
            {
                id: "tools",
                title: "Asboblar",
                iconName: "layers",
                items: [
                    { title: "Anonim bo'lish", slug: "tools/anonymity" },
                    { title: "Kriptografiya", slug: "tools/cryptography" },
                    { title: "Forensics", slug: "tools/forensics" },
                ],
            },
        ],
    },
    {
        id: "manjaro",
        name: "Manjaro",
        description: "Arch Linux asosidagi foydalanuvchilarga qulay distributiv",
        logo: "/images/distros/manjaro.svg",
        color: "#35bf5c",
        colorClass: "manjaro",
        docsUrl: "https://wiki.manjaro.org/",
        status: "active",
        navigation: [
            {
                id: "getting-started",
                title: "Boshlash",
                iconName: "book-open",
                items: [
                    { title: "Kirish", slug: "introduction" },
                    { title: "Manjaro nima?", slug: "what-is-manjaro" },
                    { title: "Arch vs Manjaro", slug: "arch-vs-manjaro" },
                ],
            },
            {
                id: "installation",
                title: "O'rnatish",
                iconName: "download",
                items: [
                    { title: "Talablar", slug: "installation/requirements" },
                    { title: "O'rnatish qo'llanmasi", slug: "installation/guide" },
                    { title: "Desktop muhitlari", slug: "installation/desktop-environments" },
                ],
            },
            {
                id: "package-management",
                title: "Paketlar",
                iconName: "cpu",
                items: [
                    { title: "Pacman", slug: "packages/pacman" },
                    { title: "AUR", slug: "packages/aur" },
                    { title: "Pamac", slug: "packages/pamac" },
                    { title: "Flatpak & Snap", slug: "packages/flatpak-snap" },
                ],
            },
        ],
    },
];

export function getDistroById(id: string): DistroConfig | undefined {
    return distros.find((d) => d.id === id);
}

export function getActiveDistros(): DistroConfig[] {
    return distros.filter((d) => d.status === "active");
}

export function getDistroNavigation(distroId: string): NavSection[] {
    const distro = getDistroById(distroId);
    return distro?.navigation ?? [];
}

export function getAllDistroSlugs(): { distro: string; slug: string[] }[] {
    const slugs: { distro: string; slug: string[] }[] = [];

    for (const distro of distros) {
        for (const section of distro.navigation) {
            for (const item of section.items) {
                slugs.push({
                    distro: distro.id,
                    slug: item.slug.split("/"),
                });
            }
        }
    }

    return slugs;
}
