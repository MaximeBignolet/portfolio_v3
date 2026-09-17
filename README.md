# Portfolio Maxime Bignolet

A modern, premium, front-only portfolio built with Nuxt 3, TypeScript, and TailwindCSS.

## Features

- ⚡️ **Nuxt 3** - The Hybrid Vue Framework
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🌗 **Dark Mode** - System preference with toggle and persistence
- 📱 **Responsive** - Mobile-first design
- 🧩 **Components** - Modular and reusable UI components
- 📄 **Static Data** - Easy to update content via `data/*.ts` files

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Customization

### Content
All content is managed in the `data/` directory:
- `data/projects.ts`: Add or edit projects
- `data/experience.ts`: Update work experience
- `data/skills.ts`: Expertise groups and the stack line
- `data/links.ts`: Social links and personal info

### Images
Place your images in the `public/images/` directory.
- Avatar: `public/images/avatar.png`
- Projects: `public/images/*.png`

Update the paths in the data files accordingly.

### Colors & Fonts
- Color tokens are CSS variables in `assets/css/main.css` (light and dark), exposed to Tailwind in `tailwind.config.ts`
- Fonts are self-hosted in `public/fonts` (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono, SIL Open Font License) and declared in `assets/css/main.css`

## Deployment

This project is ready for deployment on Vercel, Netlify, or GitHub Pages.

### Vercel / Netlify
Connect your repository and it should auto-detect Nuxt.
Build command: `npm run build`
Output directory: `.output/public` (for static) or `.output` (for server)

### GitHub Pages
Run `npx nuxi generate` to create a static build in `.output/public`.
