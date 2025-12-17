// motia.config.ts
import { defineConfig } from '@motiadev/core';
import statesPlugin from '@motiadev/plugin-states/plugin';
import logsPlugin from '@motiadev/plugin-logs/plugin';
import observabilityPlugin from '@motiadev/plugin-observability/plugin';
import bullmqPlugin from '@motiadev/plugin-bullmq/plugin';

export default defineConfig({
  plugins: [observabilityPlugin, statesPlugin, logsPlugin, bullmqPlugin],
});