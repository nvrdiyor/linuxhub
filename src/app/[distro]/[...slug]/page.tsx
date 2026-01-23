import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getDocBySlug, getAllDocSlugs } from "@/lib/content";
import { getDistroById, getAllDistroSlugs } from "@/config/distros";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import { CodeBlock, Callout, Steps, Step, Tabs, TabList, TabTrigger, TabContent } from "@/components/content";

// MDX components
const mdxComponents = {
    pre: ({ children, ...props }: any) => <CodeBlock {...props}>{children}</CodeBlock>,
    Callout,
    Steps,
    Step,
    Tabs,
    TabList,
    TabTrigger,
    TabContent,
};

interface DocPageProps {
    params: Promise<{ distro: string; slug: string[] }>;
}

export async function generateStaticParams() {
    const contentSlugs = getAllDocSlugs();
    const configSlugs = getAllDistroSlugs();

    // Combine both sources
    const allSlugs = [...contentSlugs, ...configSlugs];

    return allSlugs.map(({ distro, slug }) => ({
        distro,
        slug,
    }));
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
    const { distro, slug } = await params;
    const slugPath = slug.join("/");
    const doc = getDocBySlug(distro, slugPath);
    const distroConfig = getDistroById(distro);

    if (!doc || !distroConfig) {
        return {
            title: "Sahifa topilmadi",
        };
    }

    return {
        title: `${doc.title} | ${distroConfig.name}`,
        description: doc.description,
        openGraph: {
            title: `${doc.title} | ${distroConfig.name} | ${siteConfig.name}`,
            description: doc.description,
            type: "article",
            url: `${siteConfig.url}/${distro}/${slugPath}`,
        },
    };
}

export default async function DocPage({ params }: DocPageProps) {
    const { distro, slug } = await params;
    const slugPath = slug.join("/");
    const doc = getDocBySlug(distro, slugPath);
    const distroConfig = getDistroById(distro);

    if (!distroConfig) {
        notFound();
    }

    // If no MDX content found, show placeholder
    if (!doc) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
                <PlaceholderContent distro={distroConfig.name} slug={slugPath} />
            </div>
        );
    }

    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                    Bosh sahifa
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link
                    href={`/${distro}`}
                    className="hover:text-foreground"
                    style={{ color: distroConfig.color }}
                >
                    {distroConfig.name}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">{doc.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8 border-b border-border pb-8">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">{doc.title}</h1>
                {doc.description && (
                    <p className="mb-4 text-lg text-muted-foreground">{doc.description}</p>
                )}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {doc.readingTime} daqiqa o'qish
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(doc.lastUpdated)}
                    </span>
                </div>
            </header>

            {/* Table of Contents */}
            {doc.toc.length > 0 && (
                <nav className="mb-8 rounded-lg border border-border bg-muted/30 p-4">
                    <h2 className="mb-3 text-sm font-semibold">Mundarija</h2>
                    <ul className="space-y-2 text-sm">
                        {doc.toc.map((item) => (
                            <li
                                key={item.id}
                                style={{ paddingLeft: `${(item.level - 2) * 0.75}rem` }}
                            >
                                <a
                                    href={`#${item.id}`}
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Content */}
            <div className="prose">
                <MDXRemote
                    source={doc.content}
                    components={mdxComponents}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                        },
                    }}
                />
            </div>

            {/* Navigation */}
            <nav className="mt-12 flex items-center justify-between border-t border-border pt-8">
                <Link
                    href={`/${distro}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Orqaga
                </Link>
                <a
                    href={distroConfig.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    Rasmiy hujjatlar
                    <ArrowRight className="h-4 w-4" />
                </a>
            </nav>
        </article>
    );
}

function PlaceholderContent({ distro, slug }: { distro: string; slug: string }) {
    return (
        <div className="text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted text-3xl">
                📝
            </div>
            <h1 className="mb-4 text-3xl font-bold">Kontent tayyorlanmoqda</h1>
            <p className="mb-8 text-lg text-muted-foreground">
                {distro} uchun "{slug.replace(/-/g, " ")}" mavzusi bo'yicha kontent tez orada qo'shiladi.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
                <ArrowLeft className="h-4 w-4" />
                Bosh sahifaga qaytish
            </Link>
        </div>
    );
}
