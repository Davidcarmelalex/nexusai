# NexusAI

> One command center. Infinite intelligence.

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)]()
[![Part of](https://img.shields.io/badge/Voltex%20Network-FCRI-purple)](https://fcri.science)

**NexusAI** is a centralized multi-agent workflow orchestrator — a command center where you design, deploy, and monitor AI agents that automate complex business operations end-to-end.

---

## Core Concept

```
You define:  What agents exist, what they do, when they run
NexusAI:     Executes, monitors, retries, logs, reports back
```

---

## Architecture

```
nexusai/
├── src/app/
│   ├── page.tsx          Dashboard — agent overview & live runs
│   ├── agents/           Agent builder & management
│   ├── runs/             Execution history & logs
│   ├── workflows/        Multi-step workflow designer
│   └── analytics/        Performance and usage metrics
├── server/               Backend API (Node.js / Express)
│   ├── src/routes/       Agent CRUD, run execution, scheduling
│   ├── src/workers/      Background execution workers
│   └── prisma/           DB schema
└── tests/                Unit and integration tests
```

---

## Key Features

| Feature | Description |
|---------|-------------|
| Agent builder | Define agents with triggers, schedules, and step sequences |
| Live execution | Watch agent runs in real time with step-by-step logs |
| Retry logic | Automatic retry with configurable backoff on failure |
| Analytics | Run history, success rates, performance trends |
| Multi-trigger | Cron schedules, webhooks, manual, or event-driven |

---

## Stack

**Frontend:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4  
**Backend:** Node.js · Express · Prisma · PostgreSQL · Bull (job queue)  
**Infra:** Docker · Redis · WebSocket for live run streaming

---

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/nexusai
cd nexusai && npm install
cp .env.example .env
npm run dev
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Part of the [Voltex Network](https://fcri.science).
