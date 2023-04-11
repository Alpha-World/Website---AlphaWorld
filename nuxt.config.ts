// https://nuxt.com/docs/api/configuration/nuxt-config
// import {defineNuxtModule} from 'nuxt'

export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-swiper"],
  plugins: ["~/plugins/Carousel.ts"],
});
