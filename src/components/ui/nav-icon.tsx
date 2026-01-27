import { BookOpen, Download, Settings, Code, Terminal, Shield, Layers, Cpu, Package, Palette, LucideIcon } from "lucide-react";
import { type IconName } from "@/config/distros";

interface NavIconProps {
    name: IconName | undefined;
    className?: string;
}

export function NavIcon({ name, className = "h-4 w-4" }: NavIconProps) {
    if (!name) return null;

    const icons: Record<IconName, LucideIcon> = {
        "book-open": BookOpen,
        "download": Download,
        "settings": Settings,
        "code": Code,
        "terminal": Terminal,
        "shield": Shield,
        "layers": Layers,
        "cpu": Cpu,
        "package": Package,
        "palette": Palette,
    };

    const Icon = icons[name];
    return Icon ? <Icon className={className} /> : null;
}
