import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
    // Current active distro
    currentDistro: string | null;

    // Expanded navigation sections (by section id)
    expandedSections: string[];

    // Mobile menu state
    mobileMenuOpen: boolean;

    // Search dialog state
    searchOpen: boolean;

    // Actions
    setCurrentDistro: (distro: string | null) => void;
    toggleSection: (sectionId: string) => void;
    expandSection: (sectionId: string) => void;
    collapseSection: (sectionId: string) => void;
    setMobileMenuOpen: (open: boolean) => void;
    setSearchOpen: (open: boolean) => void;
    resetNavigation: () => void;
}

export const useSidebarStore = create<SidebarState>()(
    persist(
        (set, get) => ({
            currentDistro: null,
            expandedSections: [],
            mobileMenuOpen: false,
            searchOpen: false,

            setCurrentDistro: (distro) => {
                set({
                    currentDistro: distro,
                    // Reset expanded sections when switching distros
                    expandedSections: distro ? ["getting-started"] : [],
                });
            },

            toggleSection: (sectionId) => {
                const { expandedSections } = get();
                const isExpanded = expandedSections.includes(sectionId);

                set({
                    expandedSections: isExpanded
                        ? expandedSections.filter((id) => id !== sectionId)
                        : [...expandedSections, sectionId],
                });
            },

            expandSection: (sectionId) => {
                const { expandedSections } = get();
                if (!expandedSections.includes(sectionId)) {
                    set({ expandedSections: [...expandedSections, sectionId] });
                }
            },

            collapseSection: (sectionId) => {
                const { expandedSections } = get();
                set({
                    expandedSections: expandedSections.filter((id) => id !== sectionId),
                });
            },

            setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

            setSearchOpen: (open) => set({ searchOpen: open }),

            resetNavigation: () => {
                set({
                    currentDistro: null,
                    expandedSections: [],
                    mobileMenuOpen: false,
                });
            },
        }),
        {
            name: "linuxhub-sidebar",
            partialize: (state) => ({
                expandedSections: state.expandedSections,
            }),
        }
    )
);

// Theme store for dark/light mode management
interface ThemeState {
    theme: "light" | "dark" | "system";
    setTheme: (theme: "light" | "dark" | "system") => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: "system",
            setTheme: (theme) => set({ theme }),
        }),
        {
            name: "linuxhub-theme",
        }
    )
);
