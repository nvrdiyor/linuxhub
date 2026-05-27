// Icon names that can be serialized (no React component references)
export type IconName =
    | "book-open"
    | "download"
    | "settings"
    | "code"
    | "terminal"
    | "shield"
    | "layers"
    | "cpu"
    | "package"
    | "palette";

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
    // Linux Fundamentals - Zero to Hero Course
    {
        id: "fundamentals",
        name: "Linux Asoslari",
        description: "Linux dunyosiga kirish - Zero to Hero qo'llanma",
        logo: "/images/distros/linux.svg",
        color: "#818cf8",
        colorClass: "fundamentals",
        docsUrl: "https://linuxhub.uz/fundamentals",
        status: "active",
        navigation: [
            // Module 0: Tayyorgarlik
            {
                id: "module-0",
                title: "0. Tayyorgarlik",
                iconName: "settings",
                items: [
                    { title: "Virtual Mashina o'rnatish", slug: "virtual-machine" },
                    { title: "Live USB yaratish", slug: "live-usb" },
                    { title: "Dual Boot nima?", slug: "dual-boot" },
                ],
            },
            // Module 1: Linux Asoslari
            {
                id: "module-1",
                title: "1. Linux Asoslari",
                iconName: "book-open",
                items: [
                    { title: "Linux nima?", slug: "intro" },
                    { title: "Linux tarixi", slug: "history" },
                    { title: "Linux Oila Shajarasi", slug: "family-tree" },
                    { title: "Fayl Tizimi Ierarxiyasi", slug: "file-system" },
                ],
            },
            // Module 2: Terminal va Shell
            {
                id: "module-2",
                title: "2. Terminal va Shell",
                iconName: "terminal",
                items: [
                    { title: "Nega Terminal?", slug: "terminal" },
                    { title: "Shell nima?", slug: "shell" },
                    { title: "Asosiy buyruqlar", slug: "basic-commands" },
                    { title: "Fayl operatsiyalari", slug: "file-operations" },
                    { title: "Matnni qayta ishlash", slug: "text-processing" },
                    { title: "Nano vs Vim", slug: "text-editors" },
                ],
            },
            // Module 3: Foydalanuvchilar va ruxsatlar
            {
                id: "module-3",
                title: "3. Foydalanuvchilar va ruxsatlar",
                iconName: "shield",
                items: [
                    { title: "Foydalanuvchilar va guruhlar", slug: "users-groups" },
                    { title: "Ruxsatlar (chmod, sudo)", slug: "permissions" },
                ],
            },
            // Module 4: Paket Boshqaruvi
            {
                id: "module-4",
                title: "4. Paket Boshqaruvi",
                iconName: "package",
                items: [
                    { title: "Repozitoriy nima?", slug: "repositories" },
                    { title: "apt va dnf", slug: "package-managers" },
                    { title: "pacman va AUR", slug: "pacman-aur" },
                    { title: "Flatpak, Snap, AppImage", slug: "package-wars" },
                ],
            },
            // Module 5: Jarayonlar va xizmatlar
            {
                id: "module-5",
                title: "5. Jarayonlar va xizmatlar",
                iconName: "cpu",
                items: [
                    { title: "Jarayonlar boshqaruvi", slug: "processes" },
                    { title: "systemd xizmatlari", slug: "services" },
                    { title: "Monitoring", slug: "monitoring" },
                    { title: "Cron va rejalashtirilgan ishlar", slug: "cron" },
                ],
            },
            // Module 6: Tarmoq va xavfsizlik
            {
                id: "module-6",
                title: "6. Tarmoq va xavfsizlik",
                iconName: "shield",
                items: [
                    { title: "Tarmoq asoslari", slug: "networking" },
                    { title: "SSH kalitlari", slug: "ssh" },
                    { title: "Firewall (UFW)", slug: "firewall" },
                    { title: "Xavfsizlik asoslari", slug: "security-basics" },
                ],
            },
            // Module 7: Skript va boshqaruv
            {
                id: "module-7",
                title: "7. Skript va boshqaruv",
                iconName: "code",
                items: [
                    { title: "Bash asoslari", slug: "bash-fundamentals" },
                    { title: "Loglar bilan ishlash", slug: "logs" },
                    { title: "Muammolarni hal qilish", slug: "troubleshooting" },
                    { title: "Zaxiralash strategiyalari", slug: "backup-strategies" },
                ],
            },
            // Module 8: Tizimni Sozlash (Bonus)
            {
                id: "module-8",
                title: "8. Tizimni sozlash",
                iconName: "palette",
                items: [
                    { title: "DE vs WM", slug: "de-vs-wm" },
                    { title: "Mavzular o'zgartirish", slug: "theming" },
                    { title: "Dotfiles nima?", slug: "dotfiles" },
                ],
            },
            // Advanced Topics
            {
                id: "advanced",
                title: "Chuqurroq o'rganish",
                iconName: "code",
                items: [
                    { title: "Display Serverlar", slug: "display-servers" },
                    { title: "Wayland va modern grafik", slug: "wayland-modern" },
                    { title: "Fayl Tizimlari", slug: "filesystems" },
                    { title: "Fayl tizimlari chuqurroq", slug: "file-systems-deep" },
                    { title: "Boot jarayoni", slug: "boot-process" },
                    { title: "Yadro modullari", slug: "kernel-modules" },
                ],
            },
            // Distributivlar va paketlash
            {
                id: "module-9",
                title: "9. Distributivlar va paketlash",
                iconName: "package",
                items: [
                    { title: "Distributivlar — chuqur tahlil", slug: "linux-distributions-deep-dive" },
                    { title: "Paket qurish (.deb / .rpm)", slug: "package-building" },
                ],
            },
            // Shell va skriptlash chuqur
            {
                id: "module-10",
                title: "10. Shell va skriptlash",
                iconName: "terminal",
                items: [
                    { title: "Muhit o'zgaruvchilari", slug: "environment-variables" },
                    { title: "Globbing va wildcards", slug: "globbing-wildcards" },
                    { title: "I/O redirection va pipes", slug: "io-redirection" },
                    { title: "Signallar va kill", slug: "signals" },
                    { title: "Job control va background", slug: "job-control" },
                    { title: "Shell scripting ilg'or", slug: "shell-scripting-advanced" },
                    { title: "Vim chuqurroq", slug: "vim-deep" },
                ],
            },
            // Tizim chuqurroq
            {
                id: "module-11",
                title: "11. Tizim chuqurroq",
                iconName: "settings",
                items: [
                    { title: "systemd unit chuqur", slug: "systemd-units-deep" },
                    { title: "journalctl ilg'or", slug: "journalctl-advanced" },
                    { title: "cron vs systemd timers", slug: "cron-vs-systemd-timers" },
                    { title: "cgroups va namespaces", slug: "cgroups-namespaces" },
                    { title: "strace va tracing", slug: "strace-tracing" },
                    { title: "audit va monitoring", slug: "audit-and-monitoring" },
                    { title: "Performance tuning", slug: "performance-tuning" },
                ],
            },
            // Storage va disk
            {
                id: "module-12",
                title: "12. Storage va disk",
                iconName: "layers",
                items: [
                    { title: "Disk boshqaruvi", slug: "disk-management" },
                    { title: "LVM", slug: "lvm" },
                    { title: "RAID", slug: "raid" },
                    { title: "fstab va mount", slug: "fstab" },
                    { title: "Swap xotira", slug: "swap-memory" },
                    { title: "rsync chuqur", slug: "rsync-deep" },
                    { title: "Tar arxivlash", slug: "tar-archives" },
                    { title: "Compression", slug: "compression" },
                    { title: "Dotfiles boshqaruv", slug: "dotfiles-management" },
                ],
            },
            // Tarmoq chuqurroq
            {
                id: "module-13",
                title: "13. Tarmoq chuqurroq",
                iconName: "shield",
                items: [
                    { title: "SSH ilg'or (tunneling)", slug: "ssh-advanced" },
                    { title: "iptables va nftables", slug: "iptables-nftables" },
                    { title: "WireGuard VPN", slug: "vpn-wireguard" },
                    { title: "DNS va systemd-resolved", slug: "dns-systemd-resolved" },
                    { title: "DHCP server", slug: "dhcp-server" },
                    { title: "Bonding va bridge", slug: "network-bonding-bridge" },
                    { title: "systemd-networkd", slug: "systemd-networkd" },
                    { title: "NFS", slug: "nfs" },
                    { title: "Samba", slug: "samba" },
                ],
            },
            // Xavfsizlik chuqurroq
            {
                id: "module-14",
                title: "14. Xavfsizlik chuqurroq",
                iconName: "shield",
                items: [
                    { title: "Foydalanuvchi chuqur (PAM, shadow)", slug: "users-deep" },
                    { title: "Linux capabilities", slug: "capabilities" },
                    { title: "SELinux va AppArmor", slug: "selinux-apparmor" },
                ],
            },
            // Server va xizmatlar
            {
                id: "module-15",
                title: "15. Server va xizmatlar",
                iconName: "cpu",
                items: [
                    { title: "Apache HTTP", slug: "apache-basics" },
                    { title: "Nginx", slug: "nginx-basics" },
                    { title: "PostgreSQL", slug: "postgresql-basics" },
                    { title: "SQLite", slug: "sqlite-basics" },
                    { title: "Redis va RabbitMQ", slug: "redis-rabbitmq" },
                ],
            },
            // Container va DevOps
            {
                id: "module-16",
                title: "16. Container va DevOps",
                iconName: "package",
                items: [
                    { title: "Docker asoslari", slug: "docker-basics" },
                    { title: "Podman (rootless)", slug: "podman" },
                    { title: "Kubernetes kirish", slug: "kubernetes-intro" },
                    { title: "Git asoslari", slug: "git-fundamentals" },
                    { title: "Python Linux'da", slug: "python-on-linux" },
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
        status: "active",
        navigation: [
            {
                id: "getting-started",
                title: "Boshlash",
                iconName: "book-open",
                items: [
                    { title: "Kirish", slug: "introduction" },
                ],
            },
            {
                id: "installation",
                title: "O'rnatish",
                iconName: "download",
                items: [
                    { title: "Tizim talablari", slug: "installation/requirements" },
                    { title: "USB dan o'rnatish", slug: "installation/usb" },
                    { title: "WSL ostida Ubuntu", slug: "installation/wsl" },
                    { title: "Ubuntu Server", slug: "installation/server" },
                ],
            },
            {
                id: "packages",
                title: "Paketlar",
                iconName: "package",
                items: [
                    { title: "APT bilan ishlash", slug: "apt-basics" },
                    { title: "Snap paketlar", slug: "snap" },
                ],
            },
            {
                id: "system",
                title: "Tizim",
                iconName: "settings",
                items: [
                    { title: "LTS va relizlar tsikli", slug: "lts-release-cycle" },
                    { title: "Canonical Livepatch", slug: "livepatch" },
                    { title: "GNOME ish stoli", slug: "gnome-desktop" },
                ],
            },
        ],
    },
    {
        id: "debian",
        name: "Debian",
        description: "Erkin dasturlarga sodiq, eng eski va barqaror distributivlardan biri",
        logo: "/images/distros/debian.svg",
        color: "#A81D33",
        colorClass: "debian",
        docsUrl: "https://www.debian.org/doc/",
        status: "active",
        navigation: [
            {
                id: "getting-started",
                title: "Boshlash",
                iconName: "book-open",
                items: [
                    { title: "Kirish", slug: "introduction" },
                    { title: "Debian ijtimoiy shartnomasi", slug: "social-contract" },
                ],
            },
            {
                id: "installation",
                title: "O'rnatish",
                iconName: "download",
                items: [
                    { title: "Debian o'rnatish", slug: "installation" },
                ],
            },
            {
                id: "package-management",
                title: "Paket boshqaruvi",
                iconName: "package",
                items: [
                    { title: "APT (Debian usuli)", slug: "apt-debian" },
                    { title: "dpkg asoslari", slug: "dpkg-fundamentals" },
                    { title: "Backports", slug: "backports" },
                ],
            },
            {
                id: "system",
                title: "Tizim",
                iconName: "settings",
                items: [
                    { title: "Stable / Testing / Sid", slug: "release-cycle" },
                    { title: "Tizim administratsiyasi", slug: "system-administration" },
                    { title: "Xavfsizlik yangilanishlari", slug: "security-updates" },
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
