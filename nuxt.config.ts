import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: '/test/' // if you want to set a base URL for your application
  },
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@nuxt/image', '@element-plus/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  elementPlus: {
    /** Options setting */
    importStyle: 'scss'
  }
})
