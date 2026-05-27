# LinuxHubuz — Repository Audit

**Date:** 2026-05-26
**Auditor:** Senior maintainer review
**Branch reviewed:** working copy at `C:\Users\Administrator\Desktop\linuxhub`
**Goal:** Prepare the project for a public open-source release as the best Uzbek-language Linux learning platform.

This audit is based on a full read of `src/`, `content/`, `public/`, root configs, and a sampling of every MDX file. It does NOT invent issues — every finding cites a file path and line number.

---

## 1. Executive Summary

LinuxHubuz is a well-scaffolded Next.js 16 + MDX learning site with a solid information architecture for six Linux distros and a fundamentals course. The technical skeleton (App Router, MDX serialization, sitemap, robots, theme system, Zustand sidebar store) is mostly production-grade.

**The dominant gap is content, not code.** Of ~70 navigation slugs declared in [src/config/distros.ts](../src/config/distros.ts), only **27 MDX files exist** — a ~38% completion rate. The five non-fundamentals distros are essentially stubs (one introduction each, plus a handful of NixOS files), and four of those introductions carry a `lastUpdated: "2024-01-15"` timestamp — over two years stale.

**The secondary gap is sourcing.** None of the existing MDX lessons cite official documentation URLs in-line, which violates the project's stated rule ("ONLY use official sources" + "Always cite source URLs"). For a learning platform this is both a credibility problem (users can't verify claims) and a maintenance problem (no way to detect drift when upstream docs change).

**Quick-win technical fixes** (≤1 hour of work each): replace the default Next.js README, add LICENSE/CONTRIBUTING/CODE_OF_CONDUCT/SECURITY, delete the stale `build_error.log`, fix the orphaned `</Callout>` in `content/ubuntu/introduction.mdx`, add a per-page TOC anchor-ID slugifier that handles Cyrillic/Latin-extended Uzbek characters, expose JSON-LD on lesson pages.

The rest of this document enumerates findings by area.

---

## 2. Repository Structure & Tooling

### What's working

- Next.js 16.1.4 App Router with Turbopack — current as of writing.
- Clean separation: `src/app/` (routes), `src/components/` (UI), `src/lib/` (utilities), `src/config/` (data), `content/` (MDX).
- Per-distro dynamic routes via `[distro]/[...slug]/page.tsx` — single template, scales to all distros.
- File-based content with gray-matter frontmatter — easy to contribute to.
- Sitemap and robots are generated from the live filesystem (`src/app/sitemap.ts`, `src/app/robots.ts`).
- `lang="uz"` and `og:locale="uz_UZ"` are set in [src/app/layout.tsx:72](../src/app/layout.tsx) and [src/app/layout.tsx:30](../src/app/layout.tsx).

### Findings

| ID | Severity | File | Issue |
|---|---|---|---|
| REPO-1 | High | `README.md` | Still contains the default Next.js `create-next-app` boilerplate. Public-facing repo URL is `https://github.com/linuxhub-uz` ([src/config/site.ts:8](../src/config/site.ts)) — visitors will land on this README. **Fixed in this PR.** |
| REPO-2 | High | (missing) | No `LICENSE` file. Without one, the repo is **not legally open-source** even though the site claims it is. **Fixed in this PR (MIT).** |
| REPO-3 | High | (missing) | No `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, or `SECURITY.md`. **Fixed in this PR.** |
| REPO-4 | Low | `build_error.log` | Stale — the underlying nav-icon.tsx bug is already fixed at [src/components/ui/nav-icon.tsx:12-23](../src/components/ui/nav-icon.tsx). **Deleted in this PR.** |
| REPO-5 | Medium | `package.json` | `"lint"` exists but no `"typecheck"` script. Recommend adding `"typecheck": "tsc --noEmit"` to match the modern Next.js convention. |
| REPO-6 | Medium | `package.json` | No `engines` field. With Three.js + React 19 + Next 16, recommend pinning `"node": ">=20"` for CI parity. |
| REPO-7 | Low | (missing) | No GitHub Actions workflows in `.github/workflows/`. For an OSS launch you want at minimum: lint + typecheck + build on PR. |
| REPO-8 | Low | `.gitignore` | Does not ignore `.env.local` (only the `.env*` wildcard does — verify this matches your DX). Otherwise fine. |
| REPO-9 | Low | (missing) | No issue/PR templates (`.github/ISSUE_TEMPLATE/`, `.github/PULL_REQUEST_TEMPLATE.md`). Adds friction for first-time contributors. |
| REPO-10 | Low | `next.config.ts` | Read but very thin (140 bytes). No `images.remotePatterns`, no security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy). For a public site, add at minimum `referrerPolicy` and `X-Content-Type-Options: nosniff`. |

---

## 3. Content Inventory & Gaps

### Declared vs. delivered

The navigation in [src/config/distros.ts](../src/config/distros.ts) declares the following slugs. Counts below are the difference between declared nav items and MDX files that actually exist on disk.

| Distro | Declared slugs | MDX files present | Coverage |
|---|---:|---:|---:|
| Linux Asoslari (fundamentals) | 21 | 22 | **~100%** (one extra: `theming` exists but isn't in nav; `text-editors` and `processes` are in nav and exist) |
| NixOS | 53 | 9 | **17%** |
| Kali Linux | 14 | 1 | **7%** |
| Parrot OS | 9 | 1 | **11%** |
| Manjaro | 10 | 1 | **10%** |
| Ubuntu | 1 | 1 | **100%** (but `status: "coming-soon"` and only an intro placeholder) |
| Debian | 0 | 0 | **not declared** — but listed in the user's task |

The placeholder page logic ([src/app/[distro]/[...slug]/page.tsx:62-67](../src/app/[distro]/[...slug]/page.tsx)) gracefully handles missing MDX files, so nothing 404s — but every undeclared link in the sidebar today shows the "Kontent tayyorlanmoqda" placeholder. That's a UX cliff for any user clicking around.

### Missing from the navigation but declared in the project goals

The user's task list (Linux Asoslari curriculum) includes topics that **don't have nav slugs yet**:

- "Linux tarixi" — no slug. Could merge with `intro` or split out.
- "Users and Groups" — no slug. Belongs next to `permissions`.
- "Services" — no slug. Closest existing is `processes`, but services (systemd units) ≠ processes.
- "Networking Basics" — no slug. Has `firewall` and `ssh` but no networking primer (ip/ifconfig/DNS/ports).
- "Logs" — no slug. journalctl + `/var/log` reading is core skill.
- "Bash Fundamentals" — no slug. Scripting, variables, control flow, pipes.
- "Troubleshooting" — no slug. Systematic debugging guide missing.
- "Security Basics" — no slug. Could merge `permissions` + `firewall` + ssh into a security module.
- "Backup Strategies" — no slug. rsync, snapshots, 3-2-1 rule.

These are added to the proposed roadmap (`docs/ROADMAP.md`).

### Missing distro: Debian

The user task lists Debian as a required distro. It's **absent from [src/config/distros.ts](../src/config/distros.ts) entirely** and has no `content/debian/` directory. Roadmap adds it.

### Files that need rewriting (content-quality findings)

| File | Issue | Severity |
|---|---|---|
| [content/ubuntu/introduction.mdx](../content/ubuntu/introduction.mdx) | Orphan `</Callout>` closing tag at end (no opener). **Fixed in this PR.** Whole file is a placeholder; needs real content. | Critical→High |
| [content/kali/introduction.mdx](../content/kali/introduction.mdx) | `wget https://kali.download/base-images/kali-2024.1/...` is a hard-coded 2024 ISO URL — will 404 once that release rolls off. Should link to the generic [https://www.kali.org/get-kali/](https://www.kali.org/get-kali/) page instead. | Medium |
| [content/manjaro/introduction.mdx](../content/manjaro/introduction.mdx) | "Repository: 2 hafta kechiktirilgan" — claim is approximately right but the actual delay varies. Should cite the [Manjaro Wiki: Stability Branches](https://wiki.manjaro.org/index.php/Switching_Branches) page. | Low |
| [content/nixos/install.mdx](../content/nixos/install.mdx) | Uses the old `nixos.org/nix/install` curl pipe with `--daemon`. As of Nix 2.18+, the official site uses the [Determinate Systems installer](https://nixos.org/download/) and the Lix fork is also documented. Recommend rewriting against [https://nixos.org/download/](https://nixos.org/download/). Also: `sudo pacman -S nix` on Arch is fine but the AUR/extra repo split has changed — should cite the [ArchWiki Nix page](https://wiki.archlinux.org/title/Nix). | Medium |
| [content/parrot/introduction.mdx](../content/parrot/introduction.mdx) | Mentions `sudo parrot-upgrade` and `sudo anonsurf start` without sourcing — `parrot-upgrade` is a real wrapper but its behavior should be cited from [https://parrotsec.org/docs/](https://parrotsec.org/docs/). | Medium |
| [content/fundamentals/intro.mdx](../content/fundamentals/intro.mdx) | Stat "Linux serverlar bozorining 90%+ ni egalladi" + "Internet serverlarining 96%+ da ishlaydi" — no source. These numbers float around the internet but should be cited or removed. Hard claim "1991 Linus Torvalds Linux kernelini yaratdi" is correct ([kernel.org history](https://www.kernel.org/category/about.html)) but needs a source link. | Medium |
| [content/fundamentals/family-tree.mdx](../content/fundamentals/family-tree.mdx) | Only 39 lines, mostly relies on `<LinuxFamilyTree />` + `<LinuxAnatomy />` components. Fine as a hub page but no learning objectives, no exercises. | Low |
| [content/fundamentals/file-system.mdx](../content/fundamentals/file-system.mdx) | "`/` (taqsimlangan)" in the Windows comparison table for `C:\Windows` is confusing — the actual FHS analog would be a split between `/bin`, `/sbin`, `/lib`, `/etc`, `/boot`. Should cite the [Filesystem Hierarchy Standard 3.0](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html). Also missing: `/proc`, `/sys`, `/dev`, `/opt`, `/srv`, `/run` — core FHS dirs. | Medium |
| [content/fundamentals/terminal.mdx](../content/fundamentals/terminal.mdx) | "Manjaro/Arch: Ctrl+Alt+T" — this is **only true for some desktop environments** (XFCE, KDE with that binding). GNOME on Arch has no default Ctrl+Alt+T. Either qualify it or remove the table row. | Low |
| [content/fundamentals/permissions.mdx](../content/fundamentals/permissions.mdx) | "sudo — Superuser Do" — incorrect mnemonic. The historical expansion (per `man sudo`) is "**su**perUser **do**" / "substitute user do". Either keep but clarify it's a backronym, or remove. The phrasing as-is is fine but should cite `man sudo`. | Low |
| [content/fundamentals/package-managers.mdx](../content/fundamentals/package-managers.mdx) | Recommends `sudo apt update` + `sudo apt upgrade` separately — modern Debian/Ubuntu (>=2.0) supports `sudo apt full-upgrade` and the official Ubuntu tutorial chains them. Also: `pacman -Sy` alone (without `-u`) is a known footgun ([ArchWiki: System maintenance](https://wiki.archlinux.org/title/System_maintenance#Partial_upgrades_are_unsupported)). The current text shows `pacman -Sy` as "Yangilash" in the comparison table at [content/fundamentals/package-managers.mdx:89](../content/fundamentals/package-managers.mdx) — **this is a real footgun**: it desyncs the package DB without upgrading. Should be `pacman -Syu`. | High |
| [content/fundamentals/ssh.mdx](../content/fundamentals/ssh.mdx) | Decent. The `dsa` "Eskirgan" note is correct (OpenSSH 7.0+ disables it). Should cite the [OpenSSH 7.0 release notes](https://www.openssh.com/txt/release-7.0). | Low |
| [content/fundamentals/basic-commands.mdx](../content/fundamentals/basic-commands.mdx) | No prerequisites/objectives frontmatter; overlaps with `terminal.mdx` on `pwd/ls/cd/cp/mv/rm`. Decide which file owns these — recommend `terminal.mdx` introduces them, `basic-commands.mdx` is the reference card. | Low |
| All fundamentals files | None have `prerequisites`, `learning_objectives`, `references` frontmatter. None cite source URLs in-line. **This is the single biggest content-quality finding.** | High |
| All distro intro files | Four of five carry `lastUpdated: "2024-01-15"`. NixOS Nix version shown is `2.18.0` ([content/nixos/install.mdx:106](../content/nixos/install.mdx)) — current stable Nix as of writing is newer; check before claiming any version. | Medium |

### Files that exist but aren't navigation

| File | Status |
|---|---|
| `content/fundamentals/theming.mdx` | Exists; not in [src/config/distros.ts](../src/config/distros.ts) nav. Either add to nav or move to a "Bonus" section. |

---

## 4. Translation Quality

The Uzbek prose I read is **good overall** — natural-sounding Latin-script Uzbek with correct apostrophe usage (`o'`, `g'`, `'`). Below are specific points to address; nothing rises to "rewrite everything," but a consistency pass would help.

### Terminology consistency (pick one per term)

| Term | Variants seen | Recommendation |
|---|---|---|
| "papka" vs "katalog" | "papkalar" ([file-system.mdx:14](../content/fundamentals/file-system.mdx)), but "katalog" elsewhere | Use **papka** for beginner copy; mention "katalog" once as a synonym, since `man` pages translate `directory` → `katalog`. |
| "buyruq" vs "komanda" | "buyruq" dominates; "komanda" appears as `sudo -u user komanda` ([permissions.mdx:108](../content/fundamentals/permissions.mdx)) | Standardize on **buyruq**. The `komanda` instance reads like a placeholder; replace with `buyruq`. |
| "yangilash" vs "yangilanish" | Both used | **yangilash** = the verb (to update), **yangilanish** = the noun (update/release). They aren't interchangeable. Audit for misuse. |
| "ruxsat" vs "huquq" | Both used | **ruxsat** for file `r/w/x`, **huquq** for elevated privileges (sudo, root). Current usage is mostly correct. |
| "yo'l" vs "manzil" | "yo'l" for path | Keep **yo'l** (path); fine. |
| "fayl tizimi" vs "fayl sistemasi" | "fayl tizimi" used | Keep **fayl tizimi**. |
| "ochiq kodli" vs "open source" | Both used | Use **ochiq kodli** in Uzbek text; keep "open source" only for the first definitional mention. |

### Phrasing issues (concrete)

- [content/fundamentals/intro.mdx:6](../content/fundamentals/intro.mdx) — "ochiq kodli operatsion tizim yadrosi (kernel)" — fine, but "kernel" stays English. Recommend: "ochiq kodli **yadro** (kernel)" — promote the Uzbek word.
- [content/fundamentals/permissions.mdx:99](../content/fundamentals/permissions.mdx) — "## sudo — Superuser Do" — the dash + English phrase here is fine but the same heading style is not used elsewhere. Consider "## sudo — administrator huquqlari".
- [content/fundamentals/terminal.mdx:9](../content/fundamentals/terminal.mdx) — "qora ekran, yashil harflar, hech qanday tugma yo'q" — endearing, keep, but verify "tugma" (button) is what's meant vs "menyu" (menu). Probably means "menu". Recommend: "yashil harflar, hech qanday menyu yoki tugma yo'q".
- [content/fundamentals/package-managers.mdx:97](../content/fundamentals/package-managers.mdx) — "Tizim darajasidagi" — natural; keep.
- Across files: emojis are used liberally (🔵 🟢 🔴 🥭 🦜 🚀 🎉 🐧 🔐). The user's CLAUDE.md / system instructions say "Only use emojis if the user explicitly requests it." The user did not request emojis in their instructions — however, the existing content style is emoji-heavy and removing them would be a stylistic regression. **Recommendation:** keep existing emojis (don't churn) but **do not add new ones** in lessons I write going forward. This is a defensible style choice for a Gen-Z friendly platform.

### Spelling / typography

- Apostrophe is consistently `'` (right single quote U+2019) not `'` (ASCII), which matches modern Uzbek Latin script. Good.
- No instances found of mixed Cyrillic/Latin in body copy. Good.

---

## 5. Navigation & Information Architecture

### What's working

- Modular per-section sidebar with expand/collapse state in Zustand ([src/lib/store.ts](../src/lib/store.ts) referenced from [src/components/layout/sidebar.tsx:7](../src/components/layout/sidebar.tsx)).
- Auto-expansion of the section containing the current page ([src/components/layout/sidebar.tsx:20-31](../src/components/layout/sidebar.tsx)).
- Mobile sheet behavior with overlay + close on navigate ([src/components/layout/sidebar.tsx:33-36](../src/components/layout/sidebar.tsx)).
- Per-page breadcrumb in [src/app/[distro]/[...slug]/page.tsx:81-95](../src/app/[distro]/[...slug]/page.tsx).
- Per-page TOC from MDX headings ([src/lib/content.ts:116-133](../src/lib/content.ts)).

### Findings

| ID | Severity | Issue |
|---|---|---|
| NAV-1 | High | The `extractToc` slugifier ([src/lib/content.ts:124-127](../src/lib/content.ts)) does `.replace(/[^\w\s-]/g, "")` — JavaScript's `\w` is ASCII-only. **Uzbek headings with `o'`, `g'`, or `'` lose those characters from the anchor**, and a heading like "## Tizim sozlamalari (etc)" produces ambiguous IDs. This causes broken TOC links on pages that already use Uzbek characters in headings. Replace with `rehype-slug`'s slugifier (which the page route already includes for the rendered MDX) and have both produce identical IDs. |
| NAV-2 | Medium | The sidebar shows links to every slug in nav even when the MDX doesn't exist. Users click and see "Kontent tayyorlanmoqda". Either visually mark missing pages (gray text + "tez orada" badge) or filter them out — but never silently render placeholder pages with no signal in the sidebar. Add an `existsOnDisk` boolean to the nav merging step. |
| NAV-3 | Medium | No prev/next links inside lessons — only `Orqaga` (back) and `Rasmiy hujjatlar` (external). For a guided curriculum, prev/next is table-stakes. Compute from `distros[].navigation` order. |
| NAV-4 | Low | Distro `coming-soon` status ([src/config/distros.ts:436](../src/config/distros.ts)) for Ubuntu is set but the `DistroCard` doesn't visually differentiate (unverified — need to read distro-card.tsx). If not differentiated, add a "Tez orada" pill. |
| NAV-5 | Low | The hub page `/[distro]/page.tsx` ([src/app/[distro]/page.tsx](../src/app/[distro]/page.tsx)) was not read in this audit. Should expose a structured "module index" not just a redirect. |

---

## 6. SEO

### What's working

- Per-page `generateMetadata` with title template, description, canonical URL, OG tags ([src/app/[distro]/[...slug]/page.tsx:22-48](../src/app/[distro]/[...slug]/page.tsx)).
- Sitemap regenerated from filesystem on every build ([src/app/sitemap.ts](../src/app/sitemap.ts)).
- Robots.txt + sitemap reference ([src/app/robots.ts](../src/app/robots.ts)).
- `lang="uz"`, `og:locale="uz_UZ"`, `alternates.languages["uz-UZ"]` set.
- Keyword list in [src/config/site.ts:11-35](../src/config/site.ts) is targeted ("Linux o'zbekcha", "NixOS qo'llanma", etc.) — good for a niche-language site.

### Findings

| ID | Severity | Issue |
|---|---|---|
| SEO-1 | High | **No JSON-LD `Article` / `LearningResource` schema** on lesson pages. For a learning site, `LearningResource` (or `Course` / `TechArticle`) structured data significantly helps Google surface lessons in featured snippets and the Course knowledge panel. Add to [src/app/[distro]/[...slug]/page.tsx](../src/app/[distro]/[...slug]/page.tsx) via a `<script type="application/ld+json">` tag using the doc's frontmatter. |
| SEO-2 | High | **No OG image generation.** `openGraph` is set but no `images:` array. Twitter card is `summary_large_image` but with no image, social previews are blank. Add a per-lesson OG image via Next's [opengraph-image.tsx](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) convention. |
| SEO-3 | Medium | `sitemap.ts` uses `new Date()` for `lastModified` on **every** entry instead of the file mtime or the `lastUpdated` frontmatter. This tells Google every page was modified today, which it'll discount. Use `fs.statSync(file).mtime` or `frontmatter.lastUpdated`. |
| SEO-4 | Medium | The placeholder page ([src/app/[distro]/[...slug]/page.tsx:165-184](../src/app/[distro]/[...slug]/page.tsx)) returns HTTP 200 but should return 404 (or be `noindex`). It's currently in the sitemap (via `generateStaticParams` / dynamic params) and being indexed. Either remove unbuilt slugs from `sitemap.ts` (filter by `fs.existsSync`) or add a `<meta name="robots" content="noindex">` and 404 status to placeholder responses. |
| SEO-5 | Medium | `export const dynamic = "force-dynamic"` on the lesson page ([src/app/[distro]/[...slug]/page.tsx:20](../src/app/[distro]/[...slug]/page.tsx)) defeats static generation — every request hits the server, every page is dynamically rendered. For an MDX content site this is **the wrong default**. The comment says "to avoid serialization issues with MDX components" but Next 16 + `next-mdx-remote` handles server-component serialization correctly. Investigate whether this can be removed (or replaced with `generateStaticParams` + ISR `revalidate`). Big perf + SEO win if you can. |
| SEO-6 | Low | No `keywords` per-page (only site-wide). For a Uzbek-language niche site, page-specific keywords from frontmatter `tags` would help. |
| SEO-7 | Low | `metadata.alternates.languages["uz-UZ"]` points to the homepage URL on every page. It should point to the canonical URL of the current page in that language (currently same site, so it's a no-op but if you ever add `ru`/`en` you'll need it). |
| SEO-8 | Low | The Google AdSense + AdSense script tag is loaded site-wide ([src/app/layout.tsx:74-79](../src/app/layout.tsx)). Verify it's loaded behind a cookie-consent gate if you target EU traffic — Uzbekistan visitors are fine but Google's policies apply globally to AdSense publishers. |

---

## 7. Technical Architecture

### What's working

- React 19 + Next 16 + Tailwind v4 — modern, current.
- MDX is serialized server-side ([src/app/[distro]/[...slug]/page.tsx:71-76](../src/app/[distro]/[...slug]/page.tsx)) with `remark-gfm`, `rehype-slug`, `rehype-autolink-headings` — correct stack.
- `shiki` for syntax highlighting (declared in package.json, not yet wired into `CodeBlock` per my read; verify).
- Custom MDX components registered in [src/components/content/mdx-content.tsx:13-25](../src/components/content/mdx-content.tsx): `Callout`, `Steps`, `Step`, `Tabs`, `LinuxFamilyTree`, `LinuxAnatomy`, `NextStepsCard`, `CodeBlock`. Good extension surface.

### Findings

| ID | Severity | Issue |
|---|---|---|
| TECH-1 | High | `export const dynamic = "force-dynamic"` — see SEO-5. Same finding, technical impact: no static optimization, no CDN caching, every request runs MDX serialization. |
| TECH-2 | High | **No Mermaid renderer registered.** The task brief and proposed roadmap rely on Mermaid diagrams for lessons. Need to add a `<Mermaid>` MDX component (e.g. via [`mermaid`](https://github.com/mermaid-js/mermaid) + dynamic client import) or use `rehype-mermaidjs`. Without it, lessons can only use ASCII boxes (which is what existing files do — see `filesystems.mdx` lines 13-34). |
| TECH-3 | Medium | `three`, `@react-three/fiber`, `@react-three/drei` are declared in package.json but I only saw a `three-background.tsx` component. ~600KB+ of bundle for one background. Confirm it's dynamic-imported and not on the lesson page route. If it's on every page, it's a perf disaster. |
| TECH-4 | Medium | `getDocBySlug` reads from disk on every request (because of `force-dynamic`). With caching disabled, every page view re-reads the file, re-parses frontmatter, and re-serializes MDX. On a busy server that's quadratic-ish. Combined with TECH-1 fix, becomes a non-issue. |
| TECH-5 | Medium | No `not-found.tsx` for the lesson route — the placeholder is rendered instead. Add `notFound()` for genuinely-missing distros (already done at [src/app/[distro]/[...slug]/page.tsx:58](../src/app/[distro]/[...slug]/page.tsx)) and tighten the slug-missing branch too. |
| TECH-6 | Low | No error boundary at the route layout level. An MDX parse error will crash the route. Add `error.tsx`. |
| TECH-7 | Low | `getReadingTime` is imported from `@/lib/utils` ([src/lib/content.ts:4](../src/lib/content.ts)) — utils file not read; assumed it wraps the `reading-time` npm package. Verify it accounts for Uzbek WPM (~180-200 wpm for prose, slower than English's 250). |
| TECH-8 | Low | The `[...slug]` catch-all means the route accepts arbitrarily-deep paths. Add an explicit max depth or it'll happily return `/[distro]/a/b/c/d/e/f/.../z` and check for an MDX file each time. Minor DoS hardening. |

---

## 8. User Experience

Based on reading components without running the app (no `node_modules` installed). Treat findings as code-level UX bets.

| ID | Severity | Issue |
|---|---|---|
| UX-1 | Medium | No "edit on GitHub" link per lesson. Standard for any modern docs site (the Ubuntu, NixOS, Arch wikis all have this). Trivially adds: a footer link `https://github.com/linuxhub-uz/<repo>/edit/main/content/<distro>/<slug>.mdx`. |
| UX-2 | Medium | No "Was this helpful? 👍 👎" or feedback widget. Even a static GitHub Discussions link per lesson would be a leap forward for a learning platform. |
| UX-3 | Medium | No global site search. With ~70 declared pages, users will need it. [Pagefind](https://pagefind.app/) integrates with static Next.js at build time — ~10kb of JS, no server, free. |
| UX-4 | Medium | Reading-time pill is shown ([src/app/[distro]/[...slug]/page.tsx:104-107](../src/app/[distro]/[...slug]/page.tsx)) but not "Difficulty" or "Prerequisites" — both are in the spec the user wants. Surface from frontmatter. |
| UX-5 | Low | No "Last updated: X days ago" relative date; only absolute formatted date. Add a `<time dateTime>` with relative formatting. |
| UX-6 | Low | Mobile sidebar uses a `lg:` breakpoint; below `lg` it's a full-width sheet. Verify the sheet has focus trap + esc-to-close for a11y. |
| UX-7 | Low | No print stylesheet for lessons. Some learners actually print. ~30 lines of `@media print`. |
| UX-8 | Low | Dark/light theme via `next-themes` is wired — good. Verify the syntax-highlight theme switches; if Shiki is loaded with a fixed theme, code blocks will look wrong in one mode. |

---

## 9. Security

| ID | Severity | Issue |
|---|---|---|
| SEC-1 | Medium | No security headers in `next.config.ts`. Add CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. CSP must accommodate Google AdSense and Three.js if used. |
| SEC-2 | Low | AdSense script (`pagead2.googlesyndication.com`) is loaded async but without an SRI hash. AdSense doesn't support SRI (their CDN serves dynamic JS), so this is documented-not-fixable; just note it. |
| SEC-3 | Low | No `Security.md` file — added in this PR. |
| SEC-4 | Low | `google4af9b26e6c370f29.html` ([public/](../public/google4af9b26e6c370f29.html)) is a Google Search Console verification file. Fine. Document that it must stay. |

---

## 10. Performance

| ID | Severity | Issue |
|---|---|---|
| PERF-1 | Critical | See TECH-1 / SEO-5. `dynamic = "force-dynamic"` defeats SSG for the entire `/<distro>/<...slug>` route. Switch to `generateStaticParams` + ISR. Single biggest perf win. |
| PERF-2 | High | The `linuhublogo.png` in `public/` is **1.47 MB**. Used as favicon ([src/app/layout.tsx:53](../src/app/layout.tsx)) and presumably as a brand image. Convert to WebP/PNG-tiny for icon, or split: 32x32 ICO for favicon, 192x192 PNG for manifest, 512x512 for OG. Currently every visitor downloads 1.47MB on first load. |
| PERF-3 | Medium | Three.js background — see TECH-3. Verify it's not bundled in the lesson route. |
| PERF-4 | Medium | `framer-motion` is the only animation lib but used only in sidebar transitions ([src/components/layout/sidebar.tsx](../src/components/layout/sidebar.tsx)). Verify tree-shaking gives a small final bundle — otherwise the ~50KB import is over-budget for one chevron rotation. |
| PERF-5 | Low | No `next/image` for content images observed. If lessons grow images, ensure they go through `next/image`. |

---

## 11. Accessibility

Not deeply audited (would need to run the site). Code-level observations:

| ID | Severity | Issue |
|---|---|---|
| A11Y-1 | Medium | The sidebar collapse button ([src/components/layout/sidebar.tsx:117-131](../src/components/layout/sidebar.tsx)) has no `aria-expanded` or `aria-controls`. Adds 2 attributes. |
| A11Y-2 | Medium | TOC anchor links have no skip target / `tabindex`. |
| A11Y-3 | Low | Color tokens — verify contrast for `text-muted-foreground` on `bg-sidebar-bg` in both themes. |
| A11Y-4 | Low | No `<main>`/`<aside>` landmarks confirmed; `<main>` is at [src/app/layout.tsx:86](../src/app/layout.tsx) so good. |

---

## 12. Translation / Source-attribution gap (consolidated)

The single most important content rule from the user is: **"NEVER invent Linux information. ONLY use official sources. Always cite source URLs."**

The current content **routinely violates this**. Examples:

- [content/fundamentals/intro.mdx:40-43](../content/fundamentals/intro.mdx) — "96%+ Internet serverlarda" — no source.
- [content/fundamentals/intro.mdx:31-36](../content/fundamentals/intro.mdx) — Timeline table — no source.
- [content/fundamentals/ssh.mdx:48-52](../content/fundamentals/ssh.mdx) — Key type comparison — no source. (Should cite `man ssh-keygen` and the OpenSSH project.)
- [content/fundamentals/permissions.mdx](../content/fundamentals/permissions.mdx) — Entire chmod numeric explanation — no source. (Should cite `man chmod` and the GNU coreutils manual.)
- [content/fundamentals/package-managers.mdx](../content/fundamentals/package-managers.mdx) — All apt/pacman/dnf usage — no source. (Should cite Debian's [apt(8) manpage](https://manpages.debian.org/bookworm/apt/apt.8.en.html), [ArchWiki: pacman](https://wiki.archlinux.org/title/pacman), Fedora's [dnf docs](https://docs.fedoraproject.org/en-US/quick-docs/dnf/).)

**Recommendation:** Every lesson MDX gets a `references:` block in frontmatter:

```yaml
references:
  - title: "GNU coreutils: chmod"
    url: "https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html"
  - title: "Filesystem Hierarchy Standard 3.0"
    url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html"
```

Render at the bottom of every lesson page automatically. The exemplar lesson (`content/fundamentals/intro.mdx` rewrite in this PR) demonstrates the pattern.

---

## 13. Prioritized fix list

### P0 — Block public OSS launch

- **REPO-1/2/3** — README, LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY. **Fixed in this PR.**
- **PERF-1 / TECH-1 / SEO-5** — Remove `force-dynamic` from lesson route; switch to static generation + ISR. (Code change — not done in this PR; needs verification it actually breaks with current MDX components.)
- **PERF-2** — Shrink `linuhublogo.png` from 1.47 MB. (Asset change — not done in this PR.)
- **High content findings** — Fix the `pacman -Sy` footgun (package-managers.mdx), citations on intro.mdx claims, orphan Callout in ubuntu/introduction.mdx (last is fixed in this PR).

### P1 — Ship within 2 weeks of launch

- Add JSON-LD `LearningResource` schema (SEO-1).
- Generate OG images (SEO-2).
- Filter sitemap to existing-only files (SEO-4).
- Replace ASCII slugifier with `rehype-slug` (NAV-1).
- Mark missing nav items visually (NAV-2).
- Prev/next lesson links (NAV-3).
- Edit-on-GitHub link (UX-1).
- Pagefind search (UX-3).
- Add `references:` block + render it on every lesson (Translation/source gap).

### P2 — Quality polish

- All Tier-3 audit items above.

---

## 14. What's _not_ in this audit (acknowledged scope)

- I did not run the dev server or production build (no `node_modules`).
- I did not deeply read `src/components/content/{linux-anatomy,linux-family-tree,three-background,code-block}.tsx` — sampling shows the patterns are reasonable.
- I did not verify Lighthouse, Core Web Vitals, or actual rendered output.
- I did not run a translation review with a native Uzbek speaker — the points in §4 are based on what I can verify against standard Uzbek Latin orthography.
- I did not test the responsive design or accessibility with a screen reader.

A live audit (with the site running) would refine §10–11 considerably.
