import { defineNuxtConfig } from 'nuxt'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [viteCommonjs()],
  },
  app: {
  }
})
