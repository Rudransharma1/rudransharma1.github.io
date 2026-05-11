# Portfolio 

This is a portfolio project built with React, Vite, and TanStack Start, deployed on GitHub Pages.

## Setup & Development

### Prerequisites
- Bun package manager ([install here](https://bun.sh))
- Node.js 18+ (optional, Bun can handle it)

### Installation
```bash
bun install
```

### Development Server
```bash
bun run dev
```
The app will run at `http://localhost:5173`

### Build for Production
```bash
bun run build
```
This creates a static build in the `dist/` folder, ready for GitHub Pages.

### Preview Build
```bash
bun run preview
```

## Deployment

The project automatically deploys to GitHub Pages on every push to the `main` branch using GitHub Actions.

**Live URL**: https://rudransh-portfolio.rudransharma2022.workers.dev/

### Manual Deployment (if needed)
1. Ensure `vite.config.ts` has the correct `base` path: `/rudransh-portfolio/`
2. Run `bun run build`
3. GitHub Actions will automatically deploy the `dist/` folder

## Project Structure
- `src/` - React components and pages
  - `components/` - Reusable UI components
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `routes/` - TanStack Router routes
- `dist/` - Production build (auto-generated)

## Technologies
- React 18+
- Vite
- TypeScript
- Tailwind CSS
- Radix UI
- TanStack Router & Query
- TanStack Start

## Contributing
Feel free to modify and customize this portfolio!

## License
See LICENSE file for details.
