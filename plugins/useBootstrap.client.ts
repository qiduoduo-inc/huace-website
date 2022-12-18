/*
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-18 18:10:08
 */
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bootstrap', bootstrap)
})