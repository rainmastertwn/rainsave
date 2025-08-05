import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: '/test/' // if you want to set a base URL for your application
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()]
  }
})
