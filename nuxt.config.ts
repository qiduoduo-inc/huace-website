/*
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-09-03 19:59:23
 */
import { defineNuxtConfig, } from 'nuxt'
export default defineNuxtConfig({
  app: {
    head: {
      // link: [
      //   { rel: 'stylesheet', href: "assets/styles/font.scss" },
      //   { rel: 'stylesheet', href: "assets/styles/index.scss" },
      //   { rel: 'stylesheet', href: "assets/styles/main.scss" },
      // ],
      noscript: [
        { children: 'Javascript is required' }
      ],
    },
  },
  build: {
    transpile: ['swiper'],
  },
  css: [
    '~/assets/styles/font.scss',
    '~/assets/styles/main.scss',
    'ant-design-vue/dist/antd.css',
    '~/assets/styles/index.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // font: '@import "~/assets/styles/font.scss"',
          // bootstrap: '@import "~/assets/styles/main.scss"',
          // index: '@import "~/assets/styles/index.scss"',
          loadPaths: ['@/assets/styles'],
        },
      },
    },
  },
})
