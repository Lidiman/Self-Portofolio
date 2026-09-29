# Data Contracts & Schemas

Dokumen ini adalah SATU sumber kebenaran (Single Source of Truth) untuk struktur data dan konten portfolio Astro.

---

## 1. Astro Content Collections Schemas (`src/content/config.ts`)

Semua data divalidasi menggunakan Zod schema pada build-time Astro.

```typescript
import { defineCollection, z } from 'astro:content';

export const projectsCollection = defineCollection({
  type: 'content', // Markdown dengan frontmatter
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum(['devops', 'embedded', 'web', 'tools']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tags: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    role: z.string(),
    metrics: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
    icon: z.string().default('folder'),
  }),
});

export const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['DevOps & Cloud', 'Development & Languages', 'Embedded & Hardware', 'Tools & Platforms']),
    items: z.array(
      z.object({
        name: z.string(),
        level: z.enum(['Proficient', 'Familiar', 'Advanced']),
        icon: z.string(),
        highlight: z.boolean().default(false),
        experience: z.string().optional(),
      })
    ),
  }),
});

export const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    period: z.string(),
    location: z.string(),
    type: z.enum(['education', 'organization', 'work', 'achievement']),
    description: z.string(),
    points: z.array(z.string()),
    order: z.number().default(99),
  }),
});

export const repositoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    fullName: z.string(),
    description: z.string(),
    category: z.enum(['DevOps/Cloud', 'C/C++', 'PHP/Laravel', 'TypeScript/JS', 'Python', 'Mobile/Flutter']),
    language: z.string(),
    url: z.string().url(),
    isPublic: z.boolean().default(true),
    isFeatured: z.boolean().default(false),
    stars: z.number().default(0),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  skills: skillsCollection,
  experience: experienceCollection,
  repositories: repositoriesCollection,
};
```

---

## 2. Profile & Bio Configuration (`src/data/profile.json` atau `src/data/profile.ts`)

```json
{
  "name": "Nabil Aswangga Hugobama",
  "preferredName": "Bama",
  "handle": "Lidiman",
  "headline": "DevOps & Cloud-Native Enthusiast | Systems & Infrastructure Builder",
  "subheadline": "SIJA Student at SMK Telkom Sidoarjo (LKS Cloud Computing Preparation), Musician & Embedded Tinkerer.",
  "about": "Fokus pada arsitektur cloud-native, otomasi CI/CD, Linux system administration, dan embedded systems (ESP32). Aktif sebagai gitaris di band SPBU.",
  "avatar": {
    "sourcePath": "/home/hugo/Obsidian/Project/Media/WhatsApp Image 2026-09-13 at 01.53.31.jpeg",
    "targetPath": "src/assets/avatar.webp",
    "alt": "Nabil Aswangga Hugobama (Bama)"
  },
  "contacts": {
    "github": "https://github.com/Lidiman",
    "email": "bamaground@gmail.com",
    "instagram": "https://instagram.com/never.bama"
  },
  "status": {
    "uptime": "99.98%",
    "distro": "Arch Linux (7.1.6-arch1-1)",
    "currentFocus": "Cloud-Native Infrastructure & ESP32 Microcontrollers",
    "availability": "Open for Collaboration & Projects"
  }
}
```

---

## 3. Featured Repositories Data Initial Matrix

| Name | Repo | Category | Language | Highlights |
|---|---|---|---|---|
| **Asentinel** | `Lidiman/Asentinel` | DevOps/Cloud | Go / Docker | Open-source monitoring & observability platform for modern infra |
| **BandBuddy** | `Lidiman/BandBuddy` | Web / App | PHP / Laravel | Smart rehearsal & gig management platform for musicians |
| **NeuroMotion** | `Lidiman/NeuroMotion` | Embedded / IoT | C/C++ | Early-warning microsleep detection with ESP32-S3 Camera & IMU |
| **Docker-Optimize**| `Lidiman/Docker-Optimize` | DevOps/Cloud | Shell / Docker | Multi-stage builds, slim images, and GitHub CI/CD pipelines |
| **Productivity-Flow**| `Lidiman/Productivity-Flow` | Web / App | TypeScript | Modern task & team collaboration platform |
| **Techfest CloudNative** | `Lidiman/techfest-cloud-native` | DevOps/Cloud | Kubernetes / Go | Microservices architecture on cloud-native infra |
| **MIDI Foot Controller** | `Lidiman/midi-controller` | Embedded | C++ | DIY programmable pedal controller (ESP32-C3) |
| **LeLiLu** | `Lidiman/LeLiLu` | Web | TypeScript | Interactive Web Project |
| **Deploy-Redis** | `Lidiman/Deploy-Redis` | DevOps | Docker | Production Redis deployment setup |
| **Code-Forge** | `Lidiman/Code-Forge` | Web | PHP / Laravel | Code management & snippet runner |
| **EDITH** | `Lidiman/EDITH` | Tools / AI | Python | Automation and assistant pipeline |
| **SABY** | `Lidiman/SABY` | Web | JavaScript | Static web showcase |
| **UKL** | `Lidiman/UKL` | Web | PHP | Uji Kompetensi Keahlian Project |
| **Task-Management** | `Lidiman/Task-Management` | Web / Mobile | Dart / Flutter | Cross-platform task app |
