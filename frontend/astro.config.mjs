import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import qwikdev from '@qwikdev/astro';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    // ...
    integrations: [react(), tailwind(), qwikdev()],
    output: 'hybrid',
    adapter: node({
        mode: 'standalone',
    }),
});
