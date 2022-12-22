/*
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-09-14 14:13:25
 */
import { defineNuxtPlugin } from '#app'

import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
import '@/assets/styles/index.scss'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd)
})
