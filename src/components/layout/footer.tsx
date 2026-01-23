import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-muted/50">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                                L
                            </div>
                            <span className="text-lg font-bold">{siteConfig.name}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold">Distributivlar</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/nixos" className="transition-colors hover:text-foreground">
                                    NixOS
                                </Link>
                            </li>
                            <li>
                                <Link href="/kali" className="transition-colors hover:text-foreground">
                                    Kali Linux
                                </Link>
                            </li>
                            <li>
                                <Link href="/parrot" className="transition-colors hover:text-foreground">
                                    Parrot OS
                                </Link>
                            </li>
                            <li>
                                <Link href="/manjaro" className="transition-colors hover:text-foreground">
                                    Manjaro
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold">Bog'lanish</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href={siteConfig.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-foreground"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={siteConfig.links.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-foreground"
                                >
                                    Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © {currentYear} {siteConfig.name}. Barcha huquqlar himoyalangan.
                    </p>
                    <p className="mt-1">
                        O'zbek hamjamiyati uchun sevgi bilan yaratilgan ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}
