import { Hero } from "@/components/home/hero";
import { DistroCard } from "@/components/home/distro-card";
import { distros } from "@/config/distros";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Distros Section */}
      <section className="py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Distributivni tanlang</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              O'zingizga mos Linux distributivini tanlang va o'zbek tilida o'rganishni boshlang.
              Har bir distributiv uchun batafsil qo'llanmalar mavjud.
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
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Nima uchun LinuxHub?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="O'zbek tilida"
              description="Barcha qo'llanmalar o'zbek tilida yozilgan. Murakkab texnik atamalar tushunarli tarzda tushuntirilgan."
              icon="🇺🇿"
            />
            <FeatureCard
              title="Amaliy misollar"
              description="Har bir mavzu amaliy misollar bilan tasvirlangan. Kodni nusxalash va sinab ko'rish oson."
              icon="💻"
            />
            <FeatureCard
              title="Hamjamiyat"
              description="Telegram guruhimizda savol bering va tajribali foydalanuvchilardan yordam oling."
              icon="👥"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold">Tayyor bo'lsangiz, boshlang!</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Linux dunyosiga birinchi qadamingizni qo'ying.
              NixOS bilan boshlashni tavsiya qilamiz — u eng zamonaviy va xavfsiz distributivlardan biri.
            </p>
            <a
              href="/nixos/introduction"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              NixOS bilan boshlash
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
