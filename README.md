<div align="center">

<img src="public/linuhublogo.png" alt="LinuxHubuz" width="160" />

# LinuxHubuz

**The Uzbek-language Linux learning platform.**

[linuxhub.uz](https://linuxhub.uz) · [Telegram](https://t.me/linuxhub_uz) · [Roadmap](docs/ROADMAP.md) · [Audit](docs/AUDIT.md) · [Contributing](CONTRIBUTING.md)

</div>

---

LinuxHubuz teaches Linux in Uzbek, end to end — from "what is a kernel" to writing a systemd service. Lessons are based on **official documentation only** ([kernel.org](https://www.kernel.org), [ubuntu.com](https://ubuntu.com), [debian.org/doc](https://www.debian.org/doc), [wiki.archlinux.org](https://wiki.archlinux.org), [nixos.org/manual](https://nixos.org/manual), [kali.org/docs](https://www.kali.org/docs), [parrotsec.org/docs](https://parrotsec.org/docs)) and every claim is cited.

## What's inside

- A **15-lesson "Linux Asoslari"** course taking learners from beginner to advanced.
- **Distro paths** for Ubuntu, Debian, NixOS, Kali, Parrot, and Manjaro — each grounded in that distribution's official documentation.
- An MDX content pipeline with `Callout`, `Steps`, `Tabs`, `LinuxFamilyTree`, and `LinuxAnatomy` components for rich, interactive lessons.
- Built on Next.js 16 + React 19 + Tailwind v4. Static-first, light/dark theme, mobile-responsive.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) App Router + Turbopack |
| Runtime | React 19 |
| Language | TypeScript (strict) |
| Content | MDX via `next-mdx-remote` + `gray-matter` |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Icons | [lucide-react](https://lucide.dev/) |
| Animation | [framer-motion](https://www.framer.com/motion/) |
| Syntax highlighting | [Shiki](https://shiki.style/) |
| State | [Zustand](https://zustand.docs.pmnd.rs/) (sidebar only) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |

## Running locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

Other scripts:

```bash
npm run build       # Production build
npm run start       # Run the built app
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
```

Node 20+ is recommended (Next 16 + React 19).

## Repository layout

```
linuxhub/
├── content/                 # All learning content (MDX)
│   ├── fundamentals/        # Linux Asoslari — flagship course
│   ├── ubuntu/  debian/     # Distro paths
│   ├── nixos/  kali/
│   ├── parrot/  manjaro/
├── src/
│   ├── app/                 # Next.js App Router routes
│   │   ├── [distro]/[...slug]/page.tsx   # Dynamic lesson route
│   │   ├── layout.tsx
│   │   └── page.tsx                       # Homepage
│   ├── components/
│   │   ├── content/         # MDX components (Callout, Steps, Tabs, ...)
│   │   ├── home/            # Homepage components
│   │   ├── layout/          # Header, Footer, Sidebar
│   │   └── providers/       # ThemeProvider
│   ├── config/
│   │   ├── distros.ts       # Per-distro nav structure (source of truth)
│   │   └── site.ts          # Site name, URL, keywords
│   ├── lib/                 # Server-side helpers (content.ts, utils.ts, store.ts)
│   └── types/
├── public/                  # Static assets (logo, favicon, manifest, distro logos)
├── docs/                    # Maintainer docs (AUDIT.md, ROADMAP.md)
└── package.json
```

## Adding a lesson

1. Find the slug you want to write in [src/config/distros.ts](src/config/distros.ts). If it doesn't exist, add a new `{ title, slug }` entry in the appropriate section.
2. Create the MDX file at `content/<distro>/<slug>.mdx`.
3. Use the **lesson template** documented in [docs/ROADMAP.md §3](docs/ROADMAP.md#3-lesson-template-canonical).
4. **Cite official sources** in the frontmatter `references:` block. See [docs/ROADMAP.md §4](docs/ROADMAP.md#4-source-rules) for what counts as an official source.
5. Open a pull request. The [CONTRIBUTING.md](CONTRIBUTING.md) checklist guides review.

### Lesson frontmatter (minimal)

```yaml
---
title: "Linux nima?"
description: "Linux operatsion tizimi haqida — kernel, distributivlar va ochiq kodli falsafa."
order: 1
level: "beginner"
estimated_minutes: 7
prerequisites: []
learning_objectives:
  - "Linux yadrosi va operatsion tizim farqini izohlash"
  - "Asosiy distributivlarni sanab o'tish"
tags: ["beginner", "kernel", "history"]
lastUpdated: "2026-05-26"
author: "LinuxHubuz jamoasi"
references:
  - title: "kernel.org — about"
    url: "https://www.kernel.org/category/about.html"
  - title: "GNU Project — Linux and GNU"
    url: "https://www.gnu.org/gnu/linux-and-gnu.html"
---
```

## Contributing

We welcome contributors. Read [CONTRIBUTING.md](CONTRIBUTING.md) first.

Quick paths:

- **Fix a typo or translation issue:** open a PR directly.
- **Write a new lesson:** check [docs/ROADMAP.md](docs/ROADMAP.md), open an issue to claim a slug, then send a PR.
- **Improve the platform:** see open issues, or read [docs/AUDIT.md](docs/AUDIT.md) for the prioritized fix list.

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

## Reporting security issues

Don't open a public GitHub issue. See [SECURITY.md](SECURITY.md) for the disclosure process.

## License

LinuxHubuz is released under the [MIT License](LICENSE). Content (the `content/` directory) is additionally licensed under **CC BY 4.0** unless a specific file declares otherwise — see [CONTRIBUTING.md §License](CONTRIBUTING.md#license-of-your-contributions) for details.

## Acknowledgements

This project is only possible because the upstream Linux community maintains excellent documentation. Specific thanks to:

- The kernel maintainers at [kernel.org](https://www.kernel.org)
- The GNU Project at [gnu.org](https://www.gnu.org)
- Canonical's docs team ([documentation.ubuntu.com](https://documentation.ubuntu.com))
- The Debian Documentation Project ([debian.org/doc](https://www.debian.org/doc))
- The ArchWiki contributors ([wiki.archlinux.org](https://wiki.archlinux.org))
- The NixOS / nix.dev team ([nix.dev](https://nix.dev))
- The Kali Linux and Parrot OS doc teams
- The Manjaro Wiki team

LinuxHubuz is an independent project. We are not affiliated with any of the above.
