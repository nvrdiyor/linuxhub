"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ==================== DATA STRUCTURE ====================

interface Distro {
    name: string;
    slug?: string;
    description: string;
    expertOnly?: boolean;
}

interface DistroFamily {
    id: string;
    name: string;
    nameUz: string;
    color: string;
    icon: string;
    description: string;
    characteristics: string[];
    children: Distro[];
    expertOnly?: boolean;
}

// Extended Linux Family Data
const linuxFamilies: DistroFamily[] = [
    {
        id: "debian",
        name: "Debian",
        nameUz: "Debian Oilasi",
        color: "#A80030",
        icon: "🔴",
        description: "Barqarorlik va ishonchlilik",
        characteristics: ["APT", "Stabil", ".deb"],
        children: [
            { name: "Ubuntu", slug: "ubuntu", description: "Eng mashhur, boshlang'ichlar uchun" },
            { name: "Linux Mint", description: "Windows o'xshash, juda qulay" },
            { name: "Kali Linux", slug: "kali", description: "Penetration testing" },
            { name: "Pop!_OS", description: "Dasturchilar uchun", expertOnly: true },
            { name: "Parrot OS", slug: "parrot", description: "Xavfsizlik", expertOnly: true },
            { name: "Zorin OS", description: "Windows dan o'tish uchun", expertOnly: true },
        ],
    },
    {
        id: "arch",
        name: "Arch",
        nameUz: "Arch Oilasi",
        color: "#1793D1",
        icon: "🔵",
        description: "Bleeding edge, minimalist",
        characteristics: ["Pacman", "Rolling", "DIY"],
        children: [
            { name: "Manjaro", slug: "manjaro", description: "Qulay Arch" },
            { name: "EndeavourOS", description: "Terminal-centric", expertOnly: true },
            { name: "Garuda Linux", description: "Gaming uchun", expertOnly: true },
            { name: "SteamOS", description: "Steam Deck OS", expertOnly: true },
        ],
    },
    {
        id: "redhat",
        name: "Red Hat",
        nameUz: "Red Hat Oilasi",
        color: "#EE0000",
        icon: "🔺",
        description: "Enterprise va server",
        characteristics: ["DNF", "RPM", "Enterprise"],
        children: [
            { name: "Fedora", description: "Yangi texnologiyalar" },
            { name: "RHEL", description: "Korporativ standart", expertOnly: true },
            { name: "Rocky Linux", description: "CentOS o'rniga", expertOnly: true },
            { name: "Fedora Silverblue", description: "Immutable Fedora", expertOnly: true },
        ],
    },
    {
        id: "immutable",
        name: "Immutable",
        nameUz: "Immutable / Zamonaviy",
        color: "#8b5cf6",
        icon: "❄️",
        description: "Deklarativ, takrorlanadigan",
        characteristics: ["Rollback", "Atomic", "Modern"],
        children: [
            { name: "NixOS", slug: "nixos", description: "Deklarativ OS" },
            { name: "Fedora Silverblue", description: "GNOME immutable", expertOnly: true },
            { name: "openSUSE MicroOS", description: "Container-optimized", expertOnly: true },
        ],
    },
    {
        id: "hardcore",
        name: "Hardcore",
        nameUz: "Hardcore / Source-based",
        color: "#f59e0b",
        icon: "🔧",
        description: "Maksimal nazorat",
        characteristics: ["Source", "Compile", "DIY"],
        expertOnly: true,
        children: [
            { name: "Gentoo", description: "Source-based, optimallashtirish" },
            { name: "Slackware", description: "1993-dan beri, KISS" },
            { name: "LFS", description: "Linux From Scratch" },
        ],
    },
    {
        id: "independent",
        name: "Mustaqil",
        nameUz: "Mustaqil Distributivlar",
        color: "#ec4899",
        icon: "💫",
        description: "O'ziga xos yondashuvlar",
        characteristics: ["Unikal", "Innovatsion"],
        children: [
            { name: "openSUSE", description: "YaST bilan professional" },
            { name: "Void Linux", description: "runit init, xbps", expertOnly: true },
            { name: "Solus", description: "Budgie DE yaratuvchisi", expertOnly: true },
        ],
    },
    {
        id: "embedded",
        name: "Embedded",
        nameUz: "Mobile / Server",
        color: "#06b6d4",
        icon: "📱",
        description: "Maxsus maqsadlar",
        characteristics: ["Minimal", "Container", "ARM"],
        expertOnly: true,
        children: [
            { name: "Alpine Linux", description: "Docker uchun ideal" },
            { name: "Android", description: "Linux kernel asosida" },
            { name: "postmarketOS", description: "Mobil uchun" },
        ],
    },
];

// ==================== COMPONENTS ====================

interface DistroCardProps {
    distro: Distro;
    color: string;
    index: number;
}

function DistroCard({ distro, color, index }: DistroCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const content = (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
        >
            {/* Glow effect on hover */}
            <div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                style={{ backgroundColor: color }}
            />

            <div
                className="relative px-4 py-3 rounded-xl bg-card border-2 transition-all duration-300 cursor-pointer"
                style={{
                    borderColor: isHovered ? color : "var(--border)",
                    boxShadow: isHovered ? `0 0 25px ${color}40, inset 0 0 20px ${color}10` : undefined,
                }}
            >
                <div className="flex items-center gap-2">
                    {distro.slug && (
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    )}
                    <span className="font-medium text-sm">{distro.name}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{distro.description}</p>
                {distro.slug && (
                    <span className="text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        → O'rganish
                    </span>
                )}
            </div>
        </motion.div>
    );

    if (distro.slug) {
        return (
            <Link href={`/${distro.slug}/introduction`} className="block">
                {content}
            </Link>
        );
    }

    return content;
}

interface FamilyColumnProps {
    family: DistroFamily;
    expertMode: boolean;
    index: number;
}

function FamilyColumn({ family, expertMode, index }: FamilyColumnProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const visibleChildren = expertMode
        ? family.children
        : family.children.filter((c) => !c.expertOnly);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col min-w-[280px] md:min-w-[300px]"
        >
            {/* Family Header Card */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group mb-4"
            >
                {/* Neon glow */}
                <div
                    className="absolute -inset-1 rounded-2xl opacity-50 blur-lg transition-opacity group-hover:opacity-80"
                    style={{ backgroundColor: family.color }}
                />

                <div
                    className="relative p-5 rounded-2xl border-2 bg-card/80 backdrop-blur-sm transition-all"
                    style={{ borderColor: family.color }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                                style={{
                                    backgroundColor: family.color,
                                    boxShadow: `0 0 20px ${family.color}60`,
                                }}
                            >
                                {family.icon}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-lg">{family.name}</div>
                                <div className="text-xs text-muted-foreground">{family.description}</div>
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="text-muted-foreground"
                        >
                            ▼
                        </motion.div>
                    </div>

                    {/* Characteristic badges */}
                    <div className="flex flex-wrap gap-2">
                        {family.characteristics.map((char) => (
                            <span
                                key={char}
                                className="px-2.5 py-1 rounded-full text-xs font-medium"
                                style={{
                                    backgroundColor: `${family.color}25`,
                                    color: family.color,
                                    border: `1px solid ${family.color}40`,
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.button>

            {/* Connecting line */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 20, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex justify-center"
                    >
                        <div
                            className="w-0.5 h-full"
                            style={{ backgroundColor: family.color }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Children cards */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-2 pl-4 border-l-2"
                        style={{ borderColor: `${family.color}50` }}
                    >
                        {visibleChildren.map((child, childIndex) => (
                            <DistroCard
                                key={child.name}
                                distro={child}
                                color={family.color}
                                index={childIndex}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ==================== MAIN COMPONENT ====================

export function LinuxFamilyTree() {
    const [expertMode, setExpertMode] = useState(false);

    const visibleFamilies = expertMode
        ? linuxFamilies
        : linuxFamilies.filter((f) => !f.expertOnly);

    const totalBeginner = linuxFamilies
        .filter((f) => !f.expertOnly)
        .flatMap((f) => f.children.filter((c) => !c.expertOnly)).length;

    const totalExpert = linuxFamilies.flatMap((f) => f.children).length;

    return (
        <div className="my-8 space-y-6">
            {/* Header with toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-muted/30 border border-border backdrop-blur-sm">
                <div className="text-center sm:text-left">
                    <h3 className="font-bold text-xl mb-1">🐧 Linux Oilalari Xaritasi</h3>
                    <p className="text-sm text-muted-foreground">
                        Oilalarni bosib yoping/oching. Rangli kartalarni bosib o'rganing.
                    </p>
                </div>

                {/* Expert Mode Toggle */}
                <div className="flex items-center gap-3 p-2 rounded-xl bg-card border border-border">
                    <span className={`text-sm transition-colors ${!expertMode ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                        🌱 Boshlang'ich
                    </span>
                    <button
                        onClick={() => setExpertMode(!expertMode)}
                        className={`relative w-14 h-7 rounded-full transition-all ${expertMode
                                ? "bg-gradient-to-r from-orange-500 to-red-500"
                                : "bg-muted"
                            }`}
                    >
                        <motion.div
                            className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-lg"
                            animate={{ left: expertMode ? "calc(100% - 24px)" : "4px" }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                    </button>
                    <span className={`text-sm transition-colors ${expertMode ? "text-orange-500 font-semibold" : "text-muted-foreground"}`}>
                        🔥 Ekspert
                    </span>
                </div>
            </div>

            {/* Kernel Node */}
            <div className="flex justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative"
                >
                    {/* Multi-layer glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-lg opacity-40" />

                    <div className="relative flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-muted border-2 border-primary/50 shadow-2xl">
                        <span className="text-5xl mb-3">🐧</span>
                        <span className="font-bold text-2xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                            Linux Kernel
                        </span>
                        <span className="text-sm text-muted-foreground">
                            Linus Torvalds • 1991
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Main connecting line */}
            <div className="flex justify-center">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 50 }}
                    transition={{ duration: 0.5 }}
                    className="w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent"
                />
            </div>

            {/* Horizontal scroll container for families */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Scrollable container */}
                <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-track-muted scrollbar-thumb-primary/50 hover:scrollbar-thumb-primary">
                    <div className="flex gap-6 px-4 min-w-max">
                        {visibleFamilies.map((family, index) => (
                            <FamilyColumn
                                key={family.id}
                                family={family}
                                expertMode={expertMode}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Legend / Footer */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 rounded-xl bg-muted/30 border border-border text-center"
            >
                <div className="flex flex-wrap justify-center gap-4 mb-3">
                    {linuxFamilies.slice(0, 4).map((family) => (
                        <div key={family.id} className="flex items-center gap-2 text-xs">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                    backgroundColor: family.color,
                                    boxShadow: `0 0 8px ${family.color}60`,
                                }}
                            />
                            <span className="text-muted-foreground">{family.name}</span>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground">
                    💡 {expertMode ? `Ekspert rejimi: ${totalExpert}` : `Boshlang'ich rejimi: ${totalBeginner}`} ta distributiv ko'rsatilmoqda
                    {!expertMode && ` • Ekspert rejimida ${totalExpert}+ ta`}
                </p>
            </motion.div>
        </div>
    );
}
