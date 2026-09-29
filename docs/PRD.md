# PRD: Bama's Personal Portfolio Website

## 1. Problem Statement
Personal brand Bama (Nabil Aswangga Hugobama) sebagai DevOps/Cloud-Native builder, embedded tinkerer, dan musisi belum memiliki representasi digital tunggal yang ultra-fast, interaktif, dan merefleksikan kompetensi teknis tingkat tinggi (LKS Cloud Computing & Linux system proficiency).

## 2. Measurable Acceptance Criteria (Target Angka)
1. **Performance Budget:**
   - Lighthouse Score (Desktop & Mobile): Performance >= 98, Accessibility = 100, Best Practices = 100, SEO = 100.
   - Largest Contentful Paint (LCP): < 1.2 detik (Fast 3G / 4G).
   - Interaction to Next Paint (INP): < 50 ms.
   - Cumulative Layout Shift (CLS): 0.00.
   - Total Initial JS Bundle: < 30 kB gzip per page.
   - Total Page Weight: < 250 kB gzip (excluding user images).
   - Build Time: < 10 detik.
2. **Functional Criteria:**
   - Responsive & Accessible: WCAG 2.1 AA compliant, 100% keyboard navigability, semantic HTML.
   - Bento Grid Hero & Showcase: 5 featured projects (`Asentinel`, `BandBuddy`, `NeuroMotion`, `Docker-Optimize`, `Productivity-Flow`).
   - Interactive Terminal / Live Status Widget: Memuat status Linux, uptime mock, stack info, dan interactive command parser/mini-terminal.
   - All Projects / Repository Archive Explorer: Real-time client-side search & filtering by category (DevOps, C/C++, PHP, TypeScript, Python) untuk 10+ repo.
   - Music / SPBU Easter Egg: Mini audio player / guitar lick widget tanpa memblokir initial render.
   - Dark mode first dengan refined aesthetic & smooth 60fps micro-interactions.

## 3. Deliberately Out of Scope (Scope Dibuang)
- ❌ Runtime Backend / Database Server: Website 100% static SSG.
- ❌ Dynamic CMS (WordPress / Strapi): Konten dikelola via Astro Content Collections (Markdown/JSON) dengan strict schema validation.
- ❌ Heavy SPA Framework Hydration: Tidak menggunakan full React/Next.js bundle di seluruh halaman. Hanya Astro Islands (zero JS by default).
- ❌ Bloated Icon/UI Libraries: Dilarang memasang heavy component libraries (shadcn/mui bundle) yang membludak; gunakan Tailwind CSS + Lucide Icons.

## 4. Technology Decisions & Rationale
| Komponen | Pilihan | Alasan Pemilihan vs Alternatif |
|---|---|---|
| **Framework** | Astro (v5+) | Islands Architecture menghasilkan 0kB JS default. Next.js/Nuxt terlalu berat (overhead runtime SSR/hydration). HTML mentah/Hugo kekurangan type-safe schema & reactive islands. |
| **Styling** | Tailwind CSS v4 | Utility-first, zero runtime overhead, build-time purging. CSS-in-JS (styled-components) menambah runtime JS. |
| **Icons** | Lucide Icons (Astro/SVG) | Tree-shakeable, < 1kB per icon. FontAwesome membebani webfont puluhan kB. |
| **Data Layer** | Astro Content Collections (Zod) | Compile-time strict schema validation, zero database latency, markdown support. |
| **Hosting** | Cloudflare Pages / Static Hosting | Global CDN edge cache, TTFB < 50ms, zero server maintenance. |
