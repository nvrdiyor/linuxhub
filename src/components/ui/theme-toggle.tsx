"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // eslint-disable-next-line react-compiler/react-compiler
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"
                aria-label="Toggle theme"
            >
                <Moon className="h-4 w-4" />
            </button>
        );
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors hover:bg-accent"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Yorug' rejim" : "Qorong'u rejim"}
        >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
}
