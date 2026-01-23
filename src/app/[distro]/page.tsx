import { notFound, redirect } from "next/navigation";
import { getDistroById } from "@/config/distros";

interface DistroPageProps {
    params: Promise<{ distro: string }>;
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
