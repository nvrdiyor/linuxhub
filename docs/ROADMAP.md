# LinuxHubuz — Content Roadmap

**Date:** 2026-05-26
**Status:** Draft — proposed curriculum for the public OSS launch.
**Owner:** Content team.

This document is the **canonical curriculum spec**. Every lesson listed below is committed to in the navigation. Before writing any lesson, the author must verify the proposed claims against the **source URLs listed for that lesson**. If a claim isn't in a cited source, it doesn't go in the lesson.

The spec is organized into:

1. **Linux Asoslari** — the 15-lesson beginner → advanced flagship course.
2. **Distro paths** — Ubuntu, Debian, NixOS, Kali, Parrot, Manjaro.
3. **Lesson template** — the frontmatter + structure every lesson MUST follow.
4. **Source rules** — what counts as an "official source" for this project.

---

## 1. Linux Asoslari — Flagship course

15-lesson sequence corresponding to the user's task brief.

### Difficulty ladder

- **Beginner (1-5):** No Linux background assumed. Goal: comfort with terminal, files, install software.
- **Intermediate (6-10):** Multi-user, system services, networking, login security.
- **Advanced (11-15):** Shell scripting, troubleshooting, hardening, backups.

### Lesson list

| # | Slug | Title (Uzbek) | Level | Existing file? | Primary sources |
|---|---|---|---|---|---|
| 1 | `intro` | Linux nima? | Beginner | ✅ (rewrite) | [kernel.org/about](https://www.kernel.org/category/about.html), [linuxfoundation.org/about](https://www.linuxfoundation.org/about), [gnu.org/gnu/linux-and-gnu.html](https://www.gnu.org/gnu/linux-and-gnu.html) |
| 2 | `history` | Linux tarixi | Beginner | ❌ NEW | [kernel.org/category/about.html](https://www.kernel.org/category/about.html), Linus's [original Aug 25 1991 Usenet post](https://groups.google.com/g/comp.os.minix/c/dlNtH7RRrGA), [gnu.org/gnu/thegnuproject.html](https://www.gnu.org/gnu/thegnuproject.html), [debian.org/doc/manuals/project-history/](https://www.debian.org/doc/manuals/project-history/) |
| 3 | `terminal` | Terminal bilan tanishuv | Beginner | ✅ (light rewrite) | [tldp.org Bash Beginner's Guide](https://tldp.org/LDP/Bash-Beginners-Guide/html/), [GNU Bash Manual §3 Basic Shell Features](https://www.gnu.org/software/bash/manual/bash.html#Basic-Shell-Features), [help.ubuntu.com/community/UsingTheTerminal](https://help.ubuntu.com/community/UsingTheTerminal) |
| 4 | `file-system` | Fayl tizimi | Beginner | ✅ (rewrite) | [Filesystem Hierarchy Standard 3.0](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html), [ArchWiki: File systems](https://wiki.archlinux.org/title/File_systems), [debian.org/doc/manuals/debian-handbook/sect.filesystem-hierarchy.en.html](https://www.debian.org/doc/manuals/debian-handbook/sect.filesystem-hierarchy.en.html) |
| 5 | `permissions` | Ruxsatlar (chmod, chown, sudo) | Beginner | ✅ (light rewrite) | [GNU coreutils: chmod](https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html), [GNU coreutils: chown](https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html), [`sudo(8)` manpage](https://www.sudo.ws/docs/man/sudo.man/), [ArchWiki: File permissions and attributes](https://wiki.archlinux.org/title/File_permissions_and_attributes) |
| 6 | `users-groups` | Foydalanuvchilar va guruhlar | Intermediate | ❌ NEW | [`useradd(8)`](https://manpages.debian.org/bookworm/passwd/useradd.8.en.html), [`usermod(8)`](https://manpages.debian.org/bookworm/passwd/usermod.8.en.html), [`/etc/passwd` format — passwd(5)](https://manpages.debian.org/bookworm/manpages/passwd.5.en.html), [ArchWiki: Users and groups](https://wiki.archlinux.org/title/Users_and_groups) |
| 7 | `package-managers` | Paket boshqaruvi (apt, dnf, pacman) | Intermediate | ✅ (rewrite — fix `pacman -Sy` bug) | [`apt(8)`](https://manpages.debian.org/bookworm/apt/apt.8.en.html), [Debian Package Management Tools](https://www.debian.org/doc/manuals/debian-handbook/sect.apt-get.en.html), [ArchWiki: pacman](https://wiki.archlinux.org/title/pacman), [DNF docs](https://docs.fedoraproject.org/en-US/quick-docs/dnf/) |
| 8 | `services` | Xizmatlar (systemd) | Intermediate | ❌ NEW (overlap with `processes.mdx`) | [`systemd(1)`](https://www.freedesktop.org/software/systemd/man/latest/systemd.html), [`systemctl(1)`](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html), [ArchWiki: systemd](https://wiki.archlinux.org/title/Systemd), [help.ubuntu.com/community/Systemd](https://help.ubuntu.com/community/Systemd) |
| 9 | `networking` | Tarmoq asoslari | Intermediate | ❌ NEW | [`ip(8)`](https://manpages.debian.org/bookworm/iproute2/ip.8.en.html), [`ss(8)`](https://manpages.debian.org/bookworm/iproute2/ss.8.en.html), [ArchWiki: Network configuration](https://wiki.archlinux.org/title/Network_configuration), [help.ubuntu.com/community/NetworkConfigurationCommandLine/Automatic](https://help.ubuntu.com/community/NetworkConfigurationCommandLine/Automatic) |
| 10 | `ssh` | SSH va masofaviy kirish | Intermediate | ✅ (rewrite) | [OpenSSH Manual: `ssh(1)`](https://man.openbsd.org/ssh.1), [`ssh-keygen(1)`](https://man.openbsd.org/ssh-keygen.1), [`sshd_config(5)`](https://man.openbsd.org/sshd_config.5), [OpenSSH release notes](https://www.openssh.com/releasenotes.html) |
| 11 | `logs` | Loglar bilan ishlash | Advanced | ❌ NEW | [`journalctl(1)`](https://www.freedesktop.org/software/systemd/man/latest/journalctl.html), [`systemd-journald.service(8)`](https://www.freedesktop.org/software/systemd/man/latest/systemd-journald.service.html), [ArchWiki: systemd/Journal](https://wiki.archlinux.org/title/Systemd/Journal), [`syslog(3)`](https://manpages.debian.org/bookworm/manpages-dev/syslog.3.en.html) |
| 12 | `bash-fundamentals` | Bash asoslari (skript yozish) | Advanced | ❌ NEW | [GNU Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html), [tldp.org Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/), [Greg's Wiki: BashGuide](https://mywiki.wooledge.org/BashGuide) (referenced from kernel.org via lkml — fine to cite) |
| 13 | `troubleshooting` | Muammolarni hal qilish | Advanced | ❌ NEW | [ArchWiki: General troubleshooting](https://wiki.archlinux.org/title/General_troubleshooting), [ArchWiki: Boot debugging](https://wiki.archlinux.org/title/Debug_-_Getting_traces#Debug_kernel_boot), [help.ubuntu.com/community/BootOptions](https://help.ubuntu.com/community/BootOptions), [`systemctl status`/`journalctl -xe` reference](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html) |
| 14 | `security-basics` | Xavfsizlik asoslari | Advanced | ❌ NEW | [ArchWiki: Security](https://wiki.archlinux.org/title/Security), [Debian Security Manual](https://www.debian.org/doc/manuals/securing-debian-manual/), [Ubuntu Security docs](https://documentation.ubuntu.com/server/explanation/intro-to/security/), [`firewalld(1)`](https://firewalld.org/documentation/) + [`ufw(8)`](https://manpages.debian.org/bookworm/ufw/ufw.8.en.html) |
| 15 | `backup-strategies` | Zaxiralash strategiyalari | Advanced | ❌ NEW | [`rsync(1)`](https://download.samba.org/pub/rsync/rsync.1), [ArchWiki: Synchronization and backup programs](https://wiki.archlinux.org/title/Synchronization_and_backup_programs), [`btrfs-subvolume(8)`](https://btrfs.readthedocs.io/en/latest/btrfs-subvolume.html), [help.ubuntu.com/community/BackupYourSystem](https://help.ubuntu.com/community/BackupYourSystem) |

### Existing fundamentals that don't map 1:1 to the 15

These exist in [content/fundamentals/](../content/fundamentals/) but aren't in the 15-lesson core. **Decision needed:** keep as "Bonus" / "Chuqurroq o'rganish" module, or absorb into the 15.

- `basic-commands.mdx` — keep as reference card (a "shpargalka") linked from lesson 3 (`terminal`).
- `family-tree.mdx` — keep as the visual hub linked from lesson 1.
- `de-vs-wm.mdx` — bonus module ("Tizimni sozlash").
- `display-servers.mdx` — bonus module ("Chuqurroq o'rganish").
- `dotfiles.mdx` — bonus module ("Tizimni sozlash").
- `dual-boot.mdx` — bonus / "Tayyorgarlik" module.
- `filesystems.mdx` — bonus / pairs with lesson 4 (`file-system`) as a deep-dive.
- `firewall.mdx` — absorbed into lesson 14 (`security-basics`) as a section.
- `live-usb.mdx` — bonus / "Tayyorgarlik" module.
- `package-wars.mdx` — pairs with lesson 7 (`package-managers`).
- `pacman-aur.mdx` — pairs with lesson 7 + Manjaro distro path.
- `processes.mdx` — merged into lesson 8 (`services`).
- `repositories.mdx` — pairs with lesson 7.
- `text-editors.mdx` — pairs with lesson 3.
- `theming.mdx` — bonus module.
- `virtual-machine.mdx` — bonus / "Tayyorgarlik" module.

### Recommended sidebar restructure (after roadmap is filled in)

```
0. Tayyorgarlik
   - Virtual mashina o'rnatish        (virtual-machine — existing)
   - Live USB yaratish                 (live-usb — existing)
   - Dual Boot                         (dual-boot — existing)

1. Asoslar — Beginner
   - Linux nima?                       (intro — rewrite)         ← lesson 1
   - Linux tarixi                      (history — NEW)           ← lesson 2
   - Linux oila shajarasi              (family-tree — existing)  ← bonus hub
   - Terminal bilan tanishuv           (terminal — rewrite)      ← lesson 3
   - Asosiy buyruqlar shpargalkasi     (basic-commands — keep)   ← reference
   - Fayl tizimi                       (file-system — rewrite)   ← lesson 4
   - Ruxsatlar                         (permissions — rewrite)   ← lesson 5

2. Foydalanuvchi va paketlar — Intermediate
   - Foydalanuvchilar va guruhlar      (users-groups — NEW)      ← lesson 6
   - Paket boshqaruvi                  (package-managers — rewrite) ← lesson 7
   - Repozitoriylar                    (repositories — existing)
   - pacman va AUR                     (pacman-aur — existing)
   - Flatpak/Snap/AppImage             (package-wars — existing)

3. Tizim va tarmoq — Intermediate
   - systemd xizmatlari                (services — NEW)          ← lesson 8
   - Tarmoq asoslari                   (networking — NEW)        ← lesson 9
   - SSH va masofaviy kirish           (ssh — rewrite)           ← lesson 10
   - Loglar                            (logs — NEW)              ← lesson 11

4. Skript va xavfsizlik — Advanced
   - Bash asoslari                     (bash-fundamentals — NEW) ← lesson 12
   - Muammolarni hal qilish            (troubleshooting — NEW)   ← lesson 13
   - Xavfsizlik asoslari               (security-basics — NEW)   ← lesson 14
   - Firewall (UFW)                    (firewall — existing, in-section)
   - Zaxiralash strategiyalari         (backup-strategies — NEW) ← lesson 15

5. Chuqurroq o'rganish — Bonus
   - Display serverlar                 (display-servers)
   - Fayl tizimlari (EXT4 vs BTRFS)    (filesystems)
   - DE vs WM                          (de-vs-wm)
   - Theming                           (theming)
   - Dotfiles                          (dotfiles)
   - Matn muharrirlari                 (text-editors)
   - Jarayonlar                        (processes)
```

Update [src/config/distros.ts](../src/config/distros.ts) to match.

---

## 2. Distro paths

For each distro, only **official sources** are used. The reading paths below match the user's task brief plus the existing sidebar in [src/config/distros.ts](../src/config/distros.ts).

### Ubuntu (status: was `coming-soon` — promote to `active` once ≥5 lessons exist)

Primary source: **[ubuntu.com](https://ubuntu.com)**, [documentation.ubuntu.com](https://documentation.ubuntu.com), [help.ubuntu.com](https://help.ubuntu.com).

| Slug | Title | Source URL(s) |
|---|---|---|
| `introduction` | Ubuntu nima? | [ubuntu.com/about](https://ubuntu.com/about), [wiki.ubuntu.com/UbuntuFlavors](https://wiki.ubuntu.com/UbuntuFlavors) |
| `installation/requirements` | Tizim talablari | [help.ubuntu.com/community/Installation/SystemRequirements](https://help.ubuntu.com/community/Installation/SystemRequirements) |
| `installation/usb` | USB dan o'rnatish | [ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu](https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu), [ubuntu.com/tutorials/install-ubuntu-desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop) |
| `installation/wsl` | WSL ostida Ubuntu | [documentation.ubuntu.com/wsl/](https://documentation.ubuntu.com/wsl/) |
| `installation/server` | Ubuntu Server | [ubuntu.com/tutorials/install-ubuntu-server](https://ubuntu.com/tutorials/install-ubuntu-server) |
| `apt-basics` | APT bilan ishlash | [help.ubuntu.com/community/AptGet/Howto](https://help.ubuntu.com/community/AptGet/Howto), [ubuntu.com/server/docs/package-management](https://documentation.ubuntu.com/server/how-to/software/package-management/) |
| `snap` | Snap paketlar | [snapcraft.io/docs](https://snapcraft.io/docs), [ubuntu.com/core/services/guide/snaps-intro](https://ubuntu.com/core/services/guide/snaps-intro) |
| `lts-release-cycle` | LTS va relizlar tsikli | [ubuntu.com/about/release-cycle](https://ubuntu.com/about/release-cycle) |
| `livepatch` | Canonical Livepatch | [ubuntu.com/security/livepatch](https://ubuntu.com/security/livepatch) |
| `gnome-desktop` | GNOME ish stoli | [help.ubuntu.com/community/UbuntuGnome](https://help.ubuntu.com/community/UbuntuGnome), [help.gnome.org/users/gnome-help/stable/](https://help.gnome.org/users/gnome-help/stable/) |

### Debian (new distro — not in current [src/config/distros.ts](../src/config/distros.ts))

Primary source: **[debian.org/doc](https://www.debian.org/doc/)**.

| Slug | Title | Source URL(s) |
|---|---|---|
| `introduction` | Debian nima? | [debian.org/intro/about](https://www.debian.org/intro/about), [debian.org/intro/why_debian](https://www.debian.org/intro/why_debian) |
| `social-contract` | Debian ijtimoiy shartnomasi | [debian.org/social_contract](https://www.debian.org/social_contract) |
| `installation` | Debian o'rnatish | [debian.org/releases/stable/installmanual](https://www.debian.org/releases/stable/installmanual) |
| `apt-debian` | APT (Debian usuli) | [debian.org/doc/manuals/debian-reference/ch02.en.html](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html) |
| `release-cycle` | Stable/Testing/Sid | [debian.org/releases/](https://www.debian.org/releases/), [debian.org/doc/manuals/debian-faq/ftparchives](https://www.debian.org/doc/manuals/debian-faq/ftparchives) |
| `dpkg-fundamentals` | dpkg bilan ishlash | [debian.org/doc/manuals/debian-reference/ch02.en.html#_basic_package_management_operations](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_basic_package_management_operations), [`dpkg(1)`](https://manpages.debian.org/bookworm/dpkg/dpkg.1.en.html) |
| `system-administration` | Tizim administratsiyasi | [debian.org/doc/manuals/debian-reference/](https://www.debian.org/doc/manuals/debian-reference/) |
| `security-updates` | Xavfsizlik yangilanishlari | [debian.org/security/](https://www.debian.org/security/) |
| `backports` | Backports nima? | [backports.debian.org/Instructions/](https://backports.debian.org/Instructions/) |

→ Add a `debian` entry to [src/config/distros.ts](../src/config/distros.ts) (logo, color `#A81D33`, docsUrl `https://www.debian.org/doc/`).

### NixOS

Primary source: **[nixos.org/manual](https://nixos.org/manual/)**, [nix.dev](https://nix.dev/), [search.nixos.org](https://search.nixos.org/). The existing nav in [src/config/distros.ts:139-287](../src/config/distros.ts) is a faithful mirror of [nix.dev's curriculum](https://nix.dev/) — keep it. Just write the actual content.

Already exists on disk:
- `nixos/introduction.mdx`
- `nixos/install.mdx` (needs rewrite — see audit)
- `nixos/tutorials/first-steps.mdx`
- `nixos/nix-language/overview.mdx`
- `nixos/packaging/existing-software.mdx`
- `nixos/concepts/flakes.mdx`
- `nixos/reference/glossary.mdx`
- `nixos/guides/recipes.mdx`
- `nixos/contributing/how-to-contribute.mdx`

Source URLs per nav section:

- **Install** — [nixos.org/download/](https://nixos.org/download/), [nix.dev/install-nix.html](https://nix.dev/install-nix.html)
- **Tutorials** — [nix.dev/tutorials/first-steps/](https://nix.dev/tutorials/first-steps/) for each sub-page
- **Nix language** — [nix.dev/tutorials/nix-language.html](https://nix.dev/tutorials/nix-language.html), [nixos.org/manual/nix/stable/language/](https://nixos.org/manual/nix/stable/language/)
- **Packaging** — [nix.dev/tutorials/packaging-existing-software.html](https://nix.dev/tutorials/packaging-existing-software.html)
- **callPackage** — [nix.dev/tutorials/callpackage.html](https://nix.dev/tutorials/callpackage.html)
- **Local files** — [nix.dev/tutorials/working-with-local-files.html](https://nix.dev/tutorials/working-with-local-files.html)
- **Cross-compilation** — [nix.dev/tutorials/cross-compilation.html](https://nix.dev/tutorials/cross-compilation.html)
- **Module system** — [nix.dev/tutorials/module-system/](https://nix.dev/tutorials/module-system/), [nixos.org/manual/nixos/stable/#sec-writing-modules](https://nixos.org/manual/nixos/stable/#sec-writing-modules)
- **NixOS specifics** — [nixos.org/manual/nixos/stable/](https://nixos.org/manual/nixos/stable/)
- **Guides** — [nix.dev/recipes/](https://nix.dev/recipes/)
- **Concepts/Flakes** — [nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html), [nix.dev/concepts/flakes.html](https://nix.dev/concepts/flakes.html) (note: experimental feature; cite that explicitly)
- **Contributing** — [nix.dev/contributing/](https://nix.dev/contributing/)

### Kali Linux

Primary source: **[kali.org/docs](https://www.kali.org/docs/)**.

| Slug | Title | Source URL(s) |
|---|---|---|
| `introduction` | Kali Linux ga kirish | [kali.org/docs/introduction/what-is-kali-linux/](https://www.kali.org/docs/introduction/what-is-kali-linux/) |
| `what-is-kali` | Kali nima va kim uchun? | [kali.org/docs/introduction/should-i-use-kali-linux/](https://www.kali.org/docs/introduction/should-i-use-kali-linux/) |
| `ethical-hacking` | Etik hacking asoslari va qonun | [kali.org/docs/policy/](https://www.kali.org/docs/policy/) + national CERT.uz guidance (cite locally) |
| `installation/requirements` | Tizim talablari | [kali.org/docs/installation/hard-disk-install/](https://www.kali.org/docs/installation/hard-disk-install/) |
| `installation/virtual-machine` | VM da o'rnatish | [kali.org/docs/virtualization/](https://www.kali.org/docs/virtualization/) |
| `installation/usb` | USB orqali o'rnatish | [kali.org/docs/usb/](https://www.kali.org/docs/usb/) |
| `installation/wsl` | WSL ostida Kali | [kali.org/docs/wsl/](https://www.kali.org/docs/wsl/) |
| `tools/nmap` | Nmap | [nmap.org/book/](https://nmap.org/book/) — note: nmap.org is upstream, not Kali docs, but Kali docs link to it |
| `tools/metasploit` | Metasploit framework | [docs.metasploit.com](https://docs.metasploit.com/) |
| `tools/burp-suite` | Burp Suite | [portswigger.net/burp/documentation](https://portswigger.net/burp/documentation) |
| `tools/wireshark` | Wireshark | [wireshark.org/docs/](https://www.wireshark.org/docs/) |
| `security/network-scanning` | Tarmoq skanerlash | [nmap.org/book/man-host-discovery.html](https://nmap.org/book/man-host-discovery.html) |
| `security/vulnerability-assessment` | Zaiflik tahlili | [openvas.org/about/](https://www.openvas.org/about/) or [docs.greenbone.net](https://docs.greenbone.net/) |
| `security/password-cracking` | Parol tahlili (faqat o'qish-uchun, qonuniy maqsadlarda) | [openwall.com/john/doc/](https://www.openwall.com/john/doc/), [hashcat.net/wiki/](https://hashcat.net/wiki/) |

> **Editorial rule for Kali path:** Every offensive-tooling lesson MUST have an explicit "Faqat sizga tegishli yoki yozma ruxsatga ega tizimlarda foydalaning" callout near the top, and link to [kali.org/docs/policy/](https://www.kali.org/docs/policy/) and Uzbekistan's relevant criminal code articles on unauthorized computer access. The existing [content/kali/introduction.mdx:19-21](../content/kali/introduction.mdx) does this; keep the pattern.

### Parrot OS

Primary source: **[parrotsec.org/docs](https://parrotsec.org/docs/) → [docs.parrotsec.org](https://docs.parrotsec.org)** (the wiki/docs URL has migrated; check both).

| Slug | Title | Source URL(s) |
|---|---|---|
| `introduction` | Parrot OS ga kirish | [parrotsec.org/](https://parrotsec.org/), [docs.parrotsec.org/](https://docs.parrotsec.org/) |
| `what-is-parrot` | Parrot OS nima? | [parrotsec.org/](https://parrotsec.org/) |
| `editions` | Versiyalar (Security/Home/Architect/IoT) | [parrotsec.org/download/](https://parrotsec.org/download/) |
| `installation/requirements` | Tizim talablari | [docs.parrotsec.org/install/](https://docs.parrotsec.org/install/) |
| `installation/guide` | Bosqichma-bosqich o'rnatish | [docs.parrotsec.org/install/](https://docs.parrotsec.org/install/) |
| `installation/virtual` | Virtual mashinada | [docs.parrotsec.org/install/virtualization/](https://docs.parrotsec.org/install/virtualization/) |
| `tools/anonymity` | Anonimlik (Tor, AnonSurf) | [docs.parrotsec.org/anonymity/](https://docs.parrotsec.org/anonymity/), [torproject.org/docs](https://support.torproject.org/) |
| `tools/cryptography` | Kriptografiya asboblari | [docs.parrotsec.org/](https://docs.parrotsec.org/) + GnuPG manual [gnupg.org/documentation/](https://gnupg.org/documentation/) |
| `tools/forensics` | Forensics asboblari | [docs.parrotsec.org/](https://docs.parrotsec.org/) + [sleuthkit.org/sleuthkit/docs.php](https://www.sleuthkit.org/sleuthkit/docs.php) |

> Many existing Parrot navigation slugs map to **subsections of one Parrot docs page**, not individual articles. When writing, follow what docs.parrotsec.org actually publishes — don't invent structure that isn't there.

### Manjaro

Primary source: **[wiki.manjaro.org](https://wiki.manjaro.org)**, [manjaro.org/docs/](https://manjaro.org/docs/), and the ArchWiki for everything Manjaro inherits from Arch.

| Slug | Title | Source URL(s) |
|---|---|---|
| `introduction` | Manjaro ga kirish | [manjaro.org/about/](https://manjaro.org/about/) |
| `what-is-manjaro` | Manjaro nima? | [manjaro.org/about/](https://manjaro.org/about/) |
| `arch-vs-manjaro` | Arch vs Manjaro | [wiki.manjaro.org/index.php/Manjaro:A_Different_Kind_of_Beast](https://wiki.manjaro.org/index.php/Manjaro:A_Different_Kind_of_Beast), [wiki.manjaro.org/index.php/Switching_Branches](https://wiki.manjaro.org/index.php/Switching_Branches) |
| `installation/requirements` | Tizim talablari | [wiki.manjaro.org/index.php/Installation_Guides](https://wiki.manjaro.org/index.php/Installation_Guides) |
| `installation/guide` | O'rnatish (Calamares) | [wiki.manjaro.org/index.php/Installation_with_the_Graphical_Installer](https://wiki.manjaro.org/index.php/Installation_with_the_Graphical_Installer) |
| `installation/desktop-environments` | Desktop muhitlari (KDE, GNOME, XFCE) | [manjaro.org/download/](https://manjaro.org/download/) — official editions |
| `packages/pacman` | Pacman | [wiki.archlinux.org/title/pacman](https://wiki.archlinux.org/title/pacman), [wiki.manjaro.org/index.php/Pacman](https://wiki.manjaro.org/index.php/Pacman) |
| `packages/aur` | AUR (yay/paru) | [wiki.archlinux.org/title/Arch_User_Repository](https://wiki.archlinux.org/title/Arch_User_Repository), [wiki.manjaro.org/index.php/Arch_User_Repository](https://wiki.manjaro.org/index.php/Arch_User_Repository) |
| `packages/pamac` | Pamac (GUI paket menejeri) | [wiki.manjaro.org/index.php/Pamac](https://wiki.manjaro.org/index.php/Pamac) |
| `packages/flatpak-snap` | Flatpak va Snap | [flatpak.org/setup/Manjaro](https://flatpak.org/setup/Manjaro), [snapcraft.io/docs/installing-snapd/30](https://snapcraft.io/docs/installing-snapd/30) |

---

## 3. Lesson template (canonical)

Every lesson MDX file under `content/<distro>/` MUST follow this template. The exemplar in this PR is [content/fundamentals/intro.mdx](../content/fundamentals/intro.mdx).

### Frontmatter

```yaml
---
title: "<Uzbek title — proper case, max 60 chars>"
description: "<160-char SEO description — what the reader will learn>"
slug: "<matches the file path; optional, derived if absent>"
order: <integer for sidebar ordering>
level: "beginner" | "intermediate" | "advanced"
estimated_minutes: <integer reading time; computed from `reading-time` is the source of truth, but providing a manual estimate signals scope>
prerequisites:
  - "<text or slug, e.g. /fundamentals/intro>"
learning_objectives:
  - "<concrete, testable: 'fayl tizimi ierarxiyasini ko'rsatish va asosiy papkalarni izohlash'>"
  - "<2-5 objectives total>"
tags: ["beginner", "filesystem", "fhs"]
lastUpdated: "<ISO date YYYY-MM-DD>"
author: "LinuxHubuz jamoasi"
references:
  - title: "<official source name>"
    url: "<URL>"
  - title: "<another source>"
    url: "<URL>"
---
```

### Body structure (in order)

1. **One-paragraph hook** — what the lesson is about, why the learner should care.
2. **"Nimani o'rganasiz" callout** — bullet list of learning objectives (mirror of frontmatter, but visible).
3. **"Tayyorgarlik" section** — what the reader should already know + link to prereqs.
4. **Core content** — `##` h2 sections, with `###` h3 subsections. Each `##` corresponds to one learning objective.
5. **Diagram** — Mermaid (or ASCII as fallback) where it adds clarity. Don't force a diagram into every lesson.
6. **Amaliy misollar** — at minimum 3 worked, copy-pasteable command examples, each followed by an Uzbek explanation of what each flag does.
7. **Mashqlar** — 3-5 short exercises the reader can do at a terminal. Numbered. Each ends with the expected outcome.
8. **Bilim sinovi (quiz)** — 3-5 multiple-choice questions with the answer revealed in a `<Callout type="success">` block below.
9. **Manbalar (references)** — auto-generated from frontmatter `references:` at render time. If the framework doesn't yet support this, list manually with the same structure.
10. **Keyingi qadam** — link to the next lesson in the curriculum.

### Component cheatsheet (per [src/components/content/mdx-content.tsx](../src/components/content/mdx-content.tsx))

- `<Callout type="info|tip|warning|danger|success" title="...">` — boxed note.
- `<Steps><Step title="...">...</Step></Steps>` — ordered procedure.
- `<Tabs>` + `<TabList>` + `<TabTrigger>` + `<TabContent>` — distro-specific variants.
- `<CodeBlock language="bash" filename="...">...</CodeBlock>` — code with header.
- `<LinuxFamilyTree />`, `<LinuxAnatomy />`, `<NextStepsCard />` — bespoke graphics.
- **Mermaid** — NOT yet registered. Until added (see audit TECH-2), use ASCII boxes or `<LinuxFamilyTree />` / `<LinuxAnatomy />` variants.

---

## 4. Source rules

### Allowed sources (canonical)

- Linux Foundation: [linuxfoundation.org](https://www.linuxfoundation.org)
- Linux kernel: [kernel.org](https://www.kernel.org), [docs.kernel.org](https://docs.kernel.org)
- GNU Project: [gnu.org](https://www.gnu.org)
- Filesystem Hierarchy Standard: [refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)
- Ubuntu: [ubuntu.com](https://ubuntu.com), [help.ubuntu.com](https://help.ubuntu.com), [documentation.ubuntu.com](https://documentation.ubuntu.com), [wiki.ubuntu.com](https://wiki.ubuntu.com)
- Debian: [debian.org/doc](https://www.debian.org/doc), [manpages.debian.org](https://manpages.debian.org)
- ArchWiki: [wiki.archlinux.org](https://wiki.archlinux.org)
- NixOS: [nixos.org/manual](https://nixos.org/manual), [nix.dev](https://nix.dev)
- Kali: [kali.org/docs](https://www.kali.org/docs)
- Parrot: [parrotsec.org/docs](https://parrotsec.org/docs), [docs.parrotsec.org](https://docs.parrotsec.org)
- Manjaro: [wiki.manjaro.org](https://wiki.manjaro.org), [manjaro.org/docs](https://manjaro.org/docs)
- OpenSSH: [openssh.com/manual.html](https://www.openssh.com/manual.html), [man.openbsd.org](https://man.openbsd.org)
- systemd: [freedesktop.org/software/systemd/man/latest/](https://www.freedesktop.org/software/systemd/man/latest/)
- Upstream project manuals for tools mentioned in lessons (nmap.org, wireshark.org, wireshark.org/docs, etc.) — allowed when the lesson is **about** that tool.

### Disallowed

- Stack Overflow, Reddit threads, random blog posts — even if accurate, they aren't "official" by the user's definition. Use only for cross-checking; never as the sole source.
- AI-generated content from any tool other than this PR pipeline.
- LinuxHubuz cannot cite itself — every claim must trace back to an upstream source.

### Citation format inside a lesson

When making a non-trivial factual claim in body text, add an inline footnote link to the source. E.g.:

> "Linux yadrosini 1991-yilda Linus Torvalds yaratdi[¹](https://www.kernel.org/category/about.html)."

Or use the `references:` frontmatter and let the renderer add a numbered footnote list at the bottom. **Either approach is fine, but be consistent within a lesson.**

---

## 5. Acceptance criteria (per lesson, before merge)

A lesson PR is ready when:

- [ ] Frontmatter has every required field, including `references:` with at least 2 official sources.
- [ ] Every factual claim is traceable to a cited source.
- [ ] Code blocks have been **manually run** at least once and produce the shown output. If the lesson author can't run a command (e.g. on Windows-only dev box), they must call this out and another reviewer runs it.
- [ ] Spell-check passes (Uzbek + technical English).
- [ ] No emojis in lesson titles or H2 headings (existing emoji style in bullets is OK for now).
- [ ] Internal links to prerequisite/next lessons resolve.
- [ ] Quiz has answers that can be derived from the lesson body (not "trick" questions).
- [ ] `npm run build` succeeds locally.

---

## 6. Out-of-scope (for now)

- Video lessons.
- Interactive in-browser shell (Killercoda-style).
- Cert/badge issuance.
- Community contributions UI (Algolia DocSearch, MultiLanguage comments).

These belong on a v2 roadmap, post-launch.
