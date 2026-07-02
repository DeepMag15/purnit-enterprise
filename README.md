# Purnit — Enterprise Workspace Platform

> A production-ready, enterprise-grade SaaS platform foundation built with React 19, TypeScript, Vite, and modern tooling.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.x-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-blue?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-red)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 20.x
- **npm** >= 10.x
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/DeepMag15/purnit-enterprise.git
cd purnit-enterprise

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📁 Folder Structure

```
purnit-enterprise/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI pipeline
├── public/                     # Static assets
├── src/
│   ├── app/                    # App entry & root component
│   ├── assets/                 # Static assets (images, fonts, SVGs)
│   ├── components/             # Reusable UI components
│   │   └── ui/                 # shadcn/ui-style primitives
│   ├── config/                 # App configuration (env, theme)
│   ├── constants/              # App constants (routes, roles, permissions)
│   ├── contexts/               # React context providers
│   ├── hooks/                  # Custom React hooks
│   ├── layouts/                # Page layouts (Guest, Auth, Admin, HR, etc.)
│   ├── lib/                    # Library integrations (Supabase, Query Client, utils)
│   ├── modules/                # Feature modules (self-contained)
│   ├── pages/                  # Page components
│   ├── routes/                 # React Router configuration
│   ├── services/               # Service layer (business logic)
│   ├── api/                    # API layer (data access)
│   ├── store/                  # Zustand stores (state management)
│   ├── styles/                 # Additional styles
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions
├── .env.example                # Environment variable template
├── .eslintrc.js                # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.node.json          # Node TypeScript config
└── vite.config.ts              # Vite build configuration
```

---

## 🏗️ Tech Stack

| Category          | Technology                        |
| ----------------- | --------------------------------- |
| **Framework**     | React 19                          |
| **Language**      | TypeScript 6.0                    |
| **Build Tool**    | Vite 8                            |
| **Styling**       | TailwindCSS 4 + shadcn/ui        |
| **State**         | Zustand 5                         |
| **Data Fetching** | TanStack Query v5                 |
| **Routing**       | React Router v7                   |
| **Forms**         | React Hook Form + Zod             |
| **Animation**     | Framer Motion                     |
| **Icons**         | Lucide React                      |
| **Charts**        | Recharts                          |
| **Backend**       | Supabase (Auth, DB, Storage, RT)  |
| **Linting**       | ESLint 10 (flat config)           |
| **Formatting**    | Prettier                          |
| **Git Hooks**     | Husky + lint-staged               |
| **CI/CD**         | GitHub Actions                    |

---

## 🏛️ Project Architecture

```
┌─────────────────────────────────────────────────┐
│                    App Shell                     │
│  ┌─────────────────────────────────────────────┐ │
│  │              Global Providers               │ │
│  │  Theme → Auth → Query → Workspace → Toast   │ │
│  ├─────────────────────────────────────────────┤ │
│  │              Router (React Router)          │ │
│  ├─────────────────────────────────────────────┤ │
│  │              Layouts                        │ │
│  │  Guest │ Auth │ Admin │ HR │ Manager │ Emp  │ │
│  ├─────────────────────────────────────────────┤ │
│  │              Pages                          │ │
│  ├─────────────────────────────────────────────┤ │
│  │              Components (UI)                │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ┌────────────┐ ┌──────────┐ ┌────────────────┐ │
│  │   Stores   │ │ Services │ │      API       │ │
│  │  (Zustand) │ │ (Logic)  │ │  (Supabase)    │ │
│  └────────────┘ └──────────┘ └────────────────┘ │
└─────────────────────────────────────────────────┘
```

---

## 🌿 Branch Strategy

| Branch      | Purpose                                     |
| ----------- | ------------------------------------------- |
| `main`      | Production-ready foundation                 |
| `develop`   | Integration branch for features             |
| `feature/*` | Individual feature branches                 |
| `bugfix/*`  | Bug fix branches                            |
| `release/*` | Release preparation                         |
| `hotfix/*`  | Production hotfixes                         |

### Workflow

1. Create feature branch from `develop`
2. Implement changes
3. Open PR to `develop`
4. Code review + CI checks
5. Merge to `develop`
6. When ready, merge `develop` → `main`

---

## 📏 Coding Standards

### General

- **TypeScript**: Strict mode enabled. No `any` types (warning level).
- **Components**: Functional components only. Use `forwardRef` when needed.
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files.
- **Imports**: Use absolute imports with `@/` alias.
- **Exports**: Use barrel exports (`index.ts`) for each module.

### Component Structure

```tsx
// 1. Imports
import { type FC } from 'react';
import { cn } from '@/lib/utils';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  className?: string;
}

// 3. Component
export function MyComponent({ title, className }: MyComponentProps) {
  return <div className={cn('base-classes', className)}>{title}</div>;
}
```

### State Management

- **Local state**: `useState` / `useReducer`
- **Global state**: Zustand stores
- **Server state**: TanStack Query
- **Form state**: React Hook Form

---

## 📦 Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server (port 3000)     |
| `npm run build`   | Type-check + production build            |
| `npm run preview` | Preview production build                 |
| `npm run lint`    | Run ESLint                               |
| `npm run lint:fix`| Run ESLint with auto-fix                 |
| `npm run format`  | Format code with Prettier                |
| `npm run format:check` | Check formatting                    |
| `npm run type-check`   | TypeScript type checking             |

---

## 🎨 Theme System

The platform supports **Light** and **Dark** themes with system preference detection.

- Theme is managed via Zustand (`useThemeStore`)
- CSS variables follow shadcn/ui conventions
- Toggle with `ThemeToggle` component

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_OPENAI_API_KEY=your-openai-key
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

---

## 📄 License

Private — All rights reserved.
