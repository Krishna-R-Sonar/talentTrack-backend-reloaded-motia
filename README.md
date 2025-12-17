# IncidentFlow – Automated Incident Response Backend

**Built with Motia for Backend Reloaded Hackathon**

> Unified incident management: PagerDuty-style automation using ONE backend primitive.

## Problem
Production incidents create chaos:
- Alerts scattered across tools
- Manual triage & root cause analysis
- No unified timeline or realtime visibility

## Solution
IncidentFlow automates the entire incident lifecycle using Motia's Steps:

1. Alert ingestion (API)
2. Durable workflow orchestration
3. Automated diagnosis (Job)
4. AI-powered root cause summary (Gemini 1.5 Flash)
5. Realtime streaming updates
6. Built-in state & observability

## Motia Feature Usage
| Feature            | Used For                              |
|--------------------|---------------------------------------|
| API Step           | `/alert` webhook ingestion            |
| Durable Workflow   | Incident lifecycle orchestration      |
| Background Job     | Automated diagnosis with delays       |
| AI Agent Step      | Gemini root cause analysis            |
| State Management   | Persistent incident data              |
| Streaming          | Live dashboard updates                |
| Observability      | Full traces in Motia Workbench        |

## Demo
1. Send alert → watch workflow execute
2. See state transitions + AI summary
3. Live dashboard receives realtime updates

[Video link here after recording]

## Setup
```bash
npx motia@latest create incidentflow
cd incidentflow
npm install uuid @google/generative-ai
# Add GEMINI_API_KEY to .env
npx motia dev
```

## Learning Journey
First deep dive into Motia — amazed how one primitive handles APIs → workflows → AI → streaming without any extra config.

Built in 5 days. Ready for production.

#BackendReloaded @motia_dev 🚀
