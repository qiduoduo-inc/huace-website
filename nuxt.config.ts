/*
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-09-03 19:59:23
 */
import { defineNuxtConfig } from 'nuxt'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [viteCommonjs()],
  },
  app: {
    head: {
      meta: [
        {
          // name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ],
      script: [
      ],
      link: [
        { rel: 'stylesheet', href: "./assets/styles/font.scss" },
        { rel: 'stylesheet', href: "./assets/styles/index.scss" },
        { rel: 'stylesheet', href: "./assets/styles/main.scss" },
      ],
      noscript: [
        { children: 'Javascript is required' }
      ],
    },
    // buildAssetsDir: '/assets/', // 打包后资源文件存放文件夹
  },
  build: {
    transpile: ['swiper'],
  }
})
