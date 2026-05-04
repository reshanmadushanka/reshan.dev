# reshan.dev — Architecture Plan (Updated)

## 🏷️ Pattern Names Used

| Pattern | What it means in plain English |
|---|---|
| **Service Layer** | One dedicated file per API topic (auth, projects, skills) |
| **Custom Hooks** | Reusable logic that any page can plug into |
| **TanStack Query** | Industry-standard library for server data fetching + caching |
| **Context + Provider** | Global memory for who is logged in |
| **AuthGuard** | A wrapper that blocks pages from unauthenticated users |

> These 5 patterns together are what most professional Next.js teams use in production (2024–2025).

---

## 📊 Data Flow (How Everything Connects)

```
┌─────────────────────────────────────────────┐
│           Page (e.g. login/page.tsx)        │
│   Uses a hook → doesn't call API directly   │
└──────────────────┬──────────────────────────┘
                   │ calls
                   ▼
┌─────────────────────────────────────────────┐
│         Custom Hook (useAuth.ts)            │
│   Handles loading, error, success states    │
└──────────────────┬──────────────────────────┘
                   │ calls
                   ▼
┌─────────────────────────────────────────────┐
│       Service File (auth.api.ts)            │
│   Just the typed API function, nothing else │
└──────────────────┬──────────────────────────┘
                   │ uses
                   ▼
┌─────────────────────────────────────────────┐
│       Base Client (client.ts)               │
│   Axios instance + token + error handling   │
└──────────────────┬──────────────────────────┘
                   │ HTTP request
                   ▼
        http://127.0.0.1:8000  (Python API)
```

---

## 📁 Full Folder Structure

> **Legend:** `✅ Done` · `🔨 Needs update` · `➕ To create`

```
reshan.dev/
│
├── 📁 lib/                              ← All shared non-UI logic
│   │
│   ├── 📁 api/                          ← SERVICE LAYER
│   │   ├── client.ts          ✅ Done   ← Axios base instance only
│   │   ├── auth.api.ts        ✅ Done   ← Login / logout functions
│   │   ├── projects.api.ts    ➕ Later  ← Projects CRUD functions
│   │   └── skills.api.ts      ➕ Later  ← Skills CRUD functions
│   │
│   ├── 📁 types/                        ← TYPESCRIPT TYPES (matches API schema)
│   │   ├── auth.types.ts      ✅ Done   ← AdminUser, LoginResponse
│   │   ├── project.types.ts   ➕ Later  ← Project, CreateProjectDto
│   │   └── skill.types.ts     ➕ Later  ← Skill, CreateSkillDto
│   │
│   ├── 📁 hooks/                        ← CUSTOM HOOKS (NEW - industry standard)
│   │   ├── useAuth.ts         ➕ Next   ← Login mutation, logout, user state
│   │   ├── useProjects.ts     ➕ Later  ← Fetch + mutate projects
│   │   └── useSkills.ts       ➕ Later  ← Fetch + mutate skills
│   │
│   ├── 📁 context/                      ← GLOBAL STATE
│   │   └── AdminContext.tsx   🔨 Update ← Fix AdminUser type (remove name/role)
│   │
│   └── utils.ts               ✅ Done   ← cn() helper
│
│
├── 📁 components/                       ← Reusable UI components
│   ├── 📁 admin/                        ← Admin-only components
│   │   ├── AuthGuard.tsx       ➕ Next  ← Blocks unauthenticated users
│   │   ├── AdminSidebar.tsx    ➕ Later ← Sidebar nav
│   │   └── AdminHeader.tsx     ➕ Later ← Top bar with logout
│   │
│   └── 📁 portfolio/                    ← Public portfolio components
│       ├── Hero.tsx            ✅ Done
│       ├── Skills.tsx          ✅ Done
│       └── RecentProjects.tsx  ✅ Done
│
│
├── 📁 app/                              ← Next.js pages (App Router)
│   │
│   ├── 📁 admin/
│   │   ├── layout.tsx          🔨 Update ← Add AdminProvider + AuthGuard here
│   │   ├── login/
│   │   │   └── page.tsx        🔨 Update ← Use useAuth hook instead of raw API call
│   │   ├── dashboard/
│   │   │   └── page.tsx        🔨 Update ← Remove localStorage logic (hook handles it)
│   │   ├── projects/           ➕ Later  ← Projects list + form pages
│   │   └── skills/             ➕ Later  ← Skills list + form pages
│   │
│   ├── page.tsx                ✅ Done   ← Public portfolio home
│   └── layout.tsx              ✅ Done   ← Root layout
│
│
└── .env.local                  ✅ Done   ← NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

---

## 🔜 Next Steps (In Order)

| Priority | Action | Files Involved |
|---|---|---|
| **1** | Fix `AdminContext` types | `lib/context/AdminContext.tsx` |
| **2** | Create `useAuth` hook | `lib/hooks/useAuth.ts` |
| **3** | Create `AuthGuard` component | `components/admin/AuthGuard.tsx` |
| **4** | Update `admin/layout.tsx` | Add `AdminProvider` + `AuthGuard` |
| **5** | Simplify `login/page.tsx` | Use `useAuth` hook |
| **6** | Simplify `dashboard/page.tsx` | Use `useAdmin` context |
| **7** *(optional)* | Add TanStack Query | For projects/skills data fetching later |

---

## 💡 Why TanStack Query? (Industry Standard)

Without it, every hook you write needs to manually handle:
- `loading` state
- `error` state
- Re-fetching on page focus
- Caching results

TanStack Query handles all of this automatically. It's used by companies like Vercel, Linear, and thousands of production apps.

Install command (for later, when you add projects/skills):
```bash
npm install @tanstack/react-query
```

