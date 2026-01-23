"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { useSidebarStore } from "@/lib/store";

export default function DistroLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const params = useParams();
    const distroId = params.distro as string;
    const { setCurrentDistro } = useSidebarStore();

    // eslint-disable-next-line react-compiler/react-compiler
    useEffect(() => {
        setCurrentDistro(distroId);

        return () => {
            // Don't reset on unmount - keep it for navigation
        };
    }, [distroId, setCurrentDistro]);

    return (
        <div className="flex min-h-[calc(100vh-4rem)]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 lg:pl-0">
                {children}
            </div>
        </div>
    );
}
