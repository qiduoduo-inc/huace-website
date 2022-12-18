import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (process.client) {
    // function viewPort() {
    //   const meta = document.querySelector('meta[name="viewport"]');
    //   const scale =
    //     window.screen.width / 750 > 1 ? 1 : window.screen.width / 750;
    //   console.log(window.screen.width)
    //   meta.content = `width=device-width,initial-scale=${scale}`;
    // }
    // viewPort();
    // window.onresize = viewPort;
  }
});
