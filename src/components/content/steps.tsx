import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StepsProps {
    children: ReactNode;
}

export function Steps({ children }: StepsProps) {
    return (
        <div className="my-6 ml-4 border-l-2 border-border pl-6 [counter-reset:step]">
            {children}
        </div>
    );
}

interface StepProps {
    title?: string;
    children: ReactNode;
}

export function Step({ title, children }: StepProps) {
    return (
        <div className="relative pb-6 last:pb-0 [counter-increment:step]">
            {/* Step number */}
            <div className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary before:content-[counter(step)]" />

            {/* Content */}
            <div className="pt-0.5">
                {title && (
                    <h4 className="mb-2 font-semibold">{title}</h4>
                )}
                <div className="text-muted-foreground">{children}</div>
            </div>
        </div>
    );
}
