// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: [
    '~/node_modules/@swisscom/sdx/dist/css/sdx.css',
    '~/node_modules/@swisscom/sdx/dist/css/webcomponents.css',
    '~/assets/css/main.css'
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('sdx-'),
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, '.'),
      },
    },
  },
})
