"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebarStore } from "@/lib/store";
import { getDistroById, type NavSection, type NavItem } from "@/config/distros";
import { NavIcon } from "@/components/ui/nav-icon";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function Sidebar() {
    const pathname = usePathname();
    const { currentDistro, expandedSections, toggleSection, expandSection, mobileMenuOpen, setMobileMenuOpen } = useSidebarStore();

    const distro = currentDistro ? getDistroById(currentDistro) : null;

    // Auto-expand section containing current page
    useEffect(() => {
        if (!distro) return;

        for (const section of distro.navigation) {
            for (const item of section.items) {
                if (pathname === `/${distro.id}/${item.slug}`) {
                    expandSection(section.id);
                    break;
                }
            }
        }
    }, [pathname, distro, expandSection]);

    // Close mobile menu on navigation
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname, setMobileMenuOpen]);

    if (!distro) {
        return null;
    }

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 overflow-y-auto border-r border-border bg-sidebar-bg transition-transform lg:sticky lg:translate-x-0",
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Distro Header */}
                <div
                    className="sticky top-0 border-b border-sidebar-border bg-sidebar-bg p-4"
                    style={{ borderLeftColor: distro.color, borderLeftWidth: "4px" }}
                >
                    <h2 className="text-lg font-bold" style={{ color: distro.color }}>
                        {distro.name}
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {distro.description}
                    </p>
                </div>

                {/* Navigation */}
                <nav className="p-4">
                    {distro.navigation.map((section) => (
                        <NavSectionComponent
                            key={section.id}
                            section={section}
                            distroId={distro.id}
                            isExpanded={expandedSections.includes(section.id)}
                            onToggle={() => toggleSection(section.id)}
                            currentPath={pathname}
                        />
                    ))}
                </nav>

                {/* Back to Home */}
                <div className="border-t border-sidebar-border p-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ChevronRight className="h-4 w-4 rotate-180" />
                        Bosh sahifaga qaytish
                    </Link>
                </div>
            </aside>
        </>
    );
}

interface NavSectionProps {
    section: NavSection;
    distroId: string;
    isExpanded: boolean;
    onToggle: () => void;
    currentPath: string;
}

function NavSectionComponent({ section, distroId, isExpanded, onToggle, currentPath }: NavSectionProps) {
    return (
        <div className="mb-2">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
                <span className="flex items-center gap-2">
                    <NavIcon name={section.iconName} className="h-4 w-4 text-muted-foreground" />
                    {section.title}
                </span>
                <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 overflow-hidden border-l border-border pl-2"
                    >
                        {section.items.map((item) => (
                            <NavItemComponent
                                key={item.slug}
                                item={item}
                                distroId={distroId}
                                isActive={currentPath === `/${distroId}/${item.slug}`}
                            />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

interface NavItemProps {
    item: NavItem;
    distroId: string;
    isActive: boolean;
}

function NavItemComponent({ item, distroId, isActive }: NavItemProps) {
    return (
        <li>
            <Link
                href={`/${distroId}/${item.slug}`}
                className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
            >
                {item.title}
            </Link>
        </li>
    );
}
