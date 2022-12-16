import { defineNuxtPlugin } from '#app'

import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
import '@/assets/styles/index.scss'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd)
})
