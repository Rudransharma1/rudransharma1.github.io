# Rudransh Sharma — Engineering Intelligence Through Data

> **Data & BI Analyst | AI Systems | Business Intelligence**  
> 🌐 [rudransh-portfolio.rudransharma2022.workers.dev](https://rudransh-portfolio.rudransharma2022.workers.dev)

---

## 👤 About

Portfolio of **Rudransh Sharma** — a Data & BI Analyst with 2+ years building dashboards, predictive models, and AI-driven analytics systems that turn messy data into executive decisions.

- 🏢 Currently @ **Glentel Inc.** — risk-based reporting at scale
- 🎓 **Humber College** — Applied AI & Data Analytics
- 📍 Available for analytics, BI, and AI engineering roles

---

## ✨ Features

- **Terminal-inspired UI** — dark, data-dense aesthetic with live system animations
- **Analytics Command Center** — live model leaderboard, pipeline health, anomaly feed
- **Project case studies** — NLP Sentiment Analysis, Revenue Optimization, Budget Forecasting
- **Interactive skills radar** — visual capability map across SQL, Python, BI, ML, NLP
- **Responsive design** — mobile-first, built with Tailwind CSS v4
- **SSR-powered** — fast, server-rendered with TanStack Start on Cloudflare Workers

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) |
| Router | [TanStack Router](https://tanstack.com/router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 + Radix UI |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Build | Vite 7 |
| Runtime | Cloudflare Workers |
| Deployment | Cloudflare Workers via Wrangler |

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) package manager
- Node.js 18+

### Installation

```bash
git clone https://github.com/Rudransharma1/rudransharma1.github.io.git
cd rudransharma1.github.io
bun install
```

### Development

```bash
bun run dev
```

App runs at `http://localhost:5173`

### Build for Production

```bash
bun run build
```

Outputs to `dist/client/` (static assets) and `dist/server/` (Cloudflare Worker).

### Preview Production Build

```bash
bun run preview
```

---

## ☁️ Deployment

This project is deployed on **Cloudflare Workers** using Wrangler.

```bash
npm run build
npx wrangler deploy
```

**Live URL:** https://rudransh-portfolio.rudransharma2022.workers.dev

> ⚠️ This project uses **TanStack Start (SSR)** and requires a server runtime. It is **not** compatible with GitHub Pages static hosting — use Cloudflare Workers or a similar edge runtime.

---

## 📁 Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   │   └── ui/           # Radix-based shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── routes/           # TanStack Router file-based routes
├── dist/
│   ├── client/           # Static assets (JS, CSS)
│   └── server/           # Cloudflare Worker bundle
├── public/               # Static files
├── vite.config.ts        # Vite + Cloudflare plugin config
├── wrangler.jsonc        # Cloudflare Workers config
└── package.json
```

---

## 📊 Portfolio Highlights

| Metric | Value |
|--------|-------|
| Records cleaned | 50,000+ |
| BI experience | 2+ years |
| Production dashboards | 12 |
| Report turnaround reduction | −42% |
| Forecast accuracy | 94.2% |
| Manual hours saved | −62% |

---

## 🧪 Featured Projects

### 🔵 Sentiment Analysis NLP System
Multi-class transformer pipeline for product reviews with real-time sentiment routing into Power BI.  
`Python` `HuggingFace` `FastAPI` `Power BI` — **92.4% F1 score**

### 🟢 Revenue Optimization Analytics
Cohort, elasticity, and channel-mix dashboard surfacing pricing opportunities.  
`SQL` `dbt` `Power BI` `Python` — **+18% ARPU lift**

### 🟡 Budget Forecasting System
Hybrid ARIMA + gradient-boosted forecaster for rolling 12-month departmental budgets.  
`Python` `Prophet` `XGBoost` `Tableau` — **94.2% accuracy**

---

## 📬 Contact

- 📧 [hello@rudransh.dev](mailto:hello@rudransh.dev)
- 💼 [LinkedIn](https://linkedin.com/in/rudransh-sharma)
- 🐙 [GitHub](https://github.com/Rudransharma1)

---

## 📄 License

See [LICENSE](./LICENSE) for details.

---

*Built with intent. © 2026 Rudransh Sharma*
