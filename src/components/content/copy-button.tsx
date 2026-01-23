"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
    code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
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
    );
}
