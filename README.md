# Berkeley Student Credit Union — Landing Page

A digital-first marketing website for the Berkeley Student Credit Union (BSCU), organized by the Haas Fintech Club at UC Berkeley. Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (Postgres) via `@supabase/supabase-js`
- **Fonts**: Inter + Sora (Google Fonts via `next/font/google`)
- **Deployment**: Vercel

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

Follow the steps below to configure your Supabase project.

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Supabase Setup

### Step 1: Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a new project.

### Step 2: Create the waitlist table

In the Supabase SQL Editor, run:

```sql
CREATE TABLE waitlist_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  affiliation TEXT NOT NULL,
  graduation_year TEXT,
  how_heard TEXT NOT NULL,
  interests TEXT[] NOT NULL,
  additional_notes TEXT
);
```

### Step 3: Get your API credentials

Go to **Project Settings → API** and copy:
- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **anon / public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Paste these into your `.env.local` file.

### Step 4: Configure Row Level Security (RLS)

In the Supabase Dashboard, go to **Authentication → Policies** (or **Table Editor → waitlist_submissions → RLS**).

Enable RLS on the table, then add the following policy to allow anonymous form submissions:

```sql
-- Allow public INSERT (waitlist form submissions)
CREATE POLICY "Allow anon insert"
ON waitlist_submissions
FOR INSERT
TO anon
WITH CHECK (true);
```

This permits unauthenticated users (the public) to insert rows, while blocking any reads or updates from the frontend.

### Step 5: (Optional) Verify submissions

To view submissions, go to **Table Editor → waitlist_submissions** in the Supabase Dashboard.

---

## Project Structure

```
bscu-landing/
├── app/
│   ├── globals.css          # Global styles, animations, custom CSS
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── AnimateOnScroll.tsx  # IntersectionObserver fade-up wrapper
│   ├── Navbar.tsx           # Fixed nav with scroll effect + mobile menu
│   ├── Hero.tsx             # Hero section with glow, headline, stats
│   ├── About.tsx            # About section (two-column)
│   ├── WhyBSCU.tsx          # Why BSCU (gradient band + 3 cards)
│   ├── WhoWereLookingFor.tsx # Four personas section
│   ├── WaitlistForm.tsx     # Waitlist form with Supabase INSERT
│   └── Footer.tsx           # Footer with disclaimer
├── lib/
│   └── supabase.ts          # Supabase client singleton
├── .env.local.example       # Template for environment variables
└── README.md
```

---

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the repo at [vercel.com](https://vercel.com).
3. Add environment variables in **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. No additional Vercel configuration needed.

---

## Development Notes

- Supabase responses are logged to the console in `development` mode.
- The form replaces itself with a confirmation message on successful submission.
- The graduation year field is conditionally shown only for student affiliations.
- All sections use `IntersectionObserver`-based fade-up animations (no Framer Motion dependency).
- The navigation bar transitions from transparent to a blurred dark background on scroll.
- Mobile menu slides in from the right with a backdrop overlay.
