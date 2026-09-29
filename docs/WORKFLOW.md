# Workflow & Agent Guidelines

## 1. Git & Remote Configuration
- Remote URL: `https://github.com/Lidiman/Self-Portofolio`
- Primary Branch: `main`
- Feature Branching:
  - `feat/initial-scaffold`
  - `feat/bento-hero`
  - `feat/repository-archive`
  - `feat/motion-styling`

## 2. Commit Message Standards (Conventional Commits)
- `feat(init): scaffold astro project with tailwind & typescript`
- `feat(hero): add bento-grid layout with interactive terminal widget`
- `feat(projects): add repository archive explorer with instant search`
- `style(motion): add smooth page transitions and card hover glow`
- `docs: add comprehensive README and architecture overview`

## 3. Team Profiles & Responsibilities
- **Frontend (`frontend`)**:
  - Inisialisasi repo & setup remote `https://github.com/Lidiman/Self-Portofolio`.
  - Copy & optimize avatar dari `/home/hugo/Obsidian/Project/Media/WhatsApp Image 2026-09-13 at 01.53.31.jpeg`.
  - Implementasi halaman utama, Bento Grid, Terminal widget, Repo Archive Explorer, Music easter egg, dan Content Collections sesuai `docs/CONTRACTS.md`.
  - Pastikan `npm run build` dan `npm run check` lulus tanpa error.
- **QA (`qa`)**:
  - Verifikasi build, accessibility, UI responsive, fitur interaktif (search, filter, terminal, easter egg).
  - Validasi performance budget sesuai PRD.
- **DevOps (`devops`)**:
  - CI/CD workflow ke GitHub Actions / Cloudflare Pages.
  - Push branch `main` ke remote repository.
