// src/find-new-jobs.event.step.ts
import type { EventConfig, Handlers } from 'motia';
import type { ProcessedJob } from './types/autoapply.js';

const MOCK_JOBS = [
  { id: 'j1', title: 'Senior Fullstack Engineer', companyName: 'Vercel', location: 'Remote', salary: '$180k–$240k', jobNiche: 'Next.js', qualifications: 'Next.js expert' },
  { id: 'j2', title: 'Backend Engineer', companyName: 'Supabase', location: 'Remote', salary: '$150k–$200k', jobNiche: 'Node.js', qualifications: 'Node.js expert' },
  { id: 'j3', title: 'ML Engineer', companyName: 'Hugging Face', location: 'Remote', salary: '$200k+', jobNiche: 'Python', qualifications: 'PyTorch expert' },
  { id: 'j4', title: 'Frontend Developer', companyName: 'Cal.com', location: 'Remote', salary: '$140k–$190k', jobNiche: 'React', qualifications: 'React expert' },
];

export const config: EventConfig = {
  name: 'FindNewJobs',
  type: 'event',
  subscribes: ['users.loaded'],
  emits: ['job.found'],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['FindNewJobs'] = async (_input, { state, emit, logger }) => {
  logger.info(`Discovered ${MOCK_JOBS.length} new jobs`);
  for (const job of MOCK_JOBS) {
    const key = `job-${job.id}`;
    await state.set('autoapply-jobs', key, {
      ...job,
      jobId: job.id,
      applicationsSubmitted: 0,
      highestScore: 0,
      processed: false,
      lastUpdated: Date.now(),
    } as ProcessedJob);
    await emit({ topic: 'job.found', data: job });
  }
};