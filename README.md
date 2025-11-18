# pudim.dev 🍮

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

🍮 Calculate your Dev Pudim Score! Next.js app that analyzes GitHub profiles and ranks developers with dessert-themed titles from "Legendary Flan" to "Uncooked Mix". Built with Next.js 16, React 19, Tailwind & shadcn/ui. Inspired by github-readme-stats. Gamifies developer stats into a sweet scoring system. Check your flavor!

## 🎯 What is this?

**pudim.dev** is a fun, interactive web application that gamifies your GitHub profile statistics into a delicious "Pudim Score" (pudding score). Enter any GitHub username and discover their developer flavor profile with ranks ranging from "Legendary Flan" 🍮✨ to "Underbaked" 🥚.

The app analyzes public GitHub data including:
- ⭐ Total stars across all repositories
- 👥 Follower count
- 📦 Number of public repositories
- 💻 Programming language distribution (your "pudim flavors")

Based on these metrics, users receive a personalized rank, score, and dessert-themed title that celebrates their open-source contributions.

## 🧮 How is the Score Calculated?

The Pudim Score uses a weighted algorithm inspired by [github-readme-stats](https://github.com/anuraghazra/github-readme-stats):

```typescript
score = (followers × 0.5) + (total_stars × 2) + (public_repos × 1)
```

### Rank Thresholds

| Score | Rank | Title | Description |
|-------|------|-------|-------------|
| 1000+ | S+ | Legendary Flan 🍮✨ | The texture is perfect, the caramel is divine. You are a coding god! |
| 500-999 | S | Master Pudim 🍮 | A delicious result. Michelin star worthy. |
| 200-499 | A | Tasty Pudding 😋 | Everyone wants a slice. Great job! |
| 100-199 | B | Sweet Treat 🍬 | Solid and dependable. A good dessert. |
| 50-99 | C | Homemade 🏠 | Made with love, but room for improvement. |
| 0-49 | D | Underbaked 🥚 | Needs a bit more time in the oven. |

The score weighs stars most heavily (×2) as they indicate valuable contributions, followed by repository count (×1) for productivity, and followers (×0.5) for community recognition.

## 💡 Inspiration

This project is lovingly inspired by:

- **[github-readme-stats](https://github.com/anuraghazra/github-readme-stats)** by [@anuraghazra](https://github.com/anuraghazra) - The OG GitHub stats visualizer that sparked countless creative projects
- The **pudding/flan dessert culture** - Because developer profiles deserve to be as delightful as dessert! 🍮

We stand on the shoulders of giants and honor the open-source community that makes projects like this possible.

## 🛠️ Tech Stack

This project is built with modern web technologies:

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with improved performance
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### UI & Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Developer Experience
- **[ESLint 9](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone git@github.com:luismr/pudim-dev-calculator.git
cd pudim-dev-calculator
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the app in action!

The page will auto-reload when you make changes to the code.

## 🏗️ Build for Production

Build an optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🧪 Testing

Currently, this project doesn't have tests configured. Contributions for test setup are welcome!

To add testing, consider:
- [Vitest](https://vitest.dev/) for unit tests
- [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io/) for E2E tests
- [React Testing Library](https://testing-library.com/react) for component tests

## 🐳 Docker

### Building the Docker Image

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

Then build and run:

```bash
# Build the image
docker build -t pudim-dev .

# Run the container
docker run -p 3000:3000 pudim-dev
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Run with:

```bash
docker-compose up
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Fork and Submit Pull Requests

1. **Fork the repository**
   - Click the "Fork" button at the top right of this page

2. **Clone your fork**

```bash
git clone git@github.com:YOUR_USERNAME/pudim-dev-calculator.git
cd pudim-dev-calculator
```

3. **Add the upstream remote**

```bash
git remote add upstream git@github.com:luismr/pudim-dev-calculator.git
```

4. **Create a new branch**

```bash
git checkout -b feature/your-feature-name
```

5. **Make your changes**
   - Write clean, maintainable code
   - Follow the existing code style
   - Test your changes locally

6. **Commit your changes**

```bash
git add .
git commit -m "feat: add your feature description"
```

7. **Push to your fork**

```bash
git push origin feature/your-feature-name
```

8. **Open a Pull Request**
   - Go to the original repository
   - Click "Pull Requests" → "New Pull Request"
   - Select your fork and branch
   - Describe your changes clearly

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community

## 📝 Project Structure

```
pudim.dev/
├── public/             # Static assets
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── actions.ts # Server actions (GitHub API calls)
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── PudimScore.tsx
│   └── lib/           # Utilities
│       └── utils.ts
├── package.json       # Dependencies
└── tsconfig.json      # TypeScript config
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Anurag Hazra](https://github.com/anuraghazra) for the original github-readme-stats concept
- The [Next.js](https://nextjs.org/) team for an amazing framework
- The [shadcn](https://ui.shadcn.com/) for beautiful UI components
- The open-source community for continuous inspiration

## 🔗 Links

- **Live Demo**: [pudim.dev](https://pudim.dev) _(if deployed)_
- **GitHub**: [luismr/pudim-dev-calculator](https://github.com/luismr/pudim-dev-calculator)

---

Made with 💜 and 🍮 by the pudim.dev community
