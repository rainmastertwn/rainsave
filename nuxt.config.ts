import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // rain save deploy to github pages
    baseURL: process.env.NODE_ENV === 'production' ? '/rainsave/' : '/',
    buildAssetsDir: '/static/'
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
