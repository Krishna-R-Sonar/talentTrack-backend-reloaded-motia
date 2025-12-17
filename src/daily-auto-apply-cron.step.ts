// src/daily-auto-apply.cron.step.ts
import type { CronConfig, Handlers } from 'motia';

export const config: CronConfig = {
  name: 'DailyAutoApplyTrigger',
  type: 'cron',
  cron: '0 0 * * *',
  emits: ['autoapply.start'],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['DailyAutoApplyTrigger'] = async (_input, { emit, logger }) => {
  logger.info('Daily Auto-Apply Started');
  await emit({ topic: 'autoapply.start', data: {} });
};