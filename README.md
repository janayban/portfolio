# Ivan Miranda — Cybersecurity & Computer Science Portfolio

A modern, tactical personal portfolio built with **Astro 5**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with a high-trust, dark-mode-first aesthetic tailored for a cybersecurity researcher and computer science undergraduate.

## Tech Stack & Architecture

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation with partial hydration islands)
- **UI Components:** [React 19](https://react.dev/) + [Lucide Icons](https://lucide.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with tactical design tokens
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/) with strict compiler options
- **Standards:** RFC 9116 `security.txt`, OpenPGP key validation, WCAG AA contrast ratio

## Design System & Theme

| Token | Hex / Value | Usage |
|---|---|---|
| **Primary Background** | `#090D16` | Deep Obsidian |
| **Elevated Surface** | `#111827` | Dark Slate (Cards, Containers) |
| **Hover Surface** | `#162032` | Subtle Card Hover |
| **Primary Text** | `#F8FAFC` | Crisp Off-White |
| **Muted Text** | `#94A3B8` | Cool Slate |
| **Primary Accent** | `#06B6D4` | Cyber Cyan (Active States, Links, CTAs) |
| **Secondary Accent** | `#10B981` | Signal Emerald (Status Indicators, Badges) |
| **Borders** | `#1E293B` | Muted Steel (1px subtle grid alignment) |
| **Typography** | Inter & JetBrains Mono | Sans body text paired with tactical monospace |

## Project Structure

```text
├── legacy/                  # Archived legacy HTML/CSS files
├── public/                  # Static assets & RFC compliance files
│   ├── .well-known/
│   │   └── security.txt     # RFC 9116 Security Policy
│   ├── docs/                # Resume & documents (MIRANDA-CV.pdf)
│   ├── images/              # Project screenshots & credential badges
│   ├── favicon.svg          # Tactical cyber shield icon
│   └── pgp-key.txt          # OpenPGP Public Key
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive nav with status indicator
│   │   ├── Hero.astro       # Headline, bio, CTAs, and avatar frame
│   │   ├── InteractiveTerminal.tsx # Live interactive CLI terminal card
│   │   ├── AboutSection.astro      # Background, education & achievements
│   │   ├── ProjectsSection.tsx     # Bento grid of featured systems & tools
│   │   ├── WriteupsSection.tsx     # Technical changelog of CTFs & research
│   │   ├── SkillsLabsSection.tsx   # Categorized proficiencies & 7ANALYTICS labs
│   │   ├── ContactSection.tsx      # Secure channels & GPG key copying
│   │   └── Footer.tsx       # PGP fingerprint & RFC 9116 link
│   ├── data/
│   │   └── portfolioData.ts # Type-safe structured portfolio datasets
│   ├── layouts/
│   │   └── Layout.astro     # Global HTML shell with meta tags & background grid
│   └── styles/
│       └── global.css       # Tailwind base, Inter & JetBrains Mono imports
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind color tokens & typography
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18.14.1+ or v20/v22/v24)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to preview the site locally.

### Production Build

```bash
npm run build
```

Build artifacts will be compiled into the `dist/` directory, ready to deploy to GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

### Preview Build

```bash
npm run preview
```
