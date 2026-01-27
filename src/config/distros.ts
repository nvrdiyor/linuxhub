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
    // Linux Fundamentals - Entry point for beginners
    {
        id: "fundamentals",
        name: "Linux Asoslari",
        description: "Linux dunyosiga kirish - boshlang'ich qo'llanma",
        logo: "/images/distros/linux.svg",
        color: "#818cf8",
        colorClass: "fundamentals",
        docsUrl: "https://linuxhub.uz/fundamentals",
        status: "active",
        navigation: [
            {
                id: "getting-started",
                title: "Kirish",
                iconName: "book-open",
                items: [
                    { title: "Linux nima?", slug: "intro" },
                    { title: "Linux Olami", slug: "family-tree" },
                ],
            },
            {
                id: "core-concepts",
                title: "Asosiy Tushunchalar",
                iconName: "layers",
                items: [
                    { title: "Fayl Tizimi", slug: "file-system" },
                    { title: "Terminal asoslari", slug: "terminal" },
                    { title: "Paket menejerlari", slug: "package-managers" },
                ],
            },
            {
                id: "deep-dive",
                title: "Chuqurroq O'rganish",
                iconName: "code",
                items: [
                    { title: "Paket Urushi", slug: "package-wars" },
                    { title: "Display Serverlar", slug: "display-servers" },
                    { title: "Fayl Tizimlari", slug: "filesystems" },
                ],
            },
        ],
    },
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
            // O'rnatish
            {
                id: "install",
                title: "Nix o'rnatish",
                iconName: "download",
                items: [
                    { title: "O'rnatish", slug: "install" },
                ],
            },
            // Darsliklar (Tutorials)
            {
                id: "tutorials",
                title: "Darsliklar",
                iconName: "book-open",
                items: [
                    { title: "Birinchi qadamlar", slug: "tutorials/first-steps" },
                    { title: "Ad hoc shell muhitlari", slug: "tutorials/ad-hoc-shell" },
                    { title: "Takrorlanadigan skriptlar", slug: "tutorials/reproducible-scripts" },
                    { title: "Deklarativ shell muhitlari", slug: "tutorials/declarative-shell" },
                    { title: "Nixpkgs ni mahkamlash", slug: "tutorials/pinning-nixpkgs" },
                ],
            },
            {
                id: "nix-language",
                title: "Nix tili asoslari",
                iconName: "code",
                items: [
                    { title: "Umumiy ko'rinish", slug: "nix-language/overview" },
                    { title: "Nomlar va qiymatlar", slug: "nix-language/names-values" },
                    { title: "Funksiyalar", slug: "nix-language/functions" },
                    { title: "Funksiya kutubxonalari", slug: "nix-language/function-libraries" },
                    { title: "Nopokliklar", slug: "nix-language/impurities" },
                    { title: "Derivatsiyalar", slug: "nix-language/derivations" },
                    { title: "Amaliy misollar", slug: "nix-language/worked-examples" },
                ],
            },
            {
                id: "packaging",
                title: "Paketlash",
                iconName: "layers",
                items: [
                    { title: "Mavjud dasturni paketlash", slug: "packaging/existing-software" },
                    { title: "Birinchi paketingiz", slug: "packaging/first-package" },
                    { title: "Bog'liqliklar bilan paket", slug: "packaging/dependencies" },
                    { title: "Paketlarni topish", slug: "packaging/finding-packages" },
                    { title: "Build xatolarini tuzatish", slug: "packaging/fixing-build-failures" },
                ],
            },
            {
                id: "callpackage",
                title: "callPackage bilan ishlash",
                iconName: "settings",
                items: [
                    { title: "Umumiy ko'rinish", slug: "callpackage/overview" },
                    { title: "Avtomatik funksiya chaqirish", slug: "callpackage/automatic-calls" },
                    { title: "Parametrlangan buildlar", slug: "callpackage/parameterised-builds" },
                    { title: "Overridelar", slug: "callpackage/overrides" },
                ],
            },
            {
                id: "local-files",
                title: "Lokal fayllar bilan ishlash",
                iconName: "terminal",
                items: [
                    { title: "Fayl to'plamlari", slug: "local-files/file-sets" },
                    { title: "Misol loyiha", slug: "local-files/example-project" },
                    { title: "Nix store ga qo'shish", slug: "local-files/adding-to-store" },
                    { title: "Filtrlash", slug: "local-files/filtering" },
                ],
            },
            {
                id: "cross-compilation",
                title: "Kross-kompilyatsiya",
                iconName: "cpu",
                items: [
                    { title: "Nimalar kerak?", slug: "cross-compilation/requirements" },
                    { title: "Platformalar", slug: "cross-compilation/platforms" },
                    { title: "Amaliyot", slug: "cross-compilation/practice" },
                ],
            },
            {
                id: "module-system",
                title: "Modul tizimi",
                iconName: "layers",
                items: [
                    { title: "Kirish", slug: "module-system/introduction" },
                    { title: "Modullar yozish", slug: "module-system/writing-modules" },
                    { title: "Modul opsiyalari", slug: "module-system/options" },
                ],
            },
            {
                id: "nixos-tutorials",
                title: "NixOS",
                iconName: "settings",
                items: [
                    { title: "Virtual mashinada ishga tushirish", slug: "nixos/virtual-machine" },
                    { title: "Konfiguratsiya asoslari", slug: "nixos/configuration-basics" },
                    { title: "Xizmatlarni boshqarish", slug: "nixos/services" },
                ],
            },
            // Qo'llanmalar (Guides)
            {
                id: "guides",
                title: "Qo'llanmalar",
                iconName: "book-open",
                items: [
                    { title: "Retseptlar", slug: "guides/recipes" },
                    { title: "Eng yaxshi amaliyotlar", slug: "guides/best-practices" },
                    { title: "Muammolarni hal qilish", slug: "guides/troubleshooting" },
                    { title: "Ko'p so'raladigan savollar", slug: "guides/faq" },
                ],
            },
            // Ma'lumotnoma (Reference)
            {
                id: "reference",
                title: "Ma'lumotnoma",
                iconName: "book-open",
                items: [
                    { title: "Lug'at", slug: "reference/glossary" },
                    { title: "Nix qo'llanmasi", slug: "reference/nix-manual" },
                    { title: "Nixpkgs qo'llanmasi", slug: "reference/nixpkgs-manual" },
                    { title: "NixOS qo'llanmasi", slug: "reference/nixos-manual" },
                    { title: "Qo'shimcha o'qish", slug: "reference/further-reading" },
                    { title: "Nixpkgs ni mahkamlash", slug: "reference/pinning-nixpkgs" },
                ],
            },
            // Tushunchalar (Concepts)
            {
                id: "concepts",
                title: "Tushunchalar",
                iconName: "code",
                items: [
                    { title: "Flakes", slug: "concepts/flakes" },
                    { title: "Ko'p so'raladigan savollar", slug: "concepts/faq" },
                ],
            },
            // Hissa qo'shish (Contributing)
            {
                id: "contributing",
                title: "Hissa qo'shish",
                iconName: "terminal",
                items: [
                    { title: "Qanday hissa qo'shish", slug: "contributing/how-to-contribute" },
                    { title: "Yordam olish", slug: "contributing/how-to-get-help" },
                    { title: "Hujjatlashtirish", slug: "contributing/documentation" },
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
    {
        id: "ubuntu",
        name: "Ubuntu",
        description: "Dunyodagi eng mashhur Linux distributivi - Debian asosida",
        logo: "/images/distros/ubuntu.svg",
        color: "#E95420",
        colorClass: "ubuntu",
        docsUrl: "https://ubuntu.com/tutorials",
        status: "coming-soon",
        navigation: [
            {
                id: "getting-started",
                title: "Boshlash",
                iconName: "book-open",
                items: [
                    { title: "Kirish", slug: "introduction" },
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
