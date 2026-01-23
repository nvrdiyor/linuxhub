"use client";

import { motion } from "framer-motion";
import { Terminal, BookOpen, Users, Zap, Sparkles, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import Three.js component to avoid SSR issues
const ThreeBackground = dynamic(
    () => import("@/components/three/three-background").then(mod => mod.ThreeBackground),
    { ssr: false }
);

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Three.js 3D Background */}
            <ThreeBackground />

            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-linear-to-r from-primary/10 to-purple-500/10 blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-dot-pattern opacity-30" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
            </div>

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                    {/* Gradient orb behind text (left side) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-linear-to-r from-primary/40 via-purple-500/30 to-transparent blur-3xl -z-10 hidden lg:block" />
                    {/* Gradient orb behind terminal (right side) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-linear-to-l from-cyan-500/40 via-blue-500/30 to-transparent blur-3xl -z-10 hidden lg:block" />
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 backdrop-blur-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>O'zbek tilidagi Linux qo'llanmalar</span>
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            <span className="block text-foreground">Linux dunyosiga</span>
                            <span className="block mt-2 gradient-text">
                                Xush kelibsiz!
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                            NixOS, Kali Linux, Parrot OS va Manjaro distributivlarini o'zbek tilida o'rganing.
                            <span className="text-foreground font-medium"> Boshlang'ichdan ilg'or darajagacha</span> — biz bilan birga o'rganing.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/nixos/introduction"
                                className="group inline-flex items-center gap-2 btn-primary"
                            >
                                Boshlash
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="#distros"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm font-medium transition-all hover:bg-muted hover:border-primary/30"
                            >
                                <Terminal className="h-4 w-4" />
                                Distributivlar
                            </Link>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                        >
                            <StatItem icon={BookOpen} value="4" label="Distributiv" />
                            <StatItem icon={Terminal} value="50+" label="Maqolalar" />
                            <StatItem icon={Users} value="100%" label="Bepul" />
                            <StatItem icon={Zap} value="24/7" label="Ochiq" />
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative">
                            {/* Terminal mockup */}
                            <div className="relative w-[480px] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                                {/* Terminal header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                                    <div className="flex gap-1.5">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-xs text-muted-foreground ml-2 font-mono">linuxhub ~ terminal</span>
                                </div>

                                {/* Terminal content */}
                                <div className="p-6 font-mono text-sm space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">➜</span>
                                        <span className="text-cyan-500">~</span>
                                        <span className="text-foreground">fastfetch</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                                        <span className="text-primary">OS:</span>
                                        <span className="text-muted-foreground">NixOS 24.05</span>
                                        <span className="text-primary">Kernel:</span>
                                        <span className="text-muted-foreground">6.6.32-linux</span>
                                        <span className="text-primary">Shell:</span>
                                        <span className="text-muted-foreground">zsh 5.9</span>
                                        <span className="text-primary">DE:</span>
                                        <span className="text-muted-foreground">Hyprland</span>
                                        <span className="text-primary">Terminal:</span>
                                        <span className="text-muted-foreground">kitty</span>
                                        <span className="text-primary">Packages:</span>
                                        <span className="text-muted-foreground">2847 (nix)</span>
                                    </div>
                                    <div className="flex items-center gap-2 pt-2">
                                        <span className="text-green-500">➜</span>
                                        <span className="text-cyan-500">~</span>
                                        <span className="text-foreground animate-pulse">_</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium shadow-lg"
                            >
                                🚀 Yangi!
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 text-white text-sm font-medium shadow-lg"
                            >
                                ✓ O'zbek tilida
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

interface StatItemProps {
    icon: LucideIcon;
    value: string;
    label: string;
}

function StatItem({ icon: Icon, value, label }: StatItemProps) {
    return (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
                <div className="text-xl font-bold">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
            </div>
        </div>
    );
}
