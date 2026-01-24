import { MetadataRoute } from "next";

const baseUrl = "https://linuxhub.uz";

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/nixos`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/manjaro`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kali`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/parrot`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
    ];

    // NixOS documentation pages
    const nixosPages = [
        "install",
        "introduction",
        "concepts/flakes",
        "nix-language/overview",
        "tutorials/first-steps",
        "guides/recipes",
        "packaging/existing-software",
        "contributing/how-to-contribute",
        "reference/glossary",
    ].map((slug) => ({
        url: `${baseUrl}/nixos/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...nixosPages];
}
