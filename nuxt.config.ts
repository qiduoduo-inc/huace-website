/*
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-09-03 19:59:23
 */
import { defineNuxtConfig, } from 'nuxt'
export default defineNuxtConfig({
  app: {
    head: {
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
          loadPaths: ['@/assets/styles'],
        },
      },
    },
  },
})
