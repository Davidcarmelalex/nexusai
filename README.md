<div align="center">

# **NexusAI**

### *Intelligent Multi-Agent Workflow Orchestrator*

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&style=flat-square)](https://nextjs.org)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg?style=flat-square)]()
[![Part of](https://img.shields.io/badge/Voltex%20Network-FCRI-purple.svg?style=flat-square)](https://fcri.science)

**One command center. Infinite intelligence.**

[Architecture](#architecture) · [Features](#features) · [Quick Start](#quick-start) · [Stack](#stack)

</div>

---

## What is NexusAI?

NexusAI is a centralized multi-agent workflow orchestrator — a command center where you design, deploy, and monitor AI agents that automate complex business operations end-to-end.

## Core Concept

```
You define:  What agents exist, what they do, when they run
NexusAI:     Executes, monitors, retries, logs, reports back
```

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

## Features

| Feature | Description |
|---------|-------------|
| **Agent Builder** | Define agents with triggers, schedules, and step sequences |
| **Live Execution** | Watch agent runs in real time with step-by-step logs |
| **Retry Logic** | Automatic retry with configurable backoff on failure |
| **Analytics** | Run history, success rates, performance trends |
| **Multi-Trigger** | Cron schedules, webhooks, manual, or event-driven |

## Stack

**Frontend:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4

**Backend:** Node.js · Express · Prisma · PostgreSQL · Bull (job queue)

**Infra:** Docker · Redis · WebSocket for live run streaming

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/nexusai
cd nexusai && npm install
cp .env.example .env
npm run dev
```

## Ecosystem

NexusAI is part of the **Voltex Network** — operated by [FCRI](https://fcri.science).

---

*NexusAI — Orchestrate intelligence.*
