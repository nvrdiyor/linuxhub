export interface DocFrontmatter {
    title: string;
    description: string;
    order?: number;
    category?: string;
    lastUpdated?: string;
    author?: string;
    tags?: string[];
}

export interface BreadcrumbItem {
    label: string;
    href: string;
}

export interface SearchResult {
    title: string;
    description: string;
    slug: string;
    distro: string;
    category?: string;
    highlight?: string;
}

export type Theme = "light" | "dark" | "system";

export interface PageProps {
    params: Promise<{
        distro: string;
        slug?: string[];
    }>;
}
