# Renovate dependency updates

These are the configs for Renovate in this project.

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended", ":groupAllNonMajor", "group:monorepos"],
  "dependencyDashboard": true,

  "enabledManagers": ["pnpm", "nvm", "github-actions", "dockerfile"],

  "packageRules": [
    { // weekly Node bump
      "matchManagers": ["nvm"],
      "groupName": "node-runtime",
      "schedule": ["on saturday"]
    },
    { // keep the pnpm CLI itself current
      "matchPackageNames": ["pnpm"],
      "groupName": "pnpm-cli"
    },
    { // bundle regular library updates
      "matchManagers": ["pnpm"],
      "groupName": "pnpm-deps",
      "rangeStrategy": "update-lockfile"
    },
    { // GitHub Actions
      "matchManagers": ["github-actions"],
      "groupName": "gh-actions",
      "automerge": true
    }
  ],

  "lockFileMaintenance": { "enabled": true, "schedule": ["before 4am on monday"] },
  "prHourlyLimit": 5,
  "prConcurrentLimit": 20,
  "semanticCommits": "enabled",
  "rebaseWhen": "conflicted",
  "timezone": "America/New_York",
  "schedule": ["after 02:00 and before 06:00 every weekday"]
}
```
