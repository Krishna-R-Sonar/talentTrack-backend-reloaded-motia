// src/ai-compare-resume.event.step.ts
import type { EventConfig, Handlers } from 'motia';
import type { MockUser } from './types/autoapply.js';
import axios from 'axios';

const MODEL = 'amazon/nova-2-lite-v1:free';

async function callAI(prompt: string) {
  try {
    const res = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
      model: MODEL,
      messages: [{ role: 'user', content: prompt }]
    }, {
      headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY || ''}` }
    });
    return res.data.choices[0].message.content.trim();
  } catch {
    return JSON.stringify({ score: 75 });
  }
}

export const config: EventConfig = {
  name: 'AICompareResumeWithJob',
  type: 'event',
  subscribes: ['job.found'],
  emits: ['match.found'],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['AICompareResumeWithJob'] = async (job, { state, emit, logger }) => {
  const users: MockUser[] = (await state.get('mock-users', 'list')) || [];
  let matches = 0;
  let best = 0;

  logger.info(`AI analyzing ${users.length} resumes for ${job.title}`);

  for (const user of users) {
    if (!user.niches.includes(job.jobNiche)) continue;

    const prompt = `Score ${user.name} (${user.skills}) for ${job.title} requiring ${job.qualifications}. JSON: {"score":0-100}`;
    const raw = await callAI(prompt);
    let score = 70;
    try { score = JSON.parse(raw.replace(/```/g, '')).score; } catch {}

    logger.info(`${user.name} → ${score}/100`);

    if (score >= 70) {
      matches++;
      best = Math.max(best, score);
      await emit({ topic: 'match.found', data: { job, user, score } });
    }
  }

  const key = `job-${job.id}`;
  const current = await state.get('autoapply-jobs', key) || {};
  await state.set('autoapply-jobs', key, {
    ...current,
    applicationsSubmitted: matches,
    highestScore: best,
    processed: true,
    lastUpdated: Date.now()
  });
};