# pudim.dev 🍮

![CI](https://github.com/luismr/pudim-dev-calculator/workflows/CI%20-%20Build,%20Test%20%26%20Coverage/badge.svg)
![Docker](https://github.com/luismr/pudim-dev-calculator/workflows/Docker%20Build%20%26%20Push/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

🍮 Calculate your Dev Pudim Score! Next.js app that analyzes GitHub profiles and ranks developers with dessert-themed titles from "Legendary Flan" to "Underbaked". Built with Next.js 16, React 19, Tailwind & shadcn/ui. Inspired by github-readme-stats. Gamifies developer stats into a sweet scoring system. Check your flavor!

## 🚀 Quick Start

**Check your score:**
```
https://pudim.dev/calculator/YOUR_GITHUB_USERNAME
```

**Embed your badge:**
```markdown
[![Pudim Score](https://pudim.dev/badge/YOUR_GITHUB_USERNAME)](https://pudim.dev/calculator/YOUR_GITHUB_USERNAME)
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username!

## 🎯 What is this?

**pudim.dev** is a fun, interactive web application that gamifies your GitHub profile statistics into a delicious "Pudim Score" (pudding score). Enter any GitHub username and discover their developer flavor profile with ranks ranging from "Legendary Flan" 🍮✨ to "Underbaked" 🥚.

The app analyzes public GitHub data including:
- ⭐ Total stars across all repositories
- 👥 Follower count
- 📦 Number of public repositories
- 💻 Programming language distribution (your "pudim flavors")

Based on these metrics, users receive a personalized rank, score, and dessert-themed title that celebrates their open-source contributions.

## ✨ Features

### 🔗 Direct Calculator Links
Share your Pudim Score with a personalized URL that instantly displays your GitHub stats:

```
https://pudim.dev/calculator/[username]
```

**Example:** [https://pudim.dev/calculator/luismr](https://pudim.dev/calculator/luismr)

Simply replace `[username]` with any GitHub username. The calculator page loads automatically with all the user's stats, rank, and "pudim flavors" (programming languages) beautifully displayed!

**Use Cases:**
- Share your developer profile on social media
- Include in your portfolio or website
- Show off your open-source contributions
- Compare scores with friends and colleagues

---

### 🖼️ Embeddable Badge
Generate a beautiful, dynamic badge image of your Pudim Score to embed in your GitHub profile, documentation, or anywhere else!

**Direct Image URL:**
```
https://pudim.dev/badge/[username]
```

**In Markdown (Perfect for README files):**
```markdown
![Pudim Score](https://pudim.dev/badge/luismr)
```

**As a Clickable Badge (Recommended):**
```markdown
[![Pudim Score](https://pudim.dev/badge/luismr)](https://pudim.dev/calculator/luismr)
```

**In HTML:**
```html
<a href="https://pudim.dev/calculator/luismr">
  <img src="https://pudim.dev/badge/luismr" alt="Pudim Score" />
</a>
```

**Badge Features:**
- 🖼️ **Your GitHub avatar** - Personal branding
- 👤 **Username and member since date** - Show how long you've been coding
- 🏆 **Rank and title** - Your prestigious dessert designation (e.g., "Master Pudim")
- 📊 **Key Stats** - Total stars, followers, and public repos at a glance
- 🎨 **Top 5 Programming Languages** - Your "Pudim Flavors" with color-coded bars
- 🔄 **Real-time Updates** - Badge refreshes automatically when your stats change
- 📱 **Responsive Design** - Looks great on any device or platform

**Pro Tips:**
- Add the clickable version to your GitHub profile README for maximum engagement
- Use it in project documentation to showcase maintainer credibility
- Include in your resume or portfolio as a visual stats summary
- Badge dimensions: 800x600px (optimized for most platforms)

---

### 📊 Interactive Rank Information
Click the info icon (ⓘ) next to your rank title to open an interactive modal showing:

- 📋 **Complete Ranking System** - All 6 tiers from "Legendary Flan" to "Underbaked"
- 🧮 **Score Calculation Formula** - Transparent algorithm breakdown
- 🎯 **Threshold Details** - See exactly what score you need for the next rank
- 💡 **Rank Descriptions** - Fun, dessert-themed explanations for each tier
- 📈 **Your Progress** - See how close you are to leveling up

This feature helps you understand how to improve your score and reach the next delicious rank!

## 🧮 How is the Score Calculated?

The Pudim Score uses a **weighted algorithm** inspired by [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) that evaluates your GitHub profile across multiple dimensions:

### The Formula

```typescript
score = (followers × 0.5) + (total_stars × 2) + (public_repos × 1)
```

### Understanding the Weights

Each metric has a carefully chosen weight that reflects its importance in the open-source community:

#### ⭐ **Total Stars (×2)** - Highest Weight
- **Why it matters**: Stars indicate that your projects are valuable, useful, and appreciated by the community
- **Impact**: Each star contributes 2 points to your score
- **Example**: 100 stars = 200 points
- **Focus on**: Creating quality projects that solve real problems

#### 📦 **Public Repositories (×1)** - Medium Weight
- **Why it matters**: Shows productivity, consistency, and willingness to share your work
- **Impact**: Each public repo contributes 1 point to your score
- **Example**: 50 repos = 50 points
- **Focus on**: Maintaining active projects and experimenting with new technologies

#### 👥 **Followers (×0.5)** - Lower Weight
- **Why it matters**: Represents community recognition and influence
- **Impact**: Each follower contributes 0.5 points to your score
- **Example**: 200 followers = 100 points
- **Focus on**: Building relationships and sharing knowledge

### Example Calculation

Let's calculate the score for a developer with:
- 👥 150 followers
- ⭐ 250 total stars across all repositories
- 📦 40 public repositories

```
score = (150 × 0.5) + (250 × 2) + (40 × 1)
score = 75 + 500 + 40
score = 615
Rank = S (Master Pudim 🍮)
```

---

### 🏆 Rank Thresholds

Your calculated score determines your rank and delicious title:

| Score | Rank | Title | Description | What it means |
|-------|------|-------|-------------|---------------|
| **1000+** | **S+** | **Legendary Flan 🍮✨** | The texture is perfect, the caramel is divine. You are a coding god! | Elite open-source contributor with massive impact |
| **500-999** | **S** | **Master Pudim 🍮** | A delicious result. Michelin star worthy. | Highly accomplished developer with strong community presence |
| **200-499** | **A** | **Tasty Pudding 😋** | Everyone wants a slice. Great job! | Established developer with solid contributions |
| **100-199** | **B** | **Sweet Treat 🍬** | Solid and dependable. A good dessert. | Active contributor building their portfolio |
| **50-99** | **C** | **Homemade 🏠** | Made with love, but room for improvement. | Emerging developer on the journey |
| **0-49** | **D** | **Underbaked 🥚** | Needs a bit more time in the oven. | Just getting started - keep cooking! |

### 💡 Tips to Improve Your Score

Want to level up your Pudim Score? Focus on:

1. **Quality over Quantity** (Stars)
   - Build projects that solve real problems
   - Write good documentation and READMEs
   - Engage with users and address issues
   - Promote your projects appropriately

2. **Consistent Activity** (Public Repos)
   - Share your learning journey publicly
   - Contribute to open-source projects
   - Create small utility libraries
   - Maintain your existing projects

3. **Community Engagement** (Followers)
   - Help others in discussions and issues
   - Share knowledge through blog posts or tutorials
   - Contribute to popular projects
   - Be active and helpful in the community

Remember: **The Pudim Score is just for fun!** 🍮 The real value is in the learning, building, and sharing that happens along the way.

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

## 🔄 CI/CD with GitHub Actions

This project uses GitHub Actions for continuous integration and deployment.

### Automated Workflows

**1. CI - Build, Test & Coverage** (`.github/workflows/ci.yml`)

Runs on every push and pull request to `main` and `develop` branches:
- ✅ Installs dependencies
- ✅ Runs ESLint
- ✅ Executes all tests (50 tests)
- ✅ Generates coverage reports
- ✅ Posts coverage comment on PRs
- ✅ Uploads coverage to Codecov
- ✅ Builds Next.js application
- ✅ Uploads build artifacts

**2. Docker Build & Push** (`.github/workflows/docker.yml`)

Builds multi-architecture Docker images:
- 🐳 Supports **ARM64** and **AMD64** architectures
- 📦 Pushes to GitHub Container Registry (ghcr.io)
- 🏷️ Auto-generates semantic tags
- 🔐 Includes build attestation
- ⚡ Uses layer caching for faster builds

**Triggers:**
- Push to `main` branch
- Version tags (`v*.*.*`)
- Pull requests (build only, no push)
- Manual workflow dispatch

**3. Release** (`.github/workflows/release.yml`)

Automated releases on version tags:
- 📝 Generates changelog from commits
- 🎉 Creates GitHub release
- 🐳 Docker images tagged with version

### Using the Docker Images

**Pull the latest image:**
```bash
docker pull ghcr.io/luismr/pudim-dev-calculator:latest
```

**Pull specific version:**
```bash
docker pull ghcr.io/luismr/pudim-dev-calculator:v1.0.0
```

**Pull for specific architecture:**
```bash
# ARM64 (Apple Silicon, ARM servers)
docker pull --platform linux/arm64 ghcr.io/luismr/pudim-dev-calculator:latest

# AMD64 (Intel/AMD processors)
docker pull --platform linux/amd64 ghcr.io/luismr/pudim-dev-calculator:latest
```

### Setting Up GitHub Actions

**Required Secrets:**
- `GITHUB_TOKEN` - Automatically provided by GitHub
- `CODECOV_TOKEN` - (Optional) For Codecov integration

**Enable GitHub Container Registry:**
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Save changes

### Creating a Release

```bash
# Tag a new version
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

This will trigger:
- Automated release creation
- Multi-arch Docker image build and push
- Image tagged as `v1.0.0`, `v1.0`, `v1`, and `latest`

## 🐳 Docker Deployment

The application is fully containerized and ready for Docker deployment with **multi-architecture support** (ARM64 & AMD64).

### Prerequisites

- Docker installed on your system ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose (optional, included with Docker Desktop)

### Building the Docker Image

Build the production-ready Docker image:

```bash
docker build -t pudim-dev:latest .
```

The Dockerfile uses a multi-stage build process to:
- Install dependencies in an isolated stage
- Build the Next.js application
- Create a minimal production image (~150MB)
- Run as non-root user for security
- Include health checks for monitoring

### Running with Docker

**Option 1: Using Docker directly**

```bash
docker run -d \
  --name pudim-dev \
  -p 3000:3000 \
  --restart unless-stopped \
  pudim-dev:latest
```

**Option 2: Using Docker Compose (Recommended)**

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Accessing the Application

Once running, access the application at:
- **Local**: [http://localhost:3000](http://localhost:3000)
- **Health Check**: [http://localhost:3000/api/health](http://localhost:3000/api/health)

### Docker Commands Reference

```bash
# Build the image
docker build -t pudim-dev:latest .

# Run the container
docker run -d -p 3000:3000 --name pudim-dev pudim-dev:latest

# View logs
docker logs -f pudim-dev

# Stop the container
docker stop pudim-dev

# Remove the container
docker rm pudim-dev

# Check health status
docker inspect --format='{{json .State.Health}}' pudim-dev

# Access container shell (for debugging)
docker exec -it pudim-dev sh
```

### Environment Variables

The Docker image supports the following environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `production` | Node environment |
| `PORT` | `3000` | Application port |
| `HOSTNAME` | `0.0.0.0` | Bind address |
| `NEXT_TELEMETRY_DISABLED` | `1` | Disable Next.js telemetry |

Example with custom environment variables:

```bash
docker run -d \
  --name pudim-dev \
  -p 8080:3000 \
  -e PORT=3000 \
  pudim-dev:latest
```

### Docker Image Details

- **Base Image**: `node:20-alpine` (lightweight Alpine Linux)
- **Image Size**: ~407MB (optimized with multi-stage build)
- **Architectures**: linux/amd64, linux/arm64
- **Security**: Runs as non-root user (nextjs:nodejs)
- **Health Check**: Built-in health endpoint monitoring
- **Standalone Mode**: Next.js standalone output for minimal dependencies
- **Registry**: GitHub Container Registry (ghcr.io)

### Multi-Architecture Build

The Dockerfile supports building for multiple architectures:

**Using Docker Buildx (local build):**
```bash
# Setup buildx (one time)
docker buildx create --name multiarch --use
docker buildx inspect --bootstrap

# Build for both architectures
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t pudim-dev:latest \
  --load \
  .
```

**GitHub Actions handles this automatically!** 🚀

### Production Deployment

For production deployments, consider:

1. **Using GitHub Container Registry** (automated via CI/CD):
   - Multi-arch images automatically built and pushed
   - Semantic versioning with tags
   - No manual intervention needed

2. **Using orchestration platforms**:
   - Docker Swarm
   - Kubernetes (see Kubernetes section)
   - AWS ECS
   - Google Cloud Run
   - Azure Container Instances
   - Railway, Render, Fly.io

3. **Adding reverse proxy** (nginx, Traefik, Caddy) for:
   - SSL/TLS termination
   - Load balancing
   - Additional security headers

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/react) for comprehensive unit testing.

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with coverage report
npm run test:coverage

# Run tests with UI (interactive)
npm run test:ui
```

### Test Coverage

The test suite covers:
- ✅ **Components**: Navbar, Footer, PudimScore (with full user interactions)
- ✅ **Pages**: Home page, Calculator page
- ✅ **API Routes**: Health check endpoint
- ✅ **Actions**: GitHub stats fetching with various scenarios
- ✅ **Utilities**: Class name merging utility

### Writing Tests

Tests are located next to the code they test in `__tests__` directories:

```
src/
├── components/
│   ├── __tests__/
│   │   ├── Navbar.test.tsx
│   │   ├── Footer.test.tsx
│   │   └── PudimScore.test.tsx
│   └── ...
├── app/
│   ├── __tests__/
│   │   ├── page.test.tsx
│   │   └── actions.test.ts
│   └── ...
└── lib/
    ├── __tests__/
    │   └── utils.test.ts
    └── ...
```

### Test Configuration

- **Framework**: Vitest with jsdom environment
- **React Testing**: @testing-library/react
- **Assertions**: @testing-library/jest-dom matchers
- **Configuration**: `vitest.config.ts`

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
├── public/                      # Static assets
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts     # Health check endpoint
│   │   ├── badge/
│   │   │   └── [username]/
│   │   │       └── route.tsx    # Badge image generation
│   │   ├── calculator/
│   │   │   └── [username]/
│   │   │       └── page.tsx     # Direct calculator page
│   │   ├── actions.ts           # Server actions (GitHub API calls)
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx       # Rank info modal
│   │   │   ├── input.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── separator.tsx
│   │   │   └── sheet.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── PudimScore.tsx       # Main calculator component
│   └── lib/                     # Utilities
│       └── utils.ts
├── .dockerignore                # Docker ignore patterns
├── Dockerfile                   # Docker production build
├── docker-compose.yml           # Docker Compose configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies
└── tsconfig.json                # TypeScript config
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Anurag Hazra](https://github.com/anuraghazra) for the original github-readme-stats concept
- The [Next.js](https://nextjs.org/) team for an amazing framework
- The [shadcn](https://ui.shadcn.com/) for beautiful UI components
- The open-source community for continuous inspiration

## 🔗 Links

- **Live Demo**: [pudim.dev](https://pudim.dev)
- **GitHub**: [luismr/pudim-dev-calculator](https://github.com/luismr/pudim-dev-calculator)
- **Example Calculator**: [pudim.dev/calculator/luismr](https://pudim.dev/calculator/luismr)
- **Example Badge**: [pudim.dev/badge/luismr](https://pudim.dev/badge/luismr)

---

Made with 💜 and 🍮 by the pudim.dev community
