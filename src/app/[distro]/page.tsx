import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { getDistroById } from "@/config/distros";
import { siteConfig } from "@/config/site";

interface DistroPageProps {
    params: Promise<{ distro: string }>;
}

export async function generateMetadata({ params }: DistroPageProps): Promise<Metadata> {
    const { distro } = await params;
    const distroConfig = getDistroById(distro);

    if (!distroConfig) {
        return {};
    }

    // Canonical should point to the introduction page since this redirects there
    const canonicalUrl = `${siteConfig.url}/${distro}/introduction`;

    return {
        title: `${distroConfig.name} qo'llanmasi`,
        description: `${distroConfig.name} Linux distributivini o'zbek tilida o'rganing`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${distroConfig.name} qo'llanmasi | ${siteConfig.name}`,
            description: `${distroConfig.name} Linux distributivini o'zbek tilida o'rganing`,
            url: canonicalUrl,
        },
    };
}

export default async function DistroPage({ params }: DistroPageProps) {
    const { distro } = await params;
    const distroConfig = getDistroById(distro);

    if (!distroConfig) {
        notFound();
    }

    // Redirect to introduction page
    redirect(`/${distro}/introduction`);
}
