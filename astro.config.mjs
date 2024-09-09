import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import Keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), markdoc(), Keystatic()],
  output: 'hybrid'
});