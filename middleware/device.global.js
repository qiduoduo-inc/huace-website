/*
 * @Author: 王鑫
 * @Description: 判断用户设备中间件
 * @Date: 2022-09-14 13:22:03
 */
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (process.client) {
    // function viewPort() {
    //   const meta = document.querySelector('meta[name="viewport"]');
    //   const scale =
    //     window.screen.width / 750 > 1 ? 1 : window.screen.width / 750;
    //   meta.content = `width=device-width,initial-scale=${scale}`;
    // }
    // viewPort();
    // window.onresize = viewPort;
  }
});
