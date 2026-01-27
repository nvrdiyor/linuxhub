"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayerItem {
    name: string;
    icon: string;
    color: string;
    description: string;
    type?: "full-de" | "wm";
}

interface Layer {
    id: string;
    name: string;
    nameUz: string;
    color: string;
    bgGradient: string;
    description: string;
    items?: LayerItem[];
}

const anatomyLayers: Layer[] = [
    {
        id: "de",
        name: "Desktop Environment / Window Manager",
        nameUz: "Ish stoli muhiti",
        color: "#818cf8",
        bgGradient: "from-indigo-500/20 to-purple-500/20",
        description: "Foydalanuvchi interfeysini boshqaradi",
        items: [
            // Full Desktop Environments
            { name: "GNOME", icon: "🦶", color: "#4A86CF", description: "Zamonaviy, oddiy", type: "full-de" },
            { name: "KDE Plasma", icon: "🌀", color: "#1D99F3", description: "Moslashuvchan, kuchli", type: "full-de" },
            { name: "XFCE", icon: "🐭", color: "#2284F2", description: "Yengil, tez", type: "full-de" },
            { name: "Cinnamon", icon: "🍂", color: "#DC682E", description: "An'anaviy stil", type: "full-de" },
            { name: "MATE", icon: "🧉", color: "#9DDA5B", description: "GNOME 2 davomchisi", type: "full-de" },
            // Window Managers
            { name: "Hyprland", icon: "⬡", color: "#00D4FF", description: "Wayland tiling WM", type: "wm" },
            { name: "i3wm", icon: "▦", color: "#3498db", description: "X11 tiling WM", type: "wm" },
            { name: "Sway", icon: "◧", color: "#68B5E8", description: "i3 Wayland uchun", type: "wm" },
            { name: "AwesomeWM", icon: "◉", color: "#535D6C", description: "Lua bilan moslash", type: "wm" },
            { name: "bspwm", icon: "◫", color: "#4C4C4C", description: "Binary space WM", type: "wm" },
        ],
    },
    {
        id: "display",
        name: "Display Server",
        nameUz: "Displey server",
        color: "#f59e0b",
        bgGradient: "from-amber-500/20 to-orange-500/20",
        description: "Grafika chiqarishni boshqaradi",
        items: [
            { name: "X11 / Xorg", icon: "🖥️", color: "#F5A623", description: "Eski, ishonchli (1984)" },
            { name: "Wayland", icon: "🌊", color: "#FFB800", description: "Zamonaviy, xavfsiz" },
        ],
    },
    {
        id: "shell",
        name: "Shell / Terminal",
        nameUz: "Shell / Terminal",
        color: "#22c55e",
        bgGradient: "from-green-500/20 to-emerald-500/20",
        description: "Buyruqlarni bajaradi",
        items: [
            { name: "Bash", icon: "💲", color: "#4EAA25", description: "Standart shell" },
            { name: "Zsh", icon: "⚡", color: "#F15A24", description: "Kengaytirilgan shell" },
            { name: "Fish", icon: "🐟", color: "#FF9800", description: "User-friendly shell" },
        ],
    },
    {
        id: "kernel",
        name: "Linux Kernel",
        nameUz: "Linux yadrosi",
        color: "#ef4444",
        bgGradient: "from-red-500/20 to-rose-500/20",
        description: "Hardware va dasturlar o'rtasidagi ko'prik",
        items: [
            { name: "Process mgmt", icon: "⚙️", color: "#ef4444", description: "Jarayonlarni boshqarish" },
            { name: "Memory mgmt", icon: "💾", color: "#ef4444", description: "Xotirani boshqarish" },
            { name: "Drivers", icon: "🔌", color: "#ef4444", description: "Qurilma driverlari" },
            { name: "Filesystem", icon: "📁", color: "#ef4444", description: "Fayl tizimlari" },
        ],
    },
    {
        id: "hardware",
        name: "Hardware",
        nameUz: "Qurilmalar",
        color: "#64748b",
        bgGradient: "from-slate-500/20 to-zinc-500/20",
        description: "Fizik komponentlar",
        items: [
            { name: "CPU", icon: "🧠", color: "#64748b", description: "Markaziy protsessor" },
            { name: "RAM", icon: "📊", color: "#64748b", description: "Operativ xotira" },
            { name: "Storage", icon: "💿", color: "#64748b", description: "Doimiy xotira" },
            { name: "GPU", icon: "🎮", color: "#64748b", description: "Grafik protsessor" },
            { name: "Network", icon: "🌐", color: "#64748b", description: "Tarmoq kartasi" },
        ],
    },
];

interface LayerRowProps {
    layer: Layer;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}

function LayerRow({ layer, index, isExpanded, onToggle }: LayerRowProps) {
    const isDE = layer.id === "de";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
        >
            {/* Connection line to next layer */}
            {index < anatomyLayers.length - 1 && (
                <div className="absolute left-1/2 -bottom-4 w-0.5 h-8 bg-linear-to-b from-border to-transparent z-0" />
            )}

            {/* Layer card */}
            <motion.button
                onClick={onToggle}
                whileHover={{ scale: 1.01 }}
                className={`relative w-full p-4 rounded-2xl border-2 transition-all bg-linear-to-r ${layer.bgGradient}`}
                style={{ borderColor: layer.color }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Layer number */}
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: layer.color }}
                        >
                            {anatomyLayers.length - index}
                        </div>
                        <div className="text-left">
                            <div className="font-bold">{layer.nameUz}</div>
                            <div className="text-sm text-muted-foreground">{layer.description}</div>
                        </div>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-muted-foreground"
                    >
                        ▼
                    </motion.div>
                </div>
            </motion.button>

            {/* Expanded items */}
            <AnimatePresence>
                {isExpanded && layer.items && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 pb-2 px-4">
                            {isDE ? (
                                /* Desktop Environment special layout */
                                <div className="space-y-4">
                                    {/* Full DEs */}
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            To'liq ish stoli muhitlari (DE)
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {layer.items
                                                .filter((i) => i.type === "full-de")
                                                .map((item) => (
                                                    <DEItem key={item.name} item={item} />
                                                ))}
                                        </div>
                                    </div>
                                    {/* Window Managers */}
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-cyan-500" />
                                            Window Managerlar (WM) - Mutaxassislar uchun
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {layer.items
                                                .filter((i) => i.type === "wm")
                                                .map((item) => (
                                                    <DEItem key={item.name} item={item} isWM />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Regular items */
                                <div className="flex flex-wrap gap-2">
                                    {layer.items.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border"
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            <div>
                                                <div className="text-sm font-medium">{item.name}</div>
                                                <div className="text-xs text-muted-foreground">{item.description}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function DEItem({ item, isWM = false }: { item: LayerItem; isWM?: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
        >
            <div
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all cursor-pointer ${isWM ? "bg-card" : "bg-card"
                    }`}
                style={{
                    borderColor: isHovered ? item.color : "transparent",
                    boxShadow: isHovered ? `0 0 20px ${item.color}40` : undefined,
                }}
            >
                <span className="text-xl">{item.icon}</span>
                <div className="font-medium text-sm">{item.name}</div>
            </div>

            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs whitespace-nowrap z-50 shadow-xl"
                    >
                        {item.description}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function LinuxAnatomy() {
    const [expandedLayers, setExpandedLayers] = useState<string[]>(["de"]);

    const toggleLayer = (id: string) => {
        setExpandedLayers((prev) =>
            prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
        );
    };

    return (
        <div className="my-8 space-y-4">
            {/* Header */}
            <div className="text-center mb-6">
                <h3 className="font-bold text-xl mb-2">Linux Anatomiyasi</h3>
                <p className="text-sm text-muted-foreground">
                    Har bir qatlamni bosib, ichidagi komponentlarni ko'ring
                </p>
            </div>

            {/* Layers */}
            <div className="relative space-y-6">
                {anatomyLayers.map((layer, index) => (
                    <LayerRow
                        key={layer.id}
                        layer={layer}
                        index={index}
                        isExpanded={expandedLayers.includes(layer.id)}
                        onToggle={() => toggleLayer(layer.id)}
                    />
                ))}
            </div>

            {/* Legend */}
            <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border text-center">
                <p className="text-sm text-muted-foreground">
                    💡 <strong>Maslahat:</strong> Desktop Environment (DE) to'liq interfeys beradi,
                    Window Manager (WM) faqat oynalarni boshqaradi — tajribali foydalanuvchilar uchun.
                </p>
            </div>
        </div>
    );
}
