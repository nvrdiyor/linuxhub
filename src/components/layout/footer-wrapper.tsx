"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

export function FooterWrapper() {
    const pathname = usePathname();

    // Check if we're in a docs page - don't show footer
    // Add all distro routes here
    const docsRoutes = ["/nixos", "/kali", "/parrot", "/manjaro", "/fundamentals", "/ubuntu"];
    const isDocsPage = docsRoutes.some(route => pathname.startsWith(route));

    if (isDocsPage) {
        return null;
    }

    return <Footer />;
}
