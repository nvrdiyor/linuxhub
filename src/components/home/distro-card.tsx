"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { type DistroConfig } from "@/config/distros";

interface DistroCardProps {
    distro: DistroConfig;
    index: number;
}

export function DistroCard({ distro, index }: DistroCardProps) {
    const isComingSoon = distro.status === "coming-soon";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
        >
            {/* Glow effect */}
            <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${distro.color}40 0%, ${distro.color}20 100%)` }}
            />

            <Link
                href={isComingSoon ? "#" : `/${distro.id}/introduction`}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-500 ${isComingSoon
                    ? "cursor-not-allowed opacity-60 border-border"
                    : "border-border hover:border-transparent hover:shadow-2xl"
                    }`}
                onClick={(e) => isComingSoon && e.preventDefault()}
            >
                {/* Background gradient */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(135deg, ${distro.color}08 0%, transparent 50%)`
                    }}
                />

                {/* Animated border */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(135deg, ${distro.color}30 0%, transparent 40%, transparent 60%, ${distro.color}30 100%)`,
                        padding: '1px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                />

                {/* Coming Soon Badge */}
                {isComingSoon && (
                    <span className="absolute right-4 top-4 rounded-full bg-linear-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1.5 text-xs font-semibold text-yellow-600 dark:text-yellow-400 border border-yellow-500/30">
                        Tez kunda
                    </span>
                )}

                {/* Logo with glow */}
                <div className="relative mb-5">
                    <div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                        style={{ backgroundColor: distro.color }}
                    />
                    <div
                        className="relative flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        style={{
                            background: `linear-gradient(135deg, ${distro.color}20 0%, ${distro.color}10 100%)`,
                            border: `1px solid ${distro.color}30`
                        }}
                    >
                        <svg
                            className="h-9 w-9 transition-transform duration-500 group-hover:scale-110"
                            viewBox="0 0 100 100"
                            style={{ fill: distro.color }}
                        >
                            <DistroLogo distroId={distro.id} />
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold transition-colors duration-300">
                    <span
                        className="group-hover:bg-linear-to-r group-hover:from-current group-hover:to-current group-hover:bg-clip-text"
                        style={{
                            '--tw-gradient-from': distro.color,
                            '--tw-gradient-to': distro.color,
                        } as React.CSSProperties}
                    >
                        {distro.name}
                    </span>
                </h3>

                <p className="mb-5 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {distro.description}
                </p>

                {/* Action */}
                <div className="flex items-center justify-between">
                    <span
                        className="flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                        style={{ color: distro.color }}
                    >
                        {isComingSoon ? "Kutilmoqda" : "O'rganishni boshlash"}
                        {!isComingSoon && (
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                        )}
                    </span>

                    {/* Spacer */}
                    <div className="h-9 w-9" />
                </div>
            </Link>

            {/* External docs link */}
            {!isComingSoon && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(distro.docsUrl, "_blank", "noopener,noreferrer");
                    }}
                    className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-xl bg-muted/80 backdrop-blur-sm text-muted-foreground transition-all hover:bg-primary hover:text-white z-10 border border-border"
                    title="Rasmiy hujjatlar"
                >
                    <ExternalLink className="h-4 w-4" />
                </motion.button>
            )}
        </motion.div>
    );
}

function DistroLogo({ distroId }: { distroId: string }) {
    switch (distroId) {
        case "nixos":
            return (
                <g>
                    <path d="M50 15L85 75H15L50 15Z" opacity="0.8" />
                    <path d="M50 35L67 62H33L50 35Z" fill="currentColor" />
                </g>
            );
        case "kali":
            return (
                <g>
                    <path d="M50 10C28 10 12 28 12 50C12 62 18 73 28 80L50 55L72 80C82 73 88 62 88 50C88 28 72 10 50 10Z" />
                    <path d="M50 90L35 78H65L50 90Z" opacity="0.7" />
                </g>
            );
        case "parrot":
            return (
                <g>
                    <ellipse cx="50" cy="45" rx="35" ry="32" opacity="0.8" />
                    <path d="M30 35Q30 20 50 20Q70 20 70 40Q80 45 80 55Q75 70 55 75L50 88L45 75Q25 70 20 55Q20 45 30 40Z" />
                </g>
            );
        case "manjaro":
            return (
                <g>
                    <rect x="15" y="15" width="22" height="70" rx="3" />
                    <rect x="42" y="35" width="22" height="50" rx="3" opacity="0.8" />
                    <rect x="69" y="15" width="16" height="70" rx="3" opacity="0.6" />
                </g>
            );
        default:
            return <circle cx="50" cy="50" r="35" />;
    }
}
