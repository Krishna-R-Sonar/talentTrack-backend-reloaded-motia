// src/load-mock-users.event.step.ts
import type { EventConfig, Handlers } from 'motia';
import type { MockUser } from './types/autoapply.js';

const MOCK_USERS: MockUser[] = [
  { id: 'u1', name: 'Sarah Chen', email: 'sarah@example.com', niches: ['Next.js', 'React'], experience: '5+ years', skills: 'Next.js, React, TypeScript' },
  { id: 'u2', name: 'Alex Rivera', email: 'alex@example.com', niches: ['Node.js'], experience: '7+ years', skills: 'Node.js, PostgreSQL' },
  { id: 'u3', name: 'Maya Patel', email: 'maya@example.com', niches: ['Python'], experience: '4+ years', skills: 'PyTorch, NLP' },
  { id: 'u4', name: 'Jordan Kim', email: 'jordan@example.com', niches: ['React'], experience: '6+ years', skills: 'React, Tailwind' },
];

export const config: EventConfig = {
  name: 'LoadMockUsers',
  type: 'event',
  subscribes: ['autoapply.start'],
  emits: ['users.loaded'],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['LoadMockUsers'] = async (_input, { state, emit, logger }) => {
  logger.info(`Loaded ${MOCK_USERS.length} candidate resumes`);
  await state.set('mock-users', 'list', MOCK_USERS);
  await emit({ topic: 'users.loaded', data: {} });
};