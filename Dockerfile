# FROM node:22-alpine AS development-dependencies-env
# COPY . /app
# WORKDIR /app
# RUN pnpm ci

# FROM node:22-alpine AS production-dependencies-env
# COPY ./package.json package-lock.json /app/
# WORKDIR /app
# RUN pnpm ci --omit=dev

# FROM node:22-alpine AS build-env
# COPY . /app/
# COPY --from=development-dependencies-env /app/node_modules /app/node_modules
# WORKDIR /app
# RUN pnpm run build

# FROM node:22-alpine
# COPY ./package.json package-lock.json /app/
# COPY --from=production-dependencies-env /app/node_modules /app/node_modules
# COPY --from=build-env /app/build /app/build
# WORKDIR /app
# CMD ["pnpm", "run", "start"]

# Use specific versions for reproducible builds
ARG NODE_VERSION=22.16.0
ARG ALPINE_VERSION=3.22

# Base stage
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base
RUN apk add --no-cache dumb-init
RUN corepack disable
RUN npm install -g pnpm
RUN pnpm --version
RUN addgroup -g 1001 -S nodejs && adduser -S reactjs -u 1001 -G nodejs
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN chown -R reactjs:nodejs /app
USER reactjs

# Development stage
FROM base AS dev
RUN pnpm --version
EXPOSE 5173
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node --eval "fetch('http://localhost:5173').then(() => process.exit(0)).catch(() => process.exit(1))" || exit 1
ENTRYPOINT ["dumb-init", "--"]
CMD ["pnpm", "run", "dev"]

# Production stage
FROM base AS production
RUN pnpm --version
ENV NODE_ENV=production
RUN pnpm run build
RUN pnpm install --frozen-lockfile --prod --ignore-scripts && pnpm store prune
EXPOSE 5173
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node --eval "fetch('http://localhost:5173').then(() => process.exit(0)).catch(() => process.exit(1))" || exit 1
ENTRYPOINT ["dumb-init", "--"]
CMD ["pnpm", "run", "start"]