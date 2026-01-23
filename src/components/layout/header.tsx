"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSidebarStore } from "@/lib/store";
import { siteConfig } from "@/config/site";
import { getDistroById } from "@/config/distros";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();
    const { mobileMenuOpen, setMobileMenuOpen, setSearchOpen, currentDistro } = useSidebarStore();

    // Check if we're in a docs page
    const isDocsPage = pathname.startsWith("/nixos") ||
        pathname.startsWith("/kali") ||
        pathname.startsWith("/parrot") ||
        pathname.startsWith("/manjaro");

    const distro = currentDistro ? getDistroById(currentDistro) : null;

    return (
        <header className="sticky top-0 z-50 glass border-b border-border">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left: Logo & Navigation */}
                <div className="flex items-center gap-4">
                    {/* Mobile menu button */}
                    {isDocsPage && (
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-accent lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    )}

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                            L
                        </div>
                        <span className="text-lg font-bold">{siteConfig.name}</span>
                    </Link>

                    {/* Distro Badge */}
                    {distro && (
                        <div className="hidden items-center gap-2 sm:flex">
                            <span className="text-muted-foreground">/</span>
                            <Link
                                href={`/${distro.id}`}
                                className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium transition-colors hover:bg-secondary"
                                style={{ color: distro.color }}
                            >
                                {distro.name}
                            </Link>
                        </div>
                    )}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2">
                    {/* Search Button */}
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="flex h-9 items-center gap-2 rounded-lg bg-secondary px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:min-w-[200px]"
                    >
                        <Search className="h-4 w-4" />
                        <span className="hidden sm:inline">Qidirish...</span>
                        <kbd className="ml-auto hidden rounded bg-muted px-1.5 text-xs font-medium sm:inline">
                            ⌘K
                        </kbd>
                    </button>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* GitHub Link */}
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-accent"
                        aria-label="GitHub"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}
