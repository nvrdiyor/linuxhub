"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface DistroSuggestion {
    id: string;
    name: string;
    label: string;
    reason: string;
    color: string;
    logo: string;
}

const suggestions: DistroSuggestion[] = [
    {
        id: "ubuntu",
        name: "Ubuntu",
        label: "Oson boshlash",
        reason: "Eng mashhur va qulay distributiv. Keng hamjamiyat va ko'p qo'llanmalar.",
        color: "#E95420",
        logo: "/images/distros/ubuntu.svg",
    },
    {
        id: "manjaro",
        name: "Manjaro",
        label: "Ko'proq nazorat",
        reason: "Arch asosida, lekin qulay o'rnatish. Eng yangi dasturlar.",
        color: "#35bf5c",
        logo: "/images/distros/manjaro.svg",
    },
    {
        id: "nixos",
        name: "NixOS",
        label: "Zamonaviy yondashuv",
        reason: "Deklarativ konfiguratsiya. Qayta tiklanadigan tizim.",
        color: "#5277c3",
        logo: "/images/distros/nixos.svg",
    },
];

export function NextStepsCard() {
    return (
        <div className="my-8">
            {/* Header */}
            <div className="text-center mb-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-green-500 to-emerald-500 text-white text-3xl mb-4"
                >
                    🎉
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Tabriklaymiz!</h2>
                <p className="text-muted-foreground">
                    Siz Linux asoslarini o'rgandingiz. Endi birinchi distributivingizni tanlang!
                </p>
            </div>

            {/* Suggestions grid */}
            <div className="grid gap-4 md:grid-cols-3">
                {suggestions.map((distro, index) => (
                    <motion.div
                        key={distro.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group relative"
                    >
                        {/* Glow effect */}
                        <div
                            className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                            style={{ background: distro.color }}
                        />

                        <Link
                            href={`/${distro.id}/introduction`}
                            className="relative block rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-opacity-50 hover:shadow-xl h-full"
                            style={{ borderColor: `${distro.color}30` }}
                        >
                            {/* Label badge */}
                            <div
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
                                style={{ backgroundColor: distro.color }}
                            >
                                {distro.label}
                            </div>

                            {/* Logo and name */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src={distro.logo}
                                        alt={distro.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="font-bold text-lg">{distro.name}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground mb-4">
                                {distro.reason}
                            </p>

                            {/* Action */}
                            <div
                                className="flex items-center gap-2 text-sm font-medium transition-colors"
                                style={{ color: distro.color }}
                            >
                                O'rganishni boshlash
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Alternative action */}
            <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground mb-3">
                    Qaysi birini tanlashni bilmayapsizmi?
                </p>
                <Link
                    href="/fundamentals/family-tree"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Distributivlar shajarasiga qaytish
                </Link>
            </div>
        </div>
    );
}
