// src/submit-application.event.step.ts
import type { EventConfig, Handlers } from 'motia';

export const config: EventConfig = {
  name: 'SubmitApplicationIfMatch',
  type: 'event',
  subscribes: ['match.found'],
  emits: ['application.submitted'],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['SubmitApplicationIfMatch'] = async (payload, { logger, emit }) => {
  const { job, user, score } = payload;

  logger.info(`🎯 SUBMITTED: ${user.name} → ${job.title} (Score: ${score}/100)`);

  await emit({ topic: 'application.submitted', data: { job, user, score } });
};