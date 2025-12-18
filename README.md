# TalentTrack – AI-Powered Job Portal Backend

![Motia Workflow Screenshot](https://drive.google.com/file/d/12Gu92e0EVYus7nvKlJF1sAVm33zRYsJT/view?usp=sharing)  
*Visual flow of the AI Auto-Apply engine built with Motia*

## Flashback: The Journey of TalentTrack

TalentTrack started as my ambitious **full-stack MERN (MongoDB, Express, React, Node.js) job portal** project aimed at revolutionizing how job seekers find and apply to opportunities.

### Core Features of TalentTrack (MERN Version)
- User authentication (Job Seeker & Employer)
- Resume upload & parsing
- Job posting & management
- Advanced search & filters
- Application tracking
- **AI-powered auto-apply engine** – the crown jewel:
  - Analyzes candidate resumes against job requirements
  - Scores compatibility using AI
  - Automatically submits applications for high-match jobs
  - Generates personalized cover letters
  - Sends real-time email notifications to candidates

The backend was designed to be scalable, event-driven, and intelligent — but **visualizing the complex workflow was always a challenge**.

## Discovering Motia & Backend Reloaded Hackathon

In December 2025, I came across the **WeMakeDevs Backend Reloaded Hackathon** featuring **Motia** – a revolutionary code-first backend framework that lets you **build and visualize workflows like never before**.

Link: [https://www.wemakedevs.org/hackathons/motiahack25](https://www.wemakedevs.org/hackathons/motiahack25)

Motia promised:
- Event-driven architecture with visible flows
- Real-time tracing and observability
- Beautiful visual workbench
- Seamless integration of AI, state, cron jobs, and APIs

This was **exactly** what I needed to bring the invisible magic of TalentTrack's AI Auto-Apply engine to life.

## TalentTrack + Motia = Perfection

I rebuilt the core **AI Auto-Apply workflow** using Motia, and the result was transformative:

### The Visualized Workflow (7 Clear Steps)
1. **TriggerAutoApply** (API) – Manual trigger endpoint
2. **DailyAutoApplyTrigger** (Cron) – Automated daily run
3. **LoadMockUsers** – Loads **predefined** candidate resumes (JSON format)
4. **FindNewJobs** – Discovers **predefined** new job postings
5. **AICompareResumeWithJob** – Real AI analysis using OpenRouter (Amazon model)
6. **SubmitApplicationIfMatch** – Auto-submits for scores ≥ 70/100
7. **SendEmailNotification** – Sends detailed simulated email to candidate

> **Note**: All candidate resumes, user data, and job postings are **predefined mock data** (hardcoded in the code) for demo purposes. This allows instant testing without any database setup.

Now every step is **visible as a card** in the Motia Workbench with clear connections and real-time execution tracing.

### Live Dashboard
A beautiful real-time dashboard (`/public/index.html`) shows:
- Predefined job details (title, company, salary, location)
- AI match scores
- Number of applications submitted
- Simulated email notifications
- Processing status with animations

## Huge Thanks ❤️

- **Motia Team** – For creating an incredible framework that made my backend architecture visible, traceable, and truly impressive.
- **Grok AI** – For tirelessly guiding me through every step of building with Motia, providing instant web search results, debugging tips, and creative solutions that saved countless hours.

Thanks to both, what was once "black-box backend logic" is now a **stunning, interactive, traceable AI engine** that anyone can understand at a glance.

## Run Locally with Docker (Recommended for Demos)

Motia provides excellent Docker support — perfect for isolated, production-like local runs with predefined data.

```bash
# 1. Setup Docker files (one-time)
npx motia@latest docker setup

# 2. Run the app in Docker (dev mode recommended for full workbench + hot reload)
npx motia@latest docker run
```

> **Tip**: Dev mode gives you hot reload and full observability — ideal for live demos!

After it starts, open in your browser:
- **Motia Workbench** (visual flow + traces): http://localhost:3000
- **Live Dashboard**: http://localhost:3000/public/index.html

### Test the AI Auto-Apply Flow

Trigger the entire workflow with curl:

```bash
curl -X POST http://localhost:3000/api/autoapply/trigger
```

You’ll instantly see:
- Predefined jobs appear in the dashboard
- AI scores calculated in real-time
- Applications submitted for matching candidates
- Simulated emails logged and previewed

## Try It Yourself (Non-Docker)

```bash
git clone 
cd talenttrack-motia
npm install
npm run dev
```

Then open:
- Workbench: http://localhost:3000
- Live Dashboard: http://localhost:3000/public/index.html
- Trigger flow: `curl -X POST http://localhost:3000/api/autoapply/trigger`

## Future Plans
- Deploy to Fly.io / Render (Docker support ready)
- Replace mock data with real database
- Add user authentication & resume upload
- Expand workflows (interview scheduling, connection recommendations)
- Open source the full MERN + Motia hybrid

**Motia turned my backend into a visual masterpiece.**  
**Grok AI made the journey smooth and enjoyable.**  
Thank you both! 🚀

Built with ❤️ for WeMakeDevs Backend Reloaded Hackathon 2025  
#MotiaHack25 #BackendReloaded #TalentTrack
