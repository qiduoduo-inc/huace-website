import { defineNuxtPlugin } from '#app'
import 'animate.css'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    var WOW = require('wow.js')
    new WOW().init()
  }
})