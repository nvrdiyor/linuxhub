import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getReadingTime } from "./utils";

// Content directory path
const contentDirectory = path.join(process.cwd(), "content");

export interface DocMeta {
    title: string;
    description: string;
    slug: string;
    distro: string;
    category?: string;
    order: number;
    lastUpdated: string;
    author?: string;
    tags?: string[];
}

export interface TableOfContentsItem {
    id: string;
    title: string;
    level: number;
}

export interface DocContent extends DocMeta {
    content: string;
    readingTime: number;
    toc: TableOfContentsItem[];
}

/**
 * Get all documentation files for a specific distro
 */
export function getAllDocs(distro: string): DocMeta[] {
    const distroDir = path.join(contentDirectory, distro);

    if (!fs.existsSync(distroDir)) {
        return [];
    }

    const docs: DocMeta[] = [];

    function walkDir(dir: string, basePath: string = "") {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                walkDir(filePath, path.join(basePath, file));
            } else if (file.endsWith(".mdx")) {
                const slug = path.join(basePath, file.replace(/\.mdx$/, "")).replace(/\\/g, "/");
                const fileContent = fs.readFileSync(filePath, "utf-8");
                const { data } = matter(fileContent);

                docs.push({
                    title: data.title || slug,
                    description: data.description || "",
                    slug,
                    distro,
                    category: data.category,
                    order: data.order ?? 999,
                    lastUpdated: data.lastUpdated || new Date().toISOString(),
                    author: data.author,
                    tags: data.tags,
                });
            }
        }
    }

    walkDir(distroDir);

    return docs.sort((a, b) => a.order - b.order);
}

/**
 * Get a single document by distro and slug
 */
export function getDocBySlug(distro: string, slug: string): DocContent | null {
    // Handle both array slugs and string slugs
    const slugPath = Array.isArray(slug) ? slug.join("/") : slug;
    const filePath = path.join(contentDirectory, distro, `${slugPath}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Extract table of contents from headings
    const toc = extractToc(content);

    return {
        title: data.title || slugPath,
        description: data.description || "",
        slug: slugPath,
        distro,
        category: data.category,
        order: data.order ?? 999,
        lastUpdated: data.lastUpdated || new Date().toISOString(),
        author: data.author,
        tags: data.tags,
        content,
        readingTime: getReadingTime(content),
        toc,
    };
}

/**
 * Extract table of contents from MDX content
 */
function extractToc(content: string): TableOfContentsItem[] {
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const toc: TableOfContentsItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const title = match[2].trim();
        const id = title
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

        toc.push({ id, title, level });
    }

    return toc;
}

/**
 * Check if content exists for a distro
 */
export function distroHasContent(distro: string): boolean {
    const distroDir = path.join(contentDirectory, distro);
    return fs.existsSync(distroDir);
}

/**
 * Get all available slugs for static generation
 */
export function getAllDocSlugs(): { distro: string; slug: string[] }[] {
    const slugs: { distro: string; slug: string[] }[] = [];

    if (!fs.existsSync(contentDirectory)) {
        return slugs;
    }

    const distros = fs.readdirSync(contentDirectory).filter((file) => {
        return fs.statSync(path.join(contentDirectory, file)).isDirectory();
    });

    for (const distro of distros) {
        const docs = getAllDocs(distro);
        for (const doc of docs) {
            slugs.push({
                distro,
                slug: doc.slug.split("/"),
            });
        }
    }

    return slugs;
}

/**
 * Get doc count per distro
 */
export function getDocCount(distro: string): number {
    return getAllDocs(distro).length;
}

/**
 * Get total doc count across all distros
 */
export function getTotalDocCount(): number {
    if (!fs.existsSync(contentDirectory)) {
        return 0;
    }

    const distros = fs.readdirSync(contentDirectory).filter((file) => {
        return fs.statSync(path.join(contentDirectory, file)).isDirectory();
    });

    return distros.reduce((total, distro) => total + getDocCount(distro), 0);
}
