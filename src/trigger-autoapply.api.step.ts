// src/trigger-autoapply.api.step.ts
import type { ApiRouteConfig, Handlers } from 'motia';

export const config: ApiRouteConfig = {
  name: 'TriggerAutoApply',
  type: 'api',
  path: '/api/autoapply/trigger',
  method: 'POST',
  description: 'Trigger full AI Auto-Apply flow',
  emits: ['autoapply.start'],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['TriggerAutoApply'] = async (_req, { emit, logger }) => {
  logger.info('AI Auto-Apply Flow Triggered via API');
  await emit({ topic: 'autoapply.start', data: {} });
  return { status: 200, body: { success: true, message: 'Flow started!' } };
};