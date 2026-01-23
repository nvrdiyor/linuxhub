import { BookOpen, Download, Settings, Code, Terminal, Shield, Layers, Cpu } from "lucide-react";
import { type IconName } from "@/config/distros";

interface NavIconProps {
    name: IconName | undefined;
    className?: string;
}

export function NavIcon({ name, className = "h-4 w-4" }: NavIconProps) {
    if (!name) return null;

    const icons: Record<IconName, React.ElementType> = {
        "book-open": BookOpen,
        "download": Download,
        "settings": Settings,
        "code": Code,
        "terminal": Terminal,
        "shield": Shield,
        "layers": Layers,
        "cpu": Cpu,
    };

    const Icon = icons[name];
    return Icon ? <Icon className={className} /> : null;
}
