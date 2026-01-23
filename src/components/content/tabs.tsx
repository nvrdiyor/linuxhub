"use client";

import { ReactNode, useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
    activeTab: string;
    setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

interface TabsProps {
    defaultValue: string;
    children: ReactNode;
}

export function Tabs({ defaultValue, children }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="my-4">{children}</div>
        </TabsContext.Provider>
    );
}

interface TabListProps {
    children: ReactNode;
}

export function TabList({ children }: TabListProps) {
    return (
        <div className="flex gap-1 border-b border-border">
            {children}
        </div>
    );
}

interface TabTriggerProps {
    value: string;
    children: ReactNode;
}

export function TabTrigger({ value, children }: TabTriggerProps) {
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabTrigger must be used within Tabs");

    const { activeTab, setActiveTab } = context;
    const isActive = activeTab === value;

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                isActive
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground"
            )}
        >
            {children}
        </button>
    );
}

interface TabContentProps {
    value: string;
    children: ReactNode;
}

export function TabContent({ value, children }: TabContentProps) {
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabContent must be used within Tabs");

    const { activeTab } = context;

    if (activeTab !== value) return null;

    return <div className="pt-4">{children}</div>;
}
