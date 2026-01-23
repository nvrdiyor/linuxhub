import { Hero } from "@/components/home/hero";
import { DistroCard } from "@/components/home/distro-card";
import { distros } from "@/config/distros";
import { BookOpen, Zap, Code, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Distros Section */}
      <section id="distros" className="py-20 relative">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/30 to-transparent" />
        </div>

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <BookOpen className="h-4 w-4" />
              Distributivlar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              O&apos;zingizga mos <span className="gradient-text">distributivni</span> tanlang
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Har bir distributiv uchun batafsil qo&apos;llanmalar mavjud.
              O&apos;zbek tilida yozilgan va doimiy yangilanib turadi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {distros.map((distro, index) => (
              <DistroCard key={distro.id} distro={distro} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-linear-to-r from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-linear-to-l from-purple-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600 dark:text-green-400 mb-4">
              <Zap className="h-4 w-4" />
              Afzalliklar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nima uchun <span className="gradient-text-blue">LinuxHub?</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="O'zbek tilida"
              description="Barcha qo'llanmalar o'zbek tilida yozilgan. Murakkab texnik atamalar tushunarli tarzda tushuntirilgan."
              icon={<span className="text-3xl">🇺🇿</span>}
              gradient="from-blue-500 to-cyan-500"
            />
            <FeatureCard
              title="Amaliy misollar"
              description="Har bir mavzu amaliy misollar bilan tasvirlangan. Kodni nusxalash va sinab ko'rish oson."
              icon={<Code className="h-8 w-8 text-purple-500" />}
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              title="Hamjamiyat"
              description="Telegram guruhimizda savol bering va tajribali foydalanuvchilardan yordam oling."
              icon={<Users className="h-8 w-8 text-orange-500" />}
              gradient="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary via-purple-600 to-pink-600" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Tayyor bo&apos;lsangiz, boshlang!
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                Linux dunyosiga birinchi qadamingizni qo&apos;ying.
                NixOS bilan boshlashni tavsiya qilamiz — u eng zamonaviy va xavfsiz distributivlardan biri.
              </p>
              <Link
                href="/nixos/introduction"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-primary transition-all hover:scale-105 hover:shadow-xl"
              >
                NixOS bilan boshlash
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

function FeatureCard({ title, description, icon, gradient }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 rounded-2xl bg-linear-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

      <div className="relative rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/30 h-full flex flex-col">
        <div className="mb-5 flex justify-center items-center h-16">{icon}</div>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
}
