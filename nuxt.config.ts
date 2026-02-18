// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-og-image',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    defaultLocale: 'pt-BR'
  },

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
})