#!/bin/bash

# dev.sh - Development helper scripts

# Start development environment
dev_start() {
    echo "🚀 Starting development environment..."
    docker compose up
}

# Start in background
dev_start_bg() {
    echo "🚀 Starting development environment in background..."
    docker compose up -d
}

# Stop development environment
dev_stop() {
    echo "🛑 Stopping development environment..."
    docker compose down
}

# Rebuild development container
dev_rebuild() {
    echo "🔨 Rebuilding development container..."
    docker compose build
    docker compose up
}

# Run pnpm commands in container
dev_pnpm() {
    echo "📦 Running pnpm $@ in container..."
    docker compose exec app pnpm "$@"
}

# Install new dependencies
dev_install() {
    echo "📦 Installing dependencies..."
    docker compose exec app pnpm install
}

# Run tests
dev_test() {
    echo "🧪 Running tests..."
    docker compose exec app pnpm test
}

# View logs
dev_logs() {
    echo "📄 Viewing development logs..."
    docker compose logs -f app
}

# Clean up everything
dev_clean() {
    echo "🧹 Cleaning up development environment..."
    docker compose down -v
    docker system prune -f
}

# Show help
dev_help() {
    echo "📚 Available commands:"
    echo "  dev_start     - Start development environment"
    echo "  dev_start_bg  - Start development environment in background"
    echo "  dev_stop      - Stop development environment"
    echo "  dev_rebuild   - Rebuild and start development container"
    echo "  dev_pnpm      - Run pnpm commands in container"
    echo "  dev_install   - Install dependencies"
    echo "  dev_test      - Run tests"
    echo "  dev_logs      - View development logs"
    echo "  dev_clean     - Clean up everything"
    echo "  dev_help      - Show this help"
}

# If script is called with arguments, execute the function
if [ "$#" -gt 0 ]; then
    "$@"
else
    dev_help
fi