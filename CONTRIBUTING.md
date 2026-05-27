# Contributing to LinuxHubuz

Thanks for considering a contribution. LinuxHubuz is a community-maintained Uzbek-language Linux learning platform, and most of what we publish — lessons, translations, code fixes — comes from contributors like you.

This guide covers:

1. [Ways to contribute](#ways-to-contribute)
2. [Setup](#setup)
3. [Writing a lesson](#writing-a-lesson)
4. [Code changes](#code-changes)
5. [Commit and PR workflow](#commit-and-pr-workflow)
6. [Review criteria](#review-criteria)
7. [License of your contributions](#license-of-your-contributions)
8. [Getting help](#getting-help)

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Ways to contribute

In order of "lowest friction" to "highest impact":

1. **Fix a typo or translation issue.** Open a PR directly. No issue needed.
2. **Report a bug or factual error.** Open an issue. Include the page URL and the specific claim you're contesting, with a link to the official source that contradicts it.
3. **Translate or improve an existing lesson.** Open a PR. Make sure you preserve `references:` and don't introduce uncited claims.
4. **Write a new lesson.** Comment on an issue that claims an unwritten slug, or open a new issue saying which slug you want — to avoid two people writing the same thing.
5. **Improve the platform code.** See open issues with the `enhancement` label. For larger architectural changes, start with an issue describing the plan.
6. **Help review PRs.** Especially valuable if you're a native Uzbek speaker reviewing translation work.

---

## Setup

You'll need:

- **Node.js 20+**
- **npm** (ships with Node)
- **Git**

```bash
# Clone
git clone https://github.com/linuxhub-uz/linuxhub.git
cd linuxhub

# Install
npm install

# Run dev server
npm run dev
# → http://localhost:3000
```

Before opening a PR:

```bash
npm run lint
npm run typecheck   # add this script to package.json if missing: "tsc --noEmit"
npm run build
```

All three should succeed.

---

## Writing a lesson

Lessons are MDX files under `content/<distro>/<slug>.mdx`. A complete checklist follows; the canonical template is in [docs/ROADMAP.md §3](docs/ROADMAP.md#3-lesson-template-canonical).

### Before you write

1. Read [docs/ROADMAP.md](docs/ROADMAP.md) — the curriculum spec lists every planned lesson with **the official sources you must cite**. If your topic isn't there, open an issue first so we can agree on scope.
2. Read at least one **existing exemplar lesson** (e.g. [content/fundamentals/intro.mdx](content/fundamentals/intro.mdx)) to match the tone.
3. Read the official source documentation for your topic in English first. Don't translate other Uzbek tutorials — they may have their own errors.

### The hard rule on sources

> **Never invent Linux information.** Every factual claim in a LinuxHubuz lesson must trace back to an upstream official source.

Allowed sources are listed in [docs/ROADMAP.md §4](docs/ROADMAP.md#4-source-rules). Stack Overflow, Reddit, Medium posts, AI-generated tutorials, and blogs are **not** valid sources. They can be useful for cross-checking, but if a claim only appears in those places, leave it out.

Cite sources two ways:

1. **`references:` frontmatter** — every lesson must have at least 2 entries (with `title` and `url`).
2. **Inline links** when making a non-obvious claim. Example: "Linux yadrosini 1991-yilda Linus Torvalds yaratdi[¹](https://www.kernel.org/category/about.html)."

### The hard rule on commands

Every command shown in a lesson must have been **run at least once** and produce the output shown. If you're writing on a Windows-only machine, set up WSL or a VM. If you can't, explicitly say "men buni o'zim sinovdan o'tkazmadim" in the PR description so a reviewer can verify.

### Style

- Audience: complete beginners. Don't assume the reader has used a terminal before.
- Voice: friendly but precise. The reader is intelligent; they just haven't seen this before.
- Don't translate word-for-word. Rewrite in fluent Uzbek.
- Keep paragraphs short (~3 sentences).
- Use the existing MDX components: `<Callout>`, `<Steps>`, `<Tabs>`, `<CodeBlock>`. Don't introduce new ones without an issue.
- Don't add new emojis. The existing emoji style in lessons is grandfathered; new lessons should be emoji-free in headings and titles. Bullets with emojis are fine if they're already in the file.
- Code blocks: include language and, where helpful, a filename:

  ````markdown
  ```bash
  ls -la /etc
  ```
  ````

### Terminology

We standardize on these Uzbek terms:

| English | Uzbek | Notes |
|---|---|---|
| directory | papka | "katalog" only when echoing `man` output |
| command | buyruq | not "komanda" |
| update (verb) | yangilash | |
| update (noun, release) | yangilanish | |
| permission | ruxsat | for file r/w/x |
| privilege | huquq | for sudo/root |
| path | yo'l | |
| filesystem | fayl tizimi | |
| open source | ochiq kodli | use English term once on first definitional mention |
| kernel | yadro (kernel) | promote Uzbek; keep English in parens once per lesson |

---

## Code changes

### Where things live

- `src/config/distros.ts` — sidebar nav structure. Add/rename slugs here.
- `src/config/site.ts` — site metadata.
- `src/components/content/` — MDX components. New ones must be registered in [src/components/content/mdx-content.tsx](src/components/content/mdx-content.tsx).
- `src/lib/content.ts` — server-side MDX loader.
- `src/app/[distro]/[...slug]/page.tsx` — the dynamic lesson route.

### Patterns

- **Server Components by default.** Only add `"use client"` when you need state, effects, refs, browser APIs, or event handlers.
- **No new state management library.** Zustand is for the sidebar only. React Context is the next escalation point.
- **No new dependencies without an issue.** Current bundle is intentionally lean.
- **TypeScript strict mode is on.** If you turn off a check, justify it in the PR.

### Stale `.next/types/`

After deleting or moving a route, `tsc --noEmit` can report ghost errors. Run `rm -rf .next` first.

---

## Commit and PR workflow

1. Fork the repo and create a branch off `main`.
2. Branch naming: `lesson/<slug>` for content, `fix/<short-description>` for bugs, `feat/<short-description>` for features.
3. Make focused commits. One logical change per commit.
4. Commit message format:

   ```
   Short imperative subject (≤70 chars)

   Body explaining the *why*. Reference issue numbers
   like #42 if applicable.
   ```

5. Open a PR against `main`. Use the PR template if one is configured.
6. The CI will run `lint`, `typecheck`, and `build`. All must pass.
7. A maintainer will review. Be patient — most maintainers contribute on weekends.

### What goes in the PR description

For a **content** PR:

- Which slug(s) you wrote or changed.
- Which official sources you used (paste the URLs).
- Whether you ran every command (yes / no — and which ones you couldn't).
- Whether a native Uzbek speaker has read your draft.

For a **code** PR:

- What the change does (1-3 sentences).
- Why it's needed (link an issue if there is one).
- Anything that affects the public API (URL routes, MDX component props).
- Screenshots / GIFs if it changes the UI.

---

## Review criteria

A PR is ready to merge when:

### For lessons

- [ ] Frontmatter has all required fields (see [docs/ROADMAP.md §3](docs/ROADMAP.md#3-lesson-template-canonical)).
- [ ] `references:` has ≥2 official sources.
- [ ] Every factual claim is traceable to a cited source.
- [ ] Code blocks are tested.
- [ ] No emojis in titles/H2 headings.
- [ ] Internal links (prerequisites, next-step) resolve.
- [ ] The lesson follows the canonical body structure (hook → objectives → content → examples → exercises → quiz → references → next step).
- [ ] `npm run build` succeeds.

### For code

- [ ] `npm run lint`, `npm run typecheck`, `npm run build` pass.
- [ ] No new dependency added without prior discussion.
- [ ] If you touched the lesson route or MDX loader, every existing lesson still renders.
- [ ] If you touched [src/config/distros.ts](src/config/distros.ts), the sidebar still renders for every distro.
- [ ] No `console.log` left behind.

---

## License of your contributions

- **Code** you contribute is licensed under the [MIT License](LICENSE).
- **Content** you contribute (MDX, prose, diagrams in `content/`) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

By opening a pull request you confirm:

1. You wrote the contribution yourself, or you have rights to submit it under the licenses above.
2. You're not knowingly including content that violates someone else's copyright.
3. You understand the work is being released under MIT / CC BY 4.0 — others may reuse it with attribution.

If you copy short snippets from official documentation (e.g. an exact command from the Arch Wiki), that's normally fine under fair use — but credit the source in the lesson's `references:` block.

---

## Getting help

- **General questions:** [t.me/linuxhub_uz](https://t.me/linuxhub_uz) (Telegram, Uzbek).
- **Bug reports / feature requests:** [GitHub Issues](https://github.com/linuxhub-uz/linuxhub/issues).
- **Security issues:** see [SECURITY.md](SECURITY.md) — please don't open public issues.
- **Maintainer email:** see the email in [SECURITY.md](SECURITY.md).

We try to respond to issues within a week. If we haven't, gently ping by adding a comment.

Thanks again. Every lesson, every typo fix, every translation correction makes the Uzbek-speaking Linux world a little bigger.
