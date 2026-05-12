# Contributing to NexusAI

## Setup
```bash
npm install && cp .env.example .env && npm run dev
```

## Workflow
1. Branch: `git checkout -b feat/your-feature`
2. Write TypeScript with strict types
3. Add tests in `tests/`
4. Open PR with description

## Commit Convention
```
feat(agent): add cron schedule builder
feat(runner): implement retry with exponential backoff
fix: resolve live log WebSocket disconnect
test: add agent execution unit tests
```
