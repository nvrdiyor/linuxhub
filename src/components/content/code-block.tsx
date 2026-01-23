import { ReactNode } from "react";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
    children: ReactNode;
    className?: string;
    filename?: string;
}

export function CodeBlock({ children, className, filename }: CodeBlockProps) {
    // Extract language from className (e.g., "language-bash")
    const language = className?.replace("language-", "") || "text";

    // Extract code text for copy functionality
    const getCodeText = (): string => {
        if (typeof children === "string") return children;
        if (children && typeof children === "object" && "props" in children) {
            const props = (children as any).props;
            if (typeof props?.children === "string") return props.children;
        }
        return "";
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

                {/* Copy button - client component */}
                <CopyButton code={getCodeText()} />
            </div>

            {/* Code */}
            <pre className="overflow-x-auto p-4 text-sm">
                <code className={className}>{children}</code>
            </pre>
        </div>
    );
}
