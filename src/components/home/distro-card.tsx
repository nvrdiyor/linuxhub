"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { type DistroConfig } from "@/config/distros";
import { cn } from "@/lib/utils";

interface DistroCardProps {
    distro: DistroConfig;
    index: number;
}

export function DistroCard({ distro, index }: DistroCardProps) {
    const isComingSoon = distro.status === "coming-soon";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
        >
            <Link
                href={isComingSoon ? "#" : `/${distro.id}/introduction`}
                className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300",
                    isComingSoon
                        ? "cursor-not-allowed opacity-60"
                        : "hover:border-transparent hover:shadow-xl hover:-translate-y-1"
                )}
                style={{
                    "--distro-color": distro.color,
                } as React.CSSProperties}
                onClick={(e) => isComingSoon && e.preventDefault()}
            >
                {/* Gradient overlay on hover */}
                <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                    style={{ background: `linear-gradient(135deg, ${distro.color} 0%, transparent 100%)` }}
                />

                {/* Coming Soon Badge */}
                {isComingSoon && (
                    <span className="absolute right-4 top-4 rounded-full bg-warning/20 px-2 py-1 text-xs font-medium text-warning">
                        Tez kunda
                    </span>
                )}

                {/* Logo */}
                <div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${distro.color}20` }}
                >
                    <svg
                        className="h-10 w-10"
                        viewBox="0 0 100 100"
                        style={{ fill: distro.color }}
                    >
                        <DistroLogo distroId={distro.id} />
                    </svg>
                </div>

                {/* Content */}
                <h3
                    className="mb-2 text-xl font-bold transition-colors duration-300"
                    style={{ color: "inherit" }}
                >
                    <span className="group-hover:text-[var(--distro-color)]">
                        {distro.name}
                    </span>
                </h3>

                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                    {distro.description}
                </p>

                {/* Action */}
                <div className="flex items-center justify-between">
                    <span
                        className="flex items-center gap-1 text-sm font-medium transition-colors"
                        style={{ color: distro.color }}
                    >
                        {isComingSoon ? "Kutilmoqda" : "O'rganishni boshlash"}
                        {!isComingSoon && (
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        )}
                    </span>

                    {/* Spacer for external link positioning */}
                    <div className="h-8 w-8" />
                </div>
            </Link>

            {/* External docs link - positioned outside the main Link to avoid nesting */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    window.open(distro.docsUrl, "_blank", "noopener,noreferrer");
                }}
                className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-foreground z-10"
                title="Rasmiy hujjatlar"
            >
                <ExternalLink className="h-4 w-4" />
            </button>
        </motion.div>
    );
}

function DistroLogo({ distroId }: { distroId: string }) {
    switch (distroId) {
        case "nixos":
            return (
                <path d="M50 10L90 80H10L50 10ZM50 30L70 65H30L50 30Z" />
            );
        case "kali":
            return (
                <path d="M50 10C30 10 15 25 15 45C15 55 20 65 30 72L50 50L70 72C80 65 85 55 85 45C85 25 70 10 50 10ZM50 85L35 70H65L50 85Z" />
            );
        case "parrot":
            return (
                <path d="M25 30Q25 15 45 15Q65 15 65 35Q75 40 75 55Q75 75 55 80L50 90L45 80Q25 75 25 55Q25 40 35 35Q25 35 25 30Z" />
            );
        case "manjaro":
            return (
                <>
                    <rect x="15" y="15" width="25" height="70" />
                    <rect x="45" y="35" width="25" height="50" />
                    <rect x="75" y="15" width="10" height="70" />
                </>
            );
        default:
            return <circle cx="50" cy="50" r="35" />;
    }
}
