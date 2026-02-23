// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    server: {
      // For development with tunnels, uncomment and add your tunnel hosts:
      // allowedHosts: ['your-tunnel-host.tunnelmole.net']
      allowedHosts: []
    }
  }
});