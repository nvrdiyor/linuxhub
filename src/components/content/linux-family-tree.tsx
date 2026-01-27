"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Distro {
    name: string;
    slug?: string;
    description: string;
}

interface DistroFamily {
    id: string;
    name: string;
    nameUz: string;
    color: string;
    bgColor: string;
    description: string;
    characteristics: string[];
    children: Distro[];
}

const linuxFamilies: DistroFamily[] = [
    {
        id: "debian",
        name: "Debian",
        nameUz: "Debian",
        color: "#A80030",
        bgColor: "rgba(168, 0, 48, 0.15)",
        description: "Barqarorlik va ishonchlilik",
        characteristics: ["APT", "Stabil", ".deb"],
        children: [
            { name: "Ubuntu", slug: "ubuntu", description: "Boshlang'ichlar uchun" },
            { name: "Linux Mint", description: "Windows o'xshash" },
            { name: "Kali", slug: "kali", description: "Xavfsizlik" },
            { name: "Pop!_OS", description: "Dasturchilar" },
        ],
    },
    {
        id: "arch",
        name: "Arch",
        nameUz: "Arch",
        color: "#1793D1",
        bgColor: "rgba(23, 147, 209, 0.15)",
        description: "Eng yangi va minimalist",
        characteristics: ["Pacman", "Rolling", "DIY"],
        children: [
            { name: "Manjaro", slug: "manjaro", description: "Qulay Arch" },
            { name: "EndeavourOS", description: "Oson o'tish" },
            { name: "Garuda", description: "Gaming" },
        ],
    },
    {
        id: "redhat",
        name: "Red Hat",
        nameUz: "Red Hat",
        color: "#EE0000",
        bgColor: "rgba(238, 0, 0, 0.15)",
        description: "Korporativ va server",
        characteristics: ["DNF", "RPM", "Enterprise"],
        children: [
            { name: "RHEL", description: "Korporativ" },
            { name: "Fedora", description: "Yangi texnologiyalar" },
            { name: "Rocky", description: "Server" },
        ],
    },
    {
        id: "independent",
        name: "Mustaqil",
        nameUz: "Mustaqil",
        color: "#818cf8",
        bgColor: "rgba(129, 140, 248, 0.15)",
        description: "O'ziga xos yondashuvlar",
        characteristics: ["Innovatsion", "Unikal"],
        children: [
            { name: "NixOS", slug: "nixos", description: "Deklarativ" },
            { name: "Void", description: "Soddalik" },
            { name: "Gentoo", description: "Source-based" },
        ],
    },
];

function DistroNode({ distro, color, delay }: { distro: Distro; color: string; delay: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {distro.slug ? (
                <Link
                    href={`/${distro.slug}/introduction`}
                    className="block px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium transition-all hover:scale-105"
                    style={{
                        borderColor: isHovered ? color : undefined,
                        boxShadow: isHovered ? `0 0 20px ${color}40` : undefined
                    }}
                >
                    {distro.name}
                </Link>
            ) : (
                <div
                    className="px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium transition-all"
                    style={{
                        borderColor: isHovered ? color : undefined,
                        boxShadow: isHovered ? `0 0 20px ${color}40` : undefined
                    }}
                >
                    {distro.name}
                </div>
            )}

            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground whitespace-nowrap z-10 shadow-xl"
                    >
                        {distro.description}
                        {distro.slug && (
                            <span className="text-primary ml-1">→ O'rganish</span>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function FamilyBranch({ family, index }: { family: DistroFamily; index: number }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`flex items-center gap-4 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
        >
            {/* Children nodes */}
            <div className={`flex flex-col gap-2 ${isLeft ? "items-end" : "items-start"}`}>
                <AnimatePresence>
                    {isExpanded && family.children.map((child, childIndex) => (
                        <div key={child.name} className={`flex items-center gap-2 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                            {/* Connecting line to child */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 24 }}
                                transition={{ duration: 0.3, delay: childIndex * 0.05 }}
                                className="h-0.5"
                                style={{ backgroundColor: family.color }}
                            />
                            <DistroNode distro={child} color={family.color} delay={childIndex * 0.05} />
                        </div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Connecting line to family node */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 hidden md:block"
                style={{ backgroundColor: family.color }}
            />

            {/* Family node */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all min-w-[140px]"
                style={{
                    borderColor: family.color,
                    backgroundColor: family.bgColor,
                }}
            >
                {/* Family icon */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-2 shadow-lg"
                    style={{ backgroundColor: family.color }}
                >
                    {family.name.charAt(0)}
                </div>
                <span className="font-bold text-sm">{family.nameUz}</span>
                <span className="text-xs text-muted-foreground mt-1">{family.description}</span>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 mt-2 justify-center">
                    {family.characteristics.map((char) => (
                        <span
                            key={char}
                            className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                            style={{ backgroundColor: `${family.color}30`, color: family.color }}
                        >
                            {char}
                        </span>
                    ))}
                </div>

                {/* Expand indicator */}
                <motion.div
                    animate={{ rotate: isExpanded ? 0 : (isLeft ? 90 : -90) }}
                    className="absolute top-2 right-2 text-muted-foreground"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                    </svg>
                </motion.div>
            </motion.button>
        </motion.div>
    );
}

export function LinuxFamilyTree() {
    return (
        <div className="my-8 py-8">
            {/* Central Kernel Node */}
            <div className="flex justify-center mb-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-purple-500 to-pink-500 blur-xl opacity-30" />

                    <div className="relative flex flex-col items-center p-6 rounded-2xl bg-linear-to-br from-primary/20 via-purple-500/20 to-pink-500/20 border-2 border-primary/50">
                        <span className="text-4xl mb-2">🐧</span>
                        <span className="font-bold text-xl">Linux Kernel</span>
                        <span className="text-sm text-muted-foreground">Barcha distributivlar asosi</span>
                    </div>
                </motion.div>
            </div>

            {/* Vertical line from kernel */}
            <div className="flex justify-center">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 40 }}
                    transition={{ duration: 0.5 }}
                    className="w-0.5 bg-linear-to-b from-primary to-border"
                />
            </div>

            {/* Horizontal connector line */}
            <div className="flex justify-center mb-4">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="h-0.5 bg-linear-to-r from-transparent via-border to-transparent max-w-4xl"
                />
            </div>

            {/* Family branches - Mind map layout */}
            <div className="relative max-w-6xl mx-auto">
                {/* SVG connecting lines background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
                    {/* Vertical drop lines from horizontal connector */}
                    <motion.line
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        x1="50%" y1="0" x2="25%" y2="60"
                        stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.line
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        x1="50%" y1="0" x2="75%" y2="60"
                        stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.line
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        x1="50%" y1="0" x2="25%" y2="220"
                        stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.line
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        x1="50%" y1="0" x2="75%" y2="220"
                        stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4"
                    />
                </svg>

                {/* Grid layout for families */}
                <div className="grid md:grid-cols-2 gap-8 relative" style={{ zIndex: 1 }}>
                    {linuxFamilies.map((family, index) => (
                        <div
                            key={family.id}
                            className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                        >
                            <FamilyBranch family={family} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-12 p-4 rounded-xl bg-muted/30 border border-border text-center"
            >
                <p className="text-sm text-muted-foreground">
                    💡 <strong>Maslahat:</strong> Oilalarni bosib yoping/oching. Rangli tugmalarni bosib distributiv haqida batafsil o'qing.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-3">
                    {linuxFamilies.map((family) => (
                        <div key={family.id} className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: family.color }} />
                            <span>{family.nameUz}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
