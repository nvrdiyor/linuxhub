"use client";

import { motion } from "framer-motion";
import { Terminal, BookOpen, Users, Zap } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 sm:py-28">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                        <Terminal className="h-4 w-4" />
                        O'zbek tilidagi Linux qo'llanmalar
                    </motion.div>

                    {/* Heading */}
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="block">Linux dunyosiga</span>
                        <span className="block mt-2 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                            Xush kelibsiz!
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        NixOS, Kali Linux, Parrot OS va Manjaro distributivlarini o'zbek tilida o'rganing.
                        Boshlang'ichdan ilg'or darajagacha — biz bilan birga o'rganing.
                    </p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                        <StatCard
                            icon={BookOpen}
                            value="4"
                            label="Distributiv"
                            color="text-blue-500"
                        />
                        <StatCard
                            icon={Terminal}
                            value="50+"
                            label="Maqolalar"
                            color="text-green-500"
                        />
                        <StatCard
                            icon={Users}
                            value="100%"
                            label="Bepul"
                            color="text-purple-500"
                        />
                        <StatCard
                            icon={Zap}
                            value="24/7"
                            label="Ochiq"
                            color="text-orange-500"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

interface StatCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
    color: string;
}

function StatCard({ icon: Icon, value, label, color }: StatCardProps) {
    return (
        <div className="rounded-xl border border-border bg-card p-4 text-center">
            <Icon className={`mx-auto mb-2 h-5 w-5 ${color}`} />
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
        </div>
    );
}
