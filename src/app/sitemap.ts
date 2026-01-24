import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const baseUrl = "https://linuxhub.uz";

// Recursively get all MDX files from a directory
function getMdxFiles(dir: string, basePath: string = ""): string[] {
    const files: string[] = [];

    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const itemPath = path.join(dir, item.name);
        const relativePath = basePath ? `${basePath}/${item.name}` : item.name;

        if (item.isDirectory()) {
            files.push(...getMdxFiles(itemPath, relativePath));
        } else if (item.name.endsWith(".mdx")) {
            // Remove .mdx extension
            const slug = relativePath.replace(/\.mdx$/, "");
            files.push(slug);
        }
    }

    return files;
}

// Get all distro folders from content directory
function getDistros(): string[] {
    const contentDir = path.join(process.cwd(), "content");

    if (!fs.existsSync(contentDir)) return [];

    return fs.readdirSync(contentDir, { withFileTypes: true })
        .filter((item) => item.isDirectory())
        .map((item) => item.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
    const distros = getDistros();

    // Home page
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];

    // Distro main pages
    const distroPages: MetadataRoute.Sitemap = distros.map((distro) => ({
        url: `${baseUrl}/${distro}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // All documentation pages for each distro
    const docPages: MetadataRoute.Sitemap = distros.flatMap((distro) => {
        const contentDir = path.join(process.cwd(), "content", distro);
        const mdxFiles = getMdxFiles(contentDir);

        return mdxFiles.map((slug) => ({
            url: `${baseUrl}/${distro}/${slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        }));
    });

    return [...staticPages, ...distroPages, ...docPages];
}
