import { ReactNode } from "react";
import { AlertCircle, AlertTriangle, Info, Lightbulb, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "danger" | "tip" | "success";

interface CalloutProps {
    type?: CalloutType;
    title?: string;
    children: ReactNode;
}

const calloutConfig: Record<CalloutType, { icon: React.ElementType; className: string }> = {
    info: {
        icon: Info,
        className: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    },
    warning: {
        icon: AlertTriangle,
        className: "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    },
    danger: {
        icon: AlertCircle,
        className: "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-400",
    },
    tip: {
        icon: Lightbulb,
        className: "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-400",
    },
    success: {
        icon: CheckCircle2,
        className: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400",
    },
};

const calloutTitles: Record<CalloutType, string> = {
    info: "Ma'lumot",
    warning: "Ogohlantirish",
    danger: "Diqqat",
    tip: "Maslahat",
    success: "Muvaffaqiyat",
};

export function Callout({ type = "info", title, children }: CalloutProps) {
    const config = calloutConfig[type];
    const Icon = config.icon;
    const displayTitle = title || calloutTitles[type];

    return (
        <div
            className={cn(
                "my-4 rounded-lg border-l-4 p-4",
                config.className
            )}
        >
            <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div className="flex-1">
                    <p className="font-semibold">{displayTitle}</p>
                    <div className="mt-1 text-sm opacity-90">{children}</div>
                </div>
            </div>
        </div>
    );
}
