"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

export function FooterWrapper() {
    const pathname = usePathname();

    // Check if we're in a docs page - don't show footer
    const isDocsPage = pathname.startsWith("/nixos") ||
        pathname.startsWith("/kali") ||
        pathname.startsWith("/parrot") ||
        pathname.startsWith("/manjaro");

    if (isDocsPage) {
        return null;
    }

    return <Footer />;
}
