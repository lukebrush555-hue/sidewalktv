# SidewalkTV

## Project Purpose

SidewalkTV is a media channel that interviews independent restaurant owners about the real numbers, decisions, and operating realities behind their businesses. This repository contains the SidewalkTV website, which supports the channel and creates focused ways for restaurant owners, experts, and relevant businesses to participate.

## Approved Documentation Sources

When external technical documentation is needed, use only the approved sources below.

Before introducing or configuring a project tool, consult its approved official installation and CI documentation.

- [Official Codex documentation](https://developers.openai.com/codex/) — Codex behavior, configuration, permissions, and `AGENTS.md`.
- [GitHub Docs](https://docs.github.com/) — repositories, authentication, branches, pull requests, Actions, and Pages.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) — HTML, CSS, JavaScript, accessibility, and browser behavior.
- [Playwright documentation](https://playwright.dev/docs/intro) — browser automation, UI testing, screenshots, and test configuration.

## GitHub Access

- For remote GitHub operations, use an authenticated GitHub connection already available in the current environment.
- In ChatGPT Work, prefer the connected GitHub app. Use the GitHub CLI for remote operations only when it is already authenticated.
- Do not begin or repair an authentication setup unless requested. If no available method has write access, report the blocker.
- Never store tokens, credentials, or other secrets in this repository.

## Browser Testing

- Use Playwright for browser rendering, screenshots, and UI checks.
- Run `npm ci` to install project dependencies. If the browser binary is missing, run `npx playwright install chromium`.
- If the browser download times out, set `PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000` and retry. If a temporary environment still receives a truncated archive, use the Browser QA workflow instead of repeatedly downloading it locally.
- Run `npm run test:e2e` to execute the browser checks.
