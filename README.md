# portfolio-v5

Personal portfolio built with **Next.js 15**, **TypeScript 5**, **React 19**, **Tailwind CSS 4 + SCSS modules**, and **pnpm 10**. It showcases recent web-dev work while highlighting 20 + years of civil-CAD experience. MVP auto-deploys to Vercel; the same codebase ships via Docker to a DigitalOcean Droplet without changes.

## Quick start

    git clone https://github.com/<your-user>/portfolio-v5.git
    cd portfolio-v5
    corepack enable               # enables pnpm 10
    pnpm install
    pnpm dev                      # http://localhost:3000

### Production build

    pnpm build && pnpm start

## Scripts

| script          | purpose                                  |
| --------------- | ---------------------------------------- |
| `pnpm dev`      | Next.js dev server (Turbopack)           |
| `pnpm build`    | production build (`output:'standalone'`) |
| `pnpm start`    | run built app on port 3000               |
| `pnpm lint`     | ESLint check                             |
| `pnpm lint:fix` | ESLint auto-fix                          |
| `pnpm test`     | Vitest unit tests                        |
| `pnpm shadcn`   | add ShadCN/UI component                  |

## Tech stack

- Next.js 15 (`app/` router, standalone output)
- Tailwind CSS 4 for global tokens; SCSS modules for component styles
- ShadCN/UI generator for Radix-based components
- ESLint 9 (`@antfu/eslint-config`) – formatting via lint rules (no Prettier)
- Vitest 3 + @testing-library for unit tests
- Husky 9 + lint-staged 16 pre-commit hooks
- Optional Redis (Upstash / DO) for caching, rate-limit, sessions
- Renovate GitHub App – auto-updates deps, Node `.nvmrc`, pnpm CLI

## Environment variables

| key                    | description                           |
| ---------------------- | ------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | canonical site URL for SEO            |
| `REDIS_URL`            | redis:// connection string (optional) |
| `NODE_ENV`             | set to `production` in prod builds    |

## Folder structure

    app/               # Next.js route segments and server components
    components/        # shared React components
    styles/            # Tailwind globals + SCSS modules
    public/            # static assets
    lib/               # helpers (e.g. redis.ts)
    .github/workflows/ # CI pipelines (optional)
    Dockerfile         # prod container for Droplet / K8s / Fly

## CI/CD options

- **Vercel Git integration** – zero-config auto-deploy on push to `main`.
- **GitHub Actions (`.github/workflows/ci.yml`)** – run lint, tests, then call `vercel --prod`, or build & push the Docker image for Droplet hosting.

## Docker usage

Build and run locally:
docker build -t portfolio .
docker run -p 3000:3000 portfolio
Publish later: push to DigitalOcean Container Registry and `docker run` on the Droplet.

## License

MIT
