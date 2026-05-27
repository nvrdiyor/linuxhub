# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability in LinuxHubuz, **please do not open a public GitHub issue**.

Instead, please report it privately. Two channels:

1. **Email:** `security@linuxhub.uz`
2. **GitHub:** open a [private security advisory](https://github.com/linuxhub-uz/linuxhub/security/advisories/new) (if you have a GitHub account).

Please include:

- A description of the issue and its impact.
- Steps to reproduce, or a proof-of-concept.
- Any suggested mitigation, if you have one.
- Your name and affiliation (so we can credit you if you want).

## What to expect

| Step | Timeline |
|---|---|
| Acknowledgement of receipt | within 72 hours |
| Initial assessment | within 7 days |
| Coordinated disclosure timeline | discussed case-by-case, target ≤90 days |

If we agree it's a valid security issue:

1. We'll work with you on a fix.
2. We'll keep you informed of progress.
3. Once fixed, we'll publish a security advisory crediting you (unless you prefer to remain anonymous).

If we disagree that it's a security issue, we'll explain why and may suggest it be filed as a normal bug.

## Scope

### In scope

The platform code in this repository, including:

- The Next.js application (`src/`).
- Server-side content loading (`src/lib/content.ts`).
- Any deployed instance at `linuxhub.uz`.
- Build/CI pipeline (when present in `.github/`).

### Out of scope

- Vulnerabilities in dependencies — please report those upstream first. If you believe a dependency vulnerability has direct impact on LinuxHubuz that the upstream maintainers won't fix, we still want to know.
- Vulnerabilities in third-party services we integrate with (Google AdSense, Telegram). Report to the respective vendor.
- Self-XSS, social-engineering attacks, or anything requiring physical access to a user's device.
- Content errors in lessons. These are bugs, not security issues — please open a normal GitHub issue.
- Reports based purely on automated scanner output without a demonstrated impact.

## Hardening status

This is a content website, not a service handling user data. We do not collect user accounts, passwords, or personal data. The main residual risks are:

- **Cross-site scripting (XSS)** via crafted MDX content — mitigated by the Next.js / `next-mdx-remote` rendering pipeline.
- **Supply-chain** — addressed via npm `package-lock.json` and Dependabot (when configured).
- **Third-party tracking** — Google AdSense is loaded site-wide. Visitors from regions with cookie-consent regulation (EU/UK) should be aware.

We track defensive improvements in [docs/AUDIT.md §9 Security](docs/AUDIT.md). Contributions to harden the site (CSP, security headers, dependency review automation) are welcome via the normal contribution flow — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Credit / Hall of fame

We will list, with permission, all researchers who have helped improve LinuxHubuz security:

*(none yet — be the first!)*
