// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@formkit/auto-animate/nuxt'
  ],

  i18n: {
    locales: [
      { code: 'th', name: 'ไทย', file: 'th.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'th',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  typescript: {
    tsConfig: {
      include: ['./ui-image-component.ts']
    }
  },

  app: {
    head: {
      title: 'Voyara — Premium Tour Experiences',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover extraordinary travel experiences with Voyara. Premium guided tours across Japan, Europe, and Asia with expert local guides.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
