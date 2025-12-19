// src/load-mock-users.event.step.ts
import type { EventConfig, Handlers } from 'motia';
import type { MockUser } from './types/autoapply.js';

const MOCK_USERS: MockUser[] = [
  {
    id: 'u1',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    niches: ['Next.js', 'React'],
    experience: '5+ years building scalable Next.js apps',
    skills: 'Next.js 14, React, TypeScript, Tailwind, Node.js'
  },
  {
    id: 'u2',
    name: 'Alex Rivera',
    email: 'alex@example.com',
    niches: ['Node.js', 'PostgreSQL'],
    experience: '7+ years backend with Node.js and databases',
    skills: 'Node.js, Express, PostgreSQL, Redis, Docker, AWS'
  },
  {
    id: 'u3',
    name: 'Maya Patel',
    email: 'maya@example.com',
    niches: ['Python', 'Machine Learning'],
    experience: '4+ years in ML and NLP, published papers',
    skills: 'Python, PyTorch, Transformers, Hugging Face, NLP'
  },
  {
    id: 'u4',
    name: 'Jordan Kim',
    email: 'jordan@example.com',
    niches: ['React', 'TypeScript'],
    experience: '6+ years frontend with React and design systems',
    skills: 'React, TypeScript, Tailwind CSS, Framer Motion, Storybook'
  },
  {
    id: 'u5',
    name: 'Liam Brooks',
    email: 'liam@example.com',
    niches: ['DevOps', 'Kubernetes'],
    experience: '8+ years in infrastructure and cloud',
    skills: 'Kubernetes, Terraform, AWS, CI/CD, Prometheus'
  }
];

export const config: EventConfig = {
  name: 'LoadMockUsers',
  type: 'event',
  subscribes: ['autoapply.start'],
  emits: ['users.loaded'],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['LoadMockUsers'] = async (_input, { state, emit, logger }) => {
  logger.info(`📂 Loaded ${MOCK_USERS.length} diverse candidate profiles`);
  await state.set('mock-users', 'list', MOCK_USERS);
  await emit({ topic: 'users.loaded', data: {} });
};