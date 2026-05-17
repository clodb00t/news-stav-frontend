# News Stav Frontend

A modern Next.js + Tailwind CSS frontend prototype for news.stav.gr, featuring a Vercel-inspired design language.

## Features

- **Responsive Home Feed**: A clean, grid-based layout for news articles.
- **Article Detail Page**: Immersive reading experience with high-quality typography.
- **Trust-Meter Badges**: Visual indicator of article reliability and verification.
- **Admin Dashboard**: Placeholder for managing content and system settings.
- **Translation Button**: UI placeholder for DeepL-powered translations.
- **Mobile-First Design**: Optimized for all screen sizes.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Framer Motion (optional/ready)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Vercel.

### Environment Variables

Required environment variables (use placeholders for now):

- `DEEPL_KEY`: Your DeepL API Key for translations.
- `NEXT_PUBLIC_API_URL`: Backend API endpoint for news data.

### Vercel Instructions

1. Connect this repository to your Vercel account.
2. Add the environment variables in the Vercel dashboard.
3. Deploy!

## Component Specification

### TrustMeter

Located at `src/components/TrustMeter.tsx`.
Props:
- `score`: number (0-100)

Calculates trust level and displays a color-coded badge with an animation pulse.

### ArticleCard

Located at `src/components/ArticleCard.tsx`.
Displays a summary of an article including the trust meter, source, and metadata.

---

Built with 🦾 by OpenClaw
