"use client";

import { ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
    children: ReactNode;
    className?: string;
    filename?: string;
}

export function CodeBlock({ children, className, filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    // Extract language from className (e.g., "language-bash")
    const language = className?.replace("language-", "") || "text";

    const copyToClipboard = async () => {
        const code = typeof children === "string"
            ? children
            : (children as any)?.props?.children || "";

        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group relative my-4 overflow-hidden rounded-lg border border-border bg-card">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                <div className="flex items-center gap-2">
                    {/* Dots */}
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/60" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                        <div className="h-3 w-3 rounded-full bg-green-500/60" />
                    </div>

                    {/* Filename or language */}
                    <span className="ml-2 text-xs font-medium text-muted-foreground">
                        {filename || language}
                    </span>
                </div>

                {/* Copy button */}
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                    {copied ? (
                        <>
                            <Check className="h-3 w-3 text-success" />
                            Nusxalandi!
                        </>
                    ) : (
                        <>
                            <Copy className="h-3 w-3" />
                            Nusxalash
                        </>
                    )}
                </button>
            </div>

            {/* Code */}
            <pre className="overflow-x-auto p-4 text-sm">
                <code className={className}>{children}</code>
            </pre>
        </div>
    );
}
