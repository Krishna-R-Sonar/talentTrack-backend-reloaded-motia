// src/send-email-notification.event.step.ts
import type { EventConfig, Handlers } from 'motia';

export const config: EventConfig = {
  name: 'SendEmailNotification',
  type: 'event',
  subscribes: ['application.submitted'],
  emits: [],
  flows: ['auto-apply-flow'],
};

export const handler: Handlers['SendEmailNotification'] = async ({ job, user, score }, { logger }) => {
  const email = `Hi ${user.name},\n\nApplied to ${job.title} at ${job.companyName}\nSalary: ${job.salary}\nLocation: ${job.location}\nAI Score: ${score}/100\n\nBest,\nTalentTrack`;
  logger.info(`📧 Sent email to ${user.email}:\n${email}`);
};