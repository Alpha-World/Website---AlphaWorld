// https://nuxt.com/docs/api/configuration/nuxt-config
// import {defineNuxtModule} from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta:[{
        name:"robots",
        content:"Index"
      }]
    },
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-swiper"],
  // plugins: ["~/plugins/Carousel.ts"],
});
