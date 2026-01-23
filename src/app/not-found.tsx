"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <div className="mb-6 text-8xl font-bold text-muted-foreground/20">404</div>

            <h1 className="mb-4 text-3xl font-bold">Sahifa topilmadi</h1>

            <p className="mb-8 max-w-md text-muted-foreground">
                Kechirasiz, siz izlayotgan sahifa mavjud emas yoki ko&apos;chirilgan bo&apos;lishi mumkin.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    <Home className="h-4 w-4" />
                    Bosh sahifaga
                </Link>

                <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Orqaga qaytish
                </button>
            </div>
        </div>
    );
}
